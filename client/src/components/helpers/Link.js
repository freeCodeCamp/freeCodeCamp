import React from 'react';
import PropTypes from 'prop-types';
// import { Link as GatsbyLink} from 'gatsby';
import { Link as GatsbyLink, useI18next } from 'gatsby-plugin-react-i18next';

const propTypes = {
  children: PropTypes.any,
  external: PropTypes.bool,
  sameTab: PropTypes.bool,
  to: PropTypes.string.isRequired
};

// const Link = ({ children, to, external, sameTab, ...other }) => {
const Link = props => {
  const { children, to, external, sameTab, ...other } = props;
  const { language } = useI18next();
  console.log('to = ' + to);
  console.log(language);

  if (!external && /^\/(?!\/)/.test(to)) {
    return (
      <GatsbyLink language={language} to={to} {...other}>
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
Link.propTypes = propTypes;

export default Link;
