<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" lg="5">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-avatar size="80px" color="white">
                <v-icon color="green" size="60px">mdi-phone</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <span class="title font-weight-medium">电话：15700000000</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" sm="6" lg="5">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-avatar size="80px" color="white">
                <v-icon color="orange" size="60px">mdi-email</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <span class="title font-weight-medium"
                >邮箱：949494945@qq.com</span
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" sm="6" lg="5">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-avatar size="80px" color="white">
                <v-icon color="black" size="60px">mdi-github</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <span class="font-weight-medium">GitHub：XXXXXX</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="6" lg="5">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-avatar size="80px" color="white">
                <v-icon color="red" size="60px">mdi-sina-weibo</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <span class="title font-weight-medium">新浪微博：XXXXXX</span>
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
};
</script>

<style>
</style>