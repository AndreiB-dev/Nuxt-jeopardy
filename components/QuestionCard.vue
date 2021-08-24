<template>
  <div class="popup_wrapper" ref="popupRef">
    <div class="popup">
      <div class="popup__header">
        <h3>
          {{ (question.category && question.category.title) || "Category" }}
        </h3>
        <span class="close-btn" @click="onClose">
          <i class="material-icons">close</i>
        </span>
      </div>
      <div class="popup__contenet">
        <p class="timer">{{ timer }}</p>
        <p v-if="isCorrect === 0">{{ question.question }}</p>
        <p class="correct" v-if="isCorrect === 1">Correct!</p>
        <div v-if="isCorrect === -1">
          <p class="wrong">Wrong!</p>
          <p>Correct answer is...</p>
          <h1>{{ question.answer }}</h1>
        </div>
      </div>
      <div class="popup__footer">
        <button class="popup__footer-close-btn" @click="onClose">
          Surrender
        </button>
        <div class="input-group mb-3 popup__input">
          <input
            v-model="answer"
            placeholder="Your answer here..."
            @change="onchange"
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button class="btn btn-primary" @click="onAnswer">Answer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
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
      answer: "",
      isCorrect: 0,
      timer: 60,
      timerId: null
    };
  },
  methods: {
    countDownTimer() {
      if (this.timer > 0) {
        this.timerId = setTimeout(() => {
          this.timer -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.onWrong();
        this.closeQuestion();
      }
    },
    closeQuestion() {
      this.$emit("closeQuestion");
    },
    onClose() {
      this.onWrong();
      this.closeQuestion();
    },
    onAnswer() {
      if (this.answer.toLowerCase() === this.question.answer.toLowerCase()) {
        this.onCorrect();
        setTimeout(() => {
          this.closeQuestion();
        }, 1000);
      } else {
        this.onWrong();
        setTimeout(() => {
          this.closeQuestion();
        }, 3000);
      }
    },
    setColor() {
      this.$emit("setColor", this.isCorrect);
    },
    onchange(e) {
      this.answer = e.target.value;
    },
    onCorrect() {
      this.isCorrect = 1;
      clearTimeout(this.timerId);
      this.$store.commit("game/setPlayedQuestions");
      this.$store.commit("player/setCorrectAnswers");
      this.$store.dispatch("game/setScore", this.question.value);
      this.$store.commit("player/setTotalScore", this.question.value);
      this.setColor();
    },
    onWrong() {
      this.isCorrect = -1;
      clearTimeout(this.timerId);
      this.$store.commit("game/setPlayedQuestions");
      this.$store.commit("player/setWrongAnswers");
      this.$store.dispatch("game/setScore", this.question.value * -1);
      this.$store.commit("player/setTotalScore", this.question.value * -1);
      this.setColor();
    }
  },
  mounted() {
    this.countDownTimer();
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
.popup__input {
  position: relative;
  top: 8px;
  margin: 0 30px;
}
.popup__footer-close-btn {
  padding: 7px 16px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  background: #e93f3f;
}
.close-btn {
  cursor: pointer;
}
h3 {
  margin-bottom: 40px;
}
p {
  font-size: 32px;
}
.correct {
  font-size: 40px;
  font-weight: 600;
  color: #198754;
}
.wrong {
  font-size: 40px;
  font-weight: 600;
  color: #dc3545;
}
.timer {
  position: absolute;
  top: 100px;
}
</style>
