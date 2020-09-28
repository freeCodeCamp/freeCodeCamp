import React from 'react';
import styleSheets from './styleSheets';

const preloads = styleSheets.map(styleSheet => (
  <React.Fragment key={`preload-${styleSheet.props.href}`}>
    <link as='style' href={styleSheet.props.href} rel='preload' />
    {styleSheet}
  </React.Fragment>
));

export default preloads;
