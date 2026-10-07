export enum FLOAT32_OPTIONS {
	NEVER = 0,
	ALWAYS = 1,
	DECIMAL_ROUND = 3,
	DECIMAL_FIT = 4
}

export interface Options {
	useFloat32?: FLOAT32_OPTIONS
	useRecords?: boolean | ((value:any)=> boolean)
	structures?: {}[]
	moreTypes?: boolean
	sequential?: boolean
	structuredClone?: boolean
	mapsAsObjects?: boolean
	variableMapSize?: boolean
	coercibleKeyAsNumber?: boolean
	copyBuffers?: boolean
	bundleStrings?: boolean
	useTimestamp32?: boolean
	largeBigIntToFloat?: boolean
	largeBigIntToString?: boolean
	useBigIntExtension?: boolean
	encodeUndefinedAsNil?: boolean
	maxSharedStructures?: number
	maxOwnStructures?: number
	mapAsEmptyObject?: boolean
	setAsEmptyObject?: boolean
	allowArraysInMapKeys?: boolean
	writeFunction?: () => any
	/** @deprecated use int64AsType: 'number' */
	int64AsNumber?: boolean
	int64AsType?: 'bigint' | 'number' | 'string'
	shouldShareStructure?: (keys: string[]) => boolean
	getStructures?(): {}[]
	saveStructures?(structures: {}[]): boolean | void
	onInvalidDate?: () => any
}
interface Extension {
	Class?: Function
	type?: number
	pack?(value: any): Buffer | Uint8Array
	unpack?(messagePack: Buffer | Uint8Array): any
	read?(datum: any): any
	write?(instance: any): any
}
export type UnpackOptions = { start?: number; end?: number; lazy?: boolean; } | number;
export class Unpackr {
	constructor(options?: Options)
	unpack(messagePack: Buffer | Uint8Array, options?: UnpackOptions): any
	decode(messagePack: Buffer | Uint8Array, options?: UnpackOptions): any
	unpackMultiple(messagePack: Buffer | Uint8Array): any[]
	unpackMultiple(messagePack: Buffer | Uint8Array, forEach: (value: any, start?: number, end?: number) => any): void
}
export class Decoder extends Unpackr {}
export function unpack(messagePack: Buffer | Uint8Array, options?: UnpackOptions): any
export function unpackMultiple(messagePack: Buffer | Uint8Array): any[]
export function unpackMultiple(messagePack: Buffer | Uint8Array, forEach: (value: any, start?: number, end?: number) => any): void
export function decode(messagePack: Buffer | Uint8Array, options?: UnpackOptions): any
export function addExtension(extension: Extension): void
export function clearSource(): void
export function roundFloat32(float32Number: number): number
export const C1: {}
export let isNativeAccelerationEnabled: boolean

export class Packr extends Unpackr {
	offset: number;
	position: number;
	pack(value: any, encodeOptions?: number): Buffer
	encode(value: any, encodeOptions?: number): Buffer
	useBuffer(buffer: Buffer | Uint8Array): void;
	clearSharedData(): void;
}
export class Encoder extends Packr {}
export function pack(value: any, encodeOptions?: number): Buffer
export function encode(value: any, encodeOptions?: number): Buffer

export const REUSE_BUFFER_MODE: number;
export const RESET_BUFFER_MODE: number;
export const RESERVE_START_SPACE: number;

import { Transform, Readable } from 'stream'

export as namespace msgpackr;
export class UnpackrStream extends Transform {
	constructor(options?: Options | { highWaterMark: number, emitClose: boolean, allowHalfOpen: boolean })
}
export class PackrStream extends Transform {
	constructor(options?: Options | { highWaterMark: number, emitClose: boolean, allowHalfOpen: boolean })
}
export { PackrStream as EncoderStream, UnpackrStream as DecoderStream };