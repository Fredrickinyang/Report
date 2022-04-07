<template>
<div class="backdrop">
    <div class="modal-container position-fixed rounded p-3 bg-white text-center">
        <span class="cancel-parent">
            <i class="bi bi-x-square-fill m-0" @click="closeModal"></i>
        </span>
        <div class="">
            <span class="info-container">
                <span class="d-flex flex-wrap m-1">
                    <div class="text-left details mx-2">
                        <label for="first_name">Name</label> <br>
                        <p>John Doe</p>
                    </div>
                    <div class="text-left details mx-2">
                        <label for="first_name">Phone Number</label><br>
                        <p>0993839399</p>
                    </div>
                </span>
                <span class="d-flex flex-wrap m-1">
                    <div class="text-left details mx-2">
                        <label for="first_name">Gender</label><br>
                        <p>Male</p>
                    </div>
                    <div class="text-left select-container mx-2">
                        <label for="first_name">Email</label><br>
                        <p>johndoe@gmail.com</p>
                    </div>
                </span>
                <span class="d-flex flex-wrap m-1">
                    <div class="text-left details mx-2">
                        <label for="first_name">Group</label> <br>
                        <p>Marketters Joint</p>
                    </div>
                    <div class="text-left details mx-2">
                        <label for="first_name">Date Joined</label><br>
                        <p>Jan 10th, 2022</p>
                    </div>
                </span>
            </span>
            <span class="d-flex flex-wrap m-1">
                <div class="text-left details mx-2">
                    <label for="">Location</label> <br>
                    <p>Uyo, Akwa Ibom State</p>
                </div>
                <!-- <div class="text-left details-bottom mx-2">
                    <label for="">Unit</label><br>
                    <input id="" type="text" class="unit" required="required" />
                </div>
                <div class="text-left details-bottom mx-2">
                    

                </div> -->
            </span>

        </div>

    </div>
</div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('offModal')
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

.cancel-parent {
    position: absolute;
    top: -4.5px;
    right: 1.5px;

}

.cancel-parent i {
    color: rgb(206, 16, 16);
    font-size: 20px
}
label {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 13px;
    color: #333;
    margin: 0;
}
.details{
    width:10rem;
}
</style>
