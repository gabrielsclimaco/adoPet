<template lang='pug'>
div.home
  h1 {{ teste }}
</template>

<script>
import api from '@/api/hello'

export default {
  name: 'home',
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
    return {
      teste: 'a'
    }
  },
  computed: {
  },
  methods: {
  },
  async mounted () {
    let { data } = await api.getWorld()

    this.teste = data[0].title
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
