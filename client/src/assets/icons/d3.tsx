import React from 'react';

function D3Icon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
      <svg
        aria-hidden='true'
        viewBox='-10 -10 116 111'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path d='M0 0h7.75a45.5 45.5 0 110 91H0V71h7.75a25.5 25.5 0 100-51H0zm36.251 0h32a27.75 27.75 0 0121.331 45.5A27.75 27.75 0 0168.251 91h-32a53.69 53.69 0 0018.746-20H68.25a7.75 7.75 0 100-15.5H60.5a53.69 53.69 0 000-20h7.75a7.75 7.75 0 100-15.5H54.997A53.69 53.69 0 0036.251 0z' />
      </svg>
    </>
  );
}

D3Icon.displayName = 'D3';

export default D3Icon;
