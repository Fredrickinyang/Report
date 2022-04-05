<template>
<div class="backdrop">
    <form action="#" class="modal-container position-fixed rounded p-2 bg-white text-center">
        <span class="cancel-parent">
            <i class="bi bi-x-square-fill m-0" @click="closeModal"></i>
        </span>
        <span class="info-container">
            <span class="d-flex m-2">
                <div class="text-left input-container mx-2">
                    <label for="first_name">First Name</label> <br>
                    <input id="first_name" type="text" class="inputs" required="required" />
                </div>
                <div class="text-left input-container mx-2">
                    <label for="first_name">Last Name</label><br>
                    <input id="first_name" type="text" class="inputs" required="required" />
                </div>
            </span>
            <span class="d-flex m-2">
                <div class="text-left input-container mx-2">
                    <label for="first_name">Phone Number</label><br>
                    <input id="first_name" type="text" class="inputs" required="required" />
                </div>
                <div class="text-left select-container mx-2">
                    <label for="first_name">Gender</label><br>
                    <select name="" id="" class="" aria-placeholder="choose">
                        <option value="">--Choose Gender--</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Eunuch</option>
                        <option value="">Trans</option>
                        <option value="">Intersex</option>
                        <option value="">Non Conforming</option>
                        <option value="">Personal</option>
                    </select>
                </div>
            </span>
            <span class="d-flex m-2">
                <div class="text-left input-container mx-2">
                    <label for="first_name">Email</label> <br>
                    <input id="first_name" type="text" class="inputs" required="required" />
                </div>
                <div class="text-left input-container mx-2">
                    <label for="first_name">Services</label><br>
                    <input id="first_name" type="text" class="inputs" required="required" />
                </div>
            </span>
        </span>
        <span class="d-flex m-2">
            <div class="text-left input-container-bottom mx-2">
                <label for="">Ward</label> <br>
                <input id="" type="number" class="ward input-number" required="required" />
            </div>
            <div class="text-left input-container-bottom mx-2">
                <label for="">Unit</label><br>
                <input id="" type="text" class="unit" required="required" />
            </div>
            <div class="text-left input-container-bottom mx-2">
                <label for="Disability">Disability</label><br>
                <span class="d-flex">
                    <span class="mr-2">
                        <p class="boolean my-0 ">Yes</p>
                        <input id="" type="radio" name="disability" class="" required="required" />
                    </span>
                    <span class="">
                        <p class="boolean my-0 ">No</p>
                        <input id="" type="radio" name="disability" class="" required="required" />
                    </span>
                </span>

            </div>
        </span>

        <button class="add-btn">Add User</button>
    </form>
</div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
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

.input-number::-webkit-outer-spin-button,
.input-number::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
}

.unit,
.ward {
    width: 7rem;
    height: 2.8rem;

}

.inputs {
    width: 10rem;
    height: 2.2rem;
}

.select-container {
    width: 10rem;

}

select {
    width: inherit;
    height: 2.2rem;
}

select option {
    font-size: 13px;
}

.add-btn {
    padding: 7px 30px;
    margin: 0 .2rem;
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

label {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 13px;
    color: #333;
    margin: 0;
}
.boolean{
    font-size: 13px;
    color: #333;
}

@media (max-width: 767px) {
    .modal-container {
        width: 50%;
        top: 40%;
        left: 40%;
    }
}
</style>
