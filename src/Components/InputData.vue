<template>
  <div>
    <textarea v-model="text" @input="$emit('update:coordinates', coordinates)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'InputData',
  data() {
    return {
      coordinates: [
        'npm/npmjs/-/lodash/4.17.11',
        'nuget/nuget/-/newtonsoft.json/11.0.2',
      ]
    }
  },
  mounted() {
    this.$emit('update:coordinates', this.coordinates)
  },
  computed: {
    text: {
      get: function() {
        return JSON.stringify(this.coordinates)
      },
      set: function(val) {
        this.coordinates = JSON.parse(val)
      }
    }
  },
  methods: {
    onJsonChange(value) {
      this.$emit('update:coordinates', this.coordinates)
    }
  }
}
</script>

<style scoped>
textarea {
  height: 45vh;
  width: 100%;
}
</style>
