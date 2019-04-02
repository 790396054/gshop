<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getCategorys()
  },
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(['getAddress','getCategorys'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
