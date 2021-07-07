<template>
  <div id="consultation" class="parent">
    <div class="content">
      <div class="header">
        <p class="step">STEP3</p>
        <p>ご相談内容をご記入ください</p>
      </div>
      <div class="main">
        <p class="category">-ご相談内容-</p>
        <textarea v-model="text" class="textarea" rows="10"></textarea>
      </div>
    </div>

    <div class="button-style">
      <button class="button is-primary button-aida" @click="setStep3">
        <router-link to="/questionnaire" class="button-kigou"
          >前へ戻る</router-link
        >
      </button>
      <button class="button is-primary" @click="setStep3">
        <router-link to="/verification" class="button-kigou"
          >次へ進む</router-link
        >
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'consultation',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    setStep3() {
      this.$store.commit('setText', this.text);
    },
  },
};
</script>
