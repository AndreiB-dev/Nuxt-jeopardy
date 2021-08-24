export const state = () => ({
    playerName: null,
    totalScore: 0,
    playedGames: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
})

export const mutations = {
    setPlayerName(state, name) {
        state.playerName = name;
    },
    setTotalScore(state, score) {
        state.totalScore = state.totalScore + score;
    },
    setPlayedGames(state) {
        state.playedGames = state.playedGames + 1;
    },
    setCorrectAnswers(state) {
        state.correctAnswers = state.correctAnswers + 1;
    },
    setWrongAnswers(state) {
        state.wrongAnswers = state.wrongAnswers + 1;
    },
    dropStatistic(state) {
        state.playerName = null;
        state.totalScore = 0;
        state.playedGames = 0;
        state.correctAnswers = 0;
        state.wrongAnswers = 0;
    }
}

export const actions = {
    
}

export const getters = {
    playerName: state => state.playerName,
    statistic: state => { 
        return {
            playerName: state.playerName,
            totalScore: state.totalScore,
            playedGames: state.playedGames,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
        }
    }
}