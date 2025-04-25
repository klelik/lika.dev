<template>
  <div class="masthead">
    <div class="container">
      <div class="masthead__content">
        <div class="flow flow-gap-3">
          <slot name="tag" />
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            class="text-pretty"
          >
            <slot name="title" />
          </h1>

          <AttachedButtons
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            class="mobile-only"
            :link="{ url: 'mailto:youremail@example.com' }"
            :rotate="true"
            size="sm"
            >Get in touch</AttachedButtons
          >
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
