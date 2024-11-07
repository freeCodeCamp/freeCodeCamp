/* eslint-disable filenames-simple/naming-convention */

import React from 'react';
import ShowCertification from '../../../client-only-routes/show-certification';
import './certification.css';

interface CertificationPageProps {
  params: {
    username: string;
    certSlug: string;
  };
}

const CertificationPage: React.FC<CertificationPageProps> = ({ params }) => {
  const { username, certSlug } = params;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ShowCertification username={username} certSlug={certSlug} />;
};

export default CertificationPage;
