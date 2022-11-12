<script lang="ts">
import type { IShowBaseData } from "@/interfaces/IShow";
import { defineComponent } from "vue";
import Pagination from "../components/Pagination.vue";
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import _ from "lodash";

export default defineComponent({
  data(): IShowBaseData {
    return {
      shows: [],
      list: [],
      pageLimit: 12,
      currentPage: 1,
      pageNumberLimit: 3,
      offset: 0,
      totalItemSize: 0,
    };
  },
  created() {
    this.getShows();
  },
  methods: {
    onPageChanged(page: number) {
      this.currentPage = page;
      const offset = (page - 1) * this.pageLimit;
      this.offset = offset;
      this.list = this.shows.slice(offset, offset + this.pageLimit);
    },
    getShows() {
      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((results) => {
          const showList = results;
          this.shows = showList;
          const offset = (this.currentPage - 1) * this.pageLimit;
          this.offset = offset;
          this.list = this.shows.slice(offset, offset + this.pageLimit);
          this.totalItemSize = showList.length;
        });
    },
    onSearchChanged(text: string) {
      if (text) {
        fetch("https://api.tvmaze.com/search/shows?q=" + text.toLowerCase())
          .then((response) => response.json())
          .then((data) => {
            const list = _.orderBy(data, ["score"], ["desc"]);
            const listMap = list.map((item: any) => ({
              ...item.show,
              score: item.score,
            }));
            this.list = listMap;
            this.totalItemSize = listMap.length;
          });
      } else {
        this.getShows();
      }
    },
  },
  components: {
    Pagination,
    Card,
    Search,
  },
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center page-head">
        <div class="title">Welcome TV Shows</div>
        <div>
          <Search
            v-on:onsearch="onSearchChanged"
            v-on:onreset="onSearchChanged"
          />
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-3" v-for="(show, index) in list" v-bind:key="index">
        <Card :show="show" />
      </div>
    </div>
    <hr />
    <div class="row">
      <Pagination
        :page-size="pageLimit"
        :total-items="totalItemSize"
        :current-page="currentPage"
        :page-number-limit="pageNumberLimit"
        v-on:pagechanged="onPageChanged"
      />
    </div>
  </div>
</template>

<style>
.page-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.page-head .title {
  font-size: 2em;
}
</style>
