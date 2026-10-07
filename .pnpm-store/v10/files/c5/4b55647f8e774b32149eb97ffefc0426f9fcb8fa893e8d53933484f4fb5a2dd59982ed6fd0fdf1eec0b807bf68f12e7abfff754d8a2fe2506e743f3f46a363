import wasmJson from "../wasm/sha3.wasm.json";
import {
	type IHasher,
	type IWASMInterface,
	WASMInterface,
} from "./WASMInterface";
import lockedCreate from "./lockedCreate";
import Mutex from "./mutex";
import type { IDataType } from "./util";

type IValidBits = 224 | 256 | 384 | 512;
const mutex = new Mutex();
let wasmCache: IWASMInterface = null;

function validateBits(bits: IValidBits) {
	if (![224, 256, 384, 512].includes(bits)) {
		return new Error("Invalid variant! Valid values: 224, 256, 384, 512");
	}
	return null;
}

/**
 * Calculates SHA-3 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param bits Number of output bits. Valid values: 224, 256, 384, 512
 * @returns Computed hash as a hexadecimal string
 */
export function sha3(data: IDataType, bits: IValidBits = 512): Promise<string> {
	if (validateBits(bits)) {
		return Promise.reject(validateBits(bits));
	}

	const hashLength = bits / 8;

	if (wasmCache === null || wasmCache.hashLength !== hashLength) {
		return lockedCreate(mutex, wasmJson, hashLength).then((wasm) => {
			wasmCache = wasm;
			return wasmCache.calculate(data, bits, 0x06);
		});
	}

	try {
		const hash = wasmCache.calculate(data, bits, 0x06);
		return Promise.resolve(hash);
	} catch (err) {
		return Promise.reject(err);
	}
}

/**
 * Creates a new SHA-3 hash instance
 * @param bits Number of output bits. Valid values: 224, 256, 384, 512
 */
export function createSHA3(bits: IValidBits = 512): Promise<IHasher> {
	if (validateBits(bits)) {
		return Promise.reject(validateBits(bits));
	}

	const outputSize = bits / 8;

	return WASMInterface(wasmJson, outputSize).then((wasm) => {
		wasm.init(bits);
		const obj: IHasher = {
			init: () => {
				wasm.init(bits);
				return obj;
			},
			update: (data) => {
				wasm.update(data);
				return obj;
			},
			// biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
			digest: (outputType) => wasm.digest(outputType, 0x06) as any,
			save: () => wasm.save(),
			load: (data) => {
				wasm.load(data);
				return obj;
			},
			blockSize: 200 - 2 * outputSize,
			digestSize: outputSize,
		};
		return obj;
	});
}
