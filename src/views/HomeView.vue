<template>
  <div class="container">
    <div class="row">
      <Section01Comp/>
    </div>
    <div class="row">
      <Section02Comp/>
    </div>
  </div>
</template>

<script>
import Section01Comp from '@/components/Section01Comp.vue';
import Section02Comp from '../components/Section02Comp.vue';
export default {
    name: "HomeView",
    components: { Section01Comp, Section02Comp }
};
</script>
