import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';
import NoHitsSuggestion from './NoHitsSuggestion';

const CustomHits = connectHits(
  ({
    hits,
    searchQuery,
    handleMouseEnter,
    handleMouseLeave,
    selectedIndex,
    handleHits
  }) => {
    const noHits = isEmpty(hits);
    const noHitsTitle = 'No tutorials found';
    const footer = [
      {
        objectID: `footer-${searchQuery}`,
        query: searchQuery,
        url: noHits
          ? null
          : `https://www.freecodecamp.org/news/search/?query=${encodeURIComponent(
              searchQuery
            )}`,
        title: noHits ? noHitsTitle : `See all results for ${searchQuery}`,
        _highlightResult: {
          query: {
            value: noHits
              ? noHitsTitle
              : `
              <ais-highlight-0000000000>
                See all results for
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
                !noHits && i === selectedIndex
                  ? 'ais-Hits-item selected'
                  : 'ais-Hits-item'
              }
              data-fccobjectid={hit.objectID}
              key={hit.objectID}
            >
              {noHits ? (
                <NoHitsSuggestion
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  title={noHitsTitle}
                />
              ) : (
                <Suggestion
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  hit={hit}
                />
              )}
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
