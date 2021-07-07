<template>
  <div id="verification" class="parent">
    <div class="content">
      <div class="header">
        <p class="step">STEP4</p>
        <p>以下の内容をご確認ください</p>
      </div>
      <div class="main">
        <p class="category">-性別-</p>
        <p>{{ $store.getters.getGender }}</p>
        <p class="category">-生年月日-</p>
        <p>{{ $store.getters.fullDate }}</p>
        <p class="category">現在、生命保険に加入されていますか</p>
        <p>{{ $store.getters.getQuestion1 }}</p>
        <p class="category">
          現在入院中ですか。また最近３ヶ月以内に医者の診断・検査の結果、入院・手術をすすめられたことはありますか？
        </p>
        <p>{{ $store.getters.getQuestion2 }}</p>
        <p class="category">
          過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？
        </p>
        <p>{{ $store.getters.getQuestion3 }}</p>
        <p class="category">-ご相談内容-</p>
        <p>{{ $store.getters.getText }}</p>
      </div>
    </div>

    <div class="button-style">
      <button class="button is-primary button-aida">
        <router-link to="/consultation" class="button-kigou"
          >前へ戻る</router-link
        >
      </button>
      <button class="button is-primary">
        <router-link to="/verification" class="button-kigou">送信</router-link>
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "verification",
  data() {
    return {
      text: "",
    };
  },
};
</script>
