import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'info' | 'danger';
}
