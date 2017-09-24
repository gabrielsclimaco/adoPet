<template lang='pug'>
  div().federation-units
    a()
      path(stroke='#FFFFFF', stroke-width='1.0404', stroke-linecap='round', stroke-linejoin='round', :d='federationUnits.statePath')
      path.circle(v-if='federationUnits.circlePath', :d='federationUnits.circlePath')
      text(transform='matrix(1 0 0 1 ' + federationUnits.translationx + ' ' + federationUnits.translationy + ')') federationUnits.initials
</template>

<script>
export default {
  name: 'federation-units',
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
    federationUnit: {
      type: Object,
      default: {
        title: null,
        initials: null,
        statePath: null,
        circlePath: null,
        translationx: null,
        translationy: null
      }
    }
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
