<template>
  <div class="dock-item-container">
    <router-link :to="route.path" class="router-link-style">
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
.dock-item-container {
  display: flex;
  justify-content: center;
}

.router-link-style {
  text-decoration: none;
}
</style>



