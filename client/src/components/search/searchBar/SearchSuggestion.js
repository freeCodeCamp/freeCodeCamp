import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { isEmpty } from 'lodash';

const Suggestion = ({ handleSubmit, hit }) => {
  const dropdownFooter = hit.objectID.includes('default-hit-');
  return isEmpty(hit) || isEmpty(hit.objectID) ? null : (
    <a
      className={
        dropdownFooter
          ? 'fcc_suggestion_footer fcc_suggestion_item'
          : 'fcc_suggestion_item'
      }
      href={hit.url}
      onClick={e => (dropdownFooter ? handleSubmit(e, hit.query) : '')}
    >
      <span className='hit-name'>
        {dropdownFooter ? (
          <Highlight attribute='query' hit={hit} tagName='strong' />
        ) : (
          <Highlight attribute='title' hit={hit} />
        )}
      </span>
    </a>
  );
};

Suggestion.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hit: PropTypes.object
};

export default Suggestion;
