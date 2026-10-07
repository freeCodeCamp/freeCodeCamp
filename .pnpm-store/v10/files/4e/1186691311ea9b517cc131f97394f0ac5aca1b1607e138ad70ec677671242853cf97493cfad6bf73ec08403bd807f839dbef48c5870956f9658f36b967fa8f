import wasmJson from "../wasm/crc32.wasm.json";
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

function validatePoly(poly: number) {
	if (!Number.isInteger(poly) || poly < 0 || poly > 0xffffffff) {
		return new Error("Polynomial must be a valid 32-bit long unsigned integer");
	}
	return null;
}

/**
 * Calculates CRC-32 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param polynomial Input polynomial (defaults to 0xedb88320, for CRC32C use 0x82f63b78)
 * @returns Computed hash as a hexadecimal string
 */
export function crc32(
	data: IDataType,
	polynomial = 0xedb88320,
): Promise<string> {
	if (validatePoly(polynomial)) {
		return Promise.reject(validatePoly(polynomial));
	}

	if (wasmCache === null) {
		return lockedCreate(mutex, wasmJson, 4).then((wasm) => {
			wasmCache = wasm;
			return wasmCache.calculate(data, polynomial);
		});
	}

	try {
		const hash = wasmCache.calculate(data, polynomial);
		return Promise.resolve(hash);
	} catch (err) {
		return Promise.reject(err);
	}
}

/**
 * Creates a new CRC-32 hash instance
 * @param polynomial Input polynomial (defaults to 0xedb88320, for CRC32C use 0x82f63b78)
 */
export function createCRC32(polynomial = 0xedb88320): Promise<IHasher> {
	if (validatePoly(polynomial)) {
		return Promise.reject(validatePoly(polynomial));
	}

	return WASMInterface(wasmJson, 4).then((wasm) => {
		wasm.init(polynomial);
		const obj: IHasher = {
			init: () => {
				wasm.init(polynomial);
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
			blockSize: 4,
			digestSize: 4,
		};
		return obj;
	});
}
