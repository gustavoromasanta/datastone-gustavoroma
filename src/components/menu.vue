<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

<template>
    <div class="Menu close">
        <ul>
            <li class="inicio">
                <a href="/" title="Início">
                    <i class="icon home"></i>
                    <span>Início</span>
                </a>
            </li>

            <li class="perfil">
                <a href="/" title="Perfil">
                    <i class="icon user"></i>
                    <span>Perfil</span>
                </a>
            </li>

            <li class="endereco">
                <a href="/endereco" title="Endereço">
                    <i class="icon map marker"></i>
                    <span>Endereço</span>
                </a>
            </li>

            <li class="trabalho">
                <a href="/trabalho" title="Trabalho">
                    <i class="icon building outline"></i>
                    <span>Trabalho</span>
                </a>
            </li>

            <li class="cartao">
                <a href="/cartao" title="Cartão">
                    <i class="icon credit card"></i>
                    <span>Cartão</span>
                </a>
            </li>

            <li class="sair">
                <a href="#" title="Sair">
                    <i class="icon log out"></i>
                    <span>Sair</span>
                </a>
            </li>
        </ul>

        <button class="acao close" title="Fechar">
            <i class="icon long arrow alternate left"></i>
            <span>Fechar</span>
        </button>

        <button class="acao open" title="Abrir">
            <i class="icon long arrow alternate right"></i>
        </button>
    </div>
</template>