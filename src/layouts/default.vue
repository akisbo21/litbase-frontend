<template>
  <v-layout>
    <v-main>
    <snack></snack>
    <header>
      <v-toolbar app>
        <v-toolbar-title>Task Manager</v-toolbar-title>
        <v-spacer></v-spacer>
        <NuxtLink :to="`/tasks/create`">
          <v-icon color="medium-emphasis" icon="mdi-pencil" size="small"></v-icon>
          Create New Task
        </NuxtLink>
      </v-toolbar>
    </header>
    <slot></slot>
    </v-main>
  </v-layout>
</template>
<script lang="ts">
</script>

<style lang="scss" src="@/assets/css/common.scss"></style>