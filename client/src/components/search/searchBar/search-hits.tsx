import { useTranslation } from 'react-i18next';
import { Hit } from 'instantsearch.js';
import { isEmpty } from 'lodash-es';
import React, { useEffect } from 'react';
import { useInstantSearch } from 'react-instantsearch';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';
import NoHitsSuggestion from './no-hits-suggestion';
import Suggestion from './search-suggestion';

const searchUrl = searchPageUrl;

interface SearchHitsProps {
  handleMouseEnter: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleHits: (hits: Hit[]) => void;
  selectedIndex: number;
}

const SearchHits = ({
  handleMouseEnter,
  handleMouseLeave,
  handleHits,
  selectedIndex
}: SearchHitsProps) => {
  const { results, uiState } = useInstantSearch();

  const { hits } = results;
  const { query } = uiState.news;

  const { t } = useTranslation();
  const noHits = isEmpty(results.hits);
  const noHitsTitle = t('search.no-tutorials');

  const footer = [
    {
      objectID: `footer-${query}`,
      query: query,
      url: noHits
        ? null
        : `${searchUrl}?query=${encodeURIComponent(query ?? '')}`,
      title: t('search.see-results', { searchQuery: query }),
      _highlightResult: {
        query: {
          value: `
            <ais-highlight-0000000000>
              ${t('search.see-results', { searchQuery: query })}
            </ais-highlight-0000000000>
          `
        }
      }
    }
  ];
  let allHits = hits;
  if (noHits && query) {
    allHits = [...footer];
  } else if (noHits && !query) {
    allHits = [];
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    handleHits(allHits);
  });

  return (
    <div className='ais-Hits'>
      <ul className='ais-Hits-list' aria-label={t('search.result-list')}>
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
};

export default SearchHits;
