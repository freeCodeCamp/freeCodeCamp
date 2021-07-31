import React, { Component } from 'react';
import sanitizeHtml from 'sanitize-html';

import './output.css';
import { isEmpty } from 'lodash-es';

interface OutputProps {
  defaultOutput: string;
  output: string[];
}

class Output extends Component<OutputProps> {
  render(): JSX.Element {
    const { output, defaultOutput } = this.props;
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
}

export default Output;
