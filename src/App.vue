<template>
  <div>
    <NavbarComp/>
    <router-view />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";

export default {
  components:{
    NavbarComp
  }
}

</script>

<style lang="scss"></style>
