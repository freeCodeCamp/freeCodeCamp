import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';

import Link from '../helpers/Link';

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
    <footer className='footer'>
      <Grid>
        <Row>
          <Col lg={5} sm={6}>
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
              <Link className='inline' external={true} to='/donate'>
                make a tax-deductible donation here
              </Link>
              .
            </p>
          </Col>
          <Col sm={2} xs={6}>
            <ColHeader>Our Nonprofit</ColHeader>
            <Link to='/about'>About</Link>
            <Link to='/donate'>Donate</Link>
            <Link to='https://shop.freecodecamp.org'>Shop</Link>
            <Link to='/sponsors'>Sponsors</Link>
            <a href='mailto:team@freecodecamp.org'>Email Us</a>
          </Col>
          <Col sm={2} xs={6}>
            <ColHeader>Our Community</ColHeader>
            <Link external={true} to='/news'>
              News
            </Link>
            <Link to='https://www.linkedin.com/school/free-code-camp/people/'>
              Alumni Network
            </Link>
            <Link to='https://study-group-directory.freecodecamp.org'>
              Study Groups
            </Link>
            <Link external={true} to='/forum'>
              Forum
            </Link>
            <Link to='https://gitter.im/FreeCodeCamp/home'>Gitter</Link>
            <Link to='https://github.com/freeCodeCamp/'>GitHub</Link>
            <Link to='/support'>Support</Link>
            <Link to='/academic-honesty'>Academic Honesty</Link>
            <Link to='/code-of-conduct'>Code of Conduct</Link>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
          </Col>
          <Col lg={3} sm={2} xs={12}>
            <ColHeader>Our Learning Resources</ColHeader>
            <Link to='/learn'>Learn</Link>
            <Link to='/guide'>Guide</Link>
            <Link to='https://www.youtube.com/freecodecamp'>Youtube</Link>
            <Link to='https://podcast.freecodecamp.org'>Podcast</Link>
            <Link to='https://twitter.com/freecodecamp'>Twitter</Link>
            <Link to='https://instagram.com/freecodecamp'>Instagram</Link>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
