<template>
<div class="layoutParent">
    <div class="sidebar-parent">
     <Sidebar @transShow="showTransactions" @groupShow="showGroups" @userShow="showUsers"/>   
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
    },
    methods: {
        showTransactions() {
            this.transactions = true;
            this.groups = false;
            this.users = false;
            console.log('transackktions working');
        },
        showGroups() {
            this.groups = true;
            this.transactions = false;
            this.users = false;
            console.log('groups working');
        },
        showUsers() {
            this.users = true;
            this.transactions = false;
            this.groups = false;
            console.log('users working');

        },
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
