import { fromStatic as convertToProvider } from "@smithy/property-provider";
const isFunction = (func) => typeof func === "function";
export const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : convertToProvider(defaultValue);
