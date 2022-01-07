<template>
  <div id="app">
    <div class="app">
      <Navbar :logo="logo_src" :alt="app_name"/>
      <div class="teste">
        <router-view/>
      </div>
      <Rodape />
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Rodape from './components/Rodape.vue'

export default {
  components: { 
    Navbar,
    Rodape
  },
  name: "App",
  data(){
    return{
      logo_src: "/img/logo_raizes.png",
      app_name: "Raizes Futebol e Samba"

    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

.app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  min-height: 100vh;
}
</style>
