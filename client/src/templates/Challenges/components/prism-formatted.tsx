import Prism from 'prismjs';
import React, { useRef, useEffect } from 'react';
import { enhancePrismAccessibility } from '../utils';

interface PrismFormattedProps {
  className?: string;
  text: string;
}

function PrismFormatted({ className, text }: PrismFormattedProps): JSX.Element {
  const instructionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Just in case 'current' has not been created, though it should have been.
    if (instructionsRef.current) {
      Prism.hooks.add('complete', enhancePrismAccessibility);
      Prism.highlightAllUnder(instructionsRef.current);
    }
  }, []);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
      ref={instructionsRef}
    />
  );
}

PrismFormatted.displayName = 'PrismFormatted';

export default PrismFormatted;
