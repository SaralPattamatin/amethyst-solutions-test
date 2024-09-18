<template>
  <div class="relative overflow-x-auto m-8 sm:rounded-lg h-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-gray-700">
        <tr class="border-b border-t">
          <th scope="col" class="py-3">
            <input
              type="checkbox"
              @change="toggleAll"
              :checked="isAllSelected"
              class="rounded"
            />
          </th>
          <th scope="col" class="py-3" v-for="header in headers" :key="header">
            <div
              class="flex items-center gap-1"
              :class="
                header.align === 'center'
                  ? 'justify-center'
                  : header.align === 'left'
                  ? 'justify-start'
                  : header.align === 'right'
                  ? 'justify-end'
                  : 'justify-center'
              "
            >
              <p>{{ header.text }}</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b font-normal text-gray-900 whitespace-nowrap"
          v-for="(item, index) in items"
          :key="item.id"
        >
          <td class="py-3">
            <input
              type="checkbox"
              @change="toggleItem(item.id)"
              :checked="isSelected(item.id)"
              class="rounded"
            />
          </td>
          <td
            class="py-3"
            :class="header.align ? 'text-' + header.align : 'text-center'"
            v-for="header in headers"
            :key="header.value"
          >
            <slot :name="'item.' + header.value" :item="item" :index="index">
              {{ item[header.value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  items: Array,
  headers: Array,
});

const emit = defineEmits(["handleSelectedItems"]);

const selectedItems = ref([]);

const isAllSelected = computed(
  () => selectedItems.value.length === props.items.length
);

const isSelected = (id) => selectedItems.value.includes(id);

const emitValue = () => {
  emit("handleSelectedItems", selectedItems.value);
};

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedItems.value = [];
  } else {
    selectedItems.value = props.items.map((item) => item.id);
  }
  emitValue();
};

const toggleItem = (id) => {
  if (isSelected(id)) {
    selectedItems.value = selectedItems.value.filter((itemId) => itemId !== id);
  } else {
    selectedItems.value.push(id);
  }
  emitValue();
};
</script>
