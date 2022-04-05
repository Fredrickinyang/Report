<template>
  <div class="backdrop">
    <form action="#" class="modal-container position-fixed rounded py-4 px-md-2 px-2 px-lg-3 bg-white text-center">
        <span class="cancel-parent">
            <i class="bi bi-x-square-fill m-0" @click="closeModal"></i>
        </span>
        <span class="info-container">
            <span class="">
                <div class="text-left input-container">
                    <label for="first_name">First Name</label> <br>
                    <input id="first_name" type="text" class="inputs" />
                </div>
                <div class="text-left input-container">
                    <label for="first_name">Last Name</label> <br>
                    <input id="first_name" type="text" class="inputs" />
                </div>
                <div class="text-left input-container ">
                    <label for="">Email</label><br>
                    <input id="" type="text" class="inputs" />                    
                </div>
                <div class="text-left input-container ">
                    <label for="first_name">Phone Number</label><br>
                   <input type="number"  required="required" class="inputs number-input" >
                </div>
                <div class="text-left input-container ">
                    <label for="first_name">Donate</label><br>
                    <p class="info-text m-0">Tick below to donate</p>
                   <input type="checkbox"  required="required" class="" v-model="donate" @change="check(donate)">
                </div>
            </span>
            
        </span>

        <button class="add-btn" ref="submit">{{submitText}}</button>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            donate:"",
            submitText: 'Submit'            
        }
    },
methods:{
    closeModal(){
        this.$emit('offModal')
    },
    check(status){
        if (status) {
            this.submitText = "Donate"
        }
        else{
            this.submitText = "Submit"

        }
    }
},
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
    width: 300px;
    height: fit-content;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.116);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}


.input-container {
    margin:6px 0;
}

.inputs {
    width: 100%;
    height: 1.5rem;
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

.number-input::-webkit-inner-spin-button,
.number-input::-webkit-inner-spin-button{
    appearance: none;

}
.info-text{
    font-size: 13px;
    font-style: italic;
}
</style>