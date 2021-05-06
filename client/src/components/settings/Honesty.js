import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FullWidthRow } from '../helpers';
import SectionHeader from './SectionHeader';
import HonestyPolicy from '../../resources/honesty-policy';

import './honesty.css';

const propTypes = {
  isHonest: PropTypes.bool,
  updateIsHonest: PropTypes.func.isRequired
};

const Honesty = ({ isHonest, updateIsHonest }) => {
  const { t } = useTranslation();
  const button = isHonest ? (
    <Button
      block={true}
      className='disabled-agreed'
      disabled={true}
      variant='primary'
    >
      <p>{t('buttons.accepted-honesty')}</p>
    </Button>
  ) : (
    <Button
      block={true}
      onClick={() => updateIsHonest({ isHonest: true })}
      variant='primary'
    >
      {t('buttons.agree')}
    </Button>
  );
  return (
    <section className='honesty-policy'>
      <SectionHeader>{t('settings.headings.honesty')}</SectionHeader>
      <FullWidthRow>
        <Card className='honesty-panel'>
          <HonestyPolicy />
        </Card>
        <br />
        {button}
      </FullWidthRow>
    </section>
  );
};

Honesty.displayName = 'Honesty';
Honesty.propTypes = propTypes;

export default Honesty;
