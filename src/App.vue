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
          scores: {
            1: 11, 2: 12, 3: 13, 4: 14, 5: 15, 6: 16, 7: 17, 8: 18, 9: 19
          },
          hits: 2,
          errors: 5
        },
        {
          team: "Team2",
          scores: {
            1: 21, 2: 22, 3: 23, 4: 24, 5: 25, 6: 26, 7: 27, 8: 28, 9: 29
          },
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
