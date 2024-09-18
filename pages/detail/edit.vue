<template>
  <div class="px-24 py-8">
    <div class="justify-between flex pb-4">
      <div v-once>แก้ไขการแสดงผลงาน</div>
      <div>
        <button
          click="detail/edit"
          type="button"
          class="text-white bg-[#fff] hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mx-2 shadow"
        >
          <nuxt-link
            :to="'/'"
            class="font-medium text-black hover:underline flex justify-center"
          >
            <img :src="ArrowleftIcon" alt="Icon" class="h-[20px] w-[20px]" />
            <span class="sr-only">ArrowleftIcon</span>
          </nuxt-link>
        </button>
        <button
          @click="submit"
          type="button"
          class="text-white bg-[#fff] hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mx-2 shadow"
        >
          <img :src="SaveIcon" alt="Icon" class="h-[20px] w-[20px]" />
          <span class="sr-only">SaveIcon</span>
        </button>
      </div>
    </div>

    <div class="bg-white p-8 rounded-lg border border-gray-300">
      <div>Junks in the ocean</div>
      <div class="flex pt-4">
        <div class="items-center flex">ประเภทผลงาน</div>
        <form class="max-w-sm ps-4">
          <select
            id="countries"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-[240px] p-2.5"
            v-model="formData.artType"
          >
            <option selected>ประเภทผลงาน</option>
            <option value="ศิลปกรรม">ศิลปกรรม</option>
            <option value="วรรณกรรม">วรรณกรรม</option>
            <option value="ภาพยนต์">ภาพยนต์</option>
          </select>
        </form>
      </div>
      <div class="flex items-center pt-4 mb-4">
        <div class="text-nowrap mr-4">เจ้าของลิขสิทธิ์</div>
        <hr class="w-full" />
      </div>
      <div class="grid grid-cols-3 gap-4">
        <form class="w-full">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
          >
            คำนำหน้า
          </span>
          <select
            v-model="formData.prefix"
            id="countries"
            :class="{
              'border-red-500 focus:border-red-500 focus:ring-red-500':
                errors.prefix,
              'border-slate-300 focus:border-sky-500 focus:ring-sky-500':
                !errors.prefix,
            }"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option selected>เลือกคำนำหน้า</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
          <span v-if="errors.prefix" class="text-red-500 text-sm">{{
            errors.prefix
          }}</span>
        </form>
        <div>
          <label class="block">
            <span
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              ชื่อ
            </span>
            <input
              type="text"
              name="username"
              :class="{
                'border-red-500 focus:border-red-500 focus:ring-red-500':
                  errors.username,
                'border-slate-300 focus:border-sky-500 focus:ring-sky-500':
                  !errors.username,
              }"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              v-model="formData.username"
            />
            <span v-if="errors.username" class="text-red-500 text-sm">{{
              errors.username
            }}</span>
          </label>
        </div>
        <div>
          <label class="block">
            <span
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              นามสกุล
            </span>
            <input
              type="text"
              name="lastname"
              :class="{
                'border-red-500 focus:border-red-500 focus:ring-red-500':
                  errors.lastname,
                'border-slate-300 focus:border-sky-500 focus:ring-sky-500':
                  !errors.lastname,
              }"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
              v-model="formData.lastname"
            />
            <span v-if="errors.lastname" class="text-red-500 text-sm">{{
              errors.lastname
            }}</span>
          </label>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label class="block">
            <span class="after:ml-0.5 block text-sm font-medium text-slate-700">
              โทรศัพท์
            </span>
            <input
              type="text"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
              v-model="formData.tel"
            />
          </label>
        </div>
        <div>
          <label class="block">
            <span class="after:ml-0.5 block text-sm font-medium text-slate-700">
              อีเมล
            </span>
            <input
              type="email"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
              v-model="formData.email"
            />
          </label>
        </div>
      </div>
    </div>

    <div class="bg-white mt-4 rounded-lg border border-gray-300">
      <!-- Info -->
      <div class="p-4">ข้อมูลผลงาน</div>
      <hr />
      <div class="grid grid-cols-3">
        <div class="p-4">
          <span
            class="after:ml-0.5 block text-sm font-medium text-slate-700 mb-2"
          >
            ระยะเวลาการแสดงผลงานให้ผู้อื่นเห็น
          </span>
          <div class="flex">
            <div class="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value="false"
                name="default-radio"
                class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300"
                v-model="formData.show"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900"
                >ไม่แสดง</label
              >
            </div>
            <div class="flex items-center ms-4">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="true"
                name="default-radio"
                class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300"
                v-model="formData.show"
              />
              <label
                for="default-radio-2"
                class="ms-2 text-sm font-medium text-gray-900"
                >แสดง</label
              >
            </div>
          </div>
        </div>
        <div class="p-4">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-2"
          >
            วันที่เริ่มต้น
          </span>
          <div>
            <VueDatePicker
              v-model="formData.startDate"
              :format="format"
              :class="{
                'border-red-500 focus:border-red-500 focus:ring-red-500':
                  errors.startDate,
                'border-slate-300 focus:border-sky-500 focus:ring-sky-500':
                  !errors.startDate,
              }"
            ></VueDatePicker>
          </div>
          <div>
            <label
              for="default-radio-1"
              class="ms-2 text-sm font-medium text-gray-900"
              >ตัวอย่าง: 01/01/2566</label
            >
          </div>
        </div>
        <!--endDate -->
        <div class="p-4">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-2"
          >
            วันที่สิ้นสุด
          </span>
          <div class="flex">
            <div class="relative pt-1 pr-1">
              <input
                type="checkbox"
                id="hs-default-solid-switch-with-icons"
                class="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-gray-200 before:inline-block before:size-6 before:bg-white checked:before:bg-purple-600 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
              />
              <label for="hs-default-solid-switch-with-icons" class="sr-only"
                >switch</label
              >
              <span
                class="peer-checked:text-white text-gray-100 size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200"
              >
                <svg
                  class="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </div>

            <div class="w-full">
              <VueDatePicker
                v-model="formData.endDate"
                :format="format"
              ></VueDatePicker>
              <div class="mt-1">
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm font-medium text-gray-900"
                  >ตัวอย่าง: 01/01/2566
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Details -->
      <div class="p-4">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
          >รายละเอียด</label
        >
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
          style="resize: none"
          v-model="formData.details"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowleftIcon from "~/assets/icons/detail/arrow-left.svg";
