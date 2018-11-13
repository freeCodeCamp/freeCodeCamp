import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './social-icons.css';

const propTypes = {
  email: PropTypes.string,
  githubProfile: PropTypes.string,
  isGithub: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isTwitter: PropTypes.bool,
  isWebsite: PropTypes.bool,
  linkedin: PropTypes.string,
  show: PropTypes.bool,
  twitter: PropTypes.string,
  website: PropTypes.string
};

function LinkedInIcon(linkedIn) {
  return (
    <a href={linkedIn} rel='noopener noreferrer' target='_blank'>
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </a>
  );
}

function GithubIcon(ghURL) {
  return (
    <a href={ghURL} rel='noopener noreferrer' target='_blank'>
      <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
  );
}

function WebsiteIcon(website) {
  return (
    <a href={website} rel='noopener noreferrer' target='_blank'>
      <FontAwesomeIcon icon={faLink} size='2x' />
    </a>
  );
}

function TwitterIcon(handle) {
  return (
    <a href={handle} rel='noopener noreferrer' target='_blank'>
      <FontAwesomeIcon icon={faTwitter} size='2x' />
    </a>
  );
}

function SocialIcons(props) {
  const {
    githubProfile,
    isLinkedIn,
    isGithub,
    isTwitter,
    isWebsite,
    linkedin,
    twitter,
    website
  } = props;
  const show = isLinkedIn || isGithub || isTwitter || isWebsite;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col className='text-center social-media-icons' sm={6} smOffset={3}>
        {isLinkedIn ? LinkedInIcon(linkedin) : null}
        {isGithub ? GithubIcon(githubProfile) : null}
        {isWebsite ? WebsiteIcon(website) : null}
        {isTwitter ? TwitterIcon(twitter) : null}
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';
SocialIcons.propTypes = propTypes;

export default SocialIcons;
