/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ProtocolMapping } from 'devtools-protocol/types/protocol-mapping.js';
import type { Connection } from '../cdp/Connection.js';
import { EventEmitter, type EventType } from '../common/EventEmitter.js';
/**
 * @public
 */
export type CDPEvents = {
    [Property in keyof ProtocolMapping.Events]: ProtocolMapping.Events[Property][0];
};
/**
 * Events that the CDPSession class emits.
 *
 * @public
 */
export declare namespace CDPSessionEvent {
    /** @internal */
    const Disconnected: unique symbol;
    /** @internal */
    const Swapped: unique symbol;
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */
    const Ready: unique symbol;
    const SessionAttached: "sessionattached";
    const SessionDetached: "sessiondetached";
}
/**
 * @public
 */
export interface CDPSessionEvents extends CDPEvents, Record<EventType, unknown> {
    /** @internal */
    [CDPSessionEvent.Disconnected]: undefined;
    /** @internal */
    [CDPSessionEvent.Swapped]: CDPSession;
    /** @internal */
    [CDPSessionEvent.Ready]: CDPSession;
    [CDPSessionEvent.SessionAttached]: CDPSession;
    [CDPSessionEvent.SessionDetached]: CDPSession;
}
/**
 * @public
 */
export interface CommandOptions {
    timeout: number;
}
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!'),
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */
export declare abstract class CDPSession extends EventEmitter<CDPSessionEvents> {
    /**
     * @internal
     */
    constructor();
    /**
     * The underlying connection for this session, if any.
     *
     * @public
     */
    abstract connection(): Connection | undefined;
    /**
     * True if the session has been detached, false otherwise.
     *
     * @public
     */
    abstract get detached(): boolean;
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession(): CDPSession | undefined;
    abstract send<T extends keyof ProtocolMapping.Commands>(method: T, params?: ProtocolMapping.Commands[T]['paramsType'][0], options?: CommandOptions): Promise<ProtocolMapping.Commands[T]['returnType']>;
    /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */
    abstract detach(): Promise<void>;
    /**
     * Returns the session's id.
     */
    abstract id(): string;
}
//# sourceMappingURL=CDPSession.d.ts.map