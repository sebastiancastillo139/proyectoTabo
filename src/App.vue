<template>
  <div class="d-flex flex-column min-vh-100">
    <NavbarComp/>
    <router-view />
    <FooterComp/>
  </div>
</template>

<script>

import NavbarComp from "./components/NavbarComp.vue";
import { mapActions } from 'vuex';
import FooterComp from "./components/FooterComp.vue";

export default {
  components:{
    NavbarComp,
    FooterComp
},
  methods:{
    ...mapActions(['callOnemiData'])
  },
    beforeMount() {
    this.callOnemiData();
  },
}

</script>

<style lang="scss"></style>
