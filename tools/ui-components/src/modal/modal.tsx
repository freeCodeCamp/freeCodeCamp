// import React, { createContext } from 'react';
// import {
//   Root,
//   Trigger,
//   Portal,
//   Content,
//   Title,
//   Description,
//   Overlay,
//   Close
// } from '@radix-ui/react-dialog';

// type ModalProps = React.ComponentProps<typeof Root> & { size?: 'lg' };
// type ModalHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
//   closeButton?: boolean;
// };

// const ModalContext = createContext<string | undefined>(undefined);

// const Modal = ({ size, ...rest }: ModalProps) => {
//   const context = size;
//   return (
//     <ModalContext.Provider value={context}>
//       <Root {...rest} />
//     </ModalContext.Provider>
//   );
// };

// const ModalOverlay = React.forwardRef<
//   React.ElementRef<typeof Overlay>,
//   React.ComponentPropsWithoutRef<typeof Overlay>
// >(({ className, ...props }, ref) => {
//   return (
//     <Overlay
//       className={`fixed inset-0 bg-background-secondary opacity-50 z-10 ${
//         className ?? ''
//       }`}
//       ref={ref}
//       {...props}
//     />
//   );
// });

// const ModalContent = React.forwardRef<
//   React.ElementRef<typeof Content>,
//   React.ComponentPropsWithoutRef<typeof Content>
// >(({ className, ...props }, ref) => {
//   const size = React.useContext(ModalContext);
//   return (
//     <Content
//       ref={ref}
//       className={`bg-background-secondary border border-foreground-secondary border-solid fixed top-[25%] left-[25%] md:shadow-lg md:w-[600px] md:mx-auto md:my-[30px] z-20 ${
//         size === 'lg' ? 'min-[992px]:w-[900px]' : ''
//       } ${className ?? ''}`}
//       {...props}
//     />
//   );
// });

// const ModalLayer = React.forwardRef<
//   React.ElementRef<typeof Content>,
//   React.ComponentPropsWithoutRef<typeof Content>
// >((props, ref) => {
//   return (
//     <Portal>
//       <ModalOverlay />
//       <ModalContent ref={ref} {...props} />
//     </Portal>
//   );
// });

// const ModalHeader = React.forwardRef<React.ElementRef<'div'>, ModalHeaderProps>(
//   ({ className, children, closeButton, ...props }, ref) => (
//     <div
//       ref={ref}
//       className={`p-4 border-t-[0px] border-r-[0px] border-l-[0px] border-b-3 border-solid border-foreground-secondary flex justify-between items-center ${
//         className ?? ''
//       }`}
//       {...props}
//     >
//       {children}
//       {closeButton && (
//         <Close className='bg-transparent text-inherit text-[28px] opacity-50 border-none focus-visible:text-inherit focus-visible:opacity-100 hover:text-inherit hover:opacity-100'>
//           <span className='sr-only'>Close</span>
//           <span aria-hidden='true'>x</span>
//         </Close>
//       )}
//     </div>
//   )
// );

// const ModalTitle = React.forwardRef<
//   React.ElementRef<typeof Title>,
//   React.ComponentPropsWithoutRef<typeof Title>
// >(({ className, ...props }, ref) => (
//   <Title
//     ref={ref}
//     className={`text-foreground-primary font-semibold text-base m-0 ${
//       className ?? ''
//     }`}
//     {...props}
//   />
// ));

// const ModalFooter = React.forwardRef<
//   React.ElementRef<'div'>,
//   React.ComponentPropsWithoutRef<'div'>
// >(({ className, ...props }, ref) => {
//   const size = React.useContext(ModalContext);
//   return (
//     <div
//       ref={ref}
//       className={`text-right p-[15px] border border-foreground-secondary border-solid m-0 ${
//         size === 'lg' ? 'min-[992px]:w-[900px]' : ''
//       } ${className ?? ''}`}
//       {...props}
//     />
//   );
// });

// ModalLayer.displayName = 'ModalLayer';
// ModalTitle.displayName = 'ModalTitle';
// ModalHeader.displayName = 'ModalHeader';
// ModalOverlay.displayName = 'ModalOverlay';
// ModalContent.displayName = 'ModalContent';
// ModalFooter.displayName = 'ModalDescription';

// Modal.Close = Close;
// Modal.Trigger = Trigger;
// Modal.Body = Description;
// Modal.Layer = ModalLayer;
// Modal.Title = ModalTitle;
// Modal.Header = ModalHeader;
// Modal.Footer = ModalFooter;

// export { Modal };

import React, { ReactNode, createContext, useContext } from 'react';
import { Root, Portal, Content, Title, Overlay } from '@radix-ui/react-dialog';
import { CloseButton } from '../close-button';

export type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: 'large' | 'small';
  variant?: 'default' | 'danger';
};

type HeaderProps = {
  children: ReactNode;
  showCloseButton?: boolean;
};

const ModalContext = createContext<Pick<ModalProps, 'onClose'>>({
  onClose: () => {}
});

export const Modal = ({ children, open, onClose }: ModalProps) => {
  // radix-ui doesn't support an `onClose` prop.
  // This function is to handle `onClose` accordingly, based on the `open` state.
  const handleOpenChange = () => {
    if (open) {
      onClose();
    }
  };

  return (
    <ModalContext.Provider value={{ onClose }}>
      <Root open={open} onOpenChange={handleOpenChange}>
        <Portal>
          <Overlay>
            <Content>{children}</Content>
          </Overlay>
        </Portal>
      </Root>
    </ModalContext.Provider>
  );
};

const Header = ({ children, showCloseButton = true }: HeaderProps) => {
  const { onClose } = useContext(ModalContext);

  if (showCloseButton) {
    return (
      <div>
        <Title>{children}</Title>
        <CloseButton onClick={onClose} />
      </div>
    );
  }

  return <Title>{children}</Title>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
