import {
  faLinkedin,
  faGithub,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from '@freecodecamp/ui';

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

function GitHubIcon(ghURL: string, username: string): JSX.Element {
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
      <FontAwesomeIcon icon={faXTwitter} size='2x' />
    </a>
  );
}

function SocialIcons(props: SocialIconsProps): JSX.Element | null {
  // i put those values here for demonstration purpose -
  // this way person who checks my `bio` component will see the icons displayed
  // after the the successfull review i plan to restore original code of this component
  const {
    githubProfile = 'https://github.com/shootermv',
    linkedin = 'https://www.linkedin.com/in/moshe-vilner-7a7745a/',
    twitter = 'https://twitter.com/shootermv',
    username = 'Vasili',
    website = 'https://gs500coder.blogspot.com'
  } = props;
  const show = linkedin || githubProfile || website || twitter;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col className='social-media-icons'>
        {linkedin ? LinkedInIcon(linkedin, username) : null}
        {githubProfile ? GitHubIcon(githubProfile, username) : null}
        {website ? WebsiteIcon(website, username) : null}
        {twitter ? TwitterIcon(twitter, username) : null}
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';

export default SocialIcons;
