/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type Protocol from 'devtools-protocol';
import * as Bidi from 'webdriver-bidi-protocol';

import {firstValueFrom, from, raceWith} from '../../third_party/rxjs/rxjs.js';
import type {BluetoothEmulation} from '../api/BluetoothEmulation.js';
import type {WindowId} from '../api/Browser.js';
import type {CDPSession} from '../api/CDPSession.js';
import type {DeviceRequestPrompt} from '../api/DeviceRequestPrompt.js';
import type {BoundingBox} from '../api/ElementHandle.js';
import type {Extension} from '../api/Extension.js';
import type {WaitForOptions} from '../api/Frame.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';
import type {
  Credentials,
  GeolocationOptions,
  HeapSnapshotOptions,
  MediaFeature,
  PageEvents,
  ReloadOptions,
  WaitTimeoutOptions,
} from '../api/Page.js';
import {
  Page,
  PageEvent,
  type NewDocumentScriptEvaluation,
  type ScreenshotOptions,
} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {Coverage} from '../cdp/Coverage.js';
import {EmulationManager} from '../cdp/EmulationManager.js';
import type {
  InternalNetworkConditions,
  NetworkConditions,
} from '../cdp/NetworkManager.js';
import {Tracing} from '../cdp/Tracing.js';
import type {WebMCP} from '../cdp/WebMCP.js';
import type {
  CookiePartitionKey,
  Cookie,
  CookieParam,
  CookieSameSite,
  DeleteCookiesRequest,
} from '../common/Cookie.js';
import {ProtocolError, UnsupportedOperation} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {FileChooser} from '../common/FileChooser.js';
import type {PDFOptions} from '../common/PDFOptions.js';
import type {Awaitable} from '../common/types.js';
import {evaluationString, parsePDFOptions, timeout} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import type {Realm} from '../puppeteer-core.js';
import {assert} from '../util/assert.js';
import {bubble} from '../util/decorators.js';
import {Deferred} from '../util/Deferred.js';
import {stringToTypedArray} from '../util/encoding.js';

import type {BidiBrowser} from './Browser.js';
import type {BidiBrowserContext} from './BrowserContext.js';
import type {BidiCdpSession} from './CDPSession.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import {BidiElementHandle} from './ElementHandle.js';
import {BidiFrame} from './Frame.js';
import type {BidiHTTPResponse} from './HTTPResponse.js';
import {BidiKeyboard, BidiMouse, BidiTouchscreen} from './Input.js';
import type {BidiJSHandle} from './JSHandle.js';
import {rewriteNavigationError} from './util.js';
import type {BidiWebWorker} from './WebWorker.js';

/**
 * Implements Page using WebDriver BiDi.
 *
 * @internal
 */
export class BidiPage extends Page {
  static from(
    browserContext: BidiBrowserContext,
    browsingContext: BrowsingContext,
  ): BidiPage {
    const page = new BidiPage(browserContext, browsingContext);
    page.#initialize();
    return page;
  }

  @bubble()
  accessor trustedEmitter = new EventEmitter<PageEvents>();

  readonly #browserContext: BidiBrowserContext;
  readonly #frame: BidiFrame;
  #viewport: Viewport | null = null;
  readonly #workers = new Set<BidiWebWorker>();

  readonly keyboard: BidiKeyboard;
  readonly mouse: BidiMouse;
  readonly touchscreen: BidiTouchscreen;
  readonly tracing: Tracing;
  override get webmcp(): WebMCP {
    throw new UnsupportedOperation();
  }
  readonly coverage: Coverage;
  readonly #cdpEmulationManager: EmulationManager;

  #emulatedNetworkConditions?: InternalNetworkConditions;
  #fileChooserDeferreds = new Set<Deferred<FileChooser>>();

  _client(): BidiCdpSession {
    return this.#frame.client;
  }

  private constructor(
    browserContext: BidiBrowserContext,
    browsingContext: BrowsingContext,
  ) {
    super();
    this.#browserContext = browserContext;
    this.#frame = BidiFrame.from(this, browsingContext);

    this.#cdpEmulationManager = new EmulationManager(this.#frame.client);
    this.tracing = new Tracing(this.#frame.client);
    this.coverage = new Coverage(this.#frame.client);
    this.keyboard = new BidiKeyboard(this);
    this.mouse = new BidiMouse(this);
    this.touchscreen = new BidiTouchscreen(this);
  }

  #initialize() {
    this.#frame.browsingContext.on('closed', () => {
      this.trustedEmitter.emit(PageEvent.Close, undefined);
      this.trustedEmitter.removeAllListeners();
    });

