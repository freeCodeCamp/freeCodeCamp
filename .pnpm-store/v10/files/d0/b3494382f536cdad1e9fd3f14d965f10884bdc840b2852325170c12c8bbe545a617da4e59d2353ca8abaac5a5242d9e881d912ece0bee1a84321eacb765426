import type { IHasher } from "./WASMInterface";
import { type IDataType, getUInt8Buffer } from "./util";

function calculateKeyBuffer(hasher: IHasher, key: IDataType): Uint8Array {
	const { blockSize } = hasher;

	const buf = getUInt8Buffer(key);

	if (buf.length > blockSize) {
		hasher.update(buf);
		const uintArr = hasher.digest("binary");
		hasher.init();
		return uintArr;
	}

	return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
}

function calculateHmac(hasher: IHasher, key: IDataType): IHasher {
	hasher.init();

	const { blockSize } = hasher;
	const keyBuf = calculateKeyBuffer(hasher, key);
	const keyBuffer = new Uint8Array(blockSize);
	keyBuffer.set(keyBuf);

	const opad = new Uint8Array(blockSize);

	for (let i = 0; i < blockSize; i++) {
		const v = keyBuffer[i];
		opad[i] = v ^ 0x5c;
		keyBuffer[i] = v ^ 0x36;
	}

	hasher.update(keyBuffer);

	const obj: IHasher = {
		init: () => {
			hasher.init();
			hasher.update(keyBuffer);
			return obj;
		},

		update: (data: IDataType) => {
			hasher.update(data);
			return obj;
		},

		digest: ((outputType) => {
			const uintArr = hasher.digest("binary");
			hasher.init();
			hasher.update(opad);
			hasher.update(uintArr);
			return hasher.digest(outputType);
			// biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
		}) as any,
		save: () => {
			throw new Error("save() not supported");
		},
		load: () => {
			throw new Error("load() not supported");
		},

		blockSize: hasher.blockSize,
		digestSize: hasher.digestSize,
	};
	return obj;
}

/**
 * Calculates HMAC hash
 * @param hash Hash algorithm to use. It has to be the return value of a function like createSHA1()
 * @param key Key (string, Buffer or TypedArray)
 */
export function createHMAC(
	hash: Promise<IHasher>,
	key: IDataType,
): Promise<IHasher> {
	if (!hash || !hash.then) {
		throw new Error(
			'Invalid hash function is provided! Usage: createHMAC(createMD5(), "key").',
		);
	}

	return hash.then((hasher) => calculateHmac(hasher, key));
}
