import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';

import { Link } from '../helpers';

const ArchivedWarning = () => {
  return (
    <Callout variant='info'>
      <p className='text-center' style={{ marginBottom: 0, fontSize: '1rem' }}>
        <Trans i18nKey='learn.archive.content-not-updated'>
          <strong style={{ color: 'var(--blue-dark)' }}>placeholder</strong>
          <Link to={'/learn/full-stack-developer'}>placeholder</Link>
        </Trans>
      </p>
    </Callout>
  );
};

export default withTranslation()(ArchivedWarning);
