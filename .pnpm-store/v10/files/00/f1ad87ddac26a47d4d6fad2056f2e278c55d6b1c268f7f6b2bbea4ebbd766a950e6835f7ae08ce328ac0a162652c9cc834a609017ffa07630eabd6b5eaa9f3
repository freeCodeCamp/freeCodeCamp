import type * as Bidi from './main.js';
import type * as BidiPermissions from './permissions.js';
import type * as BidiBluetooth from './web-bluetooth.js';
import type * as BidiUaClientHints from './ua-client-hints.js';
export interface Commands {
  'bluetooth.disableSimulation': {
    params: BidiBluetooth.Bluetooth.DisableSimulationParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.handleRequestDevicePrompt': {
    params: BidiBluetooth.Bluetooth.HandleRequestDevicePromptParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateAdapter': {
    params: BidiBluetooth.Bluetooth.SimulateAdapterParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateAdvertisement': {
    params: BidiBluetooth.Bluetooth.SimulateAdvertisementParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateCharacteristic': {
    params: BidiBluetooth.Bluetooth.SimulateCharacteristicParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateCharacteristicResponse': {
    params: BidiBluetooth.Bluetooth.SimulateCharacteristicResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateDescriptor': {
    params: BidiBluetooth.Bluetooth.SimulateDescriptorParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateDescriptorResponse': {
    params: BidiBluetooth.Bluetooth.SimulateDescriptorResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateGattConnectionResponse': {
    params: BidiBluetooth.Bluetooth.SimulateGattConnectionResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateGattDisconnection': {
    params: BidiBluetooth.Bluetooth.SimulateGattDisconnectionParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulatePreconnectedPeripheral': {
    params: BidiBluetooth.Bluetooth.SimulatePreconnectedPeripheralParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateService': {
    params: BidiBluetooth.Bluetooth.SimulateServiceParameters;
    returnType: Bidi.EmptyResult;
  };
  'browser.close': {
    params: Bidi.Extensible;
    returnType: Bidi.Browser.CloseResult;
  };
  'browser.createUserContext': {
    params: Bidi.Browser.CreateUserContextParameters;
    returnType: Bidi.Browser.CreateUserContextResult;
  };
  'browser.getClientWindows': {
    params: Bidi.Extensible;
    returnType: Bidi.Browser.GetClientWindowsResult;
  };
  'browser.getUserContexts': {
    params: Bidi.Extensible;
    returnType: Bidi.Browser.GetUserContextsResult;
  };
  'browser.removeUserContext': {
    params: Bidi.Browser.RemoveUserContextParameters;
    returnType: Bidi.Browser.RemoveUserContextResult;
  };
  'browser.setClientWindowState': {
    params: Bidi.Browser.SetClientWindowStateParameters;
    returnType: Bidi.Browser.SetClientWindowStateResult;
  };
  'browser.setDownloadBehavior': {
    params: Bidi.Browser.SetDownloadBehaviorParameters;
    returnType: Bidi.Browser.SetDownloadBehaviorResult;
  };
  'browsingContext.activate': {
    params: Bidi.BrowsingContext.ActivateParameters;
    returnType: Bidi.BrowsingContext.ActivateResult;
  };
  'browsingContext.captureScreenshot': {
    params: Bidi.BrowsingContext.CaptureScreenshotParameters;
    returnType: Bidi.BrowsingContext.CaptureScreenshotResult;
  };
  'browsingContext.close': {
    params: Bidi.BrowsingContext.CloseParameters;
    returnType: Bidi.BrowsingContext.CloseResult;
  };
  'browsingContext.create': {
    params: Bidi.BrowsingContext.CreateParameters;
    returnType: Bidi.BrowsingContext.CreateResult;
  };
  'browsingContext.getTree': {
    params: Bidi.BrowsingContext.GetTreeParameters;
    returnType: Bidi.BrowsingContext.GetTreeResult;
  };
  'browsingContext.handleUserPrompt': {
    params: Bidi.BrowsingContext.HandleUserPromptParameters;
    returnType: Bidi.BrowsingContext.HandleUserPromptResult;
  };
  'browsingContext.locateNodes': {
    params: Bidi.BrowsingContext.LocateNodesParameters;
    returnType: Bidi.BrowsingContext.LocateNodesResult;
  };
  'browsingContext.navigate': {
    params: Bidi.BrowsingContext.NavigateParameters;
    returnType: Bidi.BrowsingContext.NavigateResult;
  };
  'browsingContext.print': {
    params: Bidi.BrowsingContext.PrintParameters;
    returnType: Bidi.BrowsingContext.PrintResult;
  };
  'browsingContext.reload': {
    params: Bidi.BrowsingContext.ReloadParameters;
    returnType: Bidi.BrowsingContext.ReloadResult;
  };
  'browsingContext.setViewport': {
    params: Bidi.BrowsingContext.SetViewportParameters;
    returnType: Bidi.BrowsingContext.SetViewportResult;
  };
  'browsingContext.traverseHistory': {
    params: Bidi.BrowsingContext.TraverseHistoryParameters;
    returnType: Bidi.BrowsingContext.TraverseHistoryResult;
  };
  'emulation.setForcedColorsModeThemeOverride': {
    params: Bidi.Emulation.SetForcedColorsModeThemeOverrideParameters;
    returnType: Bidi.Emulation.SetForcedColorsModeThemeOverrideResult;
  };
  'emulation.setGeolocationOverride': {
    params: Bidi.Emulation.SetGeolocationOverrideParameters;
    returnType: Bidi.Emulation.SetGeolocationOverrideResult;
  };
  'emulation.setLocaleOverride': {
    params: Bidi.Emulation.SetLocaleOverrideParameters;
    returnType: Bidi.Emulation.SetLocaleOverrideResult;
  };
  'emulation.setNetworkConditions': {
    params: Bidi.Emulation.SetNetworkConditionsParameters;
    returnType: Bidi.Emulation.SetNetworkConditionsResult;
  };
  'emulation.setScreenOrientationOverride': {
    params: Bidi.Emulation.SetScreenOrientationOverrideParameters;
    returnType: Bidi.Emulation.SetScreenOrientationOverrideResult;
  };
  'emulation.setScreenSettingsOverride': {
    params: Bidi.Emulation.SetScreenSettingsOverrideParameters;
    returnType: Bidi.Emulation.SetScreenSettingsOverrideResult;
  };
  'emulation.setScriptingEnabled': {
    params: Bidi.Emulation.SetScriptingEnabledParameters;
    returnType: Bidi.Emulation.SetScriptingEnabledResult;
  };
  'emulation.setTimezoneOverride': {
    params: Bidi.Emulation.SetTimezoneOverrideParameters;
    returnType: Bidi.Emulation.SetTimezoneOverrideResult;
  };
  'emulation.setTouchOverride': {
    params: Bidi.Emulation.SetTouchOverrideParameters;
    returnType: Bidi.Emulation.SetTouchOverrideResult;
  };
  'emulation.setUserAgentOverride': {
    params: Bidi.Emulation.SetUserAgentOverrideParameters;
    returnType: Bidi.Emulation.SetUserAgentOverrideResult;
  };
  'input.performActions': {
    params: Bidi.Input.PerformActionsParameters;
    returnType: Bidi.Input.PerformActionsResult;
  };
  'input.releaseActions': {
    params: Bidi.Input.ReleaseActionsParameters;
    returnType: Bidi.Input.ReleaseActionsResult;
  };
  'input.setFiles': {
    params: Bidi.Input.SetFilesParameters;
    returnType: Bidi.Input.SetFilesResult;
  };
  'network.addDataCollector': {
    params: Bidi.Network.AddDataCollectorParameters;
    returnType: Bidi.Network.AddDataCollectorResult;
  };
  'network.addIntercept': {
    params: Bidi.Network.AddInterceptParameters;
    returnType: Bidi.Network.AddInterceptResult;
  };
  'network.continueRequest': {
    params: Bidi.Network.ContinueRequestParameters;
    returnType: Bidi.Network.ContinueRequestResult;
  };
  'network.continueResponse': {
    params: Bidi.Network.ContinueResponseParameters;
    returnType: Bidi.Network.ContinueResponseResult;
  };
  'network.continueWithAuth': {
    params: Bidi.Network.ContinueWithAuthParameters;
    returnType: Bidi.Network.ContinueWithAuthResult;
  };
  'network.disownData': {
    params: Bidi.Network.DisownDataParameters;
    returnType: Bidi.Network.DisownDataResult;
  };
  'network.failRequest': {
    params: Bidi.Network.FailRequestParameters;
    returnType: Bidi.Network.FailRequestResult;
  };
  'network.getData': {
    params: Bidi.Network.GetDataParameters;
    returnType: Bidi.Network.GetDataResult;
  };
  'network.provideResponse': {
    params: Bidi.Network.ProvideResponseParameters;
    returnType: Bidi.Network.ProvideResponseResult;
  };
  'network.removeDataCollector': {
    params: Bidi.Network.RemoveDataCollectorParameters;
    returnType: Bidi.Network.RemoveDataCollectorResult;
  };
  'network.removeIntercept': {
    params: Bidi.Network.RemoveInterceptParameters;
    returnType: Bidi.Network.RemoveInterceptResult;
  };
  'network.setCacheBehavior': {
    params: Bidi.Network.SetCacheBehaviorParameters;
    returnType: Bidi.Network.SetCacheBehaviorResult;
  };
  'network.setExtraHeaders': {
    params: Bidi.Network.SetExtraHeadersParameters;
    returnType: Bidi.Network.SetExtraHeadersResult;
  };
  'permissions.setPermission': {
    params: BidiPermissions.Permissions.SetPermissionParameters;
    returnType: Bidi.EmptyResult;
  };
  'script.addPreloadScript': {
    params: Bidi.Script.AddPreloadScriptParameters;
    returnType: Bidi.Script.AddPreloadScriptResult;
  };
  'script.callFunction': {
    params: Bidi.Script.CallFunctionParameters;
    returnType: Bidi.Script.CallFunctionResult;
  };
  'script.disown': {
    params: Bidi.Script.DisownParameters;
    returnType: Bidi.Script.DisownResult;
  };
  'script.evaluate': {
    params: Bidi.Script.EvaluateParameters;
    returnType: Bidi.Script.EvaluateResult;
  };
  'script.getRealms': {
    params: Bidi.Script.GetRealmsParameters;
    returnType: Bidi.Script.GetRealmsResult;
  };
  'script.removePreloadScript': {
    params: Bidi.Script.RemovePreloadScriptParameters;
    returnType: Bidi.Script.RemovePreloadScriptResult;
  };
  'session.end': {
    params: Bidi.Extensible;
    returnType: Bidi.Session.EndResult;
  };
  'session.new': {
    params: Bidi.Session.NewParameters;
    returnType: Bidi.Session.NewResult;
  };
  'session.status': {
    params: Bidi.Extensible;
    returnType: Bidi.Session.StatusResult;
  };
  'session.subscribe': {
    params: Bidi.Session.SubscribeParameters;
    returnType: Bidi.Session.SubscribeResult;
  };
  'session.unsubscribe': {
    params: Bidi.Session.UnsubscribeParameters;
    returnType: Bidi.Session.UnsubscribeResult;
  };
  'storage.deleteCookies': {
    params: Bidi.Storage.DeleteCookiesParameters;
    returnType: Bidi.Storage.DeleteCookiesResult;
  };
  'storage.getCookies': {
    params: Bidi.Storage.GetCookiesParameters;
    returnType: Bidi.Storage.GetCookiesResult;
  };
  'storage.setCookie': {
    params: Bidi.Storage.SetCookieParameters;
    returnType: Bidi.Storage.SetCookieResult;
  };
  'userAgentClientHints.setClientHintsOverride': {
    params: {
      clientHints: BidiUaClientHints.UserAgentClientHints.ClientHintsMetadata | null;
      contexts?: [string, ...string[]];
      userContexts?: [string, ...string[]];
    };
    returnType: BidiUaClientHints.UserAgentClientHints.SetClientHintsOverrideResult;
  };
  'webExtension.install': {
    params: Bidi.WebExtension.InstallParameters;
    returnType: Bidi.WebExtension.InstallResult;
  };
  'webExtension.uninstall': {
    params: Bidi.WebExtension.UninstallParameters;
    returnType: Bidi.WebExtension.UninstallResult;
  };
}
