<template>
  <div class="container">
    <QuestionCard
      v-if="isQuestionVisible"
      @closeQuestion="closeQuestion"
      :question="question"
      @setColor="setColor"
    />
    <button
      type="button"
      class="btn btn-primary btn-question"
      @click="showQuestion"
      :disabled="isQuestionDisaled"
      :style="{ background: color }"
    >
      {{ question.value || "N/A" }}
    </button>
  </div>
</template>
<script>
import QuestionCard from "./QuestionCard.vue";

export default {
  name: "Question",
  components: {
    QuestionCard
  },
  props: {
    question: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isQuestionVisible: false,
      isQuestionDisaled: false,
      color: "#0d6efd"
    };
  },
  methods: {
    showQuestion() {
      this.isQuestionVisible = true;
      this.isQuestionDisaled = true;
    },
    closeQuestion() {
      this.isQuestionVisible = false;
    },
    setColor(isCorrect) {
      if (isCorrect === 1) {
        this.color = "#198754";
      }
      if (isCorrect === -1) {
        this.color = "#dc3545";
      }
    }
  }
};
</script>
<style scoped>
.btn-question {
  width: 150px;
  font-size: 30px;
}
</style>
