import React, { SVGAttributes, RefAttributes, CSSProperties } from 'react';
import { FlipProp, PullProp, RotateProp, Transform, FaSymbol, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface AnimationProps {
    /**
     * Makes the icon spin 360deg clockwise continuously.
     * @see {@link https://docs.fontawesome.com/web/style/animate#spin}
     */
    spin?: boolean | undefined;
    /**
     * Makes the icon spin 360deg clockwise in 8 incremental steps.
     * @see {@link https://docs.fontawesome.com/web/style/animate#spin}
     */
    spinPulse?: boolean | undefined;
    /**
     * When used in conjunction with {@link spin} or {@link spinPulse}, makes the icon spin in reverse.
     * @see {@link https://docs.fontawesome.com/web/style/animate#spin-utilities}
     */
    spinReverse?: boolean | undefined;
    /**
     * @deprecated
     * Will be removed in a future version.
     * Please use {@link spinPulse} instead.
     *
     * Makes the icon spin 360deg clockwise in 8 incremental steps.
     * @see {@link https://docs.fontawesome.com/web/style/animate#spin-utilities}
     */
    pulse?: boolean | undefined;
    /**
     * Makes the icon scale in and out continuously.
     * @see {@link https://docs.fontawesome.com/web/style/animate#beat}
     */
    beat?: boolean | undefined;
    /**
     * Makes the icon fade in and out continuously.
     * @see {@link https://docs.fontawesome.com/web/style/animate#fade}
     */
    fade?: boolean | undefined;
    /**
     * Applies both scaling and fading animations from {@link beat} and {@link fade}.
     * @see {@link https://docs.fontawesome.com/web/style/animate#beat-fade}
     */
    beatFade?: boolean | undefined;
    /**
     * Makes the icon bounce up and down.
     * @see {@link https://docs.fontawesome.com/web/style/animate#bounce}
     */
    bounce?: boolean | undefined;
    /**
     * Makes the icon shake.
     * @see {@link https://docs.fontawesome.com/web/style/animate#shake}
     */
    shake?: boolean | undefined;
}

/**
 * Adds support for FA's CSS variables to the React `style` prop.
 *
 * TODO: Move this to `fontawesome-common-types`
 * @see https://github.com/FortAwesome/react-fontawesome/pull/581#discussion_r2291185167
 */
interface CSSVariables extends FontFamilyVariables {
    '--fa-family'?: string | undefined;
    '--fa-style'?: string | undefined;
    '--fa-display'?: string | undefined;
    '--fa-inverse'?: string | undefined;
    '--fa-width'?: string | undefined;
    '--fa-li-margin'?: string | undefined;
    '--fa-li-width'?: string | undefined;
    '--fa-rotate-angle'?: string | undefined;
    '--fa-animation-delay'?: string | undefined;
    '--fa-animation-direction'?: string | undefined;
    '--fa-animation-duration'?: string | undefined;
    '--fa-animation-iteration-count'?: string | undefined;
    '--fa-animation-timing'?: string | undefined;
    '--fa-beat-scale'?: string | undefined;
    '--fa-fade-opacity'?: string | undefined;
    '--fa-beat-fade-opacity'?: string | undefined;
    '--fa-beat-fade-scale'?: string | undefined;
    '--fa-flip-x'?: string | undefined;
    '--fa-flip-y'?: string | undefined;
    '--fa-flip-z'?: string | undefined;
    '--fa-flip-angle'?: string | undefined;
    '--fa-border-color'?: string | undefined;
    '--fa-border-padding'?: string | undefined;
    '--fa-border-radius'?: string | undefined;
    '--fa-border-style'?: string | undefined;
    '--fa-border-width'?: string | undefined;
    '--fa-pull-margin'?: string | undefined;
    '--fa-stack-z-index'?: string | undefined;
    '--fa-primary-color'?: string | undefined;
    '--fa-primary-opacity'?: string | undefined;
    '--fa-secondary-color'?: string | undefined;
    '--fa-secondary-opacity'?: string | undefined;
}
type FontFamilyVariables = {
    [K in `--fa-font-${string}`]?: string | undefined;
};

type GradientStop = {
    /** The offset of the gradient stop, specified as a percentage (e.g., '0%', '50%', '100%') or a number between 0 and 1 (e.g., 0, 0.5, 1). */
    offset: string | number;
    /** The color of the gradient stop, specified as a valid CSS color string (e.g., '#FF0000', 'rgb(255, 0, 0)', 'red'). */
    color: string;
    /** The opacity of the gradient stop, specified as a number between 0 and 1 (e.g., 0, 0.5, 1). This is optional and defaults to 1 if not provided. */
    opacity?: number | undefined;
};
type LinearGradient = {
    /**
     * The `id` of the gradient, which is used to reference the gradient in the `fill` attribute of the icon's svg element.
     * This must be a unique value to prevent conflicts with other elements on the page.
     */
    id: string;
    /** The x-coordinate of the start of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    x1?: number | string | undefined;
    /** The x-coordinate of the end of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    x2?: number | string | undefined;
    /** The y-coordinate of the start of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    y1?: number | string | undefined;
    /** The y-coordinate of the end of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    y2?: number | string | undefined;
    stops: GradientStop[];
};
type RadialGradient = {
    /**
     * The `id` of the gradient, which is used to reference the gradient in the `fill` attribute of the icon's svg element.
     * This must be a unique value to prevent conflicts with other elements on the page.
     */
    id: string;
    /** The x-coordinate of the center of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    cx?: number | string | undefined;
    /** The y-coordinate of the center of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    cy?: number | string | undefined;
    /** The radius of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    r?: number | string | undefined;
    /** The x-coordinate of the focal point of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    fx?: number | string | undefined;
    /** The y-coordinate of the focal point of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
    fy?: number | string | undefined;
    stops: GradientStop[];
};
type Gradient<T extends 'linear' | 'radial'> = T extends 'linear' ? {
    type: 'linear';
} & LinearGradient : T extends 'radial' ? {
    type: 'radial';
} & RadialGradient : never;

interface TransformProps {
    /**
     * @deprecated Simply wrap the icon instead, no need to pass this property.
     *
     * @example
     * ```tsx
     * <ul className='fa-ul'>
     *   <li>
     *     <span className='fa-li'>
     *       <FontAwesomeIcon icon={['fas', 'check']} />
     *     </span>
     *     List item with icon
     *   </li>
     * </ul>
     * ```
     *
     * @see {@link https://docs.fontawesome.com/web/style/lists}
     */
    listItem?: boolean | undefined;
    /** Flip the icon horizontally, vertically or both. */
    flip?: FlipProp | boolean | undefined;
    /** Wrap text around the icon by pulling it left or right. */
    pull?: PullProp | undefined;
    /**
     * The rotation property is used to rotate the icon by 90, 180, or 270 degrees.
     *
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#rotation}
     */
    rotation?: RotateProp | undefined;
    /**
     * Custom rotation is used to rotate the icon by a specific number of degrees,
     * rather than the standard 90, 180, or 270 degrees available in the `rotation` property.
     *
     * To use this feature, set `rotateBy` to `true` and provide a CSS variable `--fa-rotate-angle`
     * with the desired rotation angle in degrees.
     *
     * @example
     * ```tsx
     * <FontAwesomeIcon
     *   icon="fa-solid fa-coffee"
     *   rotateBy
     *   style={{ '--fa-rotate-angle': '329deg' }}
     * />
     * ```
     *
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#custom-rotation}
     * @since 7.0.0
     */
    rotateBy?: boolean | undefined;
    /**
     * Apply a custom transform to the icon either using the built-in {@link Transform} config,
     * or a CSS transform string.
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#power-transforms}
     */
    transform?: string | Transform | undefined;
    /**
     * The icon should render as an SVG symbol rather than a regular element.
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#use-svg-symbols}
     */
    symbol?: FaSymbol | undefined;
}

interface FontAwesomeIconProps extends AnimationProps, TransformProps, Omit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'>, RefAttributes<SVGSVGElement> {
    /**
     * The icon to render.
     * @see {@link https://docs.fontawesome.com/web/use-with/react/add-icons}
     */
    icon: IconProp;
    /** The size of the icon from a predefined set of sizes. */
    size?: SizeProp | undefined;
    /**
     * Grab the Mask utility when you want to layer two icons but have the inner icon cut out from the icon below so the parent element’s background shows through.
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#mask}
     */
    mask?: IconProp | undefined;
    /** Accessibility ID for the mask element */
    maskId?: string | undefined;
    /** Any additional CSS classes to apply to the icon */
    className?: string | undefined;
    /** The color of the icon. Can be any valid CSS color value */
    color?: string | undefined;
    /**
     * Creates a `<linearGradient />` or `<radialGradient />` element inside the icon svg, and applies it as a fill to the icon.
     *
     * If you also provide a `fill` prop, the `fill` prop will take precedence over the gradient.
     * Omit the `fill` prop to allow the gradient to be applied correctly.
     *
     * @example
     * Linear Gradient Example:
     * ```tsx
     * <FontAwesomeIcon
     *   icon="coffee"
     *   gradientFill={{
     *     id: 'myGradient',
     *     type: 'linear',
     *     x1: '0%',
     *     y1: '0%',
     *     x2: '100%',
     *     y2: '0%',
     *     stops: [
     *       { offset: '0%', color: '#FF5F6D' },
     *       { offset: '100%', color: '#FFC371' },
     *     ],
     *   }}
     * />
     * ```
     *
     * @example
     * Radial Gradient Example:
     * ```tsx
     * <FontAwesomeIcon
     *   icon="coffee"
     *   gradientFill={{
     *     id: 'myGradient',
     *     type: 'radial',
     *     r: '150%',
     *     cx: '30%',
     *     cy: '107%',
     *     stops: [
     *       { offset: '0', color: '#FDF497' },
     *       { offset: '0.05', color: '#FDF497' },
     *       { offset: '0.45', color: '#FD5949' },
     *       { offset: '0.6', color: '#D6249F' },
     *       { offset: '0.9', color: '#285AEB' },
     *     ],
     *   }}
     * />
     * ```
     *
     * NOTE: Only supports one gradient type, providing both linear and radial gradient props will have undesired side-effects.
     */
    gradientFill?: Gradient<'linear'> | Gradient<'radial'> | undefined;
    /**
     * Applies a border to the icon
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#bordered-icons}
     */
    border?: boolean | undefined;
    /**
     * @deprecated
     * @since 7.0.0
     *
     * Starting in FontAwesome 7.0.0, all icons are fixed width by default.
     * This property will be removed in a future version.
     *
     * If you want to remove the fixed width to replicate the behavior of
     * previous versions, you can set the new {@link widthAuto} property to `true`.
     *
     * @see {@link FontAwesomeIconProps.widthAuto}
     */
    fixedWidth?: boolean | undefined;
    /**
     * Invert the icon color.
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#invert-the-icon-color-to-white}
     */
    inverse?: boolean | undefined;
    /** Any custom styles or CSS variable overrides for the icon element. */
    style?: (CSSProperties & CSSVariables) | undefined;
    tabIndex?: number | undefined;
    /**
     * @deprecated
     * @since 7.0.0
     *
     * Starting in FontAwesome 7.0.0, icons are decorative by default.
     * Instead of using a `title` prop, use the `aria-label` attribute instead.
     *
     * @see {@link https://docs.fontawesome.com/upgrade/whats-changed#simpler-accessibility}
     */
    title?: string | undefined;
    /**
     * @deprecated
     * @since 7.0.0
     *
     * Starting in FontAwesome 7.0.0, icons are decorative by default.
     * Instead of using a `titleId` prop, use an `aria-label` attribute instead.
     *
     * @see {@link https://docs.fontawesome.com/upgrade/whats-changed#simpler-accessibility}
     */
    titleId?: string | undefined;
    /**
     * When using Duotone icons, this property will swap the opacity of the two colors.
     * The first color will be rendered with the opacity of the second color, and vice versa
     *
     * @see {@link https://docs.fontawesome.com/web/use-with/react/style#duotone-icons}
     */
    swapOpacity?: boolean | undefined;
    /**
     * When set to `true`, the icon will automatically adjust its width to
     * only the interior symbol and not the entire Icon Canvas.
     *
     * @see {@link https://docs.fontawesome.com/web/style/icon-canvas}
     * @since 7.0.0
     */
    widthAuto?: boolean | undefined;
}

