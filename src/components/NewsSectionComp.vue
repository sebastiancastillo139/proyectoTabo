<template>
  <div class="row col-12">
    <div
      v-for="(news, index) in getOnemiData.results.slice(4)"
      :key="index"
      class="card col-4 p-5 border-0 d-inline-block"
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
        <a :href="news.link" target="_blank" class="btn btn-primary">Ir a la noticia</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getOnemiData"]),
  },
};
</script>
