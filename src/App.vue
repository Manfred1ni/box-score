<template>
  <div id="app">
    <div id="wrap">
      <team-logo teamId="2"></team-logo>
      <div id="results">
        <result-title :results="game"></result-title>
        <scoreboard :scoreboard="game.scoreboard"></scoreboard>
      </div>
      <team-logo teamId="1"></team-logo>
    </div>
  </div>
</template>

<script>
import Scoreboard from "./components/Scoreboard.vue";
import ResultTitle from "./components/ResultTitle.vue";
import TeamLogo from "./components/TeamLogo.vue";

import { format } from "date-fns";

export default {
  name: "app",
  components: {
    Scoreboard,
    ResultTitle,
    TeamLogo
  },
  data() {
    return {
      game: {
        homeTeam: "Brewers",
        homeScore: 2,
        awayTeam: "Mariners",
        awayScore: 4,
        gameTime: format(new Date(2019, 6, 27), "dddd, MMMM D, YYYY"),
        scoreboard: [
          {
            team: "SEA",
            scores: [2, 1, 0, 0, 0, 0, 0, 0, 1],
            hits: 8,
            errors: 0
          },
          {
            team: "MIL",
            scores: [0, 0, 0, 0, 0, 2, 0, 0, 0],
            hits: 5,
            errors: 1
          }
        ],
        winningPitcher: "",
        losingPitcher: "",
        save: ""
      },
      homeTeam: {
        logo: "",
        wonGames: 42,
        lostGames: 38
      },
      awayTeam: {
        logo: "",
        wonGames: 37,
        lostGames: 47
      }
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

#wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#results {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
