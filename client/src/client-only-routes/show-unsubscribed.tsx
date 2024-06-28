import type { RouteComponentProps } from '@reach/router';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Container, Panel } from '@freecodecamp/ui';

import envData from '../../config/env.json';
import { ButtonLink, Spacer, FullWidthRow } from '../components/helpers';

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
            <Panel variant='primary' className='text-center'>
              <Spacer size='medium' />
              <h2 data-playwright-test-label='main-heading'>
                {t('misc.unsubscribed')}
              </h2>
              <p data-playwright-test-label='motivation-text'>
                {t('misc.keep-coding')}
              </p>
            </Panel>
          </FullWidthRow>
          {unsubscribeId ? (
            <FullWidthRow>
              <ButtonLink
                block={true}
                size='large'
                href={`${apiLocation}/resubscribe/${unsubscribeId}`}
              >
                {t('buttons.resubscribe')}
              </ButtonLink>
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
