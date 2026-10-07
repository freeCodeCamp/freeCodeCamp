import wasmJson from "../wasm/whirlpool.wasm.json";
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
 * Calculates Whirlpool hash
 * @param data Input data (string, Buffer or TypedArray)
 * @returns Computed hash as a hexadecimal string
 */
export function whirlpool(data: IDataType): Promise<string> {
	if (wasmCache === null) {
		return lockedCreate(mutex, wasmJson, 64).then((wasm) => {
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
 * Creates a new Whirlpool hash instance
 */
export function createWhirlpool(): Promise<IHasher> {
	return WASMInterface(wasmJson, 64).then((wasm) => {
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
			digestSize: 64,
		};
		return obj;
	});
}
