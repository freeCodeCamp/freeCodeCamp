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
        <div className='footer-top'>
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
              help pay for servers, services, and staff.
            </p>
            <p className='footer-donation'>
              You can&nbsp;
              <Link className='inline' to='/donate'>
                make a tax-deductible donation here
              </Link>
              .
            </p>
          </div>
          <div className='trending-guides'>
            <div className='col-header'>Trending Guides</div>
            <div className='trending-guides-row'>
              <div className='footer-col footer-col-1'>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-closure-tutorial-with-js-closure-example-code/'
                  }
                >
                  JavaScript Closure
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/css-tutorial-drop-shadow/'
                  }
                >
                  CSS Box Shadow
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/python-list-append-how-to-add-an-element-to-an-array-explained-with-examples/'
                  }
                >
                  Python List Append
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-array-sort-tutorial-how-to-use-js-sort-methods-with-code-examples/'
                  }
                >
                  JavaScript Array Sort
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/symlink-tutorial-in-linux-how-to-create-and-remove-a-symbolic-link/'
                  }
                >
                  Symlink in Linux
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
                  }
                >
                  Linux Grep Command
                </Link>
                <Link
                  external={false}
                  to={'https://www.freecodecamp.org/news/what-is-dns/'}
                >
                  What is DNS?
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/primary-key-sql-tutorial-how-to-define-a-primary-key-in-a-database/'
                  }
                >
                  Primary Key SQL
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/sql-update-statement-example-queries-for-updating-table-values/'
                  }
                >
                  SQL Update Statement
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/how-to-screenshot-on-windows/'
                  }
                >
                  Screenshot on PC
                </Link>
              </div>
              <div className='footer-col footer-col-2'>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/'
                  }
                >
                  JavaScript Promise
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/what-is-github-what-is-git-and-how-to-use-these-developer-tools/'
                  }
                >
                  What is GitHub?
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/the-python-sort-list-array-method-ascending-and-descending-explained-with-examples/'
                  }
                >
                  Python Sort List
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/json-comment-example-how-to-comment-in-json-files/'
                  }
                >
                  Comments in JSON
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/what-is-kanban-the-agile-methodology-defined-and-how-to-use-it-for-your-software-development-team-2/'
                  }
                >
                  What is Kanban?
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/python-write-to-file-open-read-append-and-other-file-handling-functions-explained/'
                  }
                >
                  Python Write to File
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/'
                  }
                >
                  CSS Media Queries
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/html-entities-symbols-special-character-codes-list/'
                  }
                >
                  HTML Entities
                </Link>
                <Link
                  external={false}
                  to={'https://www.freecodecamp.org/news/excel-vba-tutorial/'}
                >
                  Excel VBA
                </Link>
                <Link
                  external={false}
                  to={'https://www.freecodecamp.org/news/vlookup-in-excel/'}
                >
                  LOOKUP in Excel
                </Link>
              </div>
              <div className='footer-col footer-col-3'>
                <div className='footer-left'>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-a-proxy-server-in-english-please/'
                    }
                  >
                    What is a Proxy Server?
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/the-cat-command-in-linux-concatenation-explained-with-bash-examples/'
                    }
                  >
                    Cat Command in Linux
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/how-to-add-an-image-url-to-your-div/'
                    }
                  >
                    CSS Background Image
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/html-background-color-tutorial-how-to-change-a-div-background-color-explained-with-code-examples/'
                    }
                  >
                    HTML Background Color
                  </Link>
                  <Link
                    external={false}
                    to={'https://www.freecodecamp.org/news/comments-in-css/'}
                  >
                    CSS Comment Example
                  </Link>
                </div>

                <div className='footer-right'>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/arrow-function-javascript-tutorial-how-to-declare-a-js-function-with-the-new-es6-syntax/'
                    }
                  >
                    Arrow Function JavaScript
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/how-to-remove-duplicates-in-excel-delete-duplicate-rows-with-a-few-clicks/'
                    }
                  >
                    Remove Duplicates in Excel
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-dllhost-exe-and-com-surrogate-in-windows-task-manager-solved/'
                    }
                  >
                    dllhost.exe COM Surrogate
                  </Link>
                  <Link
                    external={false}
                    to={'https://www.freecodecamp.org/news/boolean-algebra/'}
                  >
                    Boolean Algebra Truth Table
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/can-you-facetime-on-android-no-but-here-are-some-alternative-video-conferencing-apps/'
                    }
                  >
                    Video Chat for Android
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-buttom'>
          <div className='col-header'>Our Nonprofit</div>
          <div className='footer-divder'></div>
          <div className='our-nonprofit'>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/about/'}
            >
              About
            </Link>
            <Link
              external={false}
              sameTab={false}
              to={'https://www.linkedin.com/school/free-code-camp/people/'}
            >
              Alumni Network
            </Link>
            <Link external={false} to={'https://github.com/freeCodeCamp/'}>
              Open Source
            </Link>
            <Link
              external={false}
              sameTab={false}
              to={'https://www.freecodecamp.org/shop/'}
            >
              Shop
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/support/'}
            >
              Support
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/sponsors/'}
            >
              Sponsors
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/academic-honesty-policy/'}
            >
              Academic Honesty
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/code-of-conduct/'}
            >
              Code of Conduct
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/privacy-policy/'}
            >
              Privacy Policy
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/terms-of-service/'}
            >
              Terms of Service
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/copyright-policy/'}
            >
              Copyright Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
