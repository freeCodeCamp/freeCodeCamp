import React from 'react';
import { Highlight } from 'react-instantsearch';
import type { Hit } from './types';

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
      className={'fcc_suggestion_item'}
      href={hit.url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      rel='noopener noreferrer'
      target='_blank'
    >
      <span className='hit-name'>
        <Highlight attribute='title' hit={hit} />
      </span>
    </a>
  );
};

export default Suggestion;
