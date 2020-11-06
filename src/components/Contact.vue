<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" lg="3">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-avatar class="elevation-2" size="80px" color="white">
                <v-icon color="green" size="60px">mdi-phone</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium">
                  电话
                </v-col>
                <v-col cols="12" >
                  <span class="title font-weight-medium">15700000000</span>
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
              <v-avatar class="elevation-2" size="80px" color="white">
                <v-icon color="orange" size="60px">mdi-email</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12"  class="title font-weight-medium">
                  邮箱
                </v-col>
                <v-col cols="12" >
                  <span class="title font-weight-medium">949494945@qq.com</span>
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
              <v-avatar class="elevation-2" size="80px" color="white">
                <v-icon color="black" size="60px">mdi-github</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium">
                  GitHub
                </v-col>
                <v-col cols="12">
                  <span class="title font-weight-medium">XXXXXX</span>
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
              <v-avatar class="elevation-2" size="80px" color="white">
                <v-icon color="red" size="60px">mdi-sina-weibo</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12"  class="title font-weight-medium">
                  新浪微博
                </v-col>
                <v-col cols="12" >
                  <span class="title font-weight-medium">XXXXXX</span>
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
};
</script>

<style scoped>
</style>