<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <Masthead>
      <template #tag>
        <div class="flex flex-gap-1">
          <Dot />
          <p>Hiya, Im Klement</p>
          <client-only>
            <span class="animate-waving">👋</span>
          </client-only>
        </div>
      </template>
      <template #title>
        A Full Stack Developer&nbsp;&nbsp; <br />
        turning ideas into&nbsp; <br />
        reality
      </template>
    </Masthead>

    <section class="content-section">
      <div class="container">
        <SectionHeader :alignment="'left'" class="mb-3">
          <template #tag>
            <div class="flex flex-gap-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              About me
              <Arrow class="arrow-cta-highlighted--tiny" />
            </div>
          </template>
          <template #title> The Human Behind the Code. </template>
          <template #description> Caffeine-powered problem solver with a keyboard. </template>
          <template #link>
            <div data-aos="zoom-in" data-aos-delay="100">
              <Arrow class="arrow-cta-highlighted slim" />
            </div>
          </template>
        </SectionHeader>
      </div>
      <div class="container">
        <div class="grid grid-span-last">
          <div class="flow">
            <h4 class="title" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              I'm a London-based Full-Stack Developer, building web solutions with a focus on the .NET ecosystem and
              modern frontends. Beyond the code, I'm an avid surfer, snowboarder, and explorer of new ideas – both
              tech-related side projects and the city's best spots
            </h4>
          </div>
        </div>
        <div class="mb-5 flow">
          <Marquee duration="20s" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <Chip class="marquee-item">.Net</Chip>
            <Chip class="marquee-item">.C </Chip>
            <Chip class="marquee-item">Umbraco</Chip>
            <Chip class="marquee-item">SQL</Chip>
          </Marquee>
          <Marquee duration="10s" :reverse="true" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
            <Chip class="marquee-item">Nuxt</Chip>
            <Chip class="marquee-item">Vue</Chip>
            <Chip class="marquee-item">Angular</Chip>
            <Chip class="marquee-item">React</Chip>
          </Marquee>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <SectionHeader :alignment="'left'" class="mb-3">
          <template #tag>
            <div class="flex flex-gap-1" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              Work sample
              <Arrow class="arrow-cta-highlighted--tiny" />
            </div>
          </template>
          <template #title>
            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-once="true">Some of my Work.</h3>
          </template>

          <template #link>
            <div data-aos="zoom-in" data-aos-delay="100">
              <Arrow class="arrow-cta-highlighted slim" />
            </div>
          </template>
        </SectionHeader>
      </div>
      <div class="container">
        <div class="grid grid-gap-3">
          <Card
            v-for="(project, index) in projectItems"
            :key="index"
            :title="project.title"
            :tags="project.tags"
            :image="{
              src: project.tileImage.src,
              alt: project.tileImage.altText,
              width: 1080,
              height: 720
            }"
            :description="project.summary"
          />
        </div>
      </div>
    </section>
    <section class="content-section">
      <div class="container"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Arrow from '@/assets/icons/arrow-right-solid.svg';
import Chip from '~/components/atoms/Chip.vue';
import type { Project } from '@/types';

// Get Projects
const projectItems = ref<Project[]>([]);

const { get: getProjects } = useProjects();
const { success: projectsSuccess, data: projectsData, total: projectsTotal } = await getProjects(3, true);
console.log('projectsSuccess', projectsSuccess);
if (projectsSuccess && projectsData) {
  projectItems.value = projectsData;
}
console.log('projectsData', projectItems.value);
</script>
