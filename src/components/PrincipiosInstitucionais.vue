<template>
    <div id="principios_institucionais">
        <TituloSessao :titulo="titulo" :corBackground="corTituloFundo" :corTitulo="corTitulo"/>
        <div class="principios_institucionais">
            <div class="elemento_principio">
                <div class="titulo_elemento missao" @click="missaoDisplay">
                    <h1>Missão</h1>
                </div>
                <span class="alinhar_texto">
                    <div class="texto_elemento missao" v-if="missao">
                        Manter a chama da Várzea acesa através do Raízes Futebol e Samba, onde valorizamos a Velha Guarda, Investimos no Presente para que  possamos solidificar nossas Raízes do Amanhã.
                    </div>
                </span>
            </div>
            <div class="elemento_principio">
                <div class="titulo_elemento visao" @click="visaoDisplay">
                    <h1>Visão</h1>
                </div>
                <span class="alinhar_texto">
                    <div class="texto_elemento visao"  v-if="visao"> 
                        Ser vanguardista na Várzea Paulistana através de Projetos inovadores que mantenham nossa tradição e nos torne referência como Núcleo de Excelência Futebolística  e Social da Região Leste Paulistana.
                    </div>
                </span>
            </div>
            <div class="elemento_principio">
                <div class="titulo_elemento valores" @click="valoresDisplay">
                    <h1>Valores</h1>
                </div>
                <span class="alinhar_texto">
                    <div class="texto_elemento valores" v-if="valores">
                        Nossa Instituição  está pautada por um ambiente amplamente familiar, onde a amizade , o respeito às  diferenças, aos princípios éticos, morais e atitudinais serão marca registrada de nossa comunidade.
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import TituloSessao from '../components/TituloSessao.vue'
export default {
    name: 'PrincipiosInstitucionais',
    components:{
        TituloSessao
    },
    data(){
        return{
            missao:false,
            visao: false,
            valores: false,
            titulo: 'Princípios Institucionais',
            corTituloFundo: 'rgb(167, 0, 0)',
            corTitulo: '#FFF'

            

        }
    },
    methods: {
        missaoDisplay(){
            this.missao = !this.missao;
            this.visao = false;
            this.valores = false
        },
        visaoDisplay(){
            this.visao = !this.visao;
            this.valores = false
            this.missao = false
        },
        valoresDisplay(){
            this.valores = !this.valores;
            this.missao = false;
            this.visao = false;

        }
    }

}
</script>
<style scoped>

#principios_institucionais{
    background-color: white;
}

.principios_institucionais{
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.elemento_principio{
    width: 300px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.titulo_elemento{
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    text-decoration: none;
    box-shadow: 0 3px 6px #00000029;
    border: none;
    height: 50px;
    font-family: 'Be Vietnam Pro', sans-serif;
}
.alinhar_texto{
    width: 100%;
    display: flex;
    justify-content: center;
}
.texto_elemento{
    box-shadow: 5px 9px 10px #00000079;
    max-width: 93%;
    text-align: center;
    font-family: 'Spline Sans', sans-serif;
    line-height: 20px;
    border-radius: 0 0px 5px 5px;
    padding: 0 5px;
}

.titulo_elemento.missao{
   
    background-color: #2C2C2C;
    color: #FFF;
}

.titulo_elemento.visao{
    box-shadow: 0 3px 6px #00000029;
    background-color: rgb(196, 196, 196);
    color: #222;
}

.titulo_elemento.valores{
    box-shadow: 0 3px 6px #00000029;
    background-color: rgb(167, 0, 0);
    color: #FFF;
}

.texto_elemento.missao{
    background-color: rgb(167, 0, 0);
    color: #FFF;
    
    
    
}

.texto_elemento.visao{
    background-color: rgb(248, 248, 248);
    color: #222;
    
    
}

.texto_elemento.valores{
    background-color: #222;
    color: #FFF;
    
    
}

@media only screen and (max-width: 730px) {
  
    
.principios_institucionais{
    display: flex;
    flex-direction: column;
}



}

</style>