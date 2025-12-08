import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel } from '@freecodecamp/ui';

export function LabLocalSaveNotice(): JSX.Element {
  const { t } = useTranslation();

  // Use translation if available, but fall back to plain English so the
  // notice never shows raw i18n keys in the UI.
  const heading = t('learn.lab-local-save-heading', {
    defaultValue: 'Labs are not saved to your account'
  });
  const body = t('learn.lab-local-save-body', {
    defaultValue:
      'Use the "Save locally" button or Ctrl+S / Cmd+S to store your lab code in this browser. Local saves are cleared when you submit the lab, sign out, or switch browsers or devices.'
  });

  return (
    <Panel
      variant='info'
      data-playwright-test-label='lab-local-save-notice'
      className='lab-local-save-notice'
    >
      <Panel.Heading>{heading}</Panel.Heading>
      <Panel.Body>
        <p>{body}</p>
      </Panel.Body>
    </Panel>
  );
}

LabLocalSaveNotice.displayName = 'LabLocalSaveNotice';

export default LabLocalSaveNotice;
