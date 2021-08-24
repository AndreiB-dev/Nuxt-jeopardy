<template>
  <section>
    <form @submit.prevent="onSubmit">
      <h1>Introduce yourself...</h1>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Your name"
          v-model="playerName"
          @change="onchange"
        />
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <button class="btn btn-primary" type="submit">Start game</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      playerName: "",
      error: ""
    };
  },
  methods: {
    checkName() {
      let regexp = /^[A-Za-zА-Яа-я0-9_]+/g;
      if (!this.playerName) {
        this.error = "Please enter your name at least 2 chars...";
        return false;
      } else if (this.playerName.length < 2) {
        this.error = "Please enter your name at least 2 chars...";
        return false;
      } else if (!regexp.test(this.playerName)) {
        this.error = "Only latin and cirillic chars, digits and _";
        return false;
      } else {
        this.error = "";
        return true;
      }
    },
    onchange(e) {
      this.playerName = e.target.value;
    },
    onSubmit() {
      if (this.checkName()) {
        this.$store.commit("player/setPlayerName", this.playerName);
        this.$store.commit("player/setPlayedGames");
        window.localStorage.playerName = this.playerName;
        this.$router.push("/game");
      }
    }
  }
};
</script>

<style scoped>
form {
  width: 400px;
  margin: 100px auto;
}
input {
  margin-bottom: 20px;
  margin-top: 40px;
}
button {
  width: 400px;
}
</style>
