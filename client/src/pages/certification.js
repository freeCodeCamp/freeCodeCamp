import React from 'react';
import { Router } from '@reach/router';

import RedirectHome from '../components/RedirectHome';
import ShowCertification from '../client-only-routes/ShowCertification';

import './certification.css';

import { useStaticQuery, graphql } from 'gatsby';

const Certification = () => {
  const certMap = useStaticQuery(graphql`
    query {
      allCertificateNode {
        nodes {
          dashedName
        }
      }
    }
  `).allCertificateNode.nodes;
  // TODO: current - hardcoded for infosecQa cert
  const validCertNames = certMap.map(cert =>
    cert.dashedName.replace(/-certificate/, '').replace(/legacy-/, '')
  );

  return (
    <Router>
      <ShowCertification
        path='/certification/:username/:certName'
        validCertNames={validCertNames}
      />
      <RedirectHome default={true} />
    </Router>
  );
};

export default Certification;
