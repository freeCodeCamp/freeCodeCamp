import React from 'react';
import styleSheets from './styleSheets';

const preloads = styleSheets.map((styleSheet, i) => (
  <React.Fragment>
    <link
      as='style'
      href={styleSheet.props.href}
      key={`preload-${i}`}
      rel='preload'
    />
    {styleSheet}
  </React.Fragment>
));

export default preloads;
