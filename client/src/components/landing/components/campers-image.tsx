import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import wideImg from '../../../assets/images/landing/wide-image.png';
import { LazyImage } from '../../helpers';

const LARGE_SCREEN_SIZE = 1200;

function CampersImage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <figure
        data-test-label='landing-page-figure'
        data-playwright-test-label='landing-page-figure'
      >
        <LazyImage alt={t('landing.hero-img-alt')} src={wideImg} />
        <figcaption className='caption'>
          {t('landing.hero-img-description')}
        </figcaption>
      </figure>
    </Media>
  );
}

CampersImage.displayName = 'CampersImage';
export default CampersImage;
