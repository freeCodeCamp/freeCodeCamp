import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '../seo';
import { SuperBlocks } from '../../../../shared/config/curriculum';
import AsSeenIn from './components/as-seen-in';
import Certifications from './components/certifications';
import LandingTop from './components/landing-top';
import Testimonials from './components/testimonials';
import Faq from './components/faq';

import './landing.css';

function Landing({
  allChallenges
}: {
  allChallenges: {
    id: string;
    superBlock: SuperBlocks;
  }[];
}): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('metaTags:title')} />
      <main className='landing-page'>
        <LandingTop />
        <AsSeenIn />
        <Testimonials />
        <Certifications allChallenges={allChallenges} />
        <Faq />
      </main>
    </>
  );
}

Landing.displayName = 'Landing';
export default Landing;
