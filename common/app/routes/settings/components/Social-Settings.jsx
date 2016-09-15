import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import FA from 'react-fontawesome';

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
  if (isGithubCool && !isTwitter) {
    buttons.push((
      <Button
        block={ true }
        bsSize='lg'
        className='btn-link-social btn-twitter'
        href='/link/twitter'
        key='twitter'
        >
        <FA name='twitter' />
        Add my Twitter to my portfolio
      </Button>
    ));
  }
  if (isGithubCool && !isLinkedIn) {
    buttons.push((
      <Button
        block={ true }
        bsSize='lg'
        className='btn-link-social btn-linkedin'
        href='/link/linkedin'
        key='linkedin'
        >
        <FA name='linkedin' />
        Add my LinkedIn to my portfolio
      </Button>
    ));
  }
  return (<div>{ buttons }</div>);
}

SocialSettings.propTypes = {
  isGithubCool: PropTypes.bool,
  isTwitter: PropTypes.bool,
  isLinkedIn: PropTypes.bool
};
