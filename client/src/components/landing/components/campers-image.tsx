import React from 'react';
import { useTranslation } from 'react-i18next';
import wideImg from '../../../assets/images/landing/wide-image.png';
import { LazyImage } from '../../helpers';

function CampersImage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <figure
      className='landing-page-figure'
      data-test-label='landing-page-figure'
      data-testid='landing-page-figure'
    >
      <LazyImage alt={t('landing.hero-img-alt')} src={wideImg} />
      <figcaption className='caption'>
        {t('landing.hero-img-description')}
      </figcaption>
    </figure>
  );
}

CampersImage.displayName = 'CampersImage';
export default CampersImage;
