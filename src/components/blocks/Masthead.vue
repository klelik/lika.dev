<template>
  <div class="masthead">
    <div class="container">
      <div class="masthead__content">
        <div>
          <slot name="tag" />
          <h1 class="text-pretty">
            <slot name="title" />
          </h1>
          <!-- <AttachedButtons class="rounded-box" data-bottom-left data-bottom-right style="padding: 0.75rem" :rotate="true" /> -->
        </div>
      </div>
    </div>
    <div class="gradient"></div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.masthead-bottom-right {
  position: absolute;
  bottom: -2px;
  right: -1px;
  z-index: 9;
  border-radius: 1rem 0 0 0;
}
</style>
