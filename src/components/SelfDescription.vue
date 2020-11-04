<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center" class="px-6 fill-height">
      <v-col cols="12" sm="4" class="d-flex flex-column align-center justify-center">
        <v-avatar size="120px" class="mb-6 mx-auto"><v-img src="../assets/avatar.png" alt="个人照片"/></v-avatar>
        <p class="text-subtitle-1">李哥</p>
        <p class="text-center text-h6">西伯利亚土豆种植技术开发人员</p>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex flex-column align-center justify-center text-body-2">
        <ul>
          <li><p>对前端技术具有浓厚的兴趣，喜欢逛CSDN，博客园等技术论坛</p></li>
          <li><p>具备良好的审美能力，有良好的代码编程习惯</p></li>
          <li><p>学习适应能力强，愿意不断学习新知识丰富自己</p></li>
          <li><p>抗压能力强，有信心在不同的工作强度下进行开发工作</p></li>
          <li><p>性格随和，具有良好的团队合作精神</p></li>
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