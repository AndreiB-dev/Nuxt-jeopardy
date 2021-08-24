<template>
  <div class="popup_wrapper" ref="popupRef">
    <div class="popup">
      <div class="popup__header">
        <h3>Game over</h3>
      </div>
      <div class="popup__contenet">
        <h1>Score: {{ score }}</h1>
      </div>
      <div class="popup__footer">
        <button class="btn btn-primary" @click.prevent="onNewGame">
          New Game
        </button>
        <button class="btn btn-primary" @click.prevent="onExit">Exit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {};
  },
  computed: {
    score() {
      return this.$store.getters["game/score"];
    }
  },
  methods: {
    onNewGame() {
      this.reFetchData();
      this.$store.commit("player/setPlayedGames");
      this.$store.commit("game/setQuestions", []);
      this.$store.commit("game/dropPlayedQuestions");
    },
    onExit() {
      this.$store.commit("player/dropStatistic");
      this.$router.push("/");
    },
    reFetchData() {
      this.$emit("reFetchData");
    }
  }
};
</script>

<style scoped>
.popup_wrapper {
  background: rgba(54, 54, 54, 0.089);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.popup {
  width: 800px;
  padding: 16px;
  position: fixed;
  top: 50px;
  left: calc(50% - 400px);
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  z-index: 999;
}
.popup__header,
.popup__footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__contenet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #c0c0c0;
  height: 350px;
}
</style>
