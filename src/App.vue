<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Smart"
          class="shrink mr-2"
          contain
          src="https://vuejs.org/"
          transition="scale-transition"
          width="40"
        />

     

      <v-spacer></v-spacer>

      <v-btn
        href="https://vuejs.org/"
        target="_blank"
        text
      >
        <span class="mr-2">modified datatable</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
       </div>
    </v-app-bar>
   

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
