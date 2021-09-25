import { isEmpty } from 'lodash-es';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

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
    />
  );
}

export default Output;
