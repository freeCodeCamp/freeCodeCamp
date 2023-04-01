import React from 'react';
import { Content, Trigger } from '@radix-ui/react-tabs';
import { TabPaneProps } from './types';

const defaultClasses =
  'block relative mr-[2px] border-1 border-solid border-background-tertiary border-b-transparent';

const TabTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ children, ...props }, ref) => {
  return (
    <Trigger {...props} ref={ref}>
      {children}
    </Trigger>
  );
});

const TabContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ children, ...props }, ref) => {
  return (
    <Content {...props} ref={ref}>
      {children}
    </Content>
  );
});

export const TabPane = ({
  id,
  eventKey,
  isActive,
  className,
  triggerChildren,
  children,
  props,
  ...rest
}: TabPaneProps): JSX.Element => {
  // the id should be inherited from the tabs
  const tabId = `${id ?? ''}-tab-instructions`;
  const ariaControls = `${id ?? ''}-pane-controls`;
  const classes = [defaultClasses, className].join(' ');
  // Tabs is responsible for when the aria is active
  return (
    <>
      <li role='presentation'>
        <TabTrigger
          className={classes}
          id={tabId}
          role='tab'
          aria-controls={ariaControls}
          aria-selected={isActive}
          value={eventKey}
          {...rest}
        >
          {triggerChildren}
        </TabTrigger>
      </li>
      <TabContent value={eventKey} {...props}>
        {children}
      </TabContent>
    </>
  );
};

TabTrigger.displayName = Trigger.displayName;
TabContent.displayName = Content.displayName;
