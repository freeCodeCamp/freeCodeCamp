import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';

import { Link } from '../helpers';

import './index.css';

const ArchivedWarning = () => {
  const { t } = useTranslation();
  return (
    <Callout variant='note' label={t('misc.note')}>
      <p className='archived-warning'>
        <Trans i18nKey='learn.archive.content-not-updated'>
          <Link to={'/learn'}>placeholder</Link>
        </Trans>
      </p>
    </Callout>
  );
};

export default ArchivedWarning;
