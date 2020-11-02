<template>
  <div id="app">
    <nav-tabs class="tabs"/>
    <my-resume/>
  </div>
</template>

<script>
import MyResume from "@/components/MyResume";
import NavTabs from "@/components/NavTabs";

export default {
  name: 'App',

  components: {
    MyResume,
    NavTabs
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.tabs {
  position: absolute;
  z-index: 10;
}
</style>
