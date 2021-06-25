import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Panel } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FullWidthRow } from '../helpers';
import SectionHeader from './section-header';
import HonestyPolicy from '../../resources/honesty-policy';

import './honesty.css';

type HonestyProps = {
  isHonest: boolean;
  updateIsHonest: (obj: { isHonest: boolean }) => void;
};

const Honesty = ({ isHonest, updateIsHonest }: HonestyProps): JSX.Element => {
  const { t } = useTranslation();
  const button = isHonest ? (
    <Button
      block={true}
      bsStyle='primary'
      className='disabled-agreed'
      disabled={true}
    >
      <p>{t('buttons.accepted-honesty')}</p>
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
    <section className='honesty-policy' id='honesty-policy'>
      <SectionHeader>{t('settings.headings.honesty')}</SectionHeader>
      <FullWidthRow>
        <Panel className='honesty-panel'>
          <HonestyPolicy />
        </Panel>
        <br />
        {button}
      </FullWidthRow>
    </section>
  );
};

Honesty.displayName = 'Honesty';

export default Honesty;
