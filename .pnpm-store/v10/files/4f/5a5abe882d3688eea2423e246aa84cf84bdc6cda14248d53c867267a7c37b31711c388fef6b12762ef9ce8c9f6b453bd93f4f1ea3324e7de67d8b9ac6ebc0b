export { Fragment } from '../../';
import {
	ComponentType,
	ComponentChild,
	ComponentChildren,
	VNode,
	Attributes
} from '../../';
import { JSXInternal } from '../../src/jsx';

export function jsx(
	type: string,
	props: JSXInternal.HTMLAttributes &
		JSXInternal.SVGAttributes &
		Record<string, any> & { children?: ComponentChild },
	key?: string
): VNode<any>;
export function jsx<P>(
	type: ComponentType<P>,
	props: Attributes & P & { children?: ComponentChild },
	key?: string
): VNode<any>;

export function jsxs(
	type: string,
	props: JSXInternal.HTMLAttributes &
		JSXInternal.SVGAttributes &
		Record<string, any> & { children?: ComponentChild[] },
	key?: string
): VNode<any>;
export function jsxs<P>(
	type: ComponentType<P>,
	props: Attributes & P & { children?: ComponentChild[] },
	key?: string
): VNode<any>;

export function jsxDEV(
	type: string,
	props: JSXInternal.HTMLAttributes &
		JSXInternal.SVGAttributes &
		Record<string, any> & { children?: ComponentChildren },
	key?: string
): VNode<any>;
export function jsxDEV<P>(
	type: ComponentType<P>,
	props: Attributes & P & { children?: ComponentChildren },
	key?: string
): VNode<any>;

// These are not expected to be used manually, but by a JSX transform
export function jsxTemplate(
	template: string[],
	...expressions: any[]
): VNode<any>;
export function jsxAttr(name: string, value: any): string | null;
export function jsxEscape<T>(
	value: T
): string | null | VNode<any> | Array<string | null | VNode>;

export { JSXInternal as JSX };
