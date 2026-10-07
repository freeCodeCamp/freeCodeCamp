import React, { type ElementType, type Ref } from 'react';
import type { ByComparator, EnsureArray, Expand, Props } from '../../types.js';
import { type HasDisplayName, type PropsForFeatures, type RefProp } from '../../utils/render.js';
declare let DEFAULT_COMBOBOX_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface ComboboxRenderPropArg<TValue, TActive = TValue> {
    open: boolean;
    disabled: boolean;
    activeIndex: number | null;
    activeOption: TActive | null;
    value: TValue;
}
type O = 'value' | 'defaultValue' | 'nullable' | 'multiple' | 'onChange' | 'by';
type ComboboxValueProps<TValue, TNullable extends boolean | undefined, TMultiple extends boolean | undefined, TTag extends ElementType> = Extract<({
    value?: EnsureArray<TValue>;
    defaultValue?: EnsureArray<TValue>;
    nullable: true;
    multiple: true;
    onChange?(value: EnsureArray<TValue>): void;
    by?: ByComparator<TValue>;
} & Props<TTag, ComboboxRenderPropArg<EnsureArray<TValue>, TValue>, O>) | ({
    value?: TValue | null;
    defaultValue?: TValue | null;
    nullable: true;
    multiple?: false;
    onChange?(value: TValue | null): void;
    by?: ByComparator<TValue | null>;
} & Expand<Props<TTag, ComboboxRenderPropArg<TValue | null>, O>>) | ({
    value?: EnsureArray<TValue>;
    defaultValue?: EnsureArray<TValue>;
    nullable?: false;
    multiple: true;
    onChange?(value: EnsureArray<TValue>): void;
    by?: ByComparator<TValue extends Array<infer U> ? U : TValue>;
} & Expand<Props<TTag, ComboboxRenderPropArg<EnsureArray<TValue>, TValue>, O>>) | ({
    value?: TValue;
    nullable?: false;
    multiple?: false;
    defaultValue?: TValue;
    onChange?(value: TValue): void;
    by?: ByComparator<TValue>;
} & Props<TTag, ComboboxRenderPropArg<TValue>, O>), {
    nullable?: TNullable;
    multiple?: TMultiple;
}>;
export type ComboboxProps<TValue, TNullable extends boolean | undefined, TMultiple extends boolean | undefined, TTag extends ElementType> = ComboboxValueProps<TValue, TNullable, TMultiple, TTag> & {
    disabled?: boolean;
    __demoMode?: boolean;
    form?: string;
    name?: string;
};
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, true, TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, false, TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, false, TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, true, TTag>, ref: Ref<HTMLElement>): JSX.Element;
declare let DEFAULT_INPUT_TAG: "input";
interface InputRenderPropArg {
    open: boolean;
    disabled: boolean;
}
type InputPropsWeControl = 'aria-activedescendant' | 'aria-autocomplete' | 'aria-controls' | 'aria-expanded' | 'aria-labelledby' | 'disabled' | 'role';
export type ComboboxInputProps<TTag extends ElementType, TType> = Props<TTag, InputRenderPropArg, InputPropsWeControl, {
    defaultValue?: TType;
    displayValue?(item: TType): string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}>;
declare function InputFn<TTag extends ElementType = typeof DEFAULT_INPUT_TAG, TType = Parameters<typeof ComboboxRoot>[0]['value']>(props: ComboboxInputProps<TTag, TType>, ref: Ref<HTMLInputElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_BUTTON_TAG: "button";
interface ButtonRenderPropArg {
    open: boolean;
    disabled: boolean;
    value: any;
}
type ButtonPropsWeControl = 'aria-controls' | 'aria-expanded' | 'aria-haspopup' | 'aria-labelledby' | 'disabled' | 'tabIndex';
export type ComboboxButtonProps<TTag extends ElementType> = Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>;
declare function ButtonFn<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: ComboboxButtonProps<TTag>, ref: Ref<HTMLButtonElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_LABEL_TAG: "label";
interface LabelRenderPropArg {
    open: boolean;
    disabled: boolean;
}
export type ComboboxLabelProps<TTag extends ElementType> = Props<TTag, LabelRenderPropArg>;
declare function LabelFn<TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: ComboboxLabelProps<TTag>, ref: Ref<HTMLLabelElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_OPTIONS_TAG: "ul";
interface OptionsRenderPropArg {
    open: boolean;
    option: unknown;
}
type OptionsPropsWeControl = 'aria-labelledby' | 'aria-multiselectable' | 'role' | 'tabIndex';
declare let OptionsRenderFeatures: number;
export type ComboboxOptionsProps<TTag extends ElementType> = Props<TTag, OptionsRenderPropArg, OptionsPropsWeControl, PropsForFeatures<typeof OptionsRenderFeatures> & {
    hold?: boolean;
}>;
declare function OptionsFn<TTag extends ElementType = typeof DEFAULT_OPTIONS_TAG>(props: ComboboxOptionsProps<TTag>, ref: Ref<HTMLUListElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare let DEFAULT_OPTION_TAG: "li";
interface OptionRenderPropArg {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
type OptionPropsWeControl = 'role' | 'tabIndex' | 'aria-disabled' | 'aria-selected';
export type ComboboxOptionProps<TTag extends ElementType, TType> = Props<TTag, OptionRenderPropArg, OptionPropsWeControl, {
    disabled?: boolean;
    value: TType;
    order?: number;
}>;
declare function OptionFn<TTag extends ElementType = typeof DEFAULT_OPTION_TAG, TType = Parameters<typeof ComboboxRoot>[0]['value']>(props: ComboboxOptionProps<TTag, TType>, ref: Ref<HTMLLIElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export interface _internal_ComponentCombobox extends HasDisplayName {
    <TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, true, TTag> & RefProp<typeof ComboboxFn>): JSX.Element;
    <TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, false, TTag> & RefProp<typeof ComboboxFn>): JSX.Element;
    <TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, true, TTag> & RefProp<typeof ComboboxFn>): JSX.Element;
    <TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, false, TTag> & RefProp<typeof ComboboxFn>): JSX.Element;
}
export interface _internal_ComponentComboboxButton extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(props: ComboboxButtonProps<TTag> & RefProp<typeof ButtonFn>): JSX.Element;
}
export interface _internal_ComponentComboboxInput extends HasDisplayName {
    <TType, TTag extends ElementType = typeof DEFAULT_INPUT_TAG>(props: ComboboxInputProps<TTag, TType> & RefProp<typeof InputFn>): JSX.Element;
}
export interface _internal_ComponentComboboxLabel extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: ComboboxLabelProps<TTag> & RefProp<typeof LabelFn>): JSX.Element;
}
export interface _internal_ComponentComboboxOptions extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_OPTIONS_TAG>(props: ComboboxOptionsProps<TTag> & RefProp<typeof OptionsFn>): JSX.Element;
}
export interface _internal_ComponentComboboxOption extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_OPTION_TAG, TType = Parameters<typeof ComboboxRoot>[0]['value']>(props: ComboboxOptionProps<TTag, TType> & RefProp<typeof OptionFn>): JSX.Element;
}
declare let ComboboxRoot: _internal_ComponentCombobox;
export declare let Combobox: _internal_ComponentCombobox & {
    Input: _internal_ComponentComboboxInput;
    Button: _internal_ComponentComboboxButton;
    Label: _internal_ComponentComboboxLabel;
    Options: _internal_ComponentComboboxOptions;
    Option: _internal_ComponentComboboxOption;
};
export {};
