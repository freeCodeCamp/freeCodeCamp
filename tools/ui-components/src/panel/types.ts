import React from 'react';

export interface PanelProps extends React.HTMLAttributes<Element> {
  className?: string;
  children?: React.ReactNode;
  bsStyle?: 'primary' | 'info' | 'danger';
}
