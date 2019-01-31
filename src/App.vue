<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';

export default {
    name: 'app',
    components: {
        Navbar
    }
}
</script>
