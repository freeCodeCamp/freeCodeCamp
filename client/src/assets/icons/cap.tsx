import React from 'react';
function CapIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='61'
      height='60'
      viewBox='0 0 61 60'
      fill='none'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M10.1154 48.7552L10.1154 30.7553L28.1154 42.7553L47.1154 30.7553L47.1154 48.7552C47.1154 48.7552 39.854 59.7899 28.1154 59.7553C16.3769 59.7206 10.1154 48.7552 10.1154 48.7552Z'
        fill='black'
      />
      <path
        d='M53.0108 46.5927L60.0108 46.5927L57.1154 36.5926L57.1154 20.6612L28.1574 0.0826199L0.115235 20.6612L28.1154 38.7553L56.0108 21.3504L56.0108 36.5926L53.0108 46.5927Z'
        fill='black'
      />
    </svg>
  );
}

CapIcon.displayName = 'CapIcon';

export default CapIcon;
