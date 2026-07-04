<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  interactive: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['preview'])
</script>

<template>
  <div class="overflow-hidden rounded-md border border-white/[0.12] bg-ink-950 p-3 text-white">
    <div class="mb-3 flex items-center justify-between">
      <div>
        <p class="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{{ project.name }}</p>
        <p class="text-[11px] font-semibold text-slate-200">{{ project.label }}</p>
      </div>
      <span class="rounded-md border border-white/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
        ảnh thật
      </span>
    </div>

    <button
      v-if="interactive"
      type="button"
      class="block w-full overflow-hidden rounded-md border border-slate-200 bg-white text-left shadow-2xl"
      :aria-label="`Phóng to ảnh ${project.name}`"
      @click="$emit('preview', image)"
    >
      <div class="flex h-8 items-center justify-between border-b border-slate-200 bg-slate-100 px-3">
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-[#ff6f61]"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-[#ffd166]"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-[#b7ff5a]"></span>
        </div>
        <span class="h-2 w-24 rounded-full bg-slate-300"></span>
      </div>

      <img
        :src="image.src"
        :alt="image.alt"
        class="aspect-[16/10] w-full bg-slate-100 object-cover object-top transition duration-300 hover:scale-[1.015]"
        loading="lazy"
      />
    </button>

    <div v-else class="overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl">
      <div class="flex h-8 items-center justify-between border-b border-slate-200 bg-slate-100 px-3">
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-[#ff6f61]"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-[#ffd166]"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-[#b7ff5a]"></span>
        </div>
        <span class="h-2 w-24 rounded-full bg-slate-300"></span>
      </div>

      <img
        :src="image.src"
        :alt="image.alt"
        class="aspect-[16/10] w-full bg-slate-100 object-cover object-top"
        loading="lazy"
      />
    </div>
  </div>
</template>
