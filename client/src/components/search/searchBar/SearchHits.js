import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';

const CustomHits = connectHits(
  ({
    hits,
    searchQuery,
    handleMouseEnter,
    handleMouseLeave,
    selectedIndex,
    handleHits
  }) => {
    const footer = [
      {
        objectID: `default-hit-${searchQuery}`,
        query: searchQuery,
        url: `https://freecodecamp.org/news/search/?query=${encodeURIComponent(
          searchQuery
        )}`,
        title: `See all results for ${searchQuery}`,
        _highlightResult: {
          query: {
            value: `
            See all results for
            <ais-highlight-0000000000>
            ${searchQuery}
            </ais-highlight-0000000000>
          `
          }
        }
      }
    ];
    const allHits = hits.slice(0, 8).concat(footer);
    useEffect(() => {
      handleHits(allHits);
    });

    return (
      <div className='ais-Hits'>
        <ul className='ais-Hits-list'>
          {allHits.map((hit, i) => (
            <li
              className={
                i === selectedIndex ? 'ais-Hits-item selected' : 'ais-Hits-item'
              }
              data-fccobjectid={hit.objectID}
              key={hit.objectID}
            >
              <Suggestion
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
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
    searchState,
    handleMouseEnter,
    handleMouseLeave,
    selectedIndex,
    handleHits
  }) => {
    return isEmpty(searchState) || !searchState.query ? null : (
      <CustomHits
        handleHits={handleHits}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        searchQuery={searchState.query}
        selectedIndex={selectedIndex}
      />
    );
  }
);

CustomHits.propTypes = {
  handleHits: PropTypes.func.isRequired
};

export default SearchHits;
