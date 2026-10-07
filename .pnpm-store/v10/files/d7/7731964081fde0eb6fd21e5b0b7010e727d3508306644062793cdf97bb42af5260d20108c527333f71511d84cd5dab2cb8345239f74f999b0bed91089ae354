import { ZodStringDef } from "zod";
import { ErrorMessages } from "../errorMessages.js";
import { Refs } from "../Refs.js";
/**
 * Generated from the regular expressions found here as of 2024-05-22:
 * https://github.com/colinhacks/zod/blob/master/src/types.ts.
 *
 * Expressions with /i flag have been changed accordingly.
 */
export declare const zodPatterns: {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */
    readonly cuid: RegExp;
    readonly cuid2: RegExp;
    readonly ulid: RegExp;
    /**
     * `a-z` was added to replicate /i flag
     */
    readonly email: RegExp;
    /**
     * Constructed a valid Unicode RegExp
     *
     * Lazily instantiate since this type of regex isn't supported
     * in all envs (e.g. React Native).
     *
     * See:
     * https://github.com/colinhacks/zod/issues/2433
     * Fix in Zod:
     * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
     */
    readonly emoji: () => RegExp;
    /**
     * Unused
     */
    readonly uuid: RegExp;
    /**
     * Unused
     */
    readonly ipv4: RegExp;
    readonly ipv4Cidr: RegExp;
    /**
     * Unused
     */
    readonly ipv6: RegExp;
    readonly ipv6Cidr: RegExp;
    readonly base64: RegExp;
    readonly base64url: RegExp;
    readonly nanoid: RegExp;
    readonly jwt: RegExp;
};
export type JsonSchema7StringType = {
    type: "string";
    minLength?: number;
    maxLength?: number;
    format?: "email" | "idn-email" | "uri" | "uuid" | "date-time" | "ipv4" | "ipv6" | "date" | "time" | "duration";
    pattern?: string;
    allOf?: {
        pattern: string;
        errorMessage?: ErrorMessages<{
            pattern: string;
        }>;
    }[];
    anyOf?: {
        format: string;
        errorMessage?: ErrorMessages<{
            format: string;
        }>;
    }[];
    errorMessage?: ErrorMessages<JsonSchema7StringType>;
    contentEncoding?: string;
};
export declare function parseStringDef(def: ZodStringDef, refs: Refs): JsonSchema7StringType;
