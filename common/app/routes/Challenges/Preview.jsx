import React from 'react';

import ns from './ns.json';

const mainId = 'fcc-main-frame';

const Preview = () => {
  return (
    <div className={ `${ns}-preview` }>
      <iframe
        className={ `${ns}-preview-frame` }
        id={ mainId }
      />
    </div>
  );
};

Preview.displayName = 'Preview';

export default Preview;
