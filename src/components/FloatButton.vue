<template>
    <div id="float-button">
        <div class="fixed-action-btn" v-on:mouseover="hover" id="float_btn">
            <a class="btn-floating btn-large red">
                <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><a class="btn-floating green" v-on:click="add"><i class="material-icons">add</i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'float-button',
        methods: {
            hover: function() {
                var instance = M.FloatingActionButton.init(document.getElementById('float_btn'));
            },
            add: function() {
                this.$emit('add');
            }
        }
    }

</script>