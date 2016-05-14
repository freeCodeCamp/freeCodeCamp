import React from 'react';
import PureComponent from 'react-pure-render/component';

export default class extends PureComponent {
  static displayName = 'Preview';

  render() {
    return (
      <div>
        <div className='hidden-xs hidden-md'>
          <img
            className='iphone-position iframe-scroll'
            src='https://s3.amazonaws.com/freecodecamp/iphone6-frame.png' />
        </div>
        <iframe
          className='iphone iframe-scroll'
          id='preview' />
        <div className='spacer' />
      </div>
    );
  }
}
