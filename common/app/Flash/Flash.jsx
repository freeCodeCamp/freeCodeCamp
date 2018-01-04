import React from 'react';
import { CloseButton } from 'react-bootstrap';

import ns from './ns.json';

const propTypes = {};
export default function Flash() {
  return (
    <div className={`${ns}-container bg-info`}>
      <div className={`${ns}-content`}>
        <div>
          Content
        </div>
        <CloseButton />
      </div>
    </div>
  );
}

Flash.displayName = 'Flash';
Flash.propTypes = propTypes;
