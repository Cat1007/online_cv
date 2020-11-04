<template>
  <ve-radar :data="chartData"></ve-radar>
</template>

<script>
export default {
  name: "PersonalAbility",
  data: function () {
    return {
      chartData: {
        columns: ['求职者', 'CSS', 'HTML5', 'Javascript', 'Kotlin', 'Swift', 'Vue'],
        rows: [
          {'求职者': '李哥', 'CSS': 0.5, 'HTML5': 0.7, 'Javascript': 0.8, 'Kotlin': 0.45, 'Swift': 0.37, 'Vue': 0.75},
          {'求职者': '标准', 'CSS': 1, 'HTML5': 1, 'Javascript': 1, 'Kotlin': 1, 'Swift': 1, 'Vue': 1}
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>