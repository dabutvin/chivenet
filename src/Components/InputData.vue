<template>
  <div class="input-container">
    <codemirror v-model="text" :options="cmOptions" @input="$emit('update:coordinates', coordinates)"></codemirror>
  </div>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

export default {
  name: 'InputData',
  data() {
    return {
      coordinates: [
        'npm/npmjs/-/lodash/4.17.11',
        'nuget/nuget/-/newtonsoft.json/11.0.2'
      ],
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'material',
        lineNumbers: true,
        line: true
      }
    }
  },
  components: {
    codemirror
  },
  mounted() {
    this.$emit('update:coordinates', this.coordinates)
  },
  computed: {
    text: {
      get: function() {
        return JSON.stringify(this.coordinates, null, 2)
      },
      set: function(val) {
        try {
          this.coordinates = JSON.parse(val)
        } catch (e) {
          // ignore }
        }
      }
    }
  }
}
</script>

<style scoped>
.input-container {
  height: 90%;
  margin: 15px 15px 0 15px;
}
</style>
