import React from 'react';
import Helmet from 'react-helmet';
import { Container, Col, Row } from '@freecodecamp/ui';

import { Spacer } from '../components/helpers';

function BlockedPage(): JSX.Element {
  return (
    <>
      <Helmet title={`Access Denied | freeCodeCamp.org`} />
      <Container className='text-center'>
        <Spacer size='large' />
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <h1 id='content-start' data-playwright-test-label='main-heading'>
              We can&apos;t log you in.
            </h1>
            <Spacer size='large' />
            <Col lg={10} lgOffset={1} sm={10} smOffset={1} xs={12}>
              <div
                className='text-start'
                data-playwright-test-label='blocked-body-text'
              >
                <p>
                  United States export control and economic sanctions rules
                  don&apos;t allow us to log in visitors from your region. Sorry
                  about this. The situation may change in the future.
                </p>
                <p>
                  If you want, you can{' '}
                  <a
                    href='https://www.okta.com/blocked'
                    data-playwright-test-label='learn-more-link'
                  >
                    learn more about these restrictions
                  </a>
                  .
                </p>
              </div>
            </Col>
          </Col>
        </Row>
        <Spacer size='large' />
      </Container>
    </>
  );
}

BlockedPage.displayName = 'BlockedPage';

export default BlockedPage;
