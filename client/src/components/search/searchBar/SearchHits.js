import React from 'react';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';

const CustomHits = connectHits(
  ({
    hits,
    currentRefinement,
    handleSubmit,
    handleHits,
    handleMouseEnter,
    handleMouseLeave
  }) => {
    const footer = [
      {
        objectID: `default-hit-${currentRefinement}`,
        query: currentRefinement,
        _highlightResult: {
          query: {
            value: `
            See all results for
            <ais-highlight-0000000000>
            ${currentRefinement}
            </ais-highlight-0000000000>
          `
          }
        }
      }
    ];
    const allHits = hits.filter((_, i) => i < 8).concat(footer);
    handleHits();

    return (
      <div className='ais-Hits'>
        <ul className='ais-Hits-list'>
          {allHits.map(hit => (
            <li
              className='ais-Hits-item'
              data-fccobjectid={hit.objectID}
              key={hit.objectID}
            >
              <Suggestion
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleSubmit={handleSubmit}
                hit={hit}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

const SearchHits = connectStateResults(
  ({
    handleSubmit,
    handleHits,
    searchState,
    handleMouseEnter,
    handleMouseLeave
  }) => {
    return isEmpty(searchState) || !searchState.query ? null : (
      <CustomHits
        currentRefinement={searchState.query}
        handleHits={handleHits}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleSubmit={handleSubmit}
      />
    );
  }
);

export default SearchHits;
