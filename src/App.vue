<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    data () {
      return {

      }
    },
    components: {
      FooterGuide
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    color: red
</style>
