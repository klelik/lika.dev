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
        <LazySectionHeader :alignment="'left'" class="mb-3">
          <template #tag>
            <div
              class="flex flex-gap-1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              About me
              <Arrow class="arrow-cta-highlighted--tiny" />
            </div>
          </template>
          <template #title>
            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              The Human Behind the Code.
            </h3>
          </template>
          <template #description>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
              Caffeine-powered problem solver with a keyboard.
            </p>
          </template>
          <template #link>
            <div data-aos="zoom-in" data-aos-delay="100">
              <Arrow class="arrow-cta-highlighted slim" />
            </div>
          </template>
        </LazySectionHeader>
      </div>
      <div class="container">
        <div class="grid grid-max-cols-2 grid-span-last">
          <div class="flow flow-gap-2 card card--spread-image card-overlay">
            <h4 class="title" data-aos="fade-up" data-aos-delay="200">
              My Journey
            </h4>
            <p data-aos="fade-up" data-aos-delay="300">
              "Hello, World!" was just the beginning. Now, as a Full-Stack
              Developer in London, I build cool web stuff and make digital
              magic. Always evolving.
            </p>
          </div>

          <div class="flow flow-gap-2 card card--spread-image card-overlay">
            <h4 class="title" data-aos="fade-up" data-aos-delay="400">
              Core Technologies
            </h4>
            <p data-aos="fade-up" data-aos-delay="600">
              Umbraco CMS,C# ASP.NET MVC,.NET Core,Entity
              Framework,Azure,Algolia,NuxtJs,AngularJS,Javascript/jQuery,Typescript,Bootstrap
              Framework,SCSS/SCSS,HTML5,Graphic Design
            </p>
          </div>
          <div class="flow flow-gap-2 card card--spread-image card-overlay">
            <h4 class="title" data-aos="fade-up" data-aos-delay="800">
              The Fun Stuff
            </h4>
            <p data-aos="fade-up" data-aos-delay="1000">
              When I'm not coding, it's all about riding waves or carving snow.
              You'll also catch me geeking out on side projects and soaking up
              the buzz at tech events. Away from the screen, I'm probably
              plotting my next surf or snow trip, exploring some cool corner of
              London and its food scene, or lost in the latest sci-fi flick.
              These off-hours keep things interesting and definitely sneak their
              way into how I think about tech.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <LazySectionHeader :alignment="'center'" class="mb-3">
          <template #tag>
            <div
              class="flex flex-gap-1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Work sample
              <Arrow class="arrow-cta-highlighted--tiny" />
            </div>
          </template>
          <template #title>
            <h3 data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              Some of my Work.
            </h3>
          </template>

          <template #link>
            <div data-aos="zoom-in" data-aos-delay="100">
              <Arrow class="arrow-cta-highlighted slim" />
            </div>
          </template>
        </LazySectionHeader>
      </div>
      <div class="container">
        <div class="grid">
          <div>card</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Arrow from "@/assets/icons/arrow-right-solid.svg";
</script>
