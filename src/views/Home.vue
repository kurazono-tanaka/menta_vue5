<template>
  <div id="home" class="parent">
    <div class="content">
      <div class="header">
         <p class="step">STEP1</p>
         <p>お客様の情報を入力してください</p>
      </div>
      <div class="main">
        <p class="category">-性別-</p>
        <label class="radio"><input type="radio" value="man" v-model="gender">男性</label>
        <label class="radio"><input type="radio" value="woman" v-model="gender">女性</label>
        <p class="category date">-生年月日-</p>

        <label class="date-label">
          <div class="select">
            <select v-model="year">
              <option v-for="n in 21" :key="`first-${n}`">{{n+1967}}年（昭和{{n+42}}）</option>
              <option v-for="n in 12" :key="`second-${n}`">{{n+1988}}年（平成{{n}}）</option>
            </select>
          </div>
          年
        </label>

        <label class="date-label">
          <div class="select">
            <select v-model="month">
              <option v-for="n in 12" :key="n">{{n}}</option>
            </select>
          </div>
          月
        </label>

        <label  class="date-label">
          <div class="select">
            <select v-model="date">
              <option v-for="n in 31" :key="n">{{n}}</option>
            </select>
          </div>
          日
        </label>
      </div>
    </div>
    <div class="button-style">
      <button class="button is-primary"><router-link to="/questionnaire" class="button-kigou">次へ進む</router-link></button>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  name:'home',
  data () {
    return {
      gender: '',
      year: 0,
      month: 0,
      date: 0,
    }
  },
}
</script>