    this.trustedEmitter.on(PageEvent.WorkerCreated, worker => {
      this.#workers.add(worker as BidiWebWorker);
    });
    this.trustedEmitter.on(PageEvent.WorkerDestroyed, worker => {
      this.#workers.delete(worker as BidiWebWorker);
    });
  }
  /**
   * @internal
   */
  override async setUserAgent(
    userAgentOrOptions:
      | string
      | {
          userAgent?: string;
          userAgentMetadata?: Protocol.Emulation.UserAgentMetadata;
          platform?: string;
        },
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata,
  ): Promise<void> {
    let userAgent: string | null;
    let clientHints:
      | Bidi.BidiUaClientHints.UserAgentClientHints.ClientHintsMetadata
      | undefined;
    let platform: string | undefined;

    if (typeof userAgentOrOptions === 'string') {
      userAgent = userAgentOrOptions;
      clientHints = userAgentMetadata;
    } else {
      userAgent = userAgentOrOptions.userAgent ?? null;
      clientHints = userAgentOrOptions.userAgentMetadata;
      // Empty string platform should be interpreted as "no override".
      platform =
        userAgentOrOptions.platform === ''
          ? undefined
          : userAgentOrOptions.platform;
    }
    if (userAgent === '') {
      // In WebDriver BiDi null is used to restore the original user agent.
      userAgent = null;
    }
    await this.#frame.browsingContext.setUserAgent(userAgent);

    if (platform && platform !== '') {
      // Work-around until https://github.com/w3c/webdriver-bidi/issues/1065 is resolved.
      // Set platform via client hints override.
      clientHints = clientHints ?? {};
      clientHints.platform = platform;
    }

    await this.#frame.browsingContext.setClientHintsOverride(
      clientHints ?? null,
    );
  }

  override async setBypassCSP(enabled: boolean): Promise<void> {
    // TODO: handle CDP-specific cases such as MPArch.
    await this._client().send('Page.setBypassCSP', {enabled});
  }

  override async queryObjects<Prototype>(
    prototypeHandle: BidiJSHandle<Prototype>,
  ): Promise<BidiJSHandle<Prototype[]>> {
    assert(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
    assert(
      prototypeHandle.id,
      'Prototype JSHandle must not be referencing primitive value',
    );
    const response = await this.#frame.client.send('Runtime.queryObjects', {
      prototypeObjectId: prototypeHandle.id,
    });
    return this.#frame.mainRealm().createHandle({
      type: 'array',
      handle: response.objects.objectId,
    }) as BidiJSHandle<Prototype[]>;
  }

  override browser(): BidiBrowser {
    return this.browserContext().browser();
  }

  override browserContext(): BidiBrowserContext {
    return this.#browserContext;
  }

  override mainFrame(): BidiFrame {
    return this.#frame;
  }

  override async triggerExtensionAction(_extension: Extension): Promise<void> {
    throw new UnsupportedOperation();
  }

  override async emulateFocusedPage(enabled: boolean): Promise<void> {
    return await this.#cdpEmulationManager.emulateFocus(enabled);
  }

  override resize(_params: {
    contentWidth: number;
    contentHeight: number;
  }): Promise<void> {
    throw new UnsupportedOperation();
  }

  override async windowId(): Promise<WindowId> {
    return this.#frame.browsingContext.windowId;
  }

  override openDevTools(): Promise<Page> {
    throw new UnsupportedOperation();
  }

  override hasDevTools(): Promise<boolean> {
    throw new UnsupportedOperation();
  }

  async focusedFrame(): Promise<BidiFrame> {
    using handle = (await this.mainFrame()
      .isolatedRealm()
      .evaluateHandle(() => {
        let win = window;
        while (
          win.document.activeElement instanceof win.HTMLIFrameElement ||
          win.document.activeElement instanceof win.HTMLFrameElement
        ) {
          if (win.document.activeElement.contentWindow === null) {
            break;
          }
          win = win.document.activeElement.contentWindow as typeof win;
        }
        return win;
      })) as BidiJSHandle<Window & typeof globalThis>;
    const value = handle.remoteValue();
    assert(value.type === 'window');
    const frame = this.frames().find(frame => {
      return frame._id === value.value.context;
    });
    assert(frame);
    return frame;
  }

  override frames(): BidiFrame[] {
    const frames = [this.#frame];
    for (const frame of frames) {
      frames.push(...frame.childFrames());
    }
    return frames;
  }

  override isClosed(): boolean {
    return this.#frame.detached;
  }

  override async close(options?: {runBeforeUnload?: boolean}): Promise<void> {
    using _guard = await this.#browserContext.waitForScreenshotOperations();
    try {
      await this.#frame.browsingContext.close(options?.runBeforeUnload);
    } catch {
      return;
    }
  }

  override async reload(
    options: ReloadOptions = {},
  ): Promise<BidiHTTPResponse | null> {
    const [response] = await Promise.all([
      this.#frame.waitForNavigation(options),
      this.#frame.browsingContext.reload({
        ignoreCache: options.ignoreCache ? true : undefined,
      }),
    ]).catch(
      rewriteNavigationError(
        this.url(),
        options.timeout ?? this._timeoutSettings.navigationTimeout(),
      ),
    );
    return response;
  }

  override setDefaultNavigationTimeout(timeout: number): void {
    this._timeoutSettings.setDefaultNavigationTimeout(timeout);
  }

  override setDefaultTimeout(timeout: number): void {
    this._timeoutSettings.setDefaultTimeout(timeout);
  }

  override getDefaultTimeout(): number {
    return this._timeoutSettings.timeout();
  }

  override getDefaultNavigationTimeout(): number {
    return this._timeoutSettings.navigationTimeout();
  }

  override isJavaScriptEnabled(): boolean {
    return this.#frame.browsingContext.isJavaScriptEnabled();
  }

  override async setGeolocation(options: GeolocationOptions): Promise<void> {
    const {longitude, latitude, accuracy = 0} = options;
    if (longitude < -180 || longitude > 180) {
      throw new Error(
        `Invalid longitude "${longitude}": precondition -180 <= LONGITUDE <= 180 failed.`,
      );
    }
    if (latitude < -90 || latitude > 90) {
      throw new Error(
        `Invalid latitude "${latitude}": precondition -90 <= LATITUDE <= 90 failed.`,
      );
    }
    if (accuracy < 0) {
      throw new Error(
        `Invalid accuracy "${accuracy}": precondition 0 <= ACCURACY failed.`,
      );
    }
    return await this.#frame.browsingContext.setGeolocationOverride({
      coordinates: {
        latitude: options.latitude,
        longitude: options.longitude,
        accuracy: options.accuracy,
      },
    });
  }

  override async setJavaScriptEnabled(enabled: boolean): Promise<void> {
    return await this.#frame.browsingContext.setJavaScriptEnabled(enabled);
  }

  override async emulateMediaType(type?: string): Promise<void> {
    return await this.#cdpEmulationManager.emulateMediaType(type);
  }

  override async emulateCPUThrottling(factor: number | null): Promise<void> {
    return await this.#cdpEmulationManager.emulateCPUThrottling(factor);
  }

  override async emulateMediaFeatures(
    features?: MediaFeature[],
  ): Promise<void> {
    return await this.#cdpEmulationManager.emulateMediaFeatures(features);
  }

  override async emulateTimezone(timezoneId?: string): Promise<void> {
    return await this.#frame.browsingContext.setTimezoneOverride(timezoneId);
  }

  override async emulateIdleState(overrides?: {
    isUserActive: boolean;
    isScreenUnlocked: boolean;
  }): Promise<void> {
    return await this.#cdpEmulationManager.emulateIdleState(overrides);
  }

  override async emulateVisionDeficiency(
    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type'],
  ): Promise<void> {
    return await this.#cdpEmulationManager.emulateVisionDeficiency(type);
  }

  override async setViewport(viewport: Viewport | null): Promise<void> {
    let needsReload = false;
    if (!this.browser().cdpSupported) {
      const viewportSize =
        viewport?.width && viewport?.height
          ? {
              width: viewport.width,
              height: viewport.height,
            }
          : null;

      const devicePixelRatio = viewport?.deviceScaleFactor
        ? viewport.deviceScaleFactor
        : null;

      // If `viewport` is not set, remove screen orientation override.
      const screenOrientation: Bidi.Emulation.ScreenOrientation | null =
        viewport
          ? viewport.isLandscape
            ? {
                natural: Bidi.Emulation.ScreenOrientationNatural.Landscape,
                type: 'landscape-primary',
              }
            : {
                natural: Bidi.Emulation.ScreenOrientationNatural.Portrait,
                type: 'portrait-primary',
              }
          : null;

      const commands = [
        this.#frame.browsingContext.setViewport({
          viewport: viewportSize,
          devicePixelRatio,
        }),
        this.#frame.browsingContext.setScreenOrientationOverride(
          screenOrientation,
        ),
      ];

      if (
        (this.#viewport?.hasTouch ?? false) !== (viewport?.hasTouch ?? false)
      ) {
        // The requested touch override state is different from the current one, meaning
        // the reload is needed.
        needsReload = true;
        // 1 touch point if touch is enabled, null otherwise.
        const maxTouchPoints = viewport?.hasTouch ? 1 : null;

        commands.push(
          this.#frame.browsingContext
            .setTouchOverride(maxTouchPoints)
            .catch(error => {
              if (
                error instanceof ProtocolError &&
                (error.message.includes('unknown command') ||
                  error.message.includes('unsupported operation'))
              ) {
                // Tolerate not implemented or not supported commands. At least until
                // the `emulation.setTouchOverride` is supported by all the supported
                // browsers.
                return;
              }
              throw error;
            }),
        );
      }
      await Promise.all(commands);
    } else {
      needsReload = await this.#cdpEmulationManager.emulateViewport(viewport);
    }
    this.#viewport = viewport;
    if (needsReload) {
      await this.reload();
    }
  }

  override viewport(): Viewport | null {
    return this.#viewport;
  }

  override async pdf(options: PDFOptions = {}): Promise<Uint8Array> {
    const {timeout: ms = this._timeoutSettings.timeout(), path = undefined} =
      options;
    const {
      printBackground: background,
      margin,
      landscape,
      width,
      height,
      pageRanges: ranges,
      scale,
      preferCSSPageSize,
    } = parsePDFOptions(options, 'cm');
    const pageRanges = ranges ? ranges.split(', ') : [];

    await firstValueFrom(
      from(
        this.mainFrame()
          .isolatedRealm()
          .evaluate(() => {
            return document.fonts.ready;
          }),
      ).pipe(raceWith(timeout(ms))),
    );

    const data = await firstValueFrom(
      from(
        this.#frame.browsingContext.print({
          background,
          margin,
          orientation: landscape ? 'landscape' : 'portrait',
          page: {
            width,
            height,
          },
          pageRanges,
          scale,
          shrinkToFit: !preferCSSPageSize,
        }),
      ).pipe(raceWith(timeout(ms))),
    );

    const typedArray = stringToTypedArray(data, true);

    await this._maybeWriteTypedArrayToFile(path, typedArray);

    return typedArray;
  }

  override async createPDFStream(
    options?: PDFOptions | undefined,
  ): Promise<ReadableStream<Uint8Array>> {
    const typedArray = await this.pdf(options);

    return new ReadableStream({
      start(controller) {
        controller.enqueue(typedArray);
        controller.close();
      },
    });
  }

  override async _screenshot(
    options: Readonly<ScreenshotOptions>,
  ): Promise<string> {
    const {clip, type, captureBeyondViewport, quality} = options;
    if (options.omitBackground !== undefined && options.omitBackground) {
      throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
    }
    if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
      throw new UnsupportedOperation(
        `BiDi does not support 'optimizeForSpeed'.`,
      );
    }
    if (options.fromSurface !== undefined && !options.fromSurface) {
      throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
    }
    if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
      throw new UnsupportedOperation(
        `BiDi does not support 'scale' in 'clip'.`,
      );
    }

    let box: BoundingBox | undefined;
    if (clip) {
      if (captureBeyondViewport) {
        box = clip;
      } else {
        // The clip is always with respect to the document coordinates, so we
        // need to convert this to viewport coordinates when we aren't capturing
        // beyond the viewport.
        const [pageLeft, pageTop] = await this.evaluate(() => {
          if (!window.visualViewport) {
            throw new Error('window.visualViewport is not supported.');
          }
          return [
            window.visualViewport.pageLeft,
            window.visualViewport.pageTop,
          ] as const;
        });
        box = {
          ...clip,
          x: clip.x - pageLeft,
          y: clip.y - pageTop,
        };
      }
    }

    const data = await this.#frame.browsingContext.captureScreenshot({
      origin: captureBeyondViewport ? 'document' : 'viewport',
      format: {
        type: `image/${type}`,
        ...(quality !== undefined ? {quality: quality / 100} : {}),
      },
      ...(box ? {clip: {type: 'box', ...box}} : {}),
    });
    return data;
  }

  override async createCDPSession(): Promise<CDPSession> {
    return await this.#frame.createCDPSession();
  }

  override async bringToFront(): Promise<void> {
    await this.#frame.browsingContext.activate();
  }

  override async evaluateOnNewDocument<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<NewDocumentScriptEvaluation> {
    const expression = evaluationExpression(pageFunction, ...args);
    const script =
      await this.#frame.browsingContext.addPreloadScript(expression);

    return {identifier: script};
  }

  override async removeScriptToEvaluateOnNewDocument(
    id: string,
  ): Promise<void> {
    await this.#frame.browsingContext.removePreloadScript(id);
  }

  override async exposeFunction<Args extends unknown[], Ret>(
    name: string,
    pptrFunction:
      | ((...args: Args) => Awaitable<Ret>)
      | {default: (...args: Args) => Awaitable<Ret>},
  ): Promise<void> {
    return await this.mainFrame().exposeFunction(
      name,
      'default' in pptrFunction ? pptrFunction.default : pptrFunction,
    );
  }

  override isDragInterceptionEnabled(): boolean {
    return false;
  }

  override async setCacheEnabled(enabled?: boolean): Promise<void> {
    if (!this.#browserContext.browser().cdpSupported) {
      await this.#frame.browsingContext.setCacheBehavior(
        enabled ? 'default' : 'bypass',
      );
      return;
    }
    // TODO: handle CDP-specific cases such as MPArch.
    await this._client().send('Network.setCacheDisabled', {
      cacheDisabled: !enabled,
    });
  }

  override async cookies(...urls: string[]): Promise<Cookie[]> {
    const normalizedUrls = (urls.length ? urls : [this.url()]).map(url => {
      return new URL(url);
    });

    const cookies = await this.#frame.browsingContext.getCookies();
    return cookies
      .map(cookie => {
        return bidiToPuppeteerCookie(cookie);
      })
      .filter(cookie => {
        return normalizedUrls.some(url => {
          return testUrlMatchCookie(cookie, url);
        });
      });
  }

  override isServiceWorkerBypassed(): never {
    throw new UnsupportedOperation();
  }

  override target(): Target {
    const target = this.browserContext().getTargetForPage(this);
    if (!target) {
      throw new Error('Target not found for page');
    }
    return target;
  }

  override async waitForFileChooser(
    options: WaitTimeoutOptions = {},
  ): Promise<FileChooser> {
    const {timeout = this._timeoutSettings.timeout()} = options;
    const deferred = Deferred.create<FileChooser>({
      message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
      timeout,
    });

    this.#fileChooserDeferreds.add(deferred);

    if (options.signal) {
      options.signal.addEventListener(
        'abort',
        () => {
          deferred.reject(options.signal?.reason);
        },
        {once: true},
      );
    }

    this.#frame.browsingContext.once('filedialogopened', info => {
      if (!info.element) {
        return;
      }
      const chooser = new FileChooser(
        BidiElementHandle.from<HTMLInputElement>(
          {
            sharedId: info.element.sharedId,
            handle: info.element.handle,
            type: 'node',
          },
          this.#frame.mainRealm(),
        ),
        info.multiple,
      );
      for (const deferred of this.#fileChooserDeferreds) {
        deferred.resolve(chooser);
        this.#fileChooserDeferreds.delete(deferred);
      }
    });

    try {
      return await deferred.valueOrThrow();
    } catch (error) {
      this.#fileChooserDeferreds.delete(deferred);
      throw error;
    }
  }

  override workers(): BidiWebWorker[] {
    return [...this.#workers];
  }

  get isNetworkInterceptionEnabled(): boolean {
    return (
      Boolean(this.#requestInterception) || Boolean(this.#authInterception)
    );
  }

  #requestInterception?: string;
  override async setRequestInterception(enable: boolean): Promise<void> {
    this.#requestInterception = await this.#toggleInterception(
      [Bidi.Network.InterceptPhase.BeforeRequestSent],
      this.#requestInterception,
      enable,
    );
  }

  /**
   * @internal
   */
  override async setExtraHTTPHeaders(
    headers: Record<string, string>,
  ): Promise<void> {
    await this.#frame.browsingContext.setExtraHTTPHeaders(headers);
  }

  /**
   * @internal
   */
  _credentials: Credentials | null = null;
  #authInterception?: string;
  override async authenticate(credentials: Credentials | null): Promise<void> {
    this.#authInterception = await this.#toggleInterception(
      [Bidi.Network.InterceptPhase.AuthRequired],
      this.#authInterception,
      Boolean(credentials),
    );

    this._credentials = credentials;
  }

  async #toggleInterception(
    phases: [Bidi.Network.InterceptPhase, ...Bidi.Network.InterceptPhase[]],
    interception: string | undefined,
    expected: boolean,
  ): Promise<string | undefined> {
    if (expected && !interception) {
      return await this.#frame.browsingContext.addIntercept({
        phases,
      });
    } else if (!expected && interception) {
      await this.#frame.browsingContext.userContext.browser.removeIntercept(
        interception,
      );
      return;
    }
    return interception;
  }

  override setDragInterception(): never {
    throw new UnsupportedOperation();
  }

  override setBypassServiceWorker(): never {
    throw new UnsupportedOperation();
  }

  override async setOfflineMode(enabled: boolean): Promise<void> {
    if (!this.#browserContext.browser().cdpSupported) {
      return await this.#frame.browsingContext.setOfflineMode(enabled);
    }

    if (!this.#emulatedNetworkConditions) {
      this.#emulatedNetworkConditions = {
        offline: false,
        upload: -1,
        download: -1,
        latency: 0,
      };
    }
    this.#emulatedNetworkConditions.offline = enabled;
    return await this.#applyNetworkConditions();
  }

  override async emulateNetworkConditions(
    networkConditions: NetworkConditions | null,
  ): Promise<void> {
    if (!this.#browserContext.browser().cdpSupported) {
      if (
        !networkConditions?.offline &&
        ((networkConditions?.upload ?? -1) >= 0 ||
          (networkConditions?.download ?? -1) >= 0 ||
          (networkConditions?.latency ?? 0) > 0)
      ) {
        // WebDriver BiDi supports only offline mode.
        throw new UnsupportedOperation();
      }
      return await this.#frame.browsingContext.setOfflineMode(
        networkConditions?.offline ?? false,
      );
    }

    if (!this.#emulatedNetworkConditions) {
      this.#emulatedNetworkConditions = {
        offline: networkConditions?.offline ?? false,
        upload: -1,
        download: -1,
        latency: 0,
      };
    }
    this.#emulatedNetworkConditions.upload = networkConditions
      ? networkConditions.upload
      : -1;
    this.#emulatedNetworkConditions.download = networkConditions
      ? networkConditions.download
      : -1;
    this.#emulatedNetworkConditions.latency = networkConditions
      ? networkConditions.latency
      : 0;
    this.#emulatedNetworkConditions.offline =
      networkConditions?.offline ?? false;
    return await this.#applyNetworkConditions();
  }

  async #applyNetworkConditions(): Promise<void> {
    if (!this.#emulatedNetworkConditions) {
      return;
    }
    await this._client().send('Network.emulateNetworkConditions', {
      offline: this.#emulatedNetworkConditions.offline,
      latency: this.#emulatedNetworkConditions.latency,
      uploadThroughput: this.#emulatedNetworkConditions.upload,
      downloadThroughput: this.#emulatedNetworkConditions.download,
    });
  }

  override async setCookie(...cookies: CookieParam[]): Promise<void> {
    const pageURL = this.url();
    const pageUrlStartsWithHTTP = pageURL.startsWith('http');
    for (const cookie of cookies) {
      let cookieUrl = cookie.url || '';
      if (!cookieUrl && pageUrlStartsWithHTTP) {
        cookieUrl = pageURL;
      }
      assert(
        cookieUrl !== 'about:blank',
        `Blank page can not have cookie "${cookie.name}"`,
      );
      assert(
        !String.prototype.startsWith.call(cookieUrl || '', 'data:'),
        `Data URL page can not have cookie "${cookie.name}"`,
      );
      // TODO: Support Chrome cookie partition keys
      assert(
        cookie.partitionKey === undefined ||
          typeof cookie.partitionKey === 'string',
        'BiDi only allows domain partition keys',
      );

      const normalizedUrl = URL.canParse(cookieUrl)
        ? new URL(cookieUrl)
        : undefined;

      const domain = cookie.domain ?? normalizedUrl?.hostname;
      assert(
        domain !== undefined,
        `At least one of the url and domain needs to be specified`,
      );

      const bidiCookie: Bidi.Storage.PartialCookie = {
        domain: domain,
        name: cookie.name,
        value: {
          type: 'string',
          value: cookie.value,
        },
        ...(cookie.path !== undefined ? {path: cookie.path} : {}),
        ...(cookie.httpOnly !== undefined ? {httpOnly: cookie.httpOnly} : {}),
        ...(cookie.secure !== undefined ? {secure: cookie.secure} : {}),
        ...(cookie.sameSite !== undefined
          ? {sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite)}
          : {}),
        ...{expiry: convertCookiesExpiryCdpToBiDi(cookie.expires)},
        // Chrome-specific properties.
        ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(
          cookie,
          'sourceScheme',
          'priority',
          'url',
        ),
      };

      if (cookie.partitionKey !== undefined) {
        await this.browserContext().userContext.setCookie(
          bidiCookie,
          cookie.partitionKey,
        );
      } else {
        await this.#frame.browsingContext.setCookie(bidiCookie);
      }
    }
  }

  override async deleteCookie(
    ...cookies: DeleteCookiesRequest[]
  ): Promise<void> {
    await Promise.all(
      cookies.map(async deleteCookieRequest => {
        const cookieUrl = deleteCookieRequest.url ?? this.url();
        const normalizedUrl = URL.canParse(cookieUrl)
          ? new URL(cookieUrl)
          : undefined;

        const domain = deleteCookieRequest.domain ?? normalizedUrl?.hostname;
        assert(
          domain !== undefined,
          `At least one of the url and domain needs to be specified`,
        );

        const filter = {
          domain: domain,
          name: deleteCookieRequest.name,
          ...(deleteCookieRequest.path !== undefined
            ? {path: deleteCookieRequest.path}
            : {}),
        };
        await this.#frame.browsingContext.deleteCookie(filter);
      }),
    );
  }

  override async removeExposedFunction(name: string): Promise<void> {
    await this.#frame.removeExposedFunction(name);
  }

  override metrics(): never {
    throw new UnsupportedOperation();
  }

  override async captureHeapSnapshot(
    _options: HeapSnapshotOptions,
  ): Promise<void> {
    throw new UnsupportedOperation();
  }

  override async goBack(
    options: WaitForOptions = {},
  ): Promise<HTTPResponse | null> {
    return await this.#go(-1, options);
  }

  override async goForward(
    options: WaitForOptions = {},
  ): Promise<HTTPResponse | null> {
    return await this.#go(1, options);
  }

  async #go(
    delta: number,
    options: WaitForOptions,
  ): Promise<HTTPResponse | null> {
    const controller = new AbortController();

    try {
      const [response] = await Promise.all([
        this.waitForNavigation({
          ...options,
          signal: controller.signal,
        }),
        this.#frame.browsingContext.traverseHistory(delta),
      ]);
      return response;
    } catch (error) {
      controller.abort();
      throw error;
    }
  }

  override async waitForDevicePrompt(
    options: WaitTimeoutOptions = {},
  ): Promise<DeviceRequestPrompt> {
    return await this.mainFrame().waitForDevicePrompt(options);
  }

  override get bluetooth(): BluetoothEmulation {
    return this.mainFrame().browsingContext.bluetooth;
  }

  override extensionRealms(): Realm[] {
    throw new UnsupportedOperation();
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function evaluationExpression(fun: Function | string, ...args: unknown[]) {
  return `() => {${evaluationString(fun, ...args)}}`;
}

/**
 * Check domains match.
 */
function testUrlMatchCookieHostname(
  cookie: Cookie,
  normalizedUrl: URL,
): boolean {
  const cookieDomain = cookie.domain.toLowerCase();
  const urlHostname = normalizedUrl.hostname.toLowerCase();
  if (cookieDomain === urlHostname) {
    return true;
  }
  // TODO: does not consider additional restrictions w.r.t to IP
  // addresses which is fine as it is for representation and does not
  // mean that cookies actually apply that way in the browser.
  // https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.3
  return cookieDomain.startsWith('.') && urlHostname.endsWith(cookieDomain);
}

/**
 * Check paths match.
 * Spec: https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4
 */
function testUrlMatchCookiePath(cookie: Cookie, normalizedUrl: URL): boolean {
  const uriPath = normalizedUrl.pathname;
  const cookiePath = cookie.path;

  if (uriPath === cookiePath) {
    // The cookie-path and the request-path are identical.
    return true;
  }
  if (uriPath.startsWith(cookiePath)) {
    // The cookie-path is a prefix of the request-path.
    if (cookiePath.endsWith('/')) {
      // The last character of the cookie-path is %x2F ("/").
      return true;
    }
    if (uriPath[cookiePath.length] === '/') {
      // The first character of the request-path that is not included in the cookie-path
      // is a %x2F ("/") character.
      return true;
    }
  }
  return false;
}

/**
 * Checks the cookie matches the URL according to the spec:
 */
function testUrlMatchCookie(cookie: Cookie, url: URL): boolean {
  const normalizedUrl = new URL(url);
  assert(cookie !== undefined);
  if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
    return false;
  }
  return testUrlMatchCookiePath(cookie, normalizedUrl);
}

