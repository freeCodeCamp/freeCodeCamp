import React from 'react';
import { useFeature } from '@growthbook/growthbook-react';
import { Button } from '@freecodecamp/ui';

interface CodeAllyButtonProps {
  onClick: () => void;
  text: string;
}

export function CodeAllyButton(props: CodeAllyButtonProps): JSX.Element | null {
  const codeAllyDisabledFeature = useFeature('codeally_disabled');

  return (
    <Button
      aria-describedby='codeally-cookie-warning'
      block={true}
      variant='primary'
      data-cy='start-codeally'
      disabled={codeAllyDisabledFeature.on}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
