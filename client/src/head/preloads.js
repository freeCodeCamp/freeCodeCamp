import React, { Fragment } from 'react';
import styleSheets from './styleSheets';

const preloads = styleSheets.map(styleSheet => (
  <Fragment key={`preload-${styleSheet.props.href}`}>
    <link as='style' href={styleSheet.props.href} rel='preload' />
    {styleSheet}
  </Fragment>
));

export default preloads;
