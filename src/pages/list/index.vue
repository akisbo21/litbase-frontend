<template>
  <v-main>
    <header>
      <v-toolbar app>
        <v-toolbar-title>Task Manager</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="createNewTask">Create New Task</v-btn>
      </v-toolbar>
    </header>

    <v-container>
      <v-data-table
          :headers="headers"
          :items="tasks"
          item-key="id"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Tasks List</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" @click="editTask(item.id)">Edit</v-btn>
          <v-btn color="error" @click="deleteTask(item.id)">Delete</v-btn>
        </template>
      </v-data-table>
      <div>sssssssssssssss</div>

    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: 'Id', align: 'start', value: 'id', sortable: true },
        { title: 'Title', align: 'start', value: 'title', sortable: true },
        { title: 'Description', align: 'start', value: 'description', sortable: true },
        { title: 'Status', align: 'start', value: 'status', sortable: true },
        { title: 'Execution Time (hours)', align: 'start', value: 'execution_time_hours', sortable: true },
        { title: 'Scheduled Date', align: 'start', value: 'scheduled_date', sortable: true },
        { title: 'Actions', align: 'center', value: 'actions' },
      ],
      tasks: []
    };
  },
  methods: {
    createNewTask() {
      // Logic for creating a new task
      console.log('Create new task');
    },
    editTask(taskId) {
      // Logic for editing the task
      console.log('Edit task with id', taskId);
    },
    deleteTask(taskId) {
      // Logic for deleting the task
      console.log('Delete task with id', taskId);
    }
  },
  async mounted() {
    try {
      this.tasks = await this.$api.get('/tasks'); // API kérés
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  },
};
</script>
<style lang="scss" src="./css/style.css"></style>

