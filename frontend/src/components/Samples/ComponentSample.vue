<template lang='pug'>
  div().sample
</template>

<script>
export default {
  name: 'sample',
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
    /*
    foo: {
      type: String,
      default: 'bar'
    }
    */
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
</style>
