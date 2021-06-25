import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  sameTab?: boolean;
  state?: Record<string, unknown>;
  to: string;
  // TODO: figure out what these actually should be
  other?: unknown[];
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
