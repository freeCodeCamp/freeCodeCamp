/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { type CDPSession } from '../api/CDPSession.js';
import { type NewDocumentScriptEvaluation } from '../api/Page.js';
import { EventEmitter } from '../common/EventEmitter.js';
import type { TimeoutSettings } from '../common/TimeoutSettings.js';
import type { Binding } from './Binding.js';
import type { CdpCDPSession } from './CdpSession.js';
import { CdpDeviceRequestPromptManager } from './DeviceRequestPrompt.js';
import { CdpFrame } from './Frame.js';
import type { FrameManagerEvents } from './FrameManagerEvents.js';
import { FrameTree } from './FrameTree.js';
import { NetworkManager } from './NetworkManager.js';
import type { CdpPage } from './Page.js';
import type { CdpTarget } from './Target.js';
/**
 * A frame manager manages the frames for a given {@link Page | page}.
 *
 * @internal
 */
export declare class FrameManager extends EventEmitter<FrameManagerEvents> {
    #private;
    _frameTree: FrameTree<CdpFrame>;
    get timeoutSettings(): TimeoutSettings;
    get networkManager(): NetworkManager;
    get client(): CdpCDPSession;
    constructor(client: CdpCDPSession, page: CdpPage, timeoutSettings: TimeoutSettings);
    /**
     * When the main frame is replaced by another main frame,
     * we maintain the main frame object identity while updating
     * its frame tree and ID.
     */
    swapFrameTree(client: CdpCDPSession): Promise<void>;
    registerSpeculativeSession(client: CdpCDPSession): Promise<void>;
    private setupEventListeners;
    initialize(client: CDPSession, frame?: CdpFrame | null): Promise<void>;
    page(): CdpPage;
    mainFrame(): CdpFrame;
    frames(): CdpFrame[];
    frame(frameId: string): CdpFrame | null;
    addExposedFunctionBinding(binding: Binding): Promise<void>;
    removeExposedFunctionBinding(binding: Binding): Promise<void>;
    evaluateOnNewDocument(source: string): Promise<NewDocumentScriptEvaluation>;
    removeScriptToEvaluateOnNewDocument(identifier: string): Promise<void>;
    onAttachedToTarget(target: CdpTarget): void;
    _deviceRequestPromptManager(client: CDPSession): CdpDeviceRequestPromptManager;
}
//# sourceMappingURL=FrameManager.d.ts.map