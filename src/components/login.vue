<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>

<template>
    <div class="container">
        <div class="Login">
            <div class="container">
                <div class="image"></div>

                <div class="content">
                    <h1 class="title">Data Stone</h1>
                    <h2 class="title">Bem-vindo!</h2>
                    <p>Faça login para acessar sua conta</p>

                    <form class="ui form">
                        <div class="field">
                            <input
                                type="text"
                                class="usuario"
                                placeholder="Digite seu usuário"
                            />
                        </div>

                        <div class="field">
                            <input
                                type="password"
                                class="senha"
                                placeholder="Digite sua senha"
                            />
                            <i class="icon eye"></i>
                        </div>
                        
                        <button id="buttonLogar" class="ui button padrao azul">
                            Acessar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
