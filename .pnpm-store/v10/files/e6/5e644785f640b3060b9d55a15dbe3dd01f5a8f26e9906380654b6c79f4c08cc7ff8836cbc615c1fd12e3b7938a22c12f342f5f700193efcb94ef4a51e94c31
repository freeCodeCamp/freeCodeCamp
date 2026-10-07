import * as _radix_ui_react_context from '@radix-ui/react-context';
import * as React from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import * as RovingFocusGroup from '@radix-ui/react-roving-focus';

declare const createTabsScope: _radix_ui_react_context.CreateScope;
type RovingFocusGroupProps = React.ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface TabsProps extends PrimitiveDivProps {
    /** The value for the selected tab, if controlled */
    value?: string;
    /** The value of the tab to select by default, if uncontrolled */
    defaultValue?: string;
    /** A function called when a new tab is selected */
    onValueChange?: (value: string) => void;
    /**
     * The orientation the tabs are layed out.
     * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
     * @defaultValue horizontal
     */
    orientation?: RovingFocusGroupProps['orientation'];
    /**
     * The direction of navigation between toolbar items.
     */
    dir?: RovingFocusGroupProps['dir'];
    /**
     * Whether a tab is activated automatically or manually.
     * @defaultValue automatic
     * */
    activationMode?: 'automatic' | 'manual';
}
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
interface TabsListProps extends PrimitiveDivProps {
    loop?: RovingFocusGroupProps['loop'];
}
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>;
interface TabsTriggerProps extends PrimitiveButtonProps {
    value: string;
}
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TabsContentProps extends PrimitiveDivProps {
    value: string;
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const List: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
declare const Trigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Content: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;

export { Content, List, Root, Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, Trigger, createTabsScope };
