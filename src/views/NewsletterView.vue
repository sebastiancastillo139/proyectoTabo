<template>
  <div class="home text-justify">
    <h1 class="text-center py-4">PÁGINA DE NOTICIAS</h1>
    <NewsSectionComp/>
  </div>
</template>

<script>
import NewsSectionComp from '@/components/NewsSectionComp.vue';

export default {
    name: "NewsletterView",
    components: { NewsSectionComp }
}
</script>
