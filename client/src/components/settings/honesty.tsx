import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

import HonestyPolicy from '../../resources/honesty-policy';
import { FullWidthRow } from '../helpers';
import SectionHeader from './section-header';

import './honesty.css';

type HonestyProps = {
  isHonest: boolean;
  updateIsHonest: (obj: { isHonest: boolean }) => void;
};

const Honesty = ({ isHonest, updateIsHonest }: HonestyProps): JSX.Element => {
  const { t } = useTranslation();
  const buttonText = isHonest
    ? t('buttons.accepted-honesty')
    : t('buttons.agree-honesty');

  return (
    <section id='honesty-policy'>
      <SectionHeader>{t('settings.headings.honesty')}</SectionHeader>
      <FullWidthRow>
        <Panel className='honesty-panel'>
          <HonestyPolicy />
        </Panel>
        <Button
          block={true}
          bsStyle='primary'
          aria-disabled={isHonest}
          onClick={() => !isHonest && updateIsHonest({ isHonest: true })}
        >
          {buttonText}
        </Button>
      </FullWidthRow>
    </section>
  );
};

Honesty.displayName = 'Honesty';

export default Honesty;
