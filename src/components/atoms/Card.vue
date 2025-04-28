<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="flow card-wrapper">
    <div class="card project-card">
      <NuxtImg
        v-if="image"
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        class="card__image"
      />
      <div class="card-overlay">
        <div class="card-overlay__content-wrapper">
          <span class="card-overlay__content">
            <Arrow class="card-overlay__content--arrow" />
          </span>
          <!-- <AttachedButtons class="card-overlay__content" :link="{ url: 'mailto:youremail@example.com' }" :rotate="true" size="sm"
            >Visit</AttachedButtons
          > -->
        </div>
      </div>
    </div>
    <div class="flow flow-gap-2 pi-1">
      <div :class="[tags && tags.length <= 3 ? 'flex' : 'flow']" data-repel>
        <h5 v-if="title" class="card__title">{{ title }}</h5>
        <div class="flex flex-gap-1" data-wrap>
          <Chip v-for="tag in tags" class="card__tag" style="--chip-text: var(--c-deep-dark)">{{ tag }}</Chip>
        </div>
      </div>

      <p v-if="description" class="card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/types';
import Arrow from '@/assets/icons/arrow-right-solid.svg';

const props = defineProps<Card>();
</script>
