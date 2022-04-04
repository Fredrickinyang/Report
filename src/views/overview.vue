<template>
<div class="parent">
    <div class="">
        <h2 class="title">Analytics Overview</h2>
    </div>

    <div class="details-cards-container d-flex justify-content-between flex-wrap">
      <div class="info-card card1">
        <p class="m-0 ">6k</p>
        <p class="m-0 ">Customers</p>
      </div>
      <div class="info-card card2">
        <p class="m-0 ">7+</p>
        <p class="m-0 ">Plans</p>
      </div>
      <div class="info-card card3">
        <p class="m-0 ">10k+</p>
        <p class="m-0 ">Sms Sent</p>
      </div>
      <div class="info-card card4">
        <p class="m-0 ">20k</p>
        <p class="m-0 ">Campaign Sent</p>
      </div>
    </div>

    <div class="mt-5">
      <Transactions/>
    </div>
</div>
</template>

<script>
import Transactions from '../components/transactions.vue'
export default {
  components: {
    Transactions
  }
}
</script>

<style scoped>
.parent{
    padding: 0 40px 0 30px;

}
.title {
    font-weight: bold;
    padding: 25px 0 ;
}
.details-cards-container{
  box-sizing: border-box;
}
.info-card{
  background-color: var(--deep-gray);
  width:200px;
  padding:15px;
  margin:5px 0
}
p{
  font-weight: 500;
}
.card1{

}
@media (max-width:911px) {
  .info-card{
  width:45%;
  margin:5px 2px

}

}
</style>
