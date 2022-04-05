<template>
<div class="backdrop">
    <div class="modal-container position-fixed rounded p-3 bg-white text-center">
        <span class="cancel-parent">
            <i class="bi bi-x-square-fill m-0" @click="closeModal"></i>
        </span>
        <div class="p-4">
            <p>Are you sure you want to log out?</p>
            <button class="add-btn">Logout</button>
        </div>

    </div>
</div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('offLogout')
        }
    }
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    background-color: #0000001e;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

.modal-container {
    position: relative;
    width: fit-content;
    height: fit-content;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.116);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}

.add-btn {
    padding: 7px 30px;
    border: none;
    background-color: var(--theme);
    color: #ffffff;
    border-radius: 3px;
}

.cancel-parent {
    position: absolute;
    top: -4.5px;
    right: 1.5px;

}

.cancel-parent i {
    color: rgb(206, 16, 16);
    font-size: 20px
}
</style>
