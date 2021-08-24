<template>
  <div class="container">
    <h4>{{category.questions[2].category.title || category.questions[0].category.title}}</h4>
    <span class="questions">
      <Question 
        v-for="(question, index) in category.questions" 
        :key="index"
        :question="question" 
        />
    </span>
  </div>
</template>
<script>
import Question from "./Question.vue";

export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Question
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background: #f8f9fa;
}
.questions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
</style>
