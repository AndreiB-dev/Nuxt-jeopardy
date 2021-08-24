export const state = () => ({
    questions: [],
    score: 0,
    playedQuestions: 0,
})

export const mutations = {
    setQuestions(state, questions) {
        state.questions = questions
    },
    setScore(state, score) {
        state.score = state.score + score
    },
    dropScore(state) {
        state.score = 0
    },
    setPlayedQuestions(state) {
        state.playedQuestions = state.playedQuestions + 1
    },
    dropPlayedQuestions(state) {
        state.playedQuestions = 0
    },
}

export const actions = {
    async fetchQuestions({ commit }) {
        try {
            let randomQuestions = [];
            for (let i = 0; i < 5; i++) {
                const randomCategory = Math.ceil(Math.random() * 18000) + 1;
                const categoryQuestions = await this.$axios.$get("https://jservice.io/api/clues?category=" + randomCategory);
                categoryQuestions.map(item => {
                    if (typeof item.value !== 'number' || !item.value) {
                        item.value = 750
                    }
                });
                if (categoryQuestions.length > 5) {
                    const randomFive = [];
                    const randomIndexes = [];
                    while (randomIndexes.length < 5) {
                        const randomNumber = Math.ceil(Math.random() * categoryQuestions.length - 1);
                        if (randomIndexes.indexOf(randomNumber) === -1) randomIndexes.push(randomNumber);
                    }
                    randomIndexes.map(idx => randomFive.push(categoryQuestions[idx]))
                    randomQuestions.push({ category_id: randomCategory, questions: [...randomFive] })
                } else {
                    randomQuestions.push({ category_id: randomCategory, questions: [...categoryQuestions] })
                }
            }
            commit('setQuestions', randomQuestions)
        } catch (err) {
            console.log("Fetch error", err);
        }
    },
    setScore({ commit }, score) {
        commit('setScore', score)
    }
}

export const getters = {
    categories: state => state.questions,
    score: state => state.score,
    playedQuestions: state => state.playedQuestions,
}