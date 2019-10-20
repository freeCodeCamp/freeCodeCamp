import React from 'react';
import PropTypes from 'prop-types';

import Link from '../helpers/Link';

function FooterCol({ title, links }) {
  return (
    <div className='footer-col'>
      <div className='col-header'>{title}</div>
      {links.map(({ to, text, internal }, i) => (
        <Link external={!internal} key={`link-${i}`} to={to}>
          {text}
        </Link>
      ))}
    </div>
  );
}

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string,
      internal: PropTypes.bool
    })
  ).isRequired,
  title: PropTypes.string
};

FooterCol.propTypes = propTypes;
FooterCol.displayName = 'FooterCol';
export default FooterCol;
