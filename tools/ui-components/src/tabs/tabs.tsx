import React from 'react';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';

const defaultButtonClassNames =
  'flex-1 mr-0.5 px-2.5 py-[5px] border-1 border-transparent text-sm text-foreground-secondary';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => {
  const triggerClasses = [defaultButtonClassNames, className].join(' ');
  return <Trigger ref={ref} className={triggerClasses} {...props} />;
});

export const Tabs = Root;
export const TabsList = List;
export const TabsContent = Content;

TabsContent.displayName = Content.displayName;
TabsTrigger.displayName = Trigger.displayName;
