import { isEmpty } from 'lodash-es';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHits } from 'react-instantsearch';
import Suggestion from './search-suggestion';
import type { Hit } from './types';
import SearchBarFooter from './search-bar-footer';

interface SearchHitsProps {
  handleMouseEnter: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleHits: (hits: Hit[]) => void;
  selectedIndex: number;
}

function SearchHits({
  handleMouseEnter,
  handleMouseLeave,
  handleHits,
  selectedIndex
}: SearchHitsProps) {
  const { results } = useHits<Hit>();
  const { t } = useTranslation();
  const noHits = isEmpty(results?.hits);

  const allHits: Hit[] =
    results?.hits && results?.query ? [...results.hits] : [];

  useEffect(() => {
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
            {!noHits && (
              <Suggestion
                hit={hit}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            )}
          </li>
        ))}
        <SearchBarFooter
          hasHits={!noHits}
          query={results?.query}
          isSelected={selectedIndex === allHits.length}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </ul>
    </div>
  );
}

export default SearchHits;
