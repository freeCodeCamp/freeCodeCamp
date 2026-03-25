import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash-es';
import { FormControl } from '@freecodecamp/ui';
import Magnifier from '../../../assets/icons/magnifier';
import InputReset from '../../../assets/icons/input-reset';

import './super-block-search.css';

interface SuperBlockSearchProps {
  onSearch: (term: string) => void;
  resultCount: number;
  isSearching: boolean;
}

const SuperBlockSearch = ({
  onSearch,
  resultCount,
  isSearching
}: SuperBlockSearchProps): JSX.Element => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedOnSearch = useMemo(() => debounce(onSearch, 300), [onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedOnSearch(value.trim().toLowerCase());
  };

  const handleReset = () => {
    debouncedOnSearch.cancel();
    setSearchTerm('');
    onSearch('');
  };

  const statusMessage = isSearching
    ? resultCount > 0
      ? t('learn.search.search-challenges-results', {
          resultCount,
          term: searchTerm
        })
      : t('learn.search.search-challenges-no-results', { term: searchTerm })
    : '';

  return (
    <form
      className='super-block-search-form'
      onSubmit={e => e.preventDefault()}
      role='search'
      aria-label={t('learn.search.search-challenges-in-curriculum')}
    >
      <div className='super-block-search-container'>
        <span aria-hidden='true' className='super-block-search-magnifier'>
          <Magnifier />
        </span>
        <FormControl
          id='super-block-search-input'
          type='search'
          aria-label={t('learn.search.search-challenges-in-curriculum')}
          value={searchTerm}
          onChange={handleChange}
          placeholder={t('learn.search.search-challenges-in-curriculum')}
        />
        {searchTerm && (
          <button
            className='super-block-search-reset-btn'
            onClick={handleReset}
            type='button'
          >
            <InputReset />
          </button>
        )}
      </div>
      <p aria-live='polite' className='super-block-search-status'>
        {statusMessage}
      </p>
    </form>
  );
};

SuperBlockSearch.displayName = 'SuperBlockSearch';

export default SuperBlockSearch;
