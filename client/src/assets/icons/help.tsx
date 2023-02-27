import React from 'react';

const wrapper = {
  display: 'grid',
  placeItems: 'center',
  position: 'relative',
  padding: 'inherit'
} as React.CSSProperties;

const speechBubbleIcon = {
  position: 'absolute'
} as React.CSSProperties;

const questionMarkIcon = {
  position: 'absolute',
  top: '-3px',
  width: '9px'
} as React.CSSProperties;

function Help(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
      <div style={wrapper}>
        <svg
          style={speechBubbleIcon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill='currentColor'
          {...props}
        >
          <path d='M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z' />
        </svg>
        <svg
          style={questionMarkIcon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          fill='currentColor'
          {...props}
        >
          <path d='M64 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H128C57.3 32 0 89.3 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z' />
        </svg>
      </div>
    </>
  );
}

Help.displayName = 'Help';

export default Help;
