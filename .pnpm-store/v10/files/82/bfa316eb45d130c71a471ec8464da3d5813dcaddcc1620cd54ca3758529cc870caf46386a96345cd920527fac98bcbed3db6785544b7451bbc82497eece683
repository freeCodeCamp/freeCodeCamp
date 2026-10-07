import { IFileOptions } from '@inquirer/external-editor';
import { type Theme } from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';
type EditorTheme = {
    validationFailureMode: 'keep' | 'clear';
};
type EditorConfig = {
    message: string;
    default?: string;
    postfix?: string;
    waitForUserInput?: boolean;
    validate?: (value: string) => boolean | string | Promise<string | boolean>;
    file?: IFileOptions;
    theme?: PartialDeep<Theme<EditorTheme>>;
};
declare const _default: import("@inquirer/type").Prompt<string, EditorConfig>;
export default _default;
