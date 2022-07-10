<template>
  <div class="col-12">
    <Section01Comp />
    <Section02Comp />
    <Section03Comp />
    <Section04Comp />
    <Section05Comp />
    <Section06Comp />
    <Section07Comp />
  </div>
</template>

<script>
import Section01Comp from "@/components/Section01Comp.vue";
import Section02Comp from "../components/Section02Comp.vue";
import Section03Comp from "@/components/Section03Comp.vue";
import Section04Comp from "../components/Section04Comp.vue";
import Section05Comp from "@/components/Section05Comp.vue";
import Section06Comp from "../components/Section06Comp.vue";
import Section07Comp from "../components/Section07Comp.vue";
export default {
  name: "HomeView",
  components: {
    Section01Comp,
    Section02Comp,
    Section03Comp,
    Section04Comp,
    Section05Comp,
    Section06Comp,
    Section07Comp,
  },
};
</script>
