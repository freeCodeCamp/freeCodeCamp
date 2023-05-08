import React, { createContext, useContext } from 'react';
import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items>;

export type DropdownProps = React.ComponentPropsWithoutRef<typeof Menu> & {
  dropup?: boolean;
};

type DropDownButtonProps = React.ComponentPropsWithoutRef<typeof Menu>;

const DropDownContext = createContext<DropdownProps>({});

const dropDownItems =
  'shadow-lg bg-foreground-primary text-background-primary text-center ring-1 ring-black ring-opacity-5 focus:outline-transparent origin-top-right absolute min-w-full py-1 z-10';
const dropUpItems = dropDownItems + ' transform -translate-y-full top-0';
const toggleClassNames =
  'cursor-pointer border-3 text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 relative hover:bg-foreground-primary hover:text-background-primary btn-block border-foreground-primary';

export const MenuItems = React.forwardRef<
  React.ElementRef<typeof Menu.Items>,
  MenuItemsProps
>(({ children, className }, ref) => {
  const { dropup } = useContext(DropDownContext);

  const itemsClasses = dropup ? dropUpItems : dropDownItems;
  const buttonClass: string = [className, itemsClasses].join(' ');
  return (
    <Menu.Items as='ul' className={buttonClass} ref={ref}>
      {children}
    </Menu.Items>
  );
});

const DropDownButton = ({
  children,
  className,
  ...rest
}: DropDownButtonProps) => {
  const { dropup } = useContext(DropDownContext);

  const classes = [className, toggleClassNames].join(' ');
  return (
    <Menu.Button className={classes} {...rest}>
      {children}
      <FontAwesomeIcon
        icon={dropup ? faCaretUp : faCaretDown}
        className='mt-2 ml-2 -mr-1 h-3 w-3 text-violet-200'
        aria-hidden='true'
      />
    </Menu.Button>
  );
};

export const Dropdown = ({
  children,
  dropup,
  ...props
}: DropdownProps): JSX.Element => {
  return (
    <DropDownContext.Provider value={{ dropup }}>
      <Menu className='relative' as='div' {...props}>
        {children}
      </Menu>
    </DropDownContext.Provider>
  );
};

Dropdown.Menu = MenuItems;
Dropdown.Toggle = DropDownButton;

MenuItems.displayName = 'MenuItems';
Dropdown.displayName = 'Dropdown';
