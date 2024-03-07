import axios from "axios";

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

        $('div[rel="Perfil"] input.nome').val(response.data.firstName);
        $('div[rel="Perfil"] input.sobrenome').val(response.data.lastName);
        $('div[rel="Perfil"] input.email').val(response.data.email);
        $('div[rel="Perfil"] input.genero').val(response.data.gender);
        $('div[rel="Perfil"] input.telefone').val(response.data.phone);
        $('div[rel="Perfil"] input.ssn').val(response.data.ssn);
        $('div[rel="Perfil"] img[alt="avatar"]').attr('src', response.data.image);
        
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