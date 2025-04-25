<template>
  <span class="dot"> </span>
</template>
<style scoped lang="scss">
.dot {
  --color-alert-500: hsl(84, 80%, 41%);
  --color-alert-700: hsl(84, 64%, 66%);
  --color-alert-800: hsl(84, 61%, 71%);

  --dot-radius: 10;
  --dot-flash-radius: 25;
  --dot-color: var(--color-alert-800);
  --dot-flash-color: var(--color-alert-500);
  --dot-flash-border: var(--color-alert-700);

  position: relative;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: calc(var(--dot-radius) * 1px);
  background: var(--dot-color);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: calc(var(--dot-radius) * 1px);
    box-shadow: 0 0 0 1px var(--dot-flash-border) inset;
    background: var(--dot-flash-color);
    animation: pulseFlash 2.5s infinite;
  }

  &:after {
    animation-delay: 0.25s;
  }
}
</style>
