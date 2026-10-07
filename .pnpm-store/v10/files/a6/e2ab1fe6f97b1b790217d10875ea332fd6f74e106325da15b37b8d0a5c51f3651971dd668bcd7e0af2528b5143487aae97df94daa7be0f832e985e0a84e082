// deno-fmt-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import { Settings } from '../system/settings/index.mjs';
import { Get as LocaleGet } from '../system/locale/_config.mjs';
import { Guard } from '../guard/index.mjs';
import * as Engine from './engine/index.mjs';
/** Checks a value and returns validation errors */
export function Errors(...args) {
    const [context, schema, value] = Arguments.Match(args, {
        3: (context, schema, value) => [context, schema, value],
        2: (schema, value) => [{}, schema, value]
    });
    const settings = Settings.Get();
    const locale = LocaleGet();
    const errors = [];
    const stack = new Engine.Stack(context, schema);
    const errorContext = new Engine.ErrorContext(error => {
        if (Guard.IsGreaterEqualThan(errors.length, settings.maxErrors))
            return;
        return errors.push({ ...error, message: locale(error) });
    });
    const result = Engine.ErrorSchema(stack, errorContext, '#', '', schema, value);
    return [result, errors];
}
