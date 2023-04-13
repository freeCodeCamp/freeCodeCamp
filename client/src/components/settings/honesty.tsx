import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { FullWidthRow } from '../helpers';
import SectionHeader from './section-header';

import './honesty.css';

type HonestyProps = {
  isHonest: boolean;
  updateIsHonest: (obj: { isHonest: boolean }) => void;
};

const email = 'support@freecodecamp.org';
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
          <p>{t('settings.honesty.p1')}</p>
          <p>{t('settings.honesty.p2')}</p>
          <p>{t('settings.honesty.p3')}</p>
          <p>{t('settings.honesty.p4')}</p>
          <p>{t('settings.honesty.p5')}</p>
          <p>{t('settings.honesty.p6')}</p>
          <p>
            <Trans i18nKey='settings.honesty.p7'>
              <a href={`mailto:${email}`}>{{ email }}</a>
            </Trans>
          </p>
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
