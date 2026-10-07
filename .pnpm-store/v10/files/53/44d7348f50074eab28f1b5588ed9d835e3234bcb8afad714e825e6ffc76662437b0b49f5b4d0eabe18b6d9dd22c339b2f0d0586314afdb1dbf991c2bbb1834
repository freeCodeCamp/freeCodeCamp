import { Separator, type Theme } from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';
type Choice<Value> = {
    value: Value;
    name?: string;
    short?: string;
    key?: string;
};
declare const _default: <Value>(config: {
    message: string;
    choices: readonly (string | Separator)[] | readonly (Separator | Choice<Value>)[];
    loop?: boolean | undefined;
    theme?: PartialDeep<Theme> | undefined;
}, context?: import("@inquirer/type").Context) => Promise<Value> & {
    cancel: () => void;
};
export default _default;
export { Separator } from '@inquirer/core';
