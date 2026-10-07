import React, { type ElementType, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type PropsForFeatures, type RefProp } from '../../utils/render.js';
declare let DEFAULT_TABS_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface TabsRenderPropArg {
    selectedIndex: number;
}
export type TabGroupProps<TTag extends ElementType> = Props<TTag, TabsRenderPropArg, never, {
    defaultIndex?: number;
    onChange?: (index: number) => void;
    selectedIndex?: number;
    vertical?: boolean;
    manual?: boolean;
}>;
declare function GroupFn<TTag extends ElementType = typeof DEFAULT_TABS_TAG>(props: TabGroupProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare let DEFAULT_LIST_TAG: "div";
interface ListRenderPropArg {
    selectedIndex: number;
}
type ListPropsWeControl = 'aria-orientation' | 'role';
export type TabListProps<TTag extends ElementType> = Props<TTag, ListRenderPropArg, ListPropsWeControl, {}>;
declare function ListFn<TTag extends ElementType = typeof DEFAULT_LIST_TAG>(props: TabListProps<TTag>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_TAB_TAG: "button";
interface TabRenderPropArg {
    selected: boolean;
    disabled: boolean;
}
type TabPropsWeControl = 'aria-controls' | 'aria-selected' | 'role' | 'tabIndex';
export type TabProps<TTag extends ElementType> = Props<TTag, TabRenderPropArg, TabPropsWeControl> & {
    disabled?: boolean;
};
declare function TabFn<TTag extends ElementType = typeof DEFAULT_TAB_TAG>(props: TabProps<TTag>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_PANELS_TAG: "div";
interface PanelsRenderPropArg {
    selectedIndex: number;
}
export type TabPanelsProps<TTag extends ElementType> = Props<TTag, PanelsRenderPropArg>;
declare function PanelsFn<TTag extends ElementType = typeof DEFAULT_PANELS_TAG>(props: TabPanelsProps<TTag>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_PANEL_TAG: "div";
interface PanelRenderPropArg {
    selected: boolean;
}
type PanelPropsWeControl = 'role' | 'aria-labelledby';
declare let PanelRenderFeatures: number;
export type TabPanelProps<TTag extends ElementType> = Props<TTag, PanelRenderPropArg, PanelPropsWeControl, PropsForFeatures<typeof PanelRenderFeatures> & {
    id?: string;
    tabIndex?: number;
}>;
declare function PanelFn<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(props: TabPanelProps<TTag>, ref: Ref<HTMLElement>): JSX.Element | null;
export interface _internal_ComponentTab extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_TAB_TAG>(props: TabProps<TTag> & RefProp<typeof TabFn>): JSX.Element;
}
export interface _internal_ComponentTabGroup extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_TABS_TAG>(props: TabGroupProps<TTag> & RefProp<typeof GroupFn>): JSX.Element;
}
export interface _internal_ComponentTabList extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_LIST_TAG>(props: TabListProps<TTag> & RefProp<typeof ListFn>): JSX.Element;
}
export interface _internal_ComponentTabPanels extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_PANELS_TAG>(props: TabPanelsProps<TTag> & RefProp<typeof PanelsFn>): JSX.Element;
}
export interface _internal_ComponentTabPanel extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(props: TabPanelProps<TTag> & RefProp<typeof PanelFn>): JSX.Element;
}
export declare let Tab: _internal_ComponentTab & {
    Group: _internal_ComponentTabGroup;
    List: _internal_ComponentTabList;
    Panels: _internal_ComponentTabPanels;
    Panel: _internal_ComponentTabPanel;
};
export {};
