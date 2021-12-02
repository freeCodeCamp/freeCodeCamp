import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  sameTab?: boolean;
  state?: Record<string, unknown>;
  to: string;
  onClick?: () => void;
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
