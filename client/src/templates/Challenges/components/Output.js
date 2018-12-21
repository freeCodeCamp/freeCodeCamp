import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
  defaultOutput: PropTypes.string,
  dimensions: PropTypes.object,
  height: PropTypes.number,
  output: PropTypes.string
};

const options = {
  lineNumbers: false,
  minimap: {
    enabled: false
  },
  readOnly: true,
  wordWrap: 'on',
  scrollBeyondLastLine: false,
  scrollbar: {
    horizontal: 'hidden',
    vertical: 'visible',
    verticalHasArrows: true
  }
};

class Output extends Component {
  constructor() {
    super();

    this._editor = null;
  }

  editorDidMount(editor) {
    this._editor = editor;
  }

  componentDidUpdate(prevProps) {
    if (this.props.dimensions !== prevProps.dimensions && this._editor) {
      this._editor.layout();
    }
  }

  render() {
    const { output, defaultOutput, height } = this.props;
    return (
      <Fragment>
        <base href='/' />
        <MonacoEditor
          className='challenge-output'
          editorDidMount={::this.editorDidMount}
          height={height}
          options={options}
          value={output ? output : defaultOutput}
        />
      </Fragment>
    );
  }
}

Output.displayName = 'Output';
Output.propTypes = propTypes;

export default Output;
