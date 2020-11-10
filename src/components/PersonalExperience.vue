<template>
  <div class="pa-4 mb-8">
    <v-timeline :dense="isDense" align-top>
      <v-timeline-item
          v-for="data in dataList"
          :key="data"
          icon="mdi-lightbulb"
          :right="isDense"
      >
        <v-card>
          <v-card-title class="headline">{{data.title}}</v-card-title>
          <v-card-text>
          {{data.content}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import personalExperienceData from '@/util/personalExperienceData'
export default {
  name: "PersonalExperience",
  computed: {
    isDense: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return true
        case "xs":
          return true
        default:
          return false
      }
    }
  },
  data:function(){
    return{
      dataList:personalExperienceData
    }
  }
}
</script>

<style scoped>

</style>