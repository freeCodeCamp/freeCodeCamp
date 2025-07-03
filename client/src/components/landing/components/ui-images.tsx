import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import Media from 'react-responsive';
import landingPageb from '../../../assets/images/landing/landing-page-b.svg';
import { LazyImage } from '../../helpers';

const LARGE_SCREEN_SIZE = 1200;

function UIImages(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <figure
        className='ui-images'
        data-playwright-test-label='landing-page-figure'
      >
        <LazyImage alt={t('landing.hero-img-uis')} src={landingPageb} />
      </figure>
      <Spacer size='xl' />
    </Media>
  );
}

UIImages.displayName = 'UIImages';
export default UIImages;
