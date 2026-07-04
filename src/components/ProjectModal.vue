<script setup>
import { ExternalLink, X } from 'lucide-vue-next'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { accentClasses } from '../data/projects'
import ProjectImageFrame from './ProjectImageFrame.vue'
import ProjectMockup from './ProjectMockup.vue'

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])
const previewImage = ref(null)

const accent = computed(() => accentClasses[props.project?.accent] ?? accentClasses.cyan)

const galleryMap = {
  commerce: ['commerce', 'dashboard', 'analytics'],
  mobile: ['mobile', 'commerce', 'dashboard'],
  ai: ['ai', 'dashboard', 'analytics'],
  automation: ['automation', 'analytics', 'dashboard'],
  analytics: ['analytics', 'dashboard', 'automation'],
  media: ['media', 'mobile', 'ai'],
  dashboard: ['dashboard', 'commerce', 'analytics'],
}

const galleryTitles = {
  commerce: 'Luồng bán hàng & hợp đồng',
  mobile: 'Màn hình ứng dụng mobile',
  ai: 'Tư vấn AI theo ngữ cảnh',
  automation: 'Flow automation email',
  analytics: 'Bảng phân tích xu hướng',
  media: 'Phòng nghe chung realtime',
  dashboard: 'Cổng vận hành đối tác',
}

const fakeGalleryScreens = computed(() => {
  if (!props.project || props.project.images?.length) return []

  return (galleryMap[props.project.mockup] ?? [props.project.mockup]).map((mockup) => ({
    ...props.project,
    mockup,
    galleryTitle: galleryTitles[mockup],
  }))
})

function closeModal() {
  previewImage.value = null
  emit('close')
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    if (previewImage.value) {
      previewImage.value = null
      return
    }

    closeModal()
  }
}

watch(
  () => props.project,
  (project) => {
    document.body.style.overflow = project ? 'hidden' : ''
    previewImage.value = null
  },
  { immediate: true },
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="project" class="fixed inset-0 z-[80] overflow-y-auto bg-ink-950/[0.78] p-4 backdrop-blur-md" @click.self="closeModal">
      <div class="mx-auto my-8 max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-white text-slate-950 shadow-card dark:bg-ink-900 dark:text-white">
        <div class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-white/10">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.22em]" :class="accent.text">{{ project.label }}</p>
            <h3 class="mt-1 text-2xl font-black">{{ project.name }}</h3>
          </div>
          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Đóng modal"
            @click="closeModal"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="p-5">
          <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ProjectImageFrame
              v-if="project.images?.length"
              :project="project"
              :image="project.images[0]"
              interactive
              @preview="previewImage = $event"
            />
            <ProjectMockup v-else :project="project" />

            <div>
              <p class="text-base leading-8 text-slate-700 dark:text-slate-300">{{ project.detail }}</p>

              <a
                v-if="project.website"
                :href="project.website"
                target="_blank"
                rel="noreferrer"
                class="mt-5 inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-black text-slate-950 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-ink-950"
              >
                Xem website
                <ExternalLink class="h-4 w-4" />
              </a>

              <div class="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div
                  v-for="stat in project.stats"
                  :key="stat"
                  class="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-black dark:border-white/10 dark:bg-white/[0.06]"
                >
                  {{ stat }}
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="rounded-md px-3 py-2 text-sm font-bold text-slate-950 dark:text-white"
                  :class="accent.soft"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <p class="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Thư viện màn hình
            </p>

            <div v-if="project.images?.length" class="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              <div
                v-for="(image, imageIndex) in project.images"
                :key="image.src"
                class="rounded-lg border border-slate-200 bg-slate-50 p-2 transition hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/20 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300"
              >
                <ProjectImageFrame
                  :project="project"
                  :image="image"
                  interactive
                  @preview="previewImage = $event"
                />
                <p class="mt-2 px-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                  Màn hình {{ imageIndex + 1 }}
                </p>
              </div>
            </div>

            <div v-else class="grid gap-3 md:grid-cols-3">
              <div
                v-for="screen in fakeGalleryScreens"
                :key="`${project.id}-${screen.mockup}`"
                class="rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <ProjectMockup :project="screen" />
                <p class="mt-2 px-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                  {{ screen.galleryTitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="previewImage"
      class="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/92 p-4"
      @click.self="previewImage = null"
    >
      <div class="relative rounded-lg border border-white/10 bg-ink-950 p-3 shadow-card">
        <button
          type="button"
          class="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-ink-950/80 text-white transition hover:bg-white/20"
          aria-label="Đóng ảnh phóng to"
          @click="previewImage = null"
        >
          <X class="h-4 w-4" />
        </button>

        <img
          :src="previewImage.src"
          :alt="previewImage.alt"
          class="max-h-[92vh] max-w-[94vw] rounded-md bg-white object-contain"
        />
      </div>
    </div>
  </Teleport>
</template>
