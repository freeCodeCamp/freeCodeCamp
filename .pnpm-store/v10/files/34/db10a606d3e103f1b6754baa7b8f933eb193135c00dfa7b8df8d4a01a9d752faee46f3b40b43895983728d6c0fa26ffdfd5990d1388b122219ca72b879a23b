import type { Browser } from '../../../protocol/protocol.js';
import type { CdpTarget } from '../cdp/CdpTarget.js';
import type { PreloadScript } from './PreloadScript.js';
/** PreloadScripts can be filtered by BiDi ID or target ID. */
export interface PreloadScriptFilter {
    targetId: CdpTarget['id'];
}
/**
 * Container class for preload scripts.
 */
export declare class PreloadScriptStorage {
    #private;
    /**
     * Finds all entries that match the given filter (OR logic).
     */
    find(filter?: PreloadScriptFilter): PreloadScript[];
    add(preloadScript: PreloadScript): void;
    /** Deletes all BiDi preload script entries that match the given filter. */
    remove(id: string): void;
    /** Gets the preload script with the given ID, if any, otherwise throws. */
    getPreloadScript(id: string): PreloadScript;
    onCdpTargetCreated(targetId: string, userContext: Browser.UserContext): void;
}
