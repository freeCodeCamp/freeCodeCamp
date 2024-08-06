import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';
import SEO from '../seo';
import { Loader } from '../helpers';
import AsSeenIn from './components/as-seen-in';
import Certifications from './components/certifications';
import LandingTop from './components/landing-top';
import LandingTopB from './components/landing-top-b';
import Testimonials from './components/testimonials';
import Faq from './components/faq';

import './landing.css';

const LandingA = () => (
  <main className='landing-page'>
    <LandingTop />
    <AsSeenIn />
    <Testimonials />
    <Certifications />
    <Faq />
  </main>
);

const LandingB = () => (
  <main className='landing-page landing-page-b'>
    <LandingTopB />
    <Testimonials />
    <Certifications />
    <Faq />
  </main>
);

function Landing(): ReactElement {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  if (growthbook && growthbook.ready) {
    const showLandingPageRedesign = growthbook.getFeatureValue(
      'landing-page-redesign',
      false
    );
    return (
      <>
        <SEO title={t('metaTags:title')} />
        {showLandingPageRedesign === true ? <LandingB /> : <LandingA />}
      </>
    );
  } else {
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Loader fullScreen={true} />
      </>
    );
  }
}

Landing.displayName = 'Landing';
export default Landing;
