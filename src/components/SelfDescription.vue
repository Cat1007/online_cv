<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center" class="px-6 fill-height">
      <v-col cols="12" sm="4" class="d-flex flex-column align-center justify-center">
        <v-avatar size="120px" class="mb-6 mx-auto"><v-img src="../assets/avatar.png" alt="个人照片"/></v-avatar>
        <p class="text-subtitle-1">李哥</p>
        <p class="text-center text-h6 primary--text font-weight-bold">西伯利亚土豆种植技术开发人员</p>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex flex-column align-center justify-center text-body-2">
        <ul>
          <li><p>对<strong class="primary--text">前端技术</strong>具有浓厚的兴趣，喜欢逛CSDN，博客园等技术论坛</p></li>
          <li><p>具备良好的<strong class="primary--text">审美能力</strong>，有良好的代码编程习惯</p></li>
          <li><p>学习适应能力强，愿意<strong class="primary--text">不断学习新知识</strong>丰富自己</p></li>
          <li><p><strong class="primary--text">抗压能力</strong>强，有信心在不同的工作强度下进行开发工作</p></li>
          <li><p>性格随和，具有良好的<strong class="primary--text">团队合作精神</strong></p></li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SelfDescription"
}
</script>

<style scoped>
</style>