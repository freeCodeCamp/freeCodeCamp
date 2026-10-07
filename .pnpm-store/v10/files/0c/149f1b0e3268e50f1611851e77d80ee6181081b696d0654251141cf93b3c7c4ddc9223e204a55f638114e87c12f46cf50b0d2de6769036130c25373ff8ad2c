import { Transform } from 'stream'
import { Packr } from './pack.js'
import { Unpackr } from './unpack.js'
var DEFAULT_OPTIONS = {objectMode: true}

export class PackrStream extends Transform {
	constructor(options) {
		if (!options)
			options = {}
		options.writableObjectMode = true
		super(options)
		options.sequential = true
		this.packr = options.packr || new Packr(options)
	}
	_transform(value, encoding, callback) {
		this.push(this.packr.pack(value))
		callback()
	}
}

export class UnpackrStream extends Transform {
	constructor(options) {
		if (!options)
			options = {}
		options.objectMode = true
		super(options)
		options.structures = []
		this.unpackr = options.unpackr || new Unpackr(options)
	}
	_transform(chunk, encoding, callback) {
		if (this.incompleteBuffer) {
			chunk = Buffer.concat([this.incompleteBuffer, chunk])
			this.incompleteBuffer = null
		}
		let values
		try {
			values = this.unpackr.unpackMultiple(chunk)
		} catch(error) {
			if (error.incomplete) {
				this.incompleteBuffer = chunk.slice(error.lastPosition)
				values = error.values
			}
			else
				throw error
		} finally {
			for (let value of values || []) {
				if (value === null)
					value = this.getNullValue()
				this.push(value)
			}
		}
		if (callback) callback()
	}
	getNullValue() {
		return Symbol.for(null)
	}
}
