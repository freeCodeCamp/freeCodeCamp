import wasmJson from "../wasm/argon2.wasm.json";
import { type IHasher, WASMInterface } from "./WASMInterface";
import { createBLAKE2b } from "./blake2b";
import {
	type IDataType,
	decodeBase64,
	encodeBase64,
	getDecodeBase64Length,
	getDigestHex,
	getUInt8Buffer,
	writeHexToUInt8,
} from "./util";

export interface IArgon2Options {
	/**
	 * Password (or message) to be hashed
	 */
	password: IDataType;
	/**
	 * Salt (usually containing random bytes)
	 */
	salt: IDataType;
	/**
	 * Secret for keyed hashing
	 */
	secret?: IDataType;
	/**
	 * Number of iterations to perform
	 */
	iterations: number;
	/**
	 * Degree of parallelism
	 */
	parallelism: number;
	/**
	 * Amount of memory to be used in kibibytes (1024 bytes)
	 */
	memorySize: number;
	/**
	 * Output size in bytes
	 */
	hashLength: number;
	/**
	 * Desired output type. Defaults to 'hex'
	 */
	outputType?: "hex" | "binary" | "encoded";
}

interface IArgon2OptionsExtended extends IArgon2Options {
	hashType: "i" | "d" | "id";
}

function encodeResult(
	salt: Uint8Array,
	options: IArgon2OptionsExtended,
	res: Uint8Array,
): string {
	const parameters = [
		`m=${options.memorySize}`,
		`t=${options.iterations}`,
		`p=${options.parallelism}`,
	].join(",");

	return `$argon2${options.hashType}$v=19$${parameters}$${encodeBase64(
		salt,
		false,
	)}$${encodeBase64(res, false)}`;
}

const uint32View = new DataView(new ArrayBuffer(4));
function int32LE(x: number): Uint8Array {
	uint32View.setInt32(0, x, true);
	return new Uint8Array(uint32View.buffer);
}

async function hashFunc(
	blake512: IHasher,
	buf: Uint8Array,
	len: number,
): Promise<Uint8Array> {
	if (len <= 64) {
		const blake = await createBLAKE2b(len * 8);
		blake.update(int32LE(len));
		blake.update(buf);
		return blake.digest("binary");
	}

	const r = Math.ceil(len / 32) - 2;
	const ret = new Uint8Array(len);

	blake512.init();
	blake512.update(int32LE(len));
	blake512.update(buf);
	let vp = blake512.digest("binary");
	ret.set(vp.subarray(0, 32), 0);

	for (let i = 1; i < r; i++) {
		blake512.init();
		blake512.update(vp);
		vp = blake512.digest("binary");
		ret.set(vp.subarray(0, 32), i * 32);
	}

	const partialBytesNeeded = len - 32 * r;

	let blakeSmall: IHasher;
	if (partialBytesNeeded === 64) {
		blakeSmall = blake512;
		blakeSmall.init();
	} else {
		blakeSmall = await createBLAKE2b(partialBytesNeeded * 8);
	}

	blakeSmall.update(vp);
	vp = blakeSmall.digest("binary");
	ret.set(vp.subarray(0, partialBytesNeeded), r * 32);

	return ret;
}

function getHashType(type: IArgon2OptionsExtended["hashType"]): number {
	switch (type) {
		case "d":
			return 0;
		case "i":
			return 1;
		default:
			return 2;
	}
}

async function argon2Internal(
	options: IArgon2OptionsExtended,
): Promise<string | Uint8Array> {
	const { parallelism, iterations, hashLength } = options;
	const password = getUInt8Buffer(options.password);
	const salt = getUInt8Buffer(options.salt);
	const version = 0x13;
	const hashType = getHashType(options.hashType);
	const { memorySize } = options; // in KB
	const secret = getUInt8Buffer(options.secret ?? "");

	const [argon2Interface, blake512] = await Promise.all([
		WASMInterface(wasmJson, 1024),
		createBLAKE2b(512),
	]);

	// last block is for storing the init vector
	argon2Interface.setMemorySize(memorySize * 1024 + 1024);

	const initVector = new Uint8Array(24);
	const initVectorView = new DataView(initVector.buffer);
	initVectorView.setInt32(0, parallelism, true);
	initVectorView.setInt32(4, hashLength, true);
	initVectorView.setInt32(8, memorySize, true);
	initVectorView.setInt32(12, iterations, true);
	initVectorView.setInt32(16, version, true);
	initVectorView.setInt32(20, hashType, true);
	argon2Interface.writeMemory(initVector, memorySize * 1024);

	blake512.init();
	blake512.update(initVector);
	blake512.update(int32LE(password.length));
	blake512.update(password);
	blake512.update(int32LE(salt.length));
	blake512.update(salt);
	blake512.update(int32LE(secret.length));
	blake512.update(secret);
	blake512.update(int32LE(0)); // associatedData length + associatedData

	const segments = Math.floor(memorySize / (parallelism * 4)); // length of each lane
	const lanes = segments * 4;

	const param = new Uint8Array(72);
	const H0 = blake512.digest("binary");
	param.set(H0);

	for (let lane = 0; lane < parallelism; lane++) {
		param.set(int32LE(0), 64);
		param.set(int32LE(lane), 68);

		let position = lane * lanes;
		let chunk = await hashFunc(blake512, param, 1024);
		argon2Interface.writeMemory(chunk, position * 1024);

		position += 1;
		param.set(int32LE(1), 64);
		chunk = await hashFunc(blake512, param, 1024);
		argon2Interface.writeMemory(chunk, position * 1024);
	}

	const C = new Uint8Array(1024);
	writeHexToUInt8(C, argon2Interface.calculate(new Uint8Array([]), memorySize));

	const res = await hashFunc(blake512, C, hashLength);

	if (options.outputType === "hex") {
		const digestChars = new Uint8Array(hashLength * 2);
		return getDigestHex(digestChars, res, hashLength);
	}

	if (options.outputType === "encoded") {
		return encodeResult(salt, options, res);
	}

	// return binary format
	return res;
}

