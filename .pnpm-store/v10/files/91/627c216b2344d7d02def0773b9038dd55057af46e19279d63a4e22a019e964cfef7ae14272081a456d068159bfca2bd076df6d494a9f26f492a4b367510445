// deno-fmt-ignore-file
import { en_US } from './en_US.mjs';
let locale = en_US;
/** Sets the locale */
export function Set(callback) {
    locale = callback;
}
/** Gets the locale */
export function Get() {
    return locale;
}
/** Resets the locale to `en_US` */
export function Reset() {
    Set(en_US);
}
