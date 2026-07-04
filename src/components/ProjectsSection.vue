<script setup>
import { computed, ref } from 'vue'
import { projects } from '../data/projects'
import { projectImagesById } from '../data/projectImages'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const selectedProject = ref(null)

const projectsWithImages = computed(() =>
  projects.map((project) => ({
    ...project,
    images: projectImagesById[project.id] ?? [],
  })),
)
</script>

<template>
  <section id="projects" class="section-shell scroll-mt-24 py-20">
    <div class="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p class="section-kicker">Dự án tiêu biểu</p>
        <h2 class="section-title">Những sản phẩm tôi đã kiến tạo và vận hành.</h2>
        <p class="section-copy">
          Từ những hệ thống thương mại điện tử phức tạp đến các ứng dụng AI hiện đại, mỗi dự án là một lời khẳng định về năng lực giải quyết vấn đề và tư duy tối ưu hóa hiệu suất.
        </p>
      </div>
      <div class="rounded-md border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
        {{ projects.length }} sản phẩm tiêu biểu
      </div>
    </div>

    <div class="mt-10 grid gap-6">
      <ProjectCard
        v-for="(project, index) in projectsWithImages"
        :key="project.id"
        :project="project"
        :index="index"
        @open="selectedProject = $event"
      />
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>
