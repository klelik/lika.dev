<template>
  <div class="chip">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.chip {
  --chip-bg: var(--text-color);
  --chip-text: var(--c-grey);

  background-color: var(--chip-bg, var(--c-main-color));
  border-radius: var(--chip-radius, var(--radius-default));
  color: var(--chip-text, var(--bg-color));
  font-size: var(--chip-text-size, var(--ts-body));
  line-height: var(--chip-line-height, var(--lh-body));
  padding: var(--chip-padding, var(--space-1));
  font-weight: 700;
  // border: 3px solid var(--c-main-color);
  // &:hover{
  //     padding: var(--space-2);
  // }
}
</style>
