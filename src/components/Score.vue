<template>
  <div>
    <v2-table :data="scoreboard">
      <v2-table-column label="Teams" prop="team"></v2-table-column>
      <v2-table-column
        v-for="inning in 9"
        :key="inning"
        :label="inning.toString()"
        :prop="`score[${inning}]`"
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
  }
};
</script>