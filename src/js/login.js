import { createApp } from 'vue'
import '../css/style.scss'
import '../css/login.scss'
import Login from '../Login.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

createApp(Login).mount('#login');

$('form').on('submit',function(e){
    var usuario = $("input.usuario").val();
    var senha = $("input.senha").val();

    if (usuario === "") {
        $.toast({
            position: 'top-right',
            heading: 'Erro!',
            text: 'Informa o seu usuário!',
            showHideTransition: 'fade',
            icon: 'error'
        });

        return false;
    }

    if (senha === "") {
        $.toast({
            position: 'top-right',
            heading: 'Erro!',
            text: 'Informa sua senha!',
            showHideTransition: 'fade',
            icon: 'error'
        });

        return false;
    }

    $(".aguarde").addClass("active");

    e.preventDefault();
    const dadosLogin = {
        username: "" + usuario + "",
        password: "" + senha + ""
    };
    axios({
        method: "POST",
        url: `https://dummyjson.com/auth/login`,
        data: dadosLogin,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data));

            console.log("response >> ", response);

            $.toast({
                position: 'top-right',
                heading: 'Sucesso!',
                text: 'Olá, ' + response.data.firstName + ', aguarde...',
                showHideTransition: 'fade',
                icon: 'success'
            });

            window.location.href = '/';
        })
        .catch(function (error) {
            console.log("ERRORR >> ", error);

            $.toast({
                position: 'top-right',
                heading: 'Erro!',
                text: error.response.data.message,
                showHideTransition: 'fade',
                icon: 'error'
            });

            $(".aguarde").removeClass("active");
        }); 
        
});