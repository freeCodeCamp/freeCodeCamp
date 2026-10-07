import React, { type ElementType, type MouseEventHandler, type MutableRefObject, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type PropsForFeatures, type RefProp } from '../../utils/render.js';
type MouseEvent<T> = Parameters<MouseEventHandler<T>>[0];
declare let DEFAULT_POPOVER_TAG: "div";
interface PopoverRenderPropArg {
    open: boolean;
    close(focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null> | MouseEvent<HTMLElement>): void;
}
export type PopoverProps<TTag extends ElementType> = Props<TTag, PopoverRenderPropArg, never, {
    __demoMode?: boolean;
}>;
declare function PopoverFn<TTag extends ElementType = typeof DEFAULT_POPOVER_TAG>(props: PopoverProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare let DEFAULT_BUTTON_TAG: "button";
interface ButtonRenderPropArg {
    open: boolean;
}
type ButtonPropsWeControl = 'aria-controls' | 'aria-expanded';
export type PopoverButtonProps<TTag extends ElementType> = Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl, {
    disabled?: boolean;
}>;
declare function ButtonFn<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: PopoverButtonProps<TTag>, ref: Ref<HTMLButtonElement>): JSX.Element;
declare let DEFAULT_OVERLAY_TAG: "div";
interface OverlayRenderPropArg {
    open: boolean;
}
type OverlayPropsWeControl = 'aria-hidden';
declare let OverlayRenderFeatures: number;
export type PopoverOverlayProps<TTag extends ElementType> = Props<TTag, OverlayRenderPropArg, OverlayPropsWeControl> & PropsForFeatures<typeof OverlayRenderFeatures>;
declare function OverlayFn<TTag extends ElementType = typeof DEFAULT_OVERLAY_TAG>(props: PopoverOverlayProps<TTag>, ref: Ref<HTMLDivElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_PANEL_TAG: "div";
interface PanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
declare let PanelRenderFeatures: number;
type PanelPropsWeControl = 'tabIndex';
export type PopoverPanelProps<TTag extends ElementType> = Props<TTag, PanelRenderPropArg, PanelPropsWeControl, PropsForFeatures<typeof PanelRenderFeatures> & {
    focus?: boolean;
}>;
declare function PanelFn<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(props: PopoverPanelProps<TTag>, ref: Ref<HTMLDivElement>): JSX.Element;
declare let DEFAULT_GROUP_TAG: "div";
interface GroupRenderPropArg {
}
export type PopoverGroupProps<TTag extends ElementType> = Props<TTag, GroupRenderPropArg>;
declare function GroupFn<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(props: PopoverGroupProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
export interface _internal_ComponentPopover extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_POPOVER_TAG>(props: PopoverProps<TTag> & RefProp<typeof PopoverFn>): JSX.Element;
}
export interface _internal_ComponentPopoverButton extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: PopoverButtonProps<TTag> & RefProp<typeof ButtonFn>): JSX.Element;
}
export interface _internal_ComponentPopoverOverlay extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_OVERLAY_TAG>(props: PopoverOverlayProps<TTag> & RefProp<typeof OverlayFn>): JSX.Element;
}
export interface _internal_ComponentPopoverPanel extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(props: PopoverPanelProps<TTag> & RefProp<typeof PanelFn>): JSX.Element;
}
export interface _internal_ComponentPopoverGroup extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(props: PopoverGroupProps<TTag> & RefProp<typeof GroupFn>): JSX.Element;
}
export declare let Popover: _internal_ComponentPopover & {
    Button: _internal_ComponentPopoverButton;
    Overlay: _internal_ComponentPopoverOverlay;
    Panel: _internal_ComponentPopoverPanel;
    Group: _internal_ComponentPopoverGroup;
};
export {};
