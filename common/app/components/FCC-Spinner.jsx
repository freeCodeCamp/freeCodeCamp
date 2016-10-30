import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
};

export default class FCCSpinner extends PureComponent {
  render() {
    return (
      <div className='fcc-spinner'>
        <FontAwesome name='free-code-camp' />
      </div>
    );
  }
}

FCCSpinner.displayName = 'FCCSpinner';
FCCSpinner.propTypes = propTypes;
