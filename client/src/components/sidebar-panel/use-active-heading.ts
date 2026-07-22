import { useEffect, useState } from 'react';

/**
 * Returns the id of the last heading whose top edge has scrolled past the
 * bottom of the sticky chrome (header + any other sticky elements above the
 * content area), accounting for `topOffset` which is the negative value
 * returned by useStickyScrollOffset.
 *
 * @param ids      Heading element ids in document order (top → bottom).
 * @param topOffset  Negative offset from useStickyScrollOffset.
 */
function useActiveHeading(ids: string[], topOffset: number): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = ids.join(',');

  useEffect(() => {
    if (!idsKey) {
      setActiveId(null);
      return;
    }

    let rafId: number | null = null;

    const update = () => {
      const marker = window.scrollY + Math.abs(topOffset) + 12;
      let nextId: string | null = ids[0] ?? null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= marker) {
          nextId = id;
        } else {
          break;
        }
      }

      setActiveId(prev => (prev === nextId ? prev : nextId));
      rafId = null;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, topOffset]);

  return activeId;
}

export default useActiveHeading;
