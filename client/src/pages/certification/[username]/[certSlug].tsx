/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import ShowCertification from '../../../client-only-routes/show-certification';
import '../certification.css';

interface CertificationPageProps {
  params: {
    username: string;
    certSlug: string;
  };
  location: {
    pathname: string;
  };
}

const CertificationPage = ({ params, location }: CertificationPageProps) => {
  const { username, certSlug } = params;
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Redux connect() provides remaining props
    <ShowCertification
      username={username}
      certSlug={certSlug}
      location={location}
    />
  );
};

export default CertificationPage;
