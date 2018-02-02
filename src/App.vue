<template>
  <div id="app">
    <v-app>
      <div class="header">
        Weather Report
      </div>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  body {
    margin: 0;
    background-color: #eeeeee;
    font-family: serif;
  }

  #app {}

  .header {
    height: 60px;
    background: #14568c;
    color: #ffffff;
    text-align: left;
    font-size: 25px;
    line-height: 2.5;
    padding: 0px 20px;
  }
</style>