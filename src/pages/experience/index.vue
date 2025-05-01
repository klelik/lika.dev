<template>
  <div class="content-section">
    <div class="container container-slim">
      <div class="flow flow-gap-5">
        <SectionHeader :animation="false" title-tag="h2">
          <template #tag>Experience</template>
          <template #title>Klement Lika</template>
          <template #description> Full-Stack Developer </template>
        </SectionHeader>
        <h3>.NET Full-Stack Developer and certified Umbraco Expert in London.</h3>

        <div>
          <div class="flow flow-gap-4">
            <div class="flow flow-gap-2">
              <p class="">Core Technologies:</p>
              <ul v-if="tags && tags.length" class="unstyled-list flex flex-gap-1" data-wrap>
                <li v-for="tag in tags.slice(9)" :key="tag">
                  <Chip class="tiny">{{ tag }}</Chip>
                </li>
              </ul>
            </div>

            <div class="flow flow-gap-2">
              <p class="">Certifications:</p>
              <div class="flex flex-gap-2">
                <NuxtImg
                  :src="'/images/umbraco-expert.png'"
                  :width="120"
                  format="webp"
                  :alt="'Umbraco Expert Certification'"
                  densities="x1 x2"
                ></NuxtImg>
                <NuxtImg
                  :src="'/images/umbraco-expert.png'"
                  :width="120"
                  format="webp"
                  :alt="'Umbraco Professional Certification'"
                  densities="x1 x2"
                ></NuxtImg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="mb-5 container container-slim" />

    <div class="container container-slim">
      <SectionHeader :animation="false" :container-size="'sm'">
        <template #title>Professional</template>
      </SectionHeader>
      <div class="resume-list">
        <div class="resume-list-item">
          <div class="resume-list-item__header mb-4">
            <span class="resume-list-item__header__date ts-label">Dec 2024 ~ Present</span>
            <div class="flow flow-gap-05">
              <h3 class="text-heading-4">Newmarket Holidays</h3>
              <p class="text-primary"><strong>Full-Stack Developer</strong></p>
            </div>
          </div>
          <div class="rte-content">
            <p>
              Expanded responsibilities to full-stack development, utilizing C#, .NET, and Azure to build backend
              solutions.
            </p>
            <ul>
              <li class="mb-3">
                Integrated APIs, database management, and DevOps practices to ensure scalability and efficiency.
              </li>
              <li class="mb-3">Contributed to backend logic, optimizing data handling and server-side performance.</li>
              <li class="mb-3">
                Played a key role in ensuring seamless integration between front-end and back-end systems.
              </li>
              <li class="mb-3">Utilized Nuxt 3 and Vue.js to create dynamic, SEO-friendly interfaces.</li>
              <li class="mb-3">
                Assisted in connecting front-end and back-end services during the migration to Umbraco 13 (headless
                CMS).
              </li>
              <li class="mb-3">
                Continuously improved technical skills, staying updated with modern full-stack frameworks, cloud
                technologies, and SEO best practices.
              </li>
            </ul>
          </div>
        </div>
        <div class="resume-list-item">
          <div class="resume-item">
            <div class="resume-list-item__header mb-4">
              <span class="ts-label">Apr 2023 ~ Dec 2024</span>
              <div class="flow flow-gap-05">
                <p class="text-primary"><strong>Front-end Developer</strong></p>
              </div>
            </div>
            <div class="rte-content">
              <p>Developed and maintained web applications, focusing on Angular.js, and Umbraco 8.</p>
              <ul>
                <li class="mb-3">
                  Worked closely with designers and UX teams to enhance user experience, ensuring responsive and
                  optimized interfaces.
                </li>
                <li class="mb-3">
                  Collaborated within an agile Scrum team, conducting code reviews and implementing best practices.
                </li>
                <li class="mb-3">Maintained high-quality standards in front-end development.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resume-list-item">
          <div class="resume-item">
            <div class="resume-list-item__header mb-4">
              <span class="ts-label">Jan 2022 ~ Feb 2023</span>
              <div class="flow flow-gap-05">
                <h3 class="text-heading-4">Freelance</h3>
                <p class="text-primary"><strong>Web Developer</strong></p>
              </div>
            </div>
            <div class="rte-content">
              <p>Worked on diverse projects, delivering high-quality web solutions tailored to client needs.</p>
              <ul>
                <li class="mb-3">
                  Gained experience in project management, client communication, and time management.
                </li>
                <li class="mb-3">Developed applications using React, Next.js, WordPress, GraphQL, and PHP.</li>
                <li class="mb-3">
                  Built responsive and user-friendly interfaces, integrating third-party APIs, and ensuring seamless
                  functionality.
                </li>
                <li class="mb-3">
                  Collaborated closely with clients to understand their requirements and maintained code quality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr class="mb-5" />

      <SectionHeader :animation="false" :container-size="'sm'">
        <template #title>Education</template>
      </SectionHeader>
      <div class="resume-list">
        <div class="resume-list-item">
          <div class="resume-item">
            <div class="resume-list-item__header mb-4">
              <span class="ts-label">2017 ~ 2021</span>
              <div class="flow flow-gap-05">
                <h3 class="h4">University of Thessaly, Greece</h3>
                <p class="text-primary"><strong>BSc Computer Science and Biomedical Informatics</strong></p>
              </div>
            </div>
            <div class="rte-content">
              <p>Thesis: "Development of High Precision Neuromorphic Circuit in Rearranged Technology"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tags } from '@/types/index';

import { getPageTitle } from '@/utils/helpers';
import { appRoutes } from '@/utils/constants.js';

const tags = ref<string[]>(Object.values(Tags));

useHead({
  title: getPageTitle(appRoutes.experience.label),
  meta: [
    {
      name: 'description',
      content: 'Professional experience and résumé of David Holt, web developer, designer and UI/UX engineer.'
    }
  ]
});
</script>
