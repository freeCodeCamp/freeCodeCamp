import React from 'react';

import PureComponent from 'react-pure-render/component';

// import Challenge from './Challenge.jsx';
import Step from './step/Step.jsx';


// <Challenge showPreview={ false } />
export default class extends PureComponent {
  static displayName = 'Challenges';
  static propTypes = {};

  render() {
    return (
      <Step />
    );
  }
}
