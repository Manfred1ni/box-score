<template>
  <div>
    <v2-table :data="flattenedScoreboard">
      <v2-table-column label="Teams" prop="team"></v2-table-column>
      <v2-table-column
        v-for="inning in 9"
        v-bind:key="inning"
        :label="inning.toString()"
        :prop="inning.toString()"
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
    flattenedScoreboard() {
      const flatScoreboard = [];

      this.scoreboard.map(score => {
        const newScore = {
          team: score.team,
          hits: score.hits,
          errors: score.errors,
          innings: score.scores.length,
          totalRuns: score.scores.reduce((acc, val) => acc + val)
        };
        score.scores.forEach((inningResult, index) => {
          newScore[index + 1] = inningResult;
        });
        flatScoreboard.push(newScore);
      });
      return flatScoreboard;
    }
  }
};
</script>