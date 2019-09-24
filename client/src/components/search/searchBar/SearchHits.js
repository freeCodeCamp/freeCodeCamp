import React from 'react';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';

const CustomHits = connectHits(({ hits, currentRefinement, handleSubmit }) => {
  const shortenedHits = hits.filter((hit, i) => i < 8);
  const defaultHit = [
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
  return (
    <div className='ais-Hits'>
      <ul className='ais-Hits-list'>
        {shortenedHits.concat(defaultHit).map(hit => (
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
});

const SearchHits = connectStateResults(({ handleSubmit, searchState }) => {
  return isEmpty(searchState) || !searchState.query ? null : (
    <CustomHits
      currentRefinement={searchState.query}
      handleSubmit={handleSubmit}
    />
  );
});

export default SearchHits;
