import React from 'react';
import { Button } from 'react-bootstrap';

import { FullWidthRow } from '../../../helperComponents';
import SectionHeader from './SectionHeader.jsx';

function Pledge() {
  return (
    <div>
      <SectionHeader>
        Commit yourself to a certificate
      </SectionHeader>
      <FullWidthRow>
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          className='btn-link-social'
          href='/commit'
          >
          Edit my pledge
        </Button>
      </FullWidthRow>
    </div>
  );
}

Pledge.displayName = 'Pledge';

export default Pledge;
