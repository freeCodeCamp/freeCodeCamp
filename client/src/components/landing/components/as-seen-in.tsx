import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@freecodecamp/ui';
import { AsSeenInText } from '../../../assets/images/components';

const AsSeenIn = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container
      fluid={true}
      className='as-seen-in text-center'
      data-playwright-test-label='landing-as-seen-in-container'
    >
      <h2
        className='big-heading'
        data-playwright-test-label='landing-as-seen-in-text'
      >
        {t('landing.as-seen-in')}
      </h2>
      <AsSeenInText fill='light' />
    </Container>
  );
};

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
