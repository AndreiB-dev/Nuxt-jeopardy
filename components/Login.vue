<template>
  <section>
    <form @submit="onSubmit">
      <h1>Introduce yourself...</h1>  
      <div class="form-group">
        <input 
          type="text" class="form-control" 
          placeholder="Your name"
          v-model="playerName" 
          @change="onchange" 
        />
      </div>
      <button class="btn btn-primary" type="submit">Start game</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
    data() {
    return {
      playerName: "",
    };
  },
    methods: {
    onchange(e) {
      this.playerName = e.target.value;
    },
    onSubmit() {
      this.$store.commit("player/setPlayerName", this.playerName);
    }
  },
};
</script>

<style scoped>
form {
    width: 400px;
    margin: 0 auto;
}
input {
    margin-bottom: 20px;
}
button {
    width: 400px;
}
</style>
