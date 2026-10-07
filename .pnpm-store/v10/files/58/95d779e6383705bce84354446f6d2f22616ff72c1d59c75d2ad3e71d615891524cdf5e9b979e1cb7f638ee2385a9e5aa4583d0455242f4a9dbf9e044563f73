import { Seconds } from "../type/Units.js";
import { Timeline, TimelineEvent } from "./Timeline.js";
export type BasicPlaybackState = "started" | "stopped";
export type PlaybackState = BasicPlaybackState | "paused";
export interface StateTimelineEvent extends TimelineEvent {
    state: PlaybackState;
}
/**
 * A Timeline State. Provides the methods: `setStateAtTime("state", time)` and `getValueAtTime(time)`
 * @param initial The initial state of the StateTimeline.  Defaults to `undefined`
 * @internal
 */
export declare class StateTimeline<AdditionalOptions extends Record<string, any> = Record<string, any>> extends Timeline<StateTimelineEvent & AdditionalOptions> {
    readonly name: string;
    /**
     * The initial state
     */
    private _initial;
    constructor(initial?: PlaybackState);
    /**
     * Returns the scheduled state scheduled before or at
     * the given time.
     * @param  time  The time to query.
     * @return  The name of the state input in setStateAtTime.
     */
    getValueAtTime(time: Seconds): PlaybackState;
    /**
     * Add a state to the timeline.
     * @param  state The name of the state to set.
     * @param  time  The time to query.
     * @param options Any additional options that are needed in the timeline.
     */
    setStateAtTime(state: PlaybackState, time: Seconds, options?: AdditionalOptions): this;
    /**
     * Return the event before the time with the given state
     * @param  state The state to look for
     * @param  time  When to check before
     * @return  The event with the given state before the time
     */
    getLastState(state: PlaybackState, time: number): (StateTimelineEvent & AdditionalOptions) | undefined;
    /**
     * Return the event after the time with the given state
     * @param  state The state to look for
     * @param  time  When to check from
     * @return  The event with the given state after the time
     */
    getNextState(state: PlaybackState, time: number): (StateTimelineEvent & AdditionalOptions) | undefined;
}
