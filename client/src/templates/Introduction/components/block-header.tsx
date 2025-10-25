import React from 'react';
import { isEmpty } from 'lodash';
import { Button } from '@freecodecamp/ui';

import { BlockTypes } from '../../../../../shared-dist/config/blocks';
import { ProgressBar } from '../../../components/Progress/progress-bar';
import DropDown from '../../../assets/icons/dropdown';
import CheckMark from './check-mark';
import BlockLabel from './block-label';
import BlockIntros from './block-intros';

interface BlockHeaderProps {
  blockDashed: string;
  blockTitle: string;
  blockType: BlockTypes | null;
  courseCompletionStatus: string;
  completedCount: number;
  handleClick: () => void;
  isCompleted: boolean;
  isExpanded: boolean;
  percentageCompleted: number;
  blockIntroArr?: string[];
  accordion?: boolean;
  blockUrl?: string;
}

function BlockHeader({
  blockDashed,
  blockTitle,
  blockType,
  completedCount,
  courseCompletionStatus,
  handleClick,
  isCompleted,
  isExpanded,
  percentageCompleted,
  blockIntroArr,
  accordion,
  blockUrl
}: BlockHeaderProps): JSX.Element {
  return (
    <>
      <h3 className='block-grid-title'>
        <Button
          aria-expanded={isExpanded ? 'true' : 'false'}
          aria-controls={`${blockDashed}-panel`}
          className='block-header'
          onClick={handleClick}
          {...(accordion && blockUrl ? { href: blockUrl } : {})}
        >
          <span className='block-header-button-text map-title'>
            {accordion &&
              (blockUrl ? (
                <span className='aligner-dash'></span>
              ) : (
                <DropDown />
              ))}
            <CheckMark isCompleted={isCompleted} />
            {!accordion && blockType && <BlockLabel blockType={blockType} />}
            <span>
              {blockTitle}
              <span className='sr-only'>, {courseCompletionStatus}</span>
            </span>
            {accordion && blockType && <BlockLabel blockType={blockType} />}
            {!accordion && <DropDown />}
          </span>
          {!isExpanded && !isCompleted && completedCount > 0 && (
            <div aria-hidden='true' className='progress-wrapper'>
              <div>
                <ProgressBar now={percentageCompleted} />
              </div>
              <span>{`${percentageCompleted}%`}</span>
            </div>
          )}
        </Button>
      </h3>
      {isExpanded && !isEmpty(blockIntroArr) && (
        <BlockIntros intros={blockIntroArr as string[]} />
      )}
    </>
  );
}

export default BlockHeader;
