<template>
  <v-container fluid class="fill-height">
    <v-alert dense type="info" class="alert">已复制到剪贴板</v-alert>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" lg="3">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-avatar
                    id="phone"
                    class="transition-swing"
                    size="80px"
                    color="white"
                    v-on:click="copyToClipboard($event)"
                    :class="`elevation-${hover ? 8 : 2}`"
                  >
                    <v-icon color="green" size="60px">mdi-phone</v-icon>
                  </v-avatar>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium"> 电话 </v-col>
                <v-col cols="12">
                  <span id="phoneText" class="title font-weight-medium"
                    >15700000000</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-avatar
                    id="email"
                    class="transition-swing"
                    size="80px"
                    color="white"
                    v-on:click="copyToClipboard($event)"
                    :class="`elevation-${hover ? 8 : 2}`"
                  >
                    <v-icon color="orange" size="60px">mdi-email</v-icon>
                  </v-avatar>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium"> 邮箱 </v-col>
                <v-col cols="12">
                  <span id="emailText" class="title font-weight-medium"
                    >949494945@qq.com</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-avatar
                    id="github"
                    class="transition-swing"
                    size="80px"
                    color="white"
                    v-on:click="copyToClipboard($event)"
                    :class="`elevation-${hover ? 8 : 2}`"
                  >
                    <v-icon color="black" size="60px">mdi-github</v-icon>
                  </v-avatar>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium">
                  GitHub
                </v-col>
                <v-col cols="12">
                  <span id="githubText" class="title font-weight-medium"
                    >XXXXXX</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-avatar
                    id="weibo"
                    class="transition-swing"
                    size="80px"
                    color="white"
                    v-on:click="copyToClipboard($event)"
                    :class="`elevation-${hover ? 8 : 2}`"
                  >
                    <v-icon color="red" size="60px">mdi-sina-weibo</v-icon>
                  </v-avatar>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium">
                  新浪微博
                </v-col>
                <v-col cols="12">
                  <span id="weiboText" class="title font-weight-medium"
                    >XXXXXX</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    copyToClipboard: function (event) {
      var toCopy = document.getElementById(event.currentTarget.id + "Text")
        .innerText;
      console.log(event.currentTarget.id + ":" + toCopy);
      //execCommand只能复制类似于input，textarea等的内容，创建一个临时标签
      var tempTextarea = document.createElement("textarea");
      document.body.appendChild(tempTextarea);
      tempTextarea.value = toCopy;
      tempTextarea.select();
      document.execCommand("Copy");
      document.body.removeChild(tempTextarea);
      alert("已复制到剪贴板");
    },
  },
};
</script>

<style scoped>
.alert{
  position: absolute;
}
</style>