import React from 'react';

export const FormControlFeedback = ({
  children,
  className,
  ...props
}: React.ComponentProps<'span'>): JSX.Element => {
  const defaultClasses =
    'absolute top-[30px] right-0 z-2 block w-8 h-8 leading-8 text-center pointer-events-none text-green-700';

  const classes = [className, defaultClasses].join(' ');
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
