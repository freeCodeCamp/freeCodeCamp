import React from 'react';
import { Col } from '@freecodecamp/ui';

import Map from '../../Map/index';
import { Spacer } from '../../helpers';
import BigCallToAction from './big-call-to-action';

const Certifications = (): JSX.Element => {
  return (
    <Col
      className='certification-section'
      md={8}
      mdOffset={2}
      sm={10}
      smOffset={1}
      xs={12}
    >
      <Map forLanding={true} />
      <Spacer size='medium' />
      <BigCallToAction />
      <Spacer size='medium' />
    </Col>
  );
};

Certifications.displayName = 'Certifications';
export default Certifications;
