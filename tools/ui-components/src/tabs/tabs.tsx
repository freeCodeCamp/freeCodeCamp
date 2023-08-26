import React from 'react';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';

const buttonClassNames =
  'flex-1 block relative px-2.5 py-[5px] text-sm text-foreground-secondary border-none aria-selected:font-bold aria-selected:bg-foreground-quaternary aria-selected:text-background-secondary hover:bg-background-quaternary';

// remove additional border styles after migration
const listClassNames =
  'flex mb-0 pl-0 mt-0  border-t-[0px] border-r-[0px] border-l-[0px] border-b-[1px] border-solid border-foreground-quaternary';

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
  const listClasses = [listClassNames, className].join(' ');
  return <List ref={ref} className={listClasses} {...props} />;
});

export const Tabs = Root;
export const TabsContent = Content;

TabsContent.displayName = Content.displayName;
TabsTrigger.displayName = Trigger.displayName;
TabsList.displayName = List.displayName;
