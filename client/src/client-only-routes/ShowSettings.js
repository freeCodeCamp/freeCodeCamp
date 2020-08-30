import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Button } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { apiLocation } from '../../config/env.json';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';
import { submitNewAbout, updateUserFlag, verifyCert } from '../redux/settings';
import { createFlashMessage } from '../components/Flash/redux';

import { FullWidthRow, Link, Loader, Spacer } from '../components/helpers';
import About from '../components/settings/About';
import Privacy from '../components/settings/Privacy';
import Email from '../components/settings/Email';
import Internet from '../components/settings/Internet';
import Portfolio from '../components/settings/Portfolio';
import Honesty from '../components/settings/Honesty';
import Certification from '../components/settings/Certification';
import DangerZone from '../components/settings/DangerZone';

const propTypes = {
  createFlashMessage: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired,
  submitNewAbout: PropTypes.func.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
  updateInternetSettings: PropTypes.func.isRequired,
  updateIsHonest: PropTypes.func.isRequired,
  updatePortfolio: PropTypes.func.isRequired,
  updateQuincyEmail: PropTypes.func.isRequired,
  user: PropTypes.shape({
    about: PropTypes.string,
    completedChallenges: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        solution: PropTypes.string,
        githubLink: PropTypes.string,
        challengeType: PropTypes.number,
        completedDate: PropTypes.number,
        files: PropTypes.array
      })
    ),
    email: PropTypes.string,
    githubProfile: PropTypes.string,
    is2018DataVisCert: PropTypes.bool,
    isApisMicroservicesCert: PropTypes.bool,
    isBackEndCert: PropTypes.bool,
    isDataVisCert: PropTypes.bool,
    isEmailVerified: PropTypes.bool,
    isFrontEndCert: PropTypes.bool,
    isFrontEndLibsCert: PropTypes.bool,
    isFullStackCert: PropTypes.bool,
    isHonest: PropTypes.bool,
    isInfosecQaCert: PropTypes.bool,
    isQaCertV7: PropTypes.bool,
    isInfosecCertV7: PropTypes.bool,
    isJsAlgoDataStructCert: PropTypes.bool,
    isRespWebDesignCert: PropTypes.bool,
    isSciCompPyCertV7: PropTypes.bool,
    isDataAnalysisPyCertV7: PropTypes.bool,
    isMachineLearningPyCertV7: PropTypes.bool,
    linkedin: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    points: PropTypes.number,
    portfolio: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        url: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string
      })
    ),
    sendQuincyEmail: PropTypes.bool,
    theme: PropTypes.string,
    twitter: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string
  }),
  verifyCert: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading, user, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate,
  submitNewAbout,
  toggleNightMode: theme => updateUserFlag({ theme }),
  updateInternetSettings: updateUserFlag,
  updateIsHonest: updateUserFlag,
  updatePortfolio: updateUserFlag,
  updateQuincyEmail: sendQuincyEmail => updateUserFlag({ sendQuincyEmail }),
  verifyCert
};

export function ShowSettings(props) {
  const {
    createFlashMessage,
    isSignedIn,
    submitNewAbout,
    toggleNightMode,
    user: {
      completedChallenges,
      email,
      is2018DataVisCert,
      isApisMicroservicesCert,
      isJsAlgoDataStructCert,
      isBackEndCert,
      isDataVisCert,
      isFrontEndCert,
      isInfosecQaCert,
      isQaCertV7,
      isInfosecCertV7,
      isFrontEndLibsCert,
      isFullStackCert,
      isRespWebDesignCert,
      isSciCompPyCertV7,
      isDataAnalysisPyCertV7,
      isMachineLearningPyCertV7,
      isEmailVerified,
      isHonest,
      sendQuincyEmail,
      username,
      about,
      picture,
      points,
      theme,
      location,
      name,
      githubProfile,
      linkedin,
      twitter,
      website,
      portfolio
    },
    navigate,
    showLoading,
    updateQuincyEmail,
    updateInternetSettings,
    updatePortfolio,
    updateIsHonest,
    verifyCert
  } = props;

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin?returnTo=settings`);
    return <Loader fullScreen={true} />;
  }

  return (
    <Fragment>
      <Helmet title='Settings | freeCodeCamp.org'></Helmet>
      <Grid>
        <main>
          <Spacer size={2} />
          <FullWidthRow className='button-group'>
            <Link
              className='btn-invert btn btn-lg btn-primary btn-block'
              to={`/${username}`}
            >
              Show me my public portfolio
            </Link>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
              href={`${apiLocation}/signout`}
            >
              Sign me out of freeCodeCamp
            </Button>
          </FullWidthRow>
          <Spacer />
          <h1 className='text-center' style={{ overflowWrap: 'break-word' }}>
            {`Account Settings for ${username}`}
          </h1>
          <About
            about={about}
            currentTheme={theme}
            location={location}
            name={name}
            picture={picture}
            points={points}
            submitNewAbout={submitNewAbout}
            toggleNightMode={toggleNightMode}
            username={username}
          />
          <Spacer />
          <Privacy />
          <Spacer />
          <Email
            email={email}
            isEmailVerified={isEmailVerified}
            sendQuincyEmail={sendQuincyEmail}
            updateQuincyEmail={updateQuincyEmail}
          />
          <Spacer />
          <Internet
            githubProfile={githubProfile}
            linkedin={linkedin}
            twitter={twitter}
            updateInternetSettings={updateInternetSettings}
            website={website}
          />
          <Spacer />
          <Portfolio portfolio={portfolio} updatePortfolio={updatePortfolio} />
          <Spacer />
          <Honesty isHonest={isHonest} updateIsHonest={updateIsHonest} />
          <Spacer />
          <Certification
            completedChallenges={completedChallenges}
            createFlashMessage={createFlashMessage}
            is2018DataVisCert={is2018DataVisCert}
            isApisMicroservicesCert={isApisMicroservicesCert}
            isBackEndCert={isBackEndCert}
            isDataAnalysisPyCertV7={isDataAnalysisPyCertV7}
            isDataVisCert={isDataVisCert}
            isFrontEndCert={isFrontEndCert}
            isFrontEndLibsCert={isFrontEndLibsCert}
            isFullStackCert={isFullStackCert}
            isHonest={isHonest}
            isInfosecCertV7={isInfosecCertV7}
            isInfosecQaCert={isInfosecQaCert}
            isJsAlgoDataStructCert={isJsAlgoDataStructCert}
            isMachineLearningPyCertV7={isMachineLearningPyCertV7}
            isQaCertV7={isQaCertV7}
            isRespWebDesignCert={isRespWebDesignCert}
            isSciCompPyCertV7={isSciCompPyCertV7}
            username={username}
            verifyCert={verifyCert}
          />
          <Spacer />
          <DangerZone />
        </main>
      </Grid>
    </Fragment>
  );
}

ShowSettings.displayName = 'ShowSettings';
ShowSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSettings);
