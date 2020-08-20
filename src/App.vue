<template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <GuestDashboard></GuestDashboard>
  </div>
</template>

<script>
  import GuestDashboard from './components/GuestDashboard.vue'

  import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    GuestDashboard,

    HelloWorld,
  }
}
</script>

<style>
#app {

}
</style>
