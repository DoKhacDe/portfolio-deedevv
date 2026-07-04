<script setup>
const skills = [
  'Laravel',
  'Filament',
  'Vue.js',
  'Nuxt.js',
  'React Native',
  'MySQL',
  'PostgreSQL',
  'AI/RAG',
  'OpenAI',
  'Linux server',
  'Cloudflare',
  'AWS SES',
]
</script>

<template>
  <section id="about" class="section-shell scroll-mt-24 py-20">
    <div class="reveal">
      <p class="section-kicker">Giới thiệu</p>
      <h2 class="section-title">Developer có tư duy sở hữu sản phẩm.</h2>
      <p class="section-copy">
        Tôi tập trung vào các hệ thống cần sự bền bỉ: backend rõ ràng, frontend dễ dùng, mobile app gọn luồng và hạ tầng đủ chắc để chịu tải thật. Điểm mạnh của tôi là theo sát sản phẩm từ ý tưởng, triển khai, vận hành, tối ưu cho đến mở rộng.
      </p>
    </div>

    <div class="mt-10 grid gap-4 md:grid-cols-3">
      <div class="reveal rounded-lg border border-slate-200 bg-white/[0.78] p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">Năng lực backend</p>
        <h3 class="mt-3 text-xl font-bold">Laravel, API, queue, domain logic</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Xây hệ thống có cấu trúc, dễ maintain và có khả năng mở rộng khi nghiệp vụ lớn dần.
        </p>
      </div>
      <div class="reveal rounded-lg border border-slate-200 bg-white/[0.78] p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">Tư duy frontend</p>
        <h3 class="mt-3 text-xl font-bold">Vue, Nuxt, UI workflow</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Biến nghiệp vụ phức tạp thành giao diện rõ ràng, nhanh, responsive và ít ma sát cho người dùng.
        </p>
      </div>
      <div class="reveal rounded-lg border border-slate-200 bg-white/[0.78] p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">Tích hợp AI</p>
        <h3 class="mt-3 text-xl font-bold">RAG, chatbot, OpenAI</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Tích hợp AI vào sản phẩm thật, có ngữ cảnh dữ liệu và có giá trị vận hành cụ thể.
        </p>
      </div>
    </div>

    <div class="reveal mt-8 flex flex-wrap gap-2">
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-200"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
