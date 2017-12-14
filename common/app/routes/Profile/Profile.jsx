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

import SettingsSkeleton from './Settings-Skeleton.jsx';

import { toggleUserFlag } from './redux';
import {
  updateTitle,

  signInLoadingSelector,
  userSelector
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  (
    {
      username,
      bio,
      location,
      name,
      picture,
      points,
      githubURL,
      email,
      isAvailableForHire,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
    }
  ) => ({
    email,
    location,
    isAvailableForHire,
    isLocked,
    isGithubCool,
    githubURL,
    isLinkedIn,
    isTwitter,
    username,
    name,
    bio,
    picture,
    points
  })
);

const mapDispatchToProps = {
  updateTitle
};

const propTypes = {
  bio: PropTypes.string,
  children: PropTypes.element,
  email: PropTypes.string,
  githubURL: PropTypes.string,
  initialLang: PropTypes.string,
  isAvailableForHire: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  showLoading: PropTypes.bool,
  updateMyLang: PropTypes.func,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

export class Profile extends React.Component {
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
    this.props.updateTitle('Profile');
  }

  render() {
    const {
      bio,
      location,
      name,
      points,
      showLoading,
      username
    } = this.props;

    if (!username && !showLoading) {
      return <SettingsSkeleton />;
    }

    return (
      <ChildContainer>
        <div className='container profile-container'>
          <div>
          <Row>
            <Col md={ 4 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='/settings'
                >
                Update my settings
              </Button>
            </Col>
            <Col md={ 4 } mdPush={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='/logout'
                >
                Sign me out of freeCodeCamp
              </Button>
            </Col>
          </Row>
          { /* Profile image */ }
          { /* Social media links */ }
          <h2 className='text-center'>{ name }</h2>
          <h2 className='text-center'>@{ username }</h2>
          <h2 className='text-center'>{ points } points</h2>
          <h2 className='text-center'>{ location }</h2>
          <p>
            { bio }
          </p>
        </div>
        <div>
          { /* Heatmap */ }
        </div>
        <div>
          <h1 className='text-center'>FreeCodeCamp Certificates</h1>
          <Row>
            <Col sm={ 8 }>
              <p>
                <strong>
                  Responsive Web Design Certificate:
                </strong>
              </p>
            </Col>
            <Col sm={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='responsive-web-design-certification'
                >
                Show
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p>
                <strong>
                  JavaScript Algorithms and Data Structures Certificate:
                </strong>
              </p>
            </Col>
            <Col sm={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='javascript-algorithms-and-data-structures-certification'
                >
                Show
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p>
                <strong>
                  Front End Libraries Certificate:
                </strong>
              </p>
            </Col>
            <Col sm={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='front-end-libraries-certification'
                >
                Show
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p>
                <strong>
                  Data Visualization Certificate:
                </strong>
              </p>
            </Col>
            <Col sm={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='data-visualization-certification'
                >
                Show
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p>
                <strong>
                  APIs and Microservices Certificate:
                </strong>
              </p>
            </Col>
            <Col sm={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='apis-and-microservices-certification'
                >
                Show
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p>
                <strong>
                  Information Security and Quality Assurance Certificate:
                </strong>
              </p>
            </Col>
            <Col sm={ 2 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='information-security-and-quality-assurance-certification'
                >
                Show
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <h1 className='text-center'>Portfolio</h1>
        </div>
        <div>
          <h1 className='text-center'>Timeline</h1>
        </div>
      </div>
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
