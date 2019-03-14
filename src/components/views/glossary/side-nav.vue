<template>
  <v-card>
    <v-toolbar color='indigo'>
      <v-toolbar-title>Glossary</v-toolbar-title>
  
      <v-spacer></v-spacer>
      <router-link :to={} class="router-link-style">
        <v-icon>book</v-icon>
      </router-link>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "GlossarySideNav"
}
</script>

<style scoped>
.glossary-side-nav-container {
  display: flex;
}
</style>
