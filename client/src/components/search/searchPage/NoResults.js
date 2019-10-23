import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  query: PropTypes.string
};

function NoResults({ query }) {
  return (
    <div className='no-results-wrapper'>
      <p>
        We could not find anything relating to <em>{query}</em>
      </p>
    </div>
  );
}

NoResults.displayName = 'NoResults';
NoResults.propTypes = propTypes;

export default NoResults;
