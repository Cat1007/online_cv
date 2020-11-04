<template>
  <div class="pa-4 mb-8">
    <v-timeline :dense="isDense" align-top>
      <v-timeline-item
          v-for="n in 6"
          :key="n"
          icon="mdi-star"
          :right="isDense"
      >
        <v-card>
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi
            sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>