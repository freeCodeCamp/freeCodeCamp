import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import Link from '../helpers/Link';

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
    calendar: PropTypes.object,
    streak: PropTypes.shape({
      current: PropTypes.number,
      longest: PropTypes.number
    }),
    completedChallenges: PropTypes.array,
    portfolio: PropTypes.array,
    about: PropTypes.string,
    githubProfile: PropTypes.string,
    isGithub: PropTypes.bool,
    isLinkedIn: PropTypes.bool,
    isTwitter: PropTypes.bool,
    isWebsite: PropTypes.bool,
    linkedin: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    points: PropTypes.number,
    twitter: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
    yearsTopContributor: PropTypes.array
  })
};

function renderMessage(isSessionUser, username) {
  return isSessionUser ? (
    <Fragment>
      <FullWidthRow>
        <h2 className='text-center'>
          You have not made your portfolio public.
        </h2>
      </FullWidthRow>
      <FullWidthRow>
        <p className='alert alert-info'>
          You need to change your privacy setting in order for your portfolio to
          be seen by others. This is a preview of how your portfolio will look
          when made public.
        </p>
      </FullWidthRow>
      <Spacer />
    </Fragment>
  ) : (
    <Fragment>
      <FullWidthRow>
        <h2 className='text-center'>
          {username} has not made their portfolio public.
        </h2>
      </FullWidthRow>
      <FullWidthRow>
        <p className='alert alert-info'>
          {username} needs to change their privacy setting in order for you to
          view their portfolio.
        </p>
      </FullWidthRow>
      <Spacer />
      <FullWidthRow>
        <CurrentChallengeLink>Take me to the Challenges</CurrentChallengeLink>
      </FullWidthRow>
      <Spacer />
    </Fragment>
  );
}

function renderProfile(user) {
  const {
    profileUI: {
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

  return (
    <Fragment>
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
      <Spacer />
    </Fragment>
  );
}

function Profile({ user, isSessionUser }) {
  const {
    profileUI: { isLocked = true },
    username
  } = user;

  return (
    <Fragment>
      <Helmet>
        <title>Profile | freeCodeCamp.org</title>
      </Helmet>
      <Spacer />
      <Grid>
        {isSessionUser ? (
          <Row>
            <Col sm={4} smOffset={4}>
              <Link className='btn btn-lg btn-primary btn-block' to='/settings'>
                Update my settings
              </Link>
            </Col>
          </Row>
        ) : null}
        <Spacer />
        {isLocked ? renderMessage(isSessionUser, username) : null}
        {!isLocked || isSessionUser ? renderProfile(user) : null}
        {isSessionUser ? null : (
          <Row className='text-center'>
            <Link to={`/user/${username}/report-user`}>Report This User</Link>
          </Row>
        )}
        <Spacer />
      </Grid>
    </Fragment>
  );
}

Profile.displayName = 'Profile';
Profile.propTypes = propTypes;

export default Profile;
