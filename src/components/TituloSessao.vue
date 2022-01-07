<template>
    <div class="titulo">
        <h1>{{titulo}}</h1>
    </div>
</template>
<script>
export default {
    name:'TituloSessao',
    props:{
        titulo: String,
        corBackground: String,
        corTitulo: String
    },
    data(){
        return{
          
        }
    }
    
}
</script>
<style scoped>
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: v-bind(corBackground);
    color: v-bind(corTitulo);
    font-family: 'Be Vietnam Pro', sans-serif;
}
</style>