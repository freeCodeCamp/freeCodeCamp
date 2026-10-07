type executingCommand = "build" | "develop" | "all";
export declare const satisfiesSemvers: (semverConstraints: Record<string, string>) => boolean;
export type fitnessEnum = true | false | "OPT_IN" | "LOCKED_IN";
export interface IFlag {
    name: string;
    env: string;
    description: string;
    command: executingCommand;
    /**
     * Use string identifier to track enabled flag or false to disable any tracking (useful when flag becomes new defaults)
     */
    telemetryId: string | false;
    experimental: boolean;
    /**
     * True means conditions for the feature are met and can be opted in by user.
     *
     * False means it'll be disabled despite the user setting it true e.g.
     * it just won't work e.g. it doesn't have new enough version for something.
     *
     * OPT_IN means the gatsby will enable the flag (unless the user explicitly
     * disables it.
     *
     * LOCKED_IN means that feature is enabled always (unless `noCI` condition is met).
     * This is mostly to provide more meaningful terminal messages instead of removing
     * flag from the flag list when users has the flag set in configuration
     * (avoids showing unknown flag message and shows "no longer needed" message).
     */
    testFitness: (flag: IFlag) => fitnessEnum;
    /**
     * Human-readable text explaining requirements for this feature to be available
     * (e.g. requires Node 14+)
     *
     * It is shown to users when testFitness() returns `false` but flag is set in gatsby-config.js
     */
    requires?: string;
    includedFlags?: Array<string>;
    umbrellaIssue?: string;
    noCI?: boolean;
}
declare const activeFlags: Array<IFlag>;
export default activeFlags;
