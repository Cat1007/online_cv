<template>
  <v-container fluid class="fill-height">
    <!--移动端轮播图显示-->
    <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      light
      :show-arrows="false"
      class="fill-height"
    >
      <v-carousel-item
        v-for="(project, index) in projectExperience"
        :key="index"
      >
        <v-row class="fill-height" justify="center" dense>
          <v-col md="6" sm="9" cols="12">
            <v-card class="mx-3">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="project.projectImgSrc"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title>{{ project.projectName }}</v-card-title>
              <v-card-subtitle
                ><p class="autoTruncateSubtitle">
                  {{ project.projectDescription }}
                </p></v-card-subtitle
              >
              <v-card-text
                ><p class="autoTruncateText">
                  {{ project.projectResults }}
                </p></v-card-text
              >
              <v-card-actions>
                <v-btn
                  color="#1876d1"
                  class="white--text"
                  :href="project.githubSrc"
                >
                  <v-icon left>mdi-github</v-icon>
                  仓库链接
                </v-btn>
                <v-btn text color="#1876d1" :href="project.readmeSrc"
                  >详情</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            sm="3"
            class="d-none d-md-block"
          >
            <v-card class="mb-3" v-for="item in project.technicalPoint"
            :key="item">
              <v-card-title>
                <v-icon left color="primary"> {{ item.icon }} </v-icon>
                {{ item.pointName }}
              </v-card-title>
              <v-card-subtitle>{{ item.content }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import projectExperienceData from "@/util/projectExperienceData";

export default {
  name: "ProjectExperience",
  data() {
    return {
      projectExperience: projectExperienceData,
    };
  },
  created() {},
};
</script>

<style scoped>
.autoTruncateText {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.autoTruncateSubtitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>