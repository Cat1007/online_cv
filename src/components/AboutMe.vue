<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" lg="5">
        <v-card elevation="2" class="primary--text">
          <v-card-title>
            <v-icon large left color="primary">mdi-account-clock</v-icon>
            <span class="ml-4 title font-weight-light">年龄</span>
          </v-card-title>
          <v-card-text class="headline font-weight-bold text-right primary--text">
            18
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="5">
        <v-card elevation="2" class="primary--text">
          <v-card-title>
            <v-icon large left color="primary">mdi-map-marker</v-icon>
            <span class="ml-4 title font-weight-light">地区</span>
          </v-card-title>
          <v-card-text class="headline font-weight-bold text-right primary--text">
            现居广州
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="5">
        <v-card elevation="2" class="primary--text">
          <v-card-title>
            <v-icon large left color="primary">mdi-school</v-icon>
            <span class="ml-4 title font-weight-light">教育情况</span>
          </v-card-title>
          <v-card-text class="headline font-weight-bold text-right primary--text">
            毕业于华南理工大学
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="5">
        <v-card elevation="2" class="primary--text">
          <v-card-title>
            <v-icon large left color="primary">mdi-clock</v-icon>
            <span class="ml-4 title font-weight-light">状态</span>
          </v-card-title>
          <v-card-text class="headline font-weight-bold text-right primary--text">
            正在求职中
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>

</style>