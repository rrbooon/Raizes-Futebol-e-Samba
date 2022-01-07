<template>
    <TituloSessao :titulo="'Localização'" :corBackground="'#FFF'" :corTitulo="'#222'"/>
    <div id="maps">
       
        <div class="map">
            <iframe width="940px" height="300px" style="border-radius: 5px;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:EkFQcmHDp2EgTGXDo28gWCAtIFZpbGEgRm9ybW9zYSwgU8OjbyBQYXVsbyAtIFNQLCAwMzM1OS0wMjUsIEJyYXppbCIuKiwKFAoSCRdJpYbOXc6UEYaRmI5Nw2smEhQKEgndFp6kxF3OlBHhFEjymvm0UQ&key=AIzaSyAOuc14-2BRWMqgUAHzp6vPZDO2dgPpSEI"></iframe> 
        </div>
    </div>
</template>
<script>
import TituloSessao from './TituloSessao.vue'
export default {
    name: 'Maps',
    components:{
        TituloSessao
    }
}
</script>
<style scoped>
#maps{
    padding: 0 15px;
    height: 500px;
    background-color: #222;
}
.map{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

</style>