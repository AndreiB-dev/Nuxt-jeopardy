<template>
  <div class="board">
    <div class="board__title">
      <h1>GameBoard</h1>
      <h3>Player: {{ playerName }}</h3>
      <h3>Score: {{ score }}</h3>
    </div>
    <Category
      v-for="(category, index) in categories"
      :key="category.category_id || index"
      :category="category"
    />
    <EndGameCard v-if="playedQuestions === 25" @reFetchData="reFetchData" />
  </div>
</template>
<script>
import Category from "./Category.vue";
import EndGameCard from "./EndGameCard.vue";

export default {
  name: "GameBoard",
  components: {
    Category,
    EndGameCard
  },
  computed: {
    categories() {
      return this.$store.getters["game/categories"];
    },
    score() {
      return this.$store.getters["game/score"];
    },
    playedQuestions() {
      return this.$store.getters["game/playedQuestions"];
    },
    playerName() {
      return this.$store.getters["player/playerName"];
    }
  },
  methods: {
    reFetchData() {
      this.$emit("reFetchData");
    }
  },
  mounted() {
    if (this.$store.getters["game/categories"].length === 0) {
      this.$store.dispatch("game/fetchQuestions");
    }
    this.$store.commit("game/dropScore");
    this.$store.commit("game/dropPlayedQuestions");
  }
};
</script>
<style scoped>
.board {
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 100px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
}
.board__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  margin-bottom: 40px;
}
</style>
