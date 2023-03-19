import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  bsStyle?: 'primary' | 'info' | 'danger';
}
