import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const propTypes = {
  children: PropTypes.any,
  external: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const Link = ({ children, to, external, ...other }) => {
  if (!external && /^\/(?!\/)/.test(to)) {
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
Link.propTypes = propTypes;

export default Link;
