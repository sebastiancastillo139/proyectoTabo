<template>
  <div class="row my-3">
    <div class="col-12 col-lg-8">
        <img src="@/assets/img/Siguenos-en-nuestras-redes-sociales-1.png" class="img-fluid" alt="...">
    </div>
    <div class="col-12 col-lg-4">
        <SocialMediaButtons/>
    </div>
  </div>
</template>

<script>

import SocialMediaButtons from "./buttons/SocialMediaButtons.vue";

export default{

    components:{
        SocialMediaButtons
    }
}

</script>