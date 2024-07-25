// eslint-disable-next-line filenames-simple/naming-convention
import React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import landingPageb from '../../../assets/images/landing/landing-page-b.svg';
import { LazyImage, Spacer } from '../../helpers';

const LARGE_SCREEN_SIZE = 1200;

const landingImageSize: CSSProperties = {
  position: 'absolute',
  left: '50%',
  height: 'auto',
  width: '750px',
  top: '3VW'
};

const imageStyle: CSSProperties = {
  width: '100%',
  height: 'auto'
};

function UIImages(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Media minWidth={LARGE_SCREEN_SIZE}>
        <figure
          style={landingImageSize}
          data-test-label='landing-page-figure'
          data-playwright-test-label='landing-page-figure'
        >
          <LazyImage
            alt={t('landing.hero-img-uis')}
            src={landingPageb}
            style={imageStyle}
          />
        </figure>
        <Spacer size='exLarge' />
      </Media>
    </>
  );
}

UIImages.displayName = 'UIImages';
export default UIImages;
