import React from 'react';
import { Link } from '../../../components/helpers/index';
import i18next from 'i18next';

import './challenge-title.css';

import GreenPass from '../../../assets/icons/green-pass';
import BreadCrumb from './bread-crumb';

interface ChallengeTitleProps {
  block: string;
  children: string;
  isCompleted: boolean;
  superBlock: string;
  translationPending: boolean;
}

function ChallengeTitle({
  block,
  children,
  isCompleted,
  superBlock,
  translationPending
}: ChallengeTitleProps): JSX.Element {
  return (
    <div className='challenge-title-wrap'>
      {translationPending && (
        <>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Link
            className='title-translation-cta'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            to={i18next.t('links:help-translate-link-url')}
          >
            {i18next.t('misc.translation-pending')}
          </Link>
        </>
      )}
      <BreadCrumb block={block} superBlock={superBlock} />
      <div className='challenge-title'>
        <div className='title-text'>
          <b>{children}</b>
          {isCompleted ? (
            <GreenPass
              style={{ height: '15px', width: '15px', marginLeft: '7px' }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';

export default ChallengeTitle;
