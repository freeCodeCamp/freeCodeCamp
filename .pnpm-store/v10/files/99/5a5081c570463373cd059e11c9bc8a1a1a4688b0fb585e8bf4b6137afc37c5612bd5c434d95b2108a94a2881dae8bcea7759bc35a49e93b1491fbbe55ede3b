import * as _hooks from '../../hooks';
import * as preact from '../../src';
import { JSXInternal } from '../../src/jsx';
import * as _Suspense from './suspense';
import * as _SuspenseList from './suspense-list';

interface SignalLike<T> {
	value: T;
	peek(): T;
	subscribe(fn: (value: T) => void): () => void;
}

type Signalish<T> = T | SignalLike<T>;

// export default React;
export = React;
export as namespace React;
declare namespace React {
	// Export JSX
	export import JSX = JSXInternal;

	// Hooks
	export import CreateHandle = _hooks.CreateHandle;
	export import EffectCallback = _hooks.EffectCallback;
	export import Inputs = _hooks.Inputs;
	export import PropRef = _hooks.PropRef;
	export import Reducer = _hooks.Reducer;
	export import Dispatch = _hooks.Dispatch;
	export import SetStateAction = _hooks.StateUpdater;
	export import useCallback = _hooks.useCallback;
	export import useContext = _hooks.useContext;
	export import useDebugValue = _hooks.useDebugValue;
	export import useEffect = _hooks.useEffect;
	export import useImperativeHandle = _hooks.useImperativeHandle;
	export import useId = _hooks.useId;
	export import useLayoutEffect = _hooks.useLayoutEffect;
	export import useMemo = _hooks.useMemo;
	export import useReducer = _hooks.useReducer;
	export import useRef = _hooks.useRef;
	export import useState = _hooks.useState;
	// React 18 hooks
	export import useInsertionEffect = _hooks.useLayoutEffect;
	export function useTransition(): [false, typeof startTransition];
	export function useDeferredValue<T = any>(val: T): T;
	export function useSyncExternalStore<T>(
		subscribe: (flush: () => void) => () => void,
		getSnapshot: () => T
	): T;

	// Preact Defaults
	export import Context = preact.Context;
	export import ContextType = preact.ContextType;
	export import RefObject = preact.RefObject;
	export import Component = preact.Component;
	export import FunctionComponent = preact.FunctionComponent;
	export import ComponentType = preact.ComponentType;
	export import ComponentClass = preact.ComponentClass;
	export import FC = preact.FunctionComponent;
	export import createContext = preact.createContext;
	export import Ref = preact.Ref;
	export import createRef = preact.createRef;
	export import Fragment = preact.Fragment;
	export import createElement = preact.createElement;
	export import cloneElement = preact.cloneElement;
	export import ComponentProps = preact.ComponentProps;
	export import ReactNode = preact.ComponentChild;
	export import ReactElement = preact.VNode;
	export import Consumer = preact.Consumer;

	// Suspense
	export import Suspense = _Suspense.Suspense;
	export import lazy = _Suspense.lazy;
	export import SuspenseList = _SuspenseList.SuspenseList;

	// Compat
	export import StrictMode = preact.Fragment;
	export const version: string;
	export function startTransition(cb: () => void): void;

	// HTML
	export interface HTMLAttributes<T extends EventTarget>
		extends JSXInternal.HTMLAttributes<T> {}
	export interface HTMLProps<T extends EventTarget>
		extends JSXInternal.HTMLAttributes<T>,
			preact.ClassAttributes<T> {}
	export import DetailedHTMLProps = JSXInternal.DetailedHTMLProps;
	export import CSSProperties = JSXInternal.CSSProperties;

	export interface SVGProps<T extends EventTarget>
		extends JSXInternal.SVGAttributes<T>,
			preact.ClassAttributes<T> {}

	interface SVGAttributes extends JSXInternal.SVGAttributes {}

	interface ReactSVG extends JSXInternal.IntrinsicSVGElements {}

	type HTMLAttributeReferrerPolicy =
		| ''
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';

	type HTMLAttributeAnchorTarget =
		| '_self'
		| '_blank'
		| '_parent'
		| '_top'
		| (string & {});

