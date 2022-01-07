<template>
      <TituloSessao :titulo="titulo" :corBackground="corTituloFundo" :corTitulo="corTitulo"/>
    <div id="contato">
       
        <div class="contato">
            <div class="item email">
                <a href="mailto:rogerio.colla58@gmail.com" target="_blank">
                    <figure>
                        <img src="/img/email.png" alt="Icone de e-mail">
                        <figcaption>E-mail</figcaption>
                    </figure>
                </a>
            </div>
            <div class="item whatsapp">
                <a href="https://wa.me/5511994613773" target="_blank">
                    <figure>
                        <img src="/img/whatsapp.png" alt="Icone do Whatsapp">
                        <figcaption>Whatsapp</figcaption>
                    </figure>
                </a>
            </div>
            <div class="item instagram">
                <a href="https://www.instagram.com/cesar_raizes35" target="_blank">
                    <figure>
                        <img src="/img/instagram.png" alt="Icone do Instagram">
                        <figcaption>Instagram</figcaption>
                    </figure>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import TituloSessao from './TituloSessao.vue'

export default {
    name: 'Contato',
    components:{
        TituloSessao
    },
    data(){
        return{
            titulo: 'Contato',
            corTituloFundo: 'rgb(167, 0, 0)',
            corTitulo: '#FFF'
        }
    }
    
}
</script>
<style scoped>
#contato{
    width: 100%;
    padding: 150px 0;
    
}
.contato{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

figure{
    cursor: pointer;
}

figure img{
    max-height: 200px;
    margin-bottom: 10px;
    
}
figure{
    text-align: center;
    font-family: 'Spline Sans', sans-serif;
    color: #222;
}
a{
    text-decoration: none;
    color: none;
}

@media only screen and (max-width: 730px) {
    #contato{
        background-color: white;
        padding: 100px 0;
    }
    .contato{
        flex-direction: column;
    }
    figure{
        margin-bottom: 50px;
        
    }
    figure img{
        max-height: 75px;

    }
    
    



}
</style>