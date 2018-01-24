import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  Row,
  Col
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import { userSelector } from '../../../redux';

const propTypes = {
  email: PropTypes.string,
  githubURL: PropTypes.string,
  isGithub: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isPublicEmail: PropTypes.bool,
  isTwitter: PropTypes.bool,
  isWebsite: PropTypes.bool,
  linkedIn: PropTypes.string,
  twitter: PropTypes.string,
  website: PropTypes.string
};

const mapStateToProps = createSelector(
  userSelector,
  ({
    email,
    githubURL,
    isLinkedIn,
    isGithub,
    isPublicEmail,
    isTwitter,
    isWebsite,
    linkedIn,
    twitter,
    website
  }) => ({
    email,
    githubURL,
    isLinkedIn,
    isGithub,
    isPublicEmail,
    isTwitter,
    isWebsite,
    linkedIn,
    twitter,
    website
  })
);

function mapDispatchToProps() {
  return {};
}

function MailIcon(email) {
  return (
    <a href={ `mailto:${email}` } rel='no-follow' target='_blank'>
      <FontAwesome
        name='envelope-o'
        size='2x'
      />
    </a>
  );
}

function LinkedInIcon(linkedIn) {
  return (
    <a href={ linkedIn } rel='no-follow' target='_blank'>
      <FontAwesome
        name='linkedin'
        size='2x'
      />
    </a>
  );
}

function githubIcon(ghURL) {
  return (
    <a href={ ghURL } rel='no-follow' target='_blank'>
      <FontAwesome
        name='github'
        size='2x'
      />
    </a>
  );
}

function WebsiteIcon(website) {
  return (
    <a href={ website } rel='no-follow' target='_blank'>
      <FontAwesome
        name='link'
        size='2x'
      />
    </a>
  );
}

function TwitterIcon(handle) {
  return (
    <a
      href={
        `https://twitter.com/${handle.replace(/^@/, '')}`
      }
      rel='no-follow'
      target='_blank'
      >
      <FontAwesome
        name='twitter'
        size='2x'
      />
    </a>
  );
}

function SocialIcons(props) {
  const {
    email,
    githubURL,
    isLinkedIn,
    isGithub,
    isPublicEmail,
    isTwitter,
    isWebsite,
    linkedIn,
    twitter,
    website
  } = props;
  return (
    <Row>
      <Col
        className='text-center social-media-icons'
        sm={ 6 }
        smOffset={ 3 }
        >
        {
          isPublicEmail ? MailIcon(email) : null
        }
        {
          isLinkedIn ? LinkedInIcon(linkedIn) : null
        }
        {
          isGithub ? githubIcon(githubURL) : null
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
