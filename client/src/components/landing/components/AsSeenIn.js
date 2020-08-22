import React from 'react';
import { Col, Row } from '@freecodecamp/react-bootstrap';

import { AsFeatureLogo } from '../../../assets/images/components';

const AsSeenIn = () => (
  <Row className='as-seen-in'>
    <Col sm={8} smOffset={2} xs={12}>
      <div className='text-center'>
        <h1 className='big-heading'>As seen in:</h1>
        <AsFeatureLogo fill='light' />
      </div>
    </Col>
  </Row>
);

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
