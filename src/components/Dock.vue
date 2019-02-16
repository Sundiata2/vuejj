<template>
  <v-bottom-nav
    :color="indigo"
    :value="true"
    absolute
    dark
    shift
  >
    <DockItem v-for="route in routes" :key="route.id" :route="route" />
  </v-bottom-nav>
</template>

<script>
import DockItem from './views/DockItem';

export default {
  name: "Dock",
  components: {
    DockItem
  },
  props: ["routes"]
}
</script>

<style scoped>

</style>



