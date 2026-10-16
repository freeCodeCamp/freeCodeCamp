import { useEffect, useState } from 'react';

/**
 * Computes a negative scroll offset suitable for `react-scroll`'s `offset`
 * prop so that scrolled-to elements are not hidden behind a sticky header.
 *
 * Reads the current pixel value of each supplied CSS custom property from
 * `:root` on mount and on every resize, returning the negated sum plus any
 * additional fixed offset.
 */
function useStickyScrollOffset(
  cssVarNames: string[],
  additionalOffset = 0
): number {
  const [offset, setOffset] = useState(0);

  // Join to a stable string so the effect only re-runs when the actual
  // variable names change, not merely when the caller passes a new array.
  const varNamesKey = cssVarNames.join(',');

  useEffect(() => {
    const compute = () => {
      const rootStyle = window.getComputedStyle(document.documentElement);
      const total = cssVarNames.reduce(
        (sum, name) =>
          sum + (Number.parseFloat(rootStyle.getPropertyValue(name)) || 0),
        0
      );
      setOffset(-(total + additionalOffset));
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
    // varNamesKey is the stable primitive representation of cssVarNames.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [varNamesKey, additionalOffset]);

  return offset;
}

export default useStickyScrollOffset;
