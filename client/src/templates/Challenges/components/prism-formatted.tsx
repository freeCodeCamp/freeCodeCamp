import Prism from 'prismjs';
import React, { useRef, useEffect } from 'react';
import { enhancePrismAccessibility } from '../utils';

interface PrismFormattedProps {
  className?: string;
  text: string;
  useSpan?: boolean;
  noAria?: boolean;
}

function PrismFormatted({
  className,
  text,
  useSpan,
  noAria
}: PrismFormattedProps): JSX.Element {
  const instructionsRef = useRef<HTMLDivElement>(null);
  const ElementName = useSpan ? 'span' : 'div';

  if (noAria) {
    text = text.replace(/<pre( [^>]+)?>/, '<pre$1 data-no-aria="true">');
  }

  useEffect(() => {
    // Just in case 'current' has not been created, though it should have been.
    if (instructionsRef.current) {
      Prism.hooks.add('complete', enhancePrismAccessibility);
      Prism.highlightAllUnder(instructionsRef.current);
    }
  }, []);

  return (
    <ElementName
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
      ref={instructionsRef}
    />
  );
}

PrismFormatted.displayName = 'PrismFormatted';

export default PrismFormatted;
