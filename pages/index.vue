<template>
  <div class="px-24 py-8">
    <div>
      <span>รายการผลงาน </span>
      <div
        class="outline outline-1 outline-slate-200 bg-[#fff] rounded-lg p-4 mt-4"
      >
        <div class="flex">
          <div class="items-center flex pr-4">
            <p>ค้นหา</p>
          </div>
          <div class="relative w-[200px]">
            <input
              type="text"
              id="simple-search"
              class="bg-[#fff] border border-gray-300 text-gray-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="ชื่อผลงาน"
              required
            />
          </div>
          <button
            type="button"
            class="text-white bg-[#9A33FE] hover:bg-[#7D2BCD] font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-2"
          >
            <img :src="SearchIcon" alt="Icon" class="h-[20px] w-[20px]" />
            <span class="sr-only">Search</span>
          </button>
          <button
            type="button"
            class="text-white bg-[#fff] hover:bg-gray-200 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-2 shadow"
          >
            <img :src="RefreshIcon" alt="Icon" class="h-[20px] w-[20px]" />
            <span class="sr-only">RefreshIcon</span>
          </button>
          <div class="ml-auto">
            <button
              type="button"
              class="text-black bg-[#fff] hover:bg-gray-200 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-2 shadow"
              @click="deleteArt()"
            >
              <img :src="TrashIcon" alt="Icon" class="h-[20px] w-[20px]" />
              <span>Delete</span>
            </button>
          </div>
        </div>

        <Datatable
          :headers="headers"
          :items="paginatedItems"
          @handleSelectedItems="handleSelectedItems"
        >
          <template v-slot:item.status="{ item }">
            <div class="flex justify-center">
              <img
                :src="item.status ? CheckboxIcon : ErrorboxIcon"
                alt="Icon"
                class="h-[20px] w-[20px] mr-2"
                :class="item.status ? 'text-green-500' : 'text-red-500'"
              />

              <span :class="item.status ? 'text-green-500' : 'text-red-500'">{{
                item.status ? "แสดง" : "ไม่แสดง"
              }}</span>
            </div>
          </template>
          <template v-slot:item.startDate="{ item }">
            <div v-if="item.status">
              {{ item.startDate }}
            </div>
            <div v-else>-</div>
          </template>
          <template v-slot:item.endDate="{ item }">
            <div v-if="item.status">
              {{ item.endDate }}
            </div>
            <div v-else>-</div>
          </template>
          <template v-slot:item.action="{ item }">
            <div class="">
              <nuxt-link
                :to="'detail/' + item.id"
                class="font-medium text-black hover:underline flex justify-center"
              >
                <img :src="EyeIcon" alt="Icon" class="h-[20px] w-[20px] mr-3" />
                รายละเอียด
              </nuxt-link>
            </div>
          </template>
        </Datatable>

        <div class="flex justify-between">
          <div class="px-8 flex">
            <div class="flex items-center pr-4">
              <span>pages size</span>
            </div>
            <div>
              <select
                id="countries"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div class="px-8">
            <nav class="flex items-center gap-x-1" aria-label="Pagination">
              <button
                type="button"
                :class="buttonClass"
                @click="prevPage"
                :disabled="currentPage === 1"
                aria-label="Previous"
              >
                <svg
                  class="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span class="sr-only">Previous</span>
              </button>
              <div class="flex items-center gap-x-1">
                <button
                  v-for="page in totalPages"
                  :key="page"
                  type="button"
                  :class="[
                    'min-h-[38px] min-w-[38px] flex justify-center items-center border text-gray-800 py-2 px-3 text-sm rounded-lg',
                    {
                      'border-gray-200': page === currentPage,
                      'border-transparent hover:bg-gray-100':
                        page !== currentPage,
                    },
                  ]"
                  @click="goToPage(page)"
                  :aria-current="page === currentPage ? 'page' : undefined"
                >
                  {{ page }}
                </button>
              </div>
              <button
                type="button"
                :class="buttonClass"
                @click="nextPage"
                :disabled="currentPage === totalPages"
                aria-label="Next"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Datatable from "~/components/table/Datatable";
import RefreshIcon from "~/assets/icons/search/refresh.svg";
import SearchIcon from "~/assets/icons/search/search.svg";
import TrashIcon from "~/assets/icons/search/trash-bin.svg";
import EyeIcon from "~/assets/icons/eye-icon.svg";
import ErrorboxIcon from "~/assets/icons/error-box.svg";
import CheckboxIcon from "~/assets/icons/check-correct.svg";

const headers = ref([
  {
    text: "ชื่อผลงาน",
    value: "name",
    align: "left",
  },
  {
    text: "ประเภทผลงาน",
    value: "type",
    align: "center",
  },
  {
    text: "วันที่แสดงผลงาน",
    value: "startDate",
    align: "center",
  },
  {
    text: "วันที่สิ้นสุดแสดงผล",
    value: "endDate",
    align: "center",
  },
  {
    text: "สถานะงาน",
    value: "status",
    align: "center",
  },

  {
    text: "action",
    value: "action",
    align: "center",
  },
]);
const items = ref([
  {
    name: "เจ้าขุนทอง",
    type: "วรรณกรรม",
    status: true,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 1,
  },
  {
    name: "ภาพวาดต้นไม้",
    type: "ศิลปกรรม",
    status: true,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 2,
  },
  {
    name: "การ์ตูนเด็กน้อย",
    type: "ภาพยนต์",
    status: false,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 3,
  },
  {
    name: "หงส์ทอง",
    type: "วรรณกรรม",
    status: true,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 4,
  },
  {
    name: "เนื้อทราย",
    type: "วรรณกรรม",
    status: true,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 5,
  },
  {
    name: "ยักษ์",
    type: "วรรณกรรม",
    status: false,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 6,
  },
  {
    name: "เรือรบ",
    type: "ศิลปกรรม",
    status: true,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 7,
  },
  {
    name: "พี่มาก",
    type: "ภาพยนต์",
    status: true,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 8,
  },
  {
    name: "ดอกฟ้า",
    type: "ศิลปกรรม",
    status: false,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 9,
  },
  {
    name: "นางนาค",
    type: "ภาพยนต์",
    status: false,
    startDate: "12/09/2024",
    endDate: "18/09/2024",
    id: 10,
  },
]);
const currentPage = ref(1);
const itemsPerPage = 5;
const selectedItems = ref();

const totalPages = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});

function goToPage(page) {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

const handleSelectedItems = (data) => {
  selectedItems.value = data;
};

const deleteArt = () => {
  if (!selectedItems.value) {
    alert(`ไม่มีผลงานที่ถูกเลือก`);
  } else {
    alert(`ลบผลงานตาม id : ${selectedItems.value}`);
  }
};

const buttonClass =
  "min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10";
</script>
