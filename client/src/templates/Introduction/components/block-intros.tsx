import React from 'react';

function BlockIntros({ intros }: { intros: string[] }): JSX.Element {
  return (
    <div className='block-description'>
      {intros.map((title, i) => (
        <p dangerouslySetInnerHTML={{ __html: title }} key={i} />
      ))}
    </div>
  );
}

export default BlockIntros;
