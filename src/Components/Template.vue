<template>
  <div class="template-container">
    <codemirror v-model="template" :options="cmOptions" @input="$emit('update:template', template)"></codemirror>
  </div>
</template>

<script>
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

export default {
  name: 'Template',
  mounted() {
    this.$emit('update:template', this.template)
  },
  components: {
    codemirror
  },
  data() {
    return {
      template: `
<h1>OSS Attribution</h1>
  <ol>
    {{#buckets}}
    <li>
      <h2>{{name}}</h2>
      <ol>
        {{#packages}}
        <li>
          <details>
            <summary>{{name}} {{version}}</summary>
            {{#if website}}
            <p><a href="{{website}}">{{website}}</a></p>
            {{/if}}
            {{#if copyrights}}
            <ul>
              {{#copyrights}}
              <li>{{this}}</li>
              {{/copyrights}}
            </ul>
            {{/if}}
          </details>
        </li>
        {{/packages}}
      </ol>
      <pre>{{text}}</pre>
    </li>
    {{/buckets}}`,
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'material',
        lineNumbers: true,
        line: true
      }
    }
  }
}
</script>

<style>
.CodeMirror,
.vue-codemirror {
  height: 100%;
  border-radius: 15px;
}

.template-container {
  height: 90%;
  margin: 0 15px 15px 15px;
}
</style>
