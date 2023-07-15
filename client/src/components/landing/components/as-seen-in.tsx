import { Grid } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AsSeenInText } from '../../../assets/images/components';

const AsSeenIn = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid fluid={true} className='as-seen-in text-center'>
      <p className='big-heading'>{t('landing.as-seen-in')}</p>
      <AsSeenInText fill='light' />
    </Grid>
  );
};

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
