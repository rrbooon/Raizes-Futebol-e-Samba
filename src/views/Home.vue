<template>
  <div class="home">
    <Header :titulo="'Raízes Futebol e Samba'" :subtitulo="'Nasceu Raízes e tornou-se uma Alegria.....'"/>
    
    <PrincipiosInstitucionais />
  
    <SliderPatrocinadores />

    <Maps />

    <Contato />

    
  </div>
</template>

<script>
import PrincipiosInstitucionais from '../components/PrincipiosInstitucionais.vue'
import Header from '../components/Header.vue'
import SliderPatrocinadores from '../components/SliderPatrocinadores.vue'
import Maps from '../components/Maps.vue'
import Contato from '../components/Contato.vue'


export default {
  name: 'Home',
  components: {
    Header,
    PrincipiosInstitucionais,
    SliderPatrocinadores,
    Maps,
    Contato,
  }
}
</script>
<style scoped>
 
</style>