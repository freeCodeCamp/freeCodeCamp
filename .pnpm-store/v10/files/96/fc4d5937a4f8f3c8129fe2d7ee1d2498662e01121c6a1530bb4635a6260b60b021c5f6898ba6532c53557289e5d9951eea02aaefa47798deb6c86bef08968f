// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../system/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
export class EncodeBuilder {
    constructor(type, decode) {
        this.type = type;
        this.decode = decode;
    }
    Encode(callback) {
        const type = this.type;
        const decode = IsCodec(type) ? (value) => this.decode(type['~codec'].decode(value)) : this.decode;
        const encode = IsCodec(type) ? (value) => type['~codec'].encode(callback(value)) : callback;
        const codec = { decode, encode };
        return Memory.Update(this.type, { '~codec': codec }, {});
    }
}
export class DecodeBuilder {
    constructor(type) {
        this.type = type;
    }
    Decode(callback) {
        return new EncodeBuilder(this.type, callback);
    }
}
// ------------------------------------------------------------------
// Bidirectional
// ------------------------------------------------------------------
/** Creates a bi-directional Codec. Codec functions are called on Value.Decode and Value.Encode. */
export function Codec(type) {
    return new DecodeBuilder(type);
}
// ------------------------------------------------------------------
// Unidirectional
// ------------------------------------------------------------------
/** Createsa  uni-directional Codec with Decode only. The Decode function is called on Value.Decode */
export function Decode(type, callback) {
    return Codec(type).Decode(callback).Encode(() => {
        throw Error('Encode not implemented');
    });
}
/** Creates a uni-directional Codec with Encode only. The Encode function is called on Value.Encode */
export function Encode(type, callback) {
    return Codec(type).Decode(() => {
        throw Error('Decode not implemented');
    }).Encode(callback);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
export function IsCodec(value) {
    return IsSchema(value) &&
        Guard.HasPropertyKey(value, '~codec') &&
        Guard.IsObject(value['~codec']) &&
        Guard.HasPropertyKey(value['~codec'], 'encode') &&
        Guard.HasPropertyKey(value['~codec'], 'decode');
}
