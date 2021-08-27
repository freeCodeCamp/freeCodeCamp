import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Magnifier from '../../../assets/icons/Magnifier';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';

const SearchBarOptimized = (): JSX.Element => {
  const { t } = useTranslation();
  const placeholder = t('search.placeholder');
  const searchUrl = searchPageUrl;
  const [value, setValue] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value && value.length > 1) {
      window.open(`${searchUrl}?query=${encodeURIComponent(value)}`, '_blank');
    }
  };

  return (
    <div className='fcc_searchBar' data-testid='fcc_searchBar'>
      <div className='fcc_search_wrapper'>
        <div className='ais-SearchBox' data-cy='ais-SearchBox'>
          <form
            action=''
            className='ais-SearchBox-form'
            data-cy='ais-SearchBox-form'
            onSubmit={onSubmit}
            role='search'
          >
            <input
              aria-label='Search'
              autoCapitalize='off'
              autoComplete='off'
              autoCorrect='off'
              className='ais-SearchBox-input'
              maxLength={512}
              onChange={onChange}
              placeholder={placeholder}
              spellCheck='false'
              type='search'
              value={value}
            />
            <button
              className='ais-SearchBox-submit'
              title='Submit your search query.'
              type='submit'
            >
              <Magnifier />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

SearchBarOptimized.displayName = 'SearchBarOptimized';
export default SearchBarOptimized;
