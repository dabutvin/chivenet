<template>
  <div>
    <h1>ChiveNet!</h1>
  </div>
</template>

<script>
import Chive from 'tiny-attribution-generator'
import JSONSource from 'tiny-attribution-generator/lib/inputs/json'
import ClearlyDefinedSource from 'tiny-attribution-generator/lib/inputs/clearlydefined'
import Renderer from 'tiny-attribution-generator/lib/outputs/template'
export default {
  name: 'app',
  mounted() {
    //var source = new JSONSource(packageData);

  // see https://docs.clearlydefined.io/using-data
    const packageData = JSON.stringify({
      coordinates: [
        'npm/npmjs/-/lodash/4.17.11',
        'npm/npmjs/-/request/2.88.0',
        'npm/npmjs/@angular/core/6.0.1',
        'nuget/nuget/-/newtonsoft.json/11.0.2',
        'git/github/facebook/react/v15.6.1',
      ],
    });

    const source = new ClearlyDefinedSource(packageData);

    var chive = new Chive(new Renderer(template))
    chive.read(source).then(() => {
      console.log(chive.build())
    })
  }
}

var packageData = JSON.stringify({
  packages: [
    {
      name: 'aabb',
      version: '1.0.4',
      license: 'MIT',
      website: 'https://github.com/testpackage/aabb',
      copyrights: ['Copyright (c) Test copyright'],
    },
    {
      name: 'bbcc',
      version: '1.1.1',
      license: 'ISC',
      website: 'https://github.com/testpackage/bbcc',
    },
    {
      name: 'ccdd',
      version: '1.3.4',
      license: 'MIT',
      website: 'https://github.com/testpackage/ccdd',
      copyrights: ['Copyright the holder', 'Copyright the other holder'],
    },
  ],
});
var template = `
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
</script>
