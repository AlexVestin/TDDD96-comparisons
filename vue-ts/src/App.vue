<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ImageGrid></ImageGrid>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ImageGrid from './components/ImageGrid.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ImageGrid
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html, body, div {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

body {
	line-height: 1;
}

#app {
  font-family: 'Montserrat', sans-serif;
  color: #2c3e50;
}
</style>
