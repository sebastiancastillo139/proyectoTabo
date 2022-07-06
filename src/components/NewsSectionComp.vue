<template>
  <div class="row col-12 mx-auto">
    <div
      v-for="(news, index) in getOnemiData.results.slice(
        this.sliceValue1,
        this.sliceValue2
      )"
      :key="index"
      class="card col-12 col-lg-4 p-3 border-0 d-inline-block"
    >
      <img
        class="card-img-top"
        src="../assets/img/cropped-El-Tabo.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ news.title }}</h5>
        <p class="card-text text-truncate">
          {{ news.content }}
        </p>
        <a :href="news.link" target="_blank" class="btn btn-primary"
          >Ir a la noticia</a
        >
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    <h2>{{ totalNewsPages }}</h2>
    <li class="page-item"><a class="page-link" v-on:click="sliceValue1=7, sliceValue2=13">TEST</a></li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      sliceValue1: 0,
      sliceValue2: 6,
    };
  },
  computed: {
    ...mapGetters(["getOnemiData"]),
    totalNewsPages() {
      let totalNews = this.getOnemiData.results.length;
      return totalNews;
    },
  },
};
</script>
