import React, { useEffect } from 'react';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import { SearchState, Hit } from 'react-instantsearch-core';
import { isEmpty } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';
import Suggestion from './search-suggestion';
import NoHitsSuggestion from './no-hits-suggestion';

const searchUrl = searchPageUrl;
interface customHitsPropTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hits: Array<any>;
  searchQuery: string;
  handleMouseEnter: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  selectedIndex: number;
  handleHits: (currHits: Array<Hit>) => void;
}
interface searchHitsPropTypes {
  searchState: SearchState;
  handleMouseEnter: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  selectedIndex: number;
  handleHits: (currHits: Array<Hit>) => void;
}
const CustomHits = connectHits(
  ({
    hits,
    searchQuery,
    handleMouseEnter,
    handleMouseLeave,
    selectedIndex,
    handleHits
  }: customHitsPropTypes) => {
    const { t } = useTranslation();
    const noHits = isEmpty(hits);
    const noHitsTitle = t('search.no-tutorials');
    const footer = [
      {
        objectID: `footer-${searchQuery}`,
        query: searchQuery,
        url: noHits
          ? null
          : `${searchUrl}?query=${encodeURIComponent(searchQuery)}`,
        title: t('search.see-results', { searchQuery: searchQuery }),
        _highlightResult: {
          query: {
            value: `
              <ais-highlight-0000000000>
                ${t('search.see-results', { searchQuery: searchQuery })}
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
        <ul className='ais-Hits-list' data-cy='ais-Hits-list'>
          {allHits.map((hit: Hit, i: number) => (
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
  }: searchHitsPropTypes) => {
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

export default SearchHits;
