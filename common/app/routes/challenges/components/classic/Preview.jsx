import React from 'react';
import PureComponent from 'react-pure-render/component';

const mainId = 'fcc-main-frame';

export default class Preview extends PureComponent {
  render() {
    return (
      <div
       className='challenges-preview'
       >
        <div className='hidden-xs hidden-md'>
          <img
            className='iphone-position iframe-scroll'
            src='https://s3.amazonaws.com/freecodecamp/iphone6-frame.png'
          />
        </div>
        <iframe
          className='iphone iframe-scroll'
          id={ mainId }
        />
        <div className='spacer' />
      </div>
    );
  }
}

Preview.displayName = 'Preview';
