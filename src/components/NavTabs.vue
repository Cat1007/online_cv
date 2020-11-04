<template>
  <div class="tabsWrapper">
    <v-tabs center-active grow show-arrows @change="changeTabs" :value="activeTabs">
      <v-tab>个人简介</v-tab>
      <v-tab>项目经历</v-tab>
      <v-tab>技能掌握</v-tab>
      <v-tab>个人经历</v-tab>
      <v-tab>关于我</v-tab>
      <v-tab>技能掌握</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "NavTabs",
  props: {
    active: Number
  },
  data: function () {
    return {}
  },
  methods: {
    changeTabs: function (number) {
      this.$emit("tabs-change",number)
    }
  },
  computed: {
    activeTabs: function () {
      return this.active
    }
  }
}
</script>

<style scoped>
.tabsWrapper {
  position: absolute;
  z-index: 10;
  width: 100%;
}
</style>