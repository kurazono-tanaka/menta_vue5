<template>
  <div id="questionnaire" class="parent">
    <div class="content">
      <div class="header">
        <p class="step">STEP2</p>
        <p>以下にお答えください</p>
      </div>
      <div class="main">
        <p class="category">現在、生命保険に加入されていますか</p>
        <label class="radio radio-step2"><input type="radio" value="yes" v-model="hoken1">はい</label>
        <label class="radio"><input type="radio" value="no" v-model="hoken1">いいえ</label>
        <p v-if="hoken1 !== ''" class="radio-style category">現在入院中ですか。また最近３ヶ月以内に医者の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label class="radio radio-step2" v-if="hoken1 !== ''"><input type="radio" value="yes" v-model="hoken2">はい</label>
        <label class="radio" v-if="hoken1 !== ''"><input type="radio" value="no" v-model="hoken2">いいえ</label>
        <p v-if="hoken2 !== ''" class="radio-style category">過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</p>
        <label class="radio radio-step2" v-if="hoken2 !== ''"><input type="radio" value="yes" v-model="hoken3">はい</label>
        <label class="radio" v-if="hoken2 !== ''"><input type="radio" value="no" v-model="hoken3">いいえ</label>
      </div>
    </div>

    <div class="button-style">
      <button class="button is-primary button-aida"><router-link to="/" class="button-kigou">前へ戻る</router-link></button>
      <button class="button is-primary"><router-link to="/consultation" class="button-kigou">次へ進む</router-link></button>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  name:'questionnaire',
  data () {
    return {
      hoken1: '',
      hoken2: '',
      hoken3: '',
    }
  }
}

</script>