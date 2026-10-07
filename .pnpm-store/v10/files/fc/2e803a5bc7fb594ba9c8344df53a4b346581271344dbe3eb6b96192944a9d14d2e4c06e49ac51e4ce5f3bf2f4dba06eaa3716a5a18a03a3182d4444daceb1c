// Users who only use Preact for SSR might not specify "dom" in their lib in tsconfig.json
/// <reference lib="dom" />

import {
	ClassAttributes,
	Component,
	ComponentChild,
	ComponentType,
	FunctionComponent,
	PreactDOMAttributes,
	VNode
} from './index';

type Defaultize<Props, Defaults> =
	// Distribute over unions
	Props extends any // Make any properties included in Default optional
		? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> & // Include the remaining properties from Props
				Pick<Props, Exclude<keyof Props, keyof Defaults>>
		: never;

type Booleanish = boolean | 'true' | 'false';

export namespace JSXInternal {
	export type LibraryManagedAttributes<Component, Props> = Component extends {
		defaultProps: infer Defaults;
	}
		? Defaultize<Props, Defaults>
		: Props;

	export interface IntrinsicAttributes {
		key?: any;
	}

	export type ElementType<P = any> =
		| {
				[K in keyof IntrinsicElements]: P extends IntrinsicElements[K]
					? K
					: never;
		  }[keyof IntrinsicElements]
		| ComponentType<P>;
	export interface Element extends VNode<any> {}
	export type ElementClass = Component<any, any> | FunctionComponent<any>;

	export interface ElementAttributesProperty {
		props: any;
	}

	export interface ElementChildrenAttribute {
		children: any;
	}

	export type DOMCSSProperties = {
		[key in keyof Omit<
			CSSStyleDeclaration,
			| 'item'
			| 'setProperty'
			| 'removeProperty'
			| 'getPropertyValue'
			| 'getPropertyPriority'
		>]?: string | number | null | undefined;
	};
	export type AllCSSProperties = {
		[key: string]: string | number | null | undefined;
	};
	export interface CSSProperties extends AllCSSProperties, DOMCSSProperties {
		cssText?: string | null;
	}

	export interface SignalLike<T> {
		value: T;
		peek(): T;
		subscribe(fn: (value: T) => void): () => void;
	}

	export type Signalish<T> = T | SignalLike<T>;

	export type UnpackSignal<T> = T extends SignalLike<infer V> ? V : T;

	export interface SVGAttributes<Target extends EventTarget = SVGElement>
		extends HTMLAttributes<Target> {
		accentHeight?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		accumulate?:
			| 'none'
			| 'sum'
			| undefined
			| SignalLike<'none' | 'sum' | undefined>;
		additive?:
			| 'replace'
			| 'sum'
			| undefined
			| SignalLike<'replace' | 'sum' | undefined>;
		alignmentBaseline?:
			| 'auto'
			| 'baseline'
			| 'before-edge'
			| 'text-before-edge'
			| 'middle'
			| 'central'
			| 'after-edge'
			| 'text-after-edge'
			| 'ideographic'
			| 'alphabetic'
			| 'hanging'
			| 'mathematical'
			| 'inherit'
			| undefined
			| SignalLike<
					| 'auto'
					| 'baseline'
					| 'before-edge'
					| 'text-before-edge'
					| 'middle'
					| 'central'
					| 'after-edge'
					| 'text-after-edge'
					| 'ideographic'
					| 'alphabetic'
					| 'hanging'
					| 'mathematical'
					| 'inherit'
					| undefined
			  >;
		'alignment-baseline'?:
			| 'auto'
			| 'baseline'
			| 'before-edge'
			| 'text-before-edge'
			| 'middle'
			| 'central'
			| 'after-edge'
			| 'text-after-edge'
			| 'ideographic'
			| 'alphabetic'
			| 'hanging'
			| 'mathematical'
			| 'inherit'
			| undefined
			| SignalLike<
					| 'auto'
					| 'baseline'
					| 'before-edge'
					| 'text-before-edge'
					| 'middle'
					| 'central'
					| 'after-edge'
					| 'text-after-edge'
					| 'ideographic'
					| 'alphabetic'
					| 'hanging'
					| 'mathematical'
					| 'inherit'
					| undefined
			  >;
		allowReorder?:
			| 'no'
			| 'yes'
			| undefined
			| SignalLike<'no' | 'yes' | undefined>;
		'allow-reorder'?:
			| 'no'
			| 'yes'
			| undefined
			| SignalLike<'no' | 'yes' | undefined>;
		alphabetic?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		amplitude?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
		arabicForm?:
			| 'initial'
			| 'medial'
			| 'terminal'
			| 'isolated'
			| undefined
			| SignalLike<'initial' | 'medial' | 'terminal' | 'isolated' | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
		'arabic-form'?:
			| 'initial'
			| 'medial'
			| 'terminal'
			| 'isolated'
			| undefined
			| SignalLike<'initial' | 'medial' | 'terminal' | 'isolated' | undefined>;
		ascent?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		attributeName?: string | undefined | SignalLike<string | undefined>;
		attributeType?: string | undefined | SignalLike<string | undefined>;
		azimuth?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		baseFrequency?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		baselineShift?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'baseline-shift'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		baseProfile?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		bbox?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		begin?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		bias?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		by?: number | string | undefined | SignalLike<number | string | undefined>;
		calcMode?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		capHeight?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'cap-height'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		clip?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		clipPath?: string | undefined | SignalLike<string | undefined>;
		'clip-path'?: string | undefined | SignalLike<string | undefined>;
		clipPathUnits?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		clipRule?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'clip-rule'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		colorInterpolation?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'color-interpolation'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		colorInterpolationFilters?:
			| 'auto'
			| 'sRGB'
			| 'linearRGB'
			| 'inherit'
			| undefined
			| SignalLike<'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined>;
		'color-interpolation-filters'?:
			| 'auto'
			| 'sRGB'
			| 'linearRGB'
			| 'inherit'
			| undefined
			| SignalLike<'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined>;
		colorProfile?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'color-profile'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		colorRendering?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'color-rendering'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		contentScriptType?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'content-script-type'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		contentStyleType?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'content-style-type'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		cursor?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		cx?: number | string | undefined | SignalLike<number | string | undefined>;
		cy?: number | string | undefined | SignalLike<number | string | undefined>;
		d?: string | undefined | SignalLike<string | undefined>;
		decelerate?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		descent?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		diffuseConstant?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		direction?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		display?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		divisor?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		dominantBaseline?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'dominant-baseline'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		dur?: number | string | undefined | SignalLike<number | string | undefined>;
		dx?: number | string | undefined | SignalLike<number | string | undefined>;
		dy?: number | string | undefined | SignalLike<number | string | undefined>;
		edgeMode?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		elevation?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		enableBackground?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'enable-background'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		end?: number | string | undefined | SignalLike<number | string | undefined>;
		exponent?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		externalResourcesRequired?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fill?: string | undefined | SignalLike<string | undefined>;
		fillOpacity?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'fill-opacity'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fillRule?:
			| 'nonzero'
			| 'evenodd'
			| 'inherit'
			| undefined
			| SignalLike<'nonzero' | 'evenodd' | 'inherit' | undefined>;
		'fill-rule'?:
			| 'nonzero'
			| 'evenodd'
			| 'inherit'
			| undefined
			| SignalLike<'nonzero' | 'evenodd' | 'inherit' | undefined>;
		filter?: string | undefined | SignalLike<string | undefined>;
		filterRes?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		filterUnits?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		floodColor?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'flood-color'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		floodOpacity?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'flood-opacity'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		focusable?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fontFamily?: string | undefined | SignalLike<string | undefined>;
		'font-family'?: string | undefined | SignalLike<string | undefined>;
		fontSize?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'font-size'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fontSizeAdjust?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'font-size-adjust'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fontStretch?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'font-stretch'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fontStyle?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'font-style'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fontVariant?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'font-variant'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fontWeight?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'font-weight'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		format?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		from?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		fx?: number | string | undefined | SignalLike<number | string | undefined>;
		fy?: number | string | undefined | SignalLike<number | string | undefined>;
		g1?: number | string | undefined | SignalLike<number | string | undefined>;
		g2?: number | string | undefined | SignalLike<number | string | undefined>;
		glyphName?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'glyph-name'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		glyphOrientationHorizontal?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'glyph-orientation-horizontal'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		glyphOrientationVertical?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'glyph-orientation-vertical'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		glyphRef?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		gradientTransform?: string | undefined | SignalLike<string | undefined>;
		gradientUnits?: string | undefined | SignalLike<string | undefined>;
		hanging?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		horizAdvX?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'horiz-adv-x'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		horizOriginX?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'horiz-origin-x'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		ideographic?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		imageRendering?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'image-rendering'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		in2?: number | string | undefined | SignalLike<number | string | undefined>;
		in?: string | undefined | SignalLike<string | undefined>;
		intercept?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		k1?: number | string | undefined | SignalLike<number | string | undefined>;
		k2?: number | string | undefined | SignalLike<number | string | undefined>;
		k3?: number | string | undefined | SignalLike<number | string | undefined>;
		k4?: number | string | undefined | SignalLike<number | string | undefined>;
		k?: number | string | undefined | SignalLike<number | string | undefined>;
		kernelMatrix?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		kernelUnitLength?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		kerning?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		keyPoints?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		keySplines?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		keyTimes?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		lengthAdjust?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		letterSpacing?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'letter-spacing'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		lightingColor?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'lighting-color'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		limitingConeAngle?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		local?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		markerEnd?: string | undefined | SignalLike<string | undefined>;
		'marker-end'?: string | undefined | SignalLike<string | undefined>;
		markerHeight?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		markerMid?: string | undefined | SignalLike<string | undefined>;
		'marker-mid'?: string | undefined | SignalLike<string | undefined>;
		markerStart?: string | undefined | SignalLike<string | undefined>;
		'marker-start'?: string | undefined | SignalLike<string | undefined>;
		markerUnits?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		markerWidth?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		mask?: string | undefined | SignalLike<string | undefined>;
		maskContentUnits?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		maskUnits?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		mathematical?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		mode?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		numOctaves?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		offset?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		opacity?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		operator?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		order?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		orient?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		orientation?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		origin?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		overflow?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		overlinePosition?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'overline-position'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		overlineThickness?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'overline-thickness'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		paintOrder?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'paint-order'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		panose1?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'panose-1'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		pathLength?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		patternContentUnits?: string | undefined | SignalLike<string | undefined>;
		patternTransform?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		patternUnits?: string | undefined | SignalLike<string | undefined>;
		pointerEvents?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'pointer-events'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		points?: string | undefined | SignalLike<string | undefined>;
		pointsAtX?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		pointsAtY?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		pointsAtZ?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		preserveAlpha?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		preserveAspectRatio?: string | undefined | SignalLike<string | undefined>;
		primitiveUnits?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		r?: number | string | undefined | SignalLike<number | string | undefined>;
		radius?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		refX?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		refY?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		renderingIntent?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'rendering-intent'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		repeatCount?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'repeat-count'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		repeatDur?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'repeat-dur'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		requiredExtensions?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		requiredFeatures?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		restart?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		result?: string | undefined | SignalLike<string | undefined>;
		rotate?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		rx?: number | string | undefined | SignalLike<number | string | undefined>;
		ry?: number | string | undefined | SignalLike<number | string | undefined>;
		scale?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		seed?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		shapeRendering?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'shape-rendering'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		slope?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		spacing?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		specularConstant?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		specularExponent?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		speed?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		spreadMethod?: string | undefined | SignalLike<string | undefined>;
		startOffset?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		stdDeviation?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		stemh?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		stemv?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		stitchTiles?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		stopColor?: string | undefined | SignalLike<string | undefined>;
		'stop-color'?: string | undefined | SignalLike<string | undefined>;
		stopOpacity?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'stop-opacity'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		strikethroughPosition?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'strikethrough-position'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		strikethroughThickness?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'strikethrough-thickness'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		string?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		stroke?: string | undefined | SignalLike<string | undefined>;
		strokeDasharray?:
			| string
			| number
			| undefined
			| SignalLike<number | string | undefined>;
		'stroke-dasharray'?:
			| string
			| number
			| undefined
			| SignalLike<number | string | undefined>;
		strokeDashoffset?:
			| string
			| number
			| undefined
			| SignalLike<number | string | undefined>;
		'stroke-dashoffset'?:
			| string
			| number
			| undefined
			| SignalLike<number | string | undefined>;
		strokeLinecap?:
			| 'butt'
			| 'round'
			| 'square'
			| 'inherit'
			| undefined
			| SignalLike<'butt' | 'round' | 'square' | 'inherit' | undefined>;
		'stroke-linecap'?:
			| 'butt'
			| 'round'
			| 'square'
			| 'inherit'
			| undefined
			| SignalLike<'butt' | 'round' | 'square' | 'inherit' | undefined>;
		strokeLinejoin?:
			| 'miter'
			| 'round'
			| 'bevel'
			| 'inherit'
			| undefined
			| SignalLike<'miter' | 'round' | 'bevel' | 'inherit' | undefined>;
		'stroke-linejoin'?:
			| 'miter'
			| 'round'
			| 'bevel'
			| 'inherit'
			| undefined
			| SignalLike<'miter' | 'round' | 'bevel' | 'inherit' | undefined>;
		strokeMiterlimit?:
			| string
			| number
			| undefined
			| SignalLike<number | string | undefined>;
		'stroke-miterlimit'?:
			| string
			| number
			| undefined
			| SignalLike<number | string | undefined>;
		strokeOpacity?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'stroke-opacity'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		strokeWidth?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'stroke-width'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		surfaceScale?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		systemLanguage?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		tableValues?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		targetX?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		targetY?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		textAnchor?: string | undefined | SignalLike<string | undefined>;
		'text-anchor'?: string | undefined | SignalLike<string | undefined>;
		textDecoration?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'text-decoration'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		textLength?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		textRendering?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'text-rendering'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		to?: number | string | undefined | SignalLike<number | string | undefined>;
		transform?: string | undefined | SignalLike<string | undefined>;
		transformOrigin?: string | undefined | SignalLike<string | undefined>;
		'transform-origin'?: string | undefined | SignalLike<string | undefined>;
		u1?: number | string | undefined | SignalLike<number | string | undefined>;
		u2?: number | string | undefined | SignalLike<number | string | undefined>;
		underlinePosition?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'underline-position'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		underlineThickness?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'underline-thickness'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		unicode?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		unicodeBidi?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'unicode-bidi'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		unicodeRange?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'unicode-range'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		unitsPerEm?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'units-per-em'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		vAlphabetic?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'v-alphabetic'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		values?: string | undefined | SignalLike<string | undefined>;
		vectorEffect?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'vector-effect'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		version?: string | undefined | SignalLike<string | undefined>;
		vertAdvY?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'vert-adv-y'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		vertOriginX?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'vert-origin-x'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		vertOriginY?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'vert-origin-y'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		vHanging?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'v-hanging'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		vIdeographic?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'v-ideographic'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		viewBox?: string | undefined | SignalLike<string | undefined>;
		viewTarget?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		visibility?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		vMathematical?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'v-mathematical'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		widths?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		wordSpacing?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'word-spacing'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		writingMode?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'writing-mode'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		x1?: number | string | undefined | SignalLike<number | string | undefined>;
		x2?: number | string | undefined | SignalLike<number | string | undefined>;
		x?: number | string | undefined | SignalLike<number | string | undefined>;
		xChannelSelector?: string | undefined | SignalLike<string | undefined>;
		xHeight?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		'x-height'?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		xlinkActuate?: string | undefined | SignalLike<string | undefined>;
		'xlink:actuate'?: SVGAttributes['xlinkActuate'];
		xlinkArcrole?: string | undefined | SignalLike<string | undefined>;
		'xlink:arcrole'?: string | undefined | SignalLike<string | undefined>;
		xlinkHref?: string | undefined | SignalLike<string | undefined>;
		'xlink:href'?: string | undefined | SignalLike<string | undefined>;
		xlinkRole?: string | undefined | SignalLike<string | undefined>;
		'xlink:role'?: string | undefined | SignalLike<string | undefined>;
		xlinkShow?: string | undefined | SignalLike<string | undefined>;
		'xlink:show'?: string | undefined | SignalLike<string | undefined>;
		xlinkTitle?: string | undefined | SignalLike<string | undefined>;
		'xlink:title'?: string | undefined | SignalLike<string | undefined>;
		xlinkType?: string | undefined | SignalLike<string | undefined>;
		'xlink:type'?: string | undefined | SignalLike<string | undefined>;
		xmlBase?: string | undefined | SignalLike<string | undefined>;
		'xml:base'?: string | undefined | SignalLike<string | undefined>;
		xmlLang?: string | undefined | SignalLike<string | undefined>;
		'xml:lang'?: string | undefined | SignalLike<string | undefined>;
		xmlns?: string | undefined | SignalLike<string | undefined>;
		xmlnsXlink?: string | undefined | SignalLike<string | undefined>;
		xmlSpace?: string | undefined | SignalLike<string | undefined>;
		'xml:space'?: string | undefined | SignalLike<string | undefined>;
		y1?: number | string | undefined | SignalLike<number | string | undefined>;
		y2?: number | string | undefined | SignalLike<number | string | undefined>;
		y?: number | string | undefined | SignalLike<number | string | undefined>;
		yChannelSelector?: string | undefined | SignalLike<string | undefined>;
		z?: number | string | undefined | SignalLike<number | string | undefined>;
		zoomAndPan?: string | undefined | SignalLike<string | undefined>;
	}

