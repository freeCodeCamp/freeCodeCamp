import type * as Util from './util'

/** Returns a new CSS Component. */
export interface CssComponent<
	Type = 'span',
	Props = {},
	Media = {},
	CSS = {}
> {
	(
		props?:
			& TransformProps<Props, Media>
			& {
				css?: CSS
			}
			& {
				[name in number | string]: any
			}
	): string & {
		className: string
		selector: string
		props: {}
	}

	className: string
	selector: string

	[$$StyledComponentType]: Type
	[$$StyledComponentProps]: Props
	[$$StyledComponentMedia]: Media
}

export type TransformProps<Props, Media> = {
	[K in keyof Props]: (
		| Props[K]
		| (
			& {
				[KMedia in Util.Prefixed<'@', 'initial' | keyof Media>]?: Props[K]
			}
			& {
				[KMedia in string]: Props[K]
			}
		)
	)
}

/** Unique symbol used to reference the type of a Styled Component. */
export declare const $$StyledComponentType: unique symbol

/** Unique symbol used to reference the type of a Styled Component. */
export type $$StyledComponentType = typeof $$StyledComponentType

/** Unique symbol used to reference the props of a Styled Component. */
export declare const $$StyledComponentProps: unique symbol

/** Unique symbol used to reference the props of a Styled Component. */
export type $$StyledComponentProps = typeof $$StyledComponentProps

/** Unique symbol used to reference the media passed into a Styled Component. */
export declare const $$StyledComponentMedia: unique symbol

/** Unique symbol used to reference the media passed into a Styled Component. */
export type $$StyledComponentMedia = typeof $$StyledComponentMedia

/** Returns the first Styled Component type from the given array of compositions. */
export type StyledComponentType<T extends any[]> = (
	T[0] extends never
		? 'span'
	: T[0] extends string
		? T[0]
	: T[0] extends (props: any) => any
		? T[0]
	: T[0] extends { [$$StyledComponentType]: unknown }
		? T[0][$$StyledComponentType]
	: T extends [lead: any, ...tail: infer V]
		? StyledComponentType<V>
	: never
)

/** Returns the cumulative variants from the given array of compositions. */
export type StyledComponentProps<T extends any[]> = (
	& (
		$$StyledComponentProps extends keyof T[0]
			? T[0][$$StyledComponentProps]
		: T[0] extends { variants: { [name: string]: unknown } }
			? {
				[K in keyof T[0]['variants']]?: Util.Widen<keyof T[0]['variants'][K]>
			}
		: {}
	)
	& (
		T extends [lead: any, ...tail: infer V]
			? StyledComponentProps<V>
		: {}
	)
)
