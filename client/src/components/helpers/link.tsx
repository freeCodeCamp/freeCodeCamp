import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

// const propTypes = {
//   children: PropTypes.any,
//   external: PropTypes.bool,
//   sameTab: PropTypes.bool,
//   to: PropTypes.string.isRequired
// };

interface LinkProps {
  children?: ReactNode;
  external?: boolean;
  sameTab?: boolean;
  to: string;
}

const Link = ({
  children,
  to,
  external,
  sameTab,
  ...other
}: LinkProps): JSX.Element => {
  if (!external && /^\/(?!\/)/.test(to)) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  } else if (sameTab && external) {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    );
  }

  return (
    <a href={to} {...other} rel='noopener noreferrer' target='_blank'>
      {children}
    </a>
  );
};

export default Link;
