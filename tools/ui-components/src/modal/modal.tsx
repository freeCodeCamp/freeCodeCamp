import React, { createContext } from 'react';
import {
  Root,
  Trigger,
  Portal,
  Content,
  Title,
  Description,
  Overlay,
  Close
} from '@radix-ui/react-dialog';

type ModalProps = React.ComponentProps<typeof Root> & { bsSize?: 'lg' };
type ModalHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  closeButton?: boolean;
};

const ModalContext = createContext<string | undefined>(undefined);

export const ModalOverlay = Overlay;
export const ModalPortal = Portal;
export const ModalTrigger = Trigger;
export const ModalFooter = Description;
export const ModalClose = Close;

export const Modal = ({ bsSize, ...rest }: ModalProps) => {
  const context = bsSize;
  return (
    <ModalContext.Provider value={context}>
      <Root {...rest} />
    </ModalContext.Provider>
  );
};

export const ModalBody = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => {
  const bsSize = React.useContext(ModalContext);
  return (
    <Content
      ref={ref}
      className={`bg-background-secondary border border-foreground-secondary border-solid relative md:shadow-lg md:w-[600px] md:mx-auto md:my-[30px] ${
        bsSize === 'lg' ? 'min-[992px]:w-[900px]' : ''
      } ${className ?? ''}`}
      {...props}
    />
  );
});

export const ModalHeader = React.forwardRef<
  React.ElementRef<'div'>,
  ModalHeaderProps
>(({ className, children, closeButton, ...props }, ref) => (
  <div
    ref={ref}
    className={`p-4 border-t-[0px] border-r-[0px] border-l-[0px] border-b-3 border-solid border-foreground-secondary ${
      className ?? ''
    }`}
    {...props}
  >
    {children}
    {closeButton && (
      <ModalClose
        className='bg-transparent text-inherit text-lg opacity-50'
        asChild
      >
        <button>
          x<span className='sr-only'>Close</span>
        </button>
      </ModalClose>
    )}
  </div>
));

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={`text-foreground-primary font-semibold text-base m-0 ${
      className ?? ''
    }`}
    {...props}
  />
));

ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalTitle.displayName = 'ModalTitle';
