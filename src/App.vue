<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<script></script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.parent {
  width: 700px;
}

.content {
  border-radius: 5px;
  border: 1px solid #00a6a8;
}

.header {
  height: 40px;
  line-height: 40px;
  background-color: #e0ffff;
  text-align: center;
  position: relative;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #00a6a8;
}

.step {
  width: 50px;
  height: 20px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background-color: #00bfff;
  border-radius: 2px;
  font-size: 0.8em;
}

.main {
  padding: 20px 15px;
}

.category {
  color: #01797a;
  padding-left: 10px;
}

.date {
  padding-top: 20px;
}

.date-label {
  display: inline-block;
  vertical-align: baseline;
}

.button-style {
  display: flex;
  justify-content: center;
}

.button-kigou {
  color: white;
  position: relative;
}

.button-kigou::after {
  content: ">";
  margin-left: 10px;
  font-size: 0.5em;
  vertical-align: 2px;
}

.button-aida {
  margin-right: 20px;
}

.radio-style {
  margin-top: 20px;
}

.radio-step2 {
  margin-left: 20px;
}
</style>
