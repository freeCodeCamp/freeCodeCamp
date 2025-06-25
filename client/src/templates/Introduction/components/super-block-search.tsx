import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, ControlLabel, Col, Spacer } from '@freecodecamp/ui';
import { debounce, isEmpty } from 'lodash-es';

import Magnifier from '../../../assets/icons/magnifier';
import InputReset from '../../../assets/icons/input-reset';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import type { ChallengeNode } from '../../../redux/prop-types';
import './super-block-search.css';

interface SuperBlockSearchProps {
  superBlockChallenges: ChallengeNode['challenge'][];
  superBlock: SuperBlocks;
  onFilter: (filtered: ChallengeNode['challenge'][]) => void;
}

const SuperBlockSearch = ({
  superBlockChallenges,
  superBlock,
  onFilter
}: SuperBlockSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredChallenges, setFilteredChallenges] =
    useState(superBlockChallenges);

  const { t } = useTranslation();

  const searchResultsMessage = isEmpty(filteredChallenges)
    ? t('learn.super-block-search-results', {
        term: searchTerm,
        resultCount: filteredChallenges.length
      })
    : t('learn.super-block-search-no-results', { term: searchTerm });

  const handleInputChange = useMemo(
    () =>
      debounce((term: string) => {
        if (term.trim() === '') {
          return superBlockChallenges;
        }

        const filtered = superBlockChallenges.filter(challenge => {
          const blockTitle = t(
            `intro:${superBlock}.blocks.${challenge.block}.title`,
            challenge.title
          ).toLowerCase();
          const challengeTitle = challenge.title.toLowerCase();

          if (
            blockTitle.includes(term.toLowerCase()) ||
            challengeTitle.includes(term.toLowerCase())
          ) {
            return true;
          }

          return false;
        });

        setFilteredChallenges(filtered);
        onFilter(filtered);
      }, 300),
    [superBlockChallenges, t, superBlock, onFilter]
  );

  return (
    <>
      <Col
        xs={12}
        sm={8}
        smOffset={2}
        md={8}
        mdOffset={2}
        className='super-block-search-container'
      >
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
      </Col>

      {isEmpty(filteredChallenges) && searchTerm && (
        <>
          <Spacer size='m' />
          <p className='text-center'>
            {t('learn.super-block-search-no-results', { term: searchTerm })}
          </p>
        </>
      )}

      <div aria-live='polite' aria-atomic='true' className='sr-only'>
        {searchTerm ? searchResultsMessage : ''}
      </div>
    </>
  );
};

export default SuperBlockSearch;
