<template>
  <div id="app">
    <v-app>
      <v-main>
        <my-resume/>
      </v-main>
    </v-app>
  </div>
</template>

<script>

import MyResume from "@/components/MyResume";

export default {
  name: 'App',

  components: {
    MyResume
  },

  data: () => ({
    //
  }),
};
</script>
<style>

</style>
