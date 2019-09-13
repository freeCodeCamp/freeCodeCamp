import React from 'react';

function Initial(props) {
  return (
    <svg
      height='50'
      viewBox='0 0 200 200'
      width='50'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <title>Initial</title>
        <circle
          cx='100'
          cy='99'
          fill='var(--primary-color)'
          r='95'
          stroke='var(--primary-color)'
          strokeDasharray='null'
          strokeLinecap='null'
          strokeLinejoin='null'
        />
        <svg
          height='200'
          viewBox='-13 -12 50 50'
          width='200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d={
              'M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-' +
              '.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 ' +
              '2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.' +
              '242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.' +
              '635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.' +
              '496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4' +
              '.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743' +
              ' 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-' +
              '1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-' +
              '3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.' +
              '447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 ' +
              '1-1z'
            }
            fill='var(--primary-background)'
          />
        </svg>
      </g>
    </svg>
  );
}

Initial.displayName = 'Initial';

export default Initial;