const validateOptions = (options: IArgon2Options) => {
	if (!options || typeof options !== "object") {
		throw new Error("Invalid options parameter. It requires an object.");
	}

	if (!options.password) {
		throw new Error("Password must be specified");
	}

	options.password = getUInt8Buffer(options.password);
	if (options.password.length < 1) {
		throw new Error("Password must be specified");
	}

	if (!options.salt) {
		throw new Error("Salt must be specified");
	}

	options.salt = getUInt8Buffer(options.salt);
	if (options.salt.length < 8) {
		throw new Error("Salt should be at least 8 bytes long");
	}

	options.secret = getUInt8Buffer(options.secret ?? "");

	if (!Number.isInteger(options.iterations) || options.iterations < 1) {
		throw new Error("Iterations should be a positive number");
	}

	if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
		throw new Error("Parallelism should be a positive number");
	}

	if (!Number.isInteger(options.hashLength) || options.hashLength < 4) {
		throw new Error("Hash length should be at least 4 bytes.");
	}

	if (!Number.isInteger(options.memorySize)) {
		throw new Error("Memory size should be specified.");
	}

	if (options.memorySize < 8 * options.parallelism) {
		throw new Error("Memory size should be at least 8 * parallelism.");
	}

	if (options.outputType === undefined) {
		options.outputType = "hex";
	}

	if (!["hex", "binary", "encoded"].includes(options.outputType)) {
		throw new Error(
			`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary', 'encoded']`,
		);
	}
};

interface IArgon2OptionsBinary {
	outputType: "binary";
}

type Argon2ReturnType<T> = T extends IArgon2OptionsBinary ? Uint8Array : string;

/**
 * Calculates hash using the argon2i password-hashing function
 * @returns Computed hash
 */
export async function argon2i<T extends IArgon2Options>(
	options: T,
): Promise<Argon2ReturnType<T>> {
	validateOptions(options);

	return argon2Internal({
		...options,
		hashType: "i",
	}) as Promise<Argon2ReturnType<T>>;
}

/**
 * Calculates hash using the argon2id password-hashing function
 * @returns Computed hash
 */
export async function argon2id<T extends IArgon2Options>(
	options: T,
): Promise<Argon2ReturnType<T>> {
	validateOptions(options);

	return argon2Internal({
		...options,
		hashType: "id",
	}) as Promise<Argon2ReturnType<T>>;
}

/**
 * Calculates hash using the argon2d password-hashing function
 * @returns Computed hash
 */
export async function argon2d<T extends IArgon2Options>(
	options: T,
): Promise<Argon2ReturnType<T>> {
	validateOptions(options);

	return argon2Internal({
		...options,
		hashType: "d",
	}) as Promise<Argon2ReturnType<T>>;
}

export interface Argon2VerifyOptions {
	/**
	 * Password to be verified
	 */
	password: IDataType;
	/**
	 * Secret used on hash creation
	 */
	secret?: IDataType;
	/**
	 * A previously generated argon2 hash in the 'encoded' output format
	 */
	hash: string;
}

const getHashParameters = (
	password: IDataType,
	encoded: string,
	secret?: IDataType,
): IArgon2OptionsExtended => {
	const regex =
		/^\$argon2(id|i|d)\$v=([0-9]+)\$((?:[mtp]=[0-9]+,){2}[mtp]=[0-9]+)\$([A-Za-z0-9+/]+)\$([A-Za-z0-9+/]+)$/;
	const match = encoded.match(regex);
	if (!match) {
		throw new Error("Invalid hash");
	}

	const [, hashType, version, parameters, salt, hash] = match;
	if (version !== "19") {
		throw new Error(`Unsupported version: ${version}`);
	}

	const parsedParameters: Partial<IArgon2Options> = {};
	const paramMap = { m: "memorySize", p: "parallelism", t: "iterations" };
	for (const x of parameters.split(",")) {
		const [n, v] = x.split("=");
		parsedParameters[paramMap[n]] = Number(v);
	}

	return {
		...parsedParameters,
		password,
		secret,
		hashType: hashType as IArgon2OptionsExtended["hashType"],
		salt: decodeBase64(salt),
		hashLength: getDecodeBase64Length(hash),
		outputType: "encoded",
	} as IArgon2OptionsExtended;
};

const validateVerifyOptions = (options: Argon2VerifyOptions) => {
	if (!options || typeof options !== "object") {
		throw new Error("Invalid options parameter. It requires an object.");
	}

	if (options.hash === undefined || typeof options.hash !== "string") {
		throw new Error("Hash should be specified");
	}
};

/**
 * Verifies password using the argon2 password-hashing function
 * @returns True if the encoded hash matches the password
 */
export async function argon2Verify(
	options: Argon2VerifyOptions,
): Promise<boolean> {
	validateVerifyOptions(options);

	const params = getHashParameters(
		options.password,
		options.hash,
		options.secret,
	);
	validateOptions(params);

	const hashStart = options.hash.lastIndexOf("$") + 1;
	const result = (await argon2Internal(params)) as string;
	return result.substring(hashStart) === options.hash.substring(hashStart);
}
