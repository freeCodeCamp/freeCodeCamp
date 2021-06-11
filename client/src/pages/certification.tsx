import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowCertification from '../client-only-routes/show-certification';

import './certification.css';

function Certification(): JSX.Element {
  return (
    <Router>
      <ShowCertification
        path={withPrefix('/certification/:username/:certSlug')}
      />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

export default Certification;
