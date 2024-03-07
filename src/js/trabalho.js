import { createApp } from 'vue'
import '../css/style.scss'
import '../css/header.scss'
import '../css/menu.scss'
import '../css/perfil.scss'
import Trabalho from '../trabalho.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

createApp(Trabalho).mount('#trabalho');

$("body div#trabalho").addClass("logado");

const token = localStorage.getItem("token");
const userToken = JSON.parse(token);

axios({
    method: "GET",
    url: `https://dummyjson.com/user/me`,
    headers: {
        'Authorization': 'Bearer '+userToken+'',
    }
})
    .then(function (response) {
        console.log('Response >> ', response);

        $('div[rel="Trabalho"] input.rua').val(response.data.address.address);
        $('div[rel="Trabalho"] input.cidade').val(response.data.address.city);
        $('div[rel="Trabalho"] input.cep').val(response.data.address.postalCode);
        $('div[rel="Trabalho"] input.uf').val(response.data.address.state);

        function initMap() {
            var myLatLng = {lat:response.data.address.coordinates.lat  , lng:response.data.address.coordinates.lng  };
            
            var map = new google.maps.Map(document.getElementById('mapName'), {
                zoom: 17,
                center: myLatLng
            });
            
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
            });
        }

        initMap();
        
        $(".aguarde").removeClass("active");
    })
    .catch(function (error) {
        console.log("error >> ", error);

        $.toast({
            position: 'top-right',
            heading: 'Erro!',
            text: error.message,
            showHideTransition: 'fade',
            icon: 'error'
        });

        if(error.message === 'Request failed with status code 401'){
            localStorage.clear();

            window.location.href = "";
        }

        $(".aguarde").removeClass("active");
    });