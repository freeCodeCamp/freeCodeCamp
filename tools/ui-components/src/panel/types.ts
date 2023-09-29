import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  varient?: 'primary' | 'info' | 'danger';
}
