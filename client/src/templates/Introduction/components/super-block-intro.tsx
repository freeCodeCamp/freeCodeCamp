import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { SuperBlockIcon } from '../../../assets/icons/superblock-icon';
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
  } = t<
    string,
    string & {
      title: string;
      intro: string[];
      note: string;
    }
  >(`intro:${superBlock}`);
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
      <SuperBlockIcon className='cert-header-icon' superBlock={superBlock} />
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
