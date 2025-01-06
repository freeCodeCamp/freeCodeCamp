import React from 'react';

import FullWidthRow from '../helpers/full-width-row';

type SectionHeaderProps = {
  children: string | React.ReactNode | React.ReactElement;
  dataPlaywrightTestLabel?: string;
};

function SectionHeader({
  children,
  dataPlaywrightTestLabel
}: SectionHeaderProps): JSX.Element {
  return (
    <FullWidthRow>
      <h2
        data-playwright-test-label={dataPlaywrightTestLabel}
        className='text-center'
      >
        {children}
      </h2>
      <hr />
    </FullWidthRow>
  );
}

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
