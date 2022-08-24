<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'Home' }">{{ t('home') }}</RouterLink>
    <RouterLink :to="{ name: 'About' }">{{ t('about') }}</RouterLink>
    |
    <RouterLink :to="{ params: { lang: 'ru' } }">RU</RouterLink>
    <RouterLink :to="{ params: { lang: 'en' } }">EN</RouterLink>
  </header>

  <RouterView />
</template>
