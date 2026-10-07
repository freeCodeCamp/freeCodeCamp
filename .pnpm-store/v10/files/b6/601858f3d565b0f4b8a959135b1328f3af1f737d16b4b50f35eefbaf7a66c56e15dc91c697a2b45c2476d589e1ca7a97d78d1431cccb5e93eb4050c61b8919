import { fromUtf8 as jsFromUtf8, toUtf8 as jsToUtf8 } from "./pureJs";
import { fromUtf8 as textEncoderFromUtf8, toUtf8 as textEncoderToUtf8 } from "./whatwgEncodingApi";
export const fromUtf8 = (input) => typeof TextEncoder === "function" ? textEncoderFromUtf8(input) : jsFromUtf8(input);
export const toUtf8 = (input) => typeof TextDecoder === "function" ? textEncoderToUtf8(input) : jsToUtf8(input);
