<template>
  <v-container>
    <NuxtLink to="/tasks/list" class="back-link">
      <span class="back-icon"><< &nbsp;</span> Back to list
    </NuxtLink>

    <v-form v-if="task">
      <v-text-field
          v-model="task.title"
          label="Title"
          required
      ></v-text-field>

      <v-textarea
          v-model="task.description"
          label="Description"
          required
      ></v-textarea>

      <v-text-field
          v-model="task.execution_time_hours"
          label="Execution Time (hours)"
          required
      ></v-text-field>

      <v-select
          v-model="task.status"
          :items="statusOptions"
          label="Status"
          required
      ></v-select>

      <v-select
          v-model="task.priority"
          :items="priorityOptions"
          label="Priority"
          required
      ></v-select>

      <div class="text-right">
        <v-btn @click="save" color="primary">Save</v-btn>
      </div>
    </v-form>
    <v-alert v-else type="error">Task not found</v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      task: null,
      statusOptions: ['todo', 'in_progress', 'done', 'waiting_for_review'],
      priorityOptions: ['low', 'medium', 'high', 'blocker'],
    };
  },
  methods: {
    async save() {
      try {
        console.log('edit.vue - save()', this.task);
        await this.$api.post(`/tasks/${this.task.id}/edit`, this.task);
        this.$snack.success("Task saved successfully!");
      } catch (error) {
        console.error('Error saving task:', error);
      }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    // console.log('edit.vue - mounted()', this.$route.params);
    try {
      this.task = await this.$api.get(`/tasks/${id}/edit`);
      console.log('edit.vue - mounted()', this.task);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  }
};
</script>