	export interface PathAttributes {
		d: string;
	}

	export type TargetedEvent<
		Target extends EventTarget = EventTarget,
		TypedEvent extends Event = Event
	> = Omit<TypedEvent, 'currentTarget'> & {
		readonly currentTarget: Target;
	};

	export type TargetedAnimationEvent<Target extends EventTarget> =
		TargetedEvent<Target, AnimationEvent>;
	export type TargetedClipboardEvent<Target extends EventTarget> =
		TargetedEvent<Target, ClipboardEvent>;
	export type TargetedCompositionEvent<Target extends EventTarget> =
		TargetedEvent<Target, CompositionEvent>;
	export type TargetedDragEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		DragEvent
	>;
	export type TargetedFocusEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		FocusEvent
	>;
	export type TargetedInputEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		InputEvent
	>;
	export type TargetedKeyboardEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		KeyboardEvent
	>;
	export type TargetedMouseEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		MouseEvent
	>;
	export type TargetedPointerEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		PointerEvent
	>;
	export type TargetedSubmitEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		SubmitEvent
	>;
	export type TargetedTouchEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		TouchEvent
	>;
	export type TargetedTransitionEvent<Target extends EventTarget> =
		TargetedEvent<Target, TransitionEvent>;
	export type TargetedUIEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		UIEvent
	>;
	export type TargetedWheelEvent<Target extends EventTarget> = TargetedEvent<
		Target,
		WheelEvent
	>;
	export type TargetedPictureInPictureEvent<Target extends EventTarget> =
		TargetedEvent<Target, PictureInPictureEvent>;

	export type EventHandler<E extends TargetedEvent> = {
		bivarianceHack(event: E): void;
	}['bivarianceHack'];

	export type AnimationEventHandler<Target extends EventTarget> = EventHandler<
		TargetedAnimationEvent<Target>
	>;
	export type ClipboardEventHandler<Target extends EventTarget> = EventHandler<
		TargetedClipboardEvent<Target>
	>;
	export type CompositionEventHandler<Target extends EventTarget> =
		EventHandler<TargetedCompositionEvent<Target>>;
	export type DragEventHandler<Target extends EventTarget> = EventHandler<
		TargetedDragEvent<Target>
	>;
	export type FocusEventHandler<Target extends EventTarget> = EventHandler<
		TargetedFocusEvent<Target>
	>;
	export type GenericEventHandler<Target extends EventTarget> = EventHandler<
		TargetedEvent<Target>
	>;
	export type InputEventHandler<Target extends EventTarget> = EventHandler<
		TargetedInputEvent<Target>
	>;
	export type KeyboardEventHandler<Target extends EventTarget> = EventHandler<
		TargetedKeyboardEvent<Target>
	>;
	export type MouseEventHandler<Target extends EventTarget> = EventHandler<
		TargetedMouseEvent<Target>
	>;
	export type PointerEventHandler<Target extends EventTarget> = EventHandler<
		TargetedPointerEvent<Target>
	>;
	export type SubmitEventHandler<Target extends EventTarget> = EventHandler<
		TargetedSubmitEvent<Target>
	>;
	export type TouchEventHandler<Target extends EventTarget> = EventHandler<
		TargetedTouchEvent<Target>
	>;
	export type TransitionEventHandler<Target extends EventTarget> = EventHandler<
		TargetedTransitionEvent<Target>
	>;
	export type UIEventHandler<Target extends EventTarget> = EventHandler<
		TargetedUIEvent<Target>
	>;
	export type WheelEventHandler<Target extends EventTarget> = EventHandler<
		TargetedWheelEvent<Target>
	>;
	export type PictureInPictureEventHandler<Target extends EventTarget> =
		EventHandler<TargetedPictureInPictureEvent<Target>>;

