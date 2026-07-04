<script setup>
import { BarChart3, Bot, Mail, Music2, ShieldCheck, Smartphone, Workflow } from 'lucide-vue-next'
import { computed } from 'vue'
import { accentClasses } from '../data/projects'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const accent = computed(() => accentClasses[props.project.accent] ?? accentClasses.cyan)

const iconMap = {
  commerce: ShieldCheck,
  mobile: Smartphone,
  ai: Bot,
  automation: Workflow,
  analytics: BarChart3,
  media: Music2,
  dashboard: Mail,
}

const screenTitle = {
  commerce: 'Báo giá & hợp đồng',
  mobile: 'Không gian cộng tác viên',
  ai: 'Trợ lý bảo hiểm AI',
  automation: 'Trình dựng email flow',
  analytics: 'Bảng theo dõi xu hướng',
  media: 'Phòng nghe chung',
  dashboard: 'Cổng vận hành đối tác',
}

const Icon = computed(() => iconMap[props.project.mockup] ?? ShieldCheck)
</script>

<template>
  <div class="relative overflow-hidden rounded-md border border-white/[0.12] bg-ink-950 p-3 text-white">
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r" :class="accent.gradient"></div>

    <div class="mb-3 flex items-center justify-between pt-1">
      <div class="flex items-center gap-2">
        <span class="grid h-8 w-8 place-items-center rounded-md" :class="accent.soft">
          <component :is="Icon" class="h-4 w-4" :class="accent.text" />
        </span>
        <div>
          <p class="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{{ project.name }}</p>
          <p class="text-[11px] font-semibold text-slate-200">{{ screenTitle[project.mockup] }}</p>
        </div>
      </div>
      <span class="rounded-md border px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em]" :class="accent.border">
        mô phỏng
      </span>
    </div>

    <div class="overflow-hidden rounded-md border border-white/10 bg-white text-slate-950 shadow-2xl">
      <div class="flex h-8 items-center justify-between border-b border-slate-200 bg-slate-100 px-3">
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-[#ff6f61]"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-[#ffd166]"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-[#b7ff5a]"></span>
        </div>
        <span class="h-2 w-28 rounded-full bg-slate-300"></span>
      </div>

      <div v-if="project.mockup === 'mobile'" class="grid min-h-64 place-items-center bg-slate-100 p-4">
        <div class="h-60 w-28 rounded-[1.5rem] border-[6px] border-slate-900 bg-white p-2 shadow-xl">
          <div class="mx-auto mb-3 h-1 w-8 rounded-full bg-slate-900"></div>
          <div class="rounded-lg p-2 text-white" :class="accent.bg">
            <p class="text-[10px] font-black text-ink-950">Hoa hồng</p>
            <p class="text-lg font-black text-ink-950">24.8M</p>
          </div>
          <div class="mt-3 space-y-2">
            <span class="block h-8 rounded-md bg-slate-100"></span>
            <span class="block h-8 rounded-md bg-slate-100"></span>
            <span class="block h-8 rounded-md bg-slate-100"></span>
          </div>
          <div class="mt-3 grid grid-cols-3 gap-1">
            <span class="h-5 rounded bg-slate-900"></span>
            <span class="h-5 rounded bg-slate-200"></span>
            <span class="h-5 rounded bg-slate-200"></span>
          </div>
        </div>
      </div>

      <div v-else-if="project.mockup === 'ai'" class="min-h-64 bg-slate-50 p-4">
        <div class="space-y-3">
          <div class="mr-10 rounded-md bg-white p-3 shadow-sm">
            <p class="text-[11px] font-bold text-slate-500">Khách hàng</p>
            <p class="mt-1 text-xs font-semibold">Tư vấn bảo hiểm xe ô tô cho tôi?</p>
          </div>
          <div class="ml-8 rounded-md p-3 text-ink-950 shadow-sm" :class="accent.soft">
            <p class="text-[11px] font-black">Insurbot AI</p>
            <p class="mt-1 text-xs leading-5">Đã tìm thấy 4 gói phù hợp. Tôi sẽ tính phí theo hãng xe, năm sản xuất và mức trách nhiệm.</p>
          </div>
          <div class="rounded-md border border-slate-200 bg-white p-3">
            <div class="mb-2 flex items-center justify-between">
              <span class="text-[11px] font-black">Nguồn dữ liệu RAG</span>
              <span class="text-[10px] font-bold text-emerald-600">khớp</span>
            </div>
            <div class="space-y-1.5">
              <span class="block h-2 rounded-full bg-slate-200"></span>
              <span class="block h-2 w-9/12 rounded-full bg-slate-200"></span>
              <span class="block h-2 w-7/12 rounded-full bg-slate-200"></span>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="project.mockup === 'automation'" class="min-h-64 bg-slate-50 p-4">
        <div class="grid grid-cols-[0.75fr_1.25fr] gap-3">
          <div class="space-y-2">
            <span class="block rounded-md bg-white p-3 text-[11px] font-black shadow-sm">Tệp khách</span>
            <span class="block rounded-md bg-white p-3 text-[11px] font-black shadow-sm">Phân nhóm</span>
            <span class="block rounded-md bg-white p-3 text-[11px] font-black shadow-sm">Mẫu email</span>
          </div>
          <div class="space-y-2">
            <div class="rounded-md border border-slate-200 bg-white p-3">
              <p class="text-[11px] font-black">Kích hoạt: khách mới</p>
            </div>
            <div class="ml-5 rounded-md border p-3" :class="accent.border">
              <p class="text-[11px] font-black">Gửi email chào mừng</p>
            </div>
            <div class="ml-10 rounded-md border border-slate-200 bg-white p-3">
              <p class="text-[11px] font-black">Chờ 2 ngày + chấm điểm AI</p>
            </div>
            <div class="ml-5 rounded-md bg-slate-900 p-3 text-white">
              <p class="text-[11px] font-black">Rẽ nhánh chiến dịch</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="project.mockup === 'analytics'" class="min-h-64 bg-slate-50 p-4">
        <div class="mb-3 flex gap-2">
          <span class="rounded bg-slate-900 px-2 py-1 text-[10px] font-black text-white">game</span>
          <span class="rounded bg-slate-200 px-2 py-1 text-[10px] font-black">anime</span>
          <span class="rounded bg-slate-200 px-2 py-1 text-[10px] font-black">movie</span>
        </div>
        <div class="grid gap-2">
          <div v-for="item in ['elden ring dlc', 'anime summer 2026', 'concert tickets']" :key="item" class="grid grid-cols-[1fr_auto] items-center rounded-md bg-white p-3 shadow-sm">
            <span class="text-xs font-black">{{ item }}</span>
            <span class="rounded px-2 py-1 text-[10px] font-black text-ink-950" :class="accent.soft">hot</span>
          </div>
        </div>
        <div class="mt-4 flex items-end gap-2">
          <span class="h-10 flex-1 rounded-t bg-slate-300"></span>
          <span class="h-16 flex-1 rounded-t" :class="accent.bg"></span>
          <span class="h-12 flex-1 rounded-t bg-slate-300"></span>
          <span class="h-20 flex-1 rounded-t" :class="accent.bg"></span>
          <span class="h-8 flex-1 rounded-t bg-slate-300"></span>
        </div>
      </div>

      <div v-else-if="project.mockup === 'media'" class="min-h-64 bg-slate-950 p-4 text-white">
        <div class="rounded-md bg-white/10 p-4">
          <div class="mb-4 flex items-center gap-3">
            <span class="grid h-12 w-12 place-items-center rounded-full" :class="accent.soft">
              <Music2 class="h-5 w-5" :class="accent.text" />
            </span>
            <div>
              <p class="text-sm font-black">Phòng: Night Coding</p>
              <p class="text-xs text-slate-400">Đồng bộ phát từ YouTube</p>
            </div>
          </div>
          <div class="h-2 rounded-full bg-white/10">
            <div class="h-2 w-7/12 rounded-full" :class="accent.bg"></div>
          </div>
          <div class="mt-4 grid grid-cols-4 gap-2">
            <span v-for="item in 4" :key="item" class="h-10 rounded bg-white/10"></span>
          </div>
        </div>
        <div class="mt-3 space-y-2">
          <span class="block h-7 w-10/12 rounded bg-white/10"></span>
          <span class="ml-auto block h-7 w-8/12 rounded" :class="accent.soft"></span>
        </div>
      </div>

      <div v-else class="min-h-64 bg-slate-50 p-4">
        <div class="grid grid-cols-[0.75fr_1.25fr] gap-3">
          <div class="space-y-2 rounded-md bg-slate-900 p-3 text-white">
            <span class="block h-3 w-8/12 rounded-full bg-white/30"></span>
            <span class="block h-8 rounded bg-white/10"></span>
            <span class="block h-8 rounded bg-white/10"></span>
            <span class="block h-8 rounded bg-white/10"></span>
          </div>
          <div>
            <div class="grid grid-cols-3 gap-2">
              <div v-for="stat in project.stats" :key="stat" class="rounded-md bg-white p-3 shadow-sm">
                <p class="text-[10px] font-black text-slate-400">chỉ số</p>
                <p class="mt-1 truncate text-xs font-black">{{ stat }}</p>
              </div>
            </div>
            <div class="mt-3 rounded-md bg-white p-3 shadow-sm">
              <div class="mb-3 flex items-end gap-1.5">
                <span class="h-10 flex-1 rounded-t bg-slate-200"></span>
                <span class="h-16 flex-1 rounded-t" :class="accent.bg"></span>
                <span class="h-12 flex-1 rounded-t bg-slate-200"></span>
                <span class="h-20 flex-1 rounded-t" :class="accent.bg"></span>
                <span class="h-8 flex-1 rounded-t bg-slate-200"></span>
              </div>
              <div class="space-y-1.5">
                <span class="block h-2 rounded-full bg-slate-200"></span>
                <span class="block h-2 w-9/12 rounded-full bg-slate-200"></span>
                <span class="block h-2 w-7/12 rounded-full bg-slate-200"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
