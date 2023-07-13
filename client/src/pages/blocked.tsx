import React from 'react';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { Spacer } from '../components/helpers';

function BlockedPage(): JSX.Element {
  return (
    <>
      <Helmet title={`Access Denied | freeCodeCamp.org`} />
      <Grid className='text-center'>
        <Spacer size='large' />
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <h1>We can&apos;t log you in.</h1>
            <Spacer size='large' />
            <Col lg={10} lgOffset={1} sm={10} smOffset={1} xs={12}>
              <div className='text-left blocked-body'>
                <p>
                  United States export control and economic sanctions rules
                  don&apos;t allow us to log in visitors from your region. Sorry
                  about this. The situation may change in the future.
                </p>
                <p>
                  If you want, you can{' '}
                  <a href='https://www.okta.com/blocked'>
                    learn more about these restrictions
                  </a>
                  .
                </p>
              </div>
            </Col>
          </Col>
        </Row>
        <Spacer size='large' />
      </Grid>
    </>
  );
}

BlockedPage.displayName = 'BlockedPage';

export default BlockedPage;
