import React from 'react';
import { useFeature } from '@growthbook/growthbook-react';

interface CodeAllyIframeProps {
  src: string;
}

export function CodeAllyIframe(props: CodeAllyIframeProps): JSX.Element | null {
  const codeAllyDisabledFeature = useFeature('codeally_disabled');

  return codeAllyDisabledFeature.on ? null : (
    <iframe
      className='codeally-frame'
      data-cy='codeally-frame'
      name={`codeAlly${Date.now()}`}
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
      src={props.src}
      title='Editor'
    />
  );
}
