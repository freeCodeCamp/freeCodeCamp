import { type Theme } from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';
type InputTheme = {
    validationFailureMode: 'keep' | 'clear';
};
type InputConfig = {
    message: string;
    default?: string;
    prefill?: 'tab' | 'editable';
    required?: boolean;
    transformer?: (value: string, { isFinal }: {
        isFinal: boolean;
    }) => string;
    validate?: (value: string) => boolean | string | Promise<string | boolean>;
    theme?: PartialDeep<Theme<InputTheme>>;
    pattern?: RegExp;
    patternError?: string;
};
declare const _default: import("@inquirer/type").Prompt<string, InputConfig>;
export default _default;
