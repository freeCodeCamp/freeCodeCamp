import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FontAwesome from 'react-fontawesome';

import {
  Button,
  Row,
  Col
} from 'react-bootstrap';

import {
  updateTitle,

  signInLoadingSelector,
  userSelector
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';

import Portfolio from './Portfolio.jsx';
import Certificates from './Certificates.jsx';
import Timeline from './Timeline.jsx';

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
      isFrontEndCert,
      isBackEndCert,
      isDataVisCert,
      isFullStackCert,
      isGithubCool,
      isTwitter,
      isLinkedIn
    }
  ) => ({
    email,
    location,
    isAvailableForHire,
    isLocked,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert,
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
  isBackEndCert: PropTypes.bool,
  isDataVisCert: PropTypes.bool,
  isFrontEndCert: PropTypes.bool,
  isFullStackCert: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
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
      isFrontEndCert,
      isBackEndCert,
      isDataVisCert,
      isFullStackCert,
      location,
      name,
      picture,
      points,
      username
    } = this.props;

    return (
      <ChildContainer>
        <div className='container profile-container'>
          <div>
            <Row>
              <Col md={ 4 } mdPush={ 1 }>
                <Button
                  block={ true }
                  bsSize='lg'
                  bsStyle='primary'
                  href='/settings'
                  >
                  Update my settings
                </Button>
              </Col>
              <Col md={ 4 } mdPush={ 3 }>
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
            <br />
            <Row>
              <Col className='avatar-container'>
                  <img
                    alt={ username + '\' profile picture' }
                    className='avatar'
                    src={ picture }
                  />
              </Col>
            </Row>
            <br />
            <Row>
              <Col
                className='text-center social-media-icons'
                sm={ 6 }
                smOffset={ 3 }
                >
                <a href={ 'mailto:' }>
                  <FontAwesome
                    name='envelope-o'
                    size='2x'
                  />
                </a>
                <a href={ 'https://linkedin.com/' }>
                  <FontAwesome
                    name='linkedin'
                    size='2x'
                  />
                </a>
                <a href={ 'https://github.com/' }>
                  <FontAwesome
                    name='github'
                    size='2x'
                  />
                </a>
                <a href={ '' }>
                  <FontAwesome
                    name='link'
                    size='2x'
                  />
                </a>
                <a href={ 'https://twitter.com/' }>
                  <FontAwesome
                    name='twitter'
                    size='2x'
                  />
                </a>
              </Col>
            </Row>
            <br/>
            <h2 className='text-center name'>{ name }</h2>
            <h4 className='text-center username'>@{ username }</h4>
            <h4 className='text-center location'>{ location }</h4>
            <br />
            <h3 className='text-center points'>{ points } points</h3>
            <br/>
            <p className='bio'>{ bio }</p>
          </div>
          <div className='heatmap-container'/>
          <div>
            <h2 className='text-center'>FreeCodeCamp Certificates</h2>
            <br />
            <Certificates
              isBackEndCert={isBackEndCert}
              isDataVisCert={isDataVisCert}
              isFrontEndCert={isFrontEndCert}
              isFullStackCert={isFullStackCert}
              username={username}
            />
          </div>
          <div>
            <h2 className='text-center'>Portfolio</h2>
            <Portfolio />
          </div>
          <div>
            <h2 className='text-center'>Timeline</h2>
            <Timeline className='timelime-container' />
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