/**
 * React Component for rendering Font Awesome icons.
 *
 * @function FontAwesomeIcon
 * @param props - The properties for the FontAwesomeIcon component, including icon definition and styling options.
 * @returns A React element representing the Font Awesome icon, or null if the icon cannot be rendered.
 */
declare const FontAwesomeIcon: React.ForwardRefExoticComponent<Omit<FontAwesomeIconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

type Attributes = React.HTMLAttributes<HTMLSpanElement>;
interface FontAwesomeLayersProps extends Attributes {
    children: React.ReactNode;
    className?: string | undefined;
    size?: SizeProp | undefined;
}
/**
 * React Component that allows you to stack multiple Font Awesome icons on top of each other,
 * or to layer with text or a counter.
 *
 * @see https://docs.fontawesome.com/web/style/layer
 *
 * @example
 * ```tsx
 * import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/react-fontawesome'
 * import { faBookmark, faCircle, faCheck, faHeart, faMoon, faPlay, faStar, faSun } from '@fortawesome/free-solid-svg-icons'
 *
 * // React versions of the examples from the FontAwesome Web Docs
 * export const Examples = () => (
 *   <div className="fa-4x">
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faCircle} color="tomato" />
 *       <FontAwesomeIcon icon={faCheck} inverse transform="shrink-6" />
 *     </FontAwesomeLayers>
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faBookmark} />
 *       <FontAwesomeIcon icon={faHeart} color="tomato" transform="shrink-10 up-2" />
 *     </FontAwesomeLayers>
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faPlay} transform="rotate--90 grow-4" />
 *       <FontAwesomeIcon icon={faSun} inverse transform="shrink-10 up-2" />
 *       <FontAwesomeIcon icon={faMoon} inverse transform="shrink-11 down-4.2 left-4" />
 *       <FontAwesomeIcon icon={faStar} inverse transform="shrink-11 down-4.2 right-4" />
 *     </FontAwesomeLayers>
 *   </div>
 * )
 * ```
 *
 * For examples using Text or Counter components:
 * @see {@link LayersText}
 * @see {@link LayersCounter}
 */
