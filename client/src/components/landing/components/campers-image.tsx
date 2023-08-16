import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import wideImg from '../../../assets/images/landing/wide-image.png';
import { LazyImage } from '../../helpers';

const LARGE_SCREEN_SIZE = 1200;

interface CampersImageProps {
  pageName: string;
}

const donateImageSize = {
  height: 345,
  width: 585
};

const landingImageSize = {
  marginTop: '30px',
  height: 442,
  width: 750
};
function CampersImage({ pageName }: CampersImageProps): JSX.Element {
  const { t } = useTranslation();

  const figureSize = pageName === 'donate' ? donateImageSize : landingImageSize;

  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <figure style={figureSize} data-test-label='landing-page-figure'>
        <LazyImage
          alt={t('landing.hero-img-alt')}
          src={wideImg}
          style={figureSize}
        />
        <figcaption className='caption'>
          {t('landing.hero-img-description')}
        </figcaption>
      </figure>
    </Media>
  );
}

CampersImage.displayName = 'CampersImage';
export default CampersImage;
