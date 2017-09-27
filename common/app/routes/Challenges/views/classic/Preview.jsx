import React, { PureComponent } from 'react';

import ns from './ns.json';

const mainId = 'fcc-main-frame';

export default class Preview extends PureComponent {
  render() {
    return (
      <div className={ `${ns}-preview` }>
        <iframe
          className={ `${ns}-preview-frame` }
          id={ mainId }
        />
      </div>
    );
  }
}

Preview.displayName = 'Preview';
