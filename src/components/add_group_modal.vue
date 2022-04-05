<template>
  <div class="backdrop">
    <form action="#" class="modal-container position-fixed rounded py-4 px-md-2 px-2 px-lg-3 bg-white text-center">
        <span class="cancel-parent">
            <i class="bi bi-x-square-fill m-0" @click="closeModal"></i>
        </span>
        <span class="info-container">
            <span class="">
                <div class="text-left input-container">
                    <label for="first_name">Group Name</label> <br>
                    <input id="first_name" type="text" class="inputs" required="required" />
                </div>
                <div class="text-left input-container ">
                    <label for="first_name">Description</label><br>
                   <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
            </span>
            
        </span>

        <button class="add-btn">Add Group</button>
    </form>
</div>
</template>

<script>
export default {
methods:{
    closeModal(){
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


.input-container {
    margin:10px 0;
}

.inputs {
    width: 100%;
    height: 2.2rem;
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
</style>