import React from 'react';

function ResponsiveDesign(
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
        <path d='M112 48h352v48h48V32a32.09 32.09 0 00-32-32H96a32.09 32.09 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H112zm492 80H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-12 336H432V176h160z' />
      </svg>
    </>
  );
}

ResponsiveDesign.displayName = 'ResponsiveDesign';

export default ResponsiveDesign;
