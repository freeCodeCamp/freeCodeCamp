import React from 'react';

import './preview.css';

const mainId = 'fcc-main-frame';

export function Preview() {
  return (
    <div className='challenge-preview'>
      <iframe className={'challenge-preview-frame'} id={mainId} />
    </div>
  );
}

Preview.displayName = 'Preview';

export default Preview;
