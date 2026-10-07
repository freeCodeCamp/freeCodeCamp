export type Command = {
  id: JsUint;
} & CommandData &
  Extensible;
export type CommandData =
  | BrowserCommand
  | BrowsingContextCommand
  | EmulationCommand
  | InputCommand
  | NetworkCommand
  | ScriptCommand
  | SessionCommand
  | StorageCommand
  | WebExtensionCommand;
export type EmptyParams = Extensible;
export type Message = CommandResponse | ErrorResponse | Event;
export type CommandResponse = {
  type: 'success';
  id: JsUint;
  result: ResultData;
} & Extensible;
export type ErrorResponse = {
  type: 'error';
  id: JsUint | null;
  error: ErrorCode;
  message: string;
  stacktrace?: string;
} & Extensible;
export type ResultData =
  | BrowserResult
  | BrowsingContextResult
  | EmulationResult
  | InputResult
  | NetworkResult
  | ScriptResult
  | SessionResult
  | StorageResult
  | WebExtensionResult;
export type EmptyResult = Extensible;
export type Event = {
  type: 'event';
} & EventData &
  Extensible;
export type EventData =
  | BrowsingContextEvent
  | InputEvent
  | LogEvent
  | NetworkEvent
  | ScriptEvent;
export type Extensible = {
  [key: string]: any;
};
/**
 * Must be between `-9007199254740991` and `9007199254740991`, inclusive.
 */
export type JsInt = number;
/**
 * Must be between `0` and `9007199254740991`, inclusive.
 */
export type JsUint = number;
export declare const enum ErrorCode {
  InvalidArgument = 'invalid argument',
  InvalidSelector = 'invalid selector',
  InvalidSessionId = 'invalid session id',
  InvalidWebExtension = 'invalid web extension',
  MoveTargetOutOfBounds = 'move target out of bounds',
  NoSuchAlert = 'no such alert',
  NoSuchNetworkCollector = 'no such network collector',
  NoSuchElement = 'no such element',
  NoSuchFrame = 'no such frame',
  NoSuchHandle = 'no such handle',
  NoSuchHistoryEntry = 'no such history entry',
  NoSuchIntercept = 'no such intercept',
  NoSuchNetworkData = 'no such network data',
  NoSuchNode = 'no such node',
  NoSuchRequest = 'no such request',
  NoSuchScript = 'no such script',
  NoSuchStoragePartition = 'no such storage partition',
  NoSuchUserContext = 'no such user context',
  NoSuchWebExtension = 'no such web extension',
  SessionNotCreated = 'session not created',
  UnableToCaptureScreen = 'unable to capture screen',
  UnableToCloseBrowser = 'unable to close browser',
  UnableToSetCookie = 'unable to set cookie',
  UnableToSetFileInput = 'unable to set file input',
  UnavailableNetworkData = 'unavailable network data',
  UnderspecifiedStoragePartition = 'underspecified storage partition',
  UnknownCommand = 'unknown command',
  UnknownError = 'unknown error',
  UnsupportedOperation = 'unsupported operation',
}
export type SessionCommand =
  | Session.End
  | Session.New
  | Session.Status
  | Session.Subscribe
  | Session.Unsubscribe;
export type SessionResult =
  | Session.EndResult
  | Session.NewResult
  | Session.StatusResult
  | Session.SubscribeResult
  | Session.UnsubscribeResult;
