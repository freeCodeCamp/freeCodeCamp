import React, { type ElementType, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type PropsForFeatures, type RefProp } from '../../utils/render.js';
declare let DEFAULT_MENU_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface MenuRenderPropArg {
    open: boolean;
    close: () => void;
}
export type MenuProps<TTag extends ElementType> = Props<TTag, MenuRenderPropArg, never, {
    __demoMode?: boolean;
}>;
declare function MenuFn<TTag extends ElementType = typeof DEFAULT_MENU_TAG>(props: MenuProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare let DEFAULT_BUTTON_TAG: "button";
interface ButtonRenderPropArg {
    open: boolean;
}
type ButtonPropsWeControl = 'aria-controls' | 'aria-expanded' | 'aria-haspopup';
export type MenuButtonProps<TTag extends ElementType> = Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl, {
    disabled?: boolean;
}>;
declare function ButtonFn<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: MenuButtonProps<TTag>, ref: Ref<HTMLButtonElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_ITEMS_TAG: "div";
interface ItemsRenderPropArg {
    open: boolean;
}
type ItemsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'role' | 'tabIndex';
declare let ItemsRenderFeatures: number;
export type MenuItemsProps<TTag extends ElementType> = Props<TTag, ItemsRenderPropArg, ItemsPropsWeControl> & PropsForFeatures<typeof ItemsRenderFeatures>;
declare function ItemsFn<TTag extends ElementType = typeof DEFAULT_ITEMS_TAG>(props: MenuItemsProps<TTag>, ref: Ref<HTMLDivElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_ITEM_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface ItemRenderPropArg {
    active: boolean;
    disabled: boolean;
    close: () => void;
}
type ItemPropsWeControl = 'aria-disabled' | 'role' | 'tabIndex';
export type MenuItemProps<TTag extends ElementType> = Props<TTag, ItemRenderPropArg, ItemPropsWeControl> & {
    disabled?: boolean;
};
declare function ItemFn<TTag extends ElementType = typeof DEFAULT_ITEM_TAG>(props: MenuItemProps<TTag>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export interface _internal_ComponentMenu extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_MENU_TAG>(props: MenuProps<TTag> & RefProp<typeof MenuFn>): JSX.Element;
}
export interface _internal_ComponentMenuButton extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: MenuButtonProps<TTag> & RefProp<typeof ButtonFn>): JSX.Element;
}
export interface _internal_ComponentMenuItems extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_ITEMS_TAG>(props: MenuItemsProps<TTag> & RefProp<typeof ItemsFn>): JSX.Element;
}
export interface _internal_ComponentMenuItem extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_ITEM_TAG>(props: MenuItemProps<TTag> & RefProp<typeof ItemFn>): JSX.Element;
}
export declare let Menu: _internal_ComponentMenu & {
    Button: _internal_ComponentMenuButton;
    Items: _internal_ComponentMenuItems;
    Item: _internal_ComponentMenuItem;
};
export {};
