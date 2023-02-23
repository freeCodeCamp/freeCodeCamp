import { Grid, Panel, Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import envData from '../../../config/env.json';
import { Spacer } from '../components/helpers';
import FullWidthRow from '../components/helpers/full-width-row';

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
      <Grid>
        <main>
          <FullWidthRow>
            <Spacer paddingSize={30} />
            <Panel bsStyle='primary' className='text-center'>
              <Spacer paddingSize={15} />
              <h2>{t('misc.unsubscribed')}</h2>
              <p>{t('misc.keep-coding')}</p>
            </Panel>
          </FullWidthRow>
          {unsubscribeId ? (
            <FullWidthRow>
              <Button
                block={true}
                bsSize='lg'
                bsStyle='primary'
                href={`${apiLocation}/resubscribe/${unsubscribeId}`}
              >
                {t('buttons.resubscribe')}
              </Button>
            </FullWidthRow>
          ) : null}
          <Spacer paddingSize={30} />
        </main>
      </Grid>
    </>
  );
}

ShowUnsubscribed.displayName = 'ShowUnsubscribed';

export default ShowUnsubscribed;
