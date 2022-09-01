import Prism from 'prismjs';
import React, { useRef, useEffect } from 'react';

interface PrismFormattedProps {
  className?: string;
  text: string;
  lineNumbers?: boolean;
  darkTheme?: boolean;
}

/**
 * Add css formatting classes to the <pre> elements based on showLineNumbers and darkTheme params
 * @param container
 * @param showLineNumbers
 * @param darkTheme
 */
const addFormattingClassesForPres = (
  container: HTMLElement,
  showLineNumbers = true,
  darkTheme = true
) => {
  const codeBlocks: HTMLElement[] = [].slice.call(
    container.querySelectorAll('[class*="language-"]')
  );
  // we want to formatt the <pre> element, not the <code>, get parent if current element is not PRE
  const preElements: HTMLPreElement[] = codeBlocks.map(
    c => (c.nodeName === 'PRE' ? c : c.parentElement) as HTMLPreElement
  );

  for (const pre of preElements) {
    pre.classList.toggle('line-numbers', showLineNumbers);
    pre.classList.toggle('dark-palette', darkTheme);
  }
};

function PrismFormatted({
  className,
  text,
  ...props
}: PrismFormattedProps): JSX.Element {
  const instructionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Just in case 'current' has not been created, though it should have been.
    if (instructionsRef.current) {
      addFormattingClassesForPres(
        instructionsRef.current,
        props.lineNumbers,
        props.darkTheme
      );
      Prism.highlightAllUnder(instructionsRef.current);
    }
  }, [props.darkTheme, props.lineNumbers]);

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
