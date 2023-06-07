import React from 'react';

function CollegeAlgebra(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
      <svg
        aria-hidden='true'
        viewBox='0 0 640 512'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path d='M289 24.2C292.5 10 305.3 0 320 0H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H345L239 487.8c-3.2 13-14.2 22.6-27.6 24s-26.1-5.5-32.1-17.5L76.2 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c12.1 0 23.2 6.8 28.6 17.7l73.3 146.6L289 24.2zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z' />
      </svg>
    </>
  );
}

CollegeAlgebra.displayName = 'CollegeAlgebra';

export default CollegeAlgebra;
