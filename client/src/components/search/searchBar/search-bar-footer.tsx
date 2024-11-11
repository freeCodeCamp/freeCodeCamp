import React from 'react';
import { useTranslation } from 'react-i18next';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';
import NoHitsSuggestion from './no-hits-suggestion';

interface SearchBarFooterProps {
  hasHits: boolean;
  query?: string;
  handleMouseEnter: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleMouseLeave: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
}

const SearchBarFooter = ({
  hasHits,
  query,
  handleMouseEnter,
  handleMouseLeave
}: SearchBarFooterProps) => {
  const { t } = useTranslation();
  const title = t('search.no-tutorials');

  const searchUrl = searchPageUrl;

  if (hasHits && query) {
    return (
      <li className='ais-Hits-item'>
        <a
          className='fcc_suggestion_item'
          href={searchUrl + '?query=' + encodeURIComponent(query ?? '')}
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className='hit-name'>
            {t('search.see-results', { searchQuery: query })}
          </span>
        </a>
      </li>
    );
  } else if (query && !hasHits) {
    return (
      <NoHitsSuggestion
        title={title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    );
  } else {
    return null;
  }
};

export default SearchBarFooter;
