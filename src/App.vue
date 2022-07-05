<template>
  <div>
    <NavbarComp/>
    <router-view />
  </div>
</template>

<script>

import NavbarComp from "./components/NavbarComp.vue";
import { mapActions } from 'vuex';

export default {
  components:{
    NavbarComp
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
