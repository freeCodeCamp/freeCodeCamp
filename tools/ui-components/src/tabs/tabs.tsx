import React from 'react';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';

const defaultButtonClassNames =
  'flex-1 mr-0.5 px-2.5 py-[5px] border-1 border-transparent text-sm text-foreground-secondary';
const defaultContentClasses =
  'block relative mr-[2px] border-1 border-solid border-background-tertiary border-b-transparent';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => {
  const triggerClasses = [defaultButtonClassNames, className].join(' ');
  return <Trigger ref={ref} className={triggerClasses} {...props} />;
});

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => {
  const ContentClasses = [defaultContentClasses, className].join(' ');
  return <Content ref={ref} className={ContentClasses} {...props} />;
});

export const Tabs = Root;
export const TabsList = List;

TabsContent.displayName = Content.displayName;
TabsTrigger.displayName = Trigger.displayName;
