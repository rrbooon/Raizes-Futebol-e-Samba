<template>
    <div id="header">
        <div class="header">
            <div class="historia_link">
                <h1>{{titulo}}</h1>
                
                <p>{{subtitulo}}</p>

                <div class="btn_historia">
                    <router-link to="/historia">
                        <button>Conhecer Mais!!</button>
                    </router-link>
                </div>
            </div>
                <div class="logo_raizes" id="div_img_logo">
                    <img src="/img/logo_raizes.png" alt="">
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    props: {titulo: String, 
            subtitulo: String
            }
}
</script>
<style scoped>
#header{
    background-color: rgb(44, 44, 44);
    display: flex;
    justify-content: center;
}
 .header{
     max-width: 940px;
     margin-left: 15px;
     margin-right: 15px;
     min-height: 100vh;
     height: auto;
     display: flex;
     align-items: center;

 

 
 }
 
 .historia_link{
     margin-right: auto;
     max-width: 400px;
     color: #FFF;
   
 }

 .historia_link h1{
     max-width: 400px;
     margin-bottom: 26px;
     font-family: 'Be Vietnam Pro', sans-serif;
 }


 .historia_link p{
     max-width: 400px;
     margin-bottom: 26px;
     font-family: 'Spline Sans', sans-serif;
     line-height: 26px;
 }   

.btn_historia button{
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0 3px 6px #00000029;
    background-color: rgb(167, 0, 0);
    color: #fff;
    border: none;
    width: 200px;
    height: 50px;
    cursor:pointer;
}
.logo_raizes{
    padding-left: 100px;
}

.logo_raizes img{
    
    max-height: 400px;
}

@media only screen and (max-width: 730px) {
    .logo_raizes {
    
        display: none;
    }
    .historia_link{
        text-align: center;
    }
    
    



}

</style>