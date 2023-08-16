import { Panel, Button } from '@freecodecamp/react-bootstrap';
import type { RouteComponentProps } from '@reach/router';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Container } from '@freecodecamp/ui';
import envData from '../../../config/env.json';
import { Spacer } from '../components/helpers';
import FullWidthRow from '../components/helpers/full-width-row';

const { apiLocation } = envData;

type ShowUnsubscribedProps = Pick<RouteComponentProps, 'path'> & {
  unsubscribeId?: string;
};

function ShowUnsubscribed({
  unsubscribeId
}: ShowUnsubscribedProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('metaTags:youre-unsubscribed')} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <main>
          <FullWidthRow>
            <Spacer size='large' />
            <Panel bsStyle='primary' className='text-center'>
              <Spacer size='medium' />
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
          <Spacer size='large' />
        </main>
      </Container>
    </>
  );
}

ShowUnsubscribed.displayName = 'ShowUnsubscribed';

export default ShowUnsubscribed;