import SaveIcon from "~/assets/icons/edit/save-icon.svg";
import DatePicker from "~/components/DatePicker.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const formData = ref({
  artType: "",
  startDate: new Date(),
  endDate: new Date(),
  username: "",
  lastname: "",
  tel: "",
  email: "",
  prefix: "",
  show: false,
  details: "",
});

const errors = ref({
  username: "",
  lastname: "",
  prefix: "",
});

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() + 543;
  return `${day}/${month}/${year}`;
};

const submit = () => {
  errors.value.username = "";
  errors.value.lastname = "";
  errors.value.prefix = "";
  errors.value.startDate = "";

  if (!formData.value.prefix) {
    errors.value.prefix = "กรุณาเลือกคำนำหน้า";
  }

  if (!formData.value.username) {
    errors.value.username = "กรุณากรอกชื่อ";
  }

  if (!formData.value.lastname) {
    errors.value.lastname = "กรุณากรอกนามสกุล";
  }

  if (!formData.value.startDate) {
    errors.value.startDate = "กรุณากรอกนามสกุล";
  }

  if (
    !errors.value.username &&
    !errors.value.lastname &&
    !errors.value.prefix &&
    !errors.value.startDate
  ) {
    formData.value.startDate = formData.value.startDate.toISOString();
    formData.value.endDate = formData.value.endDate.toISOString();
    alert(`ข้อมูลถูกต้อง ${formData.value}`);
    console.log("ข้อมูล:", formData.value);
  }
};
</script>
