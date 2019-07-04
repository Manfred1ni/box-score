<template>
  <div>
    <h2>{{ results.awayTeam }} {{ results.awayScore }} - {{ results.homeScore }} {{ results.homeTeam }}</h2>
    <h4>{{ results.gameTime }}</h4>
  </div>
</template>
<script>
export default {
  props: { results: Object }
};
</script>