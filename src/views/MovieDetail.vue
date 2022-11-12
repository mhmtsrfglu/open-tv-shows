<script lang="ts">
import { defineComponent } from "vue";
import type { IMovieProps } from "@/interfaces/IMovieDetails";
import LabelVue from "@/components/Label.vue";
import type { IShow } from "@/interfaces/IShow";

export default defineComponent({
  name: "MovieDetail",
  data(): IMovieProps {
    return {
      movie: {} as IShow,
    };
  },
  created() {
    const id: string = this.$route.params.id.toString();
    this.getMovieInfo(id);
  },
  methods: {
    getMovieInfo(movieId: string) {
      fetch("https://api.tvmaze.com/shows/" + movieId)
        .then((data) => data.json())
        .then((data) => {
          this.movie = data;
        });
    },
  },
  components: {
    LabelVue,
  },
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="header-box">
        <div class="movie-name">
          <div><b>Movie Name:</b></div>
          <div>&nbsp;{{ movie.name }}</div>
        </div>
        <div class="header-button">
          <a v-bind:href="'/'" type="button" class="btn btn-primary"
            >Menu List</a
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid" v-bind:src="movie.image?.original" />
      </div>
      <div class="col-md-9">
        <div class="vue-box"><b>Language :&nbsp; </b> {{ movie.language }}</div>
        <hr />
        <div class="vue-box"><b>Runtime :&nbsp; </b> {{ movie.runtime }}</div>
        <hr />
        <div class="vue-box"><b>Type :&nbsp; </b> {{ movie.type }}</div>
        <hr />
        <div class="vue-box">
          <b>Time : </b>
          <LabelVue :label="movie.schedule.time" />
        </div>
        <hr />
        <div class="vue-box">
          <b>Days : </b>
          <LabelVue
            :label="day"
            :key="index"
            v-for="(day, index) in movie.schedule.days"
          />
        </div>
        <hr />

        <div class="vue-box">
          <b>Genres : </b>
          <LabelVue
            :label="genre"
            v-for="(genre, index) in movie.genres"
            :key="index"
          />
        </div>
        <hr />
        <div class="vue-box">
          <b>Status : </b>
          <LabelVue :label="movie.status" />
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="title">Summary</div>
      <div class="col-md-12">
        <div class="summary" v-html="movie.summary"></div>
      </div>
    </div>
  </div>
</template>
<style>
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.header-box .movie-name {
  display: flex;
  font-weight: bold;
  font-size: 25px;
}
.title {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 25px;
}
.vue-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}
</style>
