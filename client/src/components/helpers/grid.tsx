import React from 'react';

interface GridProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const GridStyle = {
  display: 'grid',
  gap: '15px',
  marginBottom: '15px'
};

const Grid = ({ children, ...rest }: GridProps) => {
  return (
    <div {...rest} style={GridStyle}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';

export default Grid;
