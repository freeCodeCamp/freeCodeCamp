import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface ILinkProps {
  children?: React.ReactNode;
  external?: boolean;
  sameTab?: boolean;
  to: string;
  className?: string;
}

const Link = ({
  children,
  to,
  external,
  sameTab,
  ...other
}: ILinkProps): JSX.Element => {
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
