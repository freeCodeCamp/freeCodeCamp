import React from 'react';
import { Link } from 'gatsby';

export interface ProjectControlButtonProps {
  to: string;
  text: string;
  className?: string;
}

export const ProjectControlButton: React.FC<ProjectControlButtonProps> = ({
  to,
  text,
  className
}) => (
  <Link to={to} className={`btn ${className || ''}`}>
    {text}
  </Link>
);
