<template>
  <div>
    <nav-tabs @tabs-change="tabsChange" v-bind:active="activeSection"/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <!--在section中配置对应内容-->
      <div class="section">
          <self-description/>
      </div>
      <div class="section">
          <project-experience/>
      </div>
      <div class="section">
      </div>
      <div class="section">
        <div class="sectionWrapper">
          <personal-experience/>
        </div>
      </div>
      <div class="section">
        <div class="sectionWrapper">
          <about-me/>
        </div>
      </div>
      <div class="section">
        <div class="sectionWrapper">Sixth section ...</div>
      </div>
    </full-page>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs";
import SelfDescription from "@/components/SelfDescription";
import ProjectExperience from "@/components/ProjectExperience";
import PersonalExperience from "@/components/PersonalExperience";
import AboutMe from "@/components/AboutMe";

export default {
  name: "MyResume",
  components: {
    AboutMe,
    PersonalExperience,
    NavTabs,
    SelfDescription,
    ProjectExperience
  },
  data() {
    return {
      options: {
        // 配置开源证书
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // 设置每部分的锚点，用于页面导航
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        // 预留顶部导航条位置
        paddingTop: '48px',
        // 配置切换事件
        onLeave: this.afterSectionLoad,
        scrollingSpeed: 300,
        // 配置滑动敏感性
        touchSensitivity: 15,
        scrollOverflow: true,
        sectionsColor: ['#F5F5F5','#F5F5F5','#F5F5F5','#F5F5F5','#F5F5F5','#F5F5F5']
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
.sectionWrapper {
  height: 100%;
  width: 100%;
}
</style>