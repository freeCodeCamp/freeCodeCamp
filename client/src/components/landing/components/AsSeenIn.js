import React from 'react';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { AsFeatureLogo } from '../../../assets/images/components';
import { Trans } from 'gatsby-plugin-react-i18next';

const AsSeenIn = () => (
  <Row className='as-seen-in'>
    <Col sm={8} smOffset={2} xs={12}>
      <div className='text-center'>
        <h1 className='big-heading'>
          <Trans>landing.as-seen-in</Trans>
        </h1>
        <AsFeatureLogo fill='light' />
      </div>
    </Col>
  </Row>
);

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
