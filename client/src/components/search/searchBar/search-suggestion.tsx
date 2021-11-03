import React from 'react';
import { Hit } from 'react-instantsearch-core';
import { Highlight } from 'react-instantsearch-dom';

interface SuggestionProps {
  hit: Hit;
  handleMouseEnter: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
}

const Suggestion = ({
  hit,
  handleMouseEnter,
  handleMouseLeave
}: SuggestionProps): JSX.Element => {
  const dropdownFooter = hit.objectID.includes('footer-');
  return (
    <a
      className={
        dropdownFooter
          ? 'fcc_suggestion_footer fcc_suggestion_item'
          : 'fcc_suggestion_item'
      }
      href={hit.url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      rel='noopener noreferrer'
      target='_blank'
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

export default Suggestion;
