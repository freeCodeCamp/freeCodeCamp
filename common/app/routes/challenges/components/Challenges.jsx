import React from 'react';

import PureComponent from 'react-pure-render/component';

import Challenge from './Challenge.jsx';

export default class extends PureComponent {
  static displayName = 'Challenges';
  static propTypes = {};

  render() {
    return (
      <Challenge showPreview={ false } />
    );
  }
}