declare const FontAwesomeLayers: ({ children, className, size, ...attributes }: FontAwesomeLayersProps) => react_jsx_runtime.JSX.Element;
/**
 * Text component to be used within a `FontAwesomeLayers` component.
 *
 * @see https://docs.fontawesome.com/web/style/layer
 *
 * @example
 * ```tsx
 * import { FontAwesomeLayers, LayersText } from '@fortawesome/react-fontawesome'
 * import { faCalendar, faCertificate } from '@fortawesome/free-solid-svg-icons'
 *
 * // React versions of the examples from the FontAwesome Web Docs
 * export const Examples = () => (
 *   <div className="fa-4x">
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faCalendar} />
 *       <LayersText
 *         text="27"
 *         inverse
 *         style={{ fontWeight: '900' }}
 *         transform="shrink-8 down-3"
 *       />
 *     </FontAwesomeLayers>
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faCertificate} />
 *       <LayersText
 *         text="NEW"
 *         inverse
 *         style={{ fontWeight: '900' }}
 *         transform="shrink-11.5 rotate--30"
 *       />
 *     </FontAwesomeLayers>
 *   </div>
 * )
 * ```
 */
declare const LayersText: ({ text, className, inverse, transform, style, ...attributes }: Attributes & {
    text: string;
    className?: string | undefined;
    inverse?: boolean | undefined;
    transform?: string | Transform | undefined;
    style?: (React.CSSProperties & CSSVariables) | undefined;
}) => React.JSX.Element;
/**
 * Counter component to be used within a `FontAwesomeLayers` component.
 *
 * @see https://docs.fontawesome.com/web/style/layer
 *
 * @example
 * ```tsx
 * import { FontAwesomeLayers, LayersCounter } from '@fortawesome/react-fontawesome'
 * import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
 *
 * // React version of the example from the FontAwesome Web Docs
 * export const Example = ({ count = 1419 }) => (
 *   <FontAwesomeLayers size="4x">
 *     <FontAwesomeIcon icon={faEnvelope} />
 *     <LayersCounter count={count.toLocaleString()} style={{ backgroundColor: 'tomato' }} />
 *   </FontAwesomeLayers>
 * )
 * ```
 */
declare const LayersCounter: ({ count, className, style, ...attributes }: Attributes & {
    count: number | string;
    className?: string | undefined;
    style?: (React.CSSProperties & CSSVariables) | undefined;
}) => React.JSX.Element;

export { type AnimationProps, type CSSVariables, FontAwesomeIcon, type FontAwesomeIconProps, FontAwesomeLayers, type FontAwesomeLayersProps, LayersCounter, LayersText, type TransformProps };
