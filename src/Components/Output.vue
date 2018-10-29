<template>
  <div>
    <iframe width="100%" height="100%" :srcdoc="rendering"></iframe>
  </div>
</template>

<script>
import Chive from 'tiny-attribution-generator'
import JSONSource from 'tiny-attribution-generator/lib/inputs/json'
import ClearlyDefinedSource from 'tiny-attribution-generator/lib/inputs/clearlydefined'
import Renderer from 'tiny-attribution-generator/lib/outputs/template'

export default {
  name: 'Output',
  props: ['coordinates', 'template'],
  asyncComputed: {
    rendering: async function() {
      var vm = this
      try {
        var inputData = JSON.stringify({coordinates: vm.coordinates})
        const source = new ClearlyDefinedSource(inputData)
        var chive = new Chive(new Renderer(vm.template))
        await chive.read(source)
        return chive.build()
        return output
      } catch (e) {
        console.log(e)
        return ''
      }
    }
  }
}

var packageData = JSON.stringify({
  packages: [
    {
      name: 'aabb',
      version: '1.0.4',
      license: 'MIT',
      website: 'https://github.com/testpackage/aabb',
      copyrights: ['Copyright (c) Test copyright']
    },
    {
      name: 'bbcc',
      version: '1.1.1',
      license: 'ISC',
      website: 'https://github.com/testpackage/bbcc'
    },
    {
      name: 'ccdd',
      version: '1.3.4',
      license: 'MIT',
      website: 'https://github.com/testpackage/ccdd',
      copyrights: ['Copyright the holder', 'Copyright the other holder']
    }
  ]
})
</script>

<style scoped>
iframe {
  height: 95vh;
  margin: 15px;
  width: 95%;
  border-radius: 15px;
}
</style>
