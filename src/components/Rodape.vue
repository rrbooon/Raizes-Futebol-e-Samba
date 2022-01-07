<template>
    <div id="rodape">
        <div class="rodape">
            <div class="paginas">
                <h3>Páginas:</h3>
                <div class="lista">
                    <ul>
                        <router-link to="/"><li>Home</li></router-link>
                        <router-link to="/publicacoes"><li>Publicações</li></router-link>
                        <router-link to="/jogos"><li>Jogos</li></router-link>
                        <router-link to="/"><li>Patrocinadores</li></router-link>
                        <router-link to="/historia"><li>História</li></router-link>
                    </ul>
                </div>
            </div>
        
            <div class="endereco">
                <h3>Endereço:</h3>
                <p>Arena Paraguassú
                <br>Praça Leão X,130
                <br>Vila Formosa - São Paulo - SP - Brasil</p>
            </div>

            <div class="redes_sociais">
                <h3>Redes Sociais:</h3>
                <div class="link_redes_sociais">
                    <a href=""><img src="/img/instagram.png" alt="Logo do Instagram"></a>
                    <a href=""><img src="/img/facebook.png" alt="Logo do Facebook"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Rodape'    
}
</script>
<style scoped>
#rodape{
    margin-top: auto;
    background-color: #222;
    height: 300px;
    width: 100%;
    color: #FFF;
    
}
.rodape{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.paginas{
    height: 200px;
}
.paginas h3, h3{
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-bottom: 20px;
}

ul {
    margin-left: 20px;
    
}

li {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 5px;
    
}

a{
    text-decoration: none;
    color: #FFF;
}

.endereco{
    line-height: 26px;
    height: 200px;
}

li, p{
    font-family: 'Spline Sans', sans-serif;
}

.redes_sociais{
    height: 200px;
}

.link_redes_sociais{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.link_redes_sociais img{
    max-height: 35px;
    margin-bottom: 10px;
}

@media only screen and (max-width: 730px) {
    #rodape{
        height: auto;
        
    }
    .rodape{
        flex-direction: column;
        align-items: flex-start;
        margin-left: 30px;
        margin-top: 50px;
    }
    
    .link_redes_sociais{
        align-items: baseline;
    }
    



}
</style>