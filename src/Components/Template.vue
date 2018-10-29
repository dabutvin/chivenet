<template>
  <div>
    <textarea v-model="template" @input="$emit('update:template', template)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Template',
  mounted() {
    this.$emit('update:template', this.template)
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
    {{/buckets}}`
    }
  }
}
</script>

<style>
</style>
