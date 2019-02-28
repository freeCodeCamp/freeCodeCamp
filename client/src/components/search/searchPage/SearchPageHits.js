import React from 'react';

import {
  Highlight,
  connectStateResults,
  connectAutoComplete
} from 'react-instantsearch-dom';
import { isEmpty } from 'lodash';

import EmptySearch from './EmptySearch';
import NoResults from './NoResults';
import { homeLocation } from '../../../../config/env.json';

import './search-page-hits.css';

const indexMap = {
  challenges: {
    title: 'Lesson',
    url: `${homeLocation}/learn`
  },
  guides: {
    title: 'Guide',
    url: `${homeLocation}/guide`
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/watch?v='
  }
};

const buildUrl = (index, result) =>
  `${indexMap[index].url}${'videoId' in result ? result.videoId : result.url}`;

const AllHits = connectAutoComplete(({ hits, currentRefinement }) => {
  if (hits.some(hit => isEmpty(hit.index))) {
    return null;
  }
  const nonQuerySuggestionHits = hits.filter(
    ({ index }) => index !== 'query_suggestions'
  );
  const isHitsEmpty = nonQuerySuggestionHits.every(({ hits }) => !hits.length);

  return currentRefinement && !isHitsEmpty ? (
    <div className='ais-Hits search-page'>
      <ul className='ais-Hits-list'>
        {nonQuerySuggestionHits.map(({ hits: results, index }) =>
          results.map(result => (
            <a
              href={buildUrl(index, result)}
              key={result.objectID}
              target='_blank'
            >
              <li className='ais-Hits-item dataset-node'>
                <p>
                  <strong>{indexMap[index].title}:</strong>
                  &nbsp;
                  <Highlight attribute='title' hit={result} />
                </p>
              </li>
            </a>
          ))
        )}
      </ul>
    </div>
  ) : (
    <NoResults query={currentRefinement} />
  );
});

AllHits.displayName = 'AllHits';

const SearchHits = connectStateResults(({ handleClick, searchState }) => {
  const isSearchEmpty = isEmpty(searchState) || isEmpty(searchState.query);

  return isSearchEmpty ? (
    <EmptySearch />
  ) : (
    <AllHits handleClick={handleClick} />
  );
});

SearchHits.displayName = 'SearchHits';

export default SearchHits;
