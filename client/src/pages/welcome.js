import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col, Button } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { Loader, Spacer } from '../components/helpers';
import CurrentChallengeLink from '../components/helpers/CurrentChallengeLink';
import Layout from '../components/layouts/Default';
import Supporters from '../components/Supporters';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector,
  activeDonationsSelector
} from '../redux';
import { randomQuote } from '../utils/get-words';

import './welcome.css';

const propTypes = {
  activeDonations: PropTypes.number,
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  isSignedIn: PropTypes.bool,
  user: PropTypes.shape({
    acceptedPrivacyTerms: PropTypes.bool,
    username: PropTypes.string,
    completedChallengeCount: PropTypes.number,
    completedProjectCount: PropTypes.number,
    completedCertCount: PropTypes.number,
    completedLegacyCertCount: PropTypes.number,
    isDonating: PropTypes.bool
  })
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  activeDonationsSelector,
  (fetchState, isSignedIn, user, activeDonations) => ({
    activeDonations,
    fetchState,
    isSignedIn,
    user
  })
);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

function Welcome({
  fetchState: { pending, complete },
  isSignedIn,
  user: {
    acceptedPrivacyTerms,
    name = '',
    completedChallengeCount: completedChallenges = 0,
    completedProjectCount = 0,
    completedCertCount = 0,
    completedLegacyCertCount: completedLegacyCerts = 0,
    isDonating
  },
  activeDonations
}) {
  if (pending && !complete) {
    return (
      <Layout>
        <div className='loader-wrapper'>
          <Loader />
        </div>
      </Layout>
    );
  }

  if (!isSignedIn) {
    navigate('/');
    return null;
  }

  if (isSignedIn && !acceptedPrivacyTerms) {
    navigate('/accept-privacy-terms');
    return null;
  }

  const { quote, author } = randomQuote();
  return (
    <Layout>
      <Helmet>
        <title>Welcome {name ? name : 'Camper'} | freeCodeCamp.org</title>
      </Helmet>
      <main>
        <Grid className='text-center'>
          <Row>
            <Col xs={12}>
              <Spacer />
              <h1 className='big-heading'>Welcome {name ? name : 'Camper'}!</h1>
            </Col>
          </Row>
          <Spacer />
          <Supporters
            activeDonations={activeDonations}
            isDonating={isDonating}
          />
          <Spacer size={2} />
          <Spacer />
          <Row className='quote-partial'>
            <Col sm={10} smOffset={1} xs={12}>
              <blockquote className='blockquote'>
                <span>
                  <q>{quote}</q>
                  <footer className='quote-author blockquote-footer'>
                    <cite>{author}</cite>
                  </footer>
                </span>
              </blockquote>
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col sm={8} smOffset={2} xs={12}>
              <p className='stats'>
                You have completed <span>{completedChallenges}</span> of{' '}
                <span>1408</span> coding challenges.
              </p>
              <p className='stats'>
                You have built <span>{completedProjectCount}</span> of{' '}
                <span>30</span> projects.
              </p>
              {completedLegacyCerts ? (
                <p className='stats'>
                  You have earned <span>{completedLegacyCerts}</span> of{' '}
                  <span>4</span> legacy certifications.
                </p>
              ) : null}
              <p className='stats'>
                You have earned <span>{completedCertCount}</span> of{' '}
                <span>6</span> certifications.
              </p>
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col sm={8} smOffset={2} xs={12}>
            <CurrentChallengeLink>
              <Button block={true} bsStyle='primary' className='btn-cta-big'>
                Go to my next challenge
              </Button>
            </CurrentChallengeLink>
            </Col>
          </Row>
          <Spacer size={4} />
        </Grid>
      </main>
    </Layout>
  );
}

Welcome.displayName = 'Welcome';
Welcome.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
