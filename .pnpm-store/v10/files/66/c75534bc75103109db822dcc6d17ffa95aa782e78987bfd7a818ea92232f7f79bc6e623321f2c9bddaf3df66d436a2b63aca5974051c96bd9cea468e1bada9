import wasmJson from "../wasm/xxhash32.wasm.json";
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

function validateSeed(seed: number) {
	if (!Number.isInteger(seed) || seed < 0 || seed > 0xffffffff) {
		return new Error("Seed must be a valid 32-bit long unsigned integer.");
	}
	return null;
}
/**
 * Calculates xxHash32 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param seed Number used to initialize the internal state of the algorithm (defaults to 0)
 * @returns Computed hash as a hexadecimal string
 */
export function xxhash32(data: IDataType, seed = 0): Promise<string> {
	if (validateSeed(seed)) {
		return Promise.reject(validateSeed(seed));
	}

	if (wasmCache === null) {
		return lockedCreate(mutex, wasmJson, 4).then((wasm) => {
			wasmCache = wasm;
			return wasmCache.calculate(data, seed);
		});
	}

	try {
		const hash = wasmCache.calculate(data, seed);
		return Promise.resolve(hash);
	} catch (err) {
		return Promise.reject(err);
	}
}

/**
 * Creates a new xxHash32 hash instance
 * @param data Input data (string, Buffer or TypedArray)
 * @param seed Number used to initialize the internal state of the algorithm (defaults to 0)
 */
export function createXXHash32(seed = 0): Promise<IHasher> {
	if (validateSeed(seed)) {
		return Promise.reject(validateSeed(seed));
	}

	return WASMInterface(wasmJson, 4).then((wasm) => {
		wasm.init(seed);
		const obj: IHasher = {
			init: () => {
				wasm.init(seed);
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
			blockSize: 16,
			digestSize: 4,
		};
		return obj;
	});
}
