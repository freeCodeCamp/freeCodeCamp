import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import { CurrentChallengeLink, FullWidthRow, Spacer } from '../helpers';
import Camper from './components/Camper';
import HeatMap from './components/HeatMap';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Timeline from './components/TimeLine';

const propTypes = {
  isSessionUser: PropTypes.bool,
  user: PropTypes.shape({
    profileUI: PropTypes.shape({
      isLocked: PropTypes.bool,
      showAbout: PropTypes.bool,
      showCerts: PropTypes.bool,
      showHeatMap: PropTypes.bool,
      showLocation: PropTypes.bool,
      showName: PropTypes.bool,
      showPoints: PropTypes.bool,
      showPortfolio: PropTypes.bool,
      showTimeLine: PropTypes.bool
    }),
    username: PropTypes.string
  })
};

function TakeMeToTheChallenges() {
  return (
    <CurrentChallengeLink>
      <Button block={true} bsSize='lg' bsStyle='primary' className='btn-invert'>
        Take me to the Challenges
      </Button>
    </CurrentChallengeLink>
  );
}

function renderIsLocked(username) {
  return (
    <Fragment>
      <Helmet>
        <title>Profile | freeCodeCamp.org</title>
      </Helmet>
      <Spacer size={2} />
      <Grid>
        <FullWidthRow>
          <h2 className='text-center'>
            {username} has not made their profile public.
          </h2>
        </FullWidthRow>
        <FullWidthRow>
          <Alert bsStyle='info'>
            <p>
              {username} needs to change their privacy setting in order for you
              to view their profile
            </p>
          </Alert>
        </FullWidthRow>
        <FullWidthRow>
          <TakeMeToTheChallenges />
          <Spacer />
        </FullWidthRow>
      </Grid>
    </Fragment>
  );
}

function renderSettingsButton() {
  return (
    <Fragment>
      <Row>
        <Col sm={4} smOffset={4}>
          <Link to='/settings'>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
            >
              Update my settings
            </Button>
          </Link>
        </Col>
      </Row>
      <Spacer size={2} />
    </Fragment>
  );
}

function Profile({ user, isSessionUser }) {
  const {
    profileUI: {
      isLocked = true,
      showAbout = false,
      showCerts = false,
      showHeatMap = false,
      showLocation = false,
      showName = false,
      showPoints = false,
      showPortfolio = false,
      showTimeLine = false
    },
    calendar,
    completedChallenges,
    streak,
    githubProfile,
    isLinkedIn,
    isGithub,
    isTwitter,
    isWebsite,
    linkedin,
    twitter,
    website,
    name,
    username,
    location,
    points,
    picture,
    portfolio,
    about,
    yearsTopContributor
  } = user;

  if (isLocked) {
    return renderIsLocked(username);
  }
  return (
    <Fragment>
      <Helmet>
        <title>Profile | freeCodeCamp.org</title>
      </Helmet>
      <Spacer size={2} />
      <Grid>
        {isSessionUser ? renderSettingsButton() : null}
        <Camper
          about={showAbout ? about : null}
          githubProfile={githubProfile}
          isGithub={isGithub}
          isLinkedIn={isLinkedIn}
          isTwitter={isTwitter}
          isWebsite={isWebsite}
          linkedin={linkedin}
          location={showLocation ? location : null}
          name={showName ? name : null}
          picture={picture}
          points={showPoints ? points : null}
          twitter={twitter}
          username={username}
          website={website}
          yearsTopContributor={yearsTopContributor}
        />
        {showHeatMap ? <HeatMap calendar={calendar} streak={streak} /> : null}
        {showCerts ? <Certifications username={username} /> : null}
        {showPortfolio ? <Portfolio portfolio={portfolio} /> : null}
        {showTimeLine ? (
          <Timeline completedMap={completedChallenges} username={username} />
        ) : null}
      </Grid>
    </Fragment>
  );
}

Profile.displayName = 'Profile';
Profile.propTypes = propTypes;

export default Profile;
