import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, external, ...other }) => {
  if (!external && (/^\/(?!\/)/).test(to)) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...other} rel='noopener noreferrer' target='_blank'>
      {children}
    </a>
  );
};

export default Link;
