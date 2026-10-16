import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Panel, Button } from '@freecodecamp/ui';

import { FullWidthRow } from '../helpers';
import SectionHeader from './section-header';

import './classroom-mode.css';

type ClassroomModeProps = {
  isClassroomAccount: boolean;
  updateIsClassroomAccount: () => void;
};

const email = 'support@freecodecamp.org';
const ClassroomMode = ({
  isClassroomAccount,
  updateIsClassroomAccount
}: ClassroomModeProps): JSX.Element => {
  const { t } = useTranslation();
  const buttonText = isClassroomAccount
    ? t('settings.classroom-mode.buttons.accepted')
    : t('settings.classroom-mode.buttons.agree');

  return (
    <section id='classroom-mode-policy'>
      <SectionHeader>{t('settings.classroom-mode.heading')}</SectionHeader>
      <FullWidthRow>
        <Panel className='classroom-mode-panel'>
          <p>{t('settings.classroom-mode.p1')}</p>
          <p>{t('settings.classroom-mode.p2')}</p>
          <p>
            <Trans i18nKey='settings.classroom-mode.p3' values={{ email }}>
              <a href={`mailto:${email}`}>placeholder</a>
            </Trans>
          </p>
        </Panel>
        <p>
          <Trans
            i18nKey='settings.classroom-mode.p4'
            values={{
              status: t(
                isClassroomAccount
                  ? 'settings.classroom-mode.status.shared'
                  : 'settings.classroom-mode.status.not-shared'
              ),
              message: t(
                isClassroomAccount
                  ? 'settings.classroom-mode.message.shared'
                  : 'settings.classroom-mode.message.not-shared'
              )
            }}
          >
            <strong />
          </Trans>
        </p>
        <Button
          block={true}
          variant='primary'
          disabled={isClassroomAccount}
          onClick={() => updateIsClassroomAccount()}
        >
          {buttonText}
        </Button>
      </FullWidthRow>
    </section>
  );
};

ClassroomMode.displayName = 'ClassroomMode';

export default ClassroomMode;
