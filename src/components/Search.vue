<script lang="ts">
import { defineComponent } from "vue";
import type { ISearch } from "@/interfaces/ISearch";

export default defineComponent({
  name: "Search",
  data(): ISearch {
    return { search: "", isSearch: false };
  },
  methods: {
    onSearch() {
      if (!this.search) {
        this.isSearch = false;
        return;
      }
      this.isSearch = true;
      this.$emit("onsearch", this.search);
    },

    clean() {
      this.search = "";
      this.isSearch = false;

      this.$emit("onreset", "");
    },
    onChange() {
      if (!this.search) {
        this.isSearch = false;
        this.$emit("onreset", "");
      }
    },
  },
});
</script>
<template>
  <div class="form-inline">
    <div class="form-group mx-sm-3 mb-2">
      <input
        v-model="search"
        type="text"
        id="search-input"
        class="form-control"
        placeholder="Search..."
        @change="onChange"
      />
    </div>
    <button
      @click="onSearch"
      id="search-button"
      type="submit"
      class="btn btn-primary mb-2"
      v-if="!isSearch"
    >
      Search
    </button>

    <button
      @click="clean"
      type="submit"
      class="btn btn-primary mb-2"
      v-if="isSearch"
    >
      Reset
    </button>
  </div>
</template>
<style>
.form-inline {
  display: flex;
}
</style>
