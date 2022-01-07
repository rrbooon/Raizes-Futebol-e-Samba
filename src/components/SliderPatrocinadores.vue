<template>
     <TituloSessao :titulo="titulo" :corBackground="corTituloFundo" :corTitulo="corTitulo"/>
    <div id="SliderPatrocinadores">
       
        <div class="SliderPatrocinadores">
            <infinite-slide-bar  :duration="'40s'" :barStyle="{ background: 'transparent', padding: '5px 0', height: '150px' }">
                <div class="items">
                    <img src="/img/logo_raizes.png" alt="" v-for="(n, index) in 10" :key="index">
                </div>     
            </infinite-slide-bar>
        </div>
        
    </div>
</template>
<script>

import TituloSessao from '../components/TituloSessao.vue'
import InfiniteSlideBar from './InfiniteSlideBar.vue'




export default {
    name: 'SliderPatrocinadores',
    components: { 
        
        TituloSessao, 
        InfiniteSlideBar
      
 
    },
    data(){
        return{
            titulo: 'Patrocinadores',
            corTituloFundo: '#222',
            corTitulo: '#FFF'

        }
    }

}
</script>
<style scoped>
#SliderPatrocinadores{
    background-color: rgb(167, 0, 0);
}
.SliderPatrocinadores{
    display: flex;
    height: 400px;
    align-items: center;
    
}
.items{
    display: flex;
    justify-content: space-around;
}

.items img{
    max-height: 150px;
    margin: 0 35px 0 35px;
}
</style>