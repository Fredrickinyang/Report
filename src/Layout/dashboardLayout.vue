<template>
<div class="layoutParent">
    <div class="sidebar-parent">
     <Sidebar />   
    </div>
    
    <div class="content">
        <Navbar />
        <router-view />
    </div>
</div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Sidebar from '../components/sidebar.vue'
export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>

<style>
.layoutParent {
    display: flex;
    
}
.sidebar-parent{
    height:100vh;
}
.content{
        width: 100%;
    } 
@media (max-width:1107px) {
    /* .layoutParent {
        display: unset;
    }*/
    
}
</style>
