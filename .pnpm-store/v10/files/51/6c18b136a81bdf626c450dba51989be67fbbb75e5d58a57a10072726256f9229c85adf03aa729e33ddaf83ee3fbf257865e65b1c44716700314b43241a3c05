import { type Prompt, type Prettify } from '@inquirer/type';
type ViewFunction<Value, Config> = (config: Prettify<Config>, done: (value: Value) => void) => string | [string, string | undefined];
export declare function createPrompt<Value, Config>(view: ViewFunction<Value, Config>): Prompt<Value, Config>;
export {};
