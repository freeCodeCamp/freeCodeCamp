import React from 'react';
import { Col, Spacer } from '@freecodecamp/ui';

import Map from '../../Map/index';
import { type SuperBlocks } from '../../../../../shared/config/curriculum';
import BigCallToAction from './big-call-to-action';

const Certifications = ({
  allChallenges
}: {
  allChallenges: {
    id: string;
    superBlock: SuperBlocks;
  }[];
}): JSX.Element => {
  return (
    <Col
      className='certification-section'
      md={8}
      mdOffset={2}
      sm={10}
      smOffset={1}
      xs={12}
    >
      <Map allChallenges={allChallenges} forLanding={true} />
      <Spacer size='m' />
      <BigCallToAction />
      <Spacer size='m' />
    </Col>
  );
};

Certifications.displayName = 'Certifications';
export default Certifications;
