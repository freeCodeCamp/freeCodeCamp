import { Hit } from 'instantsearch.js';
import { isEmpty } from 'lodash-es';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHits } from 'react-instantsearch';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';
import Suggestion from './search-suggestion';
import NoHitsSuggestion from './no-hits-suggestion';
const searchUrl = searchPageUrl;
function CustomHits({
  handleMouseEnter,
  handleMouseLeave,
  handleHits,
  selectedIndex
}: {
  handleMouseEnter: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleHits: (hits: Hit[]) => void;
  selectedIndex: number;
}) {
  const { results } = useHits();
  const query = results ? results.query : '';
  const { t } = useTranslation();

  const noHits = isEmpty(results?.hits);
  const noHitsTitle = t('search.no-tutorials');

  const footer = [
    {
      __position: 8,
      objectID: `footer-${query}`,
      query: query,
      url: noHits ? null : `${searchUrl}?query=${encodeURIComponent(query)}`,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      _highlightResult: {
        query: {
          value: `${t('search.see-results', { searchQuery: query })}`,
          matchLevel: 'none',
          matchedWords: []
        }
      }
    }
  ] as Hit[];
  const allHits: Hit[] | [] =
    results?.hits && results?.query ? [...results.hits, ...footer] : [];

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
}

export default CustomHits;
