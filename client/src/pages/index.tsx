import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';
import SEO from '../components/seo';
import { Loader } from '../components/helpers';
import LandingTopB from '../components/landing/components/landing-top-b';
import LandingTop from '../components/landing/components/landing-top';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import Faq from '../components/landing/components/faq';
import Benefits from '../components/landing/components/benefits';
import { useClaimableCertsNotification } from '../components/helpers/use-claimable-certs-notification';

import '../components/landing/landing.css';

type LandingProps = {
  showLandingPageRedesign: boolean;
};

const Landing = ({ showLandingPageRedesign }: LandingProps) => (
  <main
    id='landing-content'
    data-testid='landing-content'
    className={`landing-page`}
  >
    {showLandingPageRedesign ? <LandingTopB /> : <LandingTop />}
    <Benefits />
    <Testimonials />
    <Certifications />
    <Faq />
  </main>
);

function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  useClaimableCertsNotification();

  if (growthbook && growthbook.ready) {
    console.error('GrowthBook Ready', growthbook);
    const showLandingPageRedesign = growthbook.getFeatureValue(
      'landing-top-skill-focused',
      false
    );
    growthbook.getFeatureValue('landing-aa-test', false);
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Landing showLandingPageRedesign={showLandingPageRedesign} />
      </>
    );
  } else {
    console.error('GrowthBook not ready yet', growthbook);
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Loader fullScreen={true} />
      </>
    );
  }
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;
