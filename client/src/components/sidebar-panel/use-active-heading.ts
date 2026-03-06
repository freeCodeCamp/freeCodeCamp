import { useEffect, useState } from 'react';

/**
 * Returns the id of the last heading whose top edge has scrolled past the
 * bottom of the sticky chrome (header + any other sticky elements above the
 * content area), accounting for `topOffset` which is the negative value
 * returned by useStickyScrollOffset.
 *
 * The settings sidebar uses react-scroll's built-in spy instead of this hook
 * because its sticky chrome is only the header (~60 px) and its sections are
 * large, so the detection error is imperceptible. The review outline has a
 * taller chrome (header + breadcrumbs + action row) and denser headings, so
 * the offset must be explicitly applied.
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
    // Used as a fallback for browsers that do not support `scrollend`.
    let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;

    const update = () => {
      const marker = window.scrollY + Math.abs(topOffset);
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
      // Fallback for browsers without `scrollend`: run one final update after
      // the scroll animation has had enough time to fully settle. Mobile
      // browsers (particularly iOS) can apply a brief position correction
      // after a programmatic smooth scroll, causing an intermediate `scroll`
      // event that transiently shows the wrong active heading. The timer
      // fires slightly after react-scroll's 300 ms animation duration.
      if (scrollEndTimer !== null) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(update, 350);
    };

    // `scrollend` fires once the viewport has truly settled — after any
    // browser-applied corrections following a programmatic or touch-driven
    // scroll. Cancel the fallback timer since we now have a reliable signal.
    const onScrollEnd = () => {
      if (scrollEndTimer !== null) {
        clearTimeout(scrollEndTimer);
        scrollEndTimer = null;
      }
      update();
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('scrollend', onScrollEnd, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (scrollEndTimer !== null) clearTimeout(scrollEndTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('scrollend', onScrollEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, topOffset]);

  return activeId;
}

export default useActiveHeading;
