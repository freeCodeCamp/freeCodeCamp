import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './challenge-title.css';
import GreenPass from '../../../assets/icons/GreenPass';

const propTypes = {
  children: PropTypes.string,
  isCompleted: PropTypes.bool
};

function ChallengeTitle({ children, isCompleted }) {
  const { t } = useTranslation();

  return (
    <h2 className='text-center challenge-title'>
      {children || t('learn.read-this.p12')}
      {isCompleted ? (
        <GreenPass
          style={{ height: '15px', width: '15px', marginLeft: '5px' }}
        />
      ) : null}
    </h2>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;

export default ChallengeTitle;
