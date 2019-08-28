import React from 'react';

function Caret() {
  return (
    <svg viewBox='0 0 100 100' width='25px'>
      <polygon
        points='-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196'
        style={{ stroke: '#858591', fill: '#858591', strokeWidth: '1px' }}
        transform={
          'matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)'
        }
      />
    </svg>
  );
}

Caret.displayName = 'Caret';

export default Caret;
