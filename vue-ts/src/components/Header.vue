<template>
  <div>
    <header class="header">
      <h1>VUE</h1>
      <div class="btn-container">
        <Button label="Sign up" class="color2"></Button>
        <Button label="Sign in" class="color1"></Button>
      </div>
    </header>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import Button from "./Button.vue";

export default {
  name: "HelloWorld",
  components: {
    Button
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}

.btn-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  margin-top: auto;
}
.header {
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
