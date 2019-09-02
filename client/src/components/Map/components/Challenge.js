import React from 'react';
import PropTypes from 'prop-types';

import ga from '../../../analytics';
import { Link } from '../../helpers';
import Badge from './Badge';

function handleChallengeClick(slug) {
  return () => {
    return ga.event({
      category: 'Map Challenge Click',
      action: slug
    });
  };
}

function Challenge({ slug, title, isCompleted }) {
  return (
    <li
      className={`map-challenge-title ${
        isCompleted ? 'map-challenge-title-completed' : ''
      }`}
    >
      {typeof isCompleted === 'boolean' && <Badge isCompleted={isCompleted} />}
      <Link onClick={handleChallengeClick(slug)} to={slug}>
        {title}
      </Link>
    </li>
  );
}

Challenge.propTypes = {
  isCompleted: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
Challenge.displayName = 'Challenge';

export default Challenge;
