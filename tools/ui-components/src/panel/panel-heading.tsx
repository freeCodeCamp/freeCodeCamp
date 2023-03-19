import React, { useContext } from 'react';
import { PanelContext } from './panel';

const defaultHeadingStyle =
  'border-b-1 border-solid border-background-tertiary';
const primaryHeadingStyle =
  'border-b-1 border-solid border-foreground-primary text-foreground-primary';
const infoHeadingStyle = 'text-background-info bg-foreground-info';
const dangerHeadingStyle = 'text-background-danger bg-foreground-danger';

export const PanelHeading = ({
  children,
  props
}: {
  children: React.ReactNode;
  props?: React.ComponentProps<'div'>;
}): JSX.Element => {
  const { bsStyle } = useContext(PanelContext);
  const styles =
    bsStyle === 'primary'
      ? primaryHeadingStyle
      : bsStyle === 'info'
      ? infoHeadingStyle
      : bsStyle === 'danger'
      ? dangerHeadingStyle
      : defaultHeadingStyle;

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};
