import React from 'react';
import { useTranslation } from 'react-i18next';
import { BlockLabel as BlockLabelType } from '@freecodecamp/shared/config/blocks';

interface BlockLabelProps {
  blockLabel: BlockLabelType;
}

function BlockLabel({ blockLabel }: BlockLabelProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={`block-label block-label-${blockLabel}`}>
      {t(`learn.block-type.${blockLabel}`)}
    </div>
  );
}

export default BlockLabel;
