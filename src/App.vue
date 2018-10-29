<template>
  <div>
    <div class="left">
      <div class="input">
        <InputData v-bind:coordinates.sync="coordinates"></InputData>
      </div>
      <div class="template">
        <Template v-bind:template.sync="template"></Template>
      </div>
    </div>
    <div class="right">
      <div class="output">
        <Output v-bind:coordinates="coordinates" v-bind:template="template"></Output>
      </div>
    </div>
  </div>
</template>

<script>
import InputData from './Components/InputData'
import Template from './Components/Template'
import Output from './Components/Output'

export default {
  name: 'app',
  components: {
    InputData,
    Template,
    Output
  },
  data() {
    return {
      coordinates: [],
      template: ''
    }
  }
}
</script>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.left {
  width: 40%;
  background: blue;
  float: left;
}

.left .input {
  height: 50vh;
}

.left .template {
  height: 50vh;
}

.right {
  width: 60%;
  background: green;
  height: 100vh;
  float: right;
}
</style>
