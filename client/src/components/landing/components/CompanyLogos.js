import React from 'react';

import {
  AmazonLogo,
  AppleLogo,
  MicrosoftLogo,
  SpotifyLogo,
  GoogleLogo
} from '../../../assets/images';

import './companyLogos.css';

export const CompanyLogos = () => {
  return (
    <div className='logo-row'>
      <GoogleLogo />
      <MicrosoftLogo />
      <AppleLogo />
      <SpotifyLogo />
      <AmazonLogo />
    </div>
  );
};

CompanyLogos.displayName = 'CompanyLogos';
export default CompanyLogos;
