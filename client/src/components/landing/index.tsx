import { Grid } from '@freecodecamp/react-bootstrap';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '../seo';
import AsSeenIn from './components/as-seen-in';
import Certifications from './components/certifications';
import LandingTop from './components/landing-top';
import Testimonials from './components/testimonials';
import Faq from './components/faq';

import './landing.css';

function Landing(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('metaTags:title')} />
      <main className='landing-page'>
        <Grid>
          <LandingTop />
        </Grid>
        <Grid fluid={true}>
          <AsSeenIn />
        </Grid>
        <Testimonials />
        <Certifications />
        <Faq />
      </main>
    </>
  );
}

Landing.displayName = 'Landing';
export default Landing;
