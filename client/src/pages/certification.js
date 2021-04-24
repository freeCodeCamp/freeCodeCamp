import React, { Component } from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowCertification from '../client-only-routes/ShowCertification';

import './certification.css';

class Certification extends Component {
  render() {
    return (
      <Router>
        <ShowCertification
          path={withPrefix('/certification/:username/:certSlug')}
        />
        <RedirectHome default={true} />
      </Router>
    );
  }
}

export default Certification;