	export interface DOMAttributes<Target extends EventTarget>
		extends PreactDOMAttributes {
		// Image Events
		onLoad?: GenericEventHandler<Target> | undefined;
		onLoadCapture?: GenericEventHandler<Target> | undefined;
		onError?: GenericEventHandler<Target> | undefined;
		onErrorCapture?: GenericEventHandler<Target> | undefined;

		// Clipboard Events
		onCopy?: ClipboardEventHandler<Target> | undefined;
		onCopyCapture?: ClipboardEventHandler<Target> | undefined;
		onCut?: ClipboardEventHandler<Target> | undefined;
		onCutCapture?: ClipboardEventHandler<Target> | undefined;
		onPaste?: ClipboardEventHandler<Target> | undefined;
		onPasteCapture?: ClipboardEventHandler<Target> | undefined;

		// Composition Events
		onCompositionEnd?: CompositionEventHandler<Target> | undefined;
		onCompositionEndCapture?: CompositionEventHandler<Target> | undefined;
		onCompositionStart?: CompositionEventHandler<Target> | undefined;
		onCompositionStartCapture?: CompositionEventHandler<Target> | undefined;
		onCompositionUpdate?: CompositionEventHandler<Target> | undefined;
		onCompositionUpdateCapture?: CompositionEventHandler<Target> | undefined;

		// Details Events
		onToggle?: GenericEventHandler<Target> | undefined;

		// Dialog Events
		onClose?: GenericEventHandler<Target> | undefined;
		onCancel?: GenericEventHandler<Target> | undefined;

		// Focus Events
		onFocus?: FocusEventHandler<Target> | undefined;
		onFocusCapture?: FocusEventHandler<Target> | undefined;
		onFocusIn?: FocusEventHandler<Target> | undefined;
		onFocusInCapture?: FocusEventHandler<Target> | undefined;
		onFocusOut?: FocusEventHandler<Target> | undefined;
		onFocusOutCapture?: FocusEventHandler<Target> | undefined;
		onBlur?: FocusEventHandler<Target> | undefined;
		onBlurCapture?: FocusEventHandler<Target> | undefined;

		// Form Events
		onChange?: GenericEventHandler<Target> | undefined;
		onChangeCapture?: GenericEventHandler<Target> | undefined;
		onInput?: InputEventHandler<Target> | undefined;
		onInputCapture?: InputEventHandler<Target> | undefined;
		onBeforeInput?: InputEventHandler<Target> | undefined;
		onBeforeInputCapture?: InputEventHandler<Target> | undefined;
		onSearch?: GenericEventHandler<Target> | undefined;
		onSearchCapture?: GenericEventHandler<Target> | undefined;
		onSubmit?: SubmitEventHandler<Target> | undefined;
		onSubmitCapture?: SubmitEventHandler<Target> | undefined;
		onInvalid?: GenericEventHandler<Target> | undefined;
		onInvalidCapture?: GenericEventHandler<Target> | undefined;
		onReset?: GenericEventHandler<Target> | undefined;
		onResetCapture?: GenericEventHandler<Target> | undefined;
		onFormData?: GenericEventHandler<Target> | undefined;
		onFormDataCapture?: GenericEventHandler<Target> | undefined;

		// Keyboard Events
		onKeyDown?: KeyboardEventHandler<Target> | undefined;
		onKeyDownCapture?: KeyboardEventHandler<Target> | undefined;
		onKeyPress?: KeyboardEventHandler<Target> | undefined;
		onKeyPressCapture?: KeyboardEventHandler<Target> | undefined;
		onKeyUp?: KeyboardEventHandler<Target> | undefined;
		onKeyUpCapture?: KeyboardEventHandler<Target> | undefined;

		// Media Events
		onAbort?: GenericEventHandler<Target> | undefined;
		onAbortCapture?: GenericEventHandler<Target> | undefined;
		onCanPlay?: GenericEventHandler<Target> | undefined;
		onCanPlayCapture?: GenericEventHandler<Target> | undefined;
		onCanPlayThrough?: GenericEventHandler<Target> | undefined;
		onCanPlayThroughCapture?: GenericEventHandler<Target> | undefined;
		onDurationChange?: GenericEventHandler<Target> | undefined;
		onDurationChangeCapture?: GenericEventHandler<Target> | undefined;
		onEmptied?: GenericEventHandler<Target> | undefined;
		onEmptiedCapture?: GenericEventHandler<Target> | undefined;
		onEncrypted?: GenericEventHandler<Target> | undefined;
		onEncryptedCapture?: GenericEventHandler<Target> | undefined;
		onEnded?: GenericEventHandler<Target> | undefined;
		onEndedCapture?: GenericEventHandler<Target> | undefined;
		onLoadedData?: GenericEventHandler<Target> | undefined;
		onLoadedDataCapture?: GenericEventHandler<Target> | undefined;
		onLoadedMetadata?: GenericEventHandler<Target> | undefined;
		onLoadedMetadataCapture?: GenericEventHandler<Target> | undefined;
		onLoadStart?: GenericEventHandler<Target> | undefined;
		onLoadStartCapture?: GenericEventHandler<Target> | undefined;
		onPause?: GenericEventHandler<Target> | undefined;
		onPauseCapture?: GenericEventHandler<Target> | undefined;
		onPlay?: GenericEventHandler<Target> | undefined;
		onPlayCapture?: GenericEventHandler<Target> | undefined;
		onPlaying?: GenericEventHandler<Target> | undefined;
		onPlayingCapture?: GenericEventHandler<Target> | undefined;
		onProgress?: GenericEventHandler<Target> | undefined;
		onProgressCapture?: GenericEventHandler<Target> | undefined;
		onRateChange?: GenericEventHandler<Target> | undefined;
		onRateChangeCapture?: GenericEventHandler<Target> | undefined;
		onSeeked?: GenericEventHandler<Target> | undefined;
		onSeekedCapture?: GenericEventHandler<Target> | undefined;
		onSeeking?: GenericEventHandler<Target> | undefined;
		onSeekingCapture?: GenericEventHandler<Target> | undefined;
		onStalled?: GenericEventHandler<Target> | undefined;
		onStalledCapture?: GenericEventHandler<Target> | undefined;
		onSuspend?: GenericEventHandler<Target> | undefined;
		onSuspendCapture?: GenericEventHandler<Target> | undefined;
		onTimeUpdate?: GenericEventHandler<Target> | undefined;
		onTimeUpdateCapture?: GenericEventHandler<Target> | undefined;
		onVolumeChange?: GenericEventHandler<Target> | undefined;
		onVolumeChangeCapture?: GenericEventHandler<Target> | undefined;
		onWaiting?: GenericEventHandler<Target> | undefined;
		onWaitingCapture?: GenericEventHandler<Target> | undefined;

		// MouseEvents
		onClick?: MouseEventHandler<Target> | undefined;
		onClickCapture?: MouseEventHandler<Target> | undefined;
		onContextMenu?: MouseEventHandler<Target> | undefined;
		onContextMenuCapture?: MouseEventHandler<Target> | undefined;
		onDblClick?: MouseEventHandler<Target> | undefined;
		onDblClickCapture?: MouseEventHandler<Target> | undefined;
		onDrag?: DragEventHandler<Target> | undefined;
		onDragCapture?: DragEventHandler<Target> | undefined;
		onDragEnd?: DragEventHandler<Target> | undefined;
		onDragEndCapture?: DragEventHandler<Target> | undefined;
		onDragEnter?: DragEventHandler<Target> | undefined;
		onDragEnterCapture?: DragEventHandler<Target> | undefined;
		onDragExit?: DragEventHandler<Target> | undefined;
		onDragExitCapture?: DragEventHandler<Target> | undefined;
		onDragLeave?: DragEventHandler<Target> | undefined;
		onDragLeaveCapture?: DragEventHandler<Target> | undefined;
		onDragOver?: DragEventHandler<Target> | undefined;
		onDragOverCapture?: DragEventHandler<Target> | undefined;
		onDragStart?: DragEventHandler<Target> | undefined;
		onDragStartCapture?: DragEventHandler<Target> | undefined;
		onDrop?: DragEventHandler<Target> | undefined;
		onDropCapture?: DragEventHandler<Target> | undefined;
		onMouseDown?: MouseEventHandler<Target> | undefined;
		onMouseDownCapture?: MouseEventHandler<Target> | undefined;
		onMouseEnter?: MouseEventHandler<Target> | undefined;
		onMouseEnterCapture?: MouseEventHandler<Target> | undefined;
		onMouseLeave?: MouseEventHandler<Target> | undefined;
		onMouseLeaveCapture?: MouseEventHandler<Target> | undefined;
		onMouseMove?: MouseEventHandler<Target> | undefined;
		onMouseMoveCapture?: MouseEventHandler<Target> | undefined;
		onMouseOut?: MouseEventHandler<Target> | undefined;
		onMouseOutCapture?: MouseEventHandler<Target> | undefined;
		onMouseOver?: MouseEventHandler<Target> | undefined;
		onMouseOverCapture?: MouseEventHandler<Target> | undefined;
		onMouseUp?: MouseEventHandler<Target> | undefined;
		onMouseUpCapture?: MouseEventHandler<Target> | undefined;

		// Selection Events
		onSelect?: GenericEventHandler<Target> | undefined;
		onSelectCapture?: GenericEventHandler<Target> | undefined;

		// Touch Events
		onTouchCancel?: TouchEventHandler<Target> | undefined;
		onTouchCancelCapture?: TouchEventHandler<Target> | undefined;
		onTouchEnd?: TouchEventHandler<Target> | undefined;
		onTouchEndCapture?: TouchEventHandler<Target> | undefined;
		onTouchMove?: TouchEventHandler<Target> | undefined;
		onTouchMoveCapture?: TouchEventHandler<Target> | undefined;
		onTouchStart?: TouchEventHandler<Target> | undefined;
		onTouchStartCapture?: TouchEventHandler<Target> | undefined;

		// Pointer Events
		onPointerOver?: PointerEventHandler<Target> | undefined;
		onPointerOverCapture?: PointerEventHandler<Target> | undefined;
		onPointerEnter?: PointerEventHandler<Target> | undefined;
		onPointerEnterCapture?: PointerEventHandler<Target> | undefined;
		onPointerDown?: PointerEventHandler<Target> | undefined;
		onPointerDownCapture?: PointerEventHandler<Target> | undefined;
		onPointerMove?: PointerEventHandler<Target> | undefined;
		onPointerMoveCapture?: PointerEventHandler<Target> | undefined;
		onPointerUp?: PointerEventHandler<Target> | undefined;
		onPointerUpCapture?: PointerEventHandler<Target> | undefined;
		onPointerCancel?: PointerEventHandler<Target> | undefined;
		onPointerCancelCapture?: PointerEventHandler<Target> | undefined;
		onPointerOut?: PointerEventHandler<Target> | undefined;
		onPointerOutCapture?: PointerEventHandler<Target> | undefined;
		onPointerLeave?: PointerEventHandler<Target> | undefined;
		onPointerLeaveCapture?: PointerEventHandler<Target> | undefined;
		onGotPointerCapture?: PointerEventHandler<Target> | undefined;
		onGotPointerCaptureCapture?: PointerEventHandler<Target> | undefined;
		onLostPointerCapture?: PointerEventHandler<Target> | undefined;
		onLostPointerCaptureCapture?: PointerEventHandler<Target> | undefined;

		// UI Events
		onScroll?: UIEventHandler<Target> | undefined;
		onScrollEnd?: UIEventHandler<Target> | undefined;
		onScrollCapture?: UIEventHandler<Target> | undefined;

		// Wheel Events
		onWheel?: WheelEventHandler<Target> | undefined;
		onWheelCapture?: WheelEventHandler<Target> | undefined;

		// Animation Events
		onAnimationStart?: AnimationEventHandler<Target> | undefined;
		onAnimationStartCapture?: AnimationEventHandler<Target> | undefined;
		onAnimationEnd?: AnimationEventHandler<Target> | undefined;
		onAnimationEndCapture?: AnimationEventHandler<Target> | undefined;
		onAnimationIteration?: AnimationEventHandler<Target> | undefined;
		onAnimationIterationCapture?: AnimationEventHandler<Target> | undefined;

		// Transition Events
		onTransitionCancel?: TransitionEventHandler<Target>;
		onTransitionCancelCapture?: TransitionEventHandler<Target>;
		onTransitionEnd?: TransitionEventHandler<Target>;
		onTransitionEndCapture?: TransitionEventHandler<Target>;
		onTransitionRun?: TransitionEventHandler<Target>;
		onTransitionRunCapture?: TransitionEventHandler<Target>;
		onTransitionStart?: TransitionEventHandler<Target>;
		onTransitionStartCapture?: TransitionEventHandler<Target>;

		// PictureInPicture Events
		onEnterPictureInPicture?: PictureInPictureEventHandler<Target>;
		onEnterPictureInPictureCapture?: PictureInPictureEventHandler<Target>;
		onLeavePictureInPicture?: PictureInPictureEventHandler<Target>;
		onLeavePictureInPictureCapture?: PictureInPictureEventHandler<Target>;
		onResize?: PictureInPictureEventHandler<Target>;
		onResizeCapture?: PictureInPictureEventHandler<Target>;
	}

	// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
	export interface AriaAttributes {
		/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
		'aria-activedescendant'?: Signalish<string | undefined>;
		/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
		'aria-atomic'?: Signalish<Booleanish | undefined>;
		/**
		 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
		 * presented if they are made.
		 */
		'aria-autocomplete'?: Signalish<
			'none' | 'inline' | 'list' | 'both' | undefined
		>;
		/**
		 * Defines a string value that labels the current element, which is intended to be converted into Braille.
		 * @see aria-label.
		 */
		'aria-braillelabel'?: Signalish<string | undefined>;
		/**
		 * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
		 * @see aria-roledescription.
		 */
		'aria-brailleroledescription'?: Signalish<string | undefined>;
		/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
		'aria-busy'?: Signalish<Booleanish | undefined>;
		/**
		 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
		 * @see aria-pressed
		 * @see aria-selected.
		 */
		'aria-checked'?: Signalish<Booleanish | 'mixed' | undefined>;
		/**
		 * Defines the total number of columns in a table, grid, or treegrid.
		 * @see aria-colindex.
		 */
		'aria-colcount'?: Signalish<number | undefined>;
		/**
		 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
		 * @see aria-colcount
		 * @see aria-colspan.
		 */
		'aria-colindex'?: Signalish<number | undefined>;
		/**
		 * Defines a human readable text alternative of aria-colindex.
		 * @see aria-rowindextext.
		 */
		'aria-colindextext'?: Signalish<string | undefined>;
		/**
		 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
		 * @see aria-colindex
		 * @see aria-rowspan.
		 */
		'aria-colspan'?: Signalish<number | undefined>;
		/**
		 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
		 * @see aria-owns.
		 */
		'aria-controls'?: Signalish<string | undefined>;
		/** Indicates the element that represents the current item within a container or set of related elements. */
		'aria-current'?: Signalish<
			Booleanish | 'page' | 'step' | 'location' | 'date' | 'time' | undefined
		>;
		/**
		 * Identifies the element (or elements) that describes the object.
		 * @see aria-labelledby
		 */
		'aria-describedby'?: Signalish<string | undefined>;
		/**
		 * Defines a string value that describes or annotates the current element.
		 * @see related aria-describedby.
		 */
		'aria-description'?: Signalish<string | undefined>;
		/**
		 * Identifies the element that provides a detailed, extended description for the object.
		 * @see aria-describedby.
		 */
		'aria-details'?: Signalish<string | undefined>;
		/**
		 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
		 * @see aria-hidden
		 * @see aria-readonly.
		 */
		'aria-disabled'?: Signalish<Booleanish | undefined>;
		/**
		 * Indicates what functions can be performed when a dragged object is released on the drop target.
		 * @deprecated in ARIA 1.1
		 */
		'aria-dropeffect'?: Signalish<
			'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined
		>;
		/**
		 * Identifies the element that provides an error message for the object.
		 * @see aria-invalid
		 * @see aria-describedby.
		 */
		'aria-errormessage'?: Signalish<string | undefined>;
		/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
		'aria-expanded'?: Signalish<Booleanish | undefined>;
		/**
		 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
		 * allows assistive technology to override the general default of reading in document source order.
		 */
		'aria-flowto'?: Signalish<string | undefined>;
		/**
		 * Indicates an element's "grabbed" state in a drag-and-drop operation.
		 * @deprecated in ARIA 1.1
		 */
		'aria-grabbed'?: Signalish<Booleanish | undefined>;
		/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
		'aria-haspopup'?: Signalish<
			Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined
		>;
		/**
		 * Indicates whether the element is exposed to an accessibility API.
		 * @see aria-disabled.
		 */
		'aria-hidden'?: Signalish<Booleanish | undefined>;
		/**
		 * Indicates the entered value does not conform to the format expected by the application.
		 * @see aria-errormessage.
		 */
		'aria-invalid'?: Signalish<Booleanish | 'grammar' | 'spelling' | undefined>;
		/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
		'aria-keyshortcuts'?: Signalish<string | undefined>;
		/**
		 * Defines a string value that labels the current element.
		 * @see aria-labelledby.
		 */
		'aria-label'?: Signalish<string | undefined>;
		/**
		 * Identifies the element (or elements) that labels the current element.
		 * @see aria-describedby.
		 */
		'aria-labelledby'?: Signalish<string | undefined>;
		/** Defines the hierarchical level of an element within a structure. */
		'aria-level'?: Signalish<number | undefined>;
		/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
		'aria-live'?: Signalish<'off' | 'assertive' | 'polite' | undefined>;
		/** Indicates whether an element is modal when displayed. */
		'aria-modal'?: Signalish<Booleanish | undefined>;
		/** Indicates whether a text box accepts multiple lines of input or only a single line. */
		'aria-multiline'?: Signalish<Booleanish | undefined>;
		/** Indicates that the user may select more than one item from the current selectable descendants. */
		'aria-multiselectable'?: Signalish<Booleanish | undefined>;
		/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
		'aria-orientation'?: Signalish<'horizontal' | 'vertical' | undefined>;
		/**
		 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
		 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
		 * @see aria-controls.
		 */
		'aria-owns'?: Signalish<string | undefined>;
		/**
		 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
		 * A hint could be a sample value or a brief description of the expected format.
		 */
		'aria-placeholder'?: Signalish<string | undefined>;
		/**
		 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
		 * @see aria-setsize.
		 */
		'aria-posinset'?: Signalish<number | undefined>;
		/**
		 * Indicates the current "pressed" state of toggle buttons.
		 * @see aria-checked
		 * @see aria-selected.
		 */
		'aria-pressed'?: Signalish<Booleanish | 'mixed' | undefined>;
		/**
		 * Indicates that the element is not editable, but is otherwise operable.
		 * @see aria-disabled.
		 */
		'aria-readonly'?: Signalish<Booleanish | undefined>;
		/**
		 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
		 * @see aria-atomic.
		 */
		'aria-relevant'?: Signalish<
			| 'additions'
			| 'additions removals'
			| 'additions text'
			| 'all'
			| 'removals'
			| 'removals additions'
			| 'removals text'
			| 'text'
			| 'text additions'
			| 'text removals'
			| undefined
		>;
		/** Indicates that user input is required on the element before a form may be submitted. */
		'aria-required'?: Signalish<Booleanish | undefined>;
		/** Defines a human-readable, author-localized description for the role of an element. */
		'aria-roledescription'?: Signalish<string | undefined>;
		/**
		 * Defines the total number of rows in a table, grid, or treegrid.
		 * @see aria-rowindex.
		 */
		'aria-rowcount'?: Signalish<number | undefined>;
		/**
		 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
		 * @see aria-rowcount
		 * @see aria-rowspan.
		 */
		'aria-rowindex'?: Signalish<number | undefined>;
		/**
		 * Defines a human readable text alternative of aria-rowindex.
		 * @see aria-colindextext.
		 */
		'aria-rowindextext'?: Signalish<string | undefined>;
		/**
		 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
		 * @see aria-rowindex
		 * @see aria-colspan.
		 */
		'aria-rowspan'?: Signalish<number | undefined>;
		/**
		 * Indicates the current "selected" state of various widgets.
		 * @see aria-checked
		 * @see aria-pressed.
		 */
		'aria-selected'?: Signalish<Booleanish | undefined>;
		/**
		 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
		 * @see aria-posinset.
		 */
		'aria-setsize'?: Signalish<number | undefined>;
		/** Indicates if items in a table or grid are sorted in ascending or descending order. */
		'aria-sort'?: Signalish<
			'none' | 'ascending' | 'descending' | 'other' | undefined
		>;
		/** Defines the maximum allowed value for a range widget. */
		'aria-valuemax'?: Signalish<number | undefined>;
		/** Defines the minimum allowed value for a range widget. */
		'aria-valuemin'?: Signalish<number | undefined>;
		/**
		 * Defines the current value for a range widget.
		 * @see aria-valuetext.
		 */
		'aria-valuenow'?: Signalish<number | undefined>;
		/** Defines the human readable text alternative of aria-valuenow for a range widget. */
		'aria-valuetext'?: Signalish<string | undefined>;
	}

