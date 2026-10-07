// deno-fmt-ignore-file
import { IsMinProperties, IsDefault } from '../../schema/types/index.mjs';
import { CreateError } from './error.mjs';
export function FromRecord(_context, type) {
    if (IsMinProperties(type) && !IsDefault(type))
        throw new CreateError(type, 'Record with the minProperties constraint must have a default annotation');
    return {};
}
