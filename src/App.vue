<template>
  <div id="app">
    <score :scoreboard="scoreboard"></score>
  </div>
</template>

<script>
import Score from "./components/Score.vue";

export default {
  name: "app",
  components: {
    Score
  },
  data() {
    return {
      scoreboard: [
        {
          team: "Team1",
          score: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          hits: 2,
          errors: 5
        },
        {
          team: "Team2",
          score: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          hits: 4,
          errors: 2
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
