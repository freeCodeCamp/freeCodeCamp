import React, { type ElementType, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type PropsForFeatures, type RefProp } from '../../utils/render.js';
declare let DEFAULT_LISTBOX_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface ListboxRenderPropArg<T> {
    open: boolean;
    disabled: boolean;
    value: T;
}
export type ListboxProps<TTag extends ElementType, TType, TActualType> = Props<TTag, ListboxRenderPropArg<TType>, 'value' | 'defaultValue' | 'onChange' | 'by' | 'disabled' | 'horizontal' | 'name' | 'multiple'> & {
    value?: TType;
    defaultValue?: TType;
    onChange?(value: TType): void;
    by?: (keyof TActualType & string) | ((a: TActualType, z: TActualType) => boolean);
    disabled?: boolean;
    horizontal?: boolean;
    form?: string;
    name?: string;
    multiple?: boolean;
};
declare function ListboxFn<TTag extends ElementType = typeof DEFAULT_LISTBOX_TAG, TType = string, TActualType = TType extends (infer U)[] ? U : TType>(props: ListboxProps<TTag, TType, TActualType>, ref: Ref<HTMLElement>): JSX.Element;
declare let DEFAULT_BUTTON_TAG: "button";
interface ButtonRenderPropArg {
    open: boolean;
    disabled: boolean;
    value: any;
}
type ButtonPropsWeControl = 'aria-controls' | 'aria-expanded' | 'aria-haspopup' | 'aria-labelledby' | 'disabled';
export type ListboxButtonProps<TTag extends ElementType> = Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>;
declare function ButtonFn<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: ListboxButtonProps<TTag>, ref: Ref<HTMLButtonElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_LABEL_TAG: "label";
interface LabelRenderPropArg {
    open: boolean;
    disabled: boolean;
}
export type ListboxLabelProps<TTag extends ElementType> = Props<TTag, LabelRenderPropArg>;
declare function LabelFn<TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: ListboxLabelProps<TTag>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_OPTIONS_TAG: "ul";
interface OptionsRenderPropArg {
    open: boolean;
}
type OptionsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'aria-multiselectable' | 'aria-orientation' | 'role' | 'tabIndex';
declare let OptionsRenderFeatures: number;
export type ListboxOptionsProps<TTag extends ElementType> = Props<TTag, OptionsRenderPropArg, OptionsPropsWeControl> & PropsForFeatures<typeof OptionsRenderFeatures>;
declare function OptionsFn<TTag extends ElementType = typeof DEFAULT_OPTIONS_TAG>(props: ListboxOptionsProps<TTag>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_OPTION_TAG: "li";
interface OptionRenderPropArg {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
type OptionPropsWeControl = 'aria-disabled' | 'aria-selected' | 'role' | 'tabIndex';
export type ListboxOptionProps<TTag extends ElementType, TType> = Props<TTag, OptionRenderPropArg, OptionPropsWeControl, {
    disabled?: boolean;
    value: TType;
}>;
declare function OptionFn<TTag extends ElementType = typeof DEFAULT_OPTION_TAG, TType = Parameters<typeof ListboxRoot>[0]['value']>(props: ListboxOptionProps<TTag, TType>, ref: Ref<HTMLElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export interface _internal_ComponentListbox extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_LISTBOX_TAG, TType = string, TActualType = TType extends (infer U)[] ? U : TType>(props: ListboxProps<TTag, TType, TActualType> & RefProp<typeof ListboxFn>): JSX.Element;
}
export interface _internal_ComponentListboxButton extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: ListboxButtonProps<TTag> & RefProp<typeof ButtonFn>): JSX.Element;
}
export interface _internal_ComponentListboxLabel extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: ListboxLabelProps<TTag> & RefProp<typeof LabelFn>): JSX.Element;
}
export interface _internal_ComponentListboxOptions extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_OPTIONS_TAG>(props: ListboxOptionsProps<TTag> & RefProp<typeof OptionsFn>): JSX.Element;
}
export interface _internal_ComponentListboxOption extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_OPTION_TAG, TType = Parameters<typeof ListboxRoot>[0]['value']>(props: ListboxOptionProps<TTag, TType> & RefProp<typeof OptionFn>): JSX.Element;
}
declare let ListboxRoot: _internal_ComponentListbox;
export declare let Listbox: _internal_ComponentListbox & {
    Button: _internal_ComponentListboxButton;
    Label: _internal_ComponentListboxLabel;
    Options: _internal_ComponentListboxOptions;
    Option: _internal_ComponentListboxOption;
};
export {};
