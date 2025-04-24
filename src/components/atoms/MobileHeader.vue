<template>
  <div class="mobile-menu container-wide" :class="{ open: isOpen }">
    <nav class="mobile-nav">
      <ul class="flex" data-column>
        <li>
          <NuxtLink to="/About" @click="close"><h2>About</h2></NuxtLink>
        </li>
        <li>
          <NuxtLink to="experience" @click="close"><h2>Experience</h2></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" @click="close"><h2>Projects</h2></NuxtLink>
        </li>
        <li class="mobile-controls">
          <AttachedButtons :link="{ url: 'mailto:youremail@example.com' }" :rotate="true" size="sm"
            >Get in touch</AttachedButtons
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['close']);
const close = () => {
  emit('close');
};

useHead({
  bodyAttrs: {
    class: computed(() => (props.isOpen ? 'header-open' : ''))
  }
});
</script>
