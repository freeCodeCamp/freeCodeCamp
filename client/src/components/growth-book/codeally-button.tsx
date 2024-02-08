import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

interface CodeAllyButtonProps {
  // onClick: () => void;
  text: string;
  url: string;
}

export function CodeAllyButton(props: CodeAllyButtonProps): JSX.Element | null {
  const codeAllyDisabledFeature = useFeature('codeally_disabled');
  const { t } = useTranslation();
  return codeAllyDisabledFeature.on ? null : (
    <Button href={props.url} target='_blank' variant='primary' block={true}>
      <span className='sr-only'>, {t('aria.opens-new-window')}</span>
      {props.text}&nbsp;&nbsp;
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
}
