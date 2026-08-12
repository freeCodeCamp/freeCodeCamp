import React from 'react';

function A1SpanishIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38 2.5H25.5V22.5H45.5V6C45.5 3.79086 43.7091 2 41.5 2.5H38ZM45.5 25.5H25.5V45.5H41.5C43.7091 45.5 45.5 43.7091 45.5 41.5V25.5ZM22.5 22.5V2.5H10H6.5C4.29086 2.5 2.5 4.29086 2.5 6.5V22.5H22.5ZM2.5 25.5H22.5V45.5H6.5C4.29086 45.5 2.5 43.7091 2.5 41.5V25.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5V41.5C0 45.0899 2.91015 48 6.5 48H41.5C45.0899 48 48 45.0899 48 41.5V6.5C48 2.91015 45.0899 0 41.5 0H6.5Z'
      />
      <text
        x={12}
        y={14}
        fontSize={16}
        fontFamily='Lato, sans-serif'
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='middle'
        fill='currentColor'
        stroke='none'
      >
        A
      </text>
      <text
        x={36}
        y={14}
        fontSize={16}
        fontFamily='Lato, sans-serif'
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='middle'
        fill='currentColor'
        stroke='none'
      >
        1
      </text>
      <text
        x={12}
        y={37}
        fontSize={16}
        fontFamily='Lato, sans-serif'
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='middle'
        fill='currentColor'
        stroke='none'
      >
        E
      </text>
      <text
        x={36}
        y={37}
        fontSize={16}
        fontFamily='Lato, sans-serif'
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='middle'
        fill='currentColor'
        stroke='none'
      >
        S
      </text>
    </svg>
  );
}

A1SpanishIcon.displayName = 'A1SpanishIcon';

export default A1SpanishIcon;
