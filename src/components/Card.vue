<script lang="ts">
import { defineComponent } from "vue";
import type { IShow } from "@/interfaces/IShow";
import LabelVue from "./Label.vue";

export default defineComponent({
  name: "Card",
  props: {
    show: {
      type: Object as () => IShow,
      required: true,
    },
  },
  components: { LabelVue },
});
</script>
<template>
  <div class="card">
    <div class="image-box">
      <img
        id="card-image"
        class="card-img-top img-fluid"
        v-bind:src="show.image?.original"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <div id="name" class="name">{{ show.name }}</div>
        <div id="avarage" class="avarage">{{ show.rating.average }}</div>
      </h5>
      <p class="card-text" id="summary" v-html="show.summary"></p>
      <div class="">
        <LabelVue
          :label="genre"
          v-for="(genre, index) in show.genres.slice(0, 2)"
          :key="index"
        />
      </div>
      <hr />
      <a
        target="_blank"
        v-bind:href="'/view/' + show.id"
        class="btn btn-primary view-btn"
        >View</a
      >
    </div>
  </div>
</template>

<style>
.view-btn {
  width: 100%;
}

.card {
  display: flex !important;
  margin-bottom: 15px;
}

.card .image-box .card-img-top {
  height: 300px;
}

.card .image-box,
.card .card-body {
  display: flex !important;
  flex: 1 !important;
  flex-direction: column;
  height: 100%;
}
.card .card-body .card-text {
  max-height: 100px;
  overflow-y: auto;
  font-size: 12px;
}

.card .card-body .card-title {
  display: flex;
  justify-content: space-between;
}

.card .card-body .card-title .avarage {
  color: green;
  font-weight: bold;
  font-size: 15px;
}
</style>
