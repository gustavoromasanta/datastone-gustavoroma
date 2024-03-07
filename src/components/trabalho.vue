<script setup>
    import { ref } from 'vue'

    const count = ref(0)

</script>

<template>
    <div class="container">
        <div class="wrap">
            <div class="left">    
                <div id="mapName" style="width:400px; height: 400px"></div>           
            </div>

            <div class="right">
                <form class="ui form">
                    <div class="field">
                        <label>Rua</label>
                        <input
                            type="text"
                            disabled
                            class="rua"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>Cidade</label>
                        <input
                            type="text"
                            disabled
                            class="cidade"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>CEP</label>
                        <input
                            type="text"
                            disabled
                            class="cep"
                            value='...'
                        />
                    </div>

                    <div class="field">
                        <label>UF</label>
                        <input
                            type="text"
                            class="uf"
                            disabled
                            value='...'
                        />
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>