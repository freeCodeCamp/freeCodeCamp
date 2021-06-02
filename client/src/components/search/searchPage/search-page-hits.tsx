import React from 'react';

import {
  Highlight,
  connectStateResults,
  connectAutoComplete
} from 'react-instantsearch-dom';
import { isEmpty } from 'lodash-es';
import {SearchState} from 'react-instantsearch-core'
import EmptySearch from './empty-search';
import NoResults from './no-results';

import './search-page-hits.css';

const AllHits: React.ComponentClass<any, any> = connectAutoComplete(
  ({ hits, currentRefinement }) => {
    const isHitsEmpty = !hits.length;

    return currentRefinement && !isHitsEmpty ? (
      <div className='ais-Hits search-page'>
        <ul className='ais-Hits-list'>
          {hits.map(result => (
            <a
              href={result.url}
              key={result.objectID}
              rel='noopener noreferrer'
              target='_blank'
            >
              <li className='ais-Hits-item dataset-node'>
                <p>
                  <Highlight attribute='title' hit={result} />
                </p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    ) : (
      <NoResults query={currentRefinement} />
    );
  }
);

AllHits.displayName = 'AllHits';

const SearchHits = connectStateResults(
  ({ handleClick, searchState }: { handleClick: any; searchState: SearchState }) => {
    const isSearchEmpty = isEmpty(searchState) || isEmpty(searchState.query);

    return isSearchEmpty ? (
      <EmptySearch />
    ) : (
      <AllHits handleClick={handleClick} />
    );
  }
);

SearchHits.displayName = 'SearchHits';

export default SearchHits;
