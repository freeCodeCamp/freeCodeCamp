import React, { type ElementType, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type RefProp } from '../../utils/render.js';
import { _internal_ComponentDescription } from '../description/description.js';
import { _internal_ComponentLabel } from '../label/label.js';
declare let DEFAULT_GROUP_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
export type SwitchGroupProps<TTag extends ElementType> = Props<TTag>;
declare function GroupFn<TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(props: SwitchGroupProps<TTag>): JSX.Element;
declare let DEFAULT_SWITCH_TAG: "button";
interface SwitchRenderPropArg {
    checked: boolean;
}
type SwitchPropsWeControl = 'aria-checked' | 'aria-describedby' | 'aria-labelledby' | 'role';
export type SwitchProps<TTag extends ElementType> = Props<TTag, SwitchRenderPropArg, SwitchPropsWeControl, {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?(checked: boolean): void;
    name?: string;
    value?: string;
    disabled?: boolean;
    form?: string;
    tabIndex?: number;
}>;
declare function SwitchFn<TTag extends ElementType = typeof DEFAULT_SWITCH_TAG>(props: SwitchProps<TTag>, ref: Ref<HTMLButtonElement>): JSX.Element;
export interface _internal_ComponentSwitch extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_SWITCH_TAG>(props: SwitchProps<TTag> & RefProp<typeof SwitchFn>): JSX.Element;
}
export interface _internal_ComponentSwitchGroup extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(props: SwitchGroupProps<TTag> & RefProp<typeof GroupFn>): JSX.Element;
}
export interface _internal_ComponentSwitchLabel extends _internal_ComponentLabel {
}
export interface _internal_ComponentSwitchDescription extends _internal_ComponentDescription {
}
export declare let Switch: _internal_ComponentSwitch & {
    Group: _internal_ComponentSwitchGroup;
    Label: _internal_ComponentSwitchLabel;
    Description: _internal_ComponentSwitchDescription;
};
export {};
