<template>
  <div class="home">
    <div class="row col-11 mx-auto my-2">
      <img src="@/assets/img/seccion_documentos/bannersuperior.png" class="img-fluid" alt="..." />
    </div>
    <DocumentosComp/>
  </div>
</template>

<script>
import DocumentosComp from '@/components/DocumentosComp.vue';

export default { components: { DocumentosComp } }

</script>
