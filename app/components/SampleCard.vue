<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        // placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles

  const availableTimeSlots = ['3.30PM', '4.20PM', '5.50PM', '6.00PM']
  const selectedTimeSlot = ref(0)

  const statusDisplay = ref(false)
  const showStatus = (status) => {
    statusDisplay.value = status
  }
</script>
<template>
  <v-card width="360" class="mt-12 mx-auto" elevation="4">
    <v-img
      :src="heroImageOptimized.src"
      :srcset="heroImageOptimized.srcset"
      :sizes="heroImageOptimized.sizes"
      height="250"
      cover
    />
    <!-- <v-img :src="heroImage" height="250" cover/> -->
    <v-card-item>
      <template #title>
        <div class="d-flex justify-space-between">
          <span class="text-primary">Cafe Bella Vista</span>
          <DarkModeSwitch />
        </div>
      </template>
      <template #subtitle
        ><span>Local Favourite</span>
        <v-icon
          icon="i-ic-round-local-fire-department"
          class="bg-red-darken-4 ml-2 text-red-darken-2"
          size="small"
        />
      </template>
      <div class="align-center d-flex">
        <v-rating
          density="compact"
          size="small"
          color="amber-darken-2"
          model-value="4.5"
          half-increments
        /><span class="ml-2 mt-2 text-caption text-medium-emphasis"
          >4.5 (413)</span
        >
      </div>
      <div class="mt-2 text-subtitle-1">
        <span>$ . Italian, Cafe</span>
      </div>
    </v-card-item>
    <v-card-text>
      <div class="mt-1">
        <span
          >Small plates, salads & sandwiches - an intimate setting with 12
          indoor seats plus patio seating.</span
        >
      </div>
      <v-divider class="mt-4" />
    </v-card-text>
    <v-card-item>
      <template #title><span>Tonight's availability</span> </template>
      <v-chip-group v-model="selectedTimeSlot" class="mt-2">
        <v-chip
          v-for="(timeSlot, index) in availableTimeSlots"
          :key="index"
          :text="timeSlot"
        />
      </v-chip-group>
    </v-card-item>
    <v-card-actions>
      <v-btn text="Reserve" class="mb-2 ml-2" @click="showStatus(true)" />
      <v-snackbar v-model="statusDisplay" timeout="2000"
        ><span class="text-white w-100"
          >{{ availableTimeSlots[selectedTimeSlot] }} was reserved.</span
        >
      </v-snackbar>
    </v-card-actions>
  </v-card>
</template>
<style scoped></style>
