import { type TSchema } from '../../types/schema.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TOptionalRemove } from '../../types/_optional.mjs';
import { type TProperties } from '../../types/properties.mjs';
export type TFromObject<Properties extends TProperties, Mapped extends TProperties = {
    [Key in keyof Properties]: TOptionalRemove<Properties[Key]>;
}, Result extends TSchema = TObject<Mapped>> = Result;
export declare function FromObject<Properties extends TProperties>(properties: Properties): TFromObject<Properties>;
