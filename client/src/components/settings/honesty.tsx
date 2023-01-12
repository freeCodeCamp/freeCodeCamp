import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

import HonestyPolicy from '../../resources/honesty-policy';
import { FullWidthRow, Spacer } from '../helpers';
import SectionHeader from './section-header';

import './honesty.css';

type HonestyProps = {
  isHonest: boolean;
  updateIsHonest: (obj: { isHonest: boolean }) => void;
};

const Honesty = ({ isHonest, updateIsHonest }: HonestyProps): JSX.Element => {
  const { t } = useTranslation();
  const button = isHonest ? (
    <Button block={true} bsStyle='primary' disabled={true}>
      {t('buttons.accepted-honesty')}
    </Button>
  ) : (
    <Button
      block={true}
      bsStyle='primary'
      onClick={() => updateIsHonest({ isHonest: true })}
    >
      {t('buttons.agree')}
    </Button>
  );
  return (
    <section id='honesty-policy'>
      <SectionHeader>{t('settings.headings.honesty')}</SectionHeader>
      <FullWidthRow>
        <Panel className='honesty-panel'>
          <HonestyPolicy />
        </Panel>
        <Spacer />
        {button}
      </FullWidthRow>
    </section>
  );
};

Honesty.displayName = 'Honesty';

export default Honesty;
