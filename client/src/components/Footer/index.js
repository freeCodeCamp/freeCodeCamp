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

  const trendingArticles = (() => {
    const numbers = Array(30)
      .fill(0)
      .map((_, i) => i);
    const list = numbers.map(number => (
      <Link
        external={false}
        key={number}
        to={t(`trending:articles.${number}.link`)}
      >
        {t(`trending:articles.${number}.title`)}
      </Link>
    ));
    return list;
  })();

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
                {trendingArticles.slice(0, 10)}
              </div>
              <div className='footer-col footer-col-2'>
                {trendingArticles.slice(10, 20)}
              </div>
              <div className='footer-col footer-col-3'>
                <div className='footer-left'>
                  {trendingArticles.slice(20, 25)}
                </div>

                <div className='footer-right'>{trendingArticles.slice(25)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='col-header'>{t('footer.our-nonprofit')}</div>
          <div className='footer-divder' />
          <div className='our-nonprofit'>
            <Link external={false} to={t('footer.links.about-url')}>
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
              to={t('footer.links.shop-url')}
            >
              {t('footer.links.shop')}
            </Link>
            <Link external={false} to={t('footer.links.support-url')}>
              {t('footer.links.support')}
            </Link>
            <Link external={false} to={t('footer.links.sponsors-url')}>
              {t('footer.links.sponsors')}
            </Link>
            <Link external={false} to={t('footer.links.honesty-url')}>
              {t('footer.links.honesty')}
            </Link>
            <Link external={false} to={t('footer.links.coc-url')}>
              {t('footer.links.coc')}
            </Link>
            <Link external={false} to={t('footer.links.privacy-url')}>
              {t('footer.links.privacy')}
            </Link>
            <Link external={false} to={t('footer.links.tos-url')}>
              {t('footer.links.tos')}
            </Link>
            <Link external={false} to={t('footer.links.copyright-url')}>
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
