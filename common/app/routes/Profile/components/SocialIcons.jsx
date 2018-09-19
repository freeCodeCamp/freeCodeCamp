import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { userByNameSelector } from '../../../redux';

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

const mapStateToProps = createSelector(
  userByNameSelector,
  ({
    githubProfile,
    isLinkedIn,
    isGithub,
    isTwitter,
    isWebsite,
    linkedin,
    twitter,
    website
  }) => ({
    githubProfile,
    isLinkedIn,
    isGithub,
    isTwitter,
    isWebsite,
    linkedin,
    show: (isLinkedIn || isGithub || isTwitter || isWebsite),
    twitter,
    website
  })
);

function mapDispatchToProps() {
  return {};
}

function LinkedInIcon(linkedIn) {
  return (
    <a href={ linkedIn } rel='no-follow' target='_blank'>
      <FontAwesomeIcon
        icon={faLinkedin}
        size='2x'
      />
    </a>
  );
}

function GithubIcon(ghURL) {
  return (
    <a href={ ghURL } rel='no-follow' target='_blank'>
      <FontAwesomeIcon
        icon={faGithub}
        size='2x'
      />
    </a>
  );
}

function WebsiteIcon(website) {
  return (
    <a href={ website } rel='no-follow' target='_blank'>
      <FontAwesomeIcon
        icon={faLink}
        size='2x'
      />
    </a>
  );
}

function TwitterIcon(handle) {
  return (
    <a href={ handle } rel='no-follow' target='_blank' >
      <FontAwesomeIcon
        icon={faTwitter}
        size='2x'
      />
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
    show,
    twitter,
    website
  } = props;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col
        className='text-center social-media-icons'
        sm={ 6 }
        smOffset={ 3 }
        >
        {
          isLinkedIn ? LinkedInIcon(linkedin) : null
        }
        {
          isGithub ? GithubIcon(githubProfile) : null
        }
        {
          isWebsite ? WebsiteIcon(website) : null
        }
        {
          isTwitter ? TwitterIcon(twitter) : null
        }
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';
SocialIcons.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SocialIcons);
