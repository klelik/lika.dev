<template>
  <div class="section-header" :class="[alignment]">
    <div class="section-header__content" :class="containerSize ? `container-${containerSize}` : ''">
      <div v-if="hasTag || tag" class="section-header__tag">
        <slot name="tag">{{ tag }}</slot>
      </div>
      <div class="flex" data-repel>
        <component
          :is="resolvedTitleTag"
          v-if="hasTitle || title"
          class="section-header__title section-header__title-md"
          :class="titleSize"
          v-bind="
            animation
              ? {
                  'data-aos': 'fade-up',
                  'data-aos-delay': '200',
                  'data-aos-once': 'true'
                }
              : {}
          "
        >
          <slot name="title">{{ title }}</slot>
        </component>
        <slot name="link" />
      </div>
      <p
        v-if="hasDescription || description"
        class="section-header__description"
        v-bind="
          animation
            ? {
                'data-aos': 'fade-up',
                'data-aos-delay': '300',
                'data-aos-once': 'true'
              }
            : {}
        "
      >
        <slot name="description">{{ description }}</slot>
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SectionHeader } from '~/types';

const props = withDefaults(defineProps<SectionHeader>(), {
  animation: true,
  titleTag: 'h3',
  containerSize: null
});

const hasTag = computed(() => !!useSlots().tag || !!props.tag);
const hasTitle = computed(() => !!useSlots().title || !!props.title);
const hasDescription = computed(() => !!useSlots().description || !!props.description);
const resolvedTitleTag = computed(() => props.titleTag);
</script>
