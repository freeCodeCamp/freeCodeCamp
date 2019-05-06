import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  username: PropTypes.string,
  website: PropTypes.string
};

function LinkedInIcon(linkedIn, username) {
  return (
    <a
      aria-label={`Link to ${username}'s LinkedIn`}
      href={linkedIn}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </a>
  );
}

function GithubIcon(ghURL, username) {
  return (
    <a
      aria-label={`Link to ${username}'s Github`}
      href={ghURL}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
  );
}

function WebsiteIcon(website, username) {
  return (
    <a
      aria-label={`Link to ${username}'s website`}
      href={website}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLink} size='2x' />
    </a>
  );
}

function TwitterIcon(handle, username) {
  return (
    <a
      aria-label={`Link to ${username}'s Twitter`}
      href={handle}
      rel='noopener noreferrer'
      target='_blank'
    >
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
    username,
    website
  } = props;
  const show = isLinkedIn || isGithub || isTwitter || isWebsite;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col className='text-center social-media-icons' sm={6} smOffset={3}>
        {isLinkedIn ? LinkedInIcon(linkedin, username) : null}
        {isGithub ? GithubIcon(githubProfile, username) : null}
        {isWebsite ? WebsiteIcon(website, username) : null}
        {isTwitter ? TwitterIcon(twitter, username) : null}
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';
SocialIcons.propTypes = propTypes;

export default SocialIcons;
