import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../shared/config/superblocks';
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
      <h1
        id='content-start'
        className='text-center big-heading'
        data-playwright-test-label='superblock-heading'
      >
        {i18nSuperBlock}
      </h1>
      <Spacer size='medium' />
      <div data-playwright-test-label='superblock-icon'>
        {generateIconComponent(superBlock, 'cert-header-icon')}
      </div>
      <Spacer size='medium' />
      <div data-playwright-test-label='superblock-description-box'>
        {superBlockIntroText.map((str, i) => (
          <p data-playwright-test-label='superblock-description-para' key={i}>{str}</p>
        ))}
      </div>
      {superBlockNoteText && (
        <div
          className='alert alert-info'
          style={{ marginTop: '2rem' }}
          data-playwright-test-label='superblock-note'
        >
          {superBlockNoteText}
        </div>
      )}
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';

export default SuperBlockIntro;
