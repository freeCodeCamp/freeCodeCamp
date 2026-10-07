// @flow
import {Buffer} from 'buffer';
import * as msgpackr from 'msgpackr';

let encoder = new msgpackr.Encoder({structuredClone: true});

export let serializeRaw: any => Buffer = v => Buffer.from(encoder.encode(v));
export let deserializeRaw: Buffer => any = v => encoder.decode(v);
