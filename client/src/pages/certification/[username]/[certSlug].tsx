/* eslint-disable filenames-simple/naming-convention */
import React from 'react';

import './certification.css';
import ShowCertification from '../../../client-only-routes/show-certification';

interface CertificationProps {
  params: {
    username: string;
    certSlug: string;
  };
}

const CertificationPage: React.FC<CertificationProps> = ({ params }) => {
  const { username, certSlug } = params;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ShowCertification certSlug={certSlug} username={username} />
  );
};

export default CertificationPage;
