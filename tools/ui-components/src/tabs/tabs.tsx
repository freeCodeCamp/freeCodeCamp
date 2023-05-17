import React from 'react';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import './button.css';

const buttonClassNames =
  'flex-1 block relative px-2.5 py-[5px] mr-[2px] border-1 border-solid border-background-tertiary border-b-transparent text-sm text-foreground-secondary';

// The aria-selected selector isn't working, so I am importing css file for now
// [aria-selected="true"]:border-0  [aria-selected="true"]:font-black  [aria-selected="true"]:bg-foreground-quaternary [aria-selected="true"]:text-background-secondary'
const listClassNames =
  'flex mb-0 pl-0 mt-0 border-b border-solid border-background-quaternary list-none hover:bg-background-quaternary hover:text-foreground-secondary';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => {
  const triggerClasses = [buttonClassNames, className].join(' ');
  return <Trigger ref={ref} className={triggerClasses} {...props} />;
});

export const TabsList = React.forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => {
  const triggerClasses = [listClassNames, className].join(' ');
  return <List ref={ref} className={triggerClasses} {...props} />;
});

export const Tabs = Root;
export const TabsContent = Content;

TabsContent.displayName = Content.displayName;
TabsTrigger.displayName = Trigger.displayName;
TabsList.displayName = List.displayName;
