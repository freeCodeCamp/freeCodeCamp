import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import envData from '../../../../config/env.json';
import { Link, Spacer } from '../../helpers';

import '../intro.css';

const { forumLocation } = envData;
function IntroDescription(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className='intro-description'
      data-playwright-test-label='learn-read-this-section'
    >
      <Spacer size='medium' />
      <p
        className='text-center'
        data-playwright-test-label='learn-read-this-heading'
      >
        <strong>{t('learn.read-this.heading')}</strong>
      </p>
      <Spacer size='medium' />
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p1')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p2')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p3')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p4')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p5')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p6')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p7')}
      </p>
      <p data-playwright-test-label='learn-read-this-p'>
        {t('learn.read-this.p8')}
      </p>
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
