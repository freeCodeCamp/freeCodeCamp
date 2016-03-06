import React from 'react';
import PureComponent from 'react-pure-render/component';
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
  mode: 'text',
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
        <Codemirror
          options={ defaultOptions }
          value={ output } />
      </div>
    );
  }
}
