import React, { PropTypes } from 'react';
import Codemirror from 'react-codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

const options = {
  lint: true,
  lineNumbers: true,
  mode: 'javascript',
  theme: 'monokai',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ['CodeMirror-lint-markers']
};

export default React.createClass({
  displayName: 'Challenge-Editor',

  propTypes: {
    value: PropTypes.string
  },

  render() {
    const {
      value = ''
    } = this.props;

    return (
      <Codemirror
        options={ options }
        value={ value } />
    );
  }
});
