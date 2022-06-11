<template>
  <div id="app">
    <div class="app">
      <Navbar :logo="logo_src" :alt="app_name"/>
      <div class="teste">
        <router-view/>
      </div>
      <div id="xl_auth" style="width: 100%; height: 1000px"></div>

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
  },
  methods: {
    login() {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://login-sdk.xsolla.com/latest/";
      const head = document.getElementsByTagName("head")[0];
      head.appendChild(s);
      let xl;

      s.addEventListener("DOMContentLoaded", function () {
        xl = new XsollaLogin.Widget({
          projectId: "cb8e8b67-e9b7-11ec-8589-42010aa80004",
          callbackUrl: "https://login.xsolla.com/api/blank", // URL to redirect the user to after registration/authentication/password reset.
          preferredLocale: "en_XX"
        });

        xl.mount("xl_auth");
      });

      // function for opening a widget by button
      function openWidget() {
        xl.open();
      }
    }
  },
  mounted(){
    this.login()
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