export function bidiToPuppeteerCookie(
  bidiCookie: Bidi.Network.Cookie,
  returnCompositePartitionKey = false,
): Cookie {
  const partitionKey = bidiCookie[CDP_SPECIFIC_PREFIX + 'partitionKey'];

  function getPartitionKey(): {partitionKey?: Cookie['partitionKey']} {
    if (typeof partitionKey === 'string') {
      return {partitionKey};
    }
    if (typeof partitionKey === 'object' && partitionKey !== null) {
      if (returnCompositePartitionKey) {
        return {
          partitionKey: {
            sourceOrigin: partitionKey.topLevelSite,
            hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false,
          },
        };
      }
      return {
        // TODO: a breaking change in Puppeteer is required to change
        // partitionKey type and report the composite partition key.
        partitionKey: partitionKey.topLevelSite,
      };
    }
    return {};
  }

  return {
    name: bidiCookie.name,
    // Presents binary value as base64 string.
    value: bidiCookie.value.value,
    domain: bidiCookie.domain,
    path: bidiCookie.path,
    size: bidiCookie.size,
    httpOnly: bidiCookie.httpOnly,
    secure: bidiCookie.secure,
    sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
    expires: bidiCookie.expiry ?? -1,
    session: bidiCookie.expiry === undefined || bidiCookie.expiry <= 0,
    // Extending with CDP-specific properties with `goog:` prefix.
    ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(
      bidiCookie,
      'sourceScheme',
      'partitionKeyOpaque',
      'priority',
    ),
    ...getPartitionKey(),
  };
}

