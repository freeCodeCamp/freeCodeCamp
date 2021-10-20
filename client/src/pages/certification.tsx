import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowCertification from '../client-only-routes/show-certification';
import RedirectHome from '../components/redirect-home';

import './certification.css';

function Certification(): JSX.Element {
  return (
    <Router>
      <ShowCertification
        // Error from installing @types/react-helmet and @types/react-redux
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        path={withPrefix('/certification/:username/:certSlug')}
      />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

export default Certification;
