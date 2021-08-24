<template>
  <section>
      <div class="container">
        <h1>Statistic</h1>
        <br>
        <h3>Player: {{statistic.playerName}}</h3>
        <br>
        <p>Games played: {{statistic.playedGames}}</p>
        <br>
        <p>Correct answers: {{statistic.correctAnswers}}</p>
        <br>
        <p>Wrong answers: {{statistic.wrongAnswers}}</p>
        <br>
        <h3>Total score: {{statistic.totalScore}}</h3>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playerName: ""
    };
  },
  computed: {
    statistic() {
      return this.$store.getters["player/statistic"];
    }
  },
  methods: {
    onchange(e) {
      this.playerName = e.target.value;
    },
    onSubmit() {
      this.$store.commit("player/setPlayerName", this.playerName);
      this.$store.commit("player/setPlayedGames");
      window.localStorage.playerName = this.playerName;
      this.$router.push("/game");
    }
  }
};
</script>

<style scoped>
.container {
  width: 400px;
  margin: 100px auto;
}
</style>
