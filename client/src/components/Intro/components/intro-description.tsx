import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import envData from '../../../../config/env.json';
import { Link } from '../../helpers';

import '../intro.css';

const { forumLocation } = envData;
function IntroDescription(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className='intro-description'
      data-playwright-test-label='learn-read-this-section'
    >
      <Spacer size='m' />
      <p
        className='text-center'
        data-playwright-test-label='learn-read-this-heading'
      >
        <strong>{t('learn.read-this.heading')}</strong>
      </p>
      <Spacer size='m' />
      {[...Array(8).keys()].map(i => (
        <p key={i} data-playwright-test-label='learn-read-this-p'>
          {t(`learn.read-this.p${i + 1}`)}
        </p>
      ))}
      <p>
        <Trans
          i18nKey='learn.read-this.p9'
          data-playwright-test-label='learn-read-this-p'
        >
          <Link className='inline' to='https://youtube.com/freecodecamp' />
        </Trans>
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p10')}
      </p>
      <p>
        <Trans
          i18nKey='learn.read-this.p11'
          data-playwright-test-label='learn-read-this-p'
        >
          <Link className='inline' to={forumLocation} />
        </Trans>
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p12')}
      </p>
      <strong>{t('misc.quincy')}</strong>
    </div>
  );
}

IntroDescription.displayName = 'IntroDescription';

export default IntroDescription;
