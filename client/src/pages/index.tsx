import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';
import SEO from '../components/seo';
import { Loader } from '../components/helpers';
import LandingTop from '../components/landing/components/landing-top';
import LandingTopB from '../components/landing/components/landing-top-b';
import AsSeenIn from '../components/landing/components/as-seen-in';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import Faq from '../components/landing/components/faq';
import Benefits from '../components/landing/components/benefits';
import '../components/landing/landing.css';

type LandingProps = {
  showLandingPageRedesign: boolean;
  showBenefitsSection: boolean;
};

const Landing = ({
  showLandingPageRedesign,
  showBenefitsSection
}: LandingProps) => (
  <main
    className={`landing-page ${showLandingPageRedesign ? 'landing-page-b' : ''}`}
  >
    {showLandingPageRedesign ? <LandingTopB /> : <LandingTop />}
    {showBenefitsSection ? <Benefits /> : <AsSeenIn />}

    <Testimonials />
    <Certifications />
    <Faq />
  </main>
);

function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  if (growthbook && growthbook.ready) {
    const showLandingPageRedesign = growthbook.getFeatureValue(
      'landing-page-redesign',
      false
    );
    const showBenefitsSection = growthbook.getFeatureValue(
      'show-benefits',
      false
    );
    growthbook.getFeatureValue('landing-aa-test', false);
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Landing
          showLandingPageRedesign={showLandingPageRedesign}
          showBenefitsSection={showBenefitsSection}
        />
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
