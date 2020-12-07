import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Link from '../helpers/Link';
import LanguageMenu from './LanguageMenu';
import './footer.css';

const { showLocaleDropdownMenu = false } = require('../../../config/env');

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
  const { t } = useTranslation();

  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-desc-col'>
            {showLocaleDropdownMenu ? <LanguageMenu /> : null}
            <p>{t('footer.tax-exempt-status')}</p>
            <p>{t('footer.mission-statement')}</p>
            <p>{t('footer.donation-initiatives')}</p>
            <p className='footer-donation'>
              {t('footer.donate-text')}{' '}
              <Link className='inline' to='/donate'>
                {t('footer.donate-link')}
              </Link>
              .
            </p>
          </div>
          <div className='trending-guides'>
            <div className='col-header'>{t('footer.trending-guides')}</div>
            <div className='trending-guides-row'>
              <div className='footer-col footer-col-1'>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/'
                  }
                >
                  Git Clone
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/'
                  }
                >
                  Agile Methods
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/if-name-main-python-example/'
                  }
                >
                  Python Main
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/'
                  }
                >
                  Callback
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/debounce-javascript-tutorial-how-to-make-your-js-wait-up/'
                  }
                >
                  Debounce
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-url-encode-example-how-to-use-encodeuricomponent-and-encodeuri/'
                  }
                >
                  URL Encode
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/make-it-blink-html-tutorial-how-to-use-the-blink-tag-with-code-examples/'
                  }
                >
                  Blink HTML
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/python-returns-multiple-values-how-to-return-a-tuple-list-dictionary/'
                  }
                >
                  Python Tuple
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/'
                  }
                >
                  JavaScript Push
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/java-list-tutorial-util-list-api-example/'
                  }
                >
                  Java List
                </Link>
              </div>
              <div className='footer-col footer-col-2'>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/learn-ux-design-self-taught-user-experience-designer/'
                  }
                >
                  UX
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/what-is-design-thinking-an-introduction-to-the-design-process-for-entrepreneurs-and-developers/'
                  }
                >
                  Design Thinking
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/prime-numbers-list-chart-of-primes/'
                  }
                >
                  Prime Number List
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/product-design-explained-in-plain-english/'
                  }
                >
                  Product Design
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/what-is-digital-design-and-why-does-it-matter/'
                  }
                >
                  Digital Design
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/best-coding-games-online-adults-learn-to-code/'
                  }
                >
                  Coding Games
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/svm-machine-learning-tutorial-what-is-the-support-vector-machine-algorithm-explained-with-code-examples/'
                  }
                >
                  SVM
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/'
                  }
                >
                  JavaScript forEach
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/google-bert-nlp-machine-learning-tutorial/'
                  }
                >
                  Google BERT
                </Link>
                <Link
                  external={false}
                  to={
                    'https://www.freecodecamp.org/news/sql-create-table-statement-with-example-syntax/'
                  }
                >
                  Create Table SQL
                </Link>
              </div>
              <div className='footer-col footer-col-3'>
                <div className='footer-left'>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/responsive-web-design-how-to-make-a-website-look-good-on-phones-and-tablets/'
                    }
                  >
                    Responsive Web Design
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/svg-basics-what-are-scalable-vector-graphics-and-how-do-you-use-them/'
                    }
                  >
                    What Is an SVG File?
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/pdf-password-remover-guide-how-to-remove-password-protection-from-a-pdf/'
                    }
                  >
                    PDF Password Remover
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-a-pdf-file-and-how-do-you-open-it-solved/'
                    }
                  >
                    What Is a PDF?
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-python-used-for-10-coding-uses-for-the-python-programming-language/'
                    }
                  >
                    What Is Python?
                  </Link>
                </div>

                <div className='footer-right'>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-tls-transport-layer-security-encryption-explained-in-plain-english/'
                    }
                  >
                    What Is TLS?
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-a-lan-local-area-network-explained-in-plain-english/'
                    }
                  >
                    What Is a LAN?
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/'
                    }
                  >
                    What Is npm?
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/rsync-examples-rsync-options-and-how-to-copy-files-over-ssh/'
                    }
                  >
                    RSync Examples
                  </Link>
                  <Link
                    external={false}
                    to={
                      'https://www.freecodecamp.org/news/how-to-use-the-tree-based-algorithm-for-machine-learning/'
                    }
                  >
                    Random Forest
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-buttom'>
          <div className='col-header'>{t('footer.our-nonprofit')}</div>
          <div className='footer-divder' />
          <div className='our-nonprofit'>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/about/'}
            >
              {t('footer.links.about')}
            </Link>
            <Link
              external={false}
              sameTab={false}
              to={'https://www.linkedin.com/school/free-code-camp/people/'}
            >
              {t('footer.links.alumni')}
            </Link>
            <Link external={false} to={'https://github.com/freeCodeCamp/'}>
              {t('footer.links.open-source')}
            </Link>
            <Link
              external={false}
              sameTab={false}
              to={'https://www.freecodecamp.org/shop/'}
            >
              {t('footer.links.shop')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/support/'}
            >
              {t('footer.links.support')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/sponsors/'}
            >
              {t('footer.links.sponsors')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/academic-honesty-policy/'}
            >
              {t('footer.links.honesty')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/code-of-conduct/'}
            >
              {t('footer.links.coc')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/privacy-policy/'}
            >
              {t('footer.links.privacy')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/terms-of-service/'}
            >
              {t('footer.links.tos')}
            </Link>
            <Link
              external={false}
              to={'https://www.freecodecamp.org/news/copyright-policy/'}
            >
              {t('footer.links.copyright')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
