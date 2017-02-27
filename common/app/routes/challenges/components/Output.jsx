import React, { PureComponent, PropTypes } from 'react';
import NoSSR from 'react-no-ssr';
import Codemirror from 'react-codemirror';

import CodeMirrorSkeleton from './CodeMirrorSkeleton.jsx';

const defaultOptions = {
  lineNumbers: false,
  mode: 'javascript',
  theme: 'monokai',
  readOnly: 'nocursor',
  lineWrapping: true
};

const propTypes = {
  defaultOutput: PropTypes.string,
  output: PropTypes.string
};

export default class Output extends PureComponent {
  render() {
    const { output, defaultOutput } = this.props;
    return (
      <div className='challenge-log'>
        <NoSSR onSSR={ <CodeMirrorSkeleton content={ output } /> }>
          <Codemirror
            options={ defaultOptions }
            value={ output || defaultOutput }
          />
        </NoSSR>
      </div>
    );
  }
}

Output.displayName = 'Output';
Output.propTypes = propTypes;
