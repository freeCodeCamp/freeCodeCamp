import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Magnifier from '../../../assets/icons/magnifier';
import InputReset from '../../../assets/icons/input-reset';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';

type Props = {
  innerRef?: React.RefObject<HTMLDivElement>;
};

const SearchBarOptimized = ({ innerRef }: Props): JSX.Element => {
  const { t } = useTranslation();
  const placeholder = t('search.placeholder');
  const searchUrl = searchPageUrl;
  const [value, setValue] = useState('');
  const inputElementRef = useRef<HTMLInputElement>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value && value.length > 1) {
      window.open(`${searchUrl}?query=${encodeURIComponent(value)}`, '_blank');
    }
  };
  const onClick = () => {
    setValue('');
    inputElementRef.current?.focus();
  };

  return (
    <div className='fcc_searchBar' data-testid='fcc_searchBar' ref={innerRef}>
      <div className='fcc_search_wrapper'>
        <div className='ais-SearchBox' data-cy='ais-SearchBox'>
          <form
            action=''
            className='ais-SearchBox-form'
            data-cy='ais-SearchBox-form'
            onSubmit={onSubmit}
            role='search'
          >
            <label className='sr-only' htmlFor='ais-SearchBox-input'>
              {t ? t('search.label') : ''}
            </label>
            <input
              autoCapitalize='off'
              autoComplete='off'
              autoCorrect='off'
              id='ais-SearchBox-input'
              className='ais-SearchBox-input'
              maxLength={512}
              onChange={onChange}
              placeholder={placeholder}
              spellCheck='false'
              type='search'
              value={value}
              ref={inputElementRef}
            />
            <button className='ais-SearchBox-submit' type='submit'>
              <Magnifier />
            </button>
            {value && (
              <button
                className='ais-SearchBox-reset'
                onClick={onClick}
                type='button'
              >
                <InputReset />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

SearchBarOptimized.displayName = 'SearchBarOptimized';
export default SearchBarOptimized;
