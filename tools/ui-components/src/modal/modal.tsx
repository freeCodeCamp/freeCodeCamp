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

type ModalProps = React.ComponentProps<typeof Root> & { size?: 'lg' };
type ModalHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  closeButton?: boolean;
};

const ModalContext = createContext<string | undefined>(undefined);

const Modal = ({ size, ...rest }: ModalProps) => {
  const context = size;
  return (
    <ModalContext.Provider value={context}>
      <Root {...rest} />
    </ModalContext.Provider>
  );
};

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => {
  return (
    <Overlay
      className={`fixed inset-0 bg-background-secondary bg-opacity-50 ${
        className ?? ''
      }`}
      ref={ref}
      {...props}
    />
  );
});

const ModalContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => {
  const size = React.useContext(ModalContext);
  return (
    <Content
      ref={ref}
      className={`bg-background-secondary border border-foreground-secondary border-solid relative md:shadow-lg md:w-[600px] md:mx-auto md:my-[30px] ${
        size === 'lg' ? 'min-[992px]:w-[900px]' : ''
      } ${className ?? ''}`}
      {...props}
    />
  );
});

const ModalBody = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => {
  return (
    <Portal>
      <ModalOverlay />
      <ModalContent ref={ref} {...props} />
    </Portal>
  );
});

const ModalHeader = React.forwardRef<React.ElementRef<'div'>, ModalHeaderProps>(
  ({ className, children, closeButton, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-4 border-t-[0px] border-r-[0px] border-l-[0px] border-b-3 border-solid border-foreground-secondary flex justify-between items-center ${
        className ?? ''
      }`}
      {...props}
    >
      {children}
      {closeButton && (
        <Close className='bg-transparent text-inherit text-[28px] opacity-50 border-none focus-visible:text-inherit focus-visible:opacity-100 hover:text-inherit hover:opacity-100'>
          <span className='sr-only'>Close</span>
          <span aria-hidden='true'>x</span>
        </Close>
      )}
    </div>
  )
);

const ModalTitle = React.forwardRef<
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

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => {
  const size = React.useContext(ModalContext);
  return (
    <Description
      ref={ref}
      className={`text-right p-[15px] border border-foreground-secondary border-solid m-0 ${
        size === 'lg' ? 'min-[992px]:w-[900px]' : ''
      } ${className ?? ''}`}
      {...props}
    />
  );
});

ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalTitle.displayName = 'ModalTitle';
ModalOverlay.displayName = 'ModalOverlay';
ModalContent.displayName = 'ModalContent';
ModalDescription.displayName = 'ModalDescription';

Modal.Body = ModalBody;
Modal.Close = Close;
Modal.Header = ModalHeader;
Modal.Footer = ModalDescription;
Modal.Trigger = Trigger;

export { Modal };