const CDP_SPECIFIC_PREFIX = 'goog:';

/**
 * Gets CDP-specific properties from the BiDi cookie and returns them as a new object.
 */
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(
  bidiCookie: Bidi.Network.Cookie,
  ...propertyNames: Array<keyof Cookie>
): Partial<Cookie> {
  const result: Partial<Cookie> = {};
  for (const property of propertyNames) {
    if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== undefined) {
      result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
    }
  }
  return result;
}

/**
 * Gets CDP-specific properties from the cookie, adds CDP-specific prefixes and returns
 * them as a new object which can be used in BiDi.
 */
export function cdpSpecificCookiePropertiesFromPuppeteerToBidi(
  cookieParam: CookieParam,
  ...propertyNames: Array<keyof CookieParam>
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const property of propertyNames) {
    if (cookieParam[property] !== undefined) {
      result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
    }
  }
  return result;
}

function convertCookiesSameSiteBiDiToCdp(
  sameSite: Bidi.Network.SameSite | undefined,
): CookieSameSite {
  switch (sameSite) {
    case 'strict':
      return 'Strict';
    case 'lax':
      return 'Lax';
    case 'none':
      return 'None';
    default:
      return 'Default';
  }
}

export function convertCookiesSameSiteCdpToBiDi(
  sameSite: CookieSameSite | undefined,
): Bidi.Network.SameSite {
  switch (sameSite) {
    case 'Strict':
      return Bidi.Network.SameSite.Strict;
    case 'Lax':
      return Bidi.Network.SameSite.Lax;
    case 'None':
      return Bidi.Network.SameSite.None;
    default:
      return Bidi.Network.SameSite.Default;
  }
}

export function convertCookiesExpiryCdpToBiDi(
  expiry: number | undefined,
): number | undefined {
  return [undefined, -1].includes(expiry) ? undefined : expiry;
}

export function convertCookiesPartitionKeyFromPuppeteerToBiDi(
  partitionKey: CookiePartitionKey | string | undefined,
): string | undefined {
  if (partitionKey === undefined || typeof partitionKey === 'string') {
    return partitionKey;
  }
  if (partitionKey.hasCrossSiteAncestor) {
    throw new UnsupportedOperation(
      'WebDriver BiDi does not support `hasCrossSiteAncestor` yet.',
    );
  }
  return partitionKey.sourceOrigin;
}
