<script setup lang="ts">
  import { useHero } from '@/composables/hero'
  const { heroImage, heroLazySrc, heroSrc } = useHero()

  definePageMeta({
    title: 'Home',
    navOrder: 1,
  })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main><span>A Fresh Start!</span></main>
</template>
<style scoped></style>
