<template>
    <div id="nav">
        <div class="nav">
            <router-link to="/" id="logo-url">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>
            <router-link to="/">Home</router-link>
            <router-link to="/publicacoes">Publicações</router-link>
            <router-link to="/jogos">Jogos</router-link>
        </div>
    </div>   
</template>
<script>
export default {
    name:"Navbar",
    props:["logo","alt"],
    methods:{
        

    }
}

</script>
<style scoped>

#nav{
 background-color: #222;
}

 .nav{
       
        max-width: 90%;
       
  
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .nav #logo-url{
        margin: auto;
        margin-left: 0;
    }

    #logo{
        width: 40px;
        height: 40px;

    }

    .nav a{
        color: #FFF;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    .nav a:hover{
        color: rgb(167, 0, 0);
    }




</style>