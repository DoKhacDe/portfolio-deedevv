<script setup>
import { Menu, Moon, Sun, X } from 'lucide-vue-next'
import { ref } from 'vue'
import profileImage from '../assets/profile.jpg'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
  activeSection: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['toggle-theme'])

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/[0.82] backdrop-blur-xl dark:bg-ink-950/[0.78]">
    <nav class="section-shell flex h-16 items-center justify-between">
      <a href="#home" class="group flex items-center gap-3" @click="closeMenu">
        <img
          :src="profileImage"
          alt="DeeDevv"
          class="h-10 w-10 rounded-md border border-slate-200 object-cover object-[50%_32%] shadow-glow dark:border-white/15"
        />
        <span class="hidden text-sm font-semibold text-slate-950 dark:text-white sm:block">DeeDevv</span>
      </a>

      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          :class="
            activeSection === section.id
              ? 'bg-cyan-100 text-cyan-950 shadow-[0_0_24px_rgba(40,215,255,0.22)] dark:border dark:border-cyan-300/35 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-none'
              : ''
          "
        >
          {{ section.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          :aria-label="isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'"
          @click="$emit('toggle-theme')"
        >
          <Sun v-if="isDark" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          aria-label="Mở menu điều hướng"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" class="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-white/10 dark:bg-ink-900">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="block rounded-md px-3 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200"
        :class="activeSection === section.id ? 'bg-cyan-100 text-cyan-950 dark:bg-cyan-300/10 dark:text-cyan-100' : ''"
        @click="closeMenu"
      >
        {{ section.label }}
      </a>
    </div>
  </header>
</template>
