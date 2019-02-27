import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col, Button } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { Loader, Spacer } from '../components/helpers';
import CurrentChallengeLink from '../components/helpers/CurrentChallengeLink';
import Supporters from '../components/Supporters';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector,
  activeDonationsSelector
} from '../redux';
import { randomQuote } from '../utils/get-words';
import createRedirect from '../components/createRedirect';
import RedirectHome from '../components/RedirectHome';

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
const RedirectAcceptPrivacyTerm = createRedirect('/accept-privacy-terms');

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
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    return <RedirectHome />;
  }

  if (isSignedIn && !acceptedPrivacyTerms) {
    return <RedirectAcceptPrivacyTerm />;
  }

  const { quote, author } = randomQuote();
  return (
    <Fragment>
      <Helmet>
        <title>Welcome | freeCodeCamp.org</title>
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
            <Col sm={6} smOffset={3} xs={12}>
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
    </Fragment>
  );
}

Welcome.displayName = 'Welcome';
Welcome.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
