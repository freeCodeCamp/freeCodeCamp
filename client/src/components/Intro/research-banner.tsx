import React from 'react';
import { Alert } from '@freecodecamp/react-bootstrap';
import { useFeature } from '@growthbook/growthbook-react';

const ResearchBannerx = (): JSX.Element => {
  const feature = useFeature('show-h1');
  return feature.on ? <Alert>hello</Alert> : <Alert>Mello</Alert>;
};

ResearchBannerx.displayName = 'ResearchBannerx';

export default ResearchBannerx;
