import React from 'react';

export interface TabPaneProps extends React.HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  eventKey?: React.ReactNode;
  props?: React.ComponentProps<'a'>;
}
