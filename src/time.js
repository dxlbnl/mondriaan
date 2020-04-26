import { readable } from 'svelte/store'

export default readable(new Date().getTime(), set => {
  let animationFrame
  const next = () => {
    set(new Date().getTime())
    animationFrame = requestAnimationFrame(next)
  }
  if (window.requestAnimationFrame) {
    next()
    return () => cancelAnimationFrame(animationFrame)
  }
})
