import React from 'react';
import { Router } from '@reach/router';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowCertification from '../client-only-routes/ShowCertification';

import './certification.css';

const Certification = () => {
  const certMap = useStaticQuery(graphql`
    query {
      allCertificateNode {
        nodes {
          title
          block
          curriculumVersion
        }
      }
    }
  `).allCertificateNode.nodes;
  const validCertNames = certMap.map(cert =>
    cert.block.replace(
      /-certificate/,
      cert.curriculumVersion === 7 ? '-v7' : ''
    )
  );

  return (
    <Router>
      <ShowCertification
        path={withPrefix('/certification/:username/:certName')}
        validCertNames={validCertNames}
      />
      <RedirectHome default={true} />
    </Router>
  );
};

export default Certification;
