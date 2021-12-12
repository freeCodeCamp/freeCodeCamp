import {
  faLinkedin,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './social-icons.css';

interface SocialIconsProps {
  email?: string;
  githubProfile: string;
  isGithub: boolean;
  isLinkedIn: boolean;
  isTwitter: boolean;
  isWebsite: boolean;
  linkedin: string;
  show?: boolean;
  twitter: string;
  usernameDisplay: string;
  website: string;
}

function LinkedInIcon(linkedIn: string, usernameDisplay: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.linkedin', { usernameDisplay })}
      href={linkedIn}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </a>
  );
}

function GithubIcon(ghURL: string, usernameDisplay: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.github', { usernameDisplay })}
      href={ghURL}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
  );
}

function WebsiteIcon(website: string, usernameDisplay: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.website', { usernameDisplay })}
      href={website}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLink} size='2x' />
    </a>
  );
}

function TwitterIcon(handle: string, usernameDisplay: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.twitter', { usernameDisplay })}
      href={handle}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faTwitter} size='2x' />
    </a>
  );
}

function SocialIcons(props: SocialIconsProps): JSX.Element | null {
  const {
    githubProfile,
    isLinkedIn,
    isGithub,
    isTwitter,
    isWebsite,
    linkedin,
    twitter,
    usernameDisplay,
    website
  } = props;
  const show = isLinkedIn || isGithub || isTwitter || isWebsite;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col className='text-center social-media-icons' sm={6} smOffset={3}>
        {isLinkedIn ? LinkedInIcon(linkedin, usernameDisplay) : null}
        {isGithub ? GithubIcon(githubProfile, usernameDisplay) : null}
        {isWebsite ? WebsiteIcon(website, usernameDisplay) : null}
        {isTwitter ? TwitterIcon(twitter, usernameDisplay) : null}
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';

export default SocialIcons;
