import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@freecodecamp/ui';
import { AsSeenInText } from '../../../assets/images/components';

const AsSeenIn = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container fluid={true} className='as-seen-in text-center'>
      <p className='big-heading'>{t('landing.as-seen-in')}</p>
      <AsSeenInText fill='light' />
    </Container>
  );
};

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
