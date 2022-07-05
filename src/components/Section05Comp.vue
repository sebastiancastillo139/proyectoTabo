<template>
    <div>
        <img v-for="(banner, index) in getBannersData" :key="index" :src="banner.link" class="img-fluid" alt="Hila">
        <p v-for="(banner, index) in getBannersData" :key="index">{{banner.link}}</p>
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