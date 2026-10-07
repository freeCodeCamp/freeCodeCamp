import { unicodeString } from './unicodeString.js';
import { jsonConstraintsBuilder } from './_internals/helpers/JsonConstraintsBuilder.js';
import { anything } from './anything.js';
export function unicodeJsonValue(constraints = {}) {
    return anything(jsonConstraintsBuilder(unicodeString(), constraints));
}
