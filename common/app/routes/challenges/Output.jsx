import React, { PureComponent, PropTypes } from 'react';
import NoSSR from 'react-no-ssr';
import Codemirror from 'react-codemirror';

import ns from './ns.json';
import CodeMirrorSkeleton from './Code-Mirror-Skeleton.jsx';

const defaultOptions = {
  lineNumbers: false,
  lineWrapping: true,
  mode: 'javascript',
  readOnly: 'nocursor',
  theme: 'monokai'
};

const propTypes = {
  defaultOutput: PropTypes.string,
  output: PropTypes.string
};

export default class Output extends PureComponent {
  render() {
    const { output, defaultOutput } = this.props;
    return (
      <div className={ `${ns}-log` }>
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
