import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Alert,
  Button,
  Grid
} from 'react-bootstrap';


import {
  updateTitle,
  isSignedInSelector,
  signInLoadingSelector,
  usernameSelector,
  userByNameSelector,
  fetchOtherUser
} from '../../redux';
import { userFoundSelector } from './redux';
import { paramsSelector } from '../../Router/redux';
import ns from './ns.json';
import ChildContainer from '../../Child-Container.jsx';
import { Link } from '../../Router';
import CamperHOC from './components/CamperHOC.jsx';
import Portfolio from './components/Portfolio.jsx';
import Certificates from './components/Certificates.jsx';
import Timeline from './components/Timeline.jsx';
import HeatMap from './components/HeatMap.jsx';
import { FullWidthRow, Loader } from '../../helperComponents';

const mapStateToProps = createSelector(
  isSignedInSelector,
  userByNameSelector,
  paramsSelector,
  usernameSelector,
  signInLoadingSelector,
  userFoundSelector,
  (
    isSignedIn,
    { isLocked, username: requestedUsername },
    { username: paramsUsername, lang },
    currentUsername,
    showLoading,
    isUserFound
  ) => ({
    isSignedIn,
    currentUsername,
    isCurrentUserProfile: paramsUsername === currentUsername,
    isLocked,
    isUserFound,
    fetchOtherUserCompleted: typeof isUserFound === 'boolean',
    paramsUsername,
    lang,
    requestedUsername,
    showLoading
  })
);

const mapDispatchToProps = {
  fetchOtherUser,
  updateTitle
};

const propTypes = {
  currentUsername: PropTypes.string,
  fetchOtherUser: PropTypes.func.isRequired,
  fetchOtherUserCompleted: PropTypes.bool,
  isCurrentUserProfile: PropTypes.bool,
  isLocked: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  isUserFound: PropTypes.bool,
  lang: PropTypes.string,
  paramsUsername: PropTypes.string,
  requestedUsername: PropTypes.string,
  showLoading: PropTypes.bool,
  updateTitle: PropTypes.func.isRequired
};

class Profile extends Component {

  componentWillMount() {
    this.props.updateTitle('Profile');
  }
  componentDidUpdate() {
    const { requestedUsername, currentUsername, paramsUsername } = this.props;
    if (!requestedUsername && paramsUsername !== currentUsername) {
      this.props.fetchOtherUser(paramsUsername);
    }
  }

  renderRequestedProfile() {
    const {
      fetchOtherUserCompleted,
      isLocked,
      isUserFound,
      isCurrentUserProfile,
      lang = 'en',
      paramsUsername
    } = this.props;
    const takeMeToChallenges = (
      <a href={`/${lang}/challenges/current-challenge`}>
        <Button bsSize='lg' bsStyle='primary'>
          Take me to the Challenges
        </Button>
      </a>
    );
    if (isLocked) {
      return (
        <div className='full-size'>
          <h3>
            {
              `${paramsUsername} has not made their profile public. `
            }
          </h3>
          <Alert bsStyle='info'>
            <p>
              {
                'In order to view their progress through the freeCodeCamp ' +
                'curriculum, they need to make all of thie solutions public'
              }
            </p>
          </Alert>
          { takeMeToChallenges }
        </div>
      );
    }
    if (!isCurrentUserProfile && (fetchOtherUserCompleted && !isUserFound)) {
      return (
        <div className='full-size'>
          <Alert bsStyle='info'>
            <p>
              { `We could not find a user by the name of "${paramsUsername}"` }
            </p>
          </Alert>
          { takeMeToChallenges }
        </div>
      );
    }
    return (
      <div>
        <CamperHOC />
        <HeatMap />
        <Certificates />
        <Portfolio />
        <Timeline className='timelime-container' />
      </div>
    );
  }

  renderReportUserButton() {
    const {
      isSignedIn,
      fetchOtherUserCompleted,
      isCurrentUserProfile,
      isUserFound,
      paramsUsername
    } = this.props;

    return (
      !isSignedIn ||
      isCurrentUserProfile ||
      (fetchOtherUserCompleted && !isUserFound)
    ) ?
    null :
    (
      <FullWidthRow>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='warning'
            href={`/user/${paramsUsername}/report-user`}
            >
            Report Profile
          </Button>
        </FullWidthRow>
      );
  }

  renderSettingsLink() {
    const { isCurrentUserProfile } = this.props;
    return isCurrentUserProfile ?
    <FullWidthRow>
        <Link to='/settings'>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Update my settings
          </Button>
        </Link>
      </FullWidthRow> :
      null;
    }

  render() {
    const {
      isCurrentUserProfile,
      showLoading,
      fetchOtherUserCompleted
    } = this.props;
    if (isCurrentUserProfile && showLoading) {
      return <Loader />;
    }
    if (!isCurrentUserProfile && !fetchOtherUserCompleted) {
      return <Loader />;
    }
    return (
      <ChildContainer>
        <Grid className={`${ns}-container`}>
          { this.renderSettingsLink() }
          { this.renderRequestedProfile() }
          { this.renderReportUserButton() }
        </Grid>
      </ChildContainer>
    );
  }
}

Profile.displayName = 'Profile';
Profile.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
