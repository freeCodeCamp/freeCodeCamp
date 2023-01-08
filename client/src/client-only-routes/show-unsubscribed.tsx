import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './test.css';
import envData from '../../../config/env.json';

const { apiLocation } = envData;

function ShowUnsubscribed({
  unsubscribeId
}: {
  unsubscribeId: string;
}): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('metaTags:youre-unsubscribed')} | freeCodeCamp.org</title>
      </Helmet>
      <main className='test'>
        <section className='panel'>
          <h2>{t('misc.unsubscribed')}</h2>
          <p>{t('misc.keep-coding')}</p>
        </section>
        {unsubscribeId && (
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            href={`${apiLocation}/resubscribe/${unsubscribeId}`}
          >
            {t('buttons.resubscribe')}
          </Button>
        )}
      </main>
    </>
  );
}

ShowUnsubscribed.displayName = 'ShowUnsubscribed';

export default ShowUnsubscribed;
