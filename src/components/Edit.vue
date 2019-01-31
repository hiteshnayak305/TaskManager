<template>
    <div id="edit">
        <div id="modal_edit" class="modal">
            <div class="modal-content">
                <input type="text" id="title" placeholder="Title..." v-model="task.title">
                <textarea id="description" placeholder="Description..." v-model="task.description" cols="30"
                    rows="10"></textarea>
            </div>
            <!--<div class="modal-footer">
                <a href="#" class="modal-close waves-effect waves-green btn-flat"><i class="material-icons">save</i>SAVE</a>
                <a href="#" class="modal-close waves-effect waves-green btn-flat"><i class="material-icons">delete</i>DISCARD</a>
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit',
        props: [
            'task'
        ],
        methods: {
            show: function () {
                var instance = M.Modal.init(document.getElementById('modal_edit'));
                instance.open();       
            }
        }
    }
</script>