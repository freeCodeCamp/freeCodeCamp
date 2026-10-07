export { Packr, Encoder, addExtension, pack, encode, NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT, REUSE_BUFFER_MODE, RESET_BUFFER_MODE, RESERVE_START_SPACE } from './pack.js'
export { Unpackr, Decoder, C1, unpack, unpackMultiple, decode, FLOAT32_OPTIONS, clearSource, roundFloat32, isNativeAccelerationEnabled } from './unpack.js'
import './struct.js'
export { PackrStream, UnpackrStream, PackrStream as EncoderStream, UnpackrStream as DecoderStream } from './stream.js'
export { decodeIter, encodeIter } from './iterators.js'
export const useRecords = false
export const mapsAsObjects = true
import { setExtractor } from './unpack.js'
import { createRequire } from 'module'

const nativeAccelerationDisabled = process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED !== undefined && process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase() === 'true';

if (!nativeAccelerationDisabled) {
	let extractor
	try {
		if (typeof require == 'function')
			extractor = require('msgpackr-extract')
		else
			extractor = createRequire(import.meta.url)('msgpackr-extract')
		if (extractor)
			setExtractor(extractor.extractStrings)
	} catch (error) {
		// native module is optional
	}
}