	// All the WAI-ARIA 1.2 role attribute values from https://www.w3.org/TR/wai-aria-1.2/#role_definitions
	export type WAIAriaRole =
		| 'alert'
		| 'alertdialog'
		| 'application'
		| 'article'
		| 'banner'
		| 'blockquote'
		| 'button'
		| 'caption'
		| 'cell'
		| 'checkbox'
		| 'code'
		| 'columnheader'
		| 'combobox'
		| 'command'
		| 'complementary'
		| 'composite'
		| 'contentinfo'
		| 'definition'
		| 'deletion'
		| 'dialog'
		| 'directory'
		| 'document'
		| 'emphasis'
		| 'feed'
		| 'figure'
		| 'form'
		| 'generic'
		| 'grid'
		| 'gridcell'
		| 'group'
		| 'heading'
		| 'img'
		| 'input'
		| 'insertion'
		| 'landmark'
		| 'link'
		| 'list'
		| 'listbox'
		| 'listitem'
		| 'log'
		| 'main'
		| 'marquee'
		| 'math'
		| 'meter'
		| 'menu'
		| 'menubar'
		| 'menuitem'
		| 'menuitemcheckbox'
		| 'menuitemradio'
		| 'navigation'
		| 'none'
		| 'note'
		| 'option'
		| 'paragraph'
		| 'presentation'
		| 'progressbar'
		| 'radio'
		| 'radiogroup'
		| 'range'
		| 'region'
		| 'roletype'
		| 'row'
		| 'rowgroup'
		| 'rowheader'
		| 'scrollbar'
		| 'search'
		| 'searchbox'
		| 'section'
		| 'sectionhead'
		| 'select'
		| 'separator'
		| 'slider'
		| 'spinbutton'
		| 'status'
		| 'strong'
		| 'structure'
		| 'subscript'
		| 'superscript'
		| 'switch'
		| 'tab'
		| 'table'
		| 'tablist'
		| 'tabpanel'
		| 'term'
		| 'textbox'
		| 'time'
		| 'timer'
		| 'toolbar'
		| 'tooltip'
		| 'tree'
		| 'treegrid'
		| 'treeitem'
		| 'widget'
		| 'window'
		| 'none presentation';

	// All the Digital Publishing WAI-ARIA 1.0 role attribute values from https://www.w3.org/TR/dpub-aria-1.0/#role_definitions
	export type DPubAriaRole =
		| 'doc-abstract'
		| 'doc-acknowledgments'
		| 'doc-afterword'
		| 'doc-appendix'
		| 'doc-backlink'
		| 'doc-biblioentry'
		| 'doc-bibliography'
		| 'doc-biblioref'
		| 'doc-chapter'
		| 'doc-colophon'
		| 'doc-conclusion'
		| 'doc-cover'
		| 'doc-credit'
		| 'doc-credits'
		| 'doc-dedication'
		| 'doc-endnote'
		| 'doc-endnotes'
		| 'doc-epigraph'
		| 'doc-epilogue'
		| 'doc-errata'
		| 'doc-example'
		| 'doc-footnote'
		| 'doc-foreword'
		| 'doc-glossary'
		| 'doc-glossref'
		| 'doc-index'
		| 'doc-introduction'
		| 'doc-noteref'
		| 'doc-notice'
		| 'doc-pagebreak'
		| 'doc-pagelist'
		| 'doc-part'
		| 'doc-preface'
		| 'doc-prologue'
		| 'doc-pullquote'
		| 'doc-qna'
		| 'doc-subtitle'
		| 'doc-tip'
		| 'doc-toc';

	export type AriaRole = WAIAriaRole | DPubAriaRole;

