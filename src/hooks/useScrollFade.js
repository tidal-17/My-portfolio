import { useEffect, useRef, useState } from 'react'

function useScrollFade() {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.15, rootMargin: '-20% 0px -20% 0px'}
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export default useScrollFade