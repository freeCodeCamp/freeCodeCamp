import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../config/superblocks';
import { generateIconComponent } from '../../../assets/icons';
import { Spacer } from '../../../components/helpers';

interface SuperBlockIntroProps {
  superBlock: SuperBlocks;
}

function SuperBlockIntro(props: SuperBlockIntroProps): JSX.Element {
  const { t } = useTranslation();
  const { superBlock } = props;

  const superBlockIntroObj: {
    title: string;
    intro: string[];
    note: string;
  } = t(`intro:${superBlock}`);
  const {
    title: i18nSuperBlock,
    intro: superBlockIntroText,
    note: superBlockNoteText
  } = superBlockIntroObj;

  return (
    <>
      <h1 id='content-start' className='text-center big-heading'>
        {i18nSuperBlock}
      </h1>
      <Spacer size='medium' />
      {generateIconComponent(superBlock, 'cert-header-icon')}
      <Spacer size='medium' />
      {superBlockIntroText.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
      {superBlockNoteText && (
        <div className='alert alert-info' style={{ marginTop: '2rem' }}>
          {superBlockNoteText}
        </div>
      )}
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';

export default SuperBlockIntro;
