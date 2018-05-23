<template>
 <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome from Bootstrap</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><a class="btn btn-primary btn-lg" href="http://www.bootcss.com/" role="button" target="_blank">Learn more <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span></a></p>
      </div>
    </div>
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome from Font Awesome</h1>
        <p>Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.</p>
        <p>
          <i class="fa fa-camera"></i>
          <i class="fa fa-camera fa-2x"></i>
          <i class="fa fa-camera fa-3x"></i>
          <i class="fa fa-camera fa-4x"></i>
          <i class="fa fa-camera fa-5x"></i>
          <i class="fa fa-spinner fa-spin"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
