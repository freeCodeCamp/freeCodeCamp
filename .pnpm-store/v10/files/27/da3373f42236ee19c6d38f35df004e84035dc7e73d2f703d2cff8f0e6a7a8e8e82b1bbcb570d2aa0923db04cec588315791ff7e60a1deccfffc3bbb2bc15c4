export as namespace preact;

import { JSXInternal } from './jsx';

export import JSX = JSXInternal;

//
// Preact Virtual DOM
// -----------------------------------

export interface VNode<P = {}> {
	type: ComponentType<P> | string;
	props: P & { children: ComponentChildren };
	key: Key;
	/**
	 * ref is not guaranteed by React.ReactElement, for compatibility reasons
	 * with popular react libs we define it as optional too
	 */
	ref?: Ref<any> | null;
	/**
	 * The time this `vnode` started rendering. Will only be set when
	 * the devtools are attached.
	 * Default value: `0`
	 */
	startTime?: number;
	/**
	 * The time that the rendering of this `vnode` was completed. Will only be
	 * set when the devtools are attached.
	 * Default value: `-1`
	 */
	endTime?: number;
}

//
// Preact Component interface
// -----------------------------------

export type Key = string | number | any;

export type RefObject<T> = { current: T | null };
export type RefCallback<T> = (instance: T | null) => void;
export type Ref<T> = RefObject<T> | RefCallback<T> | null;

export type ComponentChild =
	| VNode<any>
	| object
	| string
	| number
	| bigint
	| boolean
	| null
	| undefined;
export type ComponentChildren = ComponentChild[] | ComponentChild;

export interface Attributes {
	key?: Key | undefined;
	jsx?: boolean | undefined;
}

export interface ClassAttributes<T> extends Attributes {
	ref?: Ref<T>;
}

export interface PreactDOMAttributes {
	children?: ComponentChildren;
	dangerouslySetInnerHTML?: {
		__html: string;
	};
}

export interface ErrorInfo {
	componentStack?: string;
}

export type RenderableProps<P, RefType = any> = P &
	Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<RefType> }>;

export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
export type ComponentFactory<P = {}> = ComponentType<P>;

export type ComponentProps<
	C extends ComponentType<any> | keyof JSXInternal.IntrinsicElements
> = C extends ComponentType<infer P>
	? P
	: C extends keyof JSXInternal.IntrinsicElements
		? JSXInternal.IntrinsicElements[C]
		: never;

export interface FunctionComponent<P = {}> {
	(props: RenderableProps<P>, context?: any): VNode<any> | null;
	displayName?: string;
	defaultProps?: Partial<P> | undefined;
}
export interface FunctionalComponent<P = {}> extends FunctionComponent<P> {}

export interface ComponentClass<P = {}, S = {}> {
	new (props: P, context?: any): Component<P, S>;
	displayName?: string;
	defaultProps?: Partial<P>;
	contextType?: Context<any>;
	getDerivedStateFromProps?(
		props: Readonly<P>,
		state: Readonly<S>
	): Partial<S> | null;
	getDerivedStateFromError?(error: any): Partial<S> | null;
}
export interface ComponentConstructor<P = {}, S = {}>
	extends ComponentClass<P, S> {}

// Type alias for a component instance considered generally, whether stateless or stateful.
export type AnyComponent<P = {}, S = {}> =
	| FunctionComponent<P>
	| ComponentConstructor<P, S>;

export interface Component<P = {}, S = {}> {
	componentWillMount?(): void;
	componentDidMount?(): void;
	componentWillUnmount?(): void;
	getChildContext?(): object;
	componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
	shouldComponentUpdate?(
		nextProps: Readonly<P>,
		nextState: Readonly<S>,
		nextContext: any
	): boolean;
	componentWillUpdate?(
		nextProps: Readonly<P>,
		nextState: Readonly<S>,
		nextContext: any
	): void;
	getSnapshotBeforeUpdate?(oldProps: Readonly<P>, oldState: Readonly<S>): any;
	componentDidUpdate?(
		previousProps: Readonly<P>,
		previousState: Readonly<S>,
		snapshot: any
	): void;
	componentDidCatch?(error: any, errorInfo: ErrorInfo): void;
}

export abstract class Component<P, S> {
	constructor(props?: P, context?: any);

	static displayName?: string;
	static defaultProps?: any;
	static contextType?: Context<any>;

	// Static members cannot reference class type parameters. This is not
	// supported in TypeScript. Reusing the same type arguments from `Component`
	// will lead to an impossible state where one cannot satisfy the type
	// constraint under no circumstances, see #1356.In general type arguments
	// seem to be a bit buggy and not supported well at the time of this
	// writing with TS 3.3.3333.
	static getDerivedStateFromProps?(
		props: Readonly<object>,
		state: Readonly<object>
	): object | null;
	static getDerivedStateFromError?(error: any): object | null;

	state: Readonly<S>;
	props: RenderableProps<P>;
	context: any;
	base?: Element | Text;

	// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e836acc75a78cf0655b5dfdbe81d69fdd4d8a252/types/react/index.d.ts#L402
	// // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
	// // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
	setState<K extends keyof S>(
		state:
			| ((
					prevState: Readonly<S>,
					props: Readonly<P>
			  ) => Pick<S, K> | Partial<S> | null)
			| (Pick<S, K> | Partial<S> | null),
		callback?: () => void
	): void;

	forceUpdate(callback?: () => void): void;

	abstract render(
		props?: RenderableProps<P>,
		state?: Readonly<S>,
		context?: any
	): ComponentChild;
}

