<template>
  <div class="container">
    <div class="row">
      <Section01Comp />
    </div>
    <div class="row">
      <Section02Comp />
    </div>
    <div class="row">
      <Section03Comp/>
    </div>
    <div class="row">
      <Section04Comp/>
    </div>
  </div>
</template>

<script>
import Section01Comp from "@/components/Section01Comp.vue";
import Section02Comp from "../components/Section02Comp.vue";
import Section03Comp from "@/components/Section03Comp.vue";
import Section04Comp from "../components/Section04Comp.vue";
export default {
  name: "HomeView",
  components: { Section01Comp, Section02Comp, Section03Comp, Section04Comp },
};
</script>
