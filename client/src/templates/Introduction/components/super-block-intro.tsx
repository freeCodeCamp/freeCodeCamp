import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { SuperBlockIcon } from '../../../assets/icons/superblock-icon';
import { Spacer, Link } from '../../../components/helpers';

interface SuperBlockIntroProps {
  superBlock: SuperBlocks;
}

export const ConditionalDonationAlert = ({
  superBlock
}: {
  superBlock: SuperBlocks;
}): JSX.Element => {
  const { t } = useTranslation();

  if (
    superBlock === SuperBlocks.JsAlgoDataStructNew ||
    superBlock === SuperBlocks.A2English ||
    superBlock === SuperBlocks.TheOdinProject ||
    superBlock === SuperBlocks.UpcomingPython ||
    superBlock === SuperBlocks.SciCompPy
  )
    return (
      <Alert variant='info' className='annual-donation-alert'>
        <p>{t('donate.beta-certification')}</p>
        <hr />
        <p className={'text-center'}>
          <Link
            className='btn'
            key='donate'
            sameTab={false}
            to='/donate'
            // onClick={onDonationAlertClick}
          >
            {t('buttons.donate-now')}
          </Link>
        </p>
      </Alert>
    );
  return <></>;
};

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
        <p dangerouslySetInnerHTML={{ __html: str }} key={i} />
      ))}
      {superBlockNoteText && (
        <div className='alert alert-info' style={{ marginTop: '2rem' }}>
          {superBlockNoteText}
        </div>
      )}
      <ConditionalDonationAlert superBlock={superBlock} />
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';

export default SuperBlockIntro;
