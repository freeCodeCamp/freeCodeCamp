import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  Button,
  Row,
  Col,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import AccountSettings from './Account-Settings.jsx';
import EmailSettings from './Email-Settings.jsx';
import InternetSettings from './Internet-Settings.jsx';
import SettingsSkeleton from './Settings-Skeleton.jsx';
import UpdateEmail from './routes/update-email';

import { toggleUserFlag, showUpdateEmailViewSelector } from './redux';
import {
  toggleNightMode,
  updateTitle,

  signInLoadingSelector,
  userSelector,
  themeSelector,
  hardGoTo
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';

const mapDispatchToProps = {
  updateTitle,
  toggleNightMode,
  toggleIsAvailableForHire: () => toggleUserFlag('isAvailableForHire'),
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail')
};

const mapStateToProps = createSelector(
  userSelector,
  themeSelector,
  signInLoadingSelector,
  showUpdateEmailViewSelector,
  (
    {
      username,
      bio,
      name,
      picture,
      githubURL,
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
    showUpdateEmailView
  ) => ({
    currentTheme: theme,
    isAvailableForHire,
    showLoading,
    username,
    name,
    email,
    isLocked,    
    isGithubCool,
    githubURL,
    isLinkedIn,
    isTwitter,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    showUpdateEmailView,
    bio,
    picture
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
  bio: PropTypes.string,
  children: PropTypes.element,
  currentTheme: PropTypes.string,
  email: PropTypes.string,
  hardGoTo: PropTypes.func.isRequired,
  githubURL: PropTypes.string,
  initialLang: PropTypes.string,
  isAvailableForHire: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  showLoading: PropTypes.bool,
  showUpdateEmailView: PropTypes.bool,
  theme: PropTypes.string,
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
      bio,
      currentTheme,
      email,
      githubURL,
      isLocked,
      // isAvailableForHire,
      // isGithubCool,
      // isLinkedIn,
      // isTwitter,
      name,
      picture,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      showLoading,
      showUpdateEmailView,
      // toggleIsAvailableForHire,
      toggleIsLocked,
      toggleMonthlyEmail,
      toggleNightMode,
      toggleNotificationEmail,
      toggleQuincyEmail,
      username
    } = this.props;

    if (!username && !showLoading) {
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
        <div className='container settings-container'>
          <h2>Account Settings</h2>

          <br />

          <AccountSettings
            bio={ bio }
            currentTheme={ currentTheme }
            isLocked={ isLocked }
            name={ name }
            picture={ picture }
            toggleIsLocked={ toggleIsLocked }
            toggleNightMode={ toggleNightMode }
            username={ username }
          />

          <hr />

          <h2>Email Settings</h2>

          <br />

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

          <h2>Your internet presence</h2>

          <br />

          <InternetSettings githubURL={ githubURL } />

          <hr />

          <h2>Your FreeCodeCamp Projects</h2>
          <br />
          <p>
            Add links to the live demos of your projects as you finish them.
            Then, once you have added all 5 projects required for a certificate,
            you can claim it.
          </p>
          <h3>Responsive Web Design Certificate</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='tributePage'>
                Tribute Page
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='tributePage'
                placeholder='URL'
                type='input'
                value=''
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
                id='surveyForm'
                placeholder='URL'
                type='input'
                value=''
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
                id='productLandingPage'
                placeholder='URL'
                type='input'
                value=''
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
                id='technicalDocumentationPage'
                placeholder='URL'
                type='input'
                value=''
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
                id='personalPortfolioPage'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <br />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Claim
          </Button>
          <h3>JavaScript Algorithms and Data Structures Certificate</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='palindromeChecker'>
                Palindrome Checker
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='palindromeChecker'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='romanNumeralConverter'>
                Roman Numeral Converter
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='romanNumeralConverter'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='ceasarsCypher'>
                Ceasar's Cypher
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='ceasarsCypher'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='telephoneNumberValidator'>
                Telephone Number Validator
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='telephoneNumberValidator'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='cashRegister'>
                Cash Register
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='cashRegister'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <br />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Claim
          </Button>
          <h3>Front End Libraries Certificate</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='randomQuoteMachine'>
                Random Quote Machine
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='randomQuoteMachine'
                placeholder='URL'
                type='input'
                value=''
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
                id='markdownPreviewer'
                placeholder='URL'
                type='input'
                value=''
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
                id='drumMachine'
                placeholder='URL'
                type='input'
                value=''
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
                id='javascriptCalculator'
                placeholder='URL'
                type='input'
                value=''
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
                id='pomodoroClock'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <br />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Claim
          </Button>
          <h3>Data Visualization Certificate</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='visualiseBarChart'>
                Visualise Data with a Bar Chart
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='visualiseBarChart'
                placeholder='URL'
                type='input'
                value=''
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
                id='visualiseScatterplotGraph'
                placeholder='URL'
                type='input'
                value=''
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
                id='visualiseHeatmap'
                placeholder='URL'
                type='input'
                value=''
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
                id='visualiseChoroplethMap'
                placeholder='URL'
                type='input'
                value=''
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
                id='visualiseTreemapDiagram'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <br />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Claim
          </Button>
          <h3>Apis and Microservices Certificate</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='timestampMicroservice'>
                Timestamp Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='timestampMicroservice'
                placeholder='URL'
                type='input'
                value=''
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
                id='requestHeaderParserMicroservice'
                placeholder='URL'
                type='input'
                value=''
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
                id='urlShortnerMicroservice'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='exerciseTrackerMicroservice'>
                Exercise Tracker Microservice
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='exerciseTrackerMicroservice'
                placeholder='URL'
                type='input'
                value=''
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
                id='fileMetadataMicroservice'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <br />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Claim
          </Button>
          <h3>Information Security and Quality Assurance Certificate</h3>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='metricImperialConverter'>
                Metric-Imperial Converter
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                id='metricImperialConverter'
                placeholder='URL'
                type='input'
                value=''
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
                id='issueTracker'
                placeholder='URL'
                type='input'
                value=''
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
                id='personalLibrary'
                placeholder='URL'
                type='input'
                value=''
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
                id='stockPriceChecker'
                placeholder='URL'
                type='input'
                value=''
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
                id='anonymousMessageBoard'
                placeholder='URL'
                type='input'
                value=''
              />
            </Col>
          </Row>
          <br />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            >
            Claim
          </Button>

          <br />

          <hr />

          <h2>Your Portfolio</h2>
          <p>
            Share your non-FreeCodeCamp projects, articles or accepted
            pull requests:
          </p>
          <Row>
            <Col xs={ 5 }>
              <FormControl
                bsSize='sm'
                className='portfolio-title'
                placeholder='title'
                type='input'
                value=''
              />
              <FormControl
                bsSize='sm'
                className='portfolio-url'
                placeholder='title'
                type='input'
                value=''
              />
            </Col>
            <Col xs={ 7 }>
              <FormControl
                className='portfolio-description'
                componentClass='textarea'
                id='portfolio1Description'
                placeholder='Description'
              />
            </Col>
          </Row>

          <hr />

          <h2>Timeline</h2>
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
