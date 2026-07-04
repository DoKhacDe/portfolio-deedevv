<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { computed } from 'vue'
import { accentClasses } from '../data/projects'
import ProjectImageFrame from './ProjectImageFrame.vue'
import ProjectMockup from './ProjectMockup.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

defineEmits(['open'])

const accent = computed(() => accentClasses[props.project.accent] ?? accentClasses.cyan)
</script>

<template>
  <article
    class="reveal group grid overflow-hidden rounded-lg border border-slate-200 bg-white/[0.82] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-white/20 md:grid-cols-[0.95fr_1.05fr]"
    :class="index % 2 === 1 ? 'md:[&_.mockup-pane]:order-2' : ''"
  >
    <button type="button" class="mockup-pane block p-4 text-left" @click="$emit('open', project)">
      <ProjectImageFrame v-if="project.images?.length" :project="project" :image="project.images[0]" />
      <ProjectMockup v-else :project="project" />
    </button>

    <div class="flex flex-col p-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.22em]" :class="accent.text">
            0{{ index + 1 }} · {{ project.label }}
          </p>
          <h3 class="mt-3 text-2xl font-black text-slate-950 dark:text-white">{{ project.name }}</h3>
        </div>
        <button
          type="button"
          class="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-slate-200 text-slate-600 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white dark:border-white/10 dark:text-slate-300 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-ink-950"
          :aria-label="`Xem chi tiết ${project.name}`"
          @click="$emit('open', project)"
        >
          <ArrowUpRight class="h-4 w-4" />
        </button>
      </div>

      <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {{ project.description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-200"
        >
          {{ tech }}
        </span>
      </div>

      <button
        type="button"
        class="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-black text-slate-950 transition hover:gap-3 dark:text-white"
        @click="$emit('open', project)"
      >
        Xem chi tiết
        <ArrowUpRight class="h-4 w-4" />
      </button>
    </div>
  </article>
</template>
