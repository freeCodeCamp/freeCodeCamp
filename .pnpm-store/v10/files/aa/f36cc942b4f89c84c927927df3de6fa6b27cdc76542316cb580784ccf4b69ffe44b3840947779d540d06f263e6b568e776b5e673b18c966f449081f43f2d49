/*
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SHARED_ID_DIVIDER = '_element_';
export function getSharedId(frameId, documentId, backendNodeId) {
    return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
}
function parseLegacySharedId(sharedId) {
    const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
    if (!match) {
        // SharedId is incorrectly formatted.
        return null;
    }
    const documentId = match[1];
    const elementId = match[2];
    if (documentId === undefined || elementId === undefined) {
        return null;
    }
    const backendNodeId = parseInt(elementId ?? '');
    if (isNaN(backendNodeId)) {
        return null;
    }
    return {
        documentId,
        backendNodeId,
    };
}
export function parseSharedId(sharedId) {
    // TODO: remove legacy check once ChromeDriver provides sharedId in the new format.
    const legacyFormattedSharedId = parseLegacySharedId(sharedId);
    if (legacyFormattedSharedId !== null) {
        return { ...legacyFormattedSharedId, frameId: undefined };
    }
    const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
    if (!match) {
        // SharedId is incorrectly formatted.
        return null;
    }
    const frameId = match[1];
    const documentId = match[2];
    const elementId = match[3];
    if (frameId === undefined ||
        documentId === undefined ||
        elementId === undefined) {
        return null;
    }
    const backendNodeId = parseInt(elementId ?? '');
    if (isNaN(backendNodeId)) {
        return null;
    }
    return {
        frameId,
        documentId,
        backendNodeId,
    };
}
//# sourceMappingURL=SharedId.js.map