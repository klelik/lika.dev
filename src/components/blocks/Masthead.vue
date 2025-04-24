<template>
  <div class="masthead">
    <div class="container">
      <div class="masthead__content">
        <div>
          <div class="flex flex-gap-1" style="background: var(--bg-color)">
            <Dot />
            <p>Hiya, Im Klement</p>
            <client-only>
              <span class="animate-waving">👋</span>
            </client-only>
          </div>
          <h1 class="text-pretty">
            A Full Stack Developer&nbsp;&nbsp; <br />
            turning ideas into&nbsp; <br />
            reality
          </h1>
          <!-- <AttachedButtons class="rounded-box" data-bottom-left data-bottom-right style="padding: 0.75rem" :rotate="true" /> -->
        </div>
      </div>
    </div>
    <div class="gradient"></div>
  </div>

  <Vortex />
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
