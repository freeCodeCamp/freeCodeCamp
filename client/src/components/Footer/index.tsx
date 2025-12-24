import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Col, Spacer } from '@freecodecamp/ui';

import appleStoreBadge from '../../assets/images/footer-ads/apple-store-badge.svg';
import googlePlayBadge from '../../assets/images/footer-ads/google-play-badge.svg';
import { Link } from '../helpers';
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
          <h2 id='trending-guides' className='col-header'>
            {t('footer.trending-guides')}
          </h2>
          <ul
            aria-labelledby='trending-guides'
            className='trending-guides-articles'
          >
            <li>
              <Link external={false} to={t('trending:article0link')}>
                {t('trending:article0title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article1link')}>
                {t('trending:article1title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article2link')}>
                {t('trending:article2title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article3link')}>
                {t('trending:article3title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article4link')}>
                {t('trending:article4title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article5link')}>
                {t('trending:article5title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article6link')}>
                {t('trending:article6title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article7link')}>
                {t('trending:article7title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article8link')}>
                {t('trending:article8title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article9link')}>
                {t('trending:article9title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article10link')}>
                {t('trending:article10title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article11link')}>
                {t('trending:article11title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article12link')}>
                {t('trending:article12title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article13link')}>
                {t('trending:article13title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article14link')}>
                {t('trending:article14title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article15link')}>
                {t('trending:article15title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article16link')}>
                {t('trending:article16title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article17link')}>
                {t('trending:article17title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article18link')}>
                {t('trending:article18title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article19link')}>
                {t('trending:article19title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article20link')}>
                {t('trending:article20title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article21link')}>
                {t('trending:article21title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article22link')}>
                {t('trending:article22title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article23link')}>
                {t('trending:article23title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article24link')}>
                {t('trending:article24title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article25link')}>
                {t('trending:article25title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article26link')}>
                {t('trending:article26title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article27link')}>
                {t('trending:article27title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article28link')}>
                {t('trending:article28title')}
              </Link>
            </li>
            <li>
              <Link external={false} to={t('trending:article29link')}>
                {t('trending:article29title')}
              </Link>
            </li>
          </ul>

          <Spacer size='m' />

          <div>
            <h2 id='mobile-app' className='col-header'>
              {t('footer.mobile-app')}
            </h2>
            <Col sm={8} smOffset={2}>
              <ul aria-labelledby='mobile-app' className='mobile-app-container'>
                <li>
                  <Link to='https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200'>
                    <img
                      src={appleStoreBadge}
                      lang='en'
                      alt='Download on the App Store'
                    />
                  </Link>
                </li>
                <li>
                  <Link to='https://play.google.com/store/apps/details?id=org.freecodecamp'>
                    <img
                      src={googlePlayBadge}
                      lang='en'
                      alt='Get it on Google Play'
                    />
                  </Link>
                </li>
              </ul>
            </Col>
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
