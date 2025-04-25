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
        <SectionHeader :alignment="'center'" class="mb-3">
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
        <div class="grid grid-gap-2">
          <div class="flow">
            <div class="card project-card">
              <NuxtImg
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN1bmlsbGF8ZW58MHx8fHwxNjg3NTY5MjQy&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Project"
                class="card__image"
              />
            </div>
            <div class="flex pi-1" data-repel>
              <p class="card__title">Project Title</p>
              <div class="flex flex-gap-1">
                <Chip class="card__tag">Umbraco</Chip>
                <Chip class="card__tag">Angular</Chip>
                <Chip class="card__tag">Azure</Chip>
              </div>
            </div>
          </div>
          <div class="flow">
            <div class="card project-card">
              <NuxtImg
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN1bmlsbGF8ZW58MHx8fHwxNjg3NTY5MjQy&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Project"
                class="card__image"
              />
            </div>
            <div class="flex pi-1" data-repel>
              <p class="card__title">Project Title</p>
              <Chip class="card__tag">Nuxt</Chip>
            </div>
          </div>
          <div class="flow">
            <div class="card project-card">
              <NuxtImg
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN1bmlsbGF8ZW58MHx8fHwxNjg3NTY5MjQy&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Project"
                class="card__image"
              />
            </div>
            <div class="flex pi-1" data-repel>
              <h5 class="card__title">Project Title</h5>
              <Chip class="card__tag">React</Chip>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-section">
      <div class="container"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components';
import Arrow from '@/assets/icons/arrow-right-solid.svg';
import Chip from '~/components/atoms/Chip.vue';
</script>
