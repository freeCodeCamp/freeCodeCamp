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
import { connect } from 'react-redux';
import './social-icons.css';
import { userSocialSelector } from '../../../redux/selectors';

interface SocialProps {
  email?: string;
  githubProfile: string;
  linkedin: string;
  show?: boolean;
  twitter: string;
  username: string;
  website: string;
}

interface IconProps {
  href: string;
  username: string;
}

const mapStateToProps = (state: unknown, props: { username: string }) => ({
  socials: userSocialSelector(props.username) as unknown as SocialProps
});

function LinkedInIcon({ href, username }: IconProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.linkedin', { username })}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </a>
  );
}

function GitHubIcon({ href, username }: IconProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.github', { username })}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
  );
}

function WebsiteIcon({ href, username }: IconProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.website', { username })}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faLink} size='2x' />
    </a>
  );
}

function TwitterIcon({ href, username }: IconProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <a
      aria-label={t('aria.twitter', { username })}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={faXTwitter} size='2x' />
    </a>
  );
}

function SocialIcons({
  username,
  socials: { githubProfile, linkedin, twitter, website }
}: {
  socials: SocialProps;
  username: string;
}): JSX.Element | null {
  const show = linkedin || githubProfile || website || twitter;
  if (!show) {
    return null;
  }

  return (
    <Row>
      <Col className='social-icons-row'>
        {linkedin ? <LinkedInIcon href={linkedin} username={username} /> : null}
        {githubProfile ? (
          <GitHubIcon href={githubProfile} username={username} />
        ) : null}
        {website ? <WebsiteIcon href={website} username={username} /> : null}
        {twitter ? <TwitterIcon href={twitter} username={username} /> : null}
      </Col>
    </Row>
  );
}

SocialIcons.displayName = 'SocialIcons';

export default connect(mapStateToProps)(SocialIcons);
