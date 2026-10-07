import { type IDataType, type IEmbeddedWasm } from "./util";
export declare const MAX_HEAP: number;
type ThenArg<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer V> ? V : T;
export type IHasher = {
    /**
     * Initializes hash state to default value
     */
    init: () => IHasher;
    /**
     * Updates the hash content with the given data
     */
    update: (data: IDataType) => IHasher;
    /**
     * Calculates the hash of all of the data passed to be hashed with hash.update().
     * Defaults to hexadecimal string
     * @param outputType If outputType is "binary", it returns Uint8Array. Otherwise it
     *                   returns hexadecimal string
     */
    digest: {
        (outputType: "binary"): Uint8Array;
        (outputType?: "hex"): string;
    };
    /**
     * Save the current internal state of the hasher for later resumption with load().
     * Cannot be called before .init() or after .digest()
     *
     * Note that this state can include arbitrary information about the value being hashed (e.g.
     * could include N plaintext bytes from the value), so needs to be treated as being as
     * sensitive as the input value itself.
     */
    save: () => Uint8Array;
    /**
     * Resume a state that was created by save(). If this state was not created by a
     * compatible build of hash-wasm, an exception will be thrown.
     */
    load: (state: Uint8Array) => IHasher;
    /**
     * Block size in bytes
     */
    blockSize: number;
    /**
     * Digest size in bytes
     */
    digestSize: number;
};
export declare function WASMInterface(binary: IEmbeddedWasm, hashLength: number): Promise<{
    getMemory: () => Uint8Array;
    writeMemory: (data: Uint8Array, offset?: number) => void;
    getExports: () => any;
    setMemorySize: (totalSize: number) => void;
    init: (bits?: number) => void;
    update: (data: IDataType) => void;
    digest: (outputType: "hex" | "binary", padding?: number) => Uint8Array | string;
    save: () => Uint8Array;
    load: (state: Uint8Array) => void;
    calculate: (data: IDataType, initParam?: any, digestParam?: any) => string;
    hashLength: number;
}>;
export type IWASMInterface = ThenArg<ReturnType<typeof WASMInterface>>;
export {};
