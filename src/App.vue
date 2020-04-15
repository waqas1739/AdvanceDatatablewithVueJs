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
          src="https://smart4diagnostics.com/wp-content/uploads/2019/03/s4dx_logo_w_150.png"
          transition="scale-transition"
          width="40"
        />

     

      <v-spacer></v-spacer>

      <v-btn
        href="https://smart4diagnostics.com/"
        target="_blank"
        text
      >
        <span class="mr-2">smart4diagnostics modified datatable</span>
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
