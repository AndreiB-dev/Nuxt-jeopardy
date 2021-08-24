<template>
  <div>
    <GameBoard 
      :key="componentKey"
      @reFetchData="reFetchData"
    />
  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "Index",
  components: {
    GameBoard
  },
      data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    reFetchData() {
      this.componentKey = !this.componentKey;
    }
  },
  mounted() {
  }
}
</script>
