import type { SizeForArbitrary } from '../../../arbitrary/_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Parameters for {@link commands}
 * @remarks Since 2.2.0
 * @public
 */
export interface CommandsContraints {
    /**
     * Maximal number of commands to generate per run
     *
     * You probably want to use `size` instead.
     *
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 1.11.0
     */
    maxCommands?: number;
    /**
     * Define how large the generated values (number of commands) should be (at max)
     * @remarks Since 2.22.0
     */
    size?: SizeForArbitrary;
    /**
     * Do not show replayPath in the output
     * @defaultValue false
     * @remarks Since 1.11.0
     */
    disableReplayLog?: boolean;
    /**
     * Hint for replay purposes only
     *
     * Should be used in conjonction with `{ seed, path }` of {@link assert}
     *
     * @remarks Since 1.11.0
     */
    replayPath?: string;
}
