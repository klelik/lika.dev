<template>
  <div class="attached-buttons" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <svg width="0" height="0" class="absolute" color-interpolation-filters="sRGB">
      <defs>
        <filter id="buttonFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="buttonFilter"
          />
          <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop" />
          <feBlend in="SourceGraphic" in2="buttonFilter" />
        </filter>
      </defs>
    </svg>

    <NuxtLink :href="link.url" style="filter: url(#buttonFilter)" class="attached-buttons">
      <span class="cta" primary-no-hover :size="size" style="filter: url(#buttonFilter)"><slot /></span>
      <span
        primary-no-hover
        :size="size"
        class="cta attached-buttons__mover"
        :style="hoverState ? getTransformStyle : {}"
      >
        <Arrow />
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
//=============================
// INTERFACES
//=============================
import type { AttachedButtons } from '@/types/index';
import Arrow from '@/assets/icons/arrow-right-solid.svg';

//=============================
// PROPS & EMITS
//=============================
const props = withDefaults(defineProps<AttachedButtons>(), {
  rotate: false,
  scale: 1,
  translateX: '0.45rem',
  size: 'sm'
});

const hoverState = ref(false);

const getTransformStyle = computed(() => {
  return {
    transform: `
        translateX(${props.translateX})
        ${props.rotate ? 'rotate(45deg)' : ''}
        scale(${props.scale})
      `
  };
});

const handleMouseOver = () => {
  hoverState.value = true;
};

const handleMouseLeave = () => {
  hoverState.value = false;
};
</script>
