import React from 'react';
import {
  connectStateResults,
  connectAutoComplete
} from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';

const CustomHits = connectAutoComplete(
  ({ hits, currentRefinement, handleSubmit }) => {
    const defaultHit = [
      {
        objectID: `default-hit-${currentRefinement}`,
        _highlightResult: {
          query: {
            value:
              'Search for "<ais-highlight-0000000000>' +
              currentRefinement +
              '</ais-highlight-0000000000>"'
          }
        }
      }
    ];
    return (
      <div className='ais-Hits'>
        <ul className='ais-Hits-list'>
          {defaultHit.concat(hits).map(hit => (
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

const SearchHits = connectStateResults(({ handleSubmit, searchState }) => {
  return isEmpty(searchState) || !searchState.query ? null : (
    <CustomHits handleSubmit={handleSubmit} />
  );
});

export default SearchHits;
