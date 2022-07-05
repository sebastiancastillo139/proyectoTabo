<template>
    <div class="row my-3">
        <img src="../assets/img/banners/3.png" class="img-fluid col-6 p-1" alt="...">
        <img src="../assets/img/banners/3.png" class="img-fluid col-6 p-1" alt="...">
        <img src="../assets/img/banners/Botones-1.png" class="img-fluid col-6 p-1" alt="..." >
        <img src="../assets/img/banners/Botones-2.png" class="img-fluid col-6 p-1" > 
        <img src="../assets/img/banners/Botones-3.png" class="img-fluid col-6 p-1">
        <img src="../assets/img/banners/Botones-4.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/Botones-5.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/Botones-6.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/Botones-webbeca-ok.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/Diseno-sin-titulo-1536x334.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/banner-discapacidad-y-diversidad-18.png" class="img-fluid col-6 p-1"> 
        <img src="../assets/img/banners/banner-discapacidad-y-diversidad-19.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/boton-justicia_Mesa-de-trabajo-1-1536x256.png" class="img-fluid col-6 p-1"> 
        <img src="../assets/img/banners/catalogo-beneficios-sociales.png" class="img-fluid col-6 p-1" >
        <img src="../assets/img/banners/Diseño-sin-título-4.png" class="img-fluid col-6 p-1 mx-auto" >
    </div>

</template>

<script>

import { mapGetters } from "vuex";

export default {
    computed:{
        ...mapGetters(['getBannersData'])
    }
}

</script>