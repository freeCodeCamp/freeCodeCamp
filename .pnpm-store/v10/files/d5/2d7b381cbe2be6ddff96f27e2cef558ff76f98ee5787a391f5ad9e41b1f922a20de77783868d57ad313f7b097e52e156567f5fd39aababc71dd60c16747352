/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Frame } from '../api/Frame.js';
/**
 * Keeps track of the page frame tree and it's is managed by
 * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
 * means that referenced frames might not be in the tree anymore. Thus, the tree
 * structure is eventually consistent.
 * @internal
 */
export declare class FrameTree<FrameType extends Frame> {
    #private;
    getMainFrame(): FrameType | undefined;
    getById(frameId: string): FrameType | undefined;
    /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */
    waitForFrame(frameId: string): Promise<FrameType>;
    frames(): FrameType[];
    addFrame(frame: FrameType): void;
    removeFrame(frame: FrameType): void;
    childFrames(frameId: string): FrameType[];
    parentFrame(frameId: string): FrameType | undefined;
}
//# sourceMappingURL=FrameTree.d.ts.map