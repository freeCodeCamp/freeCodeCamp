import React from 'react';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';

const CustomHits = connectHits(
  ({ hits, currentRefinement, handleSubmit, getHits }) => {
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
    const allHits = hits.concat(footer);
    getHits(allHits);

    return (
      <div className='ais-Hits'>
        <ul className='ais-Hits-list'>
          {allHits.map(hit => (
            <li
              className='ais-Hits-item'
              data-fccobjectid={hit.objectID}
              key={hit.objectID}
            >
              <Suggestion handleSubmit={handleSubmit} hit={hit} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

const SearchHits = connectStateResults(
  ({ handleSubmit, getHits, searchState }) => {
    return isEmpty(searchState) || !searchState.query ? null : (
      <CustomHits
        currentRefinement={searchState.query}
        getHits={getHits}
        handleSubmit={handleSubmit}
      />
    );
  }
);

export default SearchHits;
