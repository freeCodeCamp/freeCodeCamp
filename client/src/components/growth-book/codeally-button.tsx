import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';
import { challengeTypes } from '../../../../shared/config/challenge-types';

interface CodeAllyButtonProps {
  challengeType: number;
  onClick: () => void;
}

export function CodeAllyButton({
  challengeType,
  onClick
}: CodeAllyButtonProps): JSX.Element | null {
  const codeAllyDisabledFeature = useFeature('codeally_disabled');
  const { t } = useTranslation();

  const text =
    challengeType === challengeTypes.codeAllyCert
      ? t('buttons.click-start-project')
      : t('buttons.click-start-course');

  return (
    <Button
      onClick={codeAllyDisabledFeature.on ? () => {} : onClick}
      disabled={codeAllyDisabledFeature.on}
      variant='primary'
      block={true}
    >
      <span className='sr-only'>, {t('aria.opens-new-window')}</span>
      {text}&nbsp;&nbsp;
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
}
