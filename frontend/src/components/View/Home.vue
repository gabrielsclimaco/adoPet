<template lang='pug'>
  div.home
    brazilMap
</template>

<script>
import BrazilMap from '@/components/BrazilMap'

export default {
  name: 'home',
  components: {
    BrazilMap
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
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
