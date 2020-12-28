import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Link from '../helpers/Link';
import LanguageMenu from './LanguageMenu';
import './footer.css';

const {
  showLocaleDropdownMenu = false,
  clientLocale
} = require('../../../config/env');

const trendingLinks = require(`../../../i18n/locales/${clientLocale}/trending.json`);

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
                <Link external={false} to={trendingLinks.article1link}>
                  {trendingLinks.article1title}
                </Link>
                <Link external={false} to={trendingLinks.article2link}>
                  {trendingLinks.article2title}
                </Link>
                <Link external={false} to={trendingLinks.article3link}>
                  {trendingLinks.article3title}
                </Link>
                <Link external={false} to={trendingLinks.article4link}>
                  {trendingLinks.article4title}
                </Link>
                <Link external={false} to={trendingLinks.article5link}>
                  {trendingLinks.article5title}
                </Link>
                <Link external={false} to={trendingLinks.article6link}>
                  {trendingLinks.article6title}
                </Link>
                <Link external={false} to={trendingLinks.article7link}>
                  {trendingLinks.article7title}
                </Link>
                <Link external={false} to={trendingLinks.article8link}>
                  {trendingLinks.article8title}
                </Link>
                <Link external={false} to={trendingLinks.article9link}>
                  {trendingLinks.article9title}
                </Link>
                <Link external={false} to={trendingLinks.article10link}>
                  {trendingLinks.article10title}
                </Link>
              </div>
              <div className='footer-col footer-col-2'>
                <Link external={false} to={trendingLinks.article11link}>
                  {trendingLinks.article11title}
                </Link>
                <Link external={false} to={trendingLinks.article12link}>
                  {trendingLinks.article12title}
                </Link>
                <Link external={false} to={trendingLinks.article13link}>
                  {trendingLinks.article13title}
                </Link>
                <Link external={false} to={trendingLinks.article14link}>
                  {trendingLinks.article14title}
                </Link>
                <Link external={false} to={trendingLinks.article15link}>
                  {trendingLinks.article15title}
                </Link>
                <Link external={false} to={trendingLinks.article16link}>
                  {trendingLinks.article16title}
                </Link>
                <Link external={false} to={trendingLinks.article17link}>
                  {trendingLinks.article17title}
                </Link>
                <Link external={false} to={trendingLinks.article18link}>
                  {trendingLinks.article18title}
                </Link>
                <Link external={false} to={trendingLinks.article19link}>
                  {trendingLinks.article19title}
                </Link>
                <Link external={false} to={trendingLinks.article20link}>
                  {trendingLinks.article20title}
                </Link>
              </div>
              <div className='footer-col footer-col-3'>
                <div className='footer-left'>
                  <Link external={false} to={trendingLinks.article21link}>
                    {trendingLinks.article21title}
                  </Link>
                  <Link external={false} to={trendingLinks.article22link}>
                    {trendingLinks.article22title}
                  </Link>
                  <Link external={false} to={trendingLinks.article23link}>
                    {trendingLinks.article23title}
                  </Link>
                  <Link external={false} to={trendingLinks.article24link}>
                    {trendingLinks.article24title}
                  </Link>
                  <Link external={false} to={trendingLinks.article25link}>
                    {trendingLinks.article25title}
                  </Link>
                </div>

                <div className='footer-right'>
                  <Link external={false} to={trendingLinks.article26link}>
                    {trendingLinks.article26title}
                  </Link>
                  <Link external={false} to={trendingLinks.article27link}>
                    {trendingLinks.article27title}
                  </Link>
                  <Link external={false} to={trendingLinks.article28link}>
                    {trendingLinks.article28title}
                  </Link>
                  <Link external={false} to={trendingLinks.article29link}>
                    {trendingLinks.article29title}
                  </Link>
                  <Link external={false} to={trendingLinks.article30link}>
                    {trendingLinks.article30title}
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
