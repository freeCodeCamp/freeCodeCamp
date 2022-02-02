import Prism from 'prismjs';
import React, { useRef, useEffect } from 'react';
import CopyElementTextButton from './copy-element-text-button';

interface PrismFormattedProps {
  className?: string;
  text: string;
}

function addCopyButton(pre: HTMLElement, number: number): void {
  const copyButton = new CopyElementTextButton({
    copyTarget: pre.firstElementChild as HTMLElement,
    buttonDescription: `Copy code example ${number}`,
    successMessage: 'Copied <span class="sr-only">to clipboard</span>'
  });
  // Wrapping <pre> in <figure> with <figcaption> makes this more
  // accessible to screen readers.
  const figure = document.createElement('figure');
  const figCaption = document.createElement('figcaption');
  figCaption.innerText = `Code example ${number}`;
  figCaption.classList.add('sr-only');
  figure.appendChild(figCaption);
  figure.classList.add('copy-text');
  pre.parentNode?.insertBefore(figure, pre);
  figure.appendChild(pre);
  figure.insertBefore(copyButton.toast, pre);
  figure.appendChild(copyButton.button);
  // Mark this as accessible so we don't process it again.
  pre.setAttribute('data-a11y', 'true');
  // No need for tabindex on <pre> since there is a <button> inside
  // of the wrapping <figure> now.
  pre.removeAttribute('tabindex');
}

function PrismFormatted({ className, text }: PrismFormattedProps): JSX.Element {
  const instructionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Just in case 'current' has not been created, though it should have been.
    if (instructionsRef.current) {
      Prism.highlightAllUnder(instructionsRef.current);
      // Make <pre> <code> examples more accessible.
      const preElements = instructionsRef.current.getElementsByTagName('pre');
      for (const [index, pre] of Array.from(preElements).entries()) {
        if (
          // Prism adds tabindex=0 to <pre>
          pre.getAttribute('tabindex') === '0' &&
          pre.firstElementChild?.tagName.toUpperCase() === 'CODE' &&
          // Make sure we haven't already processed this <pre>
          pre.getAttribute('data-a11y') !== 'true'
        ) {
          addCopyButton(pre, index + 1);
        }
      }
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
