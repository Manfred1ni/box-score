<template>
  <div class="component">
    <img id="logo" :src="logoPath">
    <span v-if="team" id="record">({{ team.wonGames }}-{{ team.lostGames }})</span>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      team: null,
      logoPath: null
    };
  },
  props: {
    teamId: String
  },
  async mounted() {
    this.team = (await axios.get(
      `http://localhost:3000/teams/${this.teamId}`
    )).data;
    this.logoPath = `assets/${this.team.shortName}.svg`;
  }
};
</script>
<style>
#logo {
  height: 7rem;
  width: 7rem;
}

.component {
  display: flex;
  flex-direction: column;
}
</style>

