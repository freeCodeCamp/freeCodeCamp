import { jsonValue } from './jsonValue.js';
export function json(constraints = {}) {
    const arb = jsonValue(constraints);
    return arb.map(JSON.stringify);
}
