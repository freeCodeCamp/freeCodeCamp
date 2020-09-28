import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Panel, Button } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import env from '../../config/env.json';
import FullWidthRow from '../components/helpers/FullWidthRow';
import { Spacer } from '../components/helpers';

const { apiLocation } = env;

function ShowUnsubscribed({ unsubscribeId }) {
  return (
    <Fragment>
      <Helmet>
        <title>You have been unsubscribed | freeCodeCamp.org</title>
      </Helmet>
      <Grid>
        <main>
          <FullWidthRow>
            <Spacer size={2} />
            <Panel bsStyle='primary' className='text-center'>
              <Spacer />
              <h2>You have successfully been unsubscribed</h2>
              <p>Whatever you go on to, keep coding!</p>
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
                You can click here to resubscribe
              </Button>
            </FullWidthRow>
          ) : null}
          <Spacer size={2} />
        </main>
      </Grid>
    </Fragment>
  );
}

ShowUnsubscribed.displayName = 'ShowUnsubscribed';
ShowUnsubscribed.propTypes = {
  unsubscribeId: PropTypes.string
};

export default ShowUnsubscribed;
