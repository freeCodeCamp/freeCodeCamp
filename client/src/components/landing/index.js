import React, { Fragment } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Testimonials from './components/Testimonials';
import LandingTop from './components/LandingTop';
import Certifications from './components/Certifications';
import AsSeenIn from './components/AsSeenIn';

import './landing.css';

const propTypes = {
  page: PropTypes.string
};

export const Landing = ({ page = 'landing' }) => {
  const data = useStaticQuery(graphql`
    query certifications {
      challenges: allChallengeNode(
        filter: { isHidden: { eq: false } }
        sort: { fields: [superOrder, order, challengeOrder] }
      ) {
        nodes {
          superBlock
        }
      }
    }
  `);

  return (
    <Fragment>
      <Helmet>
        <title>Learn to code at home | freeCodeCamp.org</title>
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
          <Certifications nodes={data.challenges.nodes} page={page} />
        </Grid>
      </main>
    </Fragment>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;
