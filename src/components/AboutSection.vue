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
      <h2 class="section-title">Product-minded Engineer: Không chỉ viết code, tôi xây dựng giá trị.</h2>
      <p class="section-copy">
        Tôi không chỉ tập trung vào công nghệ, mà quan tâm đến việc công nghệ đó giải quyết vấn đề gì. Từ backend logic chặt chẽ, frontend tinh tế đến hạ tầng chịu tải lớn, mục tiêu cuối cùng của tôi luôn là tạo ra những sản phẩm thực sự hữu ích và bền bỉ theo thời gian.
      </p>
    </div>

    <div class="mt-10 grid gap-4 md:grid-cols-3">
      <div class="reveal rounded-lg border border-slate-200 bg-white/[0.78] p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">Nền tảng Backend</p>
        <h3 class="mt-3 text-xl font-bold">Kiến trúc vững chãi, quy trình tối ưu</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Xây dựng hệ thống có cấu trúc mạch lạc, dễ bảo trì và luôn sẵn sàng cho việc mở rộng khi nhu cầu kinh doanh tăng trưởng.
        </p>
      </div>
      <div class="reveal rounded-lg border border-slate-200 bg-white/[0.78] p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">Trải nghiệm Frontend</p>
        <h3 class="mt-3 text-xl font-bold">Giao diện tinh tế, tương tác mượt mà</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Chuyển hóa những nghiệp vụ phức tạp thành trải nghiệm đơn giản, tối ưu hiệu suất và giảm thiểu ma sát cho người dùng cuối.
        </p>
      </div>
      <div class="reveal rounded-lg border border-slate-200 bg-white/[0.78] p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">Ứng dụng AI thực tiễn</p>
        <h3 class="mt-3 text-xl font-bold">Thông minh hơn, hiệu quả hơn</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Không chỉ là tích hợp AI, tôi tập trung vào việc áp dụng RAG và các mô hình ngôn ngữ lớn để tạo ra giá trị thực tế trong vận hành.
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
