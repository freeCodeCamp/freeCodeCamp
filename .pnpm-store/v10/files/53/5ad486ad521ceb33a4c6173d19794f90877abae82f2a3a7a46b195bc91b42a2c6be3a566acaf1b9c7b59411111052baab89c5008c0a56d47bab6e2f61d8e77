import { Separator, type Theme, type Keybinding } from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';
type CheckboxTheme = {
    icon: {
        checked: string;
        unchecked: string;
        cursor: string;
    };
    style: {
        disabledChoice: (text: string) => string;
        renderSelectedChoices: <T>(selectedChoices: ReadonlyArray<NormalizedChoice<T>>, allChoices: ReadonlyArray<NormalizedChoice<T> | Separator>) => string;
        description: (text: string) => string;
        keysHelpTip: (keys: [key: string, action: string][]) => string | undefined;
    };
    /** @deprecated Use theme.style.keysHelpTip instead */
    helpMode: 'always' | 'never' | 'auto';
    keybindings: ReadonlyArray<Keybinding>;
};
type CheckboxShortcuts = {
    all?: string | null;
    invert?: string | null;
};
type Choice<Value> = {
    value: Value;
    name?: string;
    checkedName?: string;
    description?: string;
    short?: string;
    disabled?: boolean | string;
    checked?: boolean;
    type?: never;
};
type NormalizedChoice<Value> = {
    value: Value;
    name: string;
    checkedName: string;
    description?: string;
    short: string;
    disabled: boolean | string;
    checked: boolean;
};
declare const _default: <Value>(config: {
    message: string;
    prefix?: string | undefined;
    pageSize?: number | undefined;
    instructions?: string | boolean | undefined;
    choices: readonly (string | Separator)[] | readonly (Separator | Choice<Value>)[];
    loop?: boolean | undefined;
    required?: boolean | undefined;
    validate?: ((choices: readonly NormalizedChoice<Value>[]) => boolean | string | Promise<string | boolean>) | undefined;
    theme?: PartialDeep<Theme<CheckboxTheme>> | undefined;
    shortcuts?: CheckboxShortcuts | undefined;
}, context?: import("@inquirer/type").Context) => Promise<Value[]> & {
    cancel: () => void;
};
export default _default;
export { Separator } from '@inquirer/core';
