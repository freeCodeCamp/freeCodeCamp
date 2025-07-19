import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo';
import LandingTopB from '../components/landing/components/landing-top-b';
import LandingTop from '../components/landing/components/landing-top';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import Faq from '../components/landing/components/faq';
import Benefits from '../components/landing/components/benefits';
import '../components/landing/landing.css';

type LandingProps = {
  showLandingPageRedesign: boolean;
};

const Landing = ({ showLandingPageRedesign }: LandingProps) => (
  <main className={`landing-page`}>
    {showLandingPageRedesign ? <LandingTopB /> : <LandingTop />}
    <Benefits />
    <Testimonials />
    <Certifications />
    <Faq />
  </main>
);

function IndexPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('metaTags:title')} />
      <Landing showLandingPageRedesign={true} />
    </>
  );
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;
