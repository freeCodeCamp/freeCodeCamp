import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

interface CodeAllyButtonProps {
  text: string;
  onClick: () => void;
}

export function CodeAllyButton(props: CodeAllyButtonProps): JSX.Element | null {
  const codeAllyDisabledFeature = useFeature('codeally_disabled');
  const { t } = useTranslation();

  return (
    <Button
      onClick={codeAllyDisabledFeature.on ? () => {} : props.onClick}
      disabled={codeAllyDisabledFeature.on}
      variant='primary'
      block={true}
    >
      <span className='sr-only'>, {t('aria.opens-new-window')}</span>
      {props.text}&nbsp;&nbsp;
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
}
