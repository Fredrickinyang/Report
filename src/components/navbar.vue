<template>
<span v-if="logout">
    <LogoutModal @offLogout="toggleLogout"/>
</span>

<nav class="d-flex flex-wrap justify-content-between align-items-center">
    <div class=" search-parent d-flex flex-wrap">
        <span class="input-container">
            <i class="fa fa-search search-icon" aria-hidden="true"></i>
            <input type="text" placeholder="Search" class="search-input">
        </span>
        <button class="search-btn">Search</button>
    </div>

    <div class="notification_parent d-flex ml-3">

        <div class="notification-icon-parent">
            <i class="bi bi-bell bell-icon"></i>
           <p class="notification-count">4</p>
        </div>
        <div>
             <i class="bi bi-power log-out" @click="toggleLogout"></i>
        </div>
           
    </div>
</nav>
</template>

<script>
import LogoutModal from '../components/logout_modal.vue'
export default {
    data() {
        return {
            logout: false,
        }
    },
    components: {LogoutModal},
    methods: {
        toggleLogout(){
            this.logout = !this.logout;
        }
    }
}
</script>

<style scoped>
nav {
    background-color: var(--light-gray) ;
    padding: 15px 36px 15px 25px;
}
@media (max-width:404px) {
    .search-parent button{
        margin:.3rem 0 0 0;
}
}

.input-container{
    background-color: var(--deep-gray);
    padding: 6px 16px;
    border-radius:5px;
}
.search-input{
    border: none;
    background-color: transparent;
    outline: none;
}
.search-icon{
    font-weight: bold;
    font-size: 17px;
    padding: 0 8px 0 0;
}
.search-btn{
    padding: 4px 30px;
    border:none;
    background-color:var(--theme);
    color:#ffffff;
    border-radius:3px;
}
@media (max-width:540px) {
    .notification_parent{
    margin: top 0.5rem;;
}
}

.notification-icon-parent{
    width:2rem;
    position: relative;
    margin: 0 .4rem 0 0;
}
.bell-icon{
    font-size:20px;
    font-weight: 700; 
    cursor: pointer; 
}
.notification-count{
    position:absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    background-color:#ec0505;
    text-align:center;
    border-radius:50%;
    font-size:10px;
    color:#ffffff;
}
.log-out{
   font-size: 20px;
   cursor: pointer;
   
}
</style>
