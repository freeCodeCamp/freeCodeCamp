import React from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';

import './output.css';

const defaultOptions = {
  lineNumbers: false,
  lineWrapping: true,
  mode: 'javascript',
  readOnly: 'nocursor'
};

const propTypes = {
  defaultOutput: PropTypes.string,
  output: PropTypes.string
};

function Output({ output, defaultOutput }) {
  return (
    <CodeMirror
      className='challenge-log'
      options={{ ...defaultOptions, theme: 'material' }}
      value={output || defaultOutput}
    />
  );
}

Output.displayName = 'Output';
Output.propTypes = propTypes;

export default Output;
