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
          <p>{t($ => $.footer['tax-exempt-status'])}</p>
          <p>{t($ => $.footer['mission-statement'])}</p>
          <p>{t($ => $.footer['donation-initiatives'])}</p>
          <p className='footer-donation'>
            <Trans i18nKey={$ => $.footer['donate-text']}>
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
            {t($ => $.footer['trending-guides'])}
          </h2>
          <ul
            aria-labelledby='trending-guides'
            className='trending-guides-articles'
          >
            <li>
              <Link
                external={false}
                to={t($ => $.article0link, { ns: 'trending' })}
              >
                {t($ => $.article0title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article1link, { ns: 'trending' })}
              >
                {t($ => $.article1title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article2link, { ns: 'trending' })}
              >
                {t($ => $.article2title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article3link, { ns: 'trending' })}
              >
                {t($ => $.article3title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article4link, { ns: 'trending' })}
              >
                {t($ => $.article4title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article5link, { ns: 'trending' })}
              >
                {t($ => $.article5title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article6link, { ns: 'trending' })}
              >
                {t($ => $.article6title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article7link, { ns: 'trending' })}
              >
                {t($ => $.article7title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article8link, { ns: 'trending' })}
              >
                {t($ => $.article8title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article9link, { ns: 'trending' })}
              >
                {t($ => $.article9title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article10link, { ns: 'trending' })}
              >
                {t($ => $.article10title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article11link, { ns: 'trending' })}
              >
                {t($ => $.article11title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article12link, { ns: 'trending' })}
              >
                {t($ => $.article12title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article13link, { ns: 'trending' })}
              >
                {t($ => $.article13title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article14link, { ns: 'trending' })}
              >
                {t($ => $.article14title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article15link, { ns: 'trending' })}
              >
                {t($ => $.article15title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article16link, { ns: 'trending' })}
              >
                {t($ => $.article16title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article17link, { ns: 'trending' })}
              >
                {t($ => $.article17title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article18link, { ns: 'trending' })}
              >
                {t($ => $.article18title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article19link, { ns: 'trending' })}
              >
                {t($ => $.article19title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article20link, { ns: 'trending' })}
              >
                {t($ => $.article20title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article21link, { ns: 'trending' })}
              >
                {t($ => $.article21title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article22link, { ns: 'trending' })}
              >
                {t($ => $.article22title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article23link, { ns: 'trending' })}
              >
                {t($ => $.article23title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article24link, { ns: 'trending' })}
              >
                {t($ => $.article24title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article25link, { ns: 'trending' })}
              >
                {t($ => $.article25title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article26link, { ns: 'trending' })}
              >
                {t($ => $.article26title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article27link, { ns: 'trending' })}
              >
                {t($ => $.article27title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article28link, { ns: 'trending' })}
              >
                {t($ => $.article28title, { ns: 'trending' })}
              </Link>
            </li>
            <li>
              <Link
                external={false}
                to={t($ => $.article29link, { ns: 'trending' })}
              >
                {t($ => $.article29title, { ns: 'trending' })}
              </Link>
            </li>
          </ul>

          <Spacer size='m' />

          <div>
            <h2 id='mobile-app' className='col-header'>
              {t($ => $.footer['mobile-app'])}
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
        <h2 className='col-header'>{t($ => $.footer['our-nonprofit'])}</h2>
        <div className='our-nonprofit'>
          <Link
            external={false}
            to={t($ => $.footer['about-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.about)}
          </Link>
          <Link
            external={false}
            sameTab={false}
            to={'https://www.linkedin.com/school/free-code-camp/people/'}
          >
            {t($ => $.footer.links.alumni)}
          </Link>
          <Link external={false} to={'https://github.com/freeCodeCamp/'}>
            {t($ => $.footer.links['open-source'])}
          </Link>
          <Link
            external={false}
            sameTab={false}
            to={t($ => $.footer['shop-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.shop)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['support-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.support)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['sponsors-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.sponsors)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['honesty-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.honesty)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['coc-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.coc)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['privacy-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.privacy)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['tos-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.tos)}
          </Link>
          <Link
            external={false}
            to={t($ => $.footer['copyright-url'], { ns: 'links' })}
          >
            {t($ => $.footer.links.copyright)}
          </Link>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
