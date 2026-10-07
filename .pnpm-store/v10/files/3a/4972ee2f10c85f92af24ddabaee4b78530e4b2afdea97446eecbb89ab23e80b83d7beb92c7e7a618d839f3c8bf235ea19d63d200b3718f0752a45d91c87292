/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { TargetFilterCallback } from '../api/Browser.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { CdpCDPSession } from './CdpSession.js';
import type { Connection } from './Connection.js';
import type { CdpTarget } from './Target.js';
import type { TargetManagerEvents } from './TargetManageEvents.js';
/**
 * @internal
 */
export type TargetFactory = (targetInfo: Protocol.Target.TargetInfo, session?: CdpCDPSession, parentSession?: CdpCDPSession) => CdpTarget;
/**
 * TargetManager encapsulates all interactions with CDP targets and is
 * responsible for coordinating the configuration of targets with the rest of
 * Puppeteer. Code outside of this class should not subscribe `Target.*` events
 * and only use the TargetManager events.
 *
 * TargetManager uses the CDP's auto-attach mechanism to intercept
 * new targets and allow the rest of Puppeteer to configure listeners while
 * the target is paused.
 *
 * @internal
 */
export declare class TargetManager extends EventEmitter<TargetManagerEvents> implements TargetManager {
    #private;
    constructor(connection: Connection, targetFactory: TargetFactory, targetFilterCallback?: TargetFilterCallback, waitForInitiallyDiscoveredTargets?: boolean, blocklist?: string[], allowlist?: string[]);
    initialize(): Promise<void>;
    addToIgnoreTarget(targetId: string): void;
    getChildTargets(target: CdpTarget): ReadonlySet<CdpTarget>;
    dispose(): void;
    getAvailableTargets(): ReadonlyMap<string, CdpTarget>;
    getDiscoveredTargetInfos(): ReadonlyMap<string, Protocol.Target.TargetInfo>;
    /**
     * Helper to validate URL against blocklist patterns
     */
    isUrlAllowed: (url: string) => boolean;
}
//# sourceMappingURL=TargetManager.d.ts.map