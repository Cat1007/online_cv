<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" lg="5" v-for="(data,index) in dataList" :key="index">
        <v-card elevation="2" class="primary--text">
          <v-card-title>
            <v-icon large left color="primary">{{ data.icon }}</v-icon>
            <span class="ml-4 title font-weight-light">
              {{ data.title }}
            </span>
          </v-card-title>
          <v-card-text
              class="headline font-weight-bold text-right primary--text"
          >
            {{ data.content }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aboutMeData from "@/util/aboutMeData";

export default {
  name: "AboutMe",
  data: function () {
    return {
      dataList: aboutMeData,
    };
  },
};
</script>

<style scoped>
</style>