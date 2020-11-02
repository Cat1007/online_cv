<template>
  <v-tabs center-active centered show-arrows @change="changeTabs">
    <v-tab>个人简介</v-tab>
    <v-tab>项目经历</v-tab>
    <v-tab>技能掌握</v-tab>
    <v-tab>个人简介</v-tab>
    <v-tab>项目经历</v-tab>
    <v-tab>技能掌握</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "NavTabs",
  methods: {
    changeTabs: function (number) {
      console.log(number)
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(number+1)
    }
  }
}
</script>

<style scoped>

</style>