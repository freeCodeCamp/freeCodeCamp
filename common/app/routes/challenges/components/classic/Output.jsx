import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import NoSSR from 'react-no-ssr';
import Codemirror from 'react-codemirror';

import CodeMirrorSkeleton from '../skeleton/CodeMirrorSkeleton.jsx';

const defaultOptions = {
  lineNumbers: false,
  mode: 'javascript',
  theme: 'monokai',
  readOnly: 'nocursor',
  lineWrapping: true
};

export default class extends PureComponent {
  static displayName = 'Output';
  static propTypes = {
    output: PropTypes.string
  };
  render() {
    const { output } = this.props;
    return (
      <div className='challenge-log'>
        <NoSSR onSSR={ <CodeMirrorSkeleton content={ output } /> }>
          <Codemirror
            options={ defaultOptions }
            value={ output }
          />
        </NoSSR>
      </div>
    );
  }
}
