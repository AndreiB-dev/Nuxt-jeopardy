<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Jeopardy</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link
              exact
              no-prefetch
              active-class="active"
              class="nav-link"
              to="/game"
            >
              Game
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/score">
              Score
            </nuxt-link>
          </li>
        </ul>
      </div>
      <button class="btn btn-primary" @click.prevent="onExit">Exit</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    onExit() {
      this.$store.commit("player/dropStatistic");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 26px;
}
</style>
