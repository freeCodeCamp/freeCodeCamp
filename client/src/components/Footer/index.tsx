import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Link from '../helpers/link';
import './footer.css';

function Footer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className='site-footer'>
      <div className='footer-top'>
        <div className='footer-desc-col'>
          <p>{t('footer.tax-exempt-status')}</p>
          <p>{t('footer.mission-statement')}</p>
          <p>{t('footer.donation-initiatives')}</p>
          <p className='footer-donation'>
            <Trans i18nKey='footer.donate-text'>
              You can
              <Link className='inline' to='/donate'>
                make a tax-deductible donation here
              </Link>
              .
            </Trans>
          </p>
        </div>
        <div className='trending-guides'>
          <h2 className='col-header'>{t('footer.trending-guides')}</h2>
          <div className='trending-guides-articles'>
            {/* the span elements were add so the link can be inline and its text would be the only active target */}
            <span>
              <Link external={false} to={t('trending:article0link')}>
                {t('trending:article0title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article1link')}>
                {t('trending:article1title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article2link')}>
                {t('trending:article2title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article3link')}>
                {t('trending:article3title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article4link')}>
                {t('trending:article4title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article5link')}>
                {t('trending:article5title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article6link')}>
                {t('trending:article6title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article7link')}>
                {t('trending:article7title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article8link')}>
                {t('trending:article8title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article9link')}>
                {t('trending:article9title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article10link')}>
                {t('trending:article10title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article11link')}>
                {t('trending:article11title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article12link')}>
                {t('trending:article12title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article13link')}>
                {t('trending:article13title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article14link')}>
                {t('trending:article14title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article15link')}>
                {t('trending:article15title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article16link')}>
                {t('trending:article16title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article17link')}>
                {t('trending:article17title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article18link')}>
                {t('trending:article18title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article19link')}>
                {t('trending:article19title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article20link')}>
                {t('trending:article20title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article21link')}>
                {t('trending:article21title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article22link')}>
                {t('trending:article22title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article23link')}>
                {t('trending:article23title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article24link')}>
                {t('trending:article24title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article25link')}>
                {t('trending:article25title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article26link')}>
                {t('trending:article26title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article27link')}>
                {t('trending:article27title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article28link')}>
                {t('trending:article28title')}
              </Link>
            </span>
            <span>
              <Link external={false} to={t('trending:article29link')}>
                {t('trending:article29title')}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <h2 className='col-header'>{t('footer.our-nonprofit')}</h2>
        <div className='our-nonprofit'>
          <Link external={false} to={t('links:footer.about-url')}>
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
            to={t('links:footer.shop-url')}
          >
            {t('footer.links.shop')}
          </Link>
          <Link external={false} to={t('links:footer.support-url')}>
            {t('footer.links.support')}
          </Link>
          <Link external={false} to={t('links:footer.sponsors-url')}>
            {t('footer.links.sponsors')}
          </Link>
          <Link external={false} to={t('links:footer.honesty-url')}>
            {t('footer.links.honesty')}
          </Link>
          <Link external={false} to={t('links:footer.coc-url')}>
            {t('footer.links.coc')}
          </Link>
          <Link external={false} to={t('links:footer.privacy-url')}>
            {t('footer.links.privacy')}
          </Link>
          <Link external={false} to={t('links:footer.tos-url')}>
            {t('footer.links.tos')}
          </Link>
          <Link external={false} to={t('links:footer.copyright-url')}>
            {t('footer.links.copyright')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
