<template>
  <div>
    <nav-tabs @tabs-change="tabsChange" v-bind:active="activeSection"/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <!--在section中配置对应内容-->
      <div class="section">
        <div class="test">First section ...</div>
      </div>
      <div class="section">
        <div class="test">Second section ...</div>
      </div>
      <div class="section">
        <div class="test">Third section ...</div>
      </div>
      <div class="section">
        <div class="test">Fourth section ...</div>
      </div>
      <div class="section">
        <div class="test">Fifth section ...</div>
      </div>
      <div class="section">
        <div class="test">Sixth section ...</div>
      </div>
    </full-page>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs";

export default {
  name: "MyResume",
  components: {
    NavTabs
  },
  data() {
    return {
      options: {
        // 配置开源证书
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // 设置每部分的锚点，用于页面导航
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        // 每个页面的背景色
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
        // 预留顶部导航条位置
        paddingTop: '48px',
        // 配置切换事件
        onLeave: this.afterSectionLoad,
        scrollingSpeed: 300
      },
      activeSection: 0,
    }
  },
  methods: {
    afterSectionLoad(origin, destination) {
      let that = this
      that.activeSection = destination.index
    },
    tabsChange(index) {
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(index + 1)
    }
  }
}
</script>

<style scoped>
.test {
  height: 100%;
  width: 100%;
  background-color: gray;
}
</style>