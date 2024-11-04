import React from 'react';
import { Highlight } from 'react-instantsearch';
import type { Hit } from 'instantsearch.js';

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
  return (
    <a
      className={`fcc_suggestion_item`}
      href={hit.url as string}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={hit.__position.toString()}
      rel='noopener noreferrer'
      target='_blank'
    >
      <Highlight attribute='title' hit={hit} />
    </a>
  );
};

export default Suggestion;
