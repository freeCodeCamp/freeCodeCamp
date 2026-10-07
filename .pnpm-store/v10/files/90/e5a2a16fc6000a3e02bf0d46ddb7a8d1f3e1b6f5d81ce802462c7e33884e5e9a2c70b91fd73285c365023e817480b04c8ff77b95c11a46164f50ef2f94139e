import wasmJson from "../wasm/scrypt.wasm.json";
import { WASMInterface } from "./WASMInterface";
import { pbkdf2 } from "./pbkdf2";
import { createSHA256 } from "./sha256";
import { type IDataType, getDigestHex } from "./util";

export interface ScryptOptions {
	/**
	 * Password (or message) to be hashed
	 */
	password: IDataType;
	/**
	 * Salt (usually containing random bytes)
	 */
	salt: IDataType;
	/**
	 * CPU / memory cost - must be a power of 2 (e.g. 1024)
	 */
	costFactor: number;
	/**
	 * Block size (8 is commonly used)
	 */
	blockSize: number;
	/**
	 * Degree of parallelism
	 */
	parallelism: number;
	/**
	 * Output size in bytes
	 */
	hashLength: number;
	/**
	 * Output data type. Defaults to hexadecimal string
	 */
	outputType?: "hex" | "binary";
}

async function scryptInternal(
	options: ScryptOptions,
): Promise<string | Uint8Array> {
	const { costFactor, blockSize, parallelism, hashLength } = options;
	const SHA256Hasher = createSHA256();

	const blockData = await pbkdf2({
		password: options.password,
		salt: options.salt,
		iterations: 1,
		hashLength: 128 * blockSize * parallelism,
		hashFunction: SHA256Hasher,
		outputType: "binary",
	});

	const scryptInterface = await WASMInterface(wasmJson, 0);

	// last block is for storing the temporary vectors
	const VSize = 128 * blockSize * costFactor;
	const XYSize = 256 * blockSize;
	scryptInterface.setMemorySize(blockData.length + VSize + XYSize);
	scryptInterface.writeMemory(blockData, 0);

	// mix blocks
	scryptInterface.getExports().scrypt(blockSize, costFactor, parallelism);

	const expensiveSalt = scryptInterface
		.getMemory()
		.subarray(0, 128 * blockSize * parallelism);

	const outputData = await pbkdf2({
		password: options.password,
		salt: expensiveSalt,
		iterations: 1,
		hashLength,
		hashFunction: SHA256Hasher,
		outputType: "binary",
	});

	if (options.outputType === "hex") {
		const digestChars = new Uint8Array(hashLength * 2);
		return getDigestHex(digestChars, outputData, hashLength);
	}

	// return binary format
	return outputData;
}

const isPowerOfTwo = (v: number): boolean => v && !(v & (v - 1));

const validateOptions = (options: ScryptOptions) => {
	if (!options || typeof options !== "object") {
		throw new Error("Invalid options parameter. It requires an object.");
	}

	if (!Number.isInteger(options.blockSize) || options.blockSize < 1) {
		throw new Error("Block size should be a positive number");
	}

	if (
		!Number.isInteger(options.costFactor) ||
		options.costFactor < 2 ||
		!isPowerOfTwo(options.costFactor)
	) {
		throw new Error("Cost factor should be a power of 2, greater than 1");
	}

	if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
		throw new Error("Parallelism should be a positive number");
	}

	if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
		throw new Error("Hash length should be a positive number.");
	}

	if (options.outputType === undefined) {
		options.outputType = "hex";
	}

	if (!["hex", "binary"].includes(options.outputType)) {
		throw new Error(
			`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary']`,
		);
	}
};

interface IScryptOptionsBinary {
	outputType: "binary";
}

type ScryptReturnType<T> = T extends IScryptOptionsBinary ? Uint8Array : string;

/**
 * Calculates hash using the scrypt password-based key derivation function
 * @returns Computed hash as a hexadecimal string or as
 *          Uint8Array depending on the outputType option
 */
export async function scrypt<T extends ScryptOptions>(
	options: T,
): Promise<ScryptReturnType<T>> {
	validateOptions(options);

	return scryptInternal(options) as Promise<ScryptReturnType<T>>;
}
