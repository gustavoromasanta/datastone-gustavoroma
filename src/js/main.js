import { createApp } from 'vue'
import '../css/style.scss'
import '../css/header.scss'
import '../css/menu.scss'
import '../css/perfil.scss'
import App from '../App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

var menuAtivo = $("div.Wrapper").attr("rel");
if(menuAtivo == 'Perfil'){
    createApp(App).mount('#app');
}

$(document).ready(function(){
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
        const token = localStorage.getItem("token");
        const userToken = JSON.parse(token);

        const foundUser = JSON.parse(loggedInUser);

        if(menuAtivo == 'Perfil'){
            $("body div#app").addClass("logado");
        }

        const firstName = foundUser.firstName;
        const lastName = foundUser.lastName;
        const firstNamecharAt = firstName.charAt(0);
        const lastNamecharAt = lastName.charAt(0);

        $("div.Header .wrap .User strong").html(firstName + " " + lastName);
        $("div.Header .wrap .User .avatar").html(firstNamecharAt + lastNamecharAt);
    } else {
        window.location.href = "/login";
    }

    $('div.Menu').on("click", "li.sair", function () {
        $(".aguarde").addClass("active");

        localStorage.clear();

        window.location.href = "";
    });

    $("div.Menu").on("click", "button.acao", function () {
        var _this = $(this);

        if (_this.hasClass("close")) {
            $("div.Menu").removeClass("open").addClass("close");

            $("body").css("overflow", "visible");
        }

        if (_this.hasClass("open")) {
            $("div.Menu").removeClass("close").addClass("open");
        }
    });

    $('div.Menu ul li a[title="' + menuAtivo + '"]').addClass("ativo");
    $('div.Header h1.title').html(menuAtivo);

    $("div.Header").on("click", "button.humburguer", function () {
        if ($("div.Menu").hasClass("close")) {
            $("div.Menu").removeClass("close").addClass("open");
            $("body").css("overflow", "hidden");

            return false;
        }

        if ($("div.Menu").hasClass("open")) {
            $("div.Menu").removeClass("open").addClass("close");
            $("body").css("overflow", "visible");

            return false;
        }
    });
});