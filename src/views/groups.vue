<template>
<!--    MODALS -->
<span v-if="modal">
    <AddGroupModal @close="showModal" />
</span>
<span v-if="JoinGroup">
    <JoinGroupModal @offModal="showJoinModal" />
</span>

<div class="parent">
    <span>
        <topComponents />
    </span>

    <!-- PAGE CONTENT STARTS -->
    <div class="d-flex justify-content-end">
        <button class="send-btn" @click="showModal">Add Group</button>
    </div>
    <div class=" table-parent">
        <div class="">
            <h6>Groups</h6>

        </div>
        <div class="table-wrapper">
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Copy Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="group in groups" :key="group.id">
                        <td>{{group.Name}}</td>
                        <td> {{group.Description}}</td>
                        <td>
                            <span class="link-parent d-flex">
                                <span class="d-flex position-relative">
                                    <!-- ALERT TEXT -->
                                    <span class="alert-parent d-flex" v-if="group.copied">
                                        <p class="alert-text">Link copied! </p>
                                        <span class="arrow"></span>
                                    </span>
                                    <!-- ICONS -->
                                    <span>
                                        <i v-if="group.copied" class="bi bi-check-lg text-success link"></i>
                                        <i v-else class="bi bi-link-45deg  link" @click="copyLink(group)"></i>
                                    </span>
                                </span>

                                <!-- LINK TEXT -->
                                <p @click="showJoinModal" class="link-text m-0">{{group.Link}}</p>
                            </span>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import topComponents from '../components/top_details.vue'
import AddGroupModal from '../components/add_group_modal.vue'
import JoinGroupModal from '../components/join_group_modal.vue'

export default {
    data() {
        return {
            // uncopied: true,
            // copied: false,
            modal: false,
            JoinGroup: false,
            groups: [{
                    Name: "Marketters Joint",
                    Description: "Marketters Discussion Group",
                    Link: "t.me/groups/marketters",
                    id: 1,
                    copied: false
                },
                {
                    Name: "Software Builders",
                    Description: "Software Engineers Platform",
                    Link: "t.me/groups/software",
                    id: 2,
                    copied: false

                },
            ]
        }
    },
    components: {
        topComponents,
        AddGroupModal,
        JoinGroupModal
    },
    methods: {
        showJoinModal() {
            this.JoinGroup = !this.JoinGroup
        },
        copyLink(group) {
            console.log(group.Link);
            group.copied = true;
            setTimeout(() => {
                group.copied = false
            }, 2000)
            return
        },

        showModal() {
            this.modal = !this.modal;
        }
    }
}
</script>

<style scoped>
.parent {
    padding: 0 40px 0 30px;

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

.link-parent {}

.alert-parent {
    position: absolute;
    left: -90px;
}

.alert-text {
    color: #ffffff;
    background-color: #000000;
    padding: 2px 10px;
    border-radius: 10px;
}

.arrow {
    background-color: #000000;
    width: 10px;
    height: 10px;
    margin: 6px 0 0 -8px;
    z-index: 1000;
    transform: rotate(130deg);
}

.link-text {
    border: 1px solid #a7a7a7;
    padding: 0 5px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-left: none;
    cursor: pointer;
}

.link::before {
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #a7a7a7;
    background-color: var(--deep-gray);
    padding: 2px 5px;
    width: fit-content;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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

/* .table-wrapper{
} */

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
    padding: 7px 0 7px 20px;
}

.fl-table td {
    font-size: 12px;
    width: 6rem;
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
</style>