	interface AnchorHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		download?: Signalish<any>;
		href?: Signalish<string | undefined>;
		hrefLang?: Signalish<string | undefined>;
		media?: Signalish<string | undefined>;
		ping?: Signalish<string | undefined>;
		target?: Signalish<HTMLAttributeAnchorTarget | undefined>;
		type?: Signalish<string | undefined>;
		referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	}

	interface AudioHTMLAttributes<T extends EventTarget>
		extends MediaHTMLAttributes<T> {}

	interface AreaHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		alt?: Signalish<string | undefined>;
		coords?: Signalish<string | undefined>;
		download?: Signalish<any>;
		href?: Signalish<string | undefined>;
		hrefLang?: Signalish<string | undefined>;
		media?: Signalish<string | undefined>;
		referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
		shape?: Signalish<string | undefined>;
		target?: Signalish<string | undefined>;
	}

	interface BaseHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		href?: Signalish<string | undefined>;
		target?: Signalish<string | undefined>;
	}

	interface BlockquoteHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		cite?: Signalish<string | undefined>;
	}

	interface ButtonHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		disabled?: Signalish<boolean | undefined>;
		form?: Signalish<string | undefined>;
		formAction?: Signalish<string | undefined>;
		formEncType?: Signalish<string | undefined>;
		formMethod?: Signalish<string | undefined>;
		formNoValidate?: Signalish<boolean | undefined>;
		formTarget?: Signalish<string | undefined>;
		name?: Signalish<string | undefined>;
		type?: Signalish<'submit' | 'reset' | 'button' | undefined>;
		value?: Signalish<string | number | undefined>;
	}

	interface CanvasHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		height?: Signalish<number | string | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	interface ColHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		span?: Signalish<number | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	interface ColgroupHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		span?: Signalish<number | undefined>;
	}

	interface DataHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		value?: Signalish<string | number | undefined>;
	}

	interface DetailsHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		open?: Signalish<boolean | undefined>;
		onToggle?: ChangeEventHandler<T> | undefined;
	}

	interface DelHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		cite?: Signalish<string | undefined>;
		dateTime?: Signalish<string | undefined>;
	}

	interface DialogHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		onCancel?: ChangeEventHandler<T> | undefined;
		onClose?: ChangeEventHandler<T> | undefined;
		open?: Signalish<boolean | undefined>;
	}

	interface EmbedHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		height?: Signalish<number | string | undefined>;
		src?: Signalish<string | undefined>;
		type?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	interface FieldsetHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		disabled?: Signalish<boolean | undefined>;
		form?: Signalish<string | undefined>;
		name?: Signalish<string | undefined>;
	}

	interface FormHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		acceptCharset?: Signalish<string | undefined>;
		action?: Signalish<string | undefined>;
		autoComplete?: Signalish<string | undefined>;
		encType?: Signalish<string | undefined>;
		method?: Signalish<string | undefined>;
		name?: Signalish<string | undefined>;
		noValidate?: Signalish<boolean | undefined>;
		target?: Signalish<string | undefined>;
	}

	interface HtmlHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		manifest?: Signalish<string | undefined>;
	}

	interface IframeHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		allow?: Signalish<string | undefined>;
		allowFullScreen?: Signalish<boolean | undefined>;
		allowTransparency?: Signalish<boolean | undefined>;
		/** @deprecated */
		frameBorder?: Signalish<number | string | undefined>;
		height?: Signalish<number | string | undefined>;
		loading?: 'eager' | 'lazy' | undefined;
		/** @deprecated */
		marginHeight?: Signalish<number | undefined>;
		/** @deprecated */
		marginWidth?: Signalish<number | undefined>;
		name?: Signalish<string | undefined>;
		referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
		sandbox?: Signalish<string | undefined>;
		/** @deprecated */
		scrolling?: Signalish<string | undefined>;
		seamless?: Signalish<boolean | undefined>;
		src?: Signalish<string | undefined>;
		srcDoc?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	type HTMLAttributeCrossOrigin = 'anonymous' | 'use-credentials';

	interface ImgHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		alt?: Signalish<string | undefined>;
		crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
		decoding?: Signalish<'async' | 'auto' | 'sync' | undefined>;
		height?: Signalish<number | string | undefined>;
		loading?: Signalish<'eager' | 'lazy' | undefined>;
		referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
		sizes?: Signalish<string | undefined>;
		src?: Signalish<string | undefined>;
		srcSet?: Signalish<string | undefined>;
		useMap?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	interface InsHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		cite?: Signalish<string | undefined>;
		dateTime?: Signalish<string | undefined>;
	}

	type HTMLInputTypeAttribute =
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| (string & {});

	interface InputHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		accept?: Signalish<string | undefined>;
		alt?: Signalish<string | undefined>;
		autoComplete?: Signalish<string | undefined>;
		capture?: Signalish<'user' | 'environment' | undefined>; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
		checked?: Signalish<boolean | undefined>;
		disabled?: Signalish<boolean | undefined>;
		enterKeyHint?: Signalish<
			| 'enter'
			| 'done'
			| 'go'
			| 'next'
			| 'previous'
			| 'search'
			| 'send'
			| undefined
		>;
		form?: Signalish<string | undefined>;
		formAction?: Signalish<string | undefined>;
		formEncType?: Signalish<string | undefined>;
		formMethod?: Signalish<string | undefined>;
		formNoValidate?: Signalish<boolean | undefined>;
		formTarget?: Signalish<string | undefined>;
		height?: Signalish<number | string | undefined>;
		list?: Signalish<string | undefined>;
		max?: Signalish<string | undefined>;
		maxLength?: Signalish<number | undefined>;
		min?: Signalish<string | undefined>;
		minLength?: Signalish<number | undefined>;
		multiple?: Signalish<boolean | undefined>;
		name?: Signalish<string | undefined>;
		pattern?: Signalish<string | undefined>;
		placeholder?: Signalish<string | undefined>;
		readOnly?: Signalish<boolean | undefined>;
		required?: Signalish<boolean | undefined>;
		size?: Signalish<number | undefined>;
		src?: Signalish<string | undefined>;
		step?: Signalish<number | string | undefined>;
		type?: HTMLInputTypeAttribute | undefined;
		value?: Signalish<string | number | undefined>;
		width?: Signalish<number | string | undefined>;
		onChange?: ChangeEventHandler<T> | undefined;
	}

	interface KeygenHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		challenge?: Signalish<string | undefined>;
		disabled?: Signalish<boolean | undefined>;
		form?: Signalish<string | undefined>;
		keyType?: Signalish<string | undefined>;
		keyParams?: Signalish<string | undefined>;
		name?: Signalish<string | undefined>;
	}

	interface LabelHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		form?: Signalish<string | undefined>;
		htmlFor?: Signalish<string | undefined>;
	}

	interface LiHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		value?: Signalish<string | number | undefined>;
	}

	interface LinkHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		as?: Signalish<string | undefined>;
		crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
		fetchPriority?: Signalish<'high' | 'low' | 'auto'>;
		href?: Signalish<string | undefined>;
		hrefLang?: Signalish<string | undefined>;
		integrity?: Signalish<string | undefined>;
		media?: Signalish<string | undefined>;
		imageSrcSet?: Signalish<string | undefined>;
		referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
		sizes?: Signalish<string | undefined>;
		type?: Signalish<string | undefined>;
		charSet?: Signalish<string | undefined>;
	}

	interface MapHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		name?: Signalish<string | undefined>;
	}

	interface MenuHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		type?: Signalish<string | undefined>;
	}

	interface MediaHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		autoPlay?: Signalish<boolean | undefined>;
		controls?: Signalish<boolean | undefined>;
		controlsList?: Signalish<string | undefined>;
		crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
		loop?: Signalish<boolean | undefined>;
		mediaGroup?: Signalish<string | undefined>;
		muted?: Signalish<boolean | undefined>;
		playsInline?: Signalish<boolean | undefined>;
		preload?: Signalish<string | undefined>;
		src?: Signalish<string | undefined>;
	}

	interface MetaHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		charSet?: Signalish<string | undefined>;
		httpEquiv?: Signalish<string | undefined>;
		name?: Signalish<string | undefined>;
		media?: Signalish<string | undefined>;
	}

	interface MeterHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		form?: Signalish<string | undefined>;
		high?: Signalish<number | undefined>;
		low?: Signalish<number | undefined>;
		max?: Signalish<string | undefined>;
		min?: Signalish<string | undefined>;
		optimum?: Signalish<number | undefined>;
		value?: Signalish<string | number | undefined>;
	}

	interface QuoteHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		cite?: Signalish<string | undefined>;
	}

	interface ObjectHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		classID?: Signalish<string | undefined>;
		data?: Signalish<string | undefined>;
		form?: Signalish<string | undefined>;
		height?: Signalish<number | string | undefined>;
		name?: Signalish<string | undefined>;
		type?: Signalish<string | undefined>;
		useMap?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
		wmode?: Signalish<string | undefined>;
	}

	interface OlHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		reversed?: Signalish<boolean | undefined>;
		start?: Signalish<number | undefined>;
		type?: Signalish<'1' | 'a' | 'A' | 'i' | 'I' | undefined>;
	}

	interface OptgroupHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		disabled?: Signalish<boolean | undefined>;
		label?: Signalish<string | undefined>;
	}

	interface OptionHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		disabled?: Signalish<boolean | undefined>;
		label?: Signalish<string | undefined>;
		selected?: Signalish<boolean | undefined>;
		value?: Signalish<string | number | undefined>;
	}

	interface OutputHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		form?: Signalish<string | undefined>;
		htmlFor?: Signalish<string | undefined>;
		name?: Signalish<string | undefined>;
	}

	interface ParamHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		name?: Signalish<string | undefined>;
		value?: Signalish<string | number | undefined>;
	}

	interface ProgressHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		max?: Signalish<string | undefined>;
		value?: Signalish<string | number | undefined>;
	}

	interface SlotHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		name?: Signalish<string | undefined>;
	}

	interface ScriptHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		async?: Signalish<boolean | undefined>;
		/** @deprecated */
		charSet?: Signalish<string | undefined>;
		crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
		defer?: Signalish<boolean | undefined>;
		integrity?: Signalish<string | undefined>;
		noModule?: Signalish<boolean | undefined>;
		referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
		src?: Signalish<string | undefined>;
		type?: Signalish<string | undefined>;
	}

	interface SelectHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		autoComplete?: Signalish<string | undefined>;
		disabled?: Signalish<boolean | undefined>;
		form?: Signalish<string | undefined>;
		multiple?: Signalish<boolean | undefined>;
		name?: Signalish<string | undefined>;
		required?: Signalish<boolean | undefined>;
		size?: Signalish<number | undefined>;
		value?: Signalish<string | number | undefined>;
		onChange?: ChangeEventHandler<T> | undefined;
	}

	interface SourceHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		height?: Signalish<number | string | undefined>;
		media?: Signalish<string | undefined>;
		sizes?: Signalish<string | undefined>;
		src?: Signalish<string | undefined>;
		srcSet?: Signalish<string | undefined>;
		type?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	interface StyleHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		media?: Signalish<string | undefined>;
		scoped?: Signalish<boolean | undefined>;
		type?: Signalish<string | undefined>;
	}

	interface TableHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		cellPadding?: Signalish<string | undefined>;
		cellSpacing?: Signalish<string | undefined>;
		summary?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
	}

	interface TextareaHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		autoComplete?: Signalish<string | undefined>;
		cols?: Signalish<number | undefined>;
		dirName?: Signalish<string | undefined>;
		disabled?: Signalish<boolean | undefined>;
		form?: Signalish<string | undefined>;
		maxLength?: Signalish<number | undefined>;
		minLength?: Signalish<number | undefined>;
		name?: Signalish<string | undefined>;
		placeholder?: Signalish<string | undefined>;
		readOnly?: Signalish<boolean | undefined>;
		required?: Signalish<boolean | undefined>;
		rows?: Signalish<number | undefined>;
		value?: Signalish<string | number | undefined>;
		wrap?: Signalish<string | undefined>;
		onChange?: ChangeEventHandler<T> | undefined;
	}

	interface TdHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		align?: Signalish<
			'left' | 'center' | 'right' | 'justify' | 'char' | undefined
		>;
		colSpan?: Signalish<number | undefined>;
		headers?: Signalish<string | undefined>;
		rowSpan?: Signalish<number | undefined>;
		scope?: Signalish<string | undefined>;
		abbr?: Signalish<string | undefined>;
		height?: Signalish<number | string | undefined>;
		width?: Signalish<number | string | undefined>;
		valign?: Signalish<'top' | 'middle' | 'bottom' | 'baseline' | undefined>;
	}

	interface ThHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
		align?: Signalish<
			'left' | 'center' | 'right' | 'justify' | 'char' | undefined
		>;
		colSpan?: Signalish<number | undefined>;
		headers?: Signalish<string | undefined>;
		rowSpan?: Signalish<number | undefined>;
		scope?: Signalish<string | undefined>;
		abbr?: Signalish<string | undefined>;
	}

	interface TimeHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		dateTime?: Signalish<string | undefined>;
	}

	interface TrackHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		default?: Signalish<boolean | undefined>;
		kind?: Signalish<string | undefined>;
		label?: Signalish<string | undefined>;
		src?: Signalish<string | undefined>;
		srcLang?: Signalish<string | undefined>;
	}

	interface VideoHTMLAttributes<T extends EventTarget>
		extends MediaHTMLAttributes<T> {
		height?: Signalish<number | string | undefined>;
		playsInline?: Signalish<boolean | undefined>;
		poster?: Signalish<string | undefined>;
		width?: Signalish<number | string | undefined>;
		disablePictureInPicture?: Signalish<boolean | undefined>;
		disableRemotePlayback?: Signalish<boolean | undefined>;
	}

	interface WebViewHTMLAttributes<T extends EventTarget>
		extends HTMLAttributes<T> {
		allowFullScreen?: Signalish<boolean | undefined>;
		allowpopups?: Signalish<boolean | undefined>;
		autosize?: Signalish<boolean | undefined>;
		blinkfeatures?: Signalish<string | undefined>;
		disableblinkfeatures?: Signalish<string | undefined>;
		disableguestresize?: Signalish<boolean | undefined>;
		disablewebsecurity?: Signalish<boolean | undefined>;
		guestinstance?: Signalish<string | undefined>;
		httpreferrer?: Signalish<string | undefined>;
		nodeintegration?: Signalish<boolean | undefined>;
		partition?: Signalish<string | undefined>;
		plugins?: Signalish<boolean | undefined>;
		preload?: Signalish<string | undefined>;
		src?: Signalish<string | undefined>;
		useragent?: Signalish<string | undefined>;
		webpreferences?: Signalish<string | undefined>;
	}

	// Events
	export import TargetedEvent = JSXInternal.TargetedEvent;
	export import ChangeEvent = JSXInternal.TargetedEvent;
	export import ClipboardEvent = JSXInternal.TargetedClipboardEvent;
	export import CompositionEvent = JSXInternal.TargetedCompositionEvent;
	export import DragEvent = JSXInternal.TargetedDragEvent;
	export import PointerEvent = JSXInternal.TargetedPointerEvent;
	export import FocusEvent = JSXInternal.TargetedFocusEvent;
	export import FormEvent = JSXInternal.TargetedEvent;
	export import InvalidEvent = JSXInternal.TargetedEvent;
	export import KeyboardEvent = JSXInternal.TargetedKeyboardEvent;
	export import MouseEvent = JSXInternal.TargetedMouseEvent;
	export import TouchEvent = JSXInternal.TargetedTouchEvent;
	export import UIEvent = JSXInternal.TargetedUIEvent;
	export import AnimationEvent = JSXInternal.TargetedAnimationEvent;
	export import TransitionEvent = JSXInternal.TargetedTransitionEvent;

	// Event Handler Types
	export import ChangeEventHandler = JSXInternal.GenericEventHandler;
	export import ClipboardEventHandler = JSXInternal.ClipboardEventHandler;
	export import CompositionEventHandler = JSXInternal.CompositionEventHandler;
	export import DragEventHandler = JSXInternal.DragEventHandler;
	export import PointerEventHandler = JSXInternal.PointerEventHandler;
	export import FocusEventHandler = JSXInternal.FocusEventHandler;
	export import FormEventHandler = JSXInternal.GenericEventHandler;
	export import InvalidEventHandler = JSXInternal.GenericEventHandler;
	export import KeyboardEventHandler = JSXInternal.KeyboardEventHandler;
	export import MouseEventHandler = JSXInternal.MouseEventHandler;
	export import TouchEventHandler = JSXInternal.TouchEventHandler;
	export import UIEventHandler = JSXInternal.UIEventHandler;
	export import AnimationEventHandler = JSXInternal.AnimationEventHandler;
	export import TransitionEventHandler = JSXInternal.TransitionEventHandler;

	export function createPortal(
		vnode: preact.ComponentChildren,
		container: preact.ContainerNode
	): preact.VNode<any>;

	export function render(
		vnode: preact.ComponentChild,
		parent: preact.ContainerNode,
		callback?: () => void
	): Component | null;

	export function hydrate(
		vnode: preact.ComponentChild,
		parent: preact.ContainerNode,
		callback?: () => void
	): Component | null;

	export function unmountComponentAtNode(
		container: preact.ContainerNode
	): boolean;

	export function createFactory(
		type: preact.VNode<any>['type']
	): (
		props?: any,
		...children: preact.ComponentChildren[]
	) => preact.VNode<any>;
	export function isValidElement(element: any): boolean;
	export function isFragment(element: any): boolean;
	export function isMemo(element: any): boolean;
	export function findDOMNode(
		component: preact.Component | Element
	): Element | null;

	export abstract class PureComponent<
		P = {},
		S = {},
		SS = any
	> extends preact.Component<P, S> {
		isPureReactComponent: boolean;
	}

	export type MemoExoticComponent<C extends preact.FunctionalComponent<any>> =
		preact.FunctionComponent<ComponentProps<C>> & {
			readonly type: C;
		};

	export function memo<P = {}>(
		component: preact.FunctionalComponent<P>,
		comparer?: (prev: P, next: P) => boolean
	): preact.FunctionComponent<P>;
	export function memo<C extends preact.FunctionalComponent<any>>(
		component: C,
		comparer?: (
			prev: preact.ComponentProps<C>,
			next: preact.ComponentProps<C>
		) => boolean
	): C;

	export interface RefAttributes<R> extends preact.Attributes {
		ref?: preact.Ref<R> | undefined;
	}

	export interface ForwardFn<P = {}, T = any> {
		(props: P, ref: ForwardedRef<T>): preact.ComponentChild;
		displayName?: string;
	}

	export interface ForwardRefExoticComponent<P>
		extends preact.FunctionComponent<P> {
		defaultProps?: Partial<P> | undefined;
	}

	export function forwardRef<R, P = {}>(
		fn: ForwardFn<P, R>
	): preact.FunctionalComponent<PropsWithoutRef<P> & { ref?: preact.Ref<R> }>;

	export type PropsWithoutRef<P> = Omit<P, 'ref'>;

	interface MutableRefObject<T> {
		current: T;
	}

	export type ForwardedRef<T> =
		| ((instance: T | null) => void)
		| MutableRefObject<T | null>
		| null;

	export type ElementType<P = any, Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> =
		| { [K in Tag]: P extends JSX.IntrinsicElements[K] ? K : never }[Tag]
		| ComponentType<P>;

	export type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

	export type ComponentPropsWithRef<
		C extends ComponentType<any> | keyof JSXInternal.IntrinsicElements
	> = C extends new (
		props: infer P
	) => Component<any, any>
		? PropsWithoutRef<P> & RefAttributes<InstanceType<C>>
		: ComponentProps<C>;

	export function flushSync<R>(fn: () => R): R;
	export function flushSync<A, R>(fn: (a: A) => R, a: A): R;

	export function unstable_batchedUpdates(
		callback: (arg?: any) => void,
		arg?: any
	): void;

	export type PropsWithChildren<P = unknown> = P & {
		children?: preact.ComponentChildren | undefined;
	};

	export const Children: {
		map<T extends preact.ComponentChild, R>(
			children: T | T[],
			fn: (child: T, i: number) => R
		): R[];
		forEach<T extends preact.ComponentChild>(
			children: T | T[],
			fn: (child: T, i: number) => void
		): void;
		count: (children: preact.ComponentChildren) => number;
		only: (children: preact.ComponentChildren) => preact.ComponentChild;
		toArray: (children: preact.ComponentChildren) => preact.VNode<{}>[];
	};

	// scheduler
	export const unstable_ImmediatePriority: number;
	export const unstable_UserBlockingPriority: number;
	export const unstable_NormalPriority: number;
	export const unstable_LowPriority: number;
	export const unstable_IdlePriority: number;
	export function unstable_runWithPriority(
		priority: number,
		callback: () => void
	): void;
	export const unstable_now: () => number;
}
