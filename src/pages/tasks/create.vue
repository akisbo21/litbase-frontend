<template>
  <v-container>
    <NuxtLink to="/tasks/list" class="back-link">
      <span class="back-icon"><< &nbsp;</span> Back to list
    </NuxtLink>

    <v-form>
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

      <DatePicker v-model="task.scheduled_date" />

      <div class="text-right">
        <v-btn @click="save" color="primary">Save</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>

import DatePicker from '@/components/DatePicker.vue'
import { ref } from 'vue'

const form = ref({
  date: null,
})

export default {
  data() {
    return {
      task: {},
      statusOptions: ['todo', 'in_progress', 'done', 'waiting_for_review'],
      priorityOptions: ['low', 'medium', 'high', 'blocker'],
    };
  },
  methods: {
    async save() {
      try {
        console.log('create.vue - save()', this.task);
        const response = await this.$api.post(`/tasks/create`, this.task);
        this.$snack.success("Task saved successfully!");


        console.log("create.vue", response);
        this.$router.push(`/tasks/${response.id}/edit`);
      } catch (error) {
        console.log("error", error);
        this.$snack.error("Saving task failed!!");
      }
    }
  },
  mounted() {
    console.log('create.vue - mounted()');
  }
};
</script>
