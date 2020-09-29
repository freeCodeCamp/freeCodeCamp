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
          block
        }
      }
    }
  `).allCertificateNode.nodes;
  const validCertNames = certMap.map(cert =>
    cert.dashedName.startsWith('legacy')
      ? cert.block.replace(/-certificate/g, '')
      : cert.dashedName.replace(/-certificate/, '')
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
