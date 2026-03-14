import { isEmpty } from 'lodash-es';
import React from 'react';
import sanitizeHtml from 'sanitize-html';
import i18next from 'i18next';

import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: string;
}

const PRESERVE_HTML_ENTITIES = ['amp', 'lt', 'gt', 'quot', 'apos'];

// Double-encode PRESERVE_HTML_ENTITIES so they survive decoding by sanitizeHtml
function preserveHtmlEntities(str: string) {
  const entityPattern = new RegExp(
    `&(${PRESERVE_HTML_ENTITIES.join('|')})(;?)`,
    'g'
  );

  return str.replace(entityPattern, '&amp;$1$2');
}

function Output({ defaultOutput, output }: OutputProps): JSX.Element {
  const message = !isEmpty(output) ? output : defaultOutput;

  const preserved = preserveHtmlEntities(message);

  const sanitizedMessage = sanitizeHtml(preserved, {
    allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
  });

  return (
    <pre
      className='output-text'
      data-playwright-test-label='output-text'
      dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    />
  );
}

export default Output;
