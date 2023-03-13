import React, { useContext } from 'react';
import { PanelContext } from './panel';

const primaryHeadingStyle = 'text-background-primary';
const infoHeadingStyle = 'bg-sky-200 text-sky-500';
const dangerHeadingStyle = 'text-background-danger bg-foreground-danger';

export const PanelHeading = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { bsStyle } = useContext(PanelContext);
  const styles =
    bsStyle === 'primary'
      ? primaryHeadingStyle
      : bsStyle === 'info'
      ? infoHeadingStyle
      : bsStyle === 'danger'
      ? dangerHeadingStyle
      : undefined;

  return <div className={styles}>{children}</div>;
};
