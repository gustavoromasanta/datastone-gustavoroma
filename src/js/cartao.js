import { createApp } from 'vue'
import '../css/style.scss'
import '../css/header.scss'
import '../css/menu.scss'
import '../css/perfil.scss'
import Cartao from '../cartao.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

createApp(Cartao).mount('#cartao');

$("body div#cartao").addClass("logado");

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

        var nome = response.data.firstName +' '+ response.data.lastName;
        var numero = response.data.bank.cardNumber;
        var data = response.data.bank.cardExpire;

        $('div[rel="Cartão"] input.nome').val(nome);
        $('div[rel="Cartão"] input.numerocartao').val(numero);
        $('div[rel="Cartão"] input.data').val(data);   

        $('div[rel="Cartão"] input#input-name').val(nome);
        $('div[rel="Cartão"] input#input-number').val(numero);
        $('div[rel="Cartão"] input#input-expiration').val(data);

        var card = new Card({
            form: 'form#cc-form',
            container: '.card-wrapper',
    
            formatting: true,
            placeholders: {
                number: "•••• •••• •••• ••••",
                name: "Nome Completo",
                expiry: "••/••"
            }
        });   


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

    