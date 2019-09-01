import React from 'react';
import PropTypes from 'prop-types';

import Link from '../helpers/Link';
import FooterCol from './FooterCol';

import { footerLinks } from './footerLinks';
import './footer.css';

const propTypes = {
  children: PropTypes.any
};

const ColHeader = ({ children, ...other }) => (
  <div className='col-header' {...other}>
    {children}
  </div>
);
ColHeader.propTypes = propTypes;

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-desc-col'>
            <p>
              freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit
              organization (United States Federal Tax Identification Number:
              82-0779546)
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating thousands of videos, articles, and interactive
              coding lessons - all freely available to the public. We also have
              thousands of freeCodeCamp study groups around the world.
            </p>
            <p>
              Donations to freeCodeCamp go toward our education initiatives, and
              help pay for servers, services, and staff. You can&nbsp;
              <Link className='inline' to='/donate'>
                make a tax-deductible donation here
              </Link>
              .
            </p>
          </div>
          {footerLinks.map(({ title, links }, index) => (
            <FooterCol
              key={`footer-col-${index}`}
              links={links}
              title={title}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
