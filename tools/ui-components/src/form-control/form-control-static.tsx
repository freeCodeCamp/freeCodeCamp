import React from 'react';

export const FormControlStatic = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>): JSX.Element => {
  const defaultClasses = 'py-1.5 mb-0 min-h-43-px text-foreground-secondary';

  const classes = [defaultClasses, className].join(' ');
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
