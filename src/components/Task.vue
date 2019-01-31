<template>
    <div id="task">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{{task.title}}</span>
                    <p>{{task.description}}</p>
                </div>
                <div class="card-action">
                    <a href="#" v-on:click="edit(task.id)"><i class="material-icons">edit</i></a>
                    <a href="#" v-on:click="remove(task.id)"><i class="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'task',
        props: [
            'task'
        ],
        methods: {
            edit(id) {
                this.$emit('edit', id);
            },
            remove(id) {
                this.$emit('remove', id);
            }
        }
    }
</script>