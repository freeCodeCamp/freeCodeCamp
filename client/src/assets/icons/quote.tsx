import React from 'react';

function Quote(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      {...props}
    >
      <path
        d='M25 48.5C38.1168 48.5 48.75 37.8668 48.75 24.75C48.75 11.6332 38.1168 1 25 1C11.8832 1 1.25 11.6332 1.25 24.75C1.25 37.8668 11.8832 48.5 25 48.5Z'
        fill='var(--primary-color)'
        stroke='var(--primary-color)'
      />
      <path
        d='M11 35.9837C13.7505 34.1517 16.501 32.3197 16.5032 25.0085C15.6296 24.9918 11.9169 24.9918 11 24.9918C11 24.0759 11.0181 15.3097 11 14H22V25.0085C22 36.8997 11 35.9837 11 35.9837Z'
        fill='var(--primary-background)'
      />
      <path
        d='M29 35.9837C31.7505 34.1517 34.501 32.3197 34.5032 25.0084C33.6296 24.9919 29.9168 24.9919 29 24.9919C29 24.0759 29.018 15.3097 29 14H40V25.0084C40 36.8997 29 35.9837 29 35.9837Z'
        fill='var(--primary-background)'
      />
    </svg>
  );
}

Quote.displayName = 'Quote';

export default Quote;
