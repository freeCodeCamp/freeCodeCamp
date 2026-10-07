import type * as CSSUtil from './css-util'
import type Stitches from './stitches'

/** Configuration Interface */
declare namespace ConfigType {
	/** Prefix interface. */
	export type Prefix<T = ''> = T extends string ? T: string

	/** Media interface. */
	export type Media<T = {}> = {
		[name in keyof T]: T[name] extends string ? T[name] : string
	}

	/** Theme interface. */
	export type Theme<T = {}> = {
		borderStyles?: { [token in number | string]: boolean | number | string }
		borderWidths?: { [token in number | string]: boolean | number | string }
		colors?: { [token in number | string]: boolean | number | string }
		fonts?: { [token in number | string]: boolean | number | string }
		fontSizes?: { [token in number | string]: boolean | number | string }
		fontWeights?: { [token in number | string]: boolean | number | string }
		letterSpacings?: { [token in number | string]: boolean | number | string }
		lineHeights?: { [token in number | string]: boolean | number | string }
		radii?: { [token in number | string]: boolean | number | string }
		shadows?: { [token in number | string]: boolean | number | string }
		sizes?: { [token in number | string]: boolean | number | string }
		space?: { [token in number | string]: boolean | number | string }
		transitions?: { [token in number | string]: boolean | number | string }
		zIndices?: { [token in number | string]: boolean | number | string }
	} & {
		[Scale in keyof T]: {
			[Token in keyof T[Scale]]: T[Scale][Token] extends (boolean | number | string) ? T[Scale][Token] : (boolean | number | string)
		}
	}

	/** ThemeMap interface. */
	export type ThemeMap<T = {}> = {
		[Property in keyof T]: T[Property] extends string ? T[Property] : string
	}

	/** Utility interface. */
	export type Utils<T = {}> = {
		[Property in keyof T]: T[Property] extends (value: infer V) => {} ? T[Property] | ((value: V) => {
			[K in keyof CSSUtil.CSSProperties]?: CSSUtil.CSSProperties[K] | V
		}) : never
	}
}

/** Default ThemeMap. */
export interface DefaultThemeMap {
	gap: 'space'
	gridGap: 'space'
	columnGap: 'space'
	gridColumnGap: 'space'
	rowGap: 'space'
	gridRowGap: 'space'
	inset: 'space'
	insetBlock: 'space'
	insetBlockEnd: 'space'
	insetBlockStart: 'space'
	insetInline: 'space'
	insetInlineEnd: 'space'
	insetInlineStart: 'space'
	margin: 'space'
	marginTop: 'space'
	marginRight: 'space'
	marginBottom: 'space'
	marginLeft: 'space'
	marginBlock: 'space'
	marginBlockEnd: 'space'
	marginBlockStart: 'space'
	marginInline: 'space'
	marginInlineEnd: 'space'
	marginInlineStart: 'space'
	padding: 'space'
	paddingTop: 'space'
	paddingRight: 'space'
	paddingBottom: 'space'
	paddingLeft: 'space'
	paddingBlock: 'space'
	paddingBlockEnd: 'space'
	paddingBlockStart: 'space'
	paddingInline: 'space'
	paddingInlineEnd: 'space'
	paddingInlineStart: 'space'
	scrollMargin: 'space'
	scrollMarginTop: 'space'
	scrollMarginRight: 'space'
	scrollMarginBottom: 'space'
	scrollMarginLeft: 'space'
	scrollMarginBlock: 'space'
	scrollMarginBlockEnd: 'space'
	scrollMarginBlockStart: 'space'
	scrollMarginInline: 'space'
	scrollMarginInlineEnd: 'space'
	scrollMarginInlineStart: 'space'
	scrollPadding: 'space'
	scrollPaddingTop: 'space'
	scrollPaddingRight: 'space'
	scrollPaddingBottom: 'space'
	scrollPaddingLeft: 'space'
	scrollPaddingBlock: 'space'
	scrollPaddingBlockEnd: 'space'
	scrollPaddingBlockStart: 'space'
	scrollPaddingInline: 'space'
	scrollPaddingInlineEnd: 'space'
	scrollPaddingInlineStart: 'space'
	top: 'space'
	right: 'space'
	bottom: 'space'
	left: 'space'

	fontSize: 'fontSizes'

	background: 'colors'
	backgroundColor: 'colors'
	backgroundImage: 'colors'
	borderImage: 'colors'
	border: 'colors'
	borderBlock: 'colors'
	borderBlockEnd: 'colors'
	borderBlockStart: 'colors'
	borderBottom: 'colors'
	borderBottomColor: 'colors'
	borderColor: 'colors'
	borderInline: 'colors'
	borderInlineEnd: 'colors'
	borderInlineStart: 'colors'
	borderLeft: 'colors'
	borderLeftColor: 'colors'
	borderRight: 'colors'
	borderRightColor: 'colors'
	borderTop: 'colors'
	borderTopColor: 'colors'
	caretColor: 'colors'
	color: 'colors'
	columnRuleColor: 'colors'
	outline: 'colors'
	outlineColor: 'colors'
	fill: 'colors'
	stroke: 'colors'
	textDecorationColor: 'colors'

	fontFamily: 'fonts'

	fontWeight: 'fontWeights'
	lineHeight: 'lineHeights'

	letterSpacing: 'letterSpacings'

	blockSize: 'sizes'
	minBlockSize: 'sizes'
	maxBlockSize: 'sizes'
	inlineSize: 'sizes'
	minInlineSize: 'sizes'
	maxInlineSize: 'sizes'
	width: 'sizes'
	minWidth: 'sizes'
	maxWidth: 'sizes'
	height: 'sizes'
	minHeight: 'sizes'
	maxHeight: 'sizes'
	flexBasis: 'sizes'
	gridTemplateColumns: 'sizes'
	gridTemplateRows: 'sizes'

	borderWidth: 'borderWidths'
	borderTopWidth: 'borderWidths'
	borderLeftWidth: 'borderWidths'
	borderRightWidth: 'borderWidths'
	borderBottomWidth: 'borderWidths'

	borderStyle: 'borderStyles'
	borderTopStyle: 'borderStyles'
	borderLeftStyle: 'borderStyles'
	borderRightStyle: 'borderStyles'
	borderBottomStyle: 'borderStyles'

	borderRadius: 'radii'
	borderTopLeftRadius: 'radii'
	borderTopRightRadius: 'radii'
	borderBottomRightRadius: 'radii'
	borderBottomLeftRadius: 'radii'

	boxShadow: 'shadows'
	textShadow: 'shadows'

	transition: 'transitions'

	zIndex: 'zIndices'
}

/** Returns a function used to create a new Stitches interface. */
export type CreateStitches = {
	<
		Prefix extends string = '',
		Media extends {} = {},
		Theme extends {} = {},
		ThemeMap extends {} = DefaultThemeMap,
		Utils extends {} = {}
	>(
		config?: {
			prefix?: ConfigType.Prefix<Prefix>
			media?: ConfigType.Media<Media>
			theme?: ConfigType.Theme<Theme>
			themeMap?: ConfigType.ThemeMap<ThemeMap>
			utils?: ConfigType.Utils<Utils>
		}
	): Stitches<Prefix, Media, Theme, ThemeMap, Utils>
}
