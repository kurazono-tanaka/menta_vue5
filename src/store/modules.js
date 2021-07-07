const state = {
  gender: '',
  yearValue: '1990年 (平成2)',
  monthValue: '1',
  dateValue: '1',
  question1: '',
  question2: '',
  question3: '',
  text: '',
};

const mutations = {
  setGender(state, gender) {
    state.gender = gender;
  },
  setYear(state, year) {
    state.yearValue = year;
  },
  setMonth(state, month) {
    state.monthValue = month;
  },
  setDate(state, date) {
    state.dateValue = date;
  },
  setQuestion1(state, question) {
    state.question1 = question;
  },
  setQuestion2(state, question) {
    state.question2 = question;
  },
  setQuestion3(state, question) {
    state.question3 = question;
  },
  setText(state, text) {
    state.text = text;
  },
};

const getters = {
  getGender: (state) => {
    return state.gender;
  },
  fullDate: (state) => {
    const yearStr = state.yearValue;
    const year = yearStr.substr(0, 5);
    return `${year}${state.monthValue}月${state.dateValue}日`;
  },
  getQuestion1: (state) => {
    return state.question1;
  },
  getQuestion2: (state) => {
    return state.question2;
  },
  getQuestion3: (state) => {
    return state.question3;
  },
  getText: (state) => {
    return state.text;
  },
};

const actions = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
