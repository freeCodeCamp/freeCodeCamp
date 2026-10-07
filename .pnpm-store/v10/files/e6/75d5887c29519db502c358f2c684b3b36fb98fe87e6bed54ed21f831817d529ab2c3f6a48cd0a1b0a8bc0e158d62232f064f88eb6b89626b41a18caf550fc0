import type { JSXElementConstructor, ReactElement, ReactNode } from 'react';
export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
declare let __: "1D45E01E-AF44-47C4-988A-19A94EBAF55C";
export type __ = typeof __;
export type Expand<T> = T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType ? Omit<React.ComponentProps<TTag>, 'ref'> : never;
type PropsWeControl = 'as' | 'children' | 'refName' | 'className';
type CleanProps<TTag extends ReactTag, TOmitableProps extends PropertyKey = never> = Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>;
type OurProps<TTag extends ReactTag, TSlot> = {
    as?: TTag;
    children?: ReactNode | ((bag: TSlot) => ReactElement);
    refName?: string;
};
type HasProperty<T extends object, K extends PropertyKey> = T extends never ? never : K extends keyof T ? true : never;
type ClassNameOverride<TTag extends ReactTag, TSlot = {}> = true extends HasProperty<PropsOf<TTag>, 'className'> ? {
    className?: PropsOf<TTag>['className'] | ((bag: TSlot) => string);
} : {};
export type Props<TTag extends ReactTag, TSlot = {}, TOmitableProps extends PropertyKey = never, Overrides = {}> = CleanProps<TTag, TOmitableProps | keyof Overrides> & OurProps<TTag, TSlot> & ClassNameOverride<TTag, TSlot> & Overrides;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T | U extends __ ? never : T extends __ ? U : U extends __ ? T : T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
export type ByComparator<T> = (T extends null ? string : keyof T & string) | ((a: T, b: T) => boolean);
export type EnsureArray<T> = T extends any[] ? T : Expand<T>[];
export {};
