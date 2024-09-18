<template>
  <div class="flex">
    <div class="w-full h-full justify-center items-center flex p-10">
      <div class="grid gap-4 m-4">
        <div>
          <div
            id="animation-carousel"
            class="relative h-auto max-w-full rounded-lg"
            data-carousel="static"
          >
            <div class="relative h-[400px] overflow-hidden rounded-lg">
              <div class="duration-200 ease-linear justify-center flex">
                <img
                  :src="images[currentSlide]"
                  class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <button
                type="button"
                class="absolute top-1/2 left-2 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full bg-white/30 group-hover:bg-white/50"
                @click="prevSlide"
              >
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50"
                >
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-1/2 right-2 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full bg-white/30 group-hover:bg-white/50"
                @click="nextSlide"
              >
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50"
                >
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-4 mt-4">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="aspect-square cursor-pointer"
              @click="changeSlide(index)"
            >
              <img
                class="object-cover w-full h-[140px] rounded-lg"
                :src="image"
                alt="Thumbnail"
              />
            </div>
          </div>
          
          <div class="justify-center flex">
            <span>{{ currentSlide + 1 }} / {{ images.length }}</span>
          </div>
        </div>

        <div>
          <span
            >* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>

        <div>
          <span
            >* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
      </div>
    </div>

    <div
      class="bg-[#fff] w-full h-full m-10 outline outline-1 outline-slate-200 rounded-lg"
    >
      <div class="justify-between items-center flex rounded-full p-4">
        <div>Junksin the ocean</div>
        <div>
          <button
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
            click="detail/edit"
            type="button"
            class="text-white bg-[#fff] hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mx-2 shadow"
          >
            <nuxt-link
              :to="'/detail/edit'"
              class="font-medium text-black hover:underline flex justify-center"
            >
              <img :src="EditIcon" alt="Icon" class="h-[20px] w-[20px]" />
              <span class="sr-only">EditIcon</span>
            </nuxt-link>
          </button>
          <button
            type="button"
            class="text-white bg-[#fff] hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mx-2 shadow"
          >
            <img :src="CloudIcon" alt="Icon" class="h-[20px] w-[20px]" />
            <span class="sr-only">CloudIcon</span>
          </button>
        </div>
      </div>

      <div class="items-center flex p-4">
        <div class="flex-1">
          <span>เลขคำขอ: 89</span>
        </div>
        <div class="flex-1">
          <span>เลขทะเบียน: 01/2567</span>
        </div>
      </div>

      <div class="items-center flex p-4">
        <div class="flex-1">
          <span>ประเภทผลงาน: ศิลปกรรม</span>
        </div>
        <div class="flex-1">
          <span>ลักษณะงาน: จิตรกรรม</span>
        </div>
      </div>

      <div class="p-4">
        <div class="pb-4">
          <span>รายชื่อเจ้าของลิขสิทธิ์</span>
        </div>
        <div class="outline outline-1 outline-slate-200 rounded-lg px-4">
          <div class="border-b border-slate-200">
            <button
              @click="toggleAccordion(1)"
              class="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>Amethyst-sols</span>
              <span
                id="icon-1"
                class="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-1"
              class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="pb-5 text-sm text-slate-500">
                เบอร์โทร: 099-123-4567
              </div>
              <div class="pb-5 text-sm text-slate-500">
                อีเมล: test@amethyst-sols.com
              </div>
            </div>
          </div>

          <div class="border-b border-slate-200">
            <button
              @click="toggleAccordion(2)"
              class="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>นายทดสอบ ทำดี</span>
              <span
                id="icon-2"
                class="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-2"
              class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="pb-5 text-sm text-slate-500">
                เบอร์โทร: 099-123-4567
              </div>
              <div class="pb-5 text-sm text-slate-500">
                อีเมล: test@amethyst-sols.com
              </div>
            </div>
          </div>

          <div class="border-b border-slate-200">
            <button
              @click="toggleAccordion(3)"
              class="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>นางสาวมานี ชูใจ</span>
              <span
                id="icon-3"
                class="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-3"
              class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="pb-5 text-sm text-slate-500">
                เบอร์โทร: 099-123-4567
              </div>
              <div class="pb-5 text-sm text-slate-500">
                อีเมล: test@amethyst-sols.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-1">
        <span>รายละเอียด</span>
      </div>

      <div class="px-4 py-2">
        <span :class="showMore ? 'line-clamp-5' : 'line-clamp-3'"
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</span
        >
        <button class="text-blue-500 mt-2" @click="toggleShowMore">
          {{ showMore ? "ย่อข้อความ" : "เติมข้อความ" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image1 from "~/assets/images/art1.png";
import Image2 from "~/assets/images/art2.png";
import Image3 from "~/assets/images/art3.png";
import Image4 from "~/assets/images/art4.png";
import ArrowleftIcon from "~/assets/icons/detail/arrow-left.svg";
import EditIcon from "~/assets/icons/detail/edit.svg";
import CloudIcon from "~/assets/icons/detail/cloud-up-arrow.svg";

const currentSlide = ref(0);
const images = [Image1, Image2, Image3, Image4];

const showMore = ref(false);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const toggleAccordion = (index) => {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;

  const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    icon.innerHTML = plusSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.innerHTML = minusSVG;
  }
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};
const changeSlide = (index) => {
  currentSlide.value = index;
};
</script>
