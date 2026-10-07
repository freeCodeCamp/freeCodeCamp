export function isStream(stream) {
	return stream !== null
		&& typeof stream === 'object'
		&& typeof stream.pipe === 'function';
}

export function isWritableStream(stream) {
	return isStream(stream)
		&& stream.writable !== false
		&& typeof stream._write === 'function'
		&& typeof stream._writableState === 'object';
}

export function isReadableStream(stream) {
	return isStream(stream)
		&& stream.readable !== false
		&& typeof stream._read === 'function'
		&& typeof stream._readableState === 'object';
}

export function isDuplexStream(stream) {
	return isWritableStream(stream)
		&& isReadableStream(stream);
}

export function isTransformStream(stream) {
	return isDuplexStream(stream)
		&& typeof stream._transform === 'function';
}
