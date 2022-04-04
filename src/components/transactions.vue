<template>
<div class="d-flex justify-content-between">
    <button class="export-btn">Export</button>
    <button class="send-btn">Send Bulk Sms</button>
</div>
<div class=" table-parent">
    <div class="d-flex justify-content-between">
        <h6>Transactions</h6>
        <h6 class="transaction-date">
            <i class="bi bi-receipt"></i>
            Mar 2022
        </h6>
    </div>
    <div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Ref</th>
            <th>Name</th>
            <th>Amount (NGN)</th>
            <th>Date</th>
            <th>Status</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mathew Jones</td>
            <td> 1000</td>
            <td>30/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Support Fee</td>
        </tr>
        <tr>
            <td> 2</td>
            <td>Alex Dan</td>
            <td>2500</td>
            <td>13/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Monthly Dues</td>
        </tr>
        <tr>
            <td> 3</td>
            <td>Tom Cruise</td>
            <td>3400</td>
            <td>11/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Advert Fee</td>
        </tr>
        <tr>
            <td> 4</td>
            <td>Ben Samuel</td>
            <td>4600</td>
            <td>9/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Violation Fine</td>
        </tr>
        <tr>
            <td> 5</td>
            <td>Anthony Fred</td>
            <td>1800</td>
            <td>4/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Update Group Fee</td>
        </tr>
        <tr>
            <td> 6</td>
            <td>Sandra Udo</td>
            <td>3060</td>
            <td>2/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Renewal Fee</td>
        </tr>
        <tr>
            <td> 7</td>
            <td>Ella Nsidibe</td>
            <td>3790</td>
            <td>1/03/22</td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>Creatives Group Fee</td>
        </tr>      
        </tbody>
    </table>
</div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.export-btn {
    padding: 7px 30px;
    border: none;
    background-color: var(--theme);
    color: #ffffff;
    border-radius: 3px;
}

.send-btn {
    padding: 7px 10px;
    border: none;
    background-color: var(--theme);
    color: #ffffff;
    border-radius: 3px;
}

.table-parent {
    margin: 1rem 0 0 0;
    border: 1px solid #000000;
    padding: 15px 10px;
    border-radius: 7px;
   background-color: var(--light-gray);

}
.table-parent div:nth-child(1){
    padding: 0 19px;
}

.transaction-date {
    color: #9c9c9c
}

/* Table Styles */

.table-wrapper{
}

.fl-table {
    font-size: 12px;
    font-weight: 500;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    /* background-color: white; */
}

.fl-table td, .fl-table th {
    padding: 8px 0 8px 20px;
}

.fl-table td {
    font-size: 12px;
    width:6rem;
}
.fl-table tr td:nth-child(5){
    color: #1f9906;
}

.fl-table thead th {
    background: var(--deep-gray);
}


.fl-table thead th:nth-child(odd) {
        background: var(--deep-gray);

}

.fl-table tr:nth-child(even) {
    /* background: #F8F8F8; */
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>
