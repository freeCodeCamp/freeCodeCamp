import React from 'react';
import PropTypes from 'prop-types';

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
              <Link
                className='inline'
                external={true}
                to='https://freecodecamp.org/donate'
              >
                make a tax-deductible donation here
              </Link>
              .
            </p>
          </div>
          <div className='footer-col-1'>
            <div className='col-header'>Our Nonprofit</div>
            <Link to='https://www.freecodecamp.org/news/about-freecodecamp/'>
              About
            </Link>
            <Link to='https://freecodecamp.org/donate'>Donate</Link>
            <Link external={true} to='https://www.freecodecamp.org/news/shop/'>
              Shop
            </Link>
            <Link
              external={true}
              to='https://www.linkedin.com/school/free-code-camp/people/'
            >
              Alumni Network
            </Link>
            <Link to='https://github.com/freeCodeCamp/'>Open Source</Link>
            <Link to='https://www.freecodecamp.org/news/support/'>Support</Link>
            <Link to='https://www.freecodecamp.org/news/our-sponsors/'>
              Sponsors
            </Link>
            <Link to='https://www.freecodecamp.org/news/academic-honesty-policy/'>
              Academic Honesty
            </Link>
            <Link to='https://www.freecodecamp.org/news/code-of-conduct/'>
              Code of Conduct
            </Link>
            <Link to='https://www.freecodecamp.org/news/privacy-policy/'>
              Privacy Policy
            </Link>
            <Link to='https://www.freecodecamp.org/news/freecodecamps-terms-of-service/'>
              Terms of Service
            </Link>
            <Link to='https://www.freecodecamp.org/news/copyright-policy/'>
              Copyright Policy
            </Link>
          </div>
          <div className='footer-col-2'>
            <div className='col-header'>Best Tutorials</div>
            <Link to='https://www.freecodecamp.org/news/best-python-tutorial/'>
              Python Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-git-tutorial/'>
              Git Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-best-linux-tutorials/'>
              Linux Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-javascript-tutorial/'>
              JavaScript Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-react-javascript-tutorial/'>
              React Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-html-html5-tutorial/'>
              HTML Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-css-and-css3-tutorial/'>
              CSS Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-sql-database-tutorial/'>
              SQL Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-java-8-tutorial/'>
              Java Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-angular-tutorial-angularjs/'>
              Angular Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-wordpress-tutorial/'>
              WordPress Tutorial
            </Link>
            <Link to='https://www.freecodecamp.org/news/best-bootstrap-tutorial-responsive-web-design/'>
              Bootstrap Tutorial
            </Link>
          </div>
          <div className='footer-col-3'>
            <div className='col-header'>Best Examples</div>
            <Link to='https://www.freecodecamp.org/news/python-example/'>
              Python Example{' '}
            </Link>
            <Link to='https://www.freecodecamp.org/news/javascript-example/'>
              JavaScript Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/react-examples-reactjs/'>
              React Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/linux-example-bash-command-line/'>
              Linux Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/html-and-html5-example/'>
              HTML Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/css-example-css3/'>
              CSS Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/sql-example/'>
              SQL Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/java-example/'>
              Java Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-best-angular-examples/'>
              Angular Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-best-jquery-examples/'>
              jQuery Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-best-bootstrap-examples/'>
              Bootstrap Example
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-best-php-examples/'>
              PHP Example
            </Link>
          </div>
          <div className='footer-col-4'>
            <div className='col-header'>Trending Reference</div>
            <Link to='https://www.freecodecamp.org/news/2019-web-developer-roadmap/'>
              2019 Web Developer Roadmap
            </Link>
            <Link to='https://www.freecodecamp.org/news/linux-command-line-bash-tutorial/'>
              Linux Command Line Guide
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/'>
              Git Reset and Git Revert
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-git-merge-and-git-rebase/'>
              Git Merge and Git Rebase
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-map/'>
              JavaScript Array Map
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-reduce/'>
              JavaScript Array Reduce
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-date-and-moment-js/'>
              JavaScript Date
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-string-methods-split/'>
              JavaScript String Split
            </Link>
            <Link to='https://www.freecodecamp.org/news/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af/'>
              CSS Flexbox Guide
            </Link>
            <Link to='https://www.freecodecamp.org/news/11-things-i-learned-reading-the-css-grid-specification-fb3983aa5e0/'>
              CSS Grid Guide
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-linux-creating-a-sudo-user/'>
              Create a Linux Sudo User
            </Link>
            <Link to='https://www.freecodecamp.org/news/the-ultimate-guide-to-ssh-setting-up-ssh-keys/'>
              How to Set Up SSH Keys
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
