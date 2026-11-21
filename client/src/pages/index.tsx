import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';
import { useSelector } from 'react-redux';
import SEO from '../components/seo';
import { userFetchStateSelector } from '../redux/selectors';
import type { UserFetchState } from '../redux/prop-types';
import LandingTop from '../components/landing/components/landing-top';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import LandingCatalog from '../components/landing/components/landing-catalog';
import Faq from '../components/landing/components/faq';
import Benefits from '../components/landing/components/benefits';
import { useClaimableCertsNotification } from '../components/helpers/use-claimable-certs-notification';

import '../components/landing/landing.css';

const Landing = ({ isReady }: { isReady: boolean }) => (
  <main
    id='landing-content'
    data-testid='landing-content'
    className={`landing-page`}
  >
    <LandingTop isReady={isReady} />
    <Benefits />
    <Testimonials />
    <Certifications />
    <LandingCatalog />
    <Faq />
  </main>
);

function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  const { complete } = useSelector<unknown, UserFetchState>(
    userFetchStateSelector
  );
  const isReady = complete && !!growthbook?.ready;
  useClaimableCertsNotification();

  if (isReady) {
    growthbook?.getFeatureValue('landing-aa-test', false);
  }

  return (
    <>
      <SEO title={t('metaTags:title')} />
      <Landing isReady={isReady} />
    </>
  );
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;
