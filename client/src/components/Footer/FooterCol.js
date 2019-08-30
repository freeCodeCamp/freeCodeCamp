import React from 'react';
import PropTypes from 'prop-types';

import Link from '../helpers/Link';
import { footerLinks } from './footerLinks';

import './footer.css';

function FooterCol({ colNum, title }) {
  // if the column number is not applicable return an empty div
  if (colNum < 1 || colNum > footerLinks + 1) return <div></div>;

  let linksRow = footerLinks[colNum - 1].map(function(item, i) {
    if (item.interal)
      return (
        <Link key={i} to={item.to}>
          {item.text}
        </Link>
      );
    return (
      <Link external={true} key={i} to={item.to}>
        {item.text}
      </Link>
    );
  });
  return (
    <div className={`footer-col-${colNum}`}>
      <div className='col-header'>{title}</div>
      {linksRow}
    </div>
  );
}

const propTypes = {
  colNum: PropTypes.number,
  title: PropTypes.string
};

FooterCol.propTypes = propTypes;
FooterCol.displayName = 'FooterCol';
export default FooterCol;
