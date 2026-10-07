import type { CdpClient } from '../../../cdp/CdpClient.js';
import { BrowsingContext, type EmptyResult } from '../../../protocol/protocol.js';
import type { ContextConfigStorage } from '../browser/ContextConfigStorage.js';
import type { UserContextStorage } from '../browser/UserContextStorage.js';
import type { EventManager } from '../session/EventManager.js';
import type { BrowsingContextStorage } from './BrowsingContextStorage.js';
export declare class BrowsingContextProcessor {
    #private;
    constructor(browserCdpClient: CdpClient, browsingContextStorage: BrowsingContextStorage, userContextStorage: UserContextStorage, contextConfigStorage: ContextConfigStorage, eventManager: EventManager);
    getTree(params: BrowsingContext.GetTreeParameters): BrowsingContext.GetTreeResult;
    create(params: BrowsingContext.CreateParameters): Promise<BrowsingContext.CreateResult>;
    navigate(params: BrowsingContext.NavigateParameters): Promise<BrowsingContext.NavigateResult>;
    reload(params: BrowsingContext.ReloadParameters): Promise<EmptyResult>;
    activate(params: BrowsingContext.ActivateParameters): Promise<EmptyResult>;
    captureScreenshot(params: BrowsingContext.CaptureScreenshotParameters): Promise<BrowsingContext.CaptureScreenshotResult>;
    print(params: BrowsingContext.PrintParameters): Promise<BrowsingContext.PrintResult>;
    setViewport(params: BrowsingContext.SetViewportParameters): Promise<EmptyResult>;
    traverseHistory(params: BrowsingContext.TraverseHistoryParameters): Promise<BrowsingContext.TraverseHistoryResult>;
    handleUserPrompt(params: BrowsingContext.HandleUserPromptParameters): Promise<EmptyResult>;
    close(params: BrowsingContext.CloseParameters): Promise<EmptyResult>;
    locateNodes(params: BrowsingContext.LocateNodesParameters): Promise<BrowsingContext.LocateNodesResult>;
}
