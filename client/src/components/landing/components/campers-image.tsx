import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import wideImg from '../../../assets/images/landing/wide-image.png';
import { Spacer, ImageLoader } from '../../helpers';

const LARGE_SCREEN_SIZE = 1200;

interface imageSize {
  spacerSize: number;
  height: number;
  width: number;
}

interface pageNumber {
  page: string;
}

const donateImageSize: imageSize = {
  spacerSize: 0,
  height: 345,
  width: 585
};

const landingImageSize: imageSize = {
  spacerSize: 2,
  height: 442,
  width: 750
};
function CampersImage({ page }: pageNumber): JSX.Element {
  const { t } = useTranslation();

  const { spacerSize, height, width } =
    page === 'donate' ? donateImageSize : landingImageSize;

  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <Spacer size={spacerSize} />
      <ImageLoader
        alt={t('landing.hero-img-description')}
        className='landing-page-image'
        height={height}
        src={wideImg as string}
        width={width}
      />
      <p className='text-center caption'>{t('landing.hero-img-description')}</p>
    </Media>
  );
}

CampersImage.displayName = 'CampersImage';
export default CampersImage;
