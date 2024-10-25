import React from 'react';
import { BlockTypes } from '../../../../../shared/config/blocks';
import { ProgressBar } from '../../../components/Progress/progress-bar';
import DropDown from '../../../assets/icons/dropdown';
import CheckMark from './check-mark';
import BlockLabel from './block-label';

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
  percentageCompleted
}: BlockHeaderProps): JSX.Element {
  return (
    <h3 className='block-grid-title'>
      <button
        aria-expanded={isExpanded ? 'true' : 'false'}
        aria-controls={`${blockDashed}-panel`}
        className='block-header'
        onClick={handleClick}
      >
        <span className='block-header-button-text map-title'>
          <CheckMark isCompleted={isCompleted} />
          {blockType && <BlockLabel blockType={blockType} />}
          <span>
            {blockTitle}
            <span className='sr-only'>, {courseCompletionStatus}</span>
          </span>
          <DropDown />
        </span>
        {!isExpanded && !isCompleted && completedCount > 0 && (
          <div aria-hidden='true' className='progress-wrapper'>
            <div>
              <ProgressBar now={percentageCompleted} />
            </div>
            <span>{`${percentageCompleted}%`}</span>
          </div>
        )}
      </button>
    </h3>
  );
}

export default BlockHeader;
