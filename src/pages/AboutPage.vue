<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="AboutPage">
    <h1>{{ t('about_page') }}</h1>
  </div>
</template>
