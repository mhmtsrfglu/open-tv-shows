<script lang="ts">
import { defineComponent } from "vue";
import { getPager } from "@/helper/pager";
import type { IPagerProps, IPager } from "@/interfaces/IPager";

export default defineComponent({
  data(): IPagerProps {
    return {
      pager: {} as IPager,
    };
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageNumberLimit: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
  },
  watch: {
    totalItems: {
      immediate: true,
      handler() {
        const pager = getPager(
          this.totalItems,
          this.currentPage,
          this.pageSize
        );
        this.pager = pager;
      },
    },
  },
  methods: {
    onPageChanged(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
        return;
      } else {
        this.$emit("pagechanged", page);
        const pager = getPager(this.totalItems, page, this.pageSize);
        this.pager = pager;
      }
    },
  },
});
</script>

<template>
  <div class="pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :disabled="pager.currentPage === 1"
          @click="onPageChanged(pager.currentPage - 1)"
        >
          <a class="page-link" href="#">Previous</a>
        </li>
        <li
          class="page-item"
          v-for="(item, index) in pager.pages"
          v-bind:key="index"
          v-bind:class="{ active: item === currentPage }"
          @click="() => onPageChanged(item)"
        >
          <a class="page-link" href="#">{{ item }}</a>
        </li>
        <li class="page-item" @click="onPageChanged(pager.currentPage + 1)">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.page-item:focus {
  box-shadow: none;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: none;
}

li:focus,
li:active:focus,
li.active:focus,
li.focus,
li:active.focus,
li.active.focus {
  outline: none;
}

a:focus,
a:active:focus,
a.active:focus,
a.focus,
a:active.focus,
a.active.focus {
  outline: none;
}
</style>
