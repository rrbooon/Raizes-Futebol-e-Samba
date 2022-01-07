<template>
    <div id="historia">
        <div class="historia">
            <div class="historia_titulo">
                <h1><b>História Da fundação</b></h1>
            </div>
            <div class="historia_texto">
                <p>
                    Mais uma vez a história se repete. Como quase todos os times da várzea, o Raízes Futebol e Samba teve a sua origem marcada por um grupo de amigos, que costumava se encontrar num bar para bater papo, tomar cerveja, cantar um samba e  jogar bola.
                    <br><br>
                    Neste caso, esse Bar era na Rua Camberra, Vila Formosa, Zona Leste da Capital Paulista, onde os amigos Cem, Pingüim, César, Nato, Cuca, Teto, Ande, Ari, Dado, Inglês, Zé Antônio, Valter, Rinaldo, Sr. Paulo, Bacciotti, Alexandre e Klinger, este último, o desenhista e criador do distintivo do clube deram origem ao Raízes Futebol e Samba. Nome que  surgiu através da constatação que todos os fundadores tinham suas" Raízes" nesse bairro. Nosso Eterno Diretor <b>Renato Colla dos Santos (Nato)</b> sempre relatava que ganhamos do Sr.Toninho o nosso primeiro fardamento vermelho, branco e preto e que até hoje definem as cores de nosso "Manto". 
                    <br><br><b>Em 09 de abril de 1985 nasceu Raízes e tornou-se uma Alegria…...</b><img src="/img/logo_raizes.png" alt="Logo do Raízes">
                </p>
                <div id="btn_hino">
                    <router-link to="/">
                        <div class="btn_hino">
                            <h1>Hino do Raízes</h1>
                        </div>  
                    </router-link>
                </div>
            </div>
        </div>    
    </div>    
</template>
<script>
export default {
    name: 'Historia'
}
</script>
<style scoped>
#historia{
    background-color: rgb(167, 0, 0);
    min-height: 700px ;
}
.historia{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.historia_titulo{
    margin-left: 15px;
    margin-right: 15px;
    color: white;
    margin-top: 25px;
    margin-bottom: 25px;
    font-family: 'Be Vietnam Pro', sans-serif;
}
.historia_texto{
    margin-left: 15px;
    margin-right: 15px;
    max-width: 940px;
    background-color: whitesmoke;
    padding: 50px 50px;
    border-radius: 20px;
    font-family: 'Spline Sans', sans-serif;
    line-height: 30px;
    font-size: 20px;
    margin-bottom: 90px;
}

.historia_texto img{
    padding-left: 120px;
    max-height: 100px;
    vertical-align: middle;
}
#btn_hino{
    margin: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.btn_hino{
    background-color: rgb(167, 0, 0);
    color: #FFF;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: #FFF;
}
</style>