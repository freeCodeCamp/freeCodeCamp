import * as _radix_ui_react_context from '@radix-ui/react-context';
import * as React from 'react';
import { Primitive } from '@radix-ui/react-primitive';

declare const createRovingFocusGroupScope: _radix_ui_react_context.CreateScope;
type Orientation = React.AriaAttributes['aria-orientation'];
type Direction = 'ltr' | 'rtl';
interface RovingFocusGroupOptions {
    /**
     * The orientation of the group.
     * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
     */
    orientation?: Orientation;
    /**
     * The direction of navigation between items.
     */
    dir?: Direction;
    /**
     * Whether keyboard navigation should loop around
     * @defaultValue false
     */
    loop?: boolean;
}
interface RovingFocusGroupProps extends RovingFocusGroupImplProps {
}
declare const RovingFocusGroup: React.ForwardRefExoticComponent<RovingFocusGroupProps & React.RefAttributes<HTMLDivElement>>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface RovingFocusGroupImplProps extends Omit<PrimitiveDivProps, 'dir'>, RovingFocusGroupOptions {
    currentTabStopId?: string | null;
    defaultCurrentTabStopId?: string;
    onCurrentTabStopIdChange?: (tabStopId: string | null) => void;
    onEntryFocus?: (event: Event) => void;
    preventScrollOnEntryFocus?: boolean;
}
type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Primitive.span>;
interface RovingFocusItemProps extends Omit<PrimitiveSpanProps, 'children'> {
    tabStopId?: string;
    focusable?: boolean;
    active?: boolean;
    children?: React.ReactNode | ((props: {
        hasTabStop: boolean;
        isCurrentTabStop: boolean;
    }) => React.ReactNode);
}
declare const RovingFocusGroupItem: React.ForwardRefExoticComponent<RovingFocusItemProps & React.RefAttributes<HTMLSpanElement>>;
declare const Root: React.ForwardRefExoticComponent<RovingFocusGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<RovingFocusItemProps & React.RefAttributes<HTMLSpanElement>>;

export { Item, Root, RovingFocusGroup, RovingFocusGroupItem, type RovingFocusGroupProps, type RovingFocusItemProps, createRovingFocusGroupScope };
