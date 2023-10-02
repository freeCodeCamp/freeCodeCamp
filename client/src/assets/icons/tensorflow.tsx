import React from 'react';

function TensorflowIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
      <svg
        aria-hidden='true'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path d='M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z' />
      </svg>
    </>
  );
}

TensorflowIcon.displayName = 'TensorflowIcon';

export default TensorflowIcon;
