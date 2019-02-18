<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <router-view></router-view>
      </v-content>
      <Dock :routes="routes" />
    </v-app>
  </div>
</template>

<script>
// Here is where we import components
import Dock from './components/Dock';
import Glossary from './components/views/Glossary';
import Flow from './components/views/Flow';
import Theory from './components/views/Theory';

const appRoutes = [
  {
    id: 1,
    path: "/glossary",
    title: "Glossary",
    iconName: "format_list_bulleted"
  },
  {
    id: 2,
    path: "/theory",
    title: "Theory",
    iconName: "book"
  },
  {
    id: 3,
    path: "/flow",
    title: "Flow",
    iconName: "all_inclusive"
  }
];

export default {
  name: 'app',
  // Must include the imported components here
  components: {
    Dock
  },
  // Here we can put our components state
  data() {
    return {
      example: 'it still renders',
      routes: appRoutes
    }
  }
}
</script>

<style>
/* Note how this style is not scoped */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
