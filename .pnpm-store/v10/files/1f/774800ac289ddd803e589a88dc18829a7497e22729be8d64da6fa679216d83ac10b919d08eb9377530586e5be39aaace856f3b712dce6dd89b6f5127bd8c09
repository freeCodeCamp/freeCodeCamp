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
export const enum ErrorCode {
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
export namespace Session {
  export type CapabilitiesRequest = {
    alwaysMatch?: Session.CapabilityRequest;
    firstMatch?: [...Session.CapabilityRequest[]];
  };
}
export namespace Session {
  export type CapabilityRequest = {
    acceptInsecureCerts?: boolean;
    browserName?: string;
    browserVersion?: string;
    platformName?: string;
    proxy?: Session.ProxyConfiguration;
    unhandledPromptBehavior?: Session.UserPromptHandler;
  } & Extensible;
}
export namespace Session {
  export type ProxyConfiguration =
    | Session.AutodetectProxyConfiguration
    | Session.DirectProxyConfiguration
    | Session.ManualProxyConfiguration
    | Session.PacProxyConfiguration
    | Session.SystemProxyConfiguration;
}
export namespace Session {
  export type AutodetectProxyConfiguration = {
    proxyType: 'autodetect';
  } & Extensible;
}
export namespace Session {
  export type DirectProxyConfiguration = {
    proxyType: 'direct';
  } & Extensible;
}
export namespace Session {
  export type ManualProxyConfiguration = {
    proxyType: 'manual';
    httpProxy?: string;
    sslProxy?: string;
  } & ({} | Session.SocksProxyConfiguration) & {
      noProxy?: [...string[]];
    } & Extensible;
}
export namespace Session {
  export type SocksProxyConfiguration = {
    socksProxy: string;
    /**
     * Must be between `0` and `255`, inclusive.
     */
    socksVersion: number;
  };
}
export namespace Session {
  export type PacProxyConfiguration = {
    proxyType: 'pac';
    proxyAutoconfigUrl: string;
  } & Extensible;
}
export namespace Session {
  export type SystemProxyConfiguration = {
    proxyType: 'system';
  } & Extensible;
}
export namespace Session {
  export type UserPromptHandler = {
    alert?: Session.UserPromptHandlerType;
    beforeUnload?: Session.UserPromptHandlerType;
    confirm?: Session.UserPromptHandlerType;
    default?: Session.UserPromptHandlerType;
    file?: Session.UserPromptHandlerType;
    prompt?: Session.UserPromptHandlerType;
  };
}
export namespace Session {
  export const enum UserPromptHandlerType {
    Accept = 'accept',
    Dismiss = 'dismiss',
    Ignore = 'ignore',
  }
}
export namespace Session {
  export type Subscription = string;
}
export namespace Session {
  export type SubscribeParameters = {
    events: [string, ...string[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Session {
  export type UnsubscribeByIdRequest = {
    subscriptions: [Session.Subscription, ...Session.Subscription[]];
  };
}
export namespace Session {
  export type UnsubscribeByAttributesRequest = {
    events: [string, ...string[]];
  };
}
export namespace Session {
  export type Status = {
    method: 'session.status';
    params: EmptyParams;
  };
}
export namespace Session {
  export type StatusResult = {
    ready: boolean;
    message: string;
  };
}
export namespace Session {
  export type New = {
    method: 'session.new';
    params: Session.NewParameters;
  };
}
export namespace Session {
  export type NewParameters = {
    capabilities: Session.CapabilitiesRequest;
  };
}
export namespace Session {
  export type NewResult = {
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
export namespace Session {
  export type End = {
    method: 'session.end';
    params: EmptyParams;
  };
}
export namespace Session {
  export type EndResult = EmptyResult;
}
export namespace Session {
  export type Subscribe = {
    method: 'session.subscribe';
    params: Session.SubscribeParameters;
  };
}
export namespace Session {
  export type SubscribeResult = {
    subscription: Session.Subscription;
  };
}
export namespace Session {
  export type Unsubscribe = {
    method: 'session.unsubscribe';
    params: Session.UnsubscribeParameters;
  };
}
export namespace Session {
  export type UnsubscribeParameters =
    | Session.UnsubscribeByAttributesRequest
    | Session.UnsubscribeByIdRequest;
}
export namespace Session {
  export type UnsubscribeResult = EmptyResult;
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
export namespace Browser {
  export type ClientWindow = string;
}
export namespace Browser {
  export type ClientWindowInfo = {
    active: boolean;
    clientWindow: Browser.ClientWindow;
    height: JsUint;
    state: 'fullscreen' | 'maximized' | 'minimized' | 'normal';
    width: JsUint;
    x: JsInt;
    y: JsInt;
  };
}
export namespace Browser {
  export type UserContext = string;
}
export namespace Browser {
  export type UserContextInfo = {
    userContext: Browser.UserContext;
  };
}
export namespace Browser {
  export type Close = {
    method: 'browser.close';
    params: EmptyParams;
  };
}
export namespace Browser {
  export type CloseResult = EmptyResult;
}
export namespace Browser {
  export type CreateUserContext = {
    method: 'browser.createUserContext';
    params: Browser.CreateUserContextParameters;
  };
}
export namespace Browser {
  export type CreateUserContextParameters = {
    acceptInsecureCerts?: boolean;
    proxy?: Session.ProxyConfiguration;
    unhandledPromptBehavior?: Session.UserPromptHandler;
  };
}
export namespace Browser {
  export type CreateUserContextResult = Browser.UserContextInfo;
}
export namespace Browser {
  export type GetClientWindows = {
    method: 'browser.getClientWindows';
    params: EmptyParams;
  };
}
export namespace Browser {
  export type GetClientWindowsResult = {
    clientWindows: [...Browser.ClientWindowInfo[]];
  };
}
export namespace Browser {
  export type GetUserContexts = {
    method: 'browser.getUserContexts';
    params: EmptyParams;
  };
}
export namespace Browser {
  export type GetUserContextsResult = {
    userContexts: [Browser.UserContextInfo, ...Browser.UserContextInfo[]];
  };
}
export namespace Browser {
  export type RemoveUserContext = {
    method: 'browser.removeUserContext';
    params: Browser.RemoveUserContextParameters;
  };
}
export namespace Browser {
  export type RemoveUserContextParameters = {
    userContext: Browser.UserContext;
  };
}
export namespace Browser {
  export type RemoveUserContextResult = EmptyResult;
}
export namespace Browser {
  export type SetClientWindowState = {
    method: 'browser.setClientWindowState';
    params: Browser.SetClientWindowStateParameters;
  };
}
export namespace Browser {
  export type SetClientWindowStateParameters = {
    clientWindow: Browser.ClientWindow;
  } & (Browser.ClientWindowNamedState | Browser.ClientWindowRectState);
}
export namespace Browser {
  export type ClientWindowNamedState = {
    state: 'fullscreen' | 'maximized' | 'minimized';
  };
}
export namespace Browser {
  export type ClientWindowRectState = {
    state: 'normal';
    width?: JsUint;
    height?: JsUint;
    x?: JsInt;
    y?: JsInt;
  };
}
export namespace Browser {
  export type SetClientWindowStateResult = Browser.ClientWindowInfo;
}
export namespace Browser {
  export type SetDownloadBehavior = {
    method: 'browser.setDownloadBehavior';
    params: Browser.SetDownloadBehaviorParameters;
  };
}
export namespace Browser {
  export type SetDownloadBehaviorParameters = {
    downloadBehavior: Browser.DownloadBehavior | null;
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Browser {
  export type DownloadBehavior =
    | Browser.DownloadBehaviorAllowed
    | Browser.DownloadBehaviorDenied;
}
export namespace Browser {
  export type DownloadBehaviorAllowed = {
    type: 'allowed';
    destinationFolder: string;
  };
}
export namespace Browser {
  export type DownloadBehaviorDenied = {
    type: 'denied';
  };
}
export namespace Browser {
  export type SetDownloadBehaviorResult = EmptyResult;
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
export namespace BrowsingContext {
  export type BrowsingContext = string;
}
export namespace BrowsingContext {
  export type InfoList = [...BrowsingContext.Info[]];
}
export namespace BrowsingContext {
  export type Info = {
    children: BrowsingContext.InfoList | null;
    clientWindow: Browser.ClientWindow;
    context: BrowsingContext.BrowsingContext;
    originalOpener: BrowsingContext.BrowsingContext | null;
    url: string;
    userContext: Browser.UserContext;
    parent?: BrowsingContext.BrowsingContext | null;
  };
}
export namespace BrowsingContext {
  export type Locator =
    | BrowsingContext.AccessibilityLocator
    | BrowsingContext.CssLocator
    | BrowsingContext.ContextLocator
    | BrowsingContext.InnerTextLocator
    | BrowsingContext.XPathLocator;
}
export namespace BrowsingContext {
  export type AccessibilityLocator = {
    type: 'accessibility';
    value: {
      name?: string;
      role?: string;
    };
  };
}
export namespace BrowsingContext {
  export type CssLocator = {
    type: 'css';
    value: string;
  };
}
export namespace BrowsingContext {
  export type ContextLocator = {
    type: 'context';
    value: {
      context: BrowsingContext.BrowsingContext;
    };
  };
}
export namespace BrowsingContext {
  export type InnerTextLocator = {
    type: 'innerText';
    value: string;
    ignoreCase?: boolean;
    matchType?: 'full' | 'partial';
    maxDepth?: JsUint;
  };
}
export namespace BrowsingContext {
  export type XPathLocator = {
    type: 'xpath';
    value: string;
  };
}
export namespace BrowsingContext {
  export type Navigation = string;
}
export namespace BrowsingContext {
  export type BaseNavigationInfo = {
    context: BrowsingContext.BrowsingContext;
    navigation: BrowsingContext.Navigation | null;
    timestamp: JsUint;
    url: string;
  };
}
export namespace BrowsingContext {
  export type NavigationInfo = BrowsingContext.BaseNavigationInfo;
}
export namespace BrowsingContext {
  export const enum ReadinessState {
    None = 'none',
    Interactive = 'interactive',
    Complete = 'complete',
  }
}
export namespace BrowsingContext {
  export const enum UserPromptType {
    Alert = 'alert',
    Beforeunload = 'beforeunload',
    Confirm = 'confirm',
    Prompt = 'prompt',
  }
}
export namespace BrowsingContext {
  export type Activate = {
    method: 'browsingContext.activate';
    params: BrowsingContext.ActivateParameters;
  };
}
export namespace BrowsingContext {
  export type ActivateParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type ActivateResult = EmptyResult;
}
export namespace BrowsingContext {
  export type CaptureScreenshot = {
    method: 'browsingContext.captureScreenshot';
    params: BrowsingContext.CaptureScreenshotParameters;
  };
}
export namespace BrowsingContext {
  export type CaptureScreenshotParameters = {
    context: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `"viewport"`
     */
    origin?: 'viewport' | 'document';
    format?: BrowsingContext.ImageFormat;
    clip?: BrowsingContext.ClipRectangle;
  };
}
export namespace BrowsingContext {
  export type ImageFormat = {
    type: string;
    /**
     * Must be between `0` and `1`, inclusive.
     */
    quality?: number;
  };
}
export namespace BrowsingContext {
  export type ClipRectangle =
    | BrowsingContext.BoxClipRectangle
    | BrowsingContext.ElementClipRectangle;
}
export namespace BrowsingContext {
  export type ElementClipRectangle = {
    type: 'element';
    element: Script.SharedReference;
  };
}
export namespace BrowsingContext {
  export type BoxClipRectangle = {
    type: 'box';
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
export namespace BrowsingContext {
  export type CaptureScreenshotResult = {
    data: string;
  };
}
export namespace BrowsingContext {
  export type Close = {
    method: 'browsingContext.close';
    params: BrowsingContext.CloseParameters;
  };
}
export namespace BrowsingContext {
  export type CloseParameters = {
    context: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    promptUnload?: boolean;
  };
}
export namespace BrowsingContext {
  export type CloseResult = EmptyResult;
}
export namespace BrowsingContext {
  export type Create = {
    method: 'browsingContext.create';
    params: BrowsingContext.CreateParameters;
  };
}
export namespace BrowsingContext {
  export const enum CreateType {
    Tab = 'tab',
    Window = 'window',
  }
}
export namespace BrowsingContext {
  export type CreateParameters = {
    type: BrowsingContext.CreateType;
    referenceContext?: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    background?: boolean;
    userContext?: Browser.UserContext;
  };
}
export namespace BrowsingContext {
  export type CreateResult = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type GetTree = {
    method: 'browsingContext.getTree';
    params: BrowsingContext.GetTreeParameters;
  };
}
export namespace BrowsingContext {
  export type GetTreeParameters = {
    maxDepth?: JsUint;
    root?: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type GetTreeResult = {
    contexts: BrowsingContext.InfoList;
  };
}
export namespace BrowsingContext {
  export type HandleUserPrompt = {
    method: 'browsingContext.handleUserPrompt';
    params: BrowsingContext.HandleUserPromptParameters;
  };
}
export namespace BrowsingContext {
  export type HandleUserPromptParameters = {
    context: BrowsingContext.BrowsingContext;
    accept?: boolean;
    userText?: string;
  };
}
export namespace BrowsingContext {
  export type HandleUserPromptResult = EmptyResult;
}
export namespace BrowsingContext {
  export type LocateNodes = {
    method: 'browsingContext.locateNodes';
    params: BrowsingContext.LocateNodesParameters;
  };
}
export namespace BrowsingContext {
  export type LocateNodesParameters = {
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
export namespace BrowsingContext {
  export type LocateNodesResult = {
    nodes: [...Script.NodeRemoteValue[]];
  };
}
export namespace BrowsingContext {
  export type Navigate = {
    method: 'browsingContext.navigate';
    params: BrowsingContext.NavigateParameters;
  };
}
export namespace BrowsingContext {
  export type NavigateParameters = {
    context: BrowsingContext.BrowsingContext;
    url: string;
    wait?: BrowsingContext.ReadinessState;
  };
}
export namespace BrowsingContext {
  export type NavigateResult = {
    navigation: BrowsingContext.Navigation | null;
    url: string;
  };
}
export namespace BrowsingContext {
  export type Print = {
    method: 'browsingContext.print';
    params: BrowsingContext.PrintParameters;
  };
}
export namespace BrowsingContext {
  export type PrintParameters = {
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
export namespace BrowsingContext {
  export type PrintMarginParameters = {
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
export namespace BrowsingContext {
  export type PrintPageParameters = {
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
export namespace BrowsingContext {
  export type PrintResult = {
    data: string;
  };
}
export namespace BrowsingContext {
  export type Reload = {
    method: 'browsingContext.reload';
    params: BrowsingContext.ReloadParameters;
  };
}
export namespace BrowsingContext {
  export type ReloadParameters = {
    context: BrowsingContext.BrowsingContext;
    ignoreCache?: boolean;
    wait?: BrowsingContext.ReadinessState;
  };
}
export namespace BrowsingContext {
  export type ReloadResult = BrowsingContext.NavigateResult;
}
export namespace BrowsingContext {
  export type SetViewport = {
    method: 'browsingContext.setViewport';
    params: BrowsingContext.SetViewportParameters;
  };
}
export namespace BrowsingContext {
  export type SetViewportParameters = {
    context?: BrowsingContext.BrowsingContext;
    viewport?: BrowsingContext.Viewport | null;
    /**
     * Must be greater than `0`.
     */
    devicePixelRatio?: number | null;
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace BrowsingContext {
  export type Viewport = {
    width: JsUint;
    height: JsUint;
  };
}
export namespace BrowsingContext {
  export type SetViewportResult = EmptyResult;
}
export namespace BrowsingContext {
  export type TraverseHistory = {
    method: 'browsingContext.traverseHistory';
    params: BrowsingContext.TraverseHistoryParameters;
  };
}
export namespace BrowsingContext {
  export type TraverseHistoryParameters = {
    context: BrowsingContext.BrowsingContext;
    delta: JsInt;
  };
}
export namespace BrowsingContext {
  export type TraverseHistoryResult = EmptyResult;
}
export namespace BrowsingContext {
  export type ContextCreated = {
    method: 'browsingContext.contextCreated';
    params: BrowsingContext.Info;
  };
}
export namespace BrowsingContext {
  export type ContextDestroyed = {
    method: 'browsingContext.contextDestroyed';
    params: BrowsingContext.Info;
  };
}
export namespace BrowsingContext {
  export type NavigationStarted = {
    method: 'browsingContext.navigationStarted';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type FragmentNavigated = {
    method: 'browsingContext.fragmentNavigated';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type HistoryUpdated = {
    method: 'browsingContext.historyUpdated';
    params: BrowsingContext.HistoryUpdatedParameters;
  };
}
export namespace BrowsingContext {
  export type HistoryUpdatedParameters = {
    context: BrowsingContext.BrowsingContext;
    timestamp: JsUint;
    url: string;
  };
}
export namespace BrowsingContext {
  export type DomContentLoaded = {
    method: 'browsingContext.domContentLoaded';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type Load = {
    method: 'browsingContext.load';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type DownloadWillBegin = {
    method: 'browsingContext.downloadWillBegin';
    params: BrowsingContext.DownloadWillBeginParams;
  };
}
export namespace BrowsingContext {
  export type DownloadWillBeginParams = {
    suggestedFilename: string;
  } & BrowsingContext.BaseNavigationInfo;
}
export namespace BrowsingContext {
  export type DownloadEnd = {
    method: 'browsingContext.downloadEnd';
    params: BrowsingContext.DownloadEndParams;
  };
}
export namespace BrowsingContext {
  export type DownloadEndParams =
    | BrowsingContext.DownloadCanceledParams
    | BrowsingContext.DownloadCompleteParams;
}
export namespace BrowsingContext {
  export type DownloadCanceledParams = {
    status: 'canceled';
  } & BrowsingContext.BaseNavigationInfo;
}
export namespace BrowsingContext {
  export type DownloadCompleteParams = {
    status: 'complete';
    filepath: string | null;
  } & BrowsingContext.BaseNavigationInfo;
}
export namespace BrowsingContext {
  export type NavigationAborted = {
    method: 'browsingContext.navigationAborted';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type NavigationCommitted = {
    method: 'browsingContext.navigationCommitted';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type NavigationFailed = {
    method: 'browsingContext.navigationFailed';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type UserPromptClosed = {
    method: 'browsingContext.userPromptClosed';
    params: BrowsingContext.UserPromptClosedParameters;
  };
}
export namespace BrowsingContext {
  export type UserPromptClosedParameters = {
    context: BrowsingContext.BrowsingContext;
    accepted: boolean;
    type: BrowsingContext.UserPromptType;
    userText?: string;
  };
}
export namespace BrowsingContext {
  export type UserPromptOpened = {
    method: 'browsingContext.userPromptOpened';
    params: BrowsingContext.UserPromptOpenedParameters;
  };
}
export namespace BrowsingContext {
  export type UserPromptOpenedParameters = {
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
export namespace Emulation {
  export type SetForcedColorsModeThemeOverride = {
    method: 'emulation.setForcedColorsModeThemeOverride';
    params: Emulation.SetForcedColorsModeThemeOverrideParameters;
  };
}
export namespace Emulation {
  export type SetForcedColorsModeThemeOverrideParameters = {
    theme: Emulation.ForcedColorsModeTheme | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export const enum ForcedColorsModeTheme {
    Light = 'light',
    Dark = 'dark',
  }
}
export namespace Emulation {
  export type SetForcedColorsModeThemeOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetGeolocationOverride = {
    method: 'emulation.setGeolocationOverride';
    params: Emulation.SetGeolocationOverrideParameters;
  };
}
export namespace Emulation {
  export type SetGeolocationOverrideParameters = (
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
export namespace Emulation {
  export type GeolocationCoordinates = {
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
export namespace Emulation {
  export type GeolocationPositionError = {
    type: 'positionUnavailable';
  };
}
export namespace Emulation {
  export type SetGeolocationOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetLocaleOverride = {
    method: 'emulation.setLocaleOverride';
    params: Emulation.SetLocaleOverrideParameters;
  };
}
export namespace Emulation {
  export type SetLocaleOverrideParameters = {
    locale: string | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type SetLocaleOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetNetworkConditions = {
    method: 'emulation.setNetworkConditions';
    params: Emulation.SetNetworkConditionsParameters;
  };
}
export namespace Emulation {
  export type SetNetworkConditionsParameters = {
    networkConditions: Emulation.NetworkConditions | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type NetworkConditions = Emulation.NetworkConditionsOffline;
}
export namespace Emulation {
  export type NetworkConditionsOffline = {
    type: 'offline';
  };
}
export namespace Emulation {
  export type SetNetworkConditionsResult = EmptyResult;
}
export namespace Emulation {
  export type SetScreenSettingsOverride = {
    method: 'emulation.setScreenSettingsOverride';
    params: Emulation.SetScreenSettingsOverrideParameters;
  };
}
export namespace Emulation {
  export type ScreenArea = {
    width: JsUint;
    height: JsUint;
  };
}
export namespace Emulation {
  export type SetScreenSettingsOverrideParameters = {
    screenArea: Emulation.ScreenArea | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type SetScreenSettingsOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetScreenOrientationOverride = {
    method: 'emulation.setScreenOrientationOverride';
    params: Emulation.SetScreenOrientationOverrideParameters;
  };
}
export namespace Emulation {
  export const enum ScreenOrientationNatural {
    Portrait = 'portrait',
    Landscape = 'landscape',
  }
}
export namespace Emulation {
  export type ScreenOrientationType =
    | 'portrait-primary'
    | 'portrait-secondary'
    | 'landscape-primary'
    | 'landscape-secondary';
}
export namespace Emulation {
  export type ScreenOrientation = {
    natural: Emulation.ScreenOrientationNatural;
    type: Emulation.ScreenOrientationType;
  };
}
export namespace Emulation {
  export type SetScreenOrientationOverrideParameters = {
    screenOrientation: Emulation.ScreenOrientation | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type SetScreenOrientationOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetUserAgentOverride = {
    method: 'emulation.setUserAgentOverride';
    params: Emulation.SetUserAgentOverrideParameters;
  };
}
export namespace Emulation {
  export type SetUserAgentOverrideParameters = {
    userAgent: string | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type SetUserAgentOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetScriptingEnabled = {
    method: 'emulation.setScriptingEnabled';
    params: Emulation.SetScriptingEnabledParameters;
  };
}
export namespace Emulation {
  export type SetScriptingEnabledParameters = {
    enabled: false | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type SetScriptingEnabledResult = EmptyResult;
}
export namespace Emulation {
  export type SetTimezoneOverride = {
    method: 'emulation.setTimezoneOverride';
    params: Emulation.SetTimezoneOverrideParameters;
  };
}
export namespace Emulation {
  export type SetTimezoneOverrideParameters = {
    timezone: string | null;
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Emulation {
  export type SetTimezoneOverrideResult = EmptyResult;
}
export namespace Emulation {
  export type SetTouchOverride = {
    method: 'emulation.setTouchOverride';
    params: Emulation.SetTouchOverrideParameters;
  };
}
export namespace Emulation {
  export type SetTouchOverrideParameters = {
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
export namespace Emulation {
  export type SetTouchOverrideResult = EmptyResult;
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
export namespace Network {
  export type AuthChallenge = {
    scheme: string;
    realm: string;
  };
}
export namespace Network {
  export type AuthCredentials = {
    type: 'password';
    username: string;
    password: string;
  };
}
export namespace Network {
  export type BaseParameters = {
    context: BrowsingContext.BrowsingContext | null;
    isBlocked: boolean;
    navigation: BrowsingContext.Navigation | null;
    redirectCount: JsUint;
    request: Network.RequestData;
    timestamp: JsUint;
    intercepts?: [Network.Intercept, ...Network.Intercept[]];
  };
}
export namespace Network {
  export type BytesValue = Network.StringValue | Network.Base64Value;
}
export namespace Network {
  export type StringValue = {
    type: 'string';
    value: string;
  };
}
export namespace Network {
  export type Base64Value = {
    type: 'base64';
    value: string;
  };
}
export namespace Network {
  export type Collector = string;
}
export namespace Network {
  export const enum CollectorType {
    Blob = 'blob',
  }
}
export namespace Network {
  export const enum SameSite {
    Strict = 'strict',
    Lax = 'lax',
    None = 'none',
    Default = 'default',
  }
}
export namespace Network {
  export type Cookie = {
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
export namespace Network {
  export type CookieHeader = {
    name: string;
    value: Network.BytesValue;
  };
}
export namespace Network {
  export const enum DataType {
    Request = 'request',
    Response = 'response',
  }
}
export namespace Network {
  export type FetchTimingInfo = {
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
export namespace Network {
  export type Header = {
    name: string;
    value: Network.BytesValue;
  };
}
export namespace Network {
  export type Initiator = {
    columnNumber?: JsUint;
    lineNumber?: JsUint;
    request?: Network.Request;
    stackTrace?: Script.StackTrace;
    type?: 'parser' | 'script' | 'preflight' | 'other';
  };
}
export namespace Network {
  export type Intercept = string;
}
export namespace Network {
  export type Request = string;
}
export namespace Network {
  export type RequestData = {
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
export namespace Network {
  export type ResponseContent = {
    size: JsUint;
  };
}
export namespace Network {
  export type ResponseData = {
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
export namespace Network {
  export type SetCookieHeader = {
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
export namespace Network {
  export type UrlPattern = Network.UrlPatternPattern | Network.UrlPatternString;
}
export namespace Network {
  export type UrlPatternPattern = {
    type: 'pattern';
    protocol?: string;
    hostname?: string;
    port?: string;
    pathname?: string;
    search?: string;
  };
}
export namespace Network {
  export type UrlPatternString = {
    type: 'string';
    pattern: string;
  };
}
export namespace Network {
  export type AddDataCollector = {
    method: 'network.addDataCollector';
    params: Network.AddDataCollectorParameters;
  };
}
export namespace Network {
  export type AddDataCollectorParameters = {
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
export namespace Network {
  export type AddDataCollectorResult = {
    collector: Network.Collector;
  };
}
export namespace Network {
  export type AddIntercept = {
    method: 'network.addIntercept';
    params: Network.AddInterceptParameters;
  };
}
export namespace Network {
  export type AddInterceptParameters = {
    phases: [Network.InterceptPhase, ...Network.InterceptPhase[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    urlPatterns?: [...Network.UrlPattern[]];
  };
}
export namespace Network {
  export const enum InterceptPhase {
    BeforeRequestSent = 'beforeRequestSent',
    ResponseStarted = 'responseStarted',
    AuthRequired = 'authRequired',
  }
}
export namespace Network {
  export type AddInterceptResult = {
    intercept: Network.Intercept;
  };
}
export namespace Network {
  export type ContinueRequest = {
    method: 'network.continueRequest';
    params: Network.ContinueRequestParameters;
  };
}
export namespace Network {
  export type ContinueRequestParameters = {
    request: Network.Request;
    body?: Network.BytesValue;
    cookies?: [...Network.CookieHeader[]];
    headers?: [...Network.Header[]];
    method?: string;
    url?: string;
  };
}
export namespace Network {
  export type ContinueRequestResult = EmptyResult;
}
export namespace Network {
  export type ContinueResponse = {
    method: 'network.continueResponse';
    params: Network.ContinueResponseParameters;
  };
}
export namespace Network {
  export type ContinueResponseParameters = {
    request: Network.Request;
    cookies?: [...Network.SetCookieHeader[]];
    credentials?: Network.AuthCredentials;
    headers?: [...Network.Header[]];
    reasonPhrase?: string;
    statusCode?: JsUint;
  };
}
export namespace Network {
  export type ContinueResponseResult = EmptyResult;
}
export namespace Network {
  export type ContinueWithAuth = {
    method: 'network.continueWithAuth';
    params: Network.ContinueWithAuthParameters;
  };
}
export namespace Network {
  export type ContinueWithAuthParameters = {
    request: Network.Request;
  } & (
    | Network.ContinueWithAuthCredentials
    | Network.ContinueWithAuthNoCredentials
  );
}
export namespace Network {
  export type ContinueWithAuthCredentials = {
    action: 'provideCredentials';
    credentials: Network.AuthCredentials;
  };
}
export namespace Network {
  export type ContinueWithAuthNoCredentials = {
    action: 'default' | 'cancel';
  };
}
export namespace Network {
  export type ContinueWithAuthResult = EmptyResult;
}
export namespace Network {
  export type DisownData = {
    method: 'network.disownData';
    params: Network.DisownDataParameters;
  };
}
export namespace Network {
  export type DisownDataParameters = {
    dataType: Network.DataType;
    collector: Network.Collector;
    request: Network.Request;
  };
}
export namespace Network {
  export type DisownDataResult = EmptyResult;
}
export namespace Network {
  export type FailRequest = {
    method: 'network.failRequest';
    params: Network.FailRequestParameters;
  };
}
export namespace Network {
  export type FailRequestParameters = {
    request: Network.Request;
  };
}
export namespace Network {
  export type FailRequestResult = EmptyResult;
}
export namespace Network {
  export type GetData = {
    method: 'network.getData';
    params: Network.GetDataParameters;
  };
}
export namespace Network {
  export type GetDataParameters = {
    dataType: Network.DataType;
    collector?: Network.Collector;
    /**
     * @defaultValue `false`
     */
    disown?: boolean;
    request: Network.Request;
  };
}
export namespace Network {
  export type GetDataResult = {
    bytes: Network.BytesValue;
  };
}
export namespace Network {
  export type ProvideResponse = {
    method: 'network.provideResponse';
    params: Network.ProvideResponseParameters;
  };
}
export namespace Network {
  export type ProvideResponseParameters = {
    request: Network.Request;
    body?: Network.BytesValue;
    cookies?: [...Network.SetCookieHeader[]];
    headers?: [...Network.Header[]];
    reasonPhrase?: string;
    statusCode?: JsUint;
  };
}
export namespace Network {
  export type ProvideResponseResult = EmptyResult;
}
export namespace Network {
  export type RemoveDataCollector = {
    method: 'network.removeDataCollector';
    params: Network.RemoveDataCollectorParameters;
  };
}
export namespace Network {
  export type RemoveDataCollectorParameters = {
    collector: Network.Collector;
  };
}
export namespace Network {
  export type RemoveDataCollectorResult = EmptyResult;
}
export namespace Network {
  export type RemoveIntercept = {
    method: 'network.removeIntercept';
    params: Network.RemoveInterceptParameters;
  };
}
export namespace Network {
  export type RemoveInterceptParameters = {
    intercept: Network.Intercept;
  };
}
export namespace Network {
  export type RemoveInterceptResult = EmptyResult;
}
export namespace Network {
  export type SetCacheBehavior = {
    method: 'network.setCacheBehavior';
    params: Network.SetCacheBehaviorParameters;
  };
}
export namespace Network {
  export type SetCacheBehaviorParameters = {
    cacheBehavior: 'default' | 'bypass';
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
  };
}
export namespace Network {
  export type SetCacheBehaviorResult = EmptyResult;
}
export namespace Network {
  export type SetExtraHeaders = {
    method: 'network.setExtraHeaders';
    params: Network.SetExtraHeadersParameters;
  };
}
export namespace Network {
  export type SetExtraHeadersParameters = {
    headers: [...Network.Header[]];
    contexts?: [
      BrowsingContext.BrowsingContext,
      ...BrowsingContext.BrowsingContext[],
    ];
    userContexts?: [Browser.UserContext, ...Browser.UserContext[]];
  };
}
export namespace Network {
  export type SetExtraHeadersResult = EmptyResult;
}
export namespace Network {
  export type AuthRequired = {
    method: 'network.authRequired';
    params: Network.AuthRequiredParameters;
  };
}
export namespace Network {
  export type AuthRequiredParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export namespace Network {
  export type BeforeRequestSent = {
    method: 'network.beforeRequestSent';
    params: Network.BeforeRequestSentParameters;
  };
}
export namespace Network {
  export type BeforeRequestSentParameters = Network.BaseParameters & {
    initiator?: Network.Initiator;
  };
}
export namespace Network {
  export type FetchError = {
    method: 'network.fetchError';
    params: Network.FetchErrorParameters;
  };
}
export namespace Network {
  export type FetchErrorParameters = Network.BaseParameters & {
    errorText: string;
  };
}
export namespace Network {
  export type ResponseCompleted = {
    method: 'network.responseCompleted';
    params: Network.ResponseCompletedParameters;
  };
}
export namespace Network {
  export type ResponseCompletedParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export namespace Network {
  export type ResponseStarted = {
    method: 'network.responseStarted';
    params: Network.ResponseStartedParameters;
  };
}
export namespace Network {
  export type ResponseStartedParameters = Network.BaseParameters & {
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
export namespace Script {
  export type Channel = string;
}
export namespace Script {
  export type ChannelValue = {
    type: 'channel';
    value: Script.ChannelProperties;
  };
}
export namespace Script {
  export type ChannelProperties = {
    channel: Script.Channel;
    serializationOptions?: Script.SerializationOptions;
    ownership?: Script.ResultOwnership;
  };
}
export namespace Script {
  export type EvaluateResult =
    | Script.EvaluateResultSuccess
    | Script.EvaluateResultException;
}
export namespace Script {
  export type EvaluateResultSuccess = {
    type: 'success';
    result: Script.RemoteValue;
    realm: Script.Realm;
  };
}
export namespace Script {
  export type EvaluateResultException = {
    type: 'exception';
    exceptionDetails: Script.ExceptionDetails;
    realm: Script.Realm;
  };
}
export namespace Script {
  export type ExceptionDetails = {
    columnNumber: JsUint;
    exception: Script.RemoteValue;
    lineNumber: JsUint;
    stackTrace: Script.StackTrace;
    text: string;
  };
}
export namespace Script {
  export type Handle = string;
}
export namespace Script {
  export type InternalId = string;
}
export namespace Script {
  export type LocalValue =
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
export namespace Script {
  export type ListLocalValue = [...Script.LocalValue[]];
}
export namespace Script {
  export type ArrayLocalValue = {
    type: 'array';
    value: Script.ListLocalValue;
  };
}
export namespace Script {
  export type DateLocalValue = {
    type: 'date';
    value: string;
  };
}
export namespace Script {
  export type MappingLocalValue = [
    ...[Script.LocalValue | string, Script.LocalValue][],
  ];
}
export namespace Script {
  export type MapLocalValue = {
    type: 'map';
    value: Script.MappingLocalValue;
  };
}
export namespace Script {
  export type ObjectLocalValue = {
    type: 'object';
    value: Script.MappingLocalValue;
  };
}
export namespace Script {
  export type RegExpValue = {
    pattern: string;
    flags?: string;
  };
}
export namespace Script {
  export type RegExpLocalValue = {
    type: 'regexp';
    value: Script.RegExpValue;
  };
}
export namespace Script {
  export type SetLocalValue = {
    type: 'set';
    value: Script.ListLocalValue;
  };
}
export namespace Script {
  export type PreloadScript = string;
}
export namespace Script {
  export type Realm = string;
}
export namespace Script {
  export type PrimitiveProtocolValue =
    | Script.UndefinedValue
    | Script.NullValue
    | Script.StringValue
    | Script.NumberValue
    | Script.BooleanValue
    | Script.BigIntValue;
}
export namespace Script {
  export type UndefinedValue = {
    type: 'undefined';
  };
}
export namespace Script {
  export type NullValue = {
    type: 'null';
  };
}
export namespace Script {
  export type StringValue = {
    type: 'string';
    value: string;
  };
}
export namespace Script {
  export type SpecialNumber = 'NaN' | '-0' | 'Infinity' | '-Infinity';
}
export namespace Script {
  export type NumberValue = {
    type: 'number';
    value: number | Script.SpecialNumber;
  };
}
export namespace Script {
  export type BooleanValue = {
    type: 'boolean';
    value: boolean;
  };
}
export namespace Script {
  export type BigIntValue = {
    type: 'bigint';
    value: string;
  };
}
export namespace Script {
  export type RealmInfo =
    | Script.WindowRealmInfo
    | Script.DedicatedWorkerRealmInfo
    | Script.SharedWorkerRealmInfo
    | Script.ServiceWorkerRealmInfo
    | Script.WorkerRealmInfo
    | Script.PaintWorkletRealmInfo
    | Script.AudioWorkletRealmInfo
    | Script.WorkletRealmInfo;
}
export namespace Script {
  export type BaseRealmInfo = {
    realm: Script.Realm;
    origin: string;
  };
}
export namespace Script {
  export type WindowRealmInfo = Script.BaseRealmInfo & {
    type: 'window';
    context: BrowsingContext.BrowsingContext;
    sandbox?: string;
  };
}
export namespace Script {
  export type DedicatedWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'dedicated-worker';
    owners: [Script.Realm];
  };
}
export namespace Script {
  export type SharedWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'shared-worker';
  };
}
export namespace Script {
  export type ServiceWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'service-worker';
  };
}
export namespace Script {
  export type WorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'worker';
  };
}
export namespace Script {
  export type PaintWorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'paint-worklet';
  };
}
export namespace Script {
  export type AudioWorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'audio-worklet';
  };
}
export namespace Script {
  export type WorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'worklet';
  };
}
export namespace Script {
  export type RealmType =
    | 'window'
    | 'dedicated-worker'
    | 'shared-worker'
    | 'service-worker'
    | 'worker'
    | 'paint-worklet'
    | 'audio-worklet'
    | 'worklet';
}
export namespace Script {
  export type RemoteReference =
    | Script.SharedReference
    | Script.RemoteObjectReference;
}
export namespace Script {
  export type SharedReference = {
    sharedId: Script.SharedId;
    handle?: Script.Handle;
  } & Extensible;
}
export namespace Script {
  export type RemoteObjectReference = {
    handle: Script.Handle;
    sharedId?: Script.SharedId;
  } & Extensible;
}
export namespace Script {
  export type RemoteValue =
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
export namespace Script {
  export type ListRemoteValue = [...Script.RemoteValue[]];
}
export namespace Script {
  export type MappingRemoteValue = [
    ...[Script.RemoteValue | string, Script.RemoteValue][],
  ];
}
export namespace Script {
  export type SymbolRemoteValue = {
    type: 'symbol';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ArrayRemoteValue = {
    type: 'array';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type ObjectRemoteValue = {
    type: 'object';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.MappingRemoteValue;
  };
}
export namespace Script {
  export type FunctionRemoteValue = {
    type: 'function';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type RegExpRemoteValue = Script.RegExpLocalValue & {
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type DateRemoteValue = Script.DateLocalValue & {
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type MapRemoteValue = {
    type: 'map';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.MappingRemoteValue;
  };
}
export namespace Script {
  export type SetRemoteValue = {
    type: 'set';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type WeakMapRemoteValue = {
    type: 'weakmap';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type WeakSetRemoteValue = {
    type: 'weakset';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type GeneratorRemoteValue = {
    type: 'generator';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ErrorRemoteValue = {
    type: 'error';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ProxyRemoteValue = {
    type: 'proxy';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type PromiseRemoteValue = {
    type: 'promise';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type TypedArrayRemoteValue = {
    type: 'typedarray';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ArrayBufferRemoteValue = {
    type: 'arraybuffer';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type NodeListRemoteValue = {
    type: 'nodelist';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type HtmlCollectionRemoteValue = {
    type: 'htmlcollection';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type NodeRemoteValue = {
    type: 'node';
    sharedId?: Script.SharedId;
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.NodeProperties;
  };
}
export namespace Script {
  export type NodeProperties = {
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
export namespace Script {
  export type WindowProxyRemoteValue = {
    type: 'window';
    value: Script.WindowProxyProperties;
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type WindowProxyProperties = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace Script {
  export const enum ResultOwnership {
    Root = 'root',
    None = 'none',
  }
}
export namespace Script {
  export type SerializationOptions = {
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
export namespace Script {
  export type SharedId = string;
}
export namespace Script {
  export type StackFrame = {
    columnNumber: JsUint;
    functionName: string;
    lineNumber: JsUint;
    url: string;
  };
}
export namespace Script {
  export type StackTrace = {
    callFrames: [...Script.StackFrame[]];
  };
}
export namespace Script {
  export type Source = {
    realm: Script.Realm;
    context?: BrowsingContext.BrowsingContext;
  };
}
export namespace Script {
  export type RealmTarget = {
    realm: Script.Realm;
  };
}
export namespace Script {
  export type ContextTarget = {
    context: BrowsingContext.BrowsingContext;
    sandbox?: string;
  };
}
export namespace Script {
  export type Target = Script.ContextTarget | Script.RealmTarget;
}
export namespace Script {
  export type AddPreloadScript = {
    method: 'script.addPreloadScript';
    params: Script.AddPreloadScriptParameters;
  };
}
export namespace Script {
  export type AddPreloadScriptParameters = {
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
export namespace Script {
  export type AddPreloadScriptResult = {
    script: Script.PreloadScript;
  };
}
export namespace Script {
  export type Disown = {
    method: 'script.disown';
    params: Script.DisownParameters;
  };
}
export namespace Script {
  export type DisownParameters = {
    handles: [...Script.Handle[]];
    target: Script.Target;
  };
}
export namespace Script {
  export type DisownResult = EmptyResult;
}
export namespace Script {
  export type CallFunction = {
    method: 'script.callFunction';
    params: Script.CallFunctionParameters;
  };
}
export namespace Script {
  export type CallFunctionParameters = {
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
export namespace Script {
  export type CallFunctionResult = Script.EvaluateResult;
}
export namespace Script {
  export type Evaluate = {
    method: 'script.evaluate';
    params: Script.EvaluateParameters;
  };
}
export namespace Script {
  export type EvaluateParameters = {
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
export namespace Script {
  export type GetRealms = {
    method: 'script.getRealms';
    params: Script.GetRealmsParameters;
  };
}
export namespace Script {
  export type GetRealmsParameters = {
    context?: BrowsingContext.BrowsingContext;
    type?: Script.RealmType;
  };
}
export namespace Script {
  export type GetRealmsResult = {
    realms: [...Script.RealmInfo[]];
  };
}
export namespace Script {
  export type RemovePreloadScript = {
    method: 'script.removePreloadScript';
    params: Script.RemovePreloadScriptParameters;
  };
}
export namespace Script {
  export type RemovePreloadScriptParameters = {
    script: Script.PreloadScript;
  };
}
export namespace Script {
  export type RemovePreloadScriptResult = EmptyResult;
}
export namespace Script {
  export type Message = {
    method: 'script.message';
    params: Script.MessageParameters;
  };
}
export namespace Script {
  export type MessageParameters = {
    channel: Script.Channel;
    data: Script.RemoteValue;
    source: Script.Source;
  };
}
export namespace Script {
  export type RealmCreated = {
    method: 'script.realmCreated';
    params: Script.RealmInfo;
  };
}
export namespace Script {
  export type RealmDestroyed = {
    method: 'script.realmDestroyed';
    params: Script.RealmDestroyedParameters;
  };
}
export namespace Script {
  export type RealmDestroyedParameters = {
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
export namespace Storage {
  export type PartitionKey = {
    userContext?: string;
    sourceOrigin?: string;
  } & Extensible;
}
export namespace Storage {
  export type GetCookies = {
    method: 'storage.getCookies';
    params: Storage.GetCookiesParameters;
  };
}
export namespace Storage {
  export type CookieFilter = {
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
export namespace Storage {
  export type BrowsingContextPartitionDescriptor = {
    type: 'context';
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace Storage {
  export type StorageKeyPartitionDescriptor = {
    type: 'storageKey';
    userContext?: string;
    sourceOrigin?: string;
  } & Extensible;
}
export namespace Storage {
  export type PartitionDescriptor =
    | Storage.BrowsingContextPartitionDescriptor
    | Storage.StorageKeyPartitionDescriptor;
}
export namespace Storage {
  export type GetCookiesParameters = {
    filter?: Storage.CookieFilter;
    partition?: Storage.PartitionDescriptor;
  };
}
export namespace Storage {
  export type GetCookiesResult = {
    cookies: [...Network.Cookie[]];
    partitionKey: Storage.PartitionKey;
  };
}
export namespace Storage {
  export type SetCookie = {
    method: 'storage.setCookie';
    params: Storage.SetCookieParameters;
  };
}
export namespace Storage {
  export type PartialCookie = {
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
export namespace Storage {
  export type SetCookieParameters = {
    cookie: Storage.PartialCookie;
    partition?: Storage.PartitionDescriptor;
  };
}
export namespace Storage {
  export type SetCookieResult = {
    partitionKey: Storage.PartitionKey;
  };
}
export namespace Storage {
  export type DeleteCookies = {
    method: 'storage.deleteCookies';
    params: Storage.DeleteCookiesParameters;
  };
}
export namespace Storage {
  export type DeleteCookiesParameters = {
    filter?: Storage.CookieFilter;
    partition?: Storage.PartitionDescriptor;
  };
}
export namespace Storage {
  export type DeleteCookiesResult = {
    partitionKey: Storage.PartitionKey;
  };
}
export type LogEvent = Log.EntryAdded;
export namespace Log {
  export const enum Level {
    Debug = 'debug',
    Info = 'info',
    Warn = 'warn',
    Error = 'error',
  }
}
export namespace Log {
  export type Entry =
    | Log.GenericLogEntry
    | Log.ConsoleLogEntry
    | Log.JavascriptLogEntry;
}
export namespace Log {
  export type BaseLogEntry = {
    level: Log.Level;
    source: Script.Source;
    text: string | null;
    timestamp: JsUint;
    stackTrace?: Script.StackTrace;
  };
}
export namespace Log {
  export type GenericLogEntry = Log.BaseLogEntry & {
    type: string;
  };
}
export namespace Log {
  export type ConsoleLogEntry = Log.BaseLogEntry & {
    type: 'console';
    method: string;
    args: [...Script.RemoteValue[]];
  };
}
export namespace Log {
  export type JavascriptLogEntry = Log.BaseLogEntry & {
    type: 'javascript';
  };
}
export namespace Log {
  export type EntryAdded = {
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
export namespace Input {
  export type ElementOrigin = {
    type: 'element';
    element: Script.SharedReference;
  };
}
export namespace Input {
  export type PerformActions = {
    method: 'input.performActions';
    params: Input.PerformActionsParameters;
  };
}
export namespace Input {
  export type PerformActionsParameters = {
    context: BrowsingContext.BrowsingContext;
    actions: [...Input.SourceActions[]];
  };
}
export namespace Input {
  export type SourceActions =
    | Input.NoneSourceActions
    | Input.KeySourceActions
    | Input.PointerSourceActions
    | Input.WheelSourceActions;
}
export namespace Input {
  export type NoneSourceActions = {
    type: 'none';
    id: string;
    actions: [...Input.NoneSourceAction[]];
  };
}
export namespace Input {
  export type NoneSourceAction = Input.PauseAction;
}
export namespace Input {
  export type KeySourceActions = {
    type: 'key';
    id: string;
    actions: [...Input.KeySourceAction[]];
  };
}
export namespace Input {
  export type KeySourceAction =
    | Input.PauseAction
    | Input.KeyDownAction
    | Input.KeyUpAction;
}
export namespace Input {
  export type PointerSourceActions = {
    type: 'pointer';
    id: string;
    parameters?: Input.PointerParameters;
    actions: [...Input.PointerSourceAction[]];
  };
}
export namespace Input {
  export const enum PointerType {
    Mouse = 'mouse',
    Pen = 'pen',
    Touch = 'touch',
  }
}
export namespace Input {
  export type PointerParameters = {
    /**
     * @defaultValue `"mouse"`
     */
    pointerType?: Input.PointerType;
  };
}
export namespace Input {
  export type PointerSourceAction =
    | Input.PauseAction
    | Input.PointerDownAction
    | Input.PointerUpAction
    | Input.PointerMoveAction;
}
export namespace Input {
  export type WheelSourceActions = {
    type: 'wheel';
    id: string;
    actions: [...Input.WheelSourceAction[]];
  };
}
export namespace Input {
  export type WheelSourceAction = Input.PauseAction | Input.WheelScrollAction;
}
export namespace Input {
  export type PauseAction = {
    type: 'pause';
    duration?: JsUint;
  };
}
export namespace Input {
  export type KeyDownAction = {
    type: 'keyDown';
    value: string;
  };
}
export namespace Input {
  export type KeyUpAction = {
    type: 'keyUp';
    value: string;
  };
}
export namespace Input {
  export type PointerUpAction = {
    type: 'pointerUp';
    button: JsUint;
  };
}
export namespace Input {
  export type PointerDownAction = {
    type: 'pointerDown';
    button: JsUint;
  } & Input.PointerCommonProperties;
}
export namespace Input {
  export type PointerMoveAction = {
    type: 'pointerMove';
    x: number;
    y: number;
    duration?: JsUint;
    origin?: Input.Origin;
  } & Input.PointerCommonProperties;
}
export namespace Input {
  export type WheelScrollAction = {
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
export namespace Input {
  export type PointerCommonProperties = {
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
export namespace Input {
  export type Origin = 'viewport' | 'pointer' | Input.ElementOrigin;
}
export namespace Input {
  export type PerformActionsResult = EmptyResult;
}
export namespace Input {
  export type ReleaseActions = {
    method: 'input.releaseActions';
    params: Input.ReleaseActionsParameters;
  };
}
export namespace Input {
  export type ReleaseActionsParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace Input {
  export type ReleaseActionsResult = EmptyResult;
}
export namespace Input {
  export type SetFiles = {
    method: 'input.setFiles';
    params: Input.SetFilesParameters;
  };
}
export namespace Input {
  export type SetFilesParameters = {
    context: BrowsingContext.BrowsingContext;
    element: Script.SharedReference;
    files: [...string[]];
  };
}
export namespace Input {
  export type SetFilesResult = EmptyResult;
}
export namespace Input {
  export type FileDialogOpened = {
    method: 'input.fileDialogOpened';
    params: Input.FileDialogInfo;
  };
}
export namespace Input {
  export type FileDialogInfo = {
    context: BrowsingContext.BrowsingContext;
    element?: Script.SharedReference;
    multiple: boolean;
  };
}
export type WebExtensionCommand = WebExtension.Install | WebExtension.Uninstall;
export type WebExtensionResult =
  | WebExtension.InstallResult
  | WebExtension.UninstallResult;
export namespace WebExtension {
  export type Extension = string;
}
export namespace WebExtension {
  export type Install = {
    method: 'webExtension.install';
    params: WebExtension.InstallParameters;
  };
}
export namespace WebExtension {
  export type InstallParameters = {
    extensionData: WebExtension.ExtensionData;
  };
}
export namespace WebExtension {
  export type ExtensionData =
    | WebExtension.ExtensionArchivePath
    | WebExtension.ExtensionBase64Encoded
    | WebExtension.ExtensionPath;
}
export namespace WebExtension {
  export type ExtensionPath = {
    type: 'path';
    path: string;
  };
}
export namespace WebExtension {
  export type ExtensionArchivePath = {
    type: 'archivePath';
    path: string;
  };
}
export namespace WebExtension {
  export type ExtensionBase64Encoded = {
    type: 'base64';
    value: string;
  };
}
export namespace WebExtension {
  export type InstallResult = {
    extension: WebExtension.Extension;
  };
}
export namespace WebExtension {
  export type Uninstall = {
    method: 'webExtension.uninstall';
    params: WebExtension.UninstallParameters;
  };
}
export namespace WebExtension {
  export type UninstallParameters = {
    extension: WebExtension.Extension;
  };
}
export namespace WebExtension {
  export type UninstallResult = EmptyResult;
}
