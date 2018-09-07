import React, { Component } from 'react';
import { Router } from '@reach/router';

import RedirectHome from '../components/RedirectHome';
import ShowCertification from '../client-only-routes/ShowCertification';

import './certification.css';

class Certification extends Component {
  render() {
    return (
      <Router>
        <ShowCertification path='/certification/:username/:certName' />
        <RedirectHome default={true} />
      </Router>
    );
  }
}

export default Certification;
