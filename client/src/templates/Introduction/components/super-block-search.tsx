import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, ControlLabel, Col, Spacer } from '@freecodecamp/ui';
import { debounce } from 'lodash-es';

import Magnifier from '../../../assets/icons/magnifier';
import InputReset from '../../../assets/icons/input-reset';

import './super-block-search.css';

interface SuperBlockSearchProps {
  onSearch: (term: string) => void;
  filteredCount: number;
}

const SuperBlockSearch = ({
  onSearch,
  filteredCount
}: SuperBlockSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { t } = useTranslation();

  const searchResultsMessage =
    filteredCount === 0
      ? t('learn.super-block-search-no-results', { term: searchTerm })
      : t('learn.super-block-search-results', {
          term: searchTerm,
          resultCount: filteredCount
        });

  const handleInputChange = useMemo(
    () => debounce((term: string) => onSearch(term), 300),
    [onSearch]
  );

  return (
    <Col xs={12} sm={8} smOffset={2} md={8} mdOffset={2}>
      <div className='super-block-search-container'>
        <span className='super-block-search-magnifier'>
          <Magnifier />
        </span>

        <ControlLabel htmlFor='super-block-search-input' srOnly>
          {t('learn.search-challenges')}
        </ControlLabel>
        <FormControl
          id='super-block-search-input'
          type='search'
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
            handleInputChange(e.target.value);
          }}
          placeholder={t('learn.search-challenges')}
        />

        {searchTerm && (
          <button
            type='button'
            aria-label={t('learn.clear-search')}
            onClick={() => {
              setSearchTerm('');
              handleInputChange('');
            }}
            className='super-block-search-reset-btn'
          >
            <InputReset />
          </button>
        )}
      </div>

      <Spacer size='xs' />

      <div aria-live='polite' aria-atomic='true'>
        {searchTerm ? searchResultsMessage : ''}
      </div>
    </Col>
  );
};

export default SuperBlockSearch;
