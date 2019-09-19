import React from 'react';
import PropTypes from 'prop-types';
import ChallengeTitle from '../components/Challenge-Title';
import Spacer from '../../../components/helpers/Spacer';

const propTypes = {
  description: PropTypes.string,
  introPath: PropTypes.string,
  isCompleted: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  title: PropTypes.string
};

export default function SidePanel({ title, description, isCompleted }) {
  return (
    <div>
      <Spacer />
      <ChallengeTitle isCompleted={isCompleted}>{title}</ChallengeTitle>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

SidePanel.displayName = 'ProjectSidePanel';
SidePanel.propTypes = propTypes;
