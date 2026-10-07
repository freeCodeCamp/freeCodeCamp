import wasmJson from "../wasm/bcrypt.wasm.json";
import { WASMInterface } from "./WASMInterface";
import {
	type IDataType,
	getDigestHex,
	getUInt8Buffer,
	intArrayToString,
} from "./util";

export interface BcryptOptions {
	/**
	 * Password to be hashed
	 */
	password: IDataType;
	/**
	 * Salt (16 bytes long - usually containing random bytes)
	 */
	salt: IDataType;
	/**
	 * Number of iterations to perform (4 - 31)
	 */
	costFactor: number;
	/**
	 * Desired output type. Defaults to 'encoded'
	 */
	outputType?: "hex" | "binary" | "encoded";
}

async function bcryptInternal(
	options: BcryptOptions,
): Promise<string | Uint8Array> {
	const { costFactor, password, salt } = options;

	const bcryptInterface = await WASMInterface(wasmJson, 0);
	bcryptInterface.writeMemory(getUInt8Buffer(salt), 0);
	const passwordBuffer = getUInt8Buffer(password);
	bcryptInterface.writeMemory(passwordBuffer, 16);
	const shouldEncode = options.outputType === "encoded" ? 1 : 0;
	bcryptInterface
		.getExports()
		.bcrypt(passwordBuffer.length, costFactor, shouldEncode);
	const memory = bcryptInterface.getMemory();

	if (options.outputType === "encoded") {
		return intArrayToString(memory, 60);
	}

	if (options.outputType === "hex") {
		const digestChars = new Uint8Array(24 * 2);
		return getDigestHex(digestChars, memory, 24);
	}

	// return binary format
	// the data is copied to allow GC of the original memory buffer
	return memory.slice(0, 24);
}

const validateOptions = (options: BcryptOptions) => {
	if (!options || typeof options !== "object") {
		throw new Error("Invalid options parameter. It requires an object.");
	}

	if (
		!Number.isInteger(options.costFactor) ||
		options.costFactor < 4 ||
		options.costFactor > 31
	) {
		throw new Error("Cost factor should be a number between 4 and 31");
	}

	options.password = getUInt8Buffer(options.password);
	if (options.password.length < 1) {
		throw new Error("Password should be at least 1 byte long");
	}

	if (options.password.length > 72) {
		throw new Error("Password should be at most 72 bytes long");
	}

	options.salt = getUInt8Buffer(options.salt);
	if (options.salt.length !== 16) {
		throw new Error("Salt should be 16 bytes long");
	}

	if (options.outputType === undefined) {
		options.outputType = "encoded";
	}

	if (!["hex", "binary", "encoded"].includes(options.outputType)) {
		throw new Error(
			`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary', 'encoded']`,
		);
	}
};

interface IBcryptOptionsBinary {
	outputType: "binary";
}

type BcryptReturnType<T> = T extends IBcryptOptionsBinary ? Uint8Array : string;

/**
 * Calculates hash using the bcrypt password-hashing function
 * @returns Computed hash
 */
export async function bcrypt<T extends BcryptOptions>(
	options: T,
): Promise<BcryptReturnType<T>> {
	validateOptions(options);

	return bcryptInternal(options) as Promise<BcryptReturnType<T>>;
}

export interface BcryptVerifyOptions {
	/**
	 * Password to be verified
	 */
	password: IDataType;
	/**
	 * A previously generated bcrypt hash in the 'encoded' output format
	 */
	hash: string;
}

const validateHashCharacters = (hash: string): boolean => {
	if (!/^\$2[axyb]\$[0-3][0-9]\$[./A-Za-z0-9]{53}$/.test(hash)) {
		return false;
	}

	if (hash[4] === "0" && Number(hash[5]) < 4) {
		return false;
	}

	if (hash[4] === "3" && Number(hash[5]) > 1) {
		return false;
	}

	return true;
};

const validateVerifyOptions = (options: BcryptVerifyOptions) => {
	if (!options || typeof options !== "object") {
		throw new Error("Invalid options parameter. It requires an object.");
	}

	if (options.hash === undefined || typeof options.hash !== "string") {
		throw new Error("Hash should be specified");
	}

	if (options.hash.length !== 60) {
		throw new Error("Hash should be 60 bytes long");
	}

	if (!validateHashCharacters(options.hash)) {
		throw new Error("Invalid hash");
	}

	options.password = getUInt8Buffer(options.password);
	if (options.password.length < 1) {
		throw new Error("Password should be at least 1 byte long");
	}

	if (options.password.length > 72) {
		throw new Error("Password should be at most 72 bytes long");
	}
};

/**
 * Verifies password using bcrypt password-hashing function
 * @returns True if the encoded hash matches the password
 */
export async function bcryptVerify(
	options: BcryptVerifyOptions,
): Promise<boolean> {
	validateVerifyOptions(options);

	const { hash, password } = options;

	const bcryptInterface = await WASMInterface(wasmJson, 0);
	bcryptInterface.writeMemory(getUInt8Buffer(hash), 0);

	const passwordBuffer = getUInt8Buffer(password);
	bcryptInterface.writeMemory(passwordBuffer, 60);

	return !!bcryptInterface.getExports().bcrypt_verify(passwordBuffer.length);
}
