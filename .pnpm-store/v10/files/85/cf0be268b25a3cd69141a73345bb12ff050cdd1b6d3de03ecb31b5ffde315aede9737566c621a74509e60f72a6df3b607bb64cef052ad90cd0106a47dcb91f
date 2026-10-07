import wasmJson from "../wasm/sha256.wasm.json";
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

/**
 * Calculates SHA-2 (SHA-224) hash
 * @param data Input data (string, Buffer or TypedArray)
 * @returns Computed hash as a hexadecimal string
 */
export function sha224(data: IDataType): Promise<string> {
	if (wasmCache === null) {
		return lockedCreate(mutex, wasmJson, 28).then((wasm) => {
			wasmCache = wasm;
			return wasmCache.calculate(data, 224);
		});
	}

	try {
		const hash = wasmCache.calculate(data, 224);
		return Promise.resolve(hash);
	} catch (err) {
		return Promise.reject(err);
	}
}

/**
 * Creates a new SHA-2 (SHA-224) hash instance
 */
export function createSHA224(): Promise<IHasher> {
	return WASMInterface(wasmJson, 28).then((wasm) => {
		wasm.init(224);
		const obj: IHasher = {
			init: () => {
				wasm.init(224);
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
			blockSize: 64,
			digestSize: 28,
		};
		return obj;
	});
}
