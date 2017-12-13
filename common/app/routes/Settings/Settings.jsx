import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Button, Row, Col, FormControl, ControlLabel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import FA from 'react-fontawesome';
import classnames from 'classnames';

import ns from './ns.json';
import AccountSettings from './Account-Settings.jsx';
import LockedSettings from './Locked-Settings.jsx';
import JobSettings from './Job-Settings.jsx';
import SocialSettings from './Social-Settings.jsx';
import EmailSettings from './Email-Settings.jsx';
import InternetSettings from './Internet-Settings.jsx';
import LanguageSettings from './Language-Settings.jsx';
import SettingsSkeleton from './Settings-Skeleton.jsx';

import { toggleUserFlag } from './redux';
import {
  toggleNightMode,
  updateTitle,

  signInLoadingSelector,
  userSelector,
  themeSelector,
  hardGoTo
} from '../../redux';

const mapStateToProps = createSelector(
  userSelector,
  themeSelector,
  signInLoadingSelector,
  (
    {
      username,
      email,
      isAvailableForHire,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail
    },
    theme,
    showLoading,
  ) => ({
    currentTheme: theme,
    email,
    isAvailableForHire,
    isGithubCool,
    isLinkedIn,
    isLocked,
    isTwitter,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    showLoading,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  toggleIsAvailableForHire: () => toggleUserFlag('isAvailableForHire'),
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail'),
  toggleNightMode,
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  updateTitle
};

const propTypes = {
  children: PropTypes.element,
  currentTheme: PropTypes.string,
  email: PropTypes.string,
  hardGoTo: PropTypes.func.isRequired,
  initialLang: PropTypes.string,
  isAvailableForHire: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  showLoading: PropTypes.bool,
  toggleIsAvailableForHire: PropTypes.func.isRequired,
  toggleIsLocked: PropTypes.func.isRequired,
  toggleMonthlyEmail: PropTypes.func.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
  toggleNotificationEmail: PropTypes.func.isRequired,
  toggleQuincyEmail: PropTypes.func.isRequired,
  updateMyLang: PropTypes.func,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

export class Settings extends React.Component {
  constructor(...props) {
    super(...props);
    this.updateMyLang = this.updateMyLang.bind(this);
  }

  updateMyLang(e) {
    e.preventDefault();
    const lang = e.target.value;
    this.props.updateMyLang(lang);
  }

  componentWillMount() {
    this.props.updateTitle('Settings');
  }
  componentWillReceiveProps({ username, showLoading, hardGoTo }) {
    if (!username && !showLoading) {
      hardGoTo('/signup');
    }
  }

  render() {
    const {
      currentTheme,
      email,
      isAvailableForHire,
      isGithubCool,
      isLinkedIn,
      isLocked,
      isTwitter,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      showLoading,
      toggleIsAvailableForHire,
      toggleIsLocked,
      toggleMonthlyEmail,
      toggleNightMode,
      toggleNotificationEmail,
      toggleQuincyEmail,
      username
    } = this.props;

    if (!username && showLoading) {
      return <SettingsSkeleton />;
    }

    if (children) {
      return (
        <ChildContainer>
          { children }
        </ChildContainer>
      );
    }

    return (
      <ChildContainer>
        <div className='container'>
          <h2>Account Settings</h2>
          <AccountSettings
            toggleNightMode={ toggleNightMode }
            isLocked={ isLocked }
            toggleIsLocked={ toggleIsLocked }
          />
          <hr />
          <h2>Email Settings</h2>
          <EmailSettings
            email={ email }
            sendMonthlyEmail={ sendMonthlyEmail }
            sendNotificationEmail={ sendNotificationEmail }
            sendQuincyEmail={ sendQuincyEmail }
            toggleMonthlyEmail={ toggleMonthlyEmail }
            toggleNotificationEmail={ toggleNotificationEmail }
            toggleQuincyEmail={ toggleQuincyEmail }
          />
          <hr />
          <h2>YOUR INTERNET PRESENCE</h2>
          { /* Give InternetSettings component the requires properties */ }
          <InternetSettings

          />
          <hr />

          { /* Split the below into other files */ }
          <h2>YOUR FREECODECAMP PROJECT</h2>
          <p>
            Add links to the live demos of your projects as you finish them.
            Then, once you've added all 5 projects required for a certificate,
            you can claim it.
          </p>
          <h3>RESPONSIVE WEB DESIGN CERTIFICATE</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='tributePage'>
                Tribute Page
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='tributePage'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='surveyForm'>
                Survey Form
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='surveyForm'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='productLandingPage'>
                Product Landing Page
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='productLandingPage'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='technicalDocumentationPage'>
                Technical Documentation Page
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='technicalDocumentationPage'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='personalPortfolioPage'>
                Personal Portfolio Page
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='personalPortfolioPage'
              />
            </Col>
          </Row>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className=''
          >
            Claim
          </Button>
          <h3>JAVASCRIPT ALGORITHMS AND DATA STRUCTURES CERTIFICATE</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='project1'>
                Project 1
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='project1'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='project2'>
                Project 2
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='project2'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='project2'>
                Project 2
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='project2'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='project4'>
                Project 4
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='project4'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='project5'>
                Project 5
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='project5'
              />
            </Col>
          </Row>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className=''
          >
            Claim
          </Button>
          <h3>FRONT END LIBRARIES CERTIFICATE</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='randomQuoteMachine'>
                Random Quote Machine
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='randomQuoteMachine'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='markdownPreviewer'>
                Markdown Previewer
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='markdownPreviewer'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='drumMachine'>
                Drum Machine
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='drumMachine'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='javascriptCalculator'>
                JavaScript Calculator
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='javascriptCalculator'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='pomodoroClock'>
                Pomodoro Clock
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='pomodoroClock'
              />
            </Col>
          </Row>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className=''
          >
            Claim
          </Button>
          <h3>DATA VISUALISATION CERTIFICATE</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='visualiseBarChart'>
                Visualise Data with a Bar Chart
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='visualiseBarChart'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='visualiseScatterplotGraph'>
                Visualise Data with a Scatterplot Graph
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='visualiseScatterplotGraph'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='visualiseHeatmap'>
                Visualise Data with a Heatmap
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='visualiseHeatmap'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='visualiseChoroplethMap'>
                Visualise Data with a Choropleth Map
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='visualiseChoroplethMap'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='visualiseTreemapDiagram'>
                Visualise Data with a Treemap Diagram
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='visualiseTreemapDiagram'
              />
            </Col>
          </Row>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className=''
          >
            Claim
          </Button>
          <h3>APIS AND MICROSERVICES CERTIFICATE</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='timestampMicroservice'>
                Timestamp Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='timestampMicroservice'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='requestHeaderParserMicroservice'>
                Request Header Parser Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='requestHeaderParserMicroservice'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='urlShortnerMicroservice'>
                URL Shortener Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='urlShortnerMicroservice'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='exersiceTrackerMicroservice'>
                Exercise Tracker Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='exersiceTrackerMicroservice'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='fileMetadataMicroservice'>
                File Metadata Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='fileMetadataMicroservice'
              />
            </Col>
          </Row>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className=''
          >
            Claim
          </Button>
          <h3>INFORMATION SECURITYAND QUALITYASSURANCE CERTIFICATE</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='metricImperialConverter'>
                Metric-Imperial Converter
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='metricImperialConverter'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='issueTracker'>
                Issue Tracker
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='issueTracker'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='personalLibrary'>
                Personal Library
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='personalLibrary'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='stockPriceChecker'>
                Stock Price Checker
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='stockPriceChecker'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='anonymousMessageBoard'>
                Anonymous Message Board
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='anonymousMessageBoard'
              />
            </Col>
          </Row>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className=''
          >
            Claim
          </Button>
          <hr />
          <h2>YOUR PORTFOLIO</h2>
          <p>
            Share your non-FreeCodeCamp projects, articles or accepted
            pull requests:
          </p>
          <Row>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='title'
                type='input'
                id='portfolio1Title'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='description'
                type='input'
                id='portfolio1Description'
              />
            </Col>
            <Col xs={ 4 } xsPush={ 1 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='portfolio1Url'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='title'
                type='input'
                id='portfolio2Title'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='description'
                type='input'
                id='portfolio2Description'
              />
            </Col>
            <Col xs={ 4 } xsPush={ 1 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='portfolio2Url'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='title'
                type='input'
                id='portfolio3Title'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='description'
                type='input'
                id='portfolio3Description'
              />
            </Col>
            <Col xs={ 4 } xsPush={ 1 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='portfolio3Url'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='title'
                type='input'
                id='portfolio4Title'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='description'
                type='input'
                id='portfolio4Description'
              />
            </Col>
            <Col xs={ 4 } xsPush={ 1 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='portfolio4Url'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='title'
                type='input'
                id='portfolio5Title'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='description'
                type='input'
                id='portfolio5Description'
              />
            </Col>
            <Col xs={ 4 } xsPush={ 1 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='URL'
                type='input'
                id='portfolio5Url'
              />
            </Col>
          </Row>
          <hr />
          <h2>TIMELINE</h2>



        </div>
      </ChildContainer>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
