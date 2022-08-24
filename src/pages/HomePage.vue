<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="HomePage">
    <h1>{{ t('home_page') }}</h1>
  </div>
</template>
