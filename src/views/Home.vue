<template>
  <div id="home" class="row">
      <div v-bind:key="task.id" v-for="task in tasks">
          <task v-bind:task="task" v-on:remove="remove" v-on:edit="edit"></task>
      </div>
      <edit v-bind:task="task" v-on:save="ed_save" v-on:discard="ed_discard"></edit>
      <add v-on:save="save"></add>
      <float-button v-on:add="add"></float-button>
  </div>
</template>

<script>
import Task from '../components/Task.vue';
import Edit from '../components/Edit.vue';
import Add from '../components/Add.vue';
import FloatButton from '../components/FloatButton.vue';

export default {
  name: 'home',
  components: {
      Task,
      Edit,
      Add,
      FloatButton
  },
  beforeCreate: function() {
      localStorage.tasks = localStorage.tasks == undefined ? '[]' : localStorage.tasks;
  },
  data: function() {
      return {
          tasks: JSON.parse(localStorage.tasks),
          task: {
              id: '',
              title: '',
              description: ''
          }
      }
  },
  methods: {
      add: function() {
          Add.methods.add();
      },
      save: function(task) {
          this.tasks.push(task);
      },
      edit: function(id) {
          this.task = this.tasks.find(task => task.id == id);
          Edit.methods.show();
      },
      remove: function(id) {
          this.tasks = this.tasks.filter(task => task.id != id);
      },
      ed_save: function() {
          localStorage.tasks = JSON.stringify(this.tasks);
      },
      ed_discard: function() {
          this.tasks = JSON.parse(localStorage.tasks);
      }
  },
  watch: {
      tasks: function(val, oldVal) {
          localStorage.tasks = JSON.stringify(this.tasks);
      }
  }
}
</script>
