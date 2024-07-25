import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useFeature } from '@growthbook/growthbook-react';
import SEO from '../seo';
import { Loader } from '../helpers';
import AsSeenIn from './components/as-seen-in';
import Certifications from './components/certifications';
import LandingTop from './components/landing-top';
import LandingTopB from './components/landing-top-b';
import Testimonials from './components/testimonials';
import Faq from './components/faq';

import './landing.css';

const LandingA = (): ReactElement => {
  return (
    <main className='landing-page'>
      <LandingTop />
      <AsSeenIn />
      <Testimonials />
      <Certifications />
      <Faq />
    </main>
  );
};

const LandingB = (): ReactElement => {
  return (
    <main className='landing-page landing-page-b'>
      <LandingTopB />
      <Testimonials />
      <Certifications />
      <Faq />
    </main>
  );
};

function Landing(): ReactElement {
  const { t } = useTranslation();
  const showLandingPageRedesign = useFeature('landing-page-redesign');

  return (
    <>
      <SEO title={t('metaTags:title')} />
      {showLandingPageRedesign.value === true ? (
        <LandingB />
      ) : showLandingPageRedesign.value === false ? (
        <LandingA />
      ) : (
        <Loader fullScreen={true} />
      )}
    </>
  );
}

Landing.displayName = 'Landing';
export default Landing;
