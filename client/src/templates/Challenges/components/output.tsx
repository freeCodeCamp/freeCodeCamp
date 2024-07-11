import { isEmpty } from 'lodash-es';
import React from 'react';
import sanitizeHtml from 'sanitize-html';
import i18next from 'i18next';

import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: string[];
}

function Output({ defaultOutput, output }: OutputProps): JSX.Element {
  const message = isEmpty(output) ? defaultOutput : output.join('\n');

  const shouldTruncate = message?.length > 500_000;
  const transformedMessage = shouldTruncate
    ? `${message?.substring(0, 500_000)} Logs truncated. See browser console for more`
    : message;

  const sanitizedOutput = sanitizeHtml(transformedMessage, {
    allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
  });

  return (
    <pre
      className='output-text'
      data-playwright-test-label='output-text'
      dangerouslySetInnerHTML={{
        __html: sanitizedOutput
      }}
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    />
  );
}

export default Output;
