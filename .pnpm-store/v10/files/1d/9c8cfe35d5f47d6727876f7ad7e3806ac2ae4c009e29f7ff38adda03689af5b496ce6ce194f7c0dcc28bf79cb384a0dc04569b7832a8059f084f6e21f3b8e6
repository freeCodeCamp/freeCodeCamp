export interface ScaleValue {
	token: number | string
	value: number | string
	scale: string
	prefix: string
}

export interface Token<
	/** Token name. */
	NameType extends number | string = string,

	/** Token value. */
	ValueType extends number | string = string,

	/** Token scale. */
	ScaleType extends string | void = void,

	/** Token prefix. */
	PrefixType extends string | void = void,
> extends ScaleValue {
	new (name: NameType, value: ValueType, scale?: ScaleType, prefix?: PrefixType): this

	/** Name of the token. */
	token: NameType

	/** Value of the token. */
	value: ValueType

	/** Category of interface the token applies to. */
	scale: ScaleType extends string ? ScaleType : ''

	/** Prefix added before the serialized custom property. */
	prefix: PrefixType extends string ? PrefixType : ''

	/** Serialized custom property representing the token. */
	variable: `--${this['prefix'] extends '' ? '' : `${this['prefix']}-`}${this['scale'] extends '' ? '' : `${this['scale']}-`}${this['token']}`

	/** Serialized CSS var() representing the token. */
	computedValue: `var(${this['variable']})`

	/** Returns a serialized CSS var() representing the token. */
	toString(): this['computedValue']
}
