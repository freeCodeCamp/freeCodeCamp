import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import envData from '../../../config/env.json';
import FullWidthRow from '../components/helpers/FullWidthRow';
import { Spacer } from '../components/helpers';

const { apiLocation } = envData;

function ShowUnsubscribed({ unsubscribeId }) {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>{t('metaTags:youre-unsubscribed')} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <main>
          <FullWidthRow>
            <Spacer size={2} />
            <Card className='text-center' variant='primary'>
              <Spacer />
              <h2>{t('misc.unsubscribed')}</h2>
              <p>{t('misc.keep-coding')}</p>
            </Card>
          </FullWidthRow>
          {unsubscribeId ? (
            <FullWidthRow>
              <Button
                block={true}
                bsSize='lg'
                href={`${apiLocation}/resubscribe/${unsubscribeId}`}
                variant='primary'
              >
                {t('buttons.resubscribe')}
              </Button>
            </FullWidthRow>
          ) : null}
          <Spacer size={2} />
        </main>
      </Container>
    </Fragment>
  );
}

ShowUnsubscribed.displayName = 'ShowUnsubscribed';
ShowUnsubscribed.propTypes = {
  unsubscribeId: PropTypes.string
};

export default ShowUnsubscribed;
