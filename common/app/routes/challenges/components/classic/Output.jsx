import React from 'react';
import PureComponent from 'react-pure-render/component';
import NoSSR from 'react-no-ssr';
import Codemirror from 'react-codemirror';

const defaultOutput = `/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser\'s DevTools
  * JavaScript console.
  */`;

const defaultOptions = {
  lineNumbers: false,
  mode: 'javascript',
  theme: 'monokai',
  readOnly: 'nocursor',
  lineWrapping: true
};

export default class extends PureComponent {
  static displayName = 'Output';

  static defaultProps = {
    output: defaultOutput
  };

  render() {
    const { output } = this.props;
    return (
      <div className='challenge-log'>
        <NoSSR>
          <Codemirror
            options={ defaultOptions }
            value={ output } />
        </NoSSR>
      </div>
    );
  }
}
