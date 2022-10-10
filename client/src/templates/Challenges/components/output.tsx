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
  const message = sanitizeHtml(
    !isEmpty(output) ? output.join('\n') : defaultOutput,
    {
      allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
    }
  );
  return (
    <pre
      className='output-text'
      dangerouslySetInnerHTML={{ __html: message }}
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    />
  );
}

export default Output;
