import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ns from './ns.json';

const propTypes = {
  children: PropTypes.node,
  isFullWidth: PropTypes.bool
};

export default function ChildContainer({ children, isFullWidth }) {
  const contentClassname = classnames({
    [`${ns}-content`]: true,
    [`${ns}-centered`]: !isFullWidth
  });
  return (
    <div className={ contentClassname }>
      { children }
    </div>
  );
}

ChildContainer.displayName = 'ChildContainer';
ChildContainer.propTypes = propTypes;
