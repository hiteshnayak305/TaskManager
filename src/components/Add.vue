<template>
    <div id="add">
        <div id="modal_add" class="modal">
            <div class="modal-content">
                <input type="text" id="title" placeholder="Title..." v-model="task.title">
                <textarea id="description" placeholder="Description..." v-model="task.description" cols="30" rows="10"></textarea>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-close waves-effect waves-green btn-flat" v-on:click="save(task)"><i class="material-icons">save</i>SAVE</a>
                <a href="#" class="modal-close waves-effect waves-green btn-flat" v-on:click="discard"><i class="material-icons">delete</i>DISCARD</a>
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from 'uuid';

    export default {
        name: 'add',
        data: function () {
            return {
                task: {
                    id: '',
                    title: '',
                    description: ''
                }
            }
        },
        //TODO: clean on deactive
        methods: {
            save: function (task) {
                task.id = uuid();
                this.$emit('save', task);
                this.task = {
                    id: '',
                    title: '',
                    description: ''
                }
            },
            discard: function () {
                this.task = {
                    id: '',
                    title: '',
                    description: ''
                }
            },
            add: function () {
                var instance = M.Modal.init(document.getElementById('modal_add'));
                instance.open();
            }
        }
    }
</script>