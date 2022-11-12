<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LabelVue",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <span class="label-tag">
    {{ label }}
  </span>
</template>

<style>
.label-tag {
  padding: 3px 5px;
  background-color: green;
  color: white;
  border-radius: 5px;
  margin: 0px 5px;
}
</style>
