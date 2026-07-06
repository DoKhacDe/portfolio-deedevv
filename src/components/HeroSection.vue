<script setup>
import { ArrowDown, Github, Mail, Rocket } from 'lucide-vue-next'
import aboutImageOne from '../assets/about_image_1.jpeg'

const metrics = [
  { label: 'Hợp đồng', value: '18k+' },
  { label: 'CTV', value: '1k+' },
  { label: 'Domain', value: '7.3k' },
  { label: 'Sản phẩm', value: '7+' },
]
</script>

<template>
  <section id="home" class="section-shell flex min-h-screen items-center pt-24">
    <div class="grid w-full items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <div class="reveal">
        <div class="section-kicker">
          <Rocket class="h-4 w-4" />
          Fullstack Developer · 5+ năm kinh nghiệm
        </div>
        <h1 class="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          Đỗ Khắc Đệ
        </h1>
        <p class="mt-5 max-w-3xl text-xl font-semibold leading-8 text-slate-800 dark:text-slate-100 sm:text-2xl">
          Biến ý tưởng thành sản phẩm thực tế với tư duy hệ thống và khả năng vận hành toàn diện.
        </p>
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Tôi chuyên xây dựng các giải pháp Fullstack hiện tại, kết hợp tối ưu hóa giữa Backend Laravel vững chắc, Frontend Vue.js mượt mà và khả năng tích hợp AI/RAG thực tiễn nhằm mang lại giá trị đột phá cho người dùng cuối.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            class="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-ink-950 dark:hover:bg-cyan-100"
          >
            Xem dự án
            <ArrowDown class="h-4 w-4" />
          </a>
          <a
            href="#contact"
            class="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/70 px-5 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/[0.12] dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <Mail class="h-4 w-4" />
            Liên hệ
          </a>
          <a
            href="https://github.com/DoKhacDe"
            target="_blank"
            rel="noreferrer"
            class="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/70 px-5 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/[0.12] dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <Github class="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <div class="reveal relative">
        <div class="relative min-h-[520px] overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-card dark:border-white/10">
          <img
            :src="aboutImageOne"
            alt="DeeDevv production workspace"
            class="absolute inset-0 h-full w-full object-cover object-center opacity-58"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-ink-950/10 via-ink-950/18 to-ink-950/80"></div>

          <div class="relative flex min-h-[520px] flex-col p-4 sm:p-5">
            <div class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-[#ff6f61]"></span>
              <span class="h-3 w-3 rounded-full bg-[#ffd166]"></span>
              <span class="h-3 w-3 rounded-full bg-[#b7ff5a]"></span>
            </div>

            <div class="ml-auto mt-auto w-full/2 rounded-md border border-white/20 bg-ink-950/72 p-5 shadow-card backdrop-blur-xl sm:w-1/2">
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="metric in metrics"
                  :key="metric.label"
                  class="rounded-md border border-white/20 bg-ink-950/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
                >
                  <p class="text-3xl font-black drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">{{ metric.value }}</p>
                  <p class="mt-1 text-xs font-bold drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]">{{ metric.label }}</p>
                </div>
              </div>

              <div class="mt-4 flex flex-wrap gap-2">
                <span class="rounded-md bg-white px-2.5 py-1.5 text-[11px] font-bold text-ink-950">Laravel</span>
                <span class="rounded-md bg-cyan-300 px-2.5 py-1.5 text-[11px] font-bold text-ink-950">Vue.js</span>
                <span class="rounded-md bg-[#b7ff5a] px-2.5 py-1.5 text-[11px] font-bold text-ink-950">AI/RAG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
