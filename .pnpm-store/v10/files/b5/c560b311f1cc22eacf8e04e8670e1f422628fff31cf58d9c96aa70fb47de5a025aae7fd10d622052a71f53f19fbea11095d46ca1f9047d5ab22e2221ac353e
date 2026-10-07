import type * as CSSUtil from './css-util'
import type * as StyledComponent from './styled-component'
import type * as ThemeUtil from './theme'
import type * as Util from './util'

/** Remove an index signature from a type */
export type RemoveIndex<T> = {[k in keyof T as string extends k ? never : number extends k ? never : k]: T[k]}

/** Stitches interface. */
export default interface Stitches<
	Prefix extends string = '',
	Media extends {} = {},
	Theme extends {} = {},
	ThemeMap extends {} = {},
	Utils extends {} = {}
> {
	config: {
		prefix: Prefix
		media: Media
		theme: Theme
		themeMap: ThemeMap
		utils: Utils
	},
	prefix: Prefix
	/** The **prefix** property defined.
	 *
	 * [Read Documentation](https://stitches.dev/docs/variants)
	 */
	globalCss: {
		<Styles extends { [K: string]: any }>(
			...styles: (
				{
					/** The **@import** CSS at-rule imports style rules from other style sheets. */
					'@import'?: unknown

					/** The **@font-face** CSS at-rule specifies a custom font with which to display text. */
					'@font-face'?: unknown
				}
				& {
					[K in keyof Styles]: (
						K extends '@import'
							? string | string[]
						: K extends '@font-face'
							? CSSUtil.Native.AtRule.FontFace | Array<CSSUtil.Native.AtRule.FontFace>
						: K extends `@keyframes ${string}`
							? {
								[KeyFrame in string]: CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
							}
						: K extends `@property ${string}`
							? CSSUtil.Native.AtRule.Property
						: CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
					)
				}
			)[]
		): {
			(): string
		}
	},
	keyframes: {
		(style: {
			[offset: string]: CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
		}): {
			(): string
			name: string
		}
	},
	createTheme: {
		<
			Argument0 extends (
				| string
				| (
					{
						[Scale in keyof Theme]?: {
							[Token in keyof Theme[Scale]]?: boolean | number | string
						}
					} & {
						[scale in string]: {
							[token in number | string]: boolean | number | string
						}
					}
				)
			),
			Argument1 extends (
				| string
				| (
					{
						[Scale in keyof Theme]?: {
							[Token in keyof Theme[Scale]]?: boolean | number | string
						}
					} & {
						[scale in string]: {
							[token in number | string]: boolean | number | string
						}
					}
				)
			)
		>(
			nameOrScalesArg0: Argument0,
			nameOrScalesArg1?: Argument1
		):
			& string
			& {
				className: string
				selector: string
			}
			& (
				Argument0 extends string
					? ThemeTokens<Argument1, Prefix>
					: ThemeTokens<Argument0, Prefix>
			)
	}
	theme:
		string
		& {
			className: string
			selector: string
		}
		& {
			[Scale in keyof Theme]: {
				[Token in keyof Theme[Scale]]: ThemeUtil.Token<
					Extract<Token, string | number>,
					string,
					Extract<Scale, string | void>,
					Extract<Prefix, string | void>
				>
			}
		}
	reset: {
		(): void
	}
	getCssText: {
		(): string
	}
	css: {
		<
			Composers extends (
				| string
				| Util.Function
				| { [name: string]: unknown }
			)[],
			CSS = CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
		>(
			...composers: {
				[K in keyof Composers]: (
					// Strings and Functions can be skipped over
					string extends Composers[K]
						? Composers[K]
					: Composers[K] extends string | Util.Function
						? Composers[K]
					: RemoveIndex<CSS> & {
						/** The **variants** property lets you set a subclass of styles based on a key-value pair.
						 *
						 * [Read Documentation](https://stitches.dev/docs/variants)
						 */
						variants?: {
							[Name in string]: {
								[Pair in number | string]: CSS
							}
						}
						/** The **compoundVariants** property lets you to set a subclass of styles based on a combination of active variants.
						 *
						 * [Read Documentation](https://stitches.dev/docs/variants#compound-variants)
						 */
						compoundVariants?: (
							& (
								'variants' extends keyof Composers[K]
									? {
										[Name in keyof Composers[K]['variants']]?: Util.Widen<keyof Composers[K]['variants'][Name]> | Util.String
									}
								: Util.WideObject
							)
							& {
								css: CSS
							}
						)[]
						/** The **defaultVariants** property allows you to predefine the active key-value pairs of variants.
						 *
						 * [Read Documentation](https://stitches.dev/docs/variants#default-variants)
						 */
						defaultVariants?: (
							'variants' extends keyof Composers[K]
								? {
									[Name in keyof Composers[K]['variants']]?: Util.Widen<keyof Composers[K]['variants'][Name]> | Util.String
								}
							: Util.WideObject
						)
					} & CSS & {
						[K2 in keyof Composers[K]]: K2 extends 'compoundVariants' | 'defaultVariants' | 'variants'
							? unknown
						: K2 extends keyof CSS
							? CSS[K2]
						: unknown
					}
				)
			}
		): StyledComponent.CssComponent<
			StyledComponent.StyledComponentType<Composers>,
			StyledComponent.StyledComponentProps<Composers>,
			Media,
			CSS
		>
	}
}

type ThemeTokens<Values, Prefix> = {
	[Scale in keyof Values]: {
		[Token in keyof Values[Scale]]: ThemeUtil.Token<
			Extract<Token, number | string>,
			Values[Scale][Token] & (string | number),
			Extract<Scale, string | void>,
			Extract<Prefix, string | void>
		>
	}
}
