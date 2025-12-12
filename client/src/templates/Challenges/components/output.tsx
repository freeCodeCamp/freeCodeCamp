import { isEmpty } from 'lodash-es';
import React from 'react';
import i18next from 'i18next';

import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: string;
}

function Output({ defaultOutput, output }: OutputProps): JSX.Element {
  const message = !isEmpty(output) ? output : defaultOutput;

  return (
    <pre
      className='output-text'
      data-playwright-test-label='output-text'
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      {message}
    </pre>
  );
}

export default Output;
