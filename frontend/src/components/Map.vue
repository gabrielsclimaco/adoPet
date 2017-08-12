<template lang='pug'>
  div().map
    map
</template>

<script>
import brazilMap from '@/assets/brazil-map'

export default {
  name: 'map',
  components: {
  },
  async beforeRouteEnter (to, from, next) {
    try {
      // await Do something before router PUSH
      // next(vm => vm.foo = bar)
      next()
    } catch (err) {
      console.log(err)
    }
  },
  props: {
  },
  data () {
    return {}
  },
  computed: {
    map () {
      var div = document.createElement('div')
      div.innerHTML = brazilMap
      return div
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
#svg-map path { fill:#0094d9 }
    #svg-map text { fill:#fff; font:12px Arial-BoldMT, sans-serif; cursor:pointer }
    #svg-map a{ text-decoration:none }
    #svg-map a:hover { cursor:pointer; text-decoration:none }
    #svg-map a:hover path{ fill:#003399 !important }
    #svg-map .circle { fill:#66ccff }
    #svg-map a:hover .circle { fill:#003399 !important; cursor:pointer }
</style>
