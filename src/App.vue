<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useActiveSection } from './composables/useActiveSection'
import { useReveal } from './composables/useReveal'

const sections = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'about', label: 'Giới thiệu' },
  { id: 'projects', label: 'Dự án' },
  { id: 'experience', label: 'Kinh nghiệm' },
  { id: 'contact', label: 'Liên hệ' },
]

const isDark = ref(true)
const { activeSection } = useActiveSection(sections.map((section) => section.id))
const currentYear = computed(() => new Date().getFullYear())

useReveal()

function toggleTheme() {
  isDark.value = !isDark.value
}

watch(
  isDark,
  (enabled) => {
    document.documentElement.classList.toggle('dark', enabled)
    document.documentElement.classList.toggle('light', !enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
  },
  { immediate: true },
)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  }
})
</script>

<template>
  <div
    class="mesh-bg min-h-screen bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-ink-950 dark:text-white"
  >
    <AppHeader
      :sections="sections"
      :active-section="activeSection"
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
    />

    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <SiteFooter :year="currentYear" />
  </div>
</template>
