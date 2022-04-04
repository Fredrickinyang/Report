<template>
<nav class="d-flex flex-wrap justify-content-between">
    <div class=" search-parent d-flex flex-wrap">
        <span class="input-container">
            <i class="fa fa-search search-icon" aria-hidden="true"></i>
            <input type="text" placeholder="Search" class="search-input">
        </span>
        <button class="search-btn">Search</button>
    </div>

    <div class="notification_parent d-flex ml-3">
        <div class="notification-icon-parent">
            <i class="bi bi-chat-dots chat-icon"></i>
            <p class="notification-count">6</p>
        </div>

        <div class="notification-icon-parent">
            <i class="bi bi-bell bell-icon"></i>
           <p class="notification-count">4</p>
        </div>

        <div class="avatar">
            <img src="@/assets/dp.jpg" alt="img" class="profile-image">
        </div>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background-color: var(--light-gray) ;
    /* height: 10vh; */
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
    margin-top:.5rem;
}
}

.notification-icon-parent{
    width:2rem;
    position: relative;
    margin: 0 .8rem 0 0;
}
.bell-icon,
.chat-icon{
    font-size:20px;
    font-weight: 700;  
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
.profile-image{
  width:30px;
     height:30px;
     border-radius:50%;
}
</style>
