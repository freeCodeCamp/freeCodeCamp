import React, { ComponentProps } from 'react';
import { Content } from '@radix-ui/react-tabs';

export interface TabPaneProps extends React.HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  eventKey: string;
  triggerChildren?: React.ReactNode;
  props?: ComponentProps<typeof Content>;
}
