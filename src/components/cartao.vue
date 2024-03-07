<script setup>
    import { ref } from 'vue'

    const count = ref(0)

</script>

<template>
    <div class="container">
        <div class="wrap">
            <div class="left">    
                <div class="card-wrapper"></div>
                <form id="cc-form" style="display: none;">
                    <input type="text" id="input-number" name="number"/>
                    <input type="text" id="input-name" name="name"/>
                    <input type="text" id="input-expiration" name="expiry"/>
                    <input type="text" id="input-cvc" name="cvc"/>
                </form>
            </div>

            <div class="right">
                <form class="ui form">
                   <div class="field">
                        <label>Número Cartão</label>
                        <input
                            type="text"
                            name="number"
                            disabled
                            class="numerocartao"
                        />
                    </div>

                   <div class="field">
                        <label>Nome</label>
                        <input
                            type="text"
                            disabled
                            class="nome"
                        />
                    </div>

                   <div class="field">
                        <label>Data Expiração</label>
                        <input
                            type="text"
                            disabled
                            class="data"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>