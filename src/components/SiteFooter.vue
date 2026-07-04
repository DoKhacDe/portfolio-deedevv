<script setup>
defineProps({
  year: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <footer class="border-t border-slate-200 py-8 dark:border-white/10">
    <div class="section-shell text-sm text-slate-500 dark:text-slate-400">
      <p>© {{ year }} DeeDevv. All rights reserved.</p>
    </div>
  </footer>
</template>
