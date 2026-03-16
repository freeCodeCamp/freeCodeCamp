import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';
import SEO from '../components/seo';
import { Loader } from '../components/helpers';
import LandingTop from '../components/landing/components/landing-top';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import LandingCatalog from '../components/landing/components/landing-catalog';
import Faq from '../components/landing/components/faq';
import Benefits from '../components/landing/components/benefits';
import { useClaimableCertsNotification } from '../components/helpers/use-claimable-certs-notification';
import { showUpcomingChanges } from '../../config/env.json';

import '../components/landing/landing.css';

const Landing = () => (
  <main
    id='landing-content'
    data-testid='landing-content'
    className={`landing-page`}
  >
    <LandingTop />
    <Benefits />
    <Testimonials />
    <Certifications />
    {showUpcomingChanges && <LandingCatalog />}
    <Faq />
  </main>
);

function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  useClaimableCertsNotification();

  if (growthbook && growthbook.ready) {
    growthbook.getFeatureValue('landing-aa-test', false);
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Landing />
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

IndexPage.displayName = 'IndexPage';

export default IndexPage;