	export interface HTMLAttributes<RefType extends EventTarget = EventTarget>
		extends ClassAttributes<RefType>,
			DOMAttributes<RefType>,
			AriaAttributes {
		// Standard HTML Attributes
		accept?: string | undefined | SignalLike<string | undefined>;
		acceptCharset?: string | undefined | SignalLike<string | undefined>;
		'accept-charset'?: HTMLAttributes['acceptCharset'];
		accessKey?: string | undefined | SignalLike<string | undefined>;
		accesskey?: HTMLAttributes['accessKey'];
		action?: string | undefined | SignalLike<string | undefined>;
		allow?: string | undefined | SignalLike<string | undefined>;
		allowFullScreen?: boolean | undefined | SignalLike<boolean | undefined>;
		allowTransparency?: boolean | undefined | SignalLike<boolean | undefined>;
		alt?: string | undefined | SignalLike<string | undefined>;
		as?: string | undefined | SignalLike<string | undefined>;
		async?: boolean | undefined | SignalLike<boolean | undefined>;
		autocomplete?: string | undefined | SignalLike<string | undefined>;
		autoComplete?: string | undefined | SignalLike<string | undefined>;
		autocorrect?: string | undefined | SignalLike<string | undefined>;
		autoCorrect?: string | undefined | SignalLike<string | undefined>;
		autofocus?: boolean | undefined | SignalLike<boolean | undefined>;
		autoFocus?: boolean | undefined | SignalLike<boolean | undefined>;
		autoPlay?: boolean | undefined | SignalLike<boolean | undefined>;
		autoplay?: boolean | undefined | SignalLike<boolean | undefined>;
		capture?: boolean | string | undefined | SignalLike<string | undefined>;
		cellPadding?: number | string | undefined | SignalLike<string | undefined>;
		cellSpacing?: number | string | undefined | SignalLike<string | undefined>;
		charSet?: string | undefined | SignalLike<string | undefined>;
		charset?: string | undefined | SignalLike<string | undefined>;
		challenge?: string | undefined | SignalLike<string | undefined>;
		checked?: boolean | undefined | SignalLike<boolean | undefined>;
		cite?: string | undefined | SignalLike<string | undefined>;
		class?: string | undefined | SignalLike<string | undefined>;
		className?: string | undefined | SignalLike<string | undefined>;
		cols?: number | undefined | SignalLike<number | undefined>;
		colSpan?: number | undefined | SignalLike<number | undefined>;
		colspan?: number | undefined | SignalLike<number | undefined>;
		content?: string | undefined | SignalLike<string | undefined>;
		contentEditable?:
			| Booleanish
			| ''
			| 'plaintext-only'
			| 'inherit'
			| undefined
			| SignalLike<Booleanish | '' | 'inherit' | 'plaintext-only' | undefined>;
		contenteditable?: HTMLAttributes['contentEditable'];
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu */
		contextMenu?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu */
		contextmenu?: string | undefined | SignalLike<string | undefined>;
		controls?: boolean | undefined | SignalLike<boolean | undefined>;
		controlsList?: string | undefined | SignalLike<string | undefined>;
		coords?: string | undefined | SignalLike<string | undefined>;
		crossOrigin?: string | undefined | SignalLike<string | undefined>;
		crossorigin?: string | undefined | SignalLike<string | undefined>;
		data?: string | undefined | SignalLike<string | undefined>;
		dateTime?: string | undefined | SignalLike<string | undefined>;
		datetime?: string | undefined | SignalLike<string | undefined>;
		default?: boolean | undefined | SignalLike<boolean | undefined>;
		defaultChecked?: boolean | undefined | SignalLike<boolean | undefined>;
		defaultValue?: string | undefined | SignalLike<string | undefined>;
		defer?: boolean | undefined | SignalLike<boolean | undefined>;
		dir?:
			| 'auto'
			| 'rtl'
			| 'ltr'
			| undefined
			| SignalLike<'auto' | 'rtl' | 'ltr' | undefined>;
		disabled?: boolean | undefined | SignalLike<boolean | undefined>;
		disableRemotePlayback?:
			| boolean
			| undefined
			| SignalLike<boolean | undefined>;
		download?: any | undefined;
		decoding?:
			| 'sync'
			| 'async'
			| 'auto'
			| undefined
			| SignalLike<'sync' | 'async' | 'auto' | undefined>;
		draggable?: boolean | undefined | SignalLike<boolean | undefined>;
		encType?: string | undefined | SignalLike<string | undefined>;
		enctype?: string | undefined | SignalLike<string | undefined>;
		enterkeyhint?:
			| 'enter'
			| 'done'
			| 'go'
			| 'next'
			| 'previous'
			| 'search'
			| 'send'
			| undefined
			| SignalLike<
					| 'enter'
					| 'done'
					| 'go'
					| 'next'
					| 'previous'
					| 'search'
					| 'send'
					| undefined
			  >;
		elementTiming?: string | undefined | SignalLike<string | undefined>;
		elementtiming?: HTMLAttributes['elementTiming'];
		exportparts?: string | undefined | SignalLike<string | undefined>;
		for?: string | undefined | SignalLike<string | undefined>;
		form?: string | undefined | SignalLike<string | undefined>;
		formAction?: string | undefined | SignalLike<string | undefined>;
		formaction?: string | undefined | SignalLike<string | undefined>;
		formEncType?: string | undefined | SignalLike<string | undefined>;
		formenctype?: string | undefined | SignalLike<string | undefined>;
		formMethod?: string | undefined | SignalLike<string | undefined>;
		formmethod?: string | undefined | SignalLike<string | undefined>;
		formNoValidate?: boolean | undefined | SignalLike<boolean | undefined>;
		formnovalidate?: boolean | undefined | SignalLike<boolean | undefined>;
		formTarget?: string | undefined | SignalLike<string | undefined>;
		formtarget?: string | undefined | SignalLike<string | undefined>;
		frameBorder?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		frameborder?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		headers?: string | undefined | SignalLike<string | undefined>;
		height?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		hidden?:
			| boolean
			| 'hidden'
			| 'until-found'
			| undefined
			| SignalLike<boolean | 'hidden' | 'until-found' | undefined>;
		high?: number | undefined | SignalLike<number | undefined>;
		href?: string | undefined | SignalLike<string | undefined>;
		hrefLang?: string | undefined | SignalLike<string | undefined>;
		hreflang?: string | undefined | SignalLike<string | undefined>;
		htmlFor?: string | undefined | SignalLike<string | undefined>;
		httpEquiv?: string | undefined | SignalLike<string | undefined>;
		'http-equiv'?: string | undefined | SignalLike<string | undefined>;
		icon?: string | undefined | SignalLike<string | undefined>;
		id?: string | undefined | SignalLike<string | undefined>;
		indeterminate?: boolean | undefined | SignalLike<boolean | undefined>;
		inert?: boolean | undefined | SignalLike<boolean | undefined>;
		inputMode?: string | undefined | SignalLike<string | undefined>;
		inputmode?: string | undefined | SignalLike<string | undefined>;
		integrity?: string | undefined | SignalLike<string | undefined>;
		is?: string | undefined | SignalLike<string | undefined>;
		keyParams?: string | undefined | SignalLike<string | undefined>;
		keyType?: string | undefined | SignalLike<string | undefined>;
		kind?: string | undefined | SignalLike<string | undefined>;
		label?: string | undefined | SignalLike<string | undefined>;
		lang?: string | undefined | SignalLike<string | undefined>;
		list?: string | undefined | SignalLike<string | undefined>;
		loading?:
			| 'eager'
			| 'lazy'
			| undefined
			| SignalLike<'eager' | 'lazy' | undefined>;
		loop?: boolean | undefined | SignalLike<boolean | undefined>;
		low?: number | undefined | SignalLike<number | undefined>;
		manifest?: string | undefined | SignalLike<string | undefined>;
		marginHeight?: number | undefined | SignalLike<number | undefined>;
		marginWidth?: number | undefined | SignalLike<number | undefined>;
		max?: number | string | undefined | SignalLike<string | undefined>;
		maxLength?: number | undefined | SignalLike<number | undefined>;
		maxlength?: number | undefined | SignalLike<number | undefined>;
		media?: string | undefined | SignalLike<string | undefined>;
		mediaGroup?: string | undefined | SignalLike<string | undefined>;
		method?: string | undefined | SignalLike<string | undefined>;
		min?: number | string | undefined | SignalLike<string | undefined>;
		minLength?: number | undefined | SignalLike<number | undefined>;
		minlength?: number | undefined | SignalLike<number | undefined>;
		multiple?: boolean | undefined | SignalLike<boolean | undefined>;
		muted?: boolean | undefined | SignalLike<boolean | undefined>;
		name?: string | undefined | SignalLike<string | undefined>;
		nomodule?: boolean | undefined | SignalLike<boolean | undefined>;
		nonce?: string | undefined | SignalLike<string | undefined>;
		noValidate?: boolean | undefined | SignalLike<boolean | undefined>;
		novalidate?: boolean | undefined | SignalLike<boolean | undefined>;
		open?: boolean | undefined | SignalLike<boolean | undefined>;
		optimum?: number | undefined | SignalLike<number | undefined>;
		part?: string | undefined | SignalLike<string | undefined>;
		pattern?: string | undefined | SignalLike<string | undefined>;
		ping?: string | undefined | SignalLike<string | undefined>;
		placeholder?: string | undefined | SignalLike<string | undefined>;
		playsInline?: boolean | undefined | SignalLike<boolean | undefined>;
		playsinline?: boolean | undefined | SignalLike<boolean | undefined>;
		popover?:
			| 'auto'
			| 'hint'
			| 'manual'
			| boolean
			| undefined
			| SignalLike<'auto' | 'hint' | 'manual' | boolean | undefined>;
		popovertarget?: string | undefined | SignalLike<string | undefined>;
		popoverTarget?: string | undefined | SignalLike<string | undefined>;
		popovertargetaction?:
			| 'hide'
			| 'show'
			| 'toggle'
			| undefined
			| SignalLike<'hide' | 'show' | 'toggle' | undefined>;
		popoverTargetAction?:
			| 'hide'
			| 'show'
			| 'toggle'
			| undefined
			| SignalLike<'hide' | 'show' | 'toggle' | undefined>;
		poster?: string | undefined | SignalLike<string | undefined>;
		preload?: string | undefined | SignalLike<string | undefined>;
		radioGroup?: string | undefined | SignalLike<string | undefined>;
		readonly?: boolean | undefined | SignalLike<boolean | undefined>;
		readOnly?: boolean | undefined | SignalLike<boolean | undefined>;
		referrerpolicy?:
			| 'no-referrer'
			| 'no-referrer-when-downgrade'
			| 'origin'
			| 'origin-when-cross-origin'
			| 'same-origin'
			| 'strict-origin'
			| 'strict-origin-when-cross-origin'
			| 'unsafe-url'
			| undefined
			| SignalLike<
					| 'no-referrer'
					| 'no-referrer-when-downgrade'
					| 'origin'
					| 'origin-when-cross-origin'
					| 'same-origin'
					| 'strict-origin'
					| 'strict-origin-when-cross-origin'
					| 'unsafe-url'
					| undefined
			  >;
		rel?: string | undefined | SignalLike<string | undefined>;
		required?: boolean | undefined | SignalLike<boolean | undefined>;
		reversed?: boolean | undefined | SignalLike<boolean | undefined>;
		role?: AriaRole | undefined | SignalLike<AriaRole | undefined>;
		rows?: number | undefined | SignalLike<number | undefined>;
		rowSpan?: number | undefined | SignalLike<number | undefined>;
		rowspan?: number | undefined | SignalLike<number | undefined>;
		sandbox?: string | undefined | SignalLike<string | undefined>;
		scope?: string | undefined | SignalLike<string | undefined>;
		scoped?: boolean | undefined | SignalLike<boolean | undefined>;
		scrolling?: string | undefined | SignalLike<string | undefined>;
		seamless?: boolean | undefined | SignalLike<boolean | undefined>;
		selected?: boolean | undefined | SignalLike<boolean | undefined>;
		shape?: string | undefined | SignalLike<string | undefined>;
		size?: number | undefined | SignalLike<number | undefined>;
		sizes?: string | undefined | SignalLike<string | undefined>;
		slot?: string | undefined | SignalLike<string | undefined>;
		span?: number | undefined | SignalLike<number | undefined>;
		spellcheck?: boolean | undefined | SignalLike<boolean | undefined>;
		src?: string | undefined | SignalLike<string | undefined>;
		srcSet?: string | undefined | SignalLike<string | undefined>;
		srcset?: string | undefined | SignalLike<string | undefined>;
		srcDoc?: string | undefined | SignalLike<string | undefined>;
		srcdoc?: string | undefined | SignalLike<string | undefined>;
		srcLang?: string | undefined | SignalLike<string | undefined>;
		srclang?: string | undefined | SignalLike<string | undefined>;
		start?: number | undefined | SignalLike<number | undefined>;
		step?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		style?:
			| string
			| CSSProperties
			| undefined
			| SignalLike<string | CSSProperties | undefined>;
		summary?: string | undefined | SignalLike<string | undefined>;
		tabIndex?: number | undefined | SignalLike<number | undefined>;
		tabindex?: number | undefined | SignalLike<number | undefined>;
		target?: string | undefined | SignalLike<string | undefined>;
		title?: string | undefined | SignalLike<string | undefined>;
		type?: string | undefined | SignalLike<string | undefined>;
		useMap?: string | undefined | SignalLike<string | undefined>;
		usemap?: string | undefined | SignalLike<string | undefined>;
		value?:
			| string
			| string[]
			| number
			| undefined
			| SignalLike<string | string[] | number | undefined>;
		volume?:
			| string
			| number
			| undefined
			| SignalLike<string | number | undefined>;
		width?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		wmode?: string | undefined | SignalLike<string | undefined>;
		wrap?: string | undefined | SignalLike<string | undefined>;

		// Non-standard Attributes
		autocapitalize?:
			| 'off'
			| 'none'
			| 'on'
			| 'sentences'
			| 'words'
			| 'characters'
			| undefined
			| SignalLike<
					| 'off'
					| 'none'
					| 'on'
					| 'sentences'
					| 'words'
					| 'characters'
					| undefined
			  >;
		autoCapitalize?:
			| 'off'
			| 'none'
			| 'on'
			| 'sentences'
			| 'words'
			| 'characters'
			| undefined
			| SignalLike<
					| 'off'
					| 'none'
					| 'on'
					| 'sentences'
					| 'words'
					| 'characters'
					| undefined
			  >;
		disablePictureInPicture?:
			| boolean
			| undefined
			| SignalLike<boolean | undefined>;
		results?: number | undefined | SignalLike<number | undefined>;
		translate?: boolean | undefined | SignalLike<boolean | undefined>;

		// RDFa Attributes
		about?: string | undefined | SignalLike<string | undefined>;
		datatype?: string | undefined | SignalLike<string | undefined>;
		inlist?: any;
		prefix?: string | undefined | SignalLike<string | undefined>;
		property?: string | undefined | SignalLike<string | undefined>;
		resource?: string | undefined | SignalLike<string | undefined>;
		typeof?: string | undefined | SignalLike<string | undefined>;
		vocab?: string | undefined | SignalLike<string | undefined>;

		// Microdata Attributes
		itemProp?: string | undefined | SignalLike<string | undefined>;
		itemprop?: string | undefined | SignalLike<string | undefined>;
		itemScope?: boolean | undefined | SignalLike<boolean | undefined>;
		itemscope?: boolean | undefined | SignalLike<boolean | undefined>;
		itemType?: string | undefined | SignalLike<string | undefined>;
		itemtype?: string | undefined | SignalLike<string | undefined>;
		itemID?: string | undefined | SignalLike<string | undefined>;
		itemid?: string | undefined | SignalLike<string | undefined>;
		itemRef?: string | undefined | SignalLike<string | undefined>;
		itemref?: string | undefined | SignalLike<string | undefined>;
	}

	export type DetailedHTMLProps<
		HA extends HTMLAttributes<RefType>,
		RefType extends EventTarget = EventTarget
	> = HA;

	export interface HTMLMarqueeElement extends HTMLElement {
		behavior?:
			| 'scroll'
			| 'slide'
			| 'alternate'
			| undefined
			| SignalLike<'scroll' | 'slide' | 'alternate' | undefined>;
		bgColor?: string | undefined | SignalLike<string | undefined>;
		direction?:
			| 'left'
			| 'right'
			| 'up'
			| 'down'
			| undefined
			| SignalLike<'left' | 'right' | 'up' | 'down' | undefined>;
		height?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		hspace?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		loop?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		scrollAmount?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		scrollDelay?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		trueSpeed?: boolean | undefined | SignalLike<boolean | undefined>;
		vspace?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
		width?:
			| number
			| string
			| undefined
			| SignalLike<number | string | undefined>;
	}

