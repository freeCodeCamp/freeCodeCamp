import React from 'react';

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
      <svg
        aria-hidden='true'
        viewBox='0 0 448 512'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path d='M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z' />
      </svg>
    </>
  );
}

DatabaseIcon.displayName = 'Database';

export default DatabaseIcon;
