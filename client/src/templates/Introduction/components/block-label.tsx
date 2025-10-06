import React from 'react';
import { useTranslation } from 'react-i18next';
import { BlockLabel } from '../../../../../shared-dist/config/blocks';

interface BlockLabelProps {
  blockLabel: BlockLabel;
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
