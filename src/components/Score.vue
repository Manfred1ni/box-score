<template>
  <div>
    <v2-table :data="flattenedScoreboard">
      <v2-table-column label="Teams" prop="team"></v2-table-column>
      <v2-table-column
        v-for="inning in innings"
        :key="inning"
        label="inning"
        :prop="inning"
      ></v2-table-column>
      <v2-table-column label="R" prop="totalRuns"></v2-table-column>
      <v2-table-column label="H" prop="hits"></v2-table-column>
      <v2-table-column label="E" prop="errors"></v2-table-column>
    </v2-table>
  </div>
</template>
<script>
export default {
  props: {
    scoreboard: Array
  },
  computed: {
    flattenedScoreboard: () => {
      /* eslint-disable */
      const flatScoreboard = [];
      this.scoreboard.map((score) => {
        const newScore = {
          team: score.team,
          hits: score.hits,
          errors: score.errors,
          innings: Object.keys(score.scores).length
        }
        score.scores.forEach((inningResult, index) => {
          newScore[index+1] = inningResult
        });
        flatScoreboard.push(newScore);
      })
    }
  }
};
</script>