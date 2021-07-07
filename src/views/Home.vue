<template>
  <div id="home" class="parent">
    <div class="content">
      <div class="header">
        <p class="step">STEP1</p>
        <p>お客様の情報を入力してください</p>
      </div>
      <div class="main">
        <p class="category">-性別-</p>
        <label class="radio"
          ><input type="radio" value="男性" v-model="gender" />男性</label
        >
        <label class="radio"
          ><input type="radio" value="女性" v-model="gender" />女性</label
        >
        <p class="category date">-生年月日-</p>

        <label class="date-label">
          <div class="select">
            <select v-model="yearValue" @change="calculation">
              <option v-for="(item, index) in yearList" :key="index">{{
                item
              }}</option>
            </select>
          </div>
          年
        </label>

        <label class="date-label">
          <div class="select">
            <select v-model="monthValue" @change="calculation">
              <option v-for="(item, index) in monthList" :key="index">{{
                item
              }}</option>
            </select>
          </div>
          月
        </label>

        <label class="date-label">
          <div class="select">
            <select v-model="dateValue" @change="calculation">
              <option v-for="(item, index) in dateList" :key="index">{{
                item
              }}</option>
            </select>
          </div>
          日
        </label>
      </div>
    </div>
    <div class="button-style">
      <button class="button is-primary" @click="setStep1">
        <router-link to="/questionnaire" class="button-kigou"
          >次へ進む</router-link
        >
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import definition from '@/helpers/definition';

export default {
  name: 'home',
  data() {
    return {
      gender: '',
      yearList: definition.year,
      monthList: definition.month,
      dateList: definition.data,
      yearValue: '1990年 (平成2)',
      monthValue: '1',
      dateValue: '1',
    };
  },
  methods: {
    calculation() {
      const obj = definition.days({
        yearValue: this.yearValue,
        monthValue: this.monthValue,
      });
      this.dateList = obj.dateList;
    },
    setStep1() {
      this.$store.commit('setGender', this.gender);
      this.$store.commit('setYear', this.yearValue);
      this.$store.commit('setMonth', this.monthValue);
      this.$store.commit('setDate', this.dateValue);
    },
  },
};
</script>
