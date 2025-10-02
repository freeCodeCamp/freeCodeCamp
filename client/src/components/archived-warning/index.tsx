import React from 'react';
import { Trans } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';

import { Link } from '../helpers';

import './index.css';

const ArchivedWarning = () => {
  return (
    <Callout variant='info'>
      <p className='text-center archived-warning'>
        <Trans i18nKey='learn.archive.content-not-updated'>
          <strong>placeholder</strong>
          <Link to={'/learn/full-stack-developer'}>placeholder</Link>
        </Trans>
      </p>
    </Callout>
  );
};

export default ArchivedWarning;
