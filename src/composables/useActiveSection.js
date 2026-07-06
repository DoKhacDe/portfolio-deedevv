import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection(sectionIds) {
  const activeSection = ref(sectionIds[0])
  let ticking = false

  function updateActiveSection() {
    const activationLine = 120
    const bottomOffset = 8
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const isNearPageBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - bottomOffset

    if (isNearPageBottom) {
      activeSection.value = sections.at(-1)?.id ?? activeSection.value
      ticking = false
      return
    }

    const currentSection = sections.reduce((current, section) => {
      const top = section.getBoundingClientRect().top
      return top <= activationLine ? section : current
    }, sections[0])

    if (currentSection?.id) {
      activeSection.value = currentSection.id
    }

    ticking = false
  }

  function requestUpdate() {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(updateActiveSection)
  }

  onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('hashchange', requestUpdate)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', requestUpdate)
    window.removeEventListener('resize', requestUpdate)
    window.removeEventListener('hashchange', requestUpdate)
  })

  return { activeSection }
}
