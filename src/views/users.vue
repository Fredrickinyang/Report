<template>
<span v-if="addUser">
   <AddUserModal @close="toggleAddModal"/> 
</span>

<div class="parent">
    <span>
        <topComponents />
    </span>

    <div class="d-flex justify-content-between">
        <div>
            <button class="export-btn">Export</button>
            <button class="export-btn">Import</button>
            <button class="send-btn">Send Bulk Sms</button>
        </div>
        <button class="send-btn" @click="toggleAddModal">Add Member</button>
    </div>
    <div class=" table-parent">
        <div class="">
            <h6>Users</h6>
        </div>
        <div class="table-wrapper">
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Group</th>
                        <th>View More</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mathew Jones</td>
                        <td>mathew.jones@gmail.com</td>
                        <td>07073221000</td>
                        <td>Male</td>
                        <td>Marketters Joint</td>
                            <td><i class="bi bi-three-dots dots" @click="toggleInfo"></i>
                            <div class="info-cards" v-if="info">
                                <div class="p-0">
                                    <p class="m-0">Joined</p>
                                    <p>Jan 10th, 2022</p>
                                </div>
                                <div>
                                    <p class="m-0">Location</p>
                                    <p>Uyo, Akwa Ibom State</p>
                                </div>
                                <div>
                                    <button class="p-1 m-1 border rounded remove-btn">Remove</button>
                                    <button  class="p-1 m-1 border rounded cancel-btn" @click="toggleInfo" >Cancel</button>
                                </div>
                            </div>
                            </td>
                    </tr>
                    <!-- <tr>
                        <td> Alex Dan</td>
                        <td>AlexDan@gmail.com</td>
                        <td>07090862500</td>
                        <td>Male</td>
                        <td>Software Builders</td>
                        <td><i class="bi bi-three-dots"></i></td>

                    </tr> -->
                    <!-- <tr>
                        <td> Tom Cruise</td>
                        <td>Tom@gmail.com</td>
                        <td>09027383400</td>
                        <td>Male</td>
                        <td>Marketters Joint</td>
                        <td><i class="bi bi-three-dots"></i></td>

                    </tr>-->
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import topComponents from '../components/top_details.vue'
import AddUserModal from '../components/add_user_modal.vue'

export default {
    data(){
        return{
            info:false,
            addUser:false,

        }
    },
    components: {
        topComponents,
        AddUserModal
        
    },
    methods: {
        toggleInfo() {
            this.info = !this.info
        },
        toggleAddModal(){
            this.addUser = !this.addUser;
        }
    }
}
</script>

<style scoped>
.parent {
    padding: 0 40px 0 30px;

}
.dots{
    background-color: var(--deep-gray);
    padding: 0px 6px;
    border: 1px solid #a7a7a7;
    border-radius:3px;
    font-size: 15px;
    cursor: pointer;
}

.export-btn {
    padding: 7px 30px;
    margin: 0 .2rem;
    border: none;
    background-color: var(--theme);
    color: #ffffff;
    border-radius: 3px;
}

.send-btn {
    padding: 7px 10px;
    margin: 0 .2rem;
    border: none;
    background-color: var(--theme);
    color: #ffffff;
    border-radius: 3px;
}

.table-parent {
    margin: .4rem 0 0 0;
    border: 1px solid #000000;
    padding: 15px 10px;
    border-radius: 7px;
    background-color: var(--light-gray);

}

.table-parent div:nth-child(1) {
    padding: 0 19px;
}

.transaction-date {
    color: #9c9c9c
}

/* Table Styles */


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

.fl-table td,
.fl-table th {
    padding: 8px 0 8px 20px;
}

.fl-table td {
    font-size: 12px;
    width: 6rem;
    position: relative;
}

.fl-table thead th {
    background: var(--deep-gray);
}

.fl-table thead th:nth-child(odd) {
    background: var(--deep-gray);

}

/* .fl-table tr:nth-child(even) {
    background: #F8F8F8;
} */

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }

    .table-wrapper:before {
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }

    .fl-table thead,
    .fl-table tbody,
    .fl-table thead th {
        display: block;
    }

    .fl-table thead th:last-child {
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

    .fl-table td,
    .fl-table th {
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
.info-cards-container{
    position: relative; 
}
.info-cards{
    position: absolute;
    right: 0;
    top:1.3rem;
    z-index: 1000;
    background-color:#ffffff;
    border: 1px solid #c5c5c5;
    border-radius:3px;
    font-size: 12px;
    text-align: right;
    padding: 5px 5px 0 5px;
}
.remove-btn{
    background-color: #353c58;
    color: white;
    font-weight: 500;
}
.cancel-btn{
    background-color: rgb(255, 68, 0);
    color: white;
    font-weight: 500;
}
</style>
