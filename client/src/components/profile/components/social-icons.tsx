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
  linkedin: string;
  show?: boolean;
  twitter: string;
  username: string;
  website: string;
}

function LinkedInIcon(linkedIn: string, username: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.linkedin', { username: username })}
      href={linkedIn}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </a>
  );
}

function GithubIcon(ghURL: string, username: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.github', { username: username })}
      href={ghURL}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
  );
}

function WebsiteIcon(website: string, username: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.website', { username: username })}
      href={website}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLink} size='2x' />
    </a>
  );
}

function TwitterIcon(handle: string, username: string): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.twitter', { username: username })}
      href={handle}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faTwitter} size='2x' />
    </a>
  );
}

function SocialIcons(props: SocialIconsProps): JSX.Element | null {
  const { githubProfile, linkedin, twitter, username, website } = props;
  const show = linkedin || githubProfile || website || twitter;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col className='text-center social-media-icons' sm={6} smOffset={3}>
        {linkedin ? LinkedInIcon(linkedin, username) : null}
        {githubProfile ? GithubIcon(githubProfile, username) : null}
        {website ? WebsiteIcon(website, username) : null}
        {twitter ? TwitterIcon(twitter, username) : null}
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';

export default SocialIcons;
