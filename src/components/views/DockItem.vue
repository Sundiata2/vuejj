<template>
  <div>
    <router-link :to="route.path">
      <v-btn dark>
        {{ route.title }}
        <v-icon>{{route.iconName}}</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "DockItem",
  props: {
    route: Object
  }
}

</script>


<style scoped>

</style>



