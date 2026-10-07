import type * as Native from './css'
import type * as Config from './config'
import type * as ThemeUtil from './theme'
import type * as Util from './util'

export { Native }

/** CSS style declaration object. */
export interface CSSProperties extends Native.StandardLonghandProperties, Native.StandardShorthandProperties, Native.SvgProperties {}

type ValueByPropertyName<PropertyName> = PropertyName extends keyof CSSProperties ? CSSProperties[PropertyName] : never

type TokenByPropertyName<PropertyName, Theme, ThemeMap> = PropertyName extends keyof ThemeMap ? TokenByScaleName<ThemeMap[PropertyName], Theme> : never

type TokenByScaleName<ScaleName, Theme> = ScaleName extends keyof Theme ? Util.Prefixed<'$', keyof Theme[ScaleName]> : never

/** Returns a Style interface, leveraging the given media and style map. */
export type CSS<
	Media = {},
	Theme = {},
	ThemeMap = Config.DefaultThemeMap,
	Utils = {},
> = (
	// nested at-rule css styles
	& {
		[K in Util.Prefixed<'@', keyof Media>]?: CSS<Media, Theme, ThemeMap, Utils>
	}
	// known property styles
	& {
		[K in keyof CSSProperties]?: (
			| ValueByPropertyName<K>
			| TokenByPropertyName<K, Theme, ThemeMap>
			| Native.Globals
			| ThemeUtil.ScaleValue
			| Util.Index
			| undefined
		)
	}
	// known utility styles
	& {
		[K in keyof Utils as K extends keyof CSSProperties ? never : K]?: Utils[K] extends (arg: infer P) => any
			? (
				| (
					P extends any[]
						? (
							| (
								$$PropertyValue extends keyof P[0]
									? (
										| ValueByPropertyName<P[0][$$PropertyValue]>
										| TokenByPropertyName<P[0][$$PropertyValue], Theme, ThemeMap>
										| Native.Globals
										| ThemeUtil.ScaleValue
										| undefined
									)
								: $$ScaleValue extends keyof P[0]
									? (
										| TokenByScaleName<P[0][$$ScaleValue], Theme>
										| { scale: P[0][$$ScaleValue] }
										| undefined
									)
								: never
							)[]
							| P
						)
					: $$PropertyValue extends keyof P
						? (
							| ValueByPropertyName<P[$$PropertyValue]>
							| TokenByPropertyName<P[$$PropertyValue], Theme, ThemeMap>
							| Native.Globals
							| undefined
						)
					: $$ScaleValue extends keyof P
						? (
							| TokenByScaleName<P[$$ScaleValue], Theme>
							| { scale: P[$$ScaleValue] }
							| undefined
						)
					: never
				)
				| P
			)
		: never
	}
	// known theme styles
	& {
		[K in keyof ThemeMap as K extends keyof CSSProperties ? never : K extends keyof Utils ? never : K]?: (
				| Native.Globals
				| Util.Index
				| undefined
			)
	}
	// unknown css declaration styles
	& {
		/** Unknown property. */
		[K: string]: (
			| number
			| string
			| CSS<Media, Theme, ThemeMap, Utils>
			| {}
			| undefined
		)
	}
)

/** Unique symbol used to reference a property value. */
export declare const $$PropertyValue: unique symbol

/** Unique symbol used to reference a property value. */
export type $$PropertyValue = typeof $$PropertyValue

/** Unique symbol used to reference a token value. */
export declare const $$ScaleValue: unique symbol

/** Unique symbol used to reference a token value. */
export type $$ScaleValue = typeof $$ScaleValue

export declare const $$ThemeValue: unique symbol

export type $$ThemeValue = typeof $$ThemeValue
