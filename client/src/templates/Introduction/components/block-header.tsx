import React from 'react';
import { isEmpty } from 'lodash';
import { Button } from '@freecodecamp/ui';
import { Link } from '../../../components/helpers';

import type { BlockLabel as BlockLabelType } from '@freecodecamp/shared/config/blocks';
import { ProgressBar } from '../../../components/Progress/progress-bar';
import DropDown from '../../../assets/icons/dropdown';
import CheckMark from './check-mark';
import BlockLabel from './block-label';
import BlockIntros from './block-intros';

interface BaseBlockHeaderProps {
  blockDashed: string;
  blockTitle: string;
  blockLabel: BlockLabelType | null;
  courseCompletionStatus: string;
  completedCount: number;
  handleClick: () => void;
  isCompleted: boolean;
  isExpanded: boolean;
  percentageCompleted: number;
  blockIntroArr?: string[];
  accordion?: boolean;
}

interface BlockHeaderButtonProps extends BaseBlockHeaderProps {
  blockUrl?: never;
  onLinkClick?: never;
}

interface BlockHeaderLinkProps extends BaseBlockHeaderProps {
  blockUrl: string;
  onLinkClick: () => void;
}

type BlockHeaderProps = BlockHeaderButtonProps | BlockHeaderLinkProps;
function BlockHeader({
  blockDashed,
  blockTitle,
  blockLabel,
  completedCount,
  courseCompletionStatus,
  handleClick,
  isCompleted,
  isExpanded,
  percentageCompleted,
  blockIntroArr,
  accordion,
  blockUrl,
  onLinkClick
}: BlockHeaderProps): JSX.Element {
  const InnerBlockHeader = () => (
    <>
      <span className='block-header-button-text map-title'>
        {accordion &&
          (blockUrl ? <span className='aligner-dash'></span> : <DropDown />)}
        <CheckMark isCompleted={isCompleted} />
        {!accordion && blockLabel && <BlockLabel blockLabel={blockLabel} />}
        <span>
          {blockTitle}
          <span className='sr-only'>, {courseCompletionStatus}</span>
        </span>
        {accordion && blockLabel && <BlockLabel blockLabel={blockLabel} />}
        {!accordion && <DropDown />}
      </span>
      {!accordion && !isExpanded && !isCompleted && completedCount > 0 && (
        <div aria-hidden='true' className='progress-wrapper'>
          <div>
            <ProgressBar now={percentageCompleted} />
          </div>
          <span>{`${percentageCompleted}%`}</span>
        </div>
      )}
    </>
  );

  return (
    <>
      <h3 className='block-grid-title'>
        {accordion && blockUrl ? (
          <Link className='block-header' to={blockUrl} onClick={onLinkClick}>
            <InnerBlockHeader />
          </Link>
        ) : (
          <Button
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-controls={`${blockDashed}-panel`}
            className='block-header'
            onClick={handleClick}
          >
            <InnerBlockHeader />
          </Button>
        )}
      </h3>
      {isExpanded && !isEmpty(blockIntroArr) && (
        <BlockIntros intros={blockIntroArr as string[]} />
      )}
    </>
  );
}

export default BlockHeader;
