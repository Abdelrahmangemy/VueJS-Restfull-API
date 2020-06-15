<template>
    <div>
        <div class="container">
            <NavBar></NavBar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import ('../../assets/frontend/css/main.css')
import ('../../assets/frontend/css/all.css')
import ('../../assets/frontend/css/responsive.css')
import NavBar from './navbar.vue'

export default {
    components:{
        NavBar
    },

}
</script>