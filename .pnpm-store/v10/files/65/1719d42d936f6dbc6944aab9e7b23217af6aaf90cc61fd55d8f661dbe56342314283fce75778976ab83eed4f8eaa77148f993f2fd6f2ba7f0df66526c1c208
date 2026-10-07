import { type IWASMInterface, WASMInterface } from "./WASMInterface";
import type Mutex from "./mutex";
import type { IEmbeddedWasm } from "./util";

export default async function lockedCreate(
	mutex: Mutex,
	binary: IEmbeddedWasm,
	hashLength: number,
): Promise<IWASMInterface> {
	const unlock = await mutex.lock();
	const wasm = await WASMInterface(binary, hashLength);
	unlock();
	return wasm;
}
