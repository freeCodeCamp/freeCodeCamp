import { isEmpty } from 'lodash-es';
import React from 'react';
import sanitizeHtml from 'sanitize-html';
import i18next from 'i18next';

import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: string;
}

/**
 *
 * @param message Sanitized HTML code
 * @returns Html code that is capable of correctly displaying escaped html entities
 */
function reformatHTMLEntities(message: string) {
  console.log(message);
  const reformattedHTML = message
    .replace(/&amp;/g, '&amp;amp;') // `&amp;amp;` becomes `&amp;` in rendered html
    .replace(/&apos;/g, '&amp;apos;') // `&amp;apos;` becomes `&apos;` in rendered html
    .replace(/&quot;/g, '&amp;quot;') // `&amp;quot;` becomes `&quot;` in rendered html
    .replace(/&gt;/g, '&amp;gt;') // `&amp;gt;` becomes `&gt;` in rendered html
    .replace(/&lt;/g, '&amp;lt;'); // `&amp;lt;` becomes `&lt;` in rendered html

  console.log(reformattedHTML);
  return reformattedHTML;
}

function Output({ defaultOutput, output }: OutputProps): JSX.Element {
  const message = sanitizeHtml(!isEmpty(output) ? output : defaultOutput, {
    allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
  });

  return (
    <pre
      className='output-text'
      data-playwright-test-label='output-text'
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      dangerouslySetInnerHTML={{ __html: reformatHTMLEntities(message) }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    ></pre>
  );
}

export default Output;
