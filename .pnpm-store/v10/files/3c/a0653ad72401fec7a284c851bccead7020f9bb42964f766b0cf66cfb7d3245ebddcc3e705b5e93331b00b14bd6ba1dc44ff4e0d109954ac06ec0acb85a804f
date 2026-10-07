/**
 * Copyright 2022 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { assert } from '../../../utils/assert.js';
const specifiers = ['%s', '%d', '%i', '%f', '%o', '%O', '%c'];
function isFormatSpecifier(str) {
    return specifiers.some((spec) => str.includes(spec));
}
/**
 * @param args input remote values to be format printed
 * @return parsed text of the remote values in specific format
 */
export function logMessageFormatter(args) {
    let output = '';
    const argFormat = args[0].value.toString();
    const argValues = args.slice(1, undefined);
    const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join('|'), 'g'));
    for (const token of tokens) {
        if (token === undefined || token === '') {
            continue;
        }
        if (isFormatSpecifier(token)) {
            const arg = argValues.shift();
            // raise an exception when less value is provided
            assert(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
            if (token === '%s') {
                output += stringFromArg(arg);
            }
            else if (token === '%d' || token === '%i') {
                if (arg.type === 'bigint' ||
                    arg.type === 'number' ||
                    arg.type === 'string') {
                    output += parseInt(arg.value.toString(), 10);
                }
                else {
                    output += 'NaN';
                }
            }
            else if (token === '%f') {
                if (arg.type === 'bigint' ||
                    arg.type === 'number' ||
                    arg.type === 'string') {
                    output += parseFloat(arg.value.toString());
                }
                else {
                    output += 'NaN';
                }
            }
            else {
                // %o, %O, %c
                output += toJson(arg);
            }
        }
        else {
            output += token;
        }
    }
    // raise an exception when more value is provided
    if (argValues.length > 0) {
        throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
    }
    return output;
}
/**
 * @param arg input remote value to be parsed
 * @return parsed text of the remote value
 *
 * input: {"type": "number", "value": 1}
 * output: 1
 *
 * input: {"type": "string", "value": "abc"}
 * output: "abc"
 *
 * input: {"type": "object",  "value": [["id", {"type": "number", "value": 1}]]}
 * output: '{"id": 1}'
 *
 * input: {"type": "object", "value": [["font-size", {"type": "string", "value": "20px"}]]}
 * output: '{"font-size": "20px"}'
 */
function toJson(arg) {
    // arg type validation
    if (arg.type !== 'array' &&
        arg.type !== 'bigint' &&
        arg.type !== 'date' &&
        arg.type !== 'number' &&
        arg.type !== 'object' &&
        arg.type !== 'string') {
        return stringFromArg(arg);
    }
    if (arg.type === 'bigint') {
        return `${arg.value.toString()}n`;
    }
    if (arg.type === 'number') {
        return arg.value.toString();
    }
    if (['date', 'string'].includes(arg.type)) {
        return JSON.stringify(arg.value);
    }
    if (arg.type === 'object') {
        return `{${arg.value
            .map((pair) => {
            return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
        })
            .join(',')}}`;
    }
    if (arg.type === 'array') {
        return `[${arg.value?.map((val) => toJson(val)).join(',') ?? ''}]`;
    }
    throw Error(`Invalid value type: ${arg}`);
}
function stringFromArg(arg) {
    if (!Object.hasOwn(arg, 'value')) {
        return arg.type;
    }
    switch (arg.type) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'bigint':
            return String(arg.value);
        case 'regexp':
            return `/${arg.value.pattern}/${arg.value.flags ?? ''}`;
        case 'date':
            return new Date(arg.value).toString();
        case 'object':
            return `Object(${arg.value?.length ?? ''})`;
        case 'array':
            return `Array(${arg.value?.length ?? ''})`;
        case 'map':
            return `Map(${arg.value?.length})`;
        case 'set':
            return `Set(${arg.value?.length})`;
        default:
            return arg.type;
    }
}
export function getRemoteValuesText(args, formatText) {
    const arg = args[0];
    if (!arg) {
        return '';
    }
    // if args[0] is a format specifier, format the args as output
    if (arg.type === 'string' &&
        isFormatSpecifier(arg.value.toString()) &&
        formatText) {
        return logMessageFormatter(args);
    }
    // if args[0] is not a format specifier, just join the args with \u0020 (unicode 'SPACE')
    return args
        .map((arg) => {
        return stringFromArg(arg);
    })
        .join('\u0020');
}
//# sourceMappingURL=logHelper.js.map