	export interface MathMLAttributes<Target extends EventTarget = MathMLElement>
		extends HTMLAttributes<Target> {
		dir?: 'ltr' | 'rtl' | undefined | SignalLike<'ltr' | 'rtl' | undefined>;
		displaystyle?: boolean | undefined | SignalLike<boolean | undefined>;
		/** @deprecated This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/href  */
		href?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathbackground */
		mathbackground?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathcolor */
		mathcolor?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathsize */
		mathsize?: string | undefined | SignalLike<string | undefined>;
		nonce?: string | undefined | SignalLike<string | undefined>;
		scriptlevel?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLAnnotationElement extends MathMLElement {
		encoding?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
		src?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLAnnotationXmlElement extends MathMLElement {
		encoding?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
		src?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMActionElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#actiontype */
		actiontype?:
			| 'statusline'
			| 'toggle'
			| undefined
			| SignalLike<'statusline' | 'toggle' | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#selection */
		selection?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMathElement extends MathMLElement {
		display?:
			| 'block'
			| 'inline'
			| undefined
			| SignalLike<'block' | 'inline' | undefined>;
	}

	export interface HTMLMEncloseElement extends MathMLElement {
		notation?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMErrorElement extends MathMLElement {}

	export interface HTMLMFencedElement extends MathMLElement {
		close?: string | undefined | SignalLike<string | undefined>;
		open?: string | undefined | SignalLike<string | undefined>;
		separators?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMFracElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign */
		denomalign?:
			| 'center'
			| 'left'
			| 'right'
			| undefined
			| SignalLike<'center' | 'left' | 'right' | undefined>;
		linethickness?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign */
		numalign?:
			| 'center'
			| 'left'
			| 'right'
			| undefined
			| SignalLike<'center' | 'left' | 'right' | undefined>;
	}

	export interface HTMLMiElement extends MathMLElement {
		/** The only value allowed in the current specification is normal (case insensitive)
		 * See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi#mathvariant */
		mathvariant?:
			| 'normal'
			| 'bold'
			| 'italic'
			| 'bold-italic'
			| 'double-struck'
			| 'bold-fraktur'
			| 'script'
			| 'bold-script'
			| 'fraktur'
			| 'sans-serif'
			| 'bold-sans-serif'
			| 'sans-serif-italic'
			| 'sans-serif-bold-italic'
			| 'monospace'
			| 'initial'
			| 'tailed'
			| 'looped'
			| 'stretched'
			| undefined
			| SignalLike<
					| 'normal'
					| 'bold'
					| 'italic'
					| 'bold-italic'
					| 'double-struck'
					| 'bold-fraktur'
					| 'script'
					| 'bold-script'
					| 'fraktur'
					| 'sans-serif'
					| 'bold-sans-serif'
					| 'sans-serif-italic'
					| 'sans-serif-bold-italic'
					| 'monospace'
					| 'initial'
					| 'tailed'
					| 'looped'
					| 'stretched'
					| undefined
			  >;
	}

	export interface HTMLMmultiScriptsElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#subscriptshift */
		subscriptshift?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#superscriptshift */
		superscriptshift?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMNElement extends MathMLElement {}

	export interface HTMLMOElement extends MathMLElement {
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo#accent */
		accent?: boolean | undefined | SignalLike<boolean | undefined>;
		fence?: boolean | undefined | SignalLike<boolean | undefined>;
		largeop?: boolean | undefined | SignalLike<boolean | undefined>;
		lspace?: string | undefined | SignalLike<string | undefined>;
		maxsize?: string | undefined | SignalLike<string | undefined>;
		minsize?: string | undefined | SignalLike<string | undefined>;
		movablelimits?: boolean | undefined | SignalLike<boolean | undefined>;
		rspace?: string | undefined | SignalLike<string | undefined>;
		separator?: boolean | undefined | SignalLike<boolean | undefined>;
		stretchy?: boolean | undefined | SignalLike<boolean | undefined>;
		symmetric?: boolean | undefined | SignalLike<boolean | undefined>;
	}

	export interface HTMLMOverElement extends MathMLElement {
		accent?: boolean | undefined | SignalLike<boolean | undefined>;
	}

	export interface HTMLMPaddedElement extends MathMLElement {
		depth?: string | undefined | SignalLike<string | undefined>;
		height?: string | undefined | SignalLike<string | undefined>;
		lspace?: string | undefined | SignalLike<string | undefined>;
		voffset?: string | undefined | SignalLike<string | undefined>;
		width?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMPhantomElement extends MathMLElement {}

	export interface HTMLMPrescriptsElement extends MathMLElement {}

	export interface HTMLMRootElement extends MathMLElement {}

	export interface HTMLMRowElement extends MathMLElement {}

	export interface HTMLMSElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility */
		lquote?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility */
		rquote?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMSpaceElement extends MathMLElement {
		depth?: string | undefined | SignalLike<string | undefined>;
		height?: string | undefined | SignalLike<string | undefined>;
		width?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMSqrtElement extends MathMLElement {}

	export interface HTMLMStyleElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#background */
		background?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#color */
		color?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontsize */
		fontsize?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontstyle */
		fontstyle?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontweight */
		fontweight?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptminsize */
		scriptminsize?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptsizemultiplier */
		scriptsizemultiplier?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMSubElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub#subscriptshift */
		subscriptshift?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMSubsupElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#subscriptshift */
		subscriptshift?: string | undefined | SignalLike<string | undefined>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#superscriptshift */
		superscriptshift?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMSupElement extends MathMLElement {
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msup#superscriptshift */
		superscriptshift?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMTableElement extends MathMLElement {
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#align */
		align?:
			| 'axis'
			| 'baseline'
			| 'bottom'
			| 'center'
			| 'top'
			| undefined
			| SignalLike<
					'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
			  >;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnalign */
		columnalign?:
			| 'center'
			| 'left'
			| 'right'
			| undefined
			| SignalLike<'center' | 'left' | 'right' | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnlines */
		columnlines?:
			| 'dashed'
			| 'none'
			| 'solid'
			| undefined
			| SignalLike<'dashed' | 'none' | 'solid' | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnspacing */
		columnspacing?: string | undefined | SignalLike<string | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#frame */
		frame?:
			| 'dashed'
			| 'none'
			| 'solid'
			| undefined
			| SignalLike<'dashed' | 'none' | 'solid' | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#framespacing */
		framespacing?: string | undefined | SignalLike<string | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowalign */
		rowalign?:
			| 'axis'
			| 'baseline'
			| 'bottom'
			| 'center'
			| 'top'
			| undefined
			| SignalLike<
					'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
			  >;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowlines */
		rowlines?:
			| 'dashed'
			| 'none'
			| 'solid'
			| undefined
			| SignalLike<'dashed' | 'none' | 'solid' | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowspacing */
		rowspacing?: string | undefined | SignalLike<string | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#width */
		width?: string | undefined | SignalLike<string | undefined>;
	}

	export interface HTMLMTdElement extends MathMLElement {
		columnspan?: number | undefined | SignalLike<number | undefined>;
		rowspan?: number | undefined | SignalLike<number | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign */
		columnalign?:
			| 'center'
			| 'left'
			| 'right'
			| undefined
			| SignalLike<'center' | 'left' | 'right' | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign */
		rowalign?:
			| 'axis'
			| 'baseline'
			| 'bottom'
			| 'center'
			| 'top'
			| undefined
			| SignalLike<
					'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
			  >;
	}

	export interface HTMLMTextElement extends MathMLElement {}

	export interface HTMLMTrElement extends MathMLElement {
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign */
		columnalign?:
			| 'center'
			| 'left'
			| 'right'
			| undefined
			| SignalLike<'center' | 'left' | 'right' | undefined>;
		/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign */
		rowalign?:
			| 'axis'
			| 'baseline'
			| 'bottom'
			| 'center'
			| 'top'
			| undefined
			| SignalLike<
					'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
			  >;
	}

	export interface HTMLMUnderElement extends MathMLElement {
		accentunder?: boolean | undefined | SignalLike<boolean | undefined>;
	}

	export interface HTMLMUnderoverElement extends MathMLElement {
		accent?: boolean | undefined | SignalLike<boolean | undefined>;
		accentunder?: boolean | undefined | SignalLike<boolean | undefined>;
	}

	export interface HTMLSemanticsElement extends MathMLElement {}

	export interface IntrinsicSVGElements {
		svg: SVGAttributes<SVGSVGElement>;
		animate: SVGAttributes<SVGAnimateElement>;
		circle: SVGAttributes<SVGCircleElement>;
		animateMotion: SVGAttributes<SVGAnimateMotionElement>;
		animateTransform: SVGAttributes<SVGAnimateTransformElement>;
		clipPath: SVGAttributes<SVGClipPathElement>;
		defs: SVGAttributes<SVGDefsElement>;
		desc: SVGAttributes<SVGDescElement>;
		ellipse: SVGAttributes<SVGEllipseElement>;
		feBlend: SVGAttributes<SVGFEBlendElement>;
		feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
		feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
		feComposite: SVGAttributes<SVGFECompositeElement>;
		feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
		feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
		feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
		feDistantLight: SVGAttributes<SVGFEDistantLightElement>;
		feDropShadow: SVGAttributes<SVGFEDropShadowElement>;
		feFlood: SVGAttributes<SVGFEFloodElement>;
		feFuncA: SVGAttributes<SVGFEFuncAElement>;
		feFuncB: SVGAttributes<SVGFEFuncBElement>;
		feFuncG: SVGAttributes<SVGFEFuncGElement>;
		feFuncR: SVGAttributes<SVGFEFuncRElement>;
		feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
		feImage: SVGAttributes<SVGFEImageElement>;
		feMerge: SVGAttributes<SVGFEMergeElement>;
		feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
		feMorphology: SVGAttributes<SVGFEMorphologyElement>;
		feOffset: SVGAttributes<SVGFEOffsetElement>;
		fePointLight: SVGAttributes<SVGFEPointLightElement>;
		feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
		feSpotLight: SVGAttributes<SVGFESpotLightElement>;
		feTile: SVGAttributes<SVGFETileElement>;
		feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
		filter: SVGAttributes<SVGFilterElement>;
		foreignObject: SVGAttributes<SVGForeignObjectElement>;
		g: SVGAttributes<SVGGElement>;
		image: SVGAttributes<SVGImageElement>;
		line: SVGAttributes<SVGLineElement>;
		linearGradient: SVGAttributes<SVGLinearGradientElement>;
		marker: SVGAttributes<SVGMarkerElement>;
		mask: SVGAttributes<SVGMaskElement>;
		metadata: SVGAttributes<SVGMetadataElement>;
		mpath: SVGAttributes<SVGMPathElement>;
		path: SVGAttributes<SVGPathElement>;
		pattern: SVGAttributes<SVGPatternElement>;
		polygon: SVGAttributes<SVGPolygonElement>;
		polyline: SVGAttributes<SVGPolylineElement>;
		radialGradient: SVGAttributes<SVGRadialGradientElement>;
		rect: SVGAttributes<SVGRectElement>;
		set: SVGAttributes<SVGSetElement>;
		stop: SVGAttributes<SVGStopElement>;
		switch: SVGAttributes<SVGSwitchElement>;
		symbol: SVGAttributes<SVGSymbolElement>;
		text: SVGAttributes<SVGTextElement>;
		textPath: SVGAttributes<SVGTextPathElement>;
		tspan: SVGAttributes<SVGTSpanElement>;
		use: SVGAttributes<SVGUseElement>;
		view: SVGAttributes<SVGViewElement>;
	}

	export interface IntrinsicElements extends IntrinsicSVGElements {
		// HTML
		a: HTMLAttributes<HTMLAnchorElement>;
		abbr: HTMLAttributes<HTMLElement>;
		address: HTMLAttributes<HTMLElement>;
		area: HTMLAttributes<HTMLAreaElement>;
		article: HTMLAttributes<HTMLElement>;
		aside: HTMLAttributes<HTMLElement>;
		audio: HTMLAttributes<HTMLAudioElement>;
		b: HTMLAttributes<HTMLElement>;
		base: HTMLAttributes<HTMLBaseElement>;
		bdi: HTMLAttributes<HTMLElement>;
		bdo: HTMLAttributes<HTMLElement>;
		big: HTMLAttributes<HTMLElement>;
		blockquote: HTMLAttributes<HTMLQuoteElement>;
		body: HTMLAttributes<HTMLBodyElement>;
		br: HTMLAttributes<HTMLBRElement>;
		button: HTMLAttributes<HTMLButtonElement>;
		canvas: HTMLAttributes<HTMLCanvasElement>;
		caption: HTMLAttributes<HTMLTableCaptionElement>;
		cite: HTMLAttributes<HTMLElement>;
		code: HTMLAttributes<HTMLElement>;
		col: HTMLAttributes<HTMLTableColElement>;
		colgroup: HTMLAttributes<HTMLTableColElement>;
		data: HTMLAttributes<HTMLDataElement>;
		datalist: HTMLAttributes<HTMLDataListElement>;
		dd: HTMLAttributes<HTMLElement>;
		del: HTMLAttributes<HTMLModElement>;
		details: HTMLAttributes<HTMLDetailsElement>;
		dfn: HTMLAttributes<HTMLElement>;
		dialog: HTMLAttributes<HTMLDialogElement>;
		div: HTMLAttributes<HTMLDivElement>;
		dl: HTMLAttributes<HTMLDListElement>;
		dt: HTMLAttributes<HTMLElement>;
		em: HTMLAttributes<HTMLElement>;
		embed: HTMLAttributes<HTMLEmbedElement>;
		fieldset: HTMLAttributes<HTMLFieldSetElement>;
		figcaption: HTMLAttributes<HTMLElement>;
		figure: HTMLAttributes<HTMLElement>;
		footer: HTMLAttributes<HTMLElement>;
		form: HTMLAttributes<HTMLFormElement>;
		h1: HTMLAttributes<HTMLHeadingElement>;
		h2: HTMLAttributes<HTMLHeadingElement>;
		h3: HTMLAttributes<HTMLHeadingElement>;
		h4: HTMLAttributes<HTMLHeadingElement>;
		h5: HTMLAttributes<HTMLHeadingElement>;
		h6: HTMLAttributes<HTMLHeadingElement>;
		head: HTMLAttributes<HTMLHeadElement>;
		header: HTMLAttributes<HTMLElement>;
		hgroup: HTMLAttributes<HTMLElement>;
		hr: HTMLAttributes<HTMLHRElement>;
		html: HTMLAttributes<HTMLHtmlElement>;
		i: HTMLAttributes<HTMLElement>;
		iframe: HTMLAttributes<HTMLIFrameElement>;
		img: HTMLAttributes<HTMLImageElement>;
		input: HTMLAttributes<HTMLInputElement>;
		ins: HTMLAttributes<HTMLModElement>;
		kbd: HTMLAttributes<HTMLElement>;
		keygen: HTMLAttributes<HTMLUnknownElement>;
		label: HTMLAttributes<HTMLLabelElement>;
		legend: HTMLAttributes<HTMLLegendElement>;
		li: HTMLAttributes<HTMLLIElement>;
		link: HTMLAttributes<HTMLLinkElement>;
		main: HTMLAttributes<HTMLElement>;
		map: HTMLAttributes<HTMLMapElement>;
		mark: HTMLAttributes<HTMLElement>;
		marquee: HTMLAttributes<HTMLMarqueeElement>;
		menu: HTMLAttributes<HTMLMenuElement>;
		menuitem: HTMLAttributes<HTMLUnknownElement>;
		meta: HTMLAttributes<HTMLMetaElement>;
		meter: HTMLAttributes<HTMLMeterElement>;
		nav: HTMLAttributes<HTMLElement>;
		noscript: HTMLAttributes<HTMLElement>;
		object: HTMLAttributes<HTMLObjectElement>;
		ol: HTMLAttributes<HTMLOListElement>;
		optgroup: HTMLAttributes<HTMLOptGroupElement>;
		option: HTMLAttributes<HTMLOptionElement>;
		output: HTMLAttributes<HTMLOutputElement>;
		p: HTMLAttributes<HTMLParagraphElement>;
		param: HTMLAttributes<HTMLParamElement>;
		picture: HTMLAttributes<HTMLPictureElement>;
		pre: HTMLAttributes<HTMLPreElement>;
		progress: HTMLAttributes<HTMLProgressElement>;
		q: HTMLAttributes<HTMLQuoteElement>;
		rp: HTMLAttributes<HTMLElement>;
		rt: HTMLAttributes<HTMLElement>;
		ruby: HTMLAttributes<HTMLElement>;
		s: HTMLAttributes<HTMLElement>;
		samp: HTMLAttributes<HTMLElement>;
		script: HTMLAttributes<HTMLScriptElement>;
		search: HTMLAttributes<HTMLElement>;
		section: HTMLAttributes<HTMLElement>;
		select: HTMLAttributes<HTMLSelectElement>;
		slot: HTMLAttributes<HTMLSlotElement>;
		small: HTMLAttributes<HTMLElement>;
		source: HTMLAttributes<HTMLSourceElement>;
		span: HTMLAttributes<HTMLSpanElement>;
		strong: HTMLAttributes<HTMLElement>;
		style: HTMLAttributes<HTMLStyleElement>;
		sub: HTMLAttributes<HTMLElement>;
		summary: HTMLAttributes<HTMLElement>;
		sup: HTMLAttributes<HTMLElement>;
		table: HTMLAttributes<HTMLTableElement>;
		tbody: HTMLAttributes<HTMLTableSectionElement>;
		td: HTMLAttributes<HTMLTableCellElement>;
		template: HTMLAttributes<HTMLTemplateElement>;
		textarea: HTMLAttributes<HTMLTextAreaElement>;
		tfoot: HTMLAttributes<HTMLTableSectionElement>;
		th: HTMLAttributes<HTMLTableCellElement>;
		thead: HTMLAttributes<HTMLTableSectionElement>;
		time: HTMLAttributes<HTMLTimeElement>;
		title: HTMLAttributes<HTMLTitleElement>;
		tr: HTMLAttributes<HTMLTableRowElement>;
		track: HTMLAttributes<HTMLTrackElement>;
		u: HTMLAttributes<HTMLElement>;
		ul: HTMLAttributes<HTMLUListElement>;
		var: HTMLAttributes<HTMLElement>;
		video: HTMLAttributes<HTMLVideoElement>;
		wbr: HTMLAttributes<HTMLElement>;

		// MathML See https://developer.mozilla.org/en-US/docs/Web/MathML
		'annotation-xml': MathMLAttributes<HTMLAnnotationXmlElement>;
		annotation: MathMLAttributes<HTMLAnnotationElement>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction */
		maction: MathMLAttributes<HTMLMActionElement>;
		math: MathMLAttributes<HTMLMathElement>;
		/** This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/menclose  */
		menclose: MathMLAttributes<HTMLMEncloseElement>;
		merror: MathMLAttributes<HTMLMErrorElement>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfenced */
		mfenced: HTMLAttributes<HTMLMFencedElement>;
		mfrac: MathMLAttributes<HTMLMFracElement>;
		mi: MathMLAttributes<HTMLMiElement>;
		mmultiscripts: MathMLAttributes<HTMLMmultiScriptsElement>;
		mn: MathMLAttributes<HTMLMNElement>;
		mo: MathMLAttributes<HTMLMOElement>;
		mover: MathMLAttributes<HTMLMOverElement>;
		mpadded: MathMLAttributes<HTMLMPaddedElement>;
		mphantom: MathMLAttributes<HTMLMPhantomElement>;
		mprescripts: MathMLAttributes<HTMLMPrescriptsElement>;
		mroot: MathMLAttributes<HTMLMRootElement>;
		mrow: MathMLAttributes<HTMLMRowElement>;
		ms: MathMLAttributes<HTMLMSElement>;
		mspace: MathMLAttributes<HTMLMSpaceElement>;
		msqrt: MathMLAttributes<HTMLMSqrtElement>;
		mstyle: MathMLAttributes<HTMLMStyleElement>;
		msub: MathMLAttributes<HTMLMSubElement>;
		msubsup: MathMLAttributes<HTMLMSubsupElement>;
		msup: MathMLAttributes<HTMLMSupElement>;
		mtable: MathMLAttributes<HTMLMTableElement>;
		mtd: MathMLAttributes<HTMLMTdElement>;
		mtext: MathMLAttributes<HTMLMTextElement>;
		mtr: MathMLAttributes<HTMLMTrElement>;
		munder: MathMLAttributes<HTMLMUnderElement>;
		munderover: MathMLAttributes<HTMLMUnderoverElement>;
		semantics: MathMLAttributes<HTMLSemanticsElement>;
	}
}
