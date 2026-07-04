<script setup>
import { Github, Mail, Phone, Send } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="section-shell scroll-mt-24 py-20">
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div class="reveal">
        <p class="section-kicker">Liên hệ</p>
        <h2 class="section-title">Trao đổi về sản phẩm, backend hoặc AI workflow.</h2>
        <p class="section-copy">
          Form này là UI demo. Bạn có thể nối backend, Formspree, EmailJS hoặc API Laravel sau khi deploy.
        </p>

        <div class="mt-8 space-y-3">
          <a
            href="mailto:dokhacde1903@gmail.com"
            class="flex items-center gap-3 rounded-md border border-slate-200 bg-white/80 p-4 text-sm font-bold transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
          >
            <Mail class="h-5 w-5 text-cyan-400" />
            dokhacde1903@gmail.com
          </a>
          <a
            href="https://github.com/DoKhacDe"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-3 rounded-md border border-slate-200 bg-white/80 p-4 text-sm font-bold transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
          >
            <Github class="h-5 w-5 text-[#ff6f61]" />
            github.com/DoKhacDe
          </a>
          <div
            class="flex items-center gap-3 rounded-md border border-slate-200 bg-white/80 p-4 text-sm font-bold dark:border-white/10 dark:bg-white/[0.06]"
          >
            <Phone class="h-5 w-5 text-lime-400" />
            0398913042
          </div>
        </div>
      </div>

      <form class="reveal rounded-lg border border-slate-200 bg-white/[0.88] p-5 shadow-card dark:border-white/10 dark:bg-white/[0.06]">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block">
            <span class="text-sm font-bold text-slate-700 dark:text-slate-200">Tên</span>
            <input
              type="text"
              class="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              placeholder="Tên của bạn"
            />
          </label>
          <label class="block">
            <span class="text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
            <input
              type="email"
              class="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              placeholder="email@example.com"
            />
          </label>
        </div>

        <label class="mt-4 block">
          <span class="text-sm font-bold text-slate-700 dark:text-slate-200">Chủ đề</span>
          <input
            type="text"
            class="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-ink-950 dark:text-white"
            placeholder="Dự án Laravel/Vue/AI..."
          />
        </label>

        <label class="mt-4 block">
          <span class="text-sm font-bold text-slate-700 dark:text-slate-200">Nội dung</span>
          <textarea
            rows="6"
            class="mt-2 w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-ink-950 dark:text-white"
            placeholder="Bạn muốn trao đổi gì?"
          ></textarea>
        </label>

        <button
          type="button"
          class="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-ink-950 dark:hover:bg-cyan-100"
        >
          <Send class="h-4 w-4" />
          Gửi tin nhắn
        </button>
      </form>
    </div>
  </section>
</template>
