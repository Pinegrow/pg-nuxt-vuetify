<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-vuetify/tokens.mjs'

  const { optimizeImage, optimizeImages } = useOptimizeImage()

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const heroImageOptimized = optimizeImage(heroImageUrl)

  definePageMeta({
    title: 'Home',
    navOrder: 1,
  })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main>
    <SampleCard />
  </main>
</template>
<style scoped></style>
