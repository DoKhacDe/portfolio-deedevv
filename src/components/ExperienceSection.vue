<script setup>
import { BriefcaseBusiness } from 'lucide-vue-next'

const experiences = [
  {
    company: 'TDA Global',
    role: 'Backend/Fullstack Developer',
    period: 'Hiện tại',
    description: 'Chủ trì phát triển và duy trì hệ sinh thái sản phẩm đa dạng từ thương mại điện tử bảo hiểm, hệ thống tự động hóa đến các giải pháp AI tiên tiến.',
  },
  {
    company: 'BH Media',
    role: 'Fullstack Developer',
    period: 'Giai đoạn phát triển',
    description: 'Đóng góp vào việc tối ưu hóa hệ thống quản lý nội dung và nâng cao hiệu suất vận hành backend cho các nền tảng truyền thông.',
  },
  {
    company: 'EGLIFE JSC',
    role: 'Web Developer',
    period: 'Giai đoạn khởi đầu',
    description: 'Xây dựng nền tảng kỹ thuật vững chắc thông qua việc phát triển các ứng dụng web thực tế và làm quen với quy trình sản xuất phần mềm chuyên nghiệp.',
  },
]
</script>

<template>
  <section id="experience" class="section-shell scroll-mt-24 py-20">
    <div class="reveal">
      <p class="section-kicker">Kinh nghiệm</p>
      <h2 class="section-title">Hành trình kiến tạo và phát triển sản phẩm.</h2>
    </div>

    <div class="relative mt-10">
      <div class="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10 md:left-1/2"></div>

      <div class="grid gap-6">
        <article
          v-for="(item, index) in experiences"
          :key="item.company"
          class="reveal relative grid gap-4 md:grid-cols-2"
        >
          <div :class="index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'">
            <div class="rounded-lg border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.06]">
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-400">{{ item.period }}</p>
              <h3 class="mt-3 text-2xl font-black">{{ item.company }}</h3>
              <p class="mt-1 font-semibold text-slate-600 dark:text-slate-300">{{ item.role }}</p>
              <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
            </div>
          </div>

          <span
            class="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-md border border-slate-200 bg-white text-slate-950 dark:border-white/10 dark:bg-ink-900 dark:text-white md:left-1/2 md:-ml-4"
          >
            <BriefcaseBusiness class="h-4 w-4" />
          </span>
        </article>
      </div>
    </div>
  </section>
</template>