//
// Preact createElement
// -----------------------------------

export function createElement(
	type: 'input',
	props:
		| (JSXInternal.DOMAttributes<HTMLInputElement> &
				ClassAttributes<HTMLInputElement>)
		| null,
	...children: ComponentChildren[]
): VNode<
	JSXInternal.DOMAttributes<HTMLInputElement> &
		ClassAttributes<HTMLInputElement>
>;
export function createElement<
	P extends JSXInternal.HTMLAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function createElement<
	P extends JSXInternal.SVGAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function createElement<T extends HTMLElement>(
	type: string,
	props:
		| (ClassAttributes<T> &
				JSXInternal.HTMLAttributes &
				JSXInternal.SVGAttributes)
		| null,
	...children: ComponentChildren[]
): VNode<
	ClassAttributes<T> & JSXInternal.HTMLAttributes & JSXInternal.SVGAttributes
>;
export function createElement<P>(
	type: ComponentType<P>,
	props: (Attributes & P) | null,
	...children: ComponentChildren[]
): VNode<P>;
export namespace createElement {
	export import JSX = JSXInternal;
}

export function h(
	type: 'input',
	props:
		| (JSXInternal.DOMAttributes<HTMLInputElement> &
				ClassAttributes<HTMLInputElement>)
		| null,
	...children: ComponentChildren[]
): VNode<
	JSXInternal.DOMAttributes<HTMLInputElement> &
		ClassAttributes<HTMLInputElement>
>;
export function h<
	P extends JSXInternal.HTMLAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function h<
	P extends JSXInternal.SVGAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function h<T extends HTMLElement>(
	type: string,
	props:
		| (ClassAttributes<T> &
				JSXInternal.HTMLAttributes &
				JSXInternal.SVGAttributes)
		| null,
	...children: ComponentChildren[]
): VNode<
	| (ClassAttributes<T> &
			JSXInternal.HTMLAttributes &
			JSXInternal.SVGAttributes)
	| null
>;
export function h<P>(
	type: ComponentType<P>,
	props: (Attributes & P) | null,
	...children: ComponentChildren[]
): VNode<Attributes & P>;
export namespace h {
	export import JSX = JSXInternal;
}

//
// Preact render
// -----------------------------------
interface ContainerNode {
	readonly nodeType: number;
	readonly parentNode: ContainerNode | null;
	readonly firstChild: ContainerNode | null;
	readonly childNodes: ArrayLike<ContainerNode>;

	contains(other: ContainerNode | null): boolean;
	insertBefore(node: ContainerNode, child: ContainerNode | null): ContainerNode;
	appendChild(node: ContainerNode): ContainerNode;
	removeChild(child: ContainerNode): ContainerNode;
}

export function render(vnode: ComponentChild, parent: ContainerNode): void;
/**
 * @deprecated Will be removed in v11.
 *
 * Replacement Preact 10+ implementation can be found here: https://gist.github.com/developit/f4c67a2ede71dc2fab7f357f39cff28c
 */
export function render(
	vnode: ComponentChild,
	parent: ContainerNode,
	replaceNode?: Element | Text
): void;
export function hydrate(vnode: ComponentChild, parent: ContainerNode): void;
export function cloneElement(
	vnode: VNode<any>,
	props?: any,
	...children: ComponentChildren[]
): VNode<any>;
export function cloneElement<P>(
	vnode: VNode<P>,
	props?: any,
	...children: ComponentChildren[]
): VNode<P>;

//
// Preact Built-in Components
// -----------------------------------

// TODO: Revisit what the public type of this is...
export const Fragment: FunctionComponent<{}>;

//
// Preact options
// -----------------------------------

/**
 * Global options for preact
 */
export interface Options {
	/** Attach a hook that is invoked whenever a VNode is created. */
	vnode?(vnode: VNode): void;
	/** Attach a hook that is invoked immediately before a vnode is unmounted. */
	unmount?(vnode: VNode): void;
	/** Attach a hook that is invoked after a vnode has rendered. */
	diffed?(vnode: VNode): void;
	event?(e: Event): any;
	requestAnimationFrame?(callback: () => void): void;
	debounceRendering?(cb: () => void): void;
	useDebugValue?(value: string | number): void;
	_addHookName?(name: string | number): void;
	__suspenseDidResolve?(vnode: VNode, cb: () => void): void;
	// __canSuspenseResolve?(vnode: VNode, cb: () => void): void;

	/**
	 * Customize attribute serialization when a precompiled JSX transform
	 * is used.
	 */
	attr?(name: string, value: any): string | void;
}

export const options: Options;

//
// Preact helpers
// -----------------------------------
export function createRef<T = any>(): RefObject<T>;
export function toChildArray(
	children: ComponentChildren
): Array<VNode | string | number>;
export function isValidElement(vnode: any): vnode is VNode;

//
// Context
// -----------------------------------
export interface Consumer<T>
	extends FunctionComponent<{
		children: (value: T) => ComponentChildren;
	}> {}
export interface PreactConsumer<T> extends Consumer<T> {}

export interface Provider<T>
	extends FunctionComponent<{
		value: T;
		children?: ComponentChildren;
	}> {}
export interface PreactProvider<T> extends Provider<T> {}
export type ContextType<C extends Context<any>> = C extends Context<infer T>
	? T
	: never;

export interface Context<T> {
	Consumer: Consumer<T>;
	Provider: Provider<T>;
	displayName?: string;
}
export interface PreactContext<T> extends Context<T> {}

export function createContext<T>(defaultValue: T): Context<T>;
