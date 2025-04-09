<template>
    <v-app>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-app>
</template>
<script >

export default {
  methods: {},
  data () {
    return {
    }
  },

  mounted () {
    console.log("app.vue - mounted()");
  }
}
</script>