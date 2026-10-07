import wasmJson from "../wasm/md4.wasm.json";
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
 * Calculates MD4 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @returns Computed hash as a hexadecimal string
 */
export function md4(data: IDataType): Promise<string> {
	if (wasmCache === null) {
		return lockedCreate(mutex, wasmJson, 16).then((wasm) => {
			wasmCache = wasm;
			return wasmCache.calculate(data);
		});
	}

	try {
		const hash = wasmCache.calculate(data);
		return Promise.resolve(hash);
	} catch (err) {
		return Promise.reject(err);
	}
}

/**
 * Creates a new MD4 hash instance
 */
export function createMD4(): Promise<IHasher> {
	return WASMInterface(wasmJson, 16).then((wasm) => {
		wasm.init();
		const obj: IHasher = {
			init: () => {
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
			blockSize: 64,
			digestSize: 16,
		};
		return obj;
	});
}
