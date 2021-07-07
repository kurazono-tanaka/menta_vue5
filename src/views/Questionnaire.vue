<template>
  <div id="questionnaire" class="parent">
    <div class="content">
      <div class="header">
        <p class="step">STEP2</p>
        <p>以下にお答えください</p>
      </div>
      <div class="main">
        <p class="category">現在、生命保険に加入されていますか</p>
        <label class="radio radio-step2"
          ><input type="radio" value="はい" v-model="question1" />はい</label
        >
        <label class="radio"
          ><input
            type="radio"
            value="いいえ"
            v-model="question1"
          />いいえ</label
        >
        <p v-if="question1 !== ''" class="radio-style category">
          現在入院中ですか。また最近３ヶ月以内に医者の診断・検査の結果、入院・手術をすすめられたことはありますか？
        </p>
        <label class="radio radio-step2" v-if="question1 !== ''"
          ><input type="radio" value="はい" v-model="question2" />はい</label
        >
        <label class="radio" v-if="question1 !== ''"
          ><input
            type="radio"
            value="いいえ"
            v-model="question2"
          />いいえ</label
        >
        <p v-if="question2 !== ''" class="radio-style category">
          過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？
        </p>
        <label class="radio radio-step2" v-if="question2 !== ''"
          ><input type="radio" value="はい" v-model="question3" />はい</label
        >
        <label class="radio" v-if="question2 !== ''"
          ><input
            type="radio"
            value="いいえ"
            v-model="question3"
          />いいえ</label
        >
      </div>
    </div>

    <div class="button-style">
      <button class="button is-primary button-aida">
        <router-link to="/" class="button-kigou">前へ戻る</router-link>
      </button>
      <button class="button is-primary" @click="setStep2">
        <router-link to="/consultation" class="button-kigou"
          >次へ進む</router-link
        >
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "questionnaire",
  data() {
    return {
      question1: "",
      question2: "",
      question3: "",
    };
  },
  methods: {
    setStep2() {
      this.$store.commit("setQuestion1", this.question1);
      this.$store.commit("setQuestion2", this.question2);
      this.$store.commit("setQuestion3", this.question3);
    },
  },
};
</script>
