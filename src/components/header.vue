<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

<template>
    <div class="Header">
        <button class="humburguer">
            <i class="icon bars"></i>
        </button>

        <h1 class="title"></h1>

        <div class="wrap">
            <div class="alert">
                <a>
                    <i class="icon alarm"></i>
                    <span>1</span>
                </a>
            </div>

            <div class="User">
                <div class="avatar"></div>
                <strong></strong>
            </div>
        </div>
    </div>
</template>
