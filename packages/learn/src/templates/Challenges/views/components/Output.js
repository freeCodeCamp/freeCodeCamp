import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
  defaultOutput: PropTypes.string,
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
  }
};

function Output({ output, defaultOutput }) {
  return (
    <Fragment>
      <base href='/' />
      <MonacoEditor
        className='challenge-output'
        height={150}
        options={options}
        value={output ? output : defaultOutput}
      />
    </Fragment>
  );
}

Output.displayName = 'Output';
Output.propTypes = propTypes;

export default Output;
