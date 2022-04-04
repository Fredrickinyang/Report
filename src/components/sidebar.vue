<template>
<div class="d-flex sidebar-parent">
<ul class="sidebar" ref="sidebar">
    <router-link to="">
        <li class="sidebar-items " :class="{active:isActive == 1}" @click="isActive = 1">
            <i class="bi bi-person-circle"></i>
            Users
        </li>
    </router-link>

    <router-link to="">
        <li class="sidebar-items" :class="{active:isActive == 2}" @click="isActive = 2">
            <i class="bi bi-people-fill"></i>
            Groups
        </li>
    </router-link>

    <router-link to="">
        <li class="sidebar-items" :class="{active:isActive == 3}" @click="isActive = 3">
            <i class="bi bi-people-fill"></i>
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
    width:19rem;
}

@media (max-width:1194px) {
    .sidebar-parent {
    position: absolute;
    }
    .sidebar {
        margin-left: -100%;
    }
}
.toggler-parent{
    display: none;
    margin:20rem 0 0 0;
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
