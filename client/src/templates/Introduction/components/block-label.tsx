import React from 'react';
import { useTranslation } from 'react-i18next';
import { BlockTypes } from '../../../../../shared/config/blocks';

interface BlockLabelProps {
  blockType: BlockTypes;
}

function BlockLabel({ blockType }: BlockLabelProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={`block-label block-label-${blockType}`}>
      {t(`learn.block-type.${blockType}`)}
    </div>
  );
}

export default BlockLabel;
