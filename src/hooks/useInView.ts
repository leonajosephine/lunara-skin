import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & { once?: boolean };

export function useInView(options: Options = {}) {
  const { once = true, ...obs } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsInView(false);
      }
    }, obs);

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, obs.root, obs.rootMargin, obs.threshold]);

  return { ref, isInView };
}
