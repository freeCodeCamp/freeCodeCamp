import wasmJson from "../wasm/crc64.wasm.json";
import {
	type IHasher,
	type IWASMInterface,
	WASMInterface,
} from "./WASMInterface";
import lockedCreate from "./lockedCreate";
import Mutex from "./mutex";
import type { IDataType } from "./util";

const mutex = new Mutex();
let wasmCache: IWASMInterface = null;
const polyBuffer = new Uint8Array(8);

function parsePoly(poly: string) {
	const errText = "Polynomial must be provided as a 16 char long hex string";

	if (typeof poly !== "string" || poly.length !== 16) {
		return { hi: 0, lo: 0, err: new Error(errText) };
	}

	const hi = Number(`0x${poly.slice(0, 8)}`);
	const lo = Number(`0x${poly.slice(8)}`);

	if (Number.isNaN(hi) || Number.isNaN(lo)) {
		return { hi, lo, err: new Error(errText) };
	}

	return { hi, lo, err: null };
}

function writePoly(arr: ArrayBuffer, lo: number, hi: number) {
	// write in little-endian format
	const buffer = new DataView(arr);
	buffer.setUint32(0, lo, true);
	buffer.setUint32(4, hi, true);
}

/**
 * Calculates CRC-64 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param polynomial Input polynomial (defaults to 'c96c5795d7870f42' - ECMA)
 * @returns Computed hash as a hexadecimal string
 */
export function crc64(
	data: IDataType,
	polynomial = "c96c5795d7870f42",
): Promise<string> {
	const { hi, lo, err } = parsePoly(polynomial);
	if (err !== null) {
		return Promise.reject(err);
	}

	if (wasmCache === null) {
		return lockedCreate(mutex, wasmJson, 8).then((wasm) => {
			wasmCache = wasm;
			writePoly(polyBuffer.buffer, lo, hi);
			wasmCache.writeMemory(polyBuffer);
			return wasmCache.calculate(data);
		});
	}

	try {
		writePoly(polyBuffer.buffer, lo, hi);
		wasmCache.writeMemory(polyBuffer);
		const hash = wasmCache.calculate(data);
		return Promise.resolve(hash);
	} catch (err) {
		return Promise.reject(err);
	}
}

/**
 * Creates a new CRC-64 hash instance
 * @param polynomial Input polynomial (defaults to 'c96c5795d7870f42' - ECMA)
 */
export function createCRC64(polynomial = "c96c5795d7870f42"): Promise<IHasher> {
	const { hi, lo, err } = parsePoly(polynomial);
	if (err !== null) {
		return Promise.reject(err);
	}

	return WASMInterface(wasmJson, 8).then((wasm) => {
		const instanceBuffer = new Uint8Array(8);
		writePoly(instanceBuffer.buffer, lo, hi);
		wasm.writeMemory(instanceBuffer);
		wasm.init();
		const obj: IHasher = {
			init: () => {
				wasm.writeMemory(instanceBuffer);
				wasm.init();
				return obj;
			},
			update: (data) => {
				wasm.update(data);
				return obj;
			},
			// biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
			digest: (outputType) => wasm.digest(outputType) as any,
			save: () => wasm.save(),
			load: (data) => {
				wasm.load(data);
				return obj;
			},
			blockSize: 8,
			digestSize: 8,
		};
		return obj;
	});
}
