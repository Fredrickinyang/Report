<template>
<nav class="d-flex justify-content-between">
    <div>
        <span class="search-container">
            <i class="fa fa-search search-icon" aria-hidden="true"></i>
            <input type="text" placeholder="Search" class="search-input">
        </span>
        <button class="search-btn">Search</button>
    </div>

    <div class="d-flex">
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
.search-container{
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
