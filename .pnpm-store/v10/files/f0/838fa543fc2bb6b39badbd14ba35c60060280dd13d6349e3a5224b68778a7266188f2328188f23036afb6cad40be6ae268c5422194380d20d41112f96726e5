import type Stitches from './stitches'

import type * as Config from './config'
import type * as CSSUtil from './css-util'
import type * as StyledComponent from './styled-component'

export { $$PropertyValue, $$ScaleValue, $$ThemeValue} from './css-util'
export type CreateStitches = Config.CreateStitches
export type CSSProperties = CSSUtil.CSSProperties
export type DefaultThemeMap = Config.DefaultThemeMap

/** Returns a Style interface from a configuration, leveraging the given media and style map. */
export type CSS<
	Config extends {
		media?: {}
		theme?: {}
		themeMap?: {}
		utils?: {}
	} = {
		media: {},
		theme: {},
		themeMap: {},
		utils: {}
	}
> = CSSUtil.CSS<
	Config['media'],
	Config['theme'],
	Config['themeMap'],
	Config['utils']
>

/** Returns the properties, attributes, and children expected by a component. */
export type ComponentProps<Component> = Component extends ((...args: any[]) => any) ? Parameters<Component>[0] : never

/** Returns a type that expects a value to be a kind of CSS property value. */
export type PropertyValue<Property extends keyof CSSUtil.CSSProperties, Config = null> = (
	Config extends null
		? { readonly [K in CSSUtil.$$PropertyValue]: Property }
	: Config extends { [K: string]: any }
		? CSSUtil.CSS<
			Config['media'],
			Config['theme'],
			Config['themeMap'],
			Config['utils']
		>[Property]
	: never
)

/** Returns a type that expects a value to be a kind of theme scale value. */
export type ScaleValue<Scale, Config = null> = (
	Config extends null
		? { readonly [K in CSSUtil.$$ScaleValue]: Scale }
	: Config extends { [K: string]: any }
		? Scale extends keyof Config['theme']
			? `$${string & keyof Config['theme'][Scale]}`
		: never
	: never
)

/** Returns a type that suggests variants from a component as possible prop values. */
export type VariantProps<Component extends {[key: symbol | string]: any}> = StyledComponent.TransformProps<Component[StyledComponent.$$StyledComponentProps], Component[StyledComponent.$$StyledComponentMedia]>

/** Map of CSS properties to token scales. */
export declare const defaultThemeMap: DefaultThemeMap

/** Returns a library used to create styles. */
export declare const createStitches: CreateStitches

/** Returns an object representing a theme. */
export declare const createTheme: Stitches['createTheme']

/** Returns a function that applies globalCss styles. */
export declare const globalCss: Stitches['globalCss']

/** Returns an object that applies `@keyframes` styles. */
export declare const keyframes: Stitches['keyframes']

/** Returns a function that applies styles and variants for a specific class. */
export declare const css: Stitches['css']
