import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
  defaultOutput: PropTypes.string,
  height: PropTypes.number,
  output: PropTypes.string
};

const options = {
  lineNumbers: false,
  minimap: {
    enabled: false
  },
  readOnly: true,
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden'
  },
  wordWrap: 'on'
};

function Output({ output, defaultOutput, height }) {
  return (
    <Fragment>
      <base href='/' />
      <MonacoEditor
        className='challenge-output'
        height={height}
        options={options}
        value={output ? output : defaultOutput}
      />
    </Fragment>
  );
}

Output.displayName = 'Output';
Output.propTypes = propTypes;

export default Output;
