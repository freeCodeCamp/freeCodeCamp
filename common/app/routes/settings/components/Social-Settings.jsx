import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import FA from 'react-fontawesome';
import classnames from 'classnames';

const propTypes = {
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isTwitter: PropTypes.bool
};

export default function SocialSettings({
  isGithubCool,
  isTwitter,
  isLinkedIn
}) {
  const githubCopy = isGithubCool ?
    'Update my profile from GitHub' :
    'Link my GitHub to unlock my portfolio';
  const buttons = [
    <Button
      block={ true }
      bsSize='lg'
      className='btn-link-social btn-github'
      href='/link/github'
      key='github'
      >
      <FA name='github' />
      { githubCopy }
    </Button>
  ];
  const socials = [
    {
      isActive: isTwitter,
      identifier: 'twitter',
      text: 'Twitter'
    },
    {
      isActive: isLinkedIn,
      identifier: 'linkedin',
      text: 'LinkedIn'
    }
  ];
  if (isGithubCool) {
    socials.forEach(({ isActive, identifier, text }) => {
      const socialClass = classnames(
        'btn-link-social',
        `btn-${identifier}`,
        { active: isActive }
      );
      const socialLink = isActive ?
        `/account/unlink/${identifier}` :
        `/link/${identifier}`;
      const socialText = isTwitter ?
        `Remove my ${text} from my portfolio` :
        `Add my ${text} to my portfolio`;
      buttons.push((
        <Button
          block={ true }
          bsSize='lg'
          className={ socialClass }
          href={ socialLink }
          key={ identifier }
          >
          <FA name={ identifier } />
          { socialText }
        </Button>
      ));
    });
  }
  return (<div>{ buttons }</div>);
}

SocialSettings.displayName = 'SocialSettings';
SocialSettings.propTypes = propTypes;
