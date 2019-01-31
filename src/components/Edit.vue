<template>
    <div id="edit">
        <div id="modal_edit" class="modal">
            <div class="modal-content">
                <input type="text" id="title" placeholder="Title..." v-model="task.title">
                <textarea id="description" placeholder="Description..." v-model="task.description" cols="30"
                    rows="10"></textarea>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-close waves-effect waves-green btn-flat" v-on:click="save"><i class="material-icons">save</i>SAVE</a>
                <a href="#" class="modal-close waves-effect waves-green btn-flat" v-on:click="discard"><i class="material-icons">delete</i>DISCARD</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit',
        props: [
            'task'
        ],
        //TODO: dont change on outside click
        methods: {
            show: function () {
                var instance = M.Modal.init(document.getElementById('modal_edit'));
                instance.open();       
            },
            save: function () {
                this.$emit('save');
            },
            discard: function () {
                this.$emit('discard');
            }
        }
    }
</script>