<template>
<div class="d-flex sidebar-parent">
<ul class="sidebar" ref="sidebar">
    <router-link to="/dashboard/users">
        <li class="sidebar-items " :class="{active:isActive == 1}" @click="usersActive">
            <i class="bi bi-person-circle"></i>
            Users
        </li>
    </router-link>

    <router-link to="/dashboard/groups">
        <li class="sidebar-items" :class="{active:isActive == 2}" @click="groupsActive">
            <i class="bi bi-people-fill"></i>
            Groups
        </li>
    </router-link>

    <router-link to="/dashboard/transactions">
        <li class="sidebar-items" :class="{active:isActive == 3}" @click="transactionActive">
            <i class="bi bi-file-text"></i>
            Transaction History
        </li>
    </router-link>
</ul>
<div class="toggler-parent">
    <div class="toggler">
        <i class="bi bi-chevron-right  rounded-right toggleIcon" @click="showSidebar" v-if="openIcon"></i>
    </div>
    <div class="toggler">
        <i class="bi bi-chevron-left rounded-right toggleIcon" @click="closeSidebar" v-if="closeIcon"></i>
    </div>
</div>

</div>
</template>

<script>
export default {
    data() {
        return {
            isActive: undefined,
            openIcon: true,
            closeIcon: false,
        }
    },
    methods: {
        showSidebar() {
            this.closeIcon = true;
            this.openIcon = false;
            this.$refs.sidebar.style.marginLeft = "0";
        },
        closeSidebar() {
            this.openIcon = true;
            this.closeIcon = false;
            this.$refs.sidebar.style.marginLeft = "-100%";
        },
        usersActive(){
            this.isActive = 1;
        },
        groupsActive(){
            this.isActive = 2;
        },
        transactionActive(){
            this.isActive = 3;
        },
        users() {
           

        },
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    display: block;
    margin: 0 0 1rem 0;
    color: #ffffff;
}

li {
    list-style: none;
    line-height: 2rem;
    padding: 5px 15px;
}

.sidebar {
    background-color: var(--theme);
    margin:0;
    padding: 118px 35px 0 35px;
    height: 100vh;
    transition: all 0.5s;
    width:18rem;
}

@media (max-width:1194px) {
    .sidebar-parent {
    position: absolute;
    z-index: 1000;
    height:100vh;
    }
    .sidebar {
        margin-left: -100%;
    }
}
.toggler-parent{
    display: none;
    margin:10rem 0 0 0;
}
@media (max-width:1194px) {
    .toggler-parent{
    display: unset;
}
}

.toggleIcon {
    position: absolute;
    background-color: var(--theme);
    color: #ffffff;
    font-size: 20px;
    padding: 2rem 0;
}

.sidebar-items {
    display: inline-block;
}

.active {
    background-color: #ffffff;
    color: #000000 !important;
    border-radius: 6px;
    transition: all 0.5s;
}
</style>
