<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const props = defineProps({
    imageUrl: {
      type: String,
      default: heroImageUrl,
    },
    alt: {
      type: String,
      default: 'hero',
    },
    cover: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: [Boolean, String],
      default: false,
    },
  })

  const { optimizeImage } = useOptimizeImage()
  const imageOptimized = {
    alt: props.alt,
    cover: props.cover,
    ...optimizeImage(
      props.imageUrl,
      /* options */
      {
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: props.placeholder, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }
</script>
<template>
  <v-img
    :src="imageOptimized.src"
    :srcset="imageOptimized.srcset"
    :sizes="imageOptimized.sizes"
    :max-height="800"
    cover
  >
    <!-- <v-img :src="heroImageUrl" :max-height="800" cover> -->

    <slot />
  </v-img>
</template>
<style scoped></style>
