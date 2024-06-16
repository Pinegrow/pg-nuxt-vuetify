<script setup lang="ts"></script>
<template>
  <v-footer name="footer" class="pb-24 pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center space-x-8">
        <NuxtLink
          href="https://www.facebook.com/vuedesigner"
          aria-label="facebook"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-facebook" class="text-2xl"></v-icon>
        </NuxtLink>
        <NuxtLink
          href="https://twitter.com/vuedesigner"
          aria-label="twitter"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-twitter" class="text-2xl"></v-icon>
        </NuxtLink>

        <NuxtLink
          href="https://discord.gg/BYp45Nnu5T"
          aria-label="discord"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-discord-icon" class="text-2xl"></v-icon>
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@vuedesigner"
          aria-label="youtube"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-youtube-icon" class="text-2xl"></v-icon>
        </NuxtLink>
      </div>
    </div>
  </v-footer>
</template>
<style scoped>
  .pb-24 {
    padding-bottom: 6rem /* 96px */;
  }
  .pt-12 {
    padding-top: 3rem /* 48px */;
  }

  .container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px) {
    .container {
      max-width: 1536px;
    }
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .px-8 {
    padding-left: 2rem /* 32px */;
    padding-right: 2rem /* 32px */;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .justify-center {
    justify-content: center;
  }
  .space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem /* 32px */ * var(--tw-space-x-reverse));
    margin-left: calc(2rem /* 32px */ * calc(1 - var(--tw-space-x-reverse)));
  }
  .text-2xl {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }
</style>
