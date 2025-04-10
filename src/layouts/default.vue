<template>
  <v-layout>
    <v-main>
    <snack></snack>
    <header>
      <v-toolbar app>
        <v-toolbar-title>Task Manager</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="createNewTask">Create New Task</v-btn>
      </v-toolbar>
    </header>
    <slot></slot>
    </v-main>
  </v-layout>
</template>
<script lang="ts">
</script>

<style lang="scss" src="@/assets/css/common.scss"></style>