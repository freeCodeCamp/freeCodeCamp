import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  bsStyle?: 'primary' | 'info' | 'danger';
}
