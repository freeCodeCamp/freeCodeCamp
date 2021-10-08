import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import wideImg from '../../../assets/images/landing/wide-image.png';
import { Spacer, ImageLoader } from '../../helpers';

interface propTypes {
  page: string;
}

const LARGE_SCREEN_SIZE = 1200;

interface imageConfig {
  donate: {
    readonly spacerSize: 0;
    readonly height: 345;
    readonly width: 585;
  };
  landing: {
    readonly spacerSize: 2;
    readonly height: 442;
    readonly width: 750;
  };
}

function CampersImage({ page }: propTypes): JSX.Element {
  const { t } = useTranslation();
  const { spacerSize, height, width } = imageConfig[page];

  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <Spacer size={spacerSize} />
      <ImageLoader
        alt={t('landing.hero-img-description')}
        className='landing-page-image'
        height={height}
        src={wideImg}
        width={width}
      />
      <p className='text-center caption'>{t('landing.hero-img-description')}</p>
    </Media>
  );
}

CampersImage.displayName = 'CampersImage';
export default CampersImage;
