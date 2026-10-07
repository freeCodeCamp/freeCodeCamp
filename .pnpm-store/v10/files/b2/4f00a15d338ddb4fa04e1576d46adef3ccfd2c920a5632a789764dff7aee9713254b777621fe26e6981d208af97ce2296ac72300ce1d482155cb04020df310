import type { XSchema } from '../types/schema.mjs';
import type { XCanonical } from './_canonical.mjs';
import type { XStaticSchema } from './schema.mjs';
export type XStatic<Value extends unknown, Schema extends XSchema = Value extends XSchema ? Value : {}, Canonical extends XSchema = XCanonical<Schema>, Result extends unknown = XStaticSchema<[], Canonical, Canonical>> = Result;
