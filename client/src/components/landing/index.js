import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
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
    <Fragment>
      <Helmet>
        <title>{t('metaTags:title')}</title>
      </Helmet>
      <main className='landing-page'>
        <Container>
          <LandingTop page={page} />
        </Container>
        <Container fluid={true}>
          <AsSeenIn />
        </Container>
        <Container>
          <Testimonials />
          <Certifications />
        </Container>
      </main>
    </Fragment>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;