export declare namespace Session {
  type CapabilitiesRequest = {
    alwaysMatch?: Session.CapabilityRequest;
    firstMatch?: [...Session.CapabilityRequest[]];
  };
}
export declare namespace Session {
  type CapabilityRequest = {
    acceptInsecureCerts?: boolean;
    browserName?: string;
    browserVersion?: string;
    platformName?: string;
    proxy?: Session.ProxyConfiguration;
    unhandledPromptBehavior?: Session.UserPromptHandler;
  } & Extensible;
}
export declare namespace Session {
  type ProxyConfiguration =
    | Session.AutodetectProxyConfiguration
    | Session.DirectProxyConfiguration
    | Session.ManualProxyConfiguration
    | Session.PacProxyConfiguration
    | Session.SystemProxyConfiguration;
}
export declare namespace Session {
  type AutodetectProxyConfiguration = {
    proxyType: 'autodetect';
  } & Extensible;
}
export declare namespace Session {
  type DirectProxyConfiguration = {
    proxyType: 'direct';
  } & Extensible;
}
export declare namespace Session {
  type ManualProxyConfiguration = {
    proxyType: 'manual';
    httpProxy?: string;
    sslProxy?: string;
  } & ({} | Session.SocksProxyConfiguration) & {
      noProxy?: [...string[]];
    } & Extensible;
}
export declare namespace Session {
  type SocksProxyConfiguration = {
    socksProxy: string;
    /**
     * Must be between `0` and `255`, inclusive.
     */
    socksVersion: number;
  };
}
export declare namespace Session {
  type PacProxyConfiguration = {
    proxyType: 'pac';
    proxyAutoconfigUrl: string;
  } & Extensible;
}
export declare namespace Session {
  type SystemProxyConfiguration = {
    proxyType: 'system';
  } & Extensible;
}
export declare namespace Session {
  type UserPromptHandler = {
    alert?: Session.UserPromptHandlerType;
    beforeUnload?: Session.UserPromptHandlerType;
    confirm?: Session.UserPromptHandlerType;
    default?: Session.UserPromptHandlerType;
    file?: Session.UserPromptHandlerType;
    prompt?: Session.UserPromptHandlerType;
  };
}
export declare namespace Session {
  const enum UserPromptHandlerType {
    Accept = 'accept',
    Dismiss = 'dismiss',
    Ignore = 'ignore',
  }
}
export declare namespace Session {
  type Subscription = string;
}
export declare namespace Session {
  type SubscribeParameters = {
    events: [string, ...string[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Session {
  type UnsubscribeByIdRequest = {
    subscriptions: [Session.Subscription, ...Session.Subscription[]];
  };
}
export declare namespace Session {
  type UnsubscribeByAttributesRequest = {
    events: [string, ...string[]];
  };
}
export declare namespace Session {
  type Status = {
    method: 'session.status';
    params: EmptyParams;
  };
}
export declare namespace Session {
  type StatusResult = {
    ready: boolean;
    message: string;
  };
}
export declare namespace Session {
  type New = {
    method: 'session.new';
    params: Session.NewParameters;
  };
}
export declare namespace Session {
  type NewParameters = {
    capabilities: Session.CapabilitiesRequest;
  };
}
export declare namespace Session {
  type NewResult = {
    sessionId: string;
    capabilities: {
      acceptInsecureCerts: boolean;
      browserName: string;
      browserVersion: string;
      platformName: string;
      setWindowRect: boolean;
      userAgent: string;
      proxy?: Session.ProxyConfiguration;
      unhandledPromptBehavior?: Session.UserPromptHandler;
      webSocketUrl?: string;
    } & Extensible;
  };
}
export declare namespace Session {
  type End = {
    method: 'session.end';
    params: EmptyParams;
  };
}
export declare namespace Session {
  type EndResult = EmptyResult;
}
export declare namespace Session {
  type Subscribe = {
    method: 'session.subscribe';
    params: Session.SubscribeParameters;
  };
}
export declare namespace Session {
  type SubscribeResult = {
    subscription: Session.Subscription;
  };
}
export declare namespace Session {
  type Unsubscribe = {
    method: 'session.unsubscribe';
    params: Session.UnsubscribeParameters;
  };
}
export declare namespace Session {
  type UnsubscribeParameters =
    | Session.UnsubscribeByAttributesRequest
    | Session.UnsubscribeByIdRequest;
}
export declare namespace Session {
  type UnsubscribeResult = EmptyResult;
}
export type BrowserCommand =
  | Browser.Close
  | Browser.CreateUserContext
  | Browser.GetClientWindows
  | Browser.GetUserContexts
  | Browser.RemoveUserContext
  | Browser.SetClientWindowState
  | Browser.SetDownloadBehavior;
export type BrowserResult =
  | Browser.CloseResult
  | Browser.CreateUserContextResult
  | Browser.GetClientWindowsResult
  | Browser.GetUserContextsResult
  | Browser.RemoveUserContextResult
  | Browser.SetClientWindowStateResult
  | Browser.SetDownloadBehaviorResult;
export declare namespace Browser {
  type ClientWindow = string;
}
export declare namespace Browser {
  type ClientWindowInfo = {
    active: boolean;
    clientWindow: Browser.ClientWindow;
    height: JsUint;
    state: 'fullscreen' | 'maximized' | 'minimized' | 'normal';
    width: JsUint;
    x: JsInt;
    y: JsInt;
  };
}
export declare namespace Browser {
  type UserContext = string;
}
export declare namespace Browser {
  type UserContextInfo = {
    userContext: Browser.UserContext;
  };
}
export declare namespace Browser {
  type Close = {
    method: 'browser.close';
    params: EmptyParams;
  };
}
export declare namespace Browser {
  type CloseResult = EmptyResult;
}
export declare namespace Browser {
  type CreateUserContext = {
    method: 'browser.createUserContext';
    params: Browser.CreateUserContextParameters;
  };
}
export declare namespace Browser {
  type CreateUserContextParameters = {
    acceptInsecureCerts?: boolean;
    proxy?: Session.ProxyConfiguration;
    unhandledPromptBehavior?: Session.UserPromptHandler;
  };
}
export declare namespace Browser {
  type CreateUserContextResult = Browser.UserContextInfo;
}
export declare namespace Browser {
  type GetClientWindows = {
    method: 'browser.getClientWindows';
    params: EmptyParams;
  };
}
export declare namespace Browser {
  type GetClientWindowsResult = {
    clientWindows: [...Browser.ClientWindowInfo[]];
  };
}
export declare namespace Browser {
  type GetUserContexts = {
    method: 'browser.getUserContexts';
    params: EmptyParams;
  };
}
export declare namespace Browser {
  type GetUserContextsResult = {
    userContexts: [Browser.UserContextInfo, ...Browser.UserContextInfo[]];
  };
}
export declare namespace Browser {
  type RemoveUserContext = {
    method: 'browser.removeUserContext';
    params: Browser.RemoveUserContextParameters;
  };
}
export declare namespace Browser {
  type RemoveUserContextParameters = {
    userContext: Browser.UserContext;
  };
}
export declare namespace Browser {
  type RemoveUserContextResult = EmptyResult;
}
export declare namespace Browser {
  type SetClientWindowState = {
    method: 'browser.setClientWindowState';
    params: Browser.SetClientWindowStateParameters;
  };
}
export declare namespace Browser {
  type SetClientWindowStateParameters = {
    clientWindow: Browser.ClientWindow;
  } & (Browser.ClientWindowNamedState | Browser.ClientWindowRectState);
}
export declare namespace Browser {
  type ClientWindowNamedState = {
    state: 'fullscreen' | 'maximized' | 'minimized';
  };
}
export declare namespace Browser {
  type ClientWindowRectState = {
    state: 'normal';
    width?: JsUint;
    height?: JsUint;
    x?: JsInt;
    y?: JsInt;
  };
}
export declare namespace Browser {
  type SetClientWindowStateResult = Browser.ClientWindowInfo;
}
export declare namespace Browser {
  type SetDownloadBehavior = {
    method: 'browser.setDownloadBehavior';
    params: Browser.SetDownloadBehaviorParameters;
  };
}
export declare namespace Browser {
  type SetDownloadBehaviorParameters = {
    downloadBehavior: Browser.DownloadBehavior | null;
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Browser {
  type DownloadBehavior =
    | Browser.DownloadBehaviorAllowed
    | Browser.DownloadBehaviorDenied;
}
export declare namespace Browser {
  type DownloadBehaviorAllowed = {
    type: 'allowed';
    destinationFolder: string;
  };
}
export declare namespace Browser {
  type DownloadBehaviorDenied = {
    type: 'denied';
  };
}
export declare namespace Browser {
  type SetDownloadBehaviorResult = EmptyResult;
}
export type BrowsingContextCommand =
  | BrowsingContext.Activate
  | BrowsingContext.CaptureScreenshot
  | BrowsingContext.Close
  | BrowsingContext.Create
  | BrowsingContext.GetTree
  | BrowsingContext.HandleUserPrompt
  | BrowsingContext.LocateNodes
  | BrowsingContext.Navigate
  | BrowsingContext.Print
  | BrowsingContext.Reload
  | BrowsingContext.SetViewport
  | BrowsingContext.TraverseHistory;
export type BrowsingContextResult =
  | BrowsingContext.ActivateResult
  | BrowsingContext.CaptureScreenshotResult
  | BrowsingContext.CloseResult
  | BrowsingContext.CreateResult
  | BrowsingContext.GetTreeResult
  | BrowsingContext.HandleUserPromptResult
  | BrowsingContext.LocateNodesResult
  | BrowsingContext.NavigateResult
  | BrowsingContext.PrintResult
  | BrowsingContext.ReloadResult
  | BrowsingContext.SetViewportResult
  | BrowsingContext.TraverseHistoryResult;
export type BrowsingContextEvent =
  | BrowsingContext.ContextCreated
  | BrowsingContext.ContextDestroyed
  | BrowsingContext.DomContentLoaded
  | BrowsingContext.DownloadEnd
  | BrowsingContext.DownloadWillBegin
  | BrowsingContext.FragmentNavigated
  | BrowsingContext.HistoryUpdated
  | BrowsingContext.Load
  | BrowsingContext.NavigationAborted
  | BrowsingContext.NavigationCommitted
  | BrowsingContext.NavigationFailed
  | BrowsingContext.NavigationStarted
  | BrowsingContext.UserPromptClosed
  | BrowsingContext.UserPromptOpened;
export declare namespace BrowsingContext {
  type BrowsingContext = string;
}
export declare namespace BrowsingContext {
  type InfoList = [...BrowsingContext.Info[]];
}
export declare namespace BrowsingContext {
  type Info = {
    children: BrowsingContext.InfoList | null;
    clientWindow: Browser.ClientWindow;
    context: BrowsingContext.BrowsingContext;
    originalOpener: BrowsingContext.BrowsingContext | null;
    url: string;
    userContext: Browser.UserContext;
    parent?: BrowsingContext.BrowsingContext | null;
  };
}
export declare namespace BrowsingContext {
  type Locator =
    | BrowsingContext.AccessibilityLocator
    | BrowsingContext.CssLocator
    | BrowsingContext.ContextLocator
    | BrowsingContext.InnerTextLocator
    | BrowsingContext.XPathLocator;
}
export declare namespace BrowsingContext {
  type AccessibilityLocator = {
    type: 'accessibility';
    value: {
      name?: string;
      role?: string;
    };
  };
}
export declare namespace BrowsingContext {
  type CssLocator = {
    type: 'css';
    value: string;
  };
}
export declare namespace BrowsingContext {
  type ContextLocator = {
    type: 'context';
    value: {
      context: BrowsingContext.BrowsingContext;
    };
  };
}
export declare namespace BrowsingContext {
  type InnerTextLocator = {
    type: 'innerText';
    value: string;
    ignoreCase?: boolean;
    matchType?: 'full' | 'partial';
    maxDepth?: JsUint;
  };
}
export declare namespace BrowsingContext {
  type XPathLocator = {
    type: 'xpath';
    value: string;
  };
}
export declare namespace BrowsingContext {
  type Navigation = string;
}
export declare namespace BrowsingContext {
  type BaseNavigationInfo = {
    context: BrowsingContext.BrowsingContext;
    navigation: BrowsingContext.Navigation | null;
    timestamp: JsUint;
    url: string;
  };
}
export declare namespace BrowsingContext {
  type NavigationInfo = BrowsingContext.BaseNavigationInfo;
}
export declare namespace BrowsingContext {
  const enum ReadinessState {
    None = 'none',
    Interactive = 'interactive',
    Complete = 'complete',
  }
}
export declare namespace BrowsingContext {
  const enum UserPromptType {
    Alert = 'alert',
    Beforeunload = 'beforeunload',
    Confirm = 'confirm',
    Prompt = 'prompt',
  }
}
export declare namespace BrowsingContext {
  type Activate = {
    method: 'browsingContext.activate';
    params: BrowsingContext.ActivateParameters;
  };
}
export declare namespace BrowsingContext {
  type ActivateParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
export declare namespace BrowsingContext {
  type ActivateResult = EmptyResult;
}
export declare namespace BrowsingContext {
  type CaptureScreenshot = {
    method: 'browsingContext.captureScreenshot';
    params: BrowsingContext.CaptureScreenshotParameters;
  };
}
export declare namespace BrowsingContext {
  type CaptureScreenshotParameters = {
    context: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `"viewport"`
     */
    origin?: 'viewport' | 'document';
    format?: BrowsingContext.ImageFormat;
    clip?: BrowsingContext.ClipRectangle;
  };
}
export declare namespace BrowsingContext {
  type ImageFormat = {
    type: string;
    /**
     * Must be between `0` and `1`, inclusive.
     */
    quality?: number;
  };
}
export declare namespace BrowsingContext {
  type ClipRectangle =
    | BrowsingContext.BoxClipRectangle
    | BrowsingContext.ElementClipRectangle;
}
export declare namespace BrowsingContext {
  type ElementClipRectangle = {
    type: 'element';
    element: Script.SharedReference;
  };
}
export declare namespace BrowsingContext {
  type BoxClipRectangle = {
    type: 'box';
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
export declare namespace BrowsingContext {
  type CaptureScreenshotResult = {
    data: string;
  };
}
export declare namespace BrowsingContext {
  type Close = {
    method: 'browsingContext.close';
    params: BrowsingContext.CloseParameters;
  };
}
export declare namespace BrowsingContext {
  type CloseParameters = {
    context: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    promptUnload?: boolean;
  };
}
export declare namespace BrowsingContext {
  type CloseResult = EmptyResult;
}
export declare namespace BrowsingContext {
  type Create = {
    method: 'browsingContext.create';
    params: BrowsingContext.CreateParameters;
  };
}
export declare namespace BrowsingContext {
  const enum CreateType {
    Tab = 'tab',
    Window = 'window',
  }
}
export declare namespace BrowsingContext {
  type CreateParameters = {
    type: BrowsingContext.CreateType;
    referenceContext?: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    background?: boolean;
    userContext?: Browser.UserContext;
  };
}
export declare namespace BrowsingContext {
  type CreateResult = {
    context: BrowsingContext.BrowsingContext;
  };
}
export declare namespace BrowsingContext {
  type GetTree = {
    method: 'browsingContext.getTree';
    params: BrowsingContext.GetTreeParameters;
  };
}
export declare namespace BrowsingContext {
  type GetTreeParameters = {
    maxDepth?: JsUint;
    root?: BrowsingContext.BrowsingContext;
  };
}
export declare namespace BrowsingContext {
  type GetTreeResult = {
    contexts: BrowsingContext.InfoList;
  };
}
export declare namespace BrowsingContext {
  type HandleUserPrompt = {
    method: 'browsingContext.handleUserPrompt';
    params: BrowsingContext.HandleUserPromptParameters;
  };
}
export declare namespace BrowsingContext {
  type HandleUserPromptParameters = {
    context: BrowsingContext.BrowsingContext;
    accept?: boolean;
    userText?: string;
  };
}
export declare namespace BrowsingContext {
  type HandleUserPromptResult = EmptyResult;
}
export declare namespace BrowsingContext {
  type LocateNodes = {
    method: 'browsingContext.locateNodes';
    params: BrowsingContext.LocateNodesParameters;
  };
}
export declare namespace BrowsingContext {
  type LocateNodesParameters = {
    context: BrowsingContext.BrowsingContext;
    locator: BrowsingContext.Locator;
    /**
     * Must be greater than or equal to `1`.
     */
    maxNodeCount?: JsUint;
    serializationOptions?: Script.SerializationOptions;
    startNodes?: [Script.SharedReference, ...Script.SharedReference[]];
  };
}
export declare namespace BrowsingContext {
  type LocateNodesResult = {
    nodes: [...Script.NodeRemoteValue[]];
  };
}
export declare namespace BrowsingContext {
  type Navigate = {
    method: 'browsingContext.navigate';
    params: BrowsingContext.NavigateParameters;
  };
}
export declare namespace BrowsingContext {
  type NavigateParameters = {
    context: BrowsingContext.BrowsingContext;
    url: string;
    wait?: BrowsingContext.ReadinessState;
  };
}
export declare namespace BrowsingContext {
  type NavigateResult = {
    navigation: BrowsingContext.Navigation | null;
    url: string;
  };
}
export declare namespace BrowsingContext {
  type Print = {
    method: 'browsingContext.print';
    params: BrowsingContext.PrintParameters;
  };
}
export declare namespace BrowsingContext {
  type PrintParameters = {
    context: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    background?: boolean;
    margin?: BrowsingContext.PrintMarginParameters;
    /**
     * @defaultValue `"portrait"`
     */
    orientation?: 'portrait' | 'landscape';
    page?: BrowsingContext.PrintPageParameters;
    pageRanges?: [...(JsUint | string)[]];
    /**
     * Must be between `0.1` and `2`, inclusive.
     *
     * @defaultValue `1`
     */
    scale?: number;
    /**
     * @defaultValue `true`
     */
    shrinkToFit?: boolean;
  };
}
export declare namespace BrowsingContext {
  type PrintMarginParameters = {
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    bottom?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    left?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    right?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    top?: number;
  };
}
export declare namespace BrowsingContext {
  type PrintPageParameters = {
    /**
     * Must be greater than or equal to `0.0352`.
     *
     * @defaultValue `27.94`
     */
    height?: number;
    /**
     * Must be greater than or equal to `0.0352`.
     *
     * @defaultValue `21.59`
     */
    width?: number;
  };
}
export declare namespace BrowsingContext {
  type PrintResult = {
    data: string;
  };
}
export declare namespace BrowsingContext {
  type Reload = {
    method: 'browsingContext.reload';
    params: BrowsingContext.ReloadParameters;
  };
}
export declare namespace BrowsingContext {
  type ReloadParameters = {
    context: BrowsingContext.BrowsingContext;
    ignoreCache?: boolean;
    wait?: BrowsingContext.ReadinessState;
  };
}
export declare namespace BrowsingContext {
  type ReloadResult = BrowsingContext.NavigateResult;
}
export declare namespace BrowsingContext {
  type SetViewport = {
    method: 'browsingContext.setViewport';
    params: BrowsingContext.SetViewportParameters;
  };
}
export declare namespace BrowsingContext {
  type SetViewportParameters = {
    context?: BrowsingContext.BrowsingContext;
    viewport?: BrowsingContext.Viewport | null;
    /**
     * Must be greater than `0`.
     */
    devicePixelRatio?: number | null;
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace BrowsingContext {
  type Viewport = {
    width: JsUint;
    height: JsUint;
  };
}
export declare namespace BrowsingContext {
  type SetViewportResult = EmptyResult;
}
export declare namespace BrowsingContext {
  type TraverseHistory = {
    method: 'browsingContext.traverseHistory';
    params: BrowsingContext.TraverseHistoryParameters;
  };
}
export declare namespace BrowsingContext {
  type TraverseHistoryParameters = {
    context: BrowsingContext.BrowsingContext;
    delta: JsInt;
  };
}
export declare namespace BrowsingContext {
  type TraverseHistoryResult = EmptyResult;
}
export declare namespace BrowsingContext {
  type ContextCreated = {
    method: 'browsingContext.contextCreated';
    params: BrowsingContext.Info;
  };
}
export declare namespace BrowsingContext {
  type ContextDestroyed = {
    method: 'browsingContext.contextDestroyed';
    params: BrowsingContext.Info;
  };
}
export declare namespace BrowsingContext {
  type NavigationStarted = {
    method: 'browsingContext.navigationStarted';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type FragmentNavigated = {
    method: 'browsingContext.fragmentNavigated';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type HistoryUpdated = {
    method: 'browsingContext.historyUpdated';
    params: BrowsingContext.HistoryUpdatedParameters;
  };
}
export declare namespace BrowsingContext {
  type HistoryUpdatedParameters = {
    context: BrowsingContext.BrowsingContext;
    timestamp: JsUint;
    url: string;
  };
}
export declare namespace BrowsingContext {
  type DomContentLoaded = {
    method: 'browsingContext.domContentLoaded';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type Load = {
    method: 'browsingContext.load';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type DownloadWillBegin = {
    method: 'browsingContext.downloadWillBegin';
    params: BrowsingContext.DownloadWillBeginParams;
  };
}
export declare namespace BrowsingContext {
  type DownloadWillBeginParams = {
    suggestedFilename: string;
  } & BrowsingContext.BaseNavigationInfo;
}
export declare namespace BrowsingContext {
  type DownloadEnd = {
    method: 'browsingContext.downloadEnd';
    params: BrowsingContext.DownloadEndParams;
  };
}
export declare namespace BrowsingContext {
  type DownloadEndParams =
    | BrowsingContext.DownloadCanceledParams
    | BrowsingContext.DownloadCompleteParams;
}
export declare namespace BrowsingContext {
  type DownloadCanceledParams = {
    status: 'canceled';
  } & BrowsingContext.BaseNavigationInfo;
}
export declare namespace BrowsingContext {
  type DownloadCompleteParams = {
    status: 'complete';
    filepath: string | null;
  } & BrowsingContext.BaseNavigationInfo;
}
export declare namespace BrowsingContext {
  type NavigationAborted = {
    method: 'browsingContext.navigationAborted';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type NavigationCommitted = {
    method: 'browsingContext.navigationCommitted';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type NavigationFailed = {
    method: 'browsingContext.navigationFailed';
    params: BrowsingContext.NavigationInfo;
  };
}
export declare namespace BrowsingContext {
  type UserPromptClosed = {
    method: 'browsingContext.userPromptClosed';
    params: BrowsingContext.UserPromptClosedParameters;
  };
}
export declare namespace BrowsingContext {
  type UserPromptClosedParameters = {
    context: BrowsingContext.BrowsingContext;
    accepted: boolean;
    type: BrowsingContext.UserPromptType;
    userText?: string;
  };
}
export declare namespace BrowsingContext {
  type UserPromptOpened = {
    method: 'browsingContext.userPromptOpened';
    params: BrowsingContext.UserPromptOpenedParameters;
  };
}
export declare namespace BrowsingContext {
  type UserPromptOpenedParameters = {
    context: BrowsingContext.BrowsingContext;
    handler: Session.UserPromptHandlerType;
    message: string;
    type: BrowsingContext.UserPromptType;
    defaultValue?: string;
  };
}
export type EmulationCommand =
  | Emulation.SetForcedColorsModeThemeOverride
  | Emulation.SetGeolocationOverride
  | Emulation.SetLocaleOverride
  | Emulation.SetNetworkConditions
  | Emulation.SetScreenOrientationOverride
  | Emulation.SetScreenSettingsOverride
  | Emulation.SetScriptingEnabled
  | Emulation.SetTimezoneOverride
  | Emulation.SetTouchOverride
  | Emulation.SetUserAgentOverride;
export type EmulationResult =
  | Emulation.SetForcedColorsModeThemeOverrideResult
  | Emulation.SetGeolocationOverrideResult
  | Emulation.SetLocaleOverrideResult
  | Emulation.SetScreenOrientationOverrideResult
  | Emulation.SetScriptingEnabledResult
  | Emulation.SetTimezoneOverrideResult
  | Emulation.SetTouchOverrideResult
  | Emulation.SetUserAgentOverrideResult;
export declare namespace Emulation {
  type SetForcedColorsModeThemeOverride = {
    method: 'emulation.setForcedColorsModeThemeOverride';
    params: Emulation.SetForcedColorsModeThemeOverrideParameters;
  };
}
export declare namespace Emulation {
  type SetForcedColorsModeThemeOverrideParameters = {
    theme: Emulation.ForcedColorsModeTheme | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  const enum ForcedColorsModeTheme {
    Light = 'light',
    Dark = 'dark',
  }
}
export declare namespace Emulation {
  type SetForcedColorsModeThemeOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetGeolocationOverride = {
    method: 'emulation.setGeolocationOverride';
    params: Emulation.SetGeolocationOverrideParameters;
  };
}
export declare namespace Emulation {
  type SetGeolocationOverrideParameters = (
    | {
        coordinates: Emulation.GeolocationCoordinates | null;
      }
    | {
        error: Emulation.GeolocationPositionError;
      }
  ) & {
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type GeolocationCoordinates = {
    /**
     * Must be between `-90` and `90`, inclusive.
     */
    latitude: number;
    /**
     * Must be between `-180` and `180`, inclusive.
     */
    longitude: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    accuracy?: number;
    /**
     * @defaultValue `null`
     */
    altitude?: number | null;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `null`
     */
    altitudeAccuracy?: number | null;
    /**
     * Must be between `0` and `360`.
     *
     * @defaultValue `null`
     */
    heading?: number | null;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `null`
     */
    speed?: number | null;
  };
}
export declare namespace Emulation {
  type GeolocationPositionError = {
    type: 'positionUnavailable';
  };
}
export declare namespace Emulation {
  type SetGeolocationOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetLocaleOverride = {
    method: 'emulation.setLocaleOverride';
    params: Emulation.SetLocaleOverrideParameters;
  };
}
export declare namespace Emulation {
  type SetLocaleOverrideParameters = {
    locale: string | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetLocaleOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetNetworkConditions = {
    method: 'emulation.setNetworkConditions';
    params: Emulation.SetNetworkConditionsParameters;
  };
}
export declare namespace Emulation {
  type SetNetworkConditionsParameters = {
    networkConditions: Emulation.NetworkConditions | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type NetworkConditions = Emulation.NetworkConditionsOffline;
}
export declare namespace Emulation {
  type NetworkConditionsOffline = {
    type: 'offline';
  };
}
export declare namespace Emulation {
  type SetNetworkConditionsResult = EmptyResult;
}
export declare namespace Emulation {
  type SetScreenSettingsOverride = {
    method: 'emulation.setScreenSettingsOverride';
    params: Emulation.SetScreenSettingsOverrideParameters;
  };
}
export declare namespace Emulation {
  type ScreenArea = {
    width: JsUint;
    height: JsUint;
  };
}
export declare namespace Emulation {
  type SetScreenSettingsOverrideParameters = {
    screenArea: Emulation.ScreenArea | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetScreenSettingsOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetScreenOrientationOverride = {
    method: 'emulation.setScreenOrientationOverride';
    params: Emulation.SetScreenOrientationOverrideParameters;
  };
}
export declare namespace Emulation {
  const enum ScreenOrientationNatural {
    Portrait = 'portrait',
    Landscape = 'landscape',
  }
}
export declare namespace Emulation {
  type ScreenOrientationType =
    | 'portrait-primary'
    | 'portrait-secondary'
    | 'landscape-primary'
    | 'landscape-secondary';
}
export declare namespace Emulation {
  type ScreenOrientation = {
    natural: Emulation.ScreenOrientationNatural;
    type: Emulation.ScreenOrientationType;
  };
}
export declare namespace Emulation {
  type SetScreenOrientationOverrideParameters = {
    screenOrientation: Emulation.ScreenOrientation | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetScreenOrientationOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetUserAgentOverride = {
    method: 'emulation.setUserAgentOverride';
    params: Emulation.SetUserAgentOverrideParameters;
  };
}
export declare namespace Emulation {
  type SetUserAgentOverrideParameters = {
    userAgent: string | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetUserAgentOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetScriptingEnabled = {
    method: 'emulation.setScriptingEnabled';
    params: Emulation.SetScriptingEnabledParameters;
  };
}
export declare namespace Emulation {
  type SetScriptingEnabledParameters = {
    enabled: false | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetScriptingEnabledResult = EmptyResult;
}
export declare namespace Emulation {
  type SetTimezoneOverride = {
    method: 'emulation.setTimezoneOverride';
    params: Emulation.SetTimezoneOverrideParameters;
  };
}
export declare namespace Emulation {
  type SetTimezoneOverrideParameters = {
    timezone: string | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetTimezoneOverrideResult = EmptyResult;
}
export declare namespace Emulation {
  type SetTouchOverride = {
    method: 'emulation.setTouchOverride';
    params: Emulation.SetTouchOverrideParameters;
  };
}
export declare namespace Emulation {
  type SetTouchOverrideParameters = {
    /**
     * Must be greater than or equal to `1`.
     */
    maxTouchPoints: JsUint | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Emulation {
  type SetTouchOverrideResult = EmptyResult;
}
export type NetworkCommand =
  | Network.AddDataCollector
  | Network.AddIntercept
  | Network.ContinueRequest
  | Network.ContinueResponse
  | Network.ContinueWithAuth
  | Network.DisownData
  | Network.FailRequest
  | Network.GetData
  | Network.ProvideResponse
  | Network.RemoveDataCollector
  | Network.RemoveIntercept
  | Network.SetCacheBehavior
  | Network.SetExtraHeaders;
export type NetworkResult =
  | Network.AddDataCollectorResult
  | Network.AddInterceptResult
  | Network.ContinueRequestResult
  | Network.ContinueResponseResult
  | Network.ContinueWithAuthResult
  | Network.DisownDataResult
  | Network.FailRequestResult
  | Network.GetDataResult
  | Network.ProvideResponseResult
  | Network.RemoveDataCollectorResult
  | Network.RemoveInterceptResult
  | Network.SetCacheBehaviorResult
  | Network.SetExtraHeadersResult;
export type NetworkEvent =
  | Network.AuthRequired
  | Network.BeforeRequestSent
  | Network.FetchError
  | Network.ResponseCompleted
  | Network.ResponseStarted;
export declare namespace Network {
  type AuthChallenge = {
    scheme: string;
    realm: string;
  };
}
export declare namespace Network {
  type AuthCredentials = {
    type: 'password';
    username: string;
    password: string;
  };
}
export declare namespace Network {
  type BaseParameters = {
    context: BrowsingContext.BrowsingContext | null;
    isBlocked: boolean;
    navigation: BrowsingContext.Navigation | null;
    redirectCount: JsUint;
    request: Network.RequestData;
    timestamp: JsUint;
    intercepts?: [Network.Intercept, ...Network.Intercept[]];
  };
}
export declare namespace Network {
  type BytesValue = Network.StringValue | Network.Base64Value;
}
export declare namespace Network {
  type StringValue = {
    type: 'string';
    value: string;
  };
}
export declare namespace Network {
  type Base64Value = {
    type: 'base64';
    value: string;
  };
}
export declare namespace Network {
  type Collector = string;
}
export declare namespace Network {
  const enum CollectorType {
    Blob = 'blob',
  }
}
export declare namespace Network {
  const enum SameSite {
    Strict = 'strict',
    Lax = 'lax',
    None = 'none',
    Default = 'default',
  }
}
export declare namespace Network {
  type Cookie = {
    name: string;
    value: Network.BytesValue;
    domain: string;
    path: string;
    size: JsUint;
    httpOnly: boolean;
    secure: boolean;
    sameSite: Network.SameSite;
    expiry?: JsUint;
  } & Extensible;
}
export declare namespace Network {
  type CookieHeader = {
    name: string;
    value: Network.BytesValue;
  };
}
export declare namespace Network {
  const enum DataType {
    Request = 'request',
    Response = 'response',
  }
}
export declare namespace Network {
  type FetchTimingInfo = {
    timeOrigin: number;
    requestTime: number;
    redirectStart: number;
    redirectEnd: number;
    fetchStart: number;
    dnsStart: number;
    dnsEnd: number;
    connectStart: number;
    connectEnd: number;
    tlsStart: number;
    requestStart: number;
    responseStart: number;
    responseEnd: number;
  };
}
export declare namespace Network {
  type Header = {
    name: string;
    value: Network.BytesValue;
  };
}
export declare namespace Network {
  type Initiator = {
    columnNumber?: JsUint;
    lineNumber?: JsUint;
    request?: Network.Request;
    stackTrace?: Script.StackTrace;
    type?: 'parser' | 'script' | 'preflight' | 'other';
  };
}
export declare namespace Network {
  type Intercept = string;
}
export declare namespace Network {
  type Request = string;
}
export declare namespace Network {
  type RequestData = {
    request: Network.Request;
    url: string;
    method: string;
    headers: [...Network.Header[]];
    cookies: [...Network.Cookie[]];
    headersSize: JsUint;
    bodySize: JsUint | null;
    destination: string;
    initiatorType: string | null;
    timings: Network.FetchTimingInfo;
  };
}
export declare namespace Network {
  type ResponseContent = {
    size: JsUint;
  };
}
export declare namespace Network {
  type ResponseData = {
    url: string;
    protocol: string;
    status: JsUint;
    statusText: string;
    fromCache: boolean;
    headers: [...Network.Header[]];
    mimeType: string;
    bytesReceived: JsUint;
    headersSize: JsUint | null;
    bodySize: JsUint | null;
    content: Network.ResponseContent;
    authChallenges?: [...Network.AuthChallenge[]];
  };
}
export declare namespace Network {
  type SetCookieHeader = {
    name: string;
    value: Network.BytesValue;
    domain?: string;
    httpOnly?: boolean;
    expiry?: string;
    maxAge?: JsInt;
    path?: string;
    sameSite?: Network.SameSite;
    secure?: boolean;
  };
}
export declare namespace Network {
  type UrlPattern = Network.UrlPatternPattern | Network.UrlPatternString;
}
export declare namespace Network {
  type UrlPatternPattern = {
    type: 'pattern';
    protocol?: string;
    hostname?: string;
    port?: string;
    pathname?: string;
    search?: string;
  };
}
export declare namespace Network {
  type UrlPatternString = {
    type: 'string';
    pattern: string;
  };
}
export declare namespace Network {
  type AddDataCollector = {
    method: 'network.addDataCollector';
    params: Network.AddDataCollectorParameters;
  };
}
export declare namespace Network {
  type AddDataCollectorParameters = {
    dataTypes: [Network.DataType, ...Network.DataType[]];
    maxEncodedDataSize: JsUint;
    /**
     * @defaultValue `"blob"`
     */
    collectorType?: Network.CollectorType;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Network {
  type AddDataCollectorResult = {
    collector: Network.Collector;
  };
}
export declare namespace Network {
  type AddIntercept = {
    method: 'network.addIntercept';
    params: Network.AddInterceptParameters;
  };
}
export declare namespace Network {
  type AddInterceptParameters = {
    phases: [Network.InterceptPhase, ...Network.InterceptPhase[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    urlPatterns?: [...Network.UrlPattern[]];
  };
}
export declare namespace Network {
  const enum InterceptPhase {
    BeforeRequestSent = 'beforeRequestSent',
    ResponseStarted = 'responseStarted',
    AuthRequired = 'authRequired',
  }
}
export declare namespace Network {
  type AddInterceptResult = {
    intercept: Network.Intercept;
  };
}
export declare namespace Network {
  type ContinueRequest = {
    method: 'network.continueRequest';
    params: Network.ContinueRequestParameters;
  };
}
export declare namespace Network {
  type ContinueRequestParameters = {
    request: Network.Request;
    body?: Network.BytesValue;
    cookies?: [...Network.CookieHeader[]];
    headers?: [...Network.Header[]];
    method?: string;
    url?: string;
  };
}
export declare namespace Network {
  type ContinueRequestResult = EmptyResult;
}
export declare namespace Network {
  type ContinueResponse = {
    method: 'network.continueResponse';
    params: Network.ContinueResponseParameters;
  };
}
export declare namespace Network {
  type ContinueResponseParameters = {
    request: Network.Request;
    cookies?: [...Network.SetCookieHeader[]];
    credentials?: Network.AuthCredentials;
    headers?: [...Network.Header[]];
    reasonPhrase?: string;
    statusCode?: JsUint;
  };
}
export declare namespace Network {
  type ContinueResponseResult = EmptyResult;
}
export declare namespace Network {
  type ContinueWithAuth = {
    method: 'network.continueWithAuth';
    params: Network.ContinueWithAuthParameters;
  };
}
export declare namespace Network {
  type ContinueWithAuthParameters = {
    request: Network.Request;
  } & (
    | Network.ContinueWithAuthCredentials
    | Network.ContinueWithAuthNoCredentials
  );
}
export declare namespace Network {
  type ContinueWithAuthCredentials = {
    action: 'provideCredentials';
    credentials: Network.AuthCredentials;
  };
}
export declare namespace Network {
  type ContinueWithAuthNoCredentials = {
    action: 'default' | 'cancel';
  };
}
export declare namespace Network {
  type ContinueWithAuthResult = EmptyResult;
}
export declare namespace Network {
  type DisownData = {
    method: 'network.disownData';
    params: Network.DisownDataParameters;
  };
}
export declare namespace Network {
  type DisownDataParameters = {
    dataType: Network.DataType;
    collector: Network.Collector;
    request: Network.Request;
  };
}
export declare namespace Network {
  type DisownDataResult = EmptyResult;
}
export declare namespace Network {
  type FailRequest = {
    method: 'network.failRequest';
    params: Network.FailRequestParameters;
  };
}
export declare namespace Network {
  type FailRequestParameters = {
    request: Network.Request;
  };
}
export declare namespace Network {
  type FailRequestResult = EmptyResult;
}
export declare namespace Network {
  type GetData = {
    method: 'network.getData';
    params: Network.GetDataParameters;
  };
}
export declare namespace Network {
  type GetDataParameters = {
    dataType: Network.DataType;
    collector?: Network.Collector;
    /**
     * @defaultValue `false`
     */
    disown?: boolean;
    request: Network.Request;
  };
}
export declare namespace Network {
  type GetDataResult = {
    bytes: Network.BytesValue;
  };
}
export declare namespace Network {
  type ProvideResponse = {
    method: 'network.provideResponse';
    params: Network.ProvideResponseParameters;
  };
}
export declare namespace Network {
  type ProvideResponseParameters = {
    request: Network.Request;
    body?: Network.BytesValue;
    cookies?: [...Network.SetCookieHeader[]];
    headers?: [...Network.Header[]];
    reasonPhrase?: string;
    statusCode?: JsUint;
  };
}
export declare namespace Network {
  type ProvideResponseResult = EmptyResult;
}
export declare namespace Network {
  type RemoveDataCollector = {
    method: 'network.removeDataCollector';
    params: Network.RemoveDataCollectorParameters;
  };
}
export declare namespace Network {
  type RemoveDataCollectorParameters = {
    collector: Network.Collector;
  };
}
export declare namespace Network {
  type RemoveDataCollectorResult = EmptyResult;
}
export declare namespace Network {
  type RemoveIntercept = {
    method: 'network.removeIntercept';
    params: Network.RemoveInterceptParameters;
  };
}
export declare namespace Network {
  type RemoveInterceptParameters = {
    intercept: Network.Intercept;
  };
}
export declare namespace Network {
  type RemoveInterceptResult = EmptyResult;
}
export declare namespace Network {
  type SetCacheBehavior = {
    method: 'network.setCacheBehavior';
    params: Network.SetCacheBehaviorParameters;
  };
}
export declare namespace Network {
  type SetCacheBehaviorParameters = {
    cacheBehavior: 'default' | 'bypass';
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
  };
}
export declare namespace Network {
  type SetCacheBehaviorResult = EmptyResult;
}
export declare namespace Network {
  type SetExtraHeaders = {
    method: 'network.setExtraHeaders';
    params: Network.SetExtraHeadersParameters;
  };
}
export declare namespace Network {
  type SetExtraHeadersParameters = {
    headers: [...Network.Header[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export declare namespace Network {
  type SetExtraHeadersResult = EmptyResult;
}
export declare namespace Network {
  type AuthRequired = {
    method: 'network.authRequired';
    params: Network.AuthRequiredParameters;
  };
}
export declare namespace Network {
  type AuthRequiredParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export declare namespace Network {
  type BeforeRequestSent = {
    method: 'network.beforeRequestSent';
    params: Network.BeforeRequestSentParameters;
  };
}
export declare namespace Network {
  type BeforeRequestSentParameters = Network.BaseParameters & {
    initiator?: Network.Initiator;
  };
}
export declare namespace Network {
  type FetchError = {
    method: 'network.fetchError';
    params: Network.FetchErrorParameters;
  };
}
export declare namespace Network {
  type FetchErrorParameters = Network.BaseParameters & {
    errorText: string;
  };
}
export declare namespace Network {
  type ResponseCompleted = {
    method: 'network.responseCompleted';
    params: Network.ResponseCompletedParameters;
  };
}
export declare namespace Network {
  type ResponseCompletedParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export declare namespace Network {
  type ResponseStarted = {
    method: 'network.responseStarted';
    params: Network.ResponseStartedParameters;
  };
}
export declare namespace Network {
  type ResponseStartedParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export type ScriptCommand =
  | Script.AddPreloadScript
  | Script.CallFunction
  | Script.Disown
  | Script.Evaluate
  | Script.GetRealms
  | Script.RemovePreloadScript;
export type ScriptResult =
  | Script.AddPreloadScriptResult
  | Script.CallFunctionResult
  | Script.DisownResult
  | Script.EvaluateResult
  | Script.GetRealmsResult
  | Script.RemovePreloadScriptResult;
export type ScriptEvent =
  | Script.Message
  | Script.RealmCreated
  | Script.RealmDestroyed;
export declare namespace Script {
  type Channel = string;
}
export declare namespace Script {
  type ChannelValue = {
    type: 'channel';
    value: Script.ChannelProperties;
  };
}
export declare namespace Script {
  type ChannelProperties = {
    channel: Script.Channel;
    serializationOptions?: Script.SerializationOptions;
    ownership?: Script.ResultOwnership;
  };
}
export declare namespace Script {
  type EvaluateResult =
    | Script.EvaluateResultSuccess
    | Script.EvaluateResultException;
}
export declare namespace Script {
  type EvaluateResultSuccess = {
    type: 'success';
    result: Script.RemoteValue;
    realm: Script.Realm;
  };
}
export declare namespace Script {
  type EvaluateResultException = {
    type: 'exception';
    exceptionDetails: Script.ExceptionDetails;
    realm: Script.Realm;
  };
}
export declare namespace Script {
  type ExceptionDetails = {
    columnNumber: JsUint;
    exception: Script.RemoteValue;
    lineNumber: JsUint;
    stackTrace: Script.StackTrace;
    text: string;
  };
}
export declare namespace Script {
  type Handle = string;
}
export declare namespace Script {
  type InternalId = string;
}
export declare namespace Script {
  type LocalValue =
    | Script.RemoteReference
    | Script.PrimitiveProtocolValue
    | Script.ChannelValue
    | Script.ArrayLocalValue
    | Script.DateLocalValue
    | Script.MapLocalValue
    | Script.ObjectLocalValue
    | Script.RegExpLocalValue
    | Script.SetLocalValue;
}
export declare namespace Script {
  type ListLocalValue = [...Script.LocalValue[]];
}
export declare namespace Script {
  type ArrayLocalValue = {
    type: 'array';
    value: Script.ListLocalValue;
  };
}
export declare namespace Script {
  type DateLocalValue = {
    type: 'date';
    value: string;
  };
}
export declare namespace Script {
  type MappingLocalValue = [
    ...[Script.LocalValue | string, Script.LocalValue][],
  ];
}
export declare namespace Script {
  type MapLocalValue = {
    type: 'map';
    value: Script.MappingLocalValue;
  };
}
export declare namespace Script {
  type ObjectLocalValue = {
    type: 'object';
    value: Script.MappingLocalValue;
  };
}
export declare namespace Script {
  type RegExpValue = {
    pattern: string;
    flags?: string;
  };
}
export declare namespace Script {
  type RegExpLocalValue = {
    type: 'regexp';
    value: Script.RegExpValue;
  };
}
export declare namespace Script {
  type SetLocalValue = {
    type: 'set';
    value: Script.ListLocalValue;
  };
}
export declare namespace Script {
  type PreloadScript = string;
}
export declare namespace Script {
  type Realm = string;
}
export declare namespace Script {
  type PrimitiveProtocolValue =
    | Script.UndefinedValue
    | Script.NullValue
    | Script.StringValue
    | Script.NumberValue
    | Script.BooleanValue
    | Script.BigIntValue;
}
export declare namespace Script {
  type UndefinedValue = {
    type: 'undefined';
  };
}
export declare namespace Script {
  type NullValue = {
    type: 'null';
  };
}
export declare namespace Script {
  type StringValue = {
    type: 'string';
    value: string;
  };
}
export declare namespace Script {
  type SpecialNumber = 'NaN' | '-0' | 'Infinity' | '-Infinity';
}
export declare namespace Script {
  type NumberValue = {
    type: 'number';
    value: number | Script.SpecialNumber;
  };
}
export declare namespace Script {
  type BooleanValue = {
    type: 'boolean';
    value: boolean;
  };
}
export declare namespace Script {
  type BigIntValue = {
    type: 'bigint';
    value: string;
  };
}
export declare namespace Script {
  type RealmInfo =
    | Script.WindowRealmInfo
    | Script.DedicatedWorkerRealmInfo
    | Script.SharedWorkerRealmInfo
    | Script.ServiceWorkerRealmInfo
    | Script.WorkerRealmInfo
    | Script.PaintWorkletRealmInfo
    | Script.AudioWorkletRealmInfo
    | Script.WorkletRealmInfo;
}
export declare namespace Script {
  type BaseRealmInfo = {
    realm: Script.Realm;
    origin: string;
  };
}
export declare namespace Script {
  type WindowRealmInfo = Script.BaseRealmInfo & {
    type: 'window';
    context: BrowsingContext.BrowsingContext;
    sandbox?: string;
  };
}
export declare namespace Script {
  type DedicatedWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'dedicated-worker';
    owners: [Script.Realm];
  };
}
export declare namespace Script {
  type SharedWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'shared-worker';
  };
}
export declare namespace Script {
  type ServiceWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'service-worker';
  };
}
export declare namespace Script {
  type WorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'worker';
  };
}
export declare namespace Script {
  type PaintWorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'paint-worklet';
  };
}
export declare namespace Script {
  type AudioWorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'audio-worklet';
  };
}
export declare namespace Script {
  type WorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'worklet';
  };
}
export declare namespace Script {
  type RealmType =
    | 'window'
    | 'dedicated-worker'
    | 'shared-worker'
    | 'service-worker'
    | 'worker'
    | 'paint-worklet'
    | 'audio-worklet'
    | 'worklet';
}
export declare namespace Script {
  type RemoteReference = Script.SharedReference | Script.RemoteObjectReference;
}
export declare namespace Script {
  type SharedReference = {
    sharedId: Script.SharedId;
    handle?: Script.Handle;
  } & Extensible;
}
export declare namespace Script {
  type RemoteObjectReference = {
    handle: Script.Handle;
    sharedId?: Script.SharedId;
  } & Extensible;
}
export declare namespace Script {
  type RemoteValue =
    | Script.PrimitiveProtocolValue
    | Script.SymbolRemoteValue
    | Script.ArrayRemoteValue
    | Script.ObjectRemoteValue
    | Script.FunctionRemoteValue
    | Script.RegExpRemoteValue
    | Script.DateRemoteValue
    | Script.MapRemoteValue
    | Script.SetRemoteValue
    | Script.WeakMapRemoteValue
    | Script.WeakSetRemoteValue
    | Script.GeneratorRemoteValue
    | Script.ErrorRemoteValue
    | Script.ProxyRemoteValue
    | Script.PromiseRemoteValue
    | Script.TypedArrayRemoteValue
    | Script.ArrayBufferRemoteValue
    | Script.NodeListRemoteValue
    | Script.HtmlCollectionRemoteValue
    | Script.NodeRemoteValue
    | Script.WindowProxyRemoteValue;
}
export declare namespace Script {
  type ListRemoteValue = [...Script.RemoteValue[]];
}
export declare namespace Script {
  type MappingRemoteValue = [
    ...[Script.RemoteValue | string, Script.RemoteValue][],
  ];
}
export declare namespace Script {
  type SymbolRemoteValue = {
    type: 'symbol';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type ArrayRemoteValue = {
    type: 'array';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export declare namespace Script {
  type ObjectRemoteValue = {
    type: 'object';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.MappingRemoteValue;
  };
}
export declare namespace Script {
  type FunctionRemoteValue = {
    type: 'function';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type RegExpRemoteValue = Script.RegExpLocalValue & {
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type DateRemoteValue = Script.DateLocalValue & {
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type MapRemoteValue = {
    type: 'map';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.MappingRemoteValue;
  };
}
export declare namespace Script {
  type SetRemoteValue = {
    type: 'set';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export declare namespace Script {
  type WeakMapRemoteValue = {
    type: 'weakmap';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type WeakSetRemoteValue = {
    type: 'weakset';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type GeneratorRemoteValue = {
    type: 'generator';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type ErrorRemoteValue = {
    type: 'error';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type ProxyRemoteValue = {
    type: 'proxy';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type PromiseRemoteValue = {
    type: 'promise';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type TypedArrayRemoteValue = {
    type: 'typedarray';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type ArrayBufferRemoteValue = {
    type: 'arraybuffer';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type NodeListRemoteValue = {
    type: 'nodelist';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export declare namespace Script {
  type HtmlCollectionRemoteValue = {
    type: 'htmlcollection';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export declare namespace Script {
  type NodeRemoteValue = {
    type: 'node';
    sharedId?: Script.SharedId;
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.NodeProperties;
  };
}
export declare namespace Script {
  type NodeProperties = {
    nodeType: JsUint;
    childNodeCount: JsUint;
    attributes?: {
      [key: string]: string;
    };
    children?: [...Script.NodeRemoteValue[]];
    localName?: string;
    mode?: 'open' | 'closed';
    namespaceURI?: string;
    nodeValue?: string;
    shadowRoot?: Script.NodeRemoteValue | null;
  };
}
export declare namespace Script {
  type WindowProxyRemoteValue = {
    type: 'window';
    value: Script.WindowProxyProperties;
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export declare namespace Script {
  type WindowProxyProperties = {
    context: BrowsingContext.BrowsingContext;
  };
}
export declare namespace Script {
  const enum ResultOwnership {
    Root = 'root',
    None = 'none',
  }
}
export declare namespace Script {
  type SerializationOptions = {
    /**
     * @defaultValue `0`
     */
    maxDomDepth?: JsUint | null;
    /**
     * @defaultValue `null`
     */
    maxObjectDepth?: JsUint | null;
    /**
     * @defaultValue `"none"`
     */
    includeShadowTree?: 'none' | 'open' | 'all';
  };
}
export declare namespace Script {
  type SharedId = string;
}
export declare namespace Script {
  type StackFrame = {
    columnNumber: JsUint;
    functionName: string;
    lineNumber: JsUint;
    url: string;
  };
}
export declare namespace Script {
  type StackTrace = {
    callFrames: [...Script.StackFrame[]];
  };
}
export declare namespace Script {
  type Source = {
    realm: Script.Realm;
    context?: BrowsingContext.BrowsingContext;
  };
}
export declare namespace Script {
  type RealmTarget = {
    realm: Script.Realm;
  };
}
export declare namespace Script {
  type ContextTarget = {
    context: BrowsingContext.BrowsingContext;
    sandbox?: string;
  };
}
export declare namespace Script {
  type Target = Script.ContextTarget | Script.RealmTarget;
}
export declare namespace Script {
  type AddPreloadScript = {
    method: 'script.addPreloadScript';
    params: Script.AddPreloadScriptParameters;
  };
}
export declare namespace Script {
  type AddPreloadScriptParameters = {
    functionDeclaration: string;
    arguments?: [...Script.ChannelValue[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
    sandbox?: string;
  };
}
export declare namespace Script {
  type AddPreloadScriptResult = {
    script: Script.PreloadScript;
  };
}
export declare namespace Script {
  type Disown = {
    method: 'script.disown';
    params: Script.DisownParameters;
  };
}
export declare namespace Script {
  type DisownParameters = {
    handles: [...Script.Handle[]];
    target: Script.Target;
  };
}
export declare namespace Script {
  type DisownResult = EmptyResult;
}
export declare namespace Script {
  type CallFunction = {
    method: 'script.callFunction';
    params: Script.CallFunctionParameters;
  };
}
export declare namespace Script {
  type CallFunctionParameters = {
    functionDeclaration: string;
    awaitPromise: boolean;
    target: Script.Target;
    arguments?: [...Script.LocalValue[]];
    resultOwnership?: Script.ResultOwnership;
    serializationOptions?: Script.SerializationOptions;
    this?: Script.LocalValue;
    /**
     * @defaultValue `false`
     */
    userActivation?: boolean;
  };
}
export declare namespace Script {
  type CallFunctionResult = Script.EvaluateResult;
}
export declare namespace Script {
  type Evaluate = {
    method: 'script.evaluate';
    params: Script.EvaluateParameters;
  };
}
export declare namespace Script {
  type EvaluateParameters = {
    expression: string;
    target: Script.Target;
    awaitPromise: boolean;
    resultOwnership?: Script.ResultOwnership;
    serializationOptions?: Script.SerializationOptions;
    /**
     * @defaultValue `false`
     */
    userActivation?: boolean;
  };
}
export declare namespace Script {
  type GetRealms = {
    method: 'script.getRealms';
    params: Script.GetRealmsParameters;
  };
}
export declare namespace Script {
  type GetRealmsParameters = {
    context?: BrowsingContext.BrowsingContext;
    type?: Script.RealmType;
  };
}
export declare namespace Script {
  type GetRealmsResult = {
    realms: [...Script.RealmInfo[]];
  };
}
export declare namespace Script {
  type RemovePreloadScript = {
    method: 'script.removePreloadScript';
    params: Script.RemovePreloadScriptParameters;
  };
}
export declare namespace Script {
  type RemovePreloadScriptParameters = {
    script: Script.PreloadScript;
  };
}
export declare namespace Script {
  type RemovePreloadScriptResult = EmptyResult;
}
export declare namespace Script {
  type Message = {
    method: 'script.message';
    params: Script.MessageParameters;
  };
}
export declare namespace Script {
  type MessageParameters = {
    channel: Script.Channel;
    data: Script.RemoteValue;
    source: Script.Source;
  };
}
export declare namespace Script {
  type RealmCreated = {
    method: 'script.realmCreated';
    params: Script.RealmInfo;
  };
}
export declare namespace Script {
  type RealmDestroyed = {
    method: 'script.realmDestroyed';
    params: Script.RealmDestroyedParameters;
  };
}
export declare namespace Script {
  type RealmDestroyedParameters = {
    realm: Script.Realm;
  };
}
export type StorageCommand =
  | Storage.DeleteCookies
  | Storage.GetCookies
  | Storage.SetCookie;
export type StorageResult =
  | Storage.DeleteCookiesResult
  | Storage.GetCookiesResult
  | Storage.SetCookieResult;
export declare namespace Storage {
  type PartitionKey = {
    userContext?: string;
    sourceOrigin?: string;
  } & Extensible;
}
export declare namespace Storage {
  type GetCookies = {
    method: 'storage.getCookies';
    params: Storage.GetCookiesParameters;
  };
}
export declare namespace Storage {
  type CookieFilter = {
    name?: string;
    value?: Network.BytesValue;
    domain?: string;
    path?: string;
    size?: JsUint;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: Network.SameSite;
    expiry?: JsUint;
  } & Extensible;
}
export declare namespace Storage {
  type BrowsingContextPartitionDescriptor = {
    type: 'context';
    context: BrowsingContext.BrowsingContext;
  };
}
export declare namespace Storage {
  type StorageKeyPartitionDescriptor = {
    type: 'storageKey';
    userContext?: string;
    sourceOrigin?: string;
  } & Extensible;
}
export declare namespace Storage {
  type PartitionDescriptor =
    | Storage.BrowsingContextPartitionDescriptor
    | Storage.StorageKeyPartitionDescriptor;
}
export declare namespace Storage {
  type GetCookiesParameters = {
    filter?: Storage.CookieFilter;
    partition?: Storage.PartitionDescriptor;
  };
}
export declare namespace Storage {
  type GetCookiesResult = {
    cookies: [...Network.Cookie[]];
    partitionKey: Storage.PartitionKey;
  };
}
export declare namespace Storage {
  type SetCookie = {
    method: 'storage.setCookie';
    params: Storage.SetCookieParameters;
  };
}
export declare namespace Storage {
  type PartialCookie = {
    name: string;
    value: Network.BytesValue;
    domain: string;
    path?: string;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: Network.SameSite;
    expiry?: JsUint;
  } & Extensible;
}
export declare namespace Storage {
  type SetCookieParameters = {
    cookie: Storage.PartialCookie;
    partition?: Storage.PartitionDescriptor;
  };
}
export declare namespace Storage {
  type SetCookieResult = {
    partitionKey: Storage.PartitionKey;
  };
}
export declare namespace Storage {
  type DeleteCookies = {
    method: 'storage.deleteCookies';
    params: Storage.DeleteCookiesParameters;
  };
}
export declare namespace Storage {
  type DeleteCookiesParameters = {
    filter?: Storage.CookieFilter;
    partition?: Storage.PartitionDescriptor;
  };
}
export declare namespace Storage {
  type DeleteCookiesResult = {
    partitionKey: Storage.PartitionKey;
  };
}
export type LogEvent = Log.EntryAdded;
export declare namespace Log {
  const enum Level {
    Debug = 'debug',
    Info = 'info',
    Warn = 'warn',
    Error = 'error',
  }
}
export declare namespace Log {
  type Entry =
    | Log.GenericLogEntry
    | Log.ConsoleLogEntry
    | Log.JavascriptLogEntry;
}
export declare namespace Log {
  type BaseLogEntry = {
    level: Log.Level;
    source: Script.Source;
    text: string | null;
    timestamp: JsUint;
    stackTrace?: Script.StackTrace;
  };
}
export declare namespace Log {
  type GenericLogEntry = Log.BaseLogEntry & {
    type: string;
  };
}
export declare namespace Log {
  type ConsoleLogEntry = Log.BaseLogEntry & {
    type: 'console';
    method: string;
    args: [...Script.RemoteValue[]];
  };
}
export declare namespace Log {
  type JavascriptLogEntry = Log.BaseLogEntry & {
    type: 'javascript';
  };
}
export declare namespace Log {
  type EntryAdded = {
    method: 'log.entryAdded';
    params: Log.Entry;
  };
}
export type InputCommand =
  | Input.PerformActions
  | Input.ReleaseActions
  | Input.SetFiles;
export type InputResult =
  | Input.PerformActionsResult
  | Input.ReleaseActionsResult
  | Input.SetFilesResult;
export type InputEvent = Input.FileDialogOpened;
export declare namespace Input {
  type ElementOrigin = {
    type: 'element';
    element: Script.SharedReference;
  };
}
export declare namespace Input {
  type PerformActions = {
    method: 'input.performActions';
    params: Input.PerformActionsParameters;
  };
}
export declare namespace Input {
  type PerformActionsParameters = {
    context: BrowsingContext.BrowsingContext;
    actions: [...Input.SourceActions[]];
  };
}
export declare namespace Input {
  type SourceActions =
    | Input.NoneSourceActions
    | Input.KeySourceActions
    | Input.PointerSourceActions
    | Input.WheelSourceActions;
}
export declare namespace Input {
  type NoneSourceActions = {
    type: 'none';
    id: string;
    actions: [...Input.NoneSourceAction[]];
  };
}
export declare namespace Input {
  type NoneSourceAction = Input.PauseAction;
}
export declare namespace Input {
  type KeySourceActions = {
    type: 'key';
    id: string;
    actions: [...Input.KeySourceAction[]];
  };
}
export declare namespace Input {
  type KeySourceAction =
    | Input.PauseAction
    | Input.KeyDownAction
    | Input.KeyUpAction;
}
export declare namespace Input {
  type PointerSourceActions = {
    type: 'pointer';
    id: string;
    parameters?: Input.PointerParameters;
    actions: [...Input.PointerSourceAction[]];
  };
}
export declare namespace Input {
  const enum PointerType {
    Mouse = 'mouse',
    Pen = 'pen',
    Touch = 'touch',
  }
}
export declare namespace Input {
  type PointerParameters = {
    /**
     * @defaultValue `"mouse"`
     */
    pointerType?: Input.PointerType;
  };
}
export declare namespace Input {
  type PointerSourceAction =
    | Input.PauseAction
    | Input.PointerDownAction
    | Input.PointerUpAction
    | Input.PointerMoveAction;
}
export declare namespace Input {
  type WheelSourceActions = {
    type: 'wheel';
    id: string;
    actions: [...Input.WheelSourceAction[]];
  };
}
export declare namespace Input {
  type WheelSourceAction = Input.PauseAction | Input.WheelScrollAction;
}
export declare namespace Input {
  type PauseAction = {
    type: 'pause';
    duration?: JsUint;
  };
}
export declare namespace Input {
  type KeyDownAction = {
    type: 'keyDown';
    value: string;
  };
}
export declare namespace Input {
  type KeyUpAction = {
    type: 'keyUp';
    value: string;
  };
}
export declare namespace Input {
  type PointerUpAction = {
    type: 'pointerUp';
    button: JsUint;
  };
}
export declare namespace Input {
  type PointerDownAction = {
    type: 'pointerDown';
    button: JsUint;
  } & Input.PointerCommonProperties;
}
export declare namespace Input {
  type PointerMoveAction = {
    type: 'pointerMove';
    x: number;
    y: number;
    duration?: JsUint;
    origin?: Input.Origin;
  } & Input.PointerCommonProperties;
}
export declare namespace Input {
  type WheelScrollAction = {
    type: 'scroll';
    x: JsInt;
    y: JsInt;
    deltaX: JsInt;
    deltaY: JsInt;
    duration?: JsUint;
    /**
     * @defaultValue `"viewport"`
     */
    origin?: Input.Origin;
  };
}
export declare namespace Input {
  type PointerCommonProperties = {
    /**
     * @defaultValue `1`
     */
    width?: JsUint;
    /**
     * @defaultValue `1`
     */
    height?: JsUint;
    /**
     * @defaultValue `0`
     */
    pressure?: number;
    /**
     * @defaultValue `0`
     */
    tangentialPressure?: number;
    /**
     * Must be between `0` and `359`, inclusive.
     *
     * @defaultValue `0`
     */
    twist?: number;
    /**
     * Must be between `0` and `1.5707963267948966`, inclusive.
     *
     * @defaultValue `0`
     */
    altitudeAngle?: number;
    /**
     * Must be between `0` and `6.283185307179586`, inclusive.
     *
     * @defaultValue `0`
     */
    azimuthAngle?: number;
  };
}
export declare namespace Input {
  type Origin = 'viewport' | 'pointer' | Input.ElementOrigin;
}
export declare namespace Input {
  type PerformActionsResult = EmptyResult;
}
export declare namespace Input {
  type ReleaseActions = {
    method: 'input.releaseActions';
    params: Input.ReleaseActionsParameters;
  };
}
export declare namespace Input {
  type ReleaseActionsParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
export declare namespace Input {
  type ReleaseActionsResult = EmptyResult;
}
export declare namespace Input {
  type SetFiles = {
    method: 'input.setFiles';
    params: Input.SetFilesParameters;
  };
}
export declare namespace Input {
  type SetFilesParameters = {
    context: BrowsingContext.BrowsingContext;
    element: Script.SharedReference;
    files: [...string[]];
  };
}
export declare namespace Input {
  type SetFilesResult = EmptyResult;
}
export declare namespace Input {
  type FileDialogOpened = {
    method: 'input.fileDialogOpened';
    params: Input.FileDialogInfo;
  };
}
export declare namespace Input {
  type FileDialogInfo = {
    context: BrowsingContext.BrowsingContext;
    element?: Script.SharedReference;
    multiple: boolean;
  };
}
export type WebExtensionCommand = WebExtension.Install | WebExtension.Uninstall;
export type WebExtensionResult =
  | WebExtension.InstallResult
  | WebExtension.UninstallResult;
export declare namespace WebExtension {
  type Extension = string;
}
export declare namespace WebExtension {
  type Install = {
    method: 'webExtension.install';
    params: WebExtension.InstallParameters;
  };
}
export declare namespace WebExtension {
  type InstallParameters = {
    extensionData: WebExtension.ExtensionData;
  };
}
export declare namespace WebExtension {
  type ExtensionData =
    | WebExtension.ExtensionArchivePath
    | WebExtension.ExtensionBase64Encoded
    | WebExtension.ExtensionPath;
}
export declare namespace WebExtension {
  type ExtensionPath = {
    type: 'path';
    path: string;
  };
}
export declare namespace WebExtension {
  type ExtensionArchivePath = {
    type: 'archivePath';
    path: string;
  };
}
export declare namespace WebExtension {
  type ExtensionBase64Encoded = {
    type: 'base64';
    value: string;
  };
}
export declare namespace WebExtension {
  type InstallResult = {
    extension: WebExtension.Extension;
  };
}
export declare namespace WebExtension {
  type Uninstall = {
    method: 'webExtension.uninstall';
    params: WebExtension.UninstallParameters;
  };
}
export declare namespace WebExtension {
  type UninstallParameters = {
    extension: WebExtension.Extension;
  };
}
export declare namespace WebExtension {
  type UninstallResult = EmptyResult;
}
