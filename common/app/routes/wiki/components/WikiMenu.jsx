import React from 'react';

import WikiSuperBlock from
'../../challenges/components/map/wiki/WikiSuperBlock.jsx';

export default function WikiMenu() {
  return (
    <div
      className='map-accordion center-block'
      style={{ height: 'auto', marginTop: '0' }}
      >
      <WikiSuperBlock />
      <div className='spacer' />
    </div>
  );
}
