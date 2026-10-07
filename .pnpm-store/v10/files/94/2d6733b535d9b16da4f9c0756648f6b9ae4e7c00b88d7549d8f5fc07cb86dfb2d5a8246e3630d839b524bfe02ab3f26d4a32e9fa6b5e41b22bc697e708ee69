import { dispatchEvent, dispatchUIEvent } from '../event';
import { Options } from '../options';
import { System } from '../system';
import { userEventApi } from './api';
import { DirectOptions } from './directApi';
export type UserEventApi = typeof userEventApi;
export type UserEvent = {
    readonly setup: (...args: Parameters<typeof setupSub>) => UserEvent;
} & {
    readonly [k in keyof UserEventApi]: (...args: Parameters<UserEventApi[k]>) => ReturnType<UserEventApi[k]>;
};
export type Instance = UserEventApi & {
    config: Config;
    dispatchEvent: OmitThisParameter<typeof dispatchEvent>;
    dispatchUIEvent: OmitThisParameter<typeof dispatchUIEvent>;
    system: System;
    levelRefs: Record<number, object | undefined>;
};
export type Config = Required<Options>;
export declare function createConfig(options?: Options, defaults?: Required<Options>, node?: Node): Config;
/**
 * Start a "session" with userEvent.
 * All APIs returned by this function share an input device state and a default configuration.
 */
export declare function setupMain(options?: Options): UserEvent;
/**
 * Setup in direct call per `userEvent.anyApi()`
 */
export declare function setupDirect({ keyboardState, pointerState, ...options }?: DirectOptions & {
    keyboardState?: System;
    pointerState?: System;
}, // backward-compatibility
node?: Node): {
    api: UserEvent;
    system: System;
};
/**
 * Create a set of callbacks with different default settings but the same state.
 */
export declare function setupSub(this: Instance, options: Options): UserEvent;
export declare function createInstance(config: Config, system?: System): {
    instance: Instance;
    api: UserEvent;
};
