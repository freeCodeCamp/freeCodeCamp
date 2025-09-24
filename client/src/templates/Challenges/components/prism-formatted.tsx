import Prism from 'prismjs';
import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { enhancePrismAccessibility } from '../utils';

import { challengeMetaSelector } from '../redux/selectors';
import type { ChallengeMeta } from '../../../redux/prop-types';
import { getSuperBlockLangCode } from '../../../../../shared-dist/config/curriculum';

interface PrismFormattedProps {
  className?: string;
  text: string;
  useSpan?: boolean;
  noAria?: boolean;
  challengeMeta: ChallengeMeta;
}

const mapStateToProps = (state: unknown) => ({
  challengeMeta: challengeMetaSelector(state) as ChallengeMeta
});

function PrismFormatted({
  className,
  text,
  useSpan,
  noAria,
  challengeMeta
}: PrismFormattedProps): JSX.Element {
  const instructionsRef = useRef<HTMLDivElement>(null);
  const ElementName = useSpan ? 'span' : 'div';

  if (noAria) {
    text = text.replace(/<pre( [^>]+)?>/, '<pre$1 data-no-aria="true">');
  }

  // Add lang attribute to code elements for language learning content
  const languageCode = getSuperBlockLangCode(challengeMeta.superBlock);
  if (languageCode) {
    text = text.replace(/<code(\s[^>]*)?>/g, `<code$1 lang="${languageCode}">`);
  }

  useEffect(() => {
    // Just in case 'current' has not been created, though it should have been.
    if (instructionsRef.current) {
      Prism.hooks.add('complete', enhancePrismAccessibility);
      Prism.highlightAllUnder(instructionsRef.current);

      const preElements = instructionsRef.current.querySelectorAll('pre');
      preElements.forEach((pre: HTMLPreElement) => {
        if (pre.scrollWidth > pre.clientWidth) {
          pre.setAttribute('tabIndex', '0');
        } else {
          pre.removeAttribute('tabIndex');
        }
      });
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

export default connect(mapStateToProps)(PrismFormatted);
