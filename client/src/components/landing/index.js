import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Testimonials from './components/Testimonials';
import LandingTop from './components/LandingTop';
import Certifications from './components/Certifications';
import AsSeenIn from './components/AsSeenIn';

import './landing.css';

const propTypes = {
  page: PropTypes.string
};

export const Landing = ({ page = 'landing' }) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('metaTags:title')}</title>
      </Helmet>
      <main className='landing-page'>
        <Grid>
          <LandingTop page={page} />
        </Grid>
        <Grid fluid={true}>
          <AsSeenIn />
        </Grid>
        <Grid>
          <Testimonials />
          <Certifications />
        </Grid>
      </main>
    </>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;
