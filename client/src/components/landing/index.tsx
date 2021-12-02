import { Grid } from '@freecodecamp/react-bootstrap';
import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import AsSeenIn from './components/as-seen-in';
import Certifications from './components/certifications';
import LandingTop from './components/landing-top';
import Testimonials from './components/testimonials';

import './landing.css';

function Landing(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('metaTags:title')}</title>
      </Helmet>
      <main className='landing-page'>
        <Grid>
          <LandingTop pageName={'landing'} />
        </Grid>
        <Grid fluid={true}>
          <AsSeenIn />
        </Grid>
        <Grid>
          <Testimonials />
          <Certifications pageName={'landing'} />
        </Grid>
      </main>
    </>
  );
}

Landing.displayName = 'Landing';
export default Landing;
