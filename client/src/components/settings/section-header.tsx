import { ReactElement, ReactNode } from 'react';

import FullWidthRow from '../helpers/full-width-row';

type SectionHeaderProps = {
  children: string | ReactNode | ReactElement;
};

function SectionHeader({ children }: SectionHeaderProps): JSX.Element {
  return (
    <FullWidthRow>
      <h2 className='text-center'>{children}</h2>
      <hr />
    </FullWidthRow>
  );
}

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
