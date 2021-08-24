<template>
  <div>
    <Navbar />
    <main>
      <div class="container">
        <Nuxt keep-alive />
      </div>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>
<style scope></style>
