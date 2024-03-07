<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

<template>
    <div class="container">
        <div class="wrap">
            <div class="left">                            
                <img alt="avatar" href="" />
            </div>

            <div class="right">
                <form class="ui form">
                    <div class="field">
                        <label>Nome</label>
                        <input
                            type="text"
                            disabled
                            class="nome"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>Sobrenome</label>
                        <input
                            type="text"
                            disabled
                            class="sobrenome"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>Gênero</label>
                        <input
                            type="text"
                            disabled
                            class="genero"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>E-mail</label>
                        <input
                            type="text"
                            disabled
                            class="email"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>Telefone</label>
                        <input
                            type="text"
                            class="telefone"
                            disabled
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>Documento</label>
                        <input
                            type="text"
                            class="ssn"
                            disabled
                            value='...'
                        />
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>