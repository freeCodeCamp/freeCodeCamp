/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {
  concat,
  distinctUntilChanged,
  EMPTY,
  filter,
  first,
  firstValueFrom,
  from,
  map,
  merge,
  mergeMap,
  mergeScan,
  of,
  raceWith,
  ReplaySubject,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer,
  type Observable,
} from '../../third_party/rxjs/rxjs.js';
import type {HTTPRequest} from '../api/HTTPRequest.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';
import type {Accessibility} from '../cdp/Accessibility.js';
import type {Coverage} from '../cdp/Coverage.js';
import type {NetworkConditions} from '../cdp/NetworkManager.js';
import type {Tracing} from '../cdp/Tracing.js';
import type {WebMCP} from '../cdp/WebMCP.js';
import type {ConsoleMessage} from '../common/ConsoleMessage.js';
import type {
  Cookie,
  CookieParam,
  DeleteCookiesRequest,
} from '../common/Cookie.js';
import type {Device} from '../common/Device.js';
import {TargetCloseError} from '../common/Errors.js';
import {
  EventEmitter,
  type EventsWithWildcard,
  type EventType,
  type Handler,
} from '../common/EventEmitter.js';
import type {FileChooser} from '../common/FileChooser.js';
import type {PDFOptions} from '../common/PDFOptions.js';
import {TimeoutSettings} from '../common/TimeoutSettings.js';
import type {
  Awaitable,
  AwaitablePredicate,
  EvaluateFunc,
  EvaluateFuncWith,
  HandleFor,
  NodeFor,
} from '../common/types.js';
import {
  debugError,
  fromEmitterEvent,
  filterAsync,
  isString,
  NETWORK_IDLE_TIME,
  timeout,
  withSourcePuppeteerURLIfNone,
  fromAbortSignal,
} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import {environment} from '../environment.js';
import type {ScreenRecorder} from '../node/ScreenRecorder.js';
import {guarded} from '../util/decorators.js';
import {
  AsyncDisposableStack,
  asyncDisposeSymbol,
  DisposableStack,
  disposeSymbol,
} from '../util/disposable.js';
import {stringToTypedArray} from '../util/encoding.js';

import type {BluetoothEmulation} from './BluetoothEmulation.js';
import type {Browser, WindowId} from './Browser.js';
import type {BrowserContext} from './BrowserContext.js';
import type {CDPSession} from './CDPSession.js';
import type {DeviceRequestPrompt} from './DeviceRequestPrompt.js';
import type {Dialog} from './Dialog.js';
import type {
  BoundingBox,
  ClickOptions,
  ElementHandle,
} from './ElementHandle.js';
import type {Extension} from './Extension.js';
import type {
  Frame,
  FrameAddScriptTagOptions,
  FrameAddStyleTagOptions,
  FrameWaitForFunctionOptions,
  GoToOptions,
  SetContentWaitForOptions,
  WaitForOptions,
} from './Frame.js';
import type {
  Keyboard,
  KeyboardTypeOptions,
  Mouse,
  Touchscreen,
} from './Input.js';
import type {Issue} from './Issue.js';
import type {JSHandle} from './JSHandle.js';
import {
  FunctionLocator,
  Locator,
  NodeLocator,
  type AwaitedLocator,
} from './locators/locators.js';
import type {Realm} from './Realm.js';
import type {Target} from './Target.js';
import type {WebWorker} from './WebWorker.js';

/**
 * @public
 */
export interface Metrics {
  Timestamp?: number;
  Documents?: number;
  Frames?: number;
  JSEventListeners?: number;
  Nodes?: number;
  LayoutCount?: number;
  RecalcStyleCount?: number;
  LayoutDuration?: number;
  RecalcStyleDuration?: number;
  ScriptDuration?: number;
  TaskDuration?: number;
  JSHeapUsedSize?: number;
  JSHeapTotalSize?: number;
}

/**
 * @public
 */
export interface Credentials {
  username: string;
  password: string;
}

/**
 * @public
 */
export interface WaitForNetworkIdleOptions extends WaitTimeoutOptions {
  /**
   * Time (in milliseconds) the network should be idle.
   *
   * @defaultValue `500`
   */
  idleTime?: number;
  /**
   * Maximum number concurrent of network connections to be considered inactive.
   *
   * @defaultValue `0`
   */
  concurrency?: number;
}

/**
 * @public
 */
export interface WaitTimeoutOptions {
  /**
   * Maximum wait time in milliseconds. Pass 0 to disable the timeout.
   *
   * The default value can be changed by using the
   * {@link Page.setDefaultTimeout} method.
   *
   * @defaultValue `30_000`
   */
  timeout?: number;
  /**
   * A signal object that allows you to cancel a waitFor call.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export interface WaitForSelectorOptions {
  /**
   * Wait for the selected element to be present in DOM and to be visible. See
   * {@link ElementHandle.isVisible} for the definition of element visibility.
   *
   * @defaultValue `false`
   */
  visible?: boolean;
  /**
   * Wait for the selected element to not be found in the DOM or to be hidden.
   * See {@link ElementHandle.isHidden} for the definition of element
   * invisibility.
   *
   * @defaultValue `false`
   */
  hidden?: boolean;
  /**
   * Maximum time to wait in milliseconds. Pass `0` to disable timeout.
   *
   * The default value can be changed by using {@link Page.setDefaultTimeout}
   *
   * @defaultValue `30_000` (30 seconds)
   */
  timeout?: number;
  /**
   * A signal object that allows you to cancel a waitForSelector call.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export interface GeolocationOptions {
  /**
   * Latitude between `-90` and `90`.
   */
  longitude: number;
  /**
   * Longitude between `-180` and `180`.
   */
  latitude: number;
  /**
   * Optional non-negative accuracy value.
   */
  accuracy?: number;
}

/**
 * A media feature to emulate.
 *
 * @public
 */
export interface MediaFeature {
  /**
   * A name of the feature, for example, 'prefers-reduced-motion'.
   */
  name: string;
  /**
   * A value for the feature, for example, 'reduce'.
   */
  value: string;
}

/**
 * @public
 */
export interface ScreenshotClip extends BoundingBox {
  /**
   * @defaultValue `1`
   */
  scale?: number;
}

/**
 * @public
 */
export type ImageFormat = 'png' | 'jpeg' | 'webp';

/**
 * @public
 */
export type VideoFormat = 'webm' | 'gif' | 'mp4';

/**
 * @public
 */
export interface ScreenshotOptions {
  /**
   * @defaultValue `false`
   */
  optimizeForSpeed?: boolean;
  /**
   * @defaultValue `'png'`
   */
  type?: ImageFormat;
  /**
   * Quality of the image, between 0-100. Not applicable to `png` images.
   */
  quality?: number;
  /**
   * Capture the screenshot from the surface, rather than the view.
   *
   * @defaultValue `true`
   */
  fromSurface?: boolean;
  /**
   * When `true`, takes a screenshot of the full page.
   *
   * @defaultValue `false`
   */
  fullPage?: boolean;
  /**
   * Hides default white background and allows capturing screenshots with transparency.
   *
   * @defaultValue `false`
   */
  omitBackground?: boolean;
  /**
   * The file path to save the image to. The screenshot type will be inferred
   * from file extension. If path is a relative path, then it is resolved
   * relative to current working directory. If no path is provided, the image
   * won't be saved to the disk.
   */
  path?: string;
  /**
   * Specifies the region of the page/element to clip.
   */
  clip?: ScreenshotClip;
  /**
   * Encoding of the image.
   *
   * @defaultValue `'binary'`
   */
  encoding?: 'base64' | 'binary';
  /**
   * Capture the screenshot beyond the viewport.
   *
   * @defaultValue `false` if there is no `clip`. `true` otherwise.
   */
  captureBeyondViewport?: boolean;
}

/**
 * @public
 * @experimental
 */
export interface ScreencastOptions {
  /**
   * File path to save the screencast to.
   */
  path?: `${string}.${VideoFormat}`;
  /**
   * Specifies whether to overwrite output file,
   * or exit immediately if it already exists.
   *
   * @defaultValue `true`
   */
  overwrite?: boolean;
  /**
   * Specifies the output file format.
   *
   * @defaultValue `'webm'`
   */
  format?: VideoFormat;
  /**
   * Specifies the region of the viewport to crop.
   */
  crop?: BoundingBox;
  /**
   * Scales the output video.
   *
   * For example, `0.5` will shrink the width and height of the output video by
   * half. `2` will double the width and height of the output video.
   *
   * @defaultValue `1`
   */
  scale?: number;
  /**
   * Specifies the speed to record at.
   *
   * For example, `0.5` will slowdown the output video by 50%. `2` will double the
   * speed of the output video.
   *
   * @defaultValue `1`
   */
  speed?: number;
  /**
   * Specifies the frame rate in frames per second.
   *
   * @defaultValue `30` (`20` for GIF)
   */
  fps?: number;
  /**
   * Specifies the number of times to loop playback, from `0` to `Infinity`.
   * A value of `0` or `undefined` will disable looping.
   *
   * @defaultValue `undefined`
   */
  loop?: number;
  /**
   * Specifies the delay between iterations of a loop, in ms.
   * `-1` is a special value to re-use the previous delay.
   *
   * @defaultValue `-1`
   */
  delay?: number;
  /**
   * Specifies the recording
   * {@link https://trac.ffmpeg.org/wiki/Encode/VP9#constantq | quality}
   * Constant Rate Factor between `0`–`63`. Lower values mean better quality.
   *
   * @defaultValue `30`
   */
  quality?: number;
  /**
   * Specifies the maximum number of
   * {@link https://ffmpeg.org/ffmpeg-filters.html#palettegen | palette}
   * colors to quantize, with GIF limited to `256`.
   * Restrict the palette to only necessary colors to reduce output file size.
   *
   * @defaultValue `256`
   */
  colors?: number;
  /**
   * Path to the {@link https://ffmpeg.org/ | ffmpeg}.
   *
   * Required if `ffmpeg` is not in your PATH.
   *
   * @defaultValue `'ffmpeg'`
   */
  ffmpegPath?: string;
}

/**
 * @public
 */
export interface QueryOptions {
  /**
   * Whether to run the query in isolation. When returning many elements
   * from {@link Page.$$} or similar methods, it might be useful to turn
   * off the isolation to improve performance. By default, the querying
   * code will be executed in a separate sandbox realm.
   *
   * @defaultValue `true`
   */
  isolate: boolean;
}

/**
 * All the events that a page instance may emit.
 *
 * @public
 */
export const enum PageEvent {
  /**
   * Emitted when the page closes.
   */
  Close = 'close',
  /**
   * Emitted when JavaScript within the page calls one of console API methods,
   * e.g. `console.log` or `console.dir`. Also emitted if the page throws an
   * error or a warning.
   *
   * @remarks
   * A `console` event provides a {@link ConsoleMessage} representing the
   * console message that was logged.
   *
   * @example
   * An example of handling `console` event:
   *
   * ```ts
   * page.on('console', msg => {
   *   for (let i = 0; i < msg.args().length; ++i)
   *     console.log(`${i}: ${msg.args()[i]}`);
   * });
   * page.evaluate(() => console.log('hello', 5, {foo: 'bar'}));
   * ```
   */
  Console = 'console',
  /**
   * Emitted when a JavaScript dialog appears, such as `alert`, `prompt`,
   * `confirm` or `beforeunload`. Puppeteer can respond to the dialog via
   * {@link Dialog.accept} or {@link Dialog.dismiss}.
   */
  Dialog = 'dialog',
  /**
   * Emitted when the JavaScript
   * {@link https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded | DOMContentLoaded }
   * event is dispatched.
   */
  DOMContentLoaded = 'domcontentloaded',
  /**
   * Emitted when a DevTools issue is reported.
   * @experimental
   */
  Issue = 'issue',
  /**
   * Emitted when the page crashes. Will contain an `Error`.
   */
  Error = 'error',
  /** Emitted when a frame is attached. Will contain a {@link Frame}. */
  FrameAttached = 'frameattached',
  /** Emitted when a frame is detached. Will contain a {@link Frame}. */
  FrameDetached = 'framedetached',
  /**
   * Emitted when a frame is navigated to a new URL. Will contain a
   * {@link Frame}.
   */
  FrameNavigated = 'framenavigated',
  /**
   * Emitted when the JavaScript
   * {@link https://developer.mozilla.org/en-US/docs/Web/Events/load | load}
   * event is dispatched.
   */
  Load = 'load',
  /**
   * Emitted when the JavaScript code makes a call to `console.timeStamp`. For
   * the list of metrics see {@link Page.metrics | page.metrics}.
   *
   * @remarks
   * Contains an object with two properties:
   *
   * - `title`: the title passed to `console.timeStamp`
   * - `metrics`: object containing metrics as key/value pairs. The values will
   *   be `number`s.
   */
  Metrics = 'metrics',
  /**
   * Emitted when an uncaught exception happens within the page. Contains an
   * `Error` or data of type unknown.
   */
  PageError = 'pageerror',
  /**
   * Emitted when the page opens a new tab or window.
   *
   * Contains a {@link Page} corresponding to the popup window.
   *
   * @example
   *
   * ```ts
   * const [popup] = await Promise.all([
   *   new Promise(resolve => page.once('popup', resolve)),
   *   page.click('a[target=_blank]'),
   * ]);
   * ```
   *
   * ```ts
   * const [popup] = await Promise.all([
   *   new Promise(resolve => page.once('popup', resolve)),
   *   page.evaluate(() => window.open('https://example.com')),
   * ]);
   * ```
   */
  Popup = 'popup',
  /**
   * Emitted when a page issues a request and contains a {@link HTTPRequest}.
   *
   * @remarks
   * The object is readonly. See {@link Page.setRequestInterception} for
   * intercepting and mutating requests.
   */
  Request = 'request',
  /**
   * Emitted when a request ended up loading from cache. Contains a
   * {@link HTTPRequest}.
   *
   * @remarks
   * For certain requests, might contain undefined.
   * {@link https://crbug.com/750469}
   */
  RequestServedFromCache = 'requestservedfromcache',
  /**
   * Emitted when a request fails, for example by timing out.
   *
   * Contains a {@link HTTPRequest}.
   *
   * @remarks
   * HTTP Error responses, such as 404 or 503, are still successful responses
   * from HTTP standpoint, so request will complete with `requestfinished` event
   * and not with `requestfailed`.
   */
  RequestFailed = 'requestfailed',
  /**
   * Emitted when a request finishes successfully. Contains a
   * {@link HTTPRequest}.
   */
  RequestFinished = 'requestfinished',
  /**
   * Emitted when a response is received. Contains a {@link HTTPResponse}.
   */
  Response = 'response',
  /**
   * Emitted when a dedicated
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}
   * is spawned by the page.
   */
  WorkerCreated = 'workercreated',
  /**
   * Emitted when a dedicated
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}
   * is destroyed by the page.
   */
  WorkerDestroyed = 'workerdestroyed',
}

/**
 * Denotes the objects received by callback functions for page events.
 *
 * See {@link PageEvent} for more detail on the events and when they are
 * emitted.
 *
 * @public
 */
export interface PageEvents extends Record<EventType, unknown> {
  [PageEvent.Close]: undefined;
  [PageEvent.Console]: ConsoleMessage;
  [PageEvent.Dialog]: Dialog;
  [PageEvent.DOMContentLoaded]: undefined;
  [PageEvent.Issue]: Issue;
  [PageEvent.Error]: Error;
  [PageEvent.FrameAttached]: Frame;
  [PageEvent.FrameDetached]: Frame;
  [PageEvent.FrameNavigated]: Frame;
  [PageEvent.Load]: undefined;
  [PageEvent.Metrics]: {title: string; metrics: Metrics};
  [PageEvent.PageError]: Error | unknown;
  [PageEvent.Popup]: Page | null;
  [PageEvent.Request]: HTTPRequest;
  [PageEvent.Response]: HTTPResponse;
  [PageEvent.RequestFailed]: HTTPRequest;
  [PageEvent.RequestFinished]: HTTPRequest;
  [PageEvent.RequestServedFromCache]: HTTPRequest;
  [PageEvent.WorkerCreated]: WebWorker;
  [PageEvent.WorkerDestroyed]: WebWorker;
}

/**
 * @public
 */
export interface NewDocumentScriptEvaluation {
  identifier: string;
}

/**
 * @internal
 */
export function setDefaultScreenshotOptions(options: ScreenshotOptions): void {
  options.optimizeForSpeed ??= false;
  options.type ??= 'png';
  options.fromSurface ??= true;
  options.fullPage ??= false;
  options.omitBackground ??= false;
  options.encoding ??= 'binary';
  options.captureBeyondViewport ??= true;
}

/**
 * @public
 */
export interface ReloadOptions extends WaitForOptions {
  /**
   * If set to true, the browser caches are ignored for the page reload.
   *
   * @defaultValue true
   * @public
   */
  ignoreCache?: boolean;
}

/**
 * Options for {@link Page.captureHeapSnapshot}.
 *
 * @public
 */
export interface HeapSnapshotOptions {
  /**
   * The file path to save the heap snapshot to.
   */
  path: string;
}

/**
 * Page provides methods to interact with a single tab or
 * {@link https://developer.chrome.com/extensions/background_pages | extension background page}
 * in the browser.
 *
 * :::note
 *
 * One Browser instance might have multiple Page instances.
 *
 * :::
 *
 * @example
 * This example creates a page, navigates it to a URL, and then saves a screenshot:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://example.com');
 * await page.screenshot({path: 'screenshot.png'});
 * await browser.close();
 * ```
 *
 * The Page class extends from Puppeteer's {@link EventEmitter} class and will
 * emit various events which are documented in the {@link PageEvent} enum.
 *
 * @example
 * This example logs a message for a single page `load` event:
 *
 * ```ts
 * page.once('load', () => console.log('Page loaded!'));
 * ```
 *
 * To unsubscribe from events use the {@link EventEmitter.off} method:
 *
 * ```ts
 * function logRequest(interceptedRequest) {
 *   console.log('A request was made:', interceptedRequest.url());
 * }
 * page.on('request', logRequest);
 * // Sometime later...
 * page.off('request', logRequest);
 * ```
 *
 * @public
 */
export abstract class Page extends EventEmitter<PageEvents> {
  /**
   * @internal
   */
  _isDragging = false;
  /**
   * @internal
   */
  _timeoutSettings = new TimeoutSettings();

  /**
   * Internal API to get an implementation-specific identifier
   * for the tab. In Chrome, it is a tab target id. If unknown,
   * returns an empty string.
   *
   * @internal
   */
  _tabId = '';

  #requestHandlers = new WeakMap<Handler<HTTPRequest>, Handler<HTTPRequest>>();

  #inflight$ = new ReplaySubject<number>(1);

  /**
   * @internal
   */
  constructor() {
    super();

    fromEmitterEvent(this, PageEvent.Request)
      .pipe(
        mergeMap(originalRequest => {
          return concat(
            of(1),
            merge(
              fromEmitterEvent(this, PageEvent.RequestFailed),
              fromEmitterEvent(this, PageEvent.RequestFinished),
              fromEmitterEvent(this, PageEvent.Response).pipe(
                map(response => {
                  return response.request();
                }),
              ),
            ).pipe(
              filter(request => {
                return request.id === originalRequest.id;
              }),
              take(1),
              map(() => {
                return -1;
              }),
            ),
          );
        }),
        mergeScan((acc, addend) => {
          return of(acc + addend);
        }, 0),
        takeUntil(fromEmitterEvent(this, PageEvent.Close)),
        startWith(0),
      )
      .subscribe(this.#inflight$);
  }

  /**
   * `true` if the service worker are being bypassed, `false` otherwise.
   */
  abstract isServiceWorkerBypassed(): boolean;

  /**
   * `true` if drag events are being intercepted, `false` otherwise.
   *
   * @deprecated We no longer support intercepting drag payloads. Use the new
   * drag APIs found on {@link ElementHandle} to drag (or just use the
   * {@link Page.mouse}).
   */
  abstract isDragInterceptionEnabled(): boolean;

  /**
   * `true` if the page has JavaScript enabled, `false` otherwise.
   */
  abstract isJavaScriptEnabled(): boolean;

  /**
   * Listen to page events.
   *
   * @remarks
   * This method exists to define event typings and handle proper wireup of
   * cooperative request interception. Actual event listening and dispatching is
   * delegated to {@link EventEmitter}.
   *
   * @internal
   */
  override on<K extends keyof EventsWithWildcard<PageEvents>>(
    type: K,
    handler: (event: EventsWithWildcard<PageEvents>[K]) => void,
  ): this {
    if (type !== PageEvent.Request) {
      return super.on(type, handler);
    }
    let wrapper = this.#requestHandlers.get(
      handler as (event: PageEvents[PageEvent.Request]) => void,
    );
    if (wrapper === undefined) {
      wrapper = (event: HTTPRequest) => {
        event.enqueueInterceptAction(() => {
          return handler(event as EventsWithWildcard<PageEvents>[K]);
        });
      };
      this.#requestHandlers.set(
        handler as (event: PageEvents[PageEvent.Request]) => void,
        wrapper,
      );
    }
    return super.on(
      type,
      wrapper as (event: EventsWithWildcard<PageEvents>[K]) => void,
    );
  }

  /**
   * @internal
   */
  override off<K extends keyof EventsWithWildcard<PageEvents>>(
    type: K,
    handler: (event: EventsWithWildcard<PageEvents>[K]) => void,
  ): this {
    if (type === PageEvent.Request) {
      handler =
        (this.#requestHandlers.get(
          handler as (
            event: EventsWithWildcard<PageEvents>[PageEvent.Request],
          ) => void,
        ) as (event: EventsWithWildcard<PageEvents>[K]) => void) || handler;
    }
    return super.off(type, handler);
  }

  /**
   * This method is typically coupled with an action that triggers file
   * choosing.
   *
   * :::caution
   *
   * This must be called before the file chooser is launched. It will not return
   * a currently active file chooser.
   *
   * :::
   *
   * :::caution
   *
   * Interception of file dialogs triggered via DOM APIs such as
   * window.showOpenFilePicker is currently not supported.
   *
   * :::
   *
   * @remarks
   * In the "headful" browser, this method results in the native file picker
   * dialog `not showing up` for the user.
   *
   * @example
   * The following example clicks a button that issues a file chooser
   * and then responds with `/tmp/myfile.pdf` as if a user has selected this file.
   *
   * ```ts
   * const [fileChooser] = await Promise.all([
   *   page.waitForFileChooser(),
   *   page.click('#upload-file-button'),
   *   // some button that triggers file selection
   * ]);
   * await fileChooser.accept(['/tmp/myfile.pdf']);
   * ```
   */
  abstract waitForFileChooser(
    options?: WaitTimeoutOptions,
  ): Promise<FileChooser>;

  /**
   * Sets the page's geolocation.
   *
   * @remarks
   * Consider using {@link BrowserContext.overridePermissions} to grant
   * permissions for the page to read its geolocation.
   *
   * @example
   *
   * ```ts
   * await page.setGeolocation({latitude: 59.95, longitude: 30.31667});
   * ```
   */
  abstract setGeolocation(options: GeolocationOptions): Promise<void>;

  /**
   * A target this page was created from.
   *
   * @deprecated Use {@link Page.createCDPSession} directly.
   */
  abstract target(): Target;

  /**
   * Get the browser the page belongs to.
   */
  abstract browser(): Browser;

  /**
   * Get the browser context that the page belongs to.
   */
  abstract browserContext(): BrowserContext;

  /**
   * The page's main frame.
   */
  abstract mainFrame(): Frame;

  /**
   * Creates a Chrome Devtools Protocol session attached to the page.
   */
  abstract createCDPSession(): Promise<CDPSession>;

  /**
   * {@inheritDoc Keyboard}
   */
  abstract get keyboard(): Keyboard;

  /**
   * {@inheritDoc Touchscreen}
   */
  abstract get touchscreen(): Touchscreen;

  /**
   * {@inheritDoc Coverage}
   */
  abstract get coverage(): Coverage;

  /**
   * {@inheritDoc Tracing}
   */
  abstract get tracing(): Tracing;

  /**
   * Experimental API for {@link https://github.com/webmachinelearning/webmcp
   * | WebMCP}. Requires Chrome 149+ with the
   * `--enable-features=WebMCPTesting,DevToolsWebMCPSupport` flags enabled.
   *
   * @experimental
   */
  abstract get webmcp(): WebMCP;

  /**
   * {@inheritDoc Accessibility}
   */
  get accessibility(): Accessibility {
    return this.mainFrame().accessibility;
  }

  /**
   * An array of all frames attached to the page.
   */
  abstract frames(): Frame[];

  /**
   * All of the dedicated {@link
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API |
   * WebWorkers} associated with the page.
   *
   * @remarks
   * This does not contain ServiceWorkers
   */
  abstract workers(): WebWorker[];

  /**
   * Activating request interception enables {@link HTTPRequest.abort},
   * {@link HTTPRequest.continue} and {@link HTTPRequest.respond} methods. This
   * provides the capability to modify network requests that are made by a page.
   *
   * Once request interception is enabled, every request will stall unless it's
   * continued, responded or aborted; or completed using the browser cache.
   *
   * See the
   * {@link https://pptr.dev/guides/network-interception|Request interception guide}
   * for more details.
   *
   * @example
   * An example of a naïve request interceptor that aborts all image requests:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.setRequestInterception(true);
   * page.on('request', interceptedRequest => {
   *   if (
   *     interceptedRequest.url().endsWith('.png') ||
   *     interceptedRequest.url().endsWith('.jpg')
   *   )
   *     interceptedRequest.abort();
   *   else interceptedRequest.continue();
   * });
   * await page.goto('https://example.com');
   * await browser.close();
   * ```
   *
   * @param value - Whether to enable request interception.
   */
  abstract setRequestInterception(value: boolean): Promise<void>;

  /**
   * Toggles ignoring of service worker for each request.
   *
   * @param bypass - Whether to bypass service worker and load from network.
   */
  abstract setBypassServiceWorker(bypass: boolean): Promise<void>;

  /**
   * @param enabled - Whether to enable drag interception.
   *
   * @deprecated We no longer support intercepting drag payloads. Use the new
   * drag APIs found on {@link ElementHandle} to drag (or just use the
   * {@link Page.mouse}).
   */
  abstract setDragInterception(enabled: boolean): Promise<void>;

  /**
   * Emulates the offline mode.
   *
   * It does not change the download/upload/latency parameters set by
   * {@link Page.emulateNetworkConditions}
   *
   * @param enabled - When `true`, enables offline mode for the page.
   */
  abstract setOfflineMode(enabled: boolean): Promise<void>;

  /**
   * This does not affect WebSockets and WebRTC PeerConnections (see
   * https://crbug.com/563644). To set the page offline, you can use
   * {@link Page.setOfflineMode}.
   *
   * A list of predefined network conditions can be used by importing
   * {@link PredefinedNetworkConditions}.
   *
   * @example
   *
   * ```ts
   * import {PredefinedNetworkConditions} from 'puppeteer';
   * const slow3G = PredefinedNetworkConditions['Slow 3G'];
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.emulateNetworkConditions(slow3G);
   * await page.goto('https://www.google.com');
   * // other actions...
   * await browser.close();
   * ```
   *
   * @param networkConditions - Passing `null` disables network condition
   * emulation.
   */
  abstract emulateNetworkConditions(
    networkConditions: NetworkConditions | null,
  ): Promise<void>;

  /**
   * This setting will change the default maximum navigation time for the
   * following methods and related shortcuts:
   *
   * - {@link Page.goBack | page.goBack(options)}
   *
   * - {@link Page.goForward | page.goForward(options)}
   *
   * - {@link Page.goto | page.goto(url,options)}
   *
   * - {@link Page.reload | page.reload(options)}
   *
   * - {@link Page.setContent | page.setContent(html,options)}
   *
   * - {@link Page.waitForNavigation | page.waitForNavigation(options)}
   *   @param timeout - Maximum navigation time in milliseconds.
   */
  abstract setDefaultNavigationTimeout(timeout: number): void;

  /**
   * @param timeout - Maximum time in milliseconds.
   */
  abstract setDefaultTimeout(timeout: number): void;

  /**
   * Maximum time in milliseconds.
   */
  abstract getDefaultTimeout(): number;

  /**
   * Maximum navigation time in milliseconds.
   */
  abstract getDefaultNavigationTimeout(): number;

  /**
   * Creates a locator for the provided selector. See {@link Locator} for
   * details and supported actions.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   */
  locator<Selector extends string>(
    selector: Selector,
  ): Locator<NodeFor<Selector>>;

  /**
   * Creates a locator for the provided function. See {@link Locator} for
   * details and supported actions.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   */
  locator<Ret>(func: () => Awaitable<Ret>): Locator<Ret>;

  locator<Selector extends string, Ret, T extends Node>(
    input: Selector | (() => Awaitable<Ret>),
  ): Locator<NodeFor<Selector>> | Locator<Ret> | Locator<T> {
    if (typeof input === 'string') {
      return NodeLocator.create(this, input);
    } else {
      return FunctionLocator.create(this, input);
    }
  }

  /**
   * A shortcut for {@link Locator.race} that does not require static imports.
   *
   * @internal
   */
  locatorRace<Locators extends readonly unknown[] | []>(
    locators: Locators,
  ): Locator<AwaitedLocator<Locators[number]>> {
    return Locator.race(locators);
  }

  /**
   * Finds the first element that matches the selector. If no element matches
   * the selector, the return value resolves to `null`.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.$ | Page.mainFrame().$(selector) }.
   */
  async $<Selector extends string>(
    selector: Selector,
  ): Promise<ElementHandle<NodeFor<Selector>> | null> {
    return await this.mainFrame().$(selector);
  }

  /**
   * Finds elements on the page that match the selector. If no elements
   * match the selector, the return value resolves to `[]`.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
   */
  async $$<Selector extends string>(
    selector: Selector,
    options?: QueryOptions,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>> {
    return await this.mainFrame().$$(selector, options);
  }

  /**
   * @remarks
   *
   * The only difference between {@link Page.evaluate | page.evaluate} and
   * `page.evaluateHandle` is that `evaluateHandle` will return the value
   * wrapped in an in-page object.
   *
   * If the function passed to `page.evaluateHandle` returns a Promise, the
   * function will wait for the promise to resolve and return its value.
   *
   * You can pass a string instead of a function (although functions are
   * recommended as they are easier to debug and use with TypeScript):
   *
   * @example
   *
   * ```ts
   * const aHandle = await page.evaluateHandle('document');
   * ```
   *
   * @example
   * {@link JSHandle} instances can be passed as arguments to the `pageFunction`:
   *
   * ```ts
   * const aHandle = await page.evaluateHandle(() => document.body);
   * const resultHandle = await page.evaluateHandle(
   *   body => body.innerHTML,
   *   aHandle,
   * );
   * console.log(await resultHandle.jsonValue());
   * await resultHandle.dispose();
   * ```
   *
   * Most of the time this function returns a {@link JSHandle},
   * but if `pageFunction` returns a reference to an element,
   * you instead get an {@link ElementHandle} back:
   *
   * @example
   *
   * ```ts
   * const button = await page.evaluateHandle(() =>
   *   document.querySelector('button'),
   * );
   * // can call `click` because `button` is an `ElementHandle`
   * await button.click();
   * ```
   *
   * The TypeScript definitions assume that `evaluateHandle` returns
   * a `JSHandle`, but if you know it's going to return an
   * `ElementHandle`, pass it as the generic argument:
   *
   * ```ts
   * const button = await page.evaluateHandle<ElementHandle>(...);
   * ```
   *
   * @param pageFunction - a function that is run within the page
   * @param args - arguments to be passed to the pageFunction
   */
  async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluateHandle.name,
      pageFunction,
    );
    return await this.mainFrame().evaluateHandle(pageFunction, ...args);
  }

  /**
   * This method iterates the JavaScript heap and finds all objects with the
   * given prototype.
   *
   * @example
   *
   * ```ts
   * // Create a Map object
   * await page.evaluate(() => (window.map = new Map()));
   * // Get a handle to the Map object prototype
   * const mapPrototype = await page.evaluateHandle(() => Map.prototype);
   * // Query all map instances into an array
   * const mapInstances = await page.queryObjects(mapPrototype);
   * // Count amount of map objects in heap
   * const count = await page.evaluate(maps => maps.length, mapInstances);
   * await mapInstances.dispose();
   * await mapPrototype.dispose();
   * ```
   *
   * @param prototypeHandle - a handle to the object prototype.
   * @returns Promise which resolves to a handle to an array of objects with
   * this prototype.
   */
  abstract queryObjects<Prototype>(
    prototypeHandle: JSHandle<Prototype>,
  ): Promise<JSHandle<Prototype[]>>;

  /**
   * This method finds the first element within the page that matches the selector
   * and passes the result as the first argument to the `pageFunction`.
   *
   * @remarks
   *
   * If no element is found matching `selector`, the method will throw an error.
   *
   * If `pageFunction` returns a promise `$eval` will wait for the promise to
   * resolve and then return its value.
   *
   * @example
   *
   * ```ts
   * const searchValue = await page.$eval('#search', el => el.value);
   * const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
   * const html = await page.$eval('.main-container', el => el.outerHTML);
   * ```
   *
   * If you are using TypeScript, you may have to provide an explicit type to the
   * first argument of the `pageFunction`.
   * By default it is typed as `Element`, but you may need to provide a more
   * specific sub-type:
   *
   * @example
   *
   * ```ts
   * // if you don't provide HTMLInputElement here, TS will error
   * // as `value` is not on `Element`
   * const searchValue = await page.$eval(
   *   '#search',
   *   (el: HTMLInputElement) => el.value,
   * );
   * ```
   *
   * The compiler should be able to infer the return type
   * from the `pageFunction` you provide. If it is unable to, you can use the generic
   * type to tell the compiler what return type you expect from `$eval`:
   *
   * @example
   *
   * ```ts
   * // The compiler can infer the return type in this case, but if it can't
   * // or if you want to be more explicit, provide it as the generic type.
   * const searchValue = await page.$eval<string>(
   *   '#search',
   *   (el: HTMLInputElement) => el.value,
   * );
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - the function to be evaluated in the page context.
   * Will be passed the result of the element matching the selector as its
   * first argument.
   * @param args - any additional arguments to pass through to `pageFunction`.
   *
   * @returns The result of calling `pageFunction`. If it returns an element it
   * is wrapped in an {@link ElementHandle}, else the raw value itself is
   * returned.
   */
  async $eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<
      NodeFor<Selector>,
      Params
    >,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
    return await this.mainFrame().$eval(selector, pageFunction, ...args);
  }

  /**
   * This method returns all elements matching the selector and passes the
   * resulting array as the first argument to the `pageFunction`.
   *
   * @remarks
   * If `pageFunction` returns a promise `$$eval` will wait for the promise to
   * resolve and then return its value.
   *
   * @example
   *
   * ```ts
   * // get the amount of divs on the page
   * const divCount = await page.$$eval('div', divs => divs.length);
   *
   * // get the text content of all the `.options` elements:
   * const options = await page.$$eval('div > span.options', options => {
   *   return options.map(option => option.textContent);
   * });
   * ```
   *
   * If you are using TypeScript, you may have to provide an explicit type to the
   * first argument of the `pageFunction`.
   * By default it is typed as `Element[]`, but you may need to provide a more
   * specific sub-type:
   *
   * @example
   *
   * ```ts
   * await page.$$eval('input', elements => {
   *   return elements.map(e => e.value);
   * });
   * ```
   *
   * The compiler should be able to infer the return type
   * from the `pageFunction` you provide. If it is unable to, you can use the generic
   * type to tell the compiler what return type you expect from `$$eval`:
   *
   * @example
   *
   * ```ts
   * const allInputValues = await page.$$eval('input', elements =>
   *   elements.map(e => e.textContent),
   * );
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - the function to be evaluated in the page context.
   * Will be passed an array of matching elements as its first argument.
   * @param args - any additional arguments to pass through to `pageFunction`.
   *
   * @returns The result of calling `pageFunction`. If it returns an element it
   * is wrapped in an {@link ElementHandle}, else the raw value itself is
   * returned.
   */
  async $$eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> =
      EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
    return await this.mainFrame().$$eval(selector, pageFunction, ...args);
  }

  /**
   * If no URLs are specified, this method returns cookies for the
   * current page URL. If URLs are specified, only cookies for those
   * URLs are returned.
   *
   * @deprecated Page-level cookie API is deprecated. Use
   * {@link Browser.cookies} or {@link BrowserContext.cookies} instead.
   */
  abstract cookies(...urls: string[]): Promise<Cookie[]>;

  /**
   * @deprecated Page-level cookie API is deprecated. Use
   * {@link Browser.deleteCookie}, {@link BrowserContext.deleteCookie},
   * {@link Browser.deleteMatchingCookies} or {@link BrowserContext.deleteMatchingCookies}
   * instead.
   */
  abstract deleteCookie(...cookies: DeleteCookiesRequest[]): Promise<void>;

  /**
   * @example
   *
   *```ts
   * await page.setCookie(cookieObject1, cookieObject2);
   *```
   *
   * @deprecated Page-level cookie API is deprecated. Use
   * {@link Browser.setCookie} or {@link BrowserContext.setCookie}
   * instead.
   */
  abstract setCookie(...cookies: CookieParam[]): Promise<void>;

  /**
   * Adds a `<script>` tag into the page with the desired URL or content.
   *
   * @remarks
   * Shortcut for
   * {@link Frame.addScriptTag | page.mainFrame().addScriptTag(options)}.
   *
   * @param options - Options for the script.
   * @returns An {@link ElementHandle | element handle} to the injected
   * `<script>` element.
   */
  async addScriptTag(
    options: FrameAddScriptTagOptions,
  ): Promise<ElementHandle<HTMLScriptElement>> {
    return await this.mainFrame().addScriptTag(options);
  }

  /**
   * Adds a `<link rel="stylesheet">` tag into the page with the desired URL or
   * a `<style type="text/css">` tag with the content.
   *
   * Shortcut for
   * {@link Frame.(addStyleTag:2) | page.mainFrame().addStyleTag(options)}.
   *
   * @returns An {@link ElementHandle | element handle} to the injected `<link>`
   * or `<style>` element.
   */
  async addStyleTag(
    options: Omit<FrameAddStyleTagOptions, 'url'>,
  ): Promise<ElementHandle<HTMLStyleElement>>;
  async addStyleTag(
    options: FrameAddStyleTagOptions,
  ): Promise<ElementHandle<HTMLLinkElement>>;
  async addStyleTag(
    options: FrameAddStyleTagOptions,
  ): Promise<ElementHandle<HTMLStyleElement | HTMLLinkElement>> {
    return await this.mainFrame().addStyleTag(options);
  }

  /**
   * The method adds a function called `name` on the page's `window` object.
   * When called, the function executes `puppeteerFunction` in node.js and
   * returns a `Promise` which resolves to the return value of
   * `puppeteerFunction`.
   *
   * If the puppeteerFunction returns a `Promise`, it will be awaited.
   *
   * :::note
   *
   * Functions installed via `page.exposeFunction` survive navigations.
   *
   * :::
   *
   * @example
   * An example of adding an `md5` function into the page:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   * import crypto from 'crypto';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * page.on('console', msg => console.log(msg.text()));
   * await page.exposeFunction('md5', text =>
   *   crypto.createHash('md5').update(text).digest('hex'),
   * );
   * await page.evaluate(async () => {
   *   // use window.md5 to compute hashes
   *   const myString = 'PUPPETEER';
   *   const myHash = await window.md5(myString);
   *   console.log(`md5 of ${myString} is ${myHash}`);
   * });
   * await browser.close();
   * ```
   *
   * @example
   * An example of adding a `window.readfile` function into the page:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   * import fs from 'node:fs';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * page.on('console', msg => console.log(msg.text()));
   * await page.exposeFunction('readfile', async filePath => {
   *   return new Promise((resolve, reject) => {
   *     fs.readFile(filePath, 'utf8', (err, text) => {
   *       if (err) reject(err);
   *       else resolve(text);
   *     });
   *   });
   * });
   * await page.evaluate(async () => {
   *   // use window.readfile to read contents of a file
   *   const content = await window.readfile('/etc/hosts');
   *   console.log(content);
   * });
   * await browser.close();
   * ```
   *
   * @param name - Name of the function on the window object
   * @param pptrFunction - Callback function which will be called in Puppeteer's
   * context.
   */
  abstract exposeFunction(
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    pptrFunction: Function | {default: Function},
  ): Promise<void>;

  /**
   * The method removes a previously added function via ${@link Page.exposeFunction}
   * called `name` from the page's `window` object.
   */
  abstract removeExposedFunction(name: string): Promise<void>;

  /**
   * Provide credentials for `HTTP authentication`.
   *
   * :::note
   *
   * Request interception will be turned on behind the scenes to
   * implement authentication. This might affect performance.
   *
   * :::
   *
   * @remarks
   * To disable authentication, pass `null`.
   */
  abstract authenticate(credentials: Credentials | null): Promise<void>;

  /**
   * The extra HTTP headers will be sent with every request the page initiates.
   *
   * :::tip
   *
   * All HTTP header names are lowercased. (HTTP headers are
   * case-insensitive, so this shouldn’t impact your server code.)
   *
   * :::
   *
   * :::note
   *
   * page.setExtraHTTPHeaders does not guarantee the order of headers in
   * the outgoing requests.
   *
   * :::
   *
   * @param headers - An object containing additional HTTP headers to be sent
   * with every request. All header values must be strings.
   */
  abstract setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;

  /**
   * @param userAgent - Specific user agent to use in this page
   * @param userAgentData - Specific user agent client hint data to use in this
   * page
   * @returns Promise which resolves when the user agent is set.
   * @deprecated Use {@link Page.(setUserAgent:2) } instead.
   */
  abstract setUserAgent(
    userAgent: string,
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata,
  ): Promise<void>;

  /**
   * @param options - Object containing user agent and optional user agent metadata
   * @returns Promise which resolves when the user agent is set.
   */
  abstract setUserAgent(options: {
    userAgent?: string;
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata;
    platform?: string;
  }): Promise<void>;

  /**
   * Object containing metrics as key/value pairs.
   *
   * @returns
   *
   * - `Timestamp` : The timestamp when the metrics sample was taken.
   *
   * - `Documents` : Number of documents in the page.
   *
   * - `Frames` : Number of frames in the page.
   *
   * - `JSEventListeners` : Number of events in the page.
   *
   * - `Nodes` : Number of DOM nodes in the page.
   *
   * - `LayoutCount` : Total number of full or partial page layout.
   *
   * - `RecalcStyleCount` : Total number of page style recalculations.
   *
   * - `LayoutDuration` : Combined durations of all page layouts.
   *
   * - `RecalcStyleDuration` : Combined duration of all page style
   *   recalculations.
   *
   * - `ScriptDuration` : Combined duration of JavaScript execution.
   *
   * - `TaskDuration` : Combined duration of all tasks performed by the browser.
   *
   * - `JSHeapUsedSize` : Used JavaScript heap size.
   *
   * - `JSHeapTotalSize` : Total JavaScript heap size.
   *
   * @remarks
   * All timestamps are in monotonic time: monotonically increasing time
   * in seconds since an arbitrary point in the past.
   */
  abstract metrics(): Promise<Metrics>;

  /**
   * Captures a snapshot of the JavaScript heap and writes it to a file.
   */
  abstract captureHeapSnapshot(options: HeapSnapshotOptions): Promise<void>;

  /**
   * The page's URL.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.url | page.mainFrame().url()}.
   */
  url(): string {
    return this.mainFrame().url();
  }

  /**
   * The full HTML contents of the page, including the DOCTYPE.
   */
  async content(): Promise<string> {
    return await this.mainFrame().content();
  }

  /**
   * Set the content of the page.
   *
   * @param html - HTML markup to assign to the page.
   * @param options - Parameters that has some properties.
   */
  async setContent(
    html: string,
    options?: SetContentWaitForOptions,
  ): Promise<void> {
    await this.mainFrame().setContent(html, options);
  }

  /**
   * {@inheritDoc Frame.goto}
   */
  async goto(url: string, options?: GoToOptions): Promise<HTTPResponse | null> {
    return await this.mainFrame().goto(url, options);
  }

  /**
   * Reloads the page.
   *
   * @param options - Options to configure waiting behavior.
   * @returns A promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   */
  abstract reload(options?: ReloadOptions): Promise<HTTPResponse | null>;

  /**
   * Waits for the page to navigate to a new URL or to reload. It is useful when
   * you run code that will indirectly cause the page to navigate.
   *
   * @example
   *
   * ```ts
   * const [response] = await Promise.all([
   *   page.waitForNavigation(), // The promise resolves after navigation has finished
   *   page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
   * ]);
   * ```
   *
   * @remarks
   *
   * Usage of the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
   * to change the URL is considered a navigation.
   *
   * @param options - Navigation parameters which might have the following
   * properties:
   * @returns A `Promise` which resolves to the main resource response.
   *
   * - In case of multiple redirects, the navigation will resolve with the
   *   response of the last redirect.
   * - In case of navigation to a different anchor or navigation due to History
   *   API usage, the navigation will resolve with `null`.
   */
  async waitForNavigation(
    options: WaitForOptions = {},
  ): Promise<HTTPResponse | null> {
    return await this.mainFrame().waitForNavigation(options);
  }

  /**
   * @param urlOrPredicate - A URL or predicate to wait for
   * @param options - Optional waiting parameters
   * @returns Promise which resolves to the matched request
   * @example
   *
   * ```ts
   * const firstRequest = await page.waitForRequest(
   *   'https://example.com/resource',
   * );
   * const finalRequest = await page.waitForRequest(
   *   request => request.url() === 'https://example.com',
   * );
   * return finalRequest.response()?.ok();
   * ```
   *
   * @remarks
   * Optional Waiting Parameters have:
   *
   * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds, pass
   *   `0` to disable the timeout. The default value can be changed by using the
   *   {@link Page.setDefaultTimeout} method.
   *
   * - `signal`: A signal object that allows you to cancel a waitForRequest call.
   */
  waitForRequest(
    urlOrPredicate: string | AwaitablePredicate<HTTPRequest>,
    options: WaitTimeoutOptions = {},
  ): Promise<HTTPRequest> {
    const {timeout: ms = this._timeoutSettings.timeout(), signal} = options;
    if (typeof urlOrPredicate === 'string') {
      const url = urlOrPredicate;
      urlOrPredicate = (request: HTTPRequest) => {
        return request.url() === url;
      };
    }
    const observable$ = fromEmitterEvent(this, PageEvent.Request).pipe(
      filterAsync(urlOrPredicate),
      raceWith(
        timeout(ms),
        fromAbortSignal(signal),
        fromEmitterEvent(this, PageEvent.Close).pipe(
          map(() => {
            throw new TargetCloseError('Page closed!');
          }),
        ),
      ),
    );
    return firstValueFrom(observable$);
  }

  /**
   * @param urlOrPredicate - A URL or predicate to wait for.
   * @param options - Optional waiting parameters
   * @returns Promise which resolves to the matched response.
   * @example
   *
   * ```ts
   * const firstResponse = await page.waitForResponse(
   *   'https://example.com/resource',
   * );
   * const finalResponse = await page.waitForResponse(
   *   response =>
   *     response.url() === 'https://example.com' && response.status() === 200,
   * );
   * const finalResponse = await page.waitForResponse(async response => {
   *   return (await response.text()).includes('<html>');
   * });
   * return finalResponse.ok();
   * ```
   *
   * @remarks
   * Optional Parameter have:
   *
   * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds,
   *   pass `0` to disable the timeout. The default value can be changed by using
   *   the {@link Page.setDefaultTimeout} method.
   *
   * - `signal`: A signal object that allows you to cancel a waitForResponse call.
   */
  waitForResponse(
    urlOrPredicate: string | AwaitablePredicate<HTTPResponse>,
    options: WaitTimeoutOptions = {},
  ): Promise<HTTPResponse> {
    const {timeout: ms = this._timeoutSettings.timeout(), signal} = options;
    if (typeof urlOrPredicate === 'string') {
      const url = urlOrPredicate;
      urlOrPredicate = (response: HTTPResponse) => {
        return response.url() === url;
      };
    }
    const observable$ = fromEmitterEvent(this, PageEvent.Response).pipe(
      filterAsync(urlOrPredicate),
      raceWith(
        timeout(ms),
        fromAbortSignal(signal),
        fromEmitterEvent(this, PageEvent.Close).pipe(
          map(() => {
            throw new TargetCloseError('Page closed!');
          }),
        ),
      ),
    );
    return firstValueFrom(observable$);
  }

  /**
   * Waits for the network to be idle.
   *
   * @remarks The function will always wait at least the
   * set {@link WaitForNetworkIdleOptions.idleTime | IdleTime}.
   *
   * @param options - Options to configure waiting behavior.
   * @returns A promise which resolves once the network is idle.
   */
  waitForNetworkIdle(options: WaitForNetworkIdleOptions = {}): Promise<void> {
    return firstValueFrom(this.waitForNetworkIdle$(options));
  }

  /**
   * @internal
   */
  waitForNetworkIdle$(
    options: WaitForNetworkIdleOptions = {},
  ): Observable<void> {
    const {
      timeout: ms = this._timeoutSettings.timeout(),
      idleTime = NETWORK_IDLE_TIME,
      concurrency = 0,
      signal,
    } = options;

    return this.#inflight$.pipe(
      map(inflight => {
        return inflight > concurrency;
      }),
      distinctUntilChanged(),
      switchMap(isInflightOverConcurrency => {
        if (isInflightOverConcurrency) {
          return EMPTY;
        }
        return timer(idleTime);
      }),
      map(() => {}),
      raceWith(
        timeout(ms),
        fromAbortSignal(signal),
        fromEmitterEvent(this, PageEvent.Close).pipe(
          map(() => {
            throw new TargetCloseError('Page closed!');
          }),
        ),
      ),
    );
  }

  /**
   * Waits for a frame matching the given conditions to appear.
   *
   * @example
   *
   * ```ts
   * const frame = await page.waitForFrame(async frame => {
   *   const frameElement = await frame.frameElement();
   *   if (!frameElement) {
   *     return false;
   *   }
   *   const name = await frameElement.evaluate(el => el.getAttribute('name'));
   *   return name === 'test';
   * });
   * ```
   */
  async waitForFrame(
    urlOrPredicate: string | ((frame: Frame) => Awaitable<boolean>),
    options: WaitTimeoutOptions = {},
  ): Promise<Frame> {
    const {timeout: ms = this.getDefaultTimeout(), signal} = options;

    const predicate = isString(urlOrPredicate)
      ? (frame: Frame) => {
          return urlOrPredicate === frame.url();
        }
      : urlOrPredicate;

    return await firstValueFrom(
      merge(
        fromEmitterEvent(this, PageEvent.FrameAttached),
        fromEmitterEvent(this, PageEvent.FrameNavigated),
        from(this.frames()),
      ).pipe(
        filterAsync(predicate),
        first(),
        raceWith(
          timeout(ms),
          fromAbortSignal(signal),
          fromEmitterEvent(this, PageEvent.Close).pipe(
            map(() => {
              throw new TargetCloseError('Page closed.');
            }),
          ),
        ),
      ),
    );
  }

  /**
   * This method navigate to the previous page in history.
   * @param options - Navigation parameters
   * @returns Promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   * If the navigation is same page, returns null.
   * If no history entry is found throws.
   */
  abstract goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;

  /**
   * This method navigate to the next page in history.
   * @param options - Navigation Parameter
   * @returns Promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   * If the navigation is same page, returns null.
   * If no history entry is found throws.
   */
  abstract goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;

  /**
   * Brings page to front (activates tab).
   */
  abstract bringToFront(): Promise<void>;

  /**
   * Emulates a given device's metrics and user agent.
   *
   * To aid emulation, Puppeteer provides a list of known devices that can be
   * via {@link KnownDevices}.
   *
   * @remarks
   * This method is a shortcut for calling two methods:
   * {@link Page.(setUserAgent:2) } and {@link Page.setViewport}.
   *
   * This method will resize the page. A lot of websites don't expect phones to
   * change size, so you should emulate before navigating to the page.
   *
   * @example
   *
   * ```ts
   * import {KnownDevices} from 'puppeteer';
   * const iPhone = KnownDevices['iPhone 15 Pro'];
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.emulate(iPhone);
   * await page.goto('https://www.google.com');
   * // other actions...
   * await browser.close();
   * ```
   */
  async emulate(device: Device): Promise<void> {
    await Promise.all([
      this.setUserAgent({userAgent: device.userAgent}),
      this.setViewport(device.viewport),
    ]);
  }

  /**
   * @param enabled - Whether or not to enable JavaScript on the page.
   * @remarks
   * NOTE: changing this value won't affect scripts that have already been run.
   * It will take full effect on the next navigation.
   */
  abstract setJavaScriptEnabled(enabled: boolean): Promise<void>;

  /**
   * Toggles bypassing page's Content-Security-Policy.
   * @param enabled - sets bypassing of page's Content-Security-Policy.
   * @remarks
   * NOTE: CSP bypassing happens at the moment of CSP initialization rather than
   * evaluation. Usually, this means that `page.setBypassCSP` should be called
   * before navigating to the domain.
   */
  abstract setBypassCSP(enabled: boolean): Promise<void>;

  /**
   * @param type - Changes the CSS media type of the page. The only allowed
   * values are `screen`, `print` and `null`. Passing `null` disables CSS media
   * emulation.
   * @example
   *
   * ```ts
   * await page.evaluate(() => matchMedia('screen').matches);
   * // → true
   * await page.evaluate(() => matchMedia('print').matches);
   * // → false
   *
   * await page.emulateMediaType('print');
   * await page.evaluate(() => matchMedia('screen').matches);
   * // → false
   * await page.evaluate(() => matchMedia('print').matches);
   * // → true
   *
   * await page.emulateMediaType(null);
   * await page.evaluate(() => matchMedia('screen').matches);
   * // → true
   * await page.evaluate(() => matchMedia('print').matches);
   * // → false
   * ```
   */
  abstract emulateMediaType(type?: string): Promise<void>;

  /**
   * Enables CPU throttling to emulate slow CPUs.
   * @param factor - slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).
   */
  abstract emulateCPUThrottling(factor: number | null): Promise<void>;

  /**
   * @param features - `<?Array<Object>>` Given an array of media feature
   * objects, emulates CSS media features on the page. Each media feature object
   * must have the following properties:
   * @example
   *
   * ```ts
   * await page.emulateMediaFeatures([
   *   {name: 'prefers-color-scheme', value: 'dark'},
   * ]);
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: dark)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: light)').matches,
   * );
   * // → false
   *
   * await page.emulateMediaFeatures([
   *   {name: 'prefers-reduced-motion', value: 'reduce'},
   * ]);
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: reduce)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: no-preference)').matches,
   * );
   * // → false
   *
   * await page.emulateMediaFeatures([
   *   {name: 'prefers-color-scheme', value: 'dark'},
   *   {name: 'prefers-reduced-motion', value: 'reduce'},
   * ]);
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: dark)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: light)').matches,
   * );
   * // → false
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: reduce)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: no-preference)').matches,
   * );
   * // → false
   *
   * await page.emulateMediaFeatures([{name: 'color-gamut', value: 'p3'}]);
   * await page.evaluate(() => matchMedia('(color-gamut: srgb)').matches);
   * // → true
   * await page.evaluate(() => matchMedia('(color-gamut: p3)').matches);
   * // → true
   * await page.evaluate(() => matchMedia('(color-gamut: rec2020)').matches);
   * // → false
   * ```
   */
  abstract emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;

  /**
   * @param timezoneId - Changes the timezone of the page. See
   * {@link https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt | ICU’s metaZones.txt}
   * for a list of supported timezone IDs. Passing
   * `null` disables timezone emulation.
   */
  abstract emulateTimezone(timezoneId?: string): Promise<void>;

  /**
   * Emulates the idle state.
   * If no arguments set, clears idle state emulation.
   *
   * @example
   *
   * ```ts
   * // set idle emulation
   * await page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});
   *
   * // do some checks here
   * ...
   *
   * // clear idle emulation
   * await page.emulateIdleState();
   * ```
   *
   * @param overrides - Mock idle state. If not set, clears idle overrides
   */
  abstract emulateIdleState(overrides?: {
    isUserActive: boolean;
    isScreenUnlocked: boolean;
  }): Promise<void>;

  /**
   * Simulates the given vision deficiency on the page.
   *
   * @example
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.goto('https://v8.dev/blog/10-years');
   *
   * await page.emulateVisionDeficiency('achromatopsia');
   * await page.screenshot({path: 'achromatopsia.png'});
   *
   * await page.emulateVisionDeficiency('deuteranopia');
   * await page.screenshot({path: 'deuteranopia.png'});
   *
   * await page.emulateVisionDeficiency('blurredVision');
   * await page.screenshot({path: 'blurred-vision.png'});
   *
   * await page.emulateVisionDeficiency('reducedContrast');
   * await page.screenshot({path: 'reduced-contrast.png'});
   *
   * await browser.close();
   * ```
   *
   * @param type - the type of deficiency to simulate, or `'none'` to reset.
   */
  abstract emulateVisionDeficiency(
    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type'],
  ): Promise<void>;

  /**
   * `page.setViewport` will resize the page. A lot of websites don't expect
   * phones to change size, so you should set the viewport before navigating to
   * the page.
   *
   * In the case of multiple pages in a single browser, each page can have its
   * own viewport size. Setting the viewport to `null` resets the viewport to
   * its default value.
   *
   * @example
   *
   * ```ts
   * const page = await browser.newPage();
   * await page.setViewport({
   *   width: 640,
   *   height: 480,
   *   deviceScaleFactor: 1,
   * });
   * await page.goto('https://example.com');
   * ```
   *
   * @param viewport -
   * @remarks
   * NOTE: in certain cases, setting viewport will reload the page in order to
   * set the isMobile or hasTouch properties.
   */
  abstract setViewport(viewport: Viewport | null): Promise<void>;

  /**
   * Returns the current page viewport settings without checking the actual page
   * viewport.
   *
   * This is either the viewport set with the previous {@link Page.setViewport}
   * call or the default viewport set via
   * {@link ConnectOptions.defaultViewport |
   * ConnectOptions.defaultViewport}.
   */
  abstract viewport(): Viewport | null;

  /**
   * Evaluates a function in the page's context and returns the result.
   *
   * If the function passed to `page.evaluate` returns a Promise, the
   * function will wait for the promise to resolve and return its value.
   *
   * @example
   *
   * ```ts
   * const result = await frame.evaluate(() => {
   *   return Promise.resolve(8 * 7);
   * });
   * console.log(result); // prints "56"
   * ```
   *
   * You can pass a string instead of a function (although functions are
   * recommended as they are easier to debug and use with TypeScript):
   *
   * @example
   *
   * ```ts
   * const aHandle = await page.evaluate('1 + 2');
   * ```
   *
   * To get the best TypeScript experience, you should pass in as the
   * generic the type of `pageFunction`:
   *
   * ```ts
   * const aHandle = await page.evaluate(() => 2);
   * ```
   *
   * @example
   *
   * {@link ElementHandle} instances (including {@link JSHandle}s) can be passed
   * as arguments to the `pageFunction`:
   *
   * ```ts
   * const bodyHandle = await page.$('body');
   * const html = await page.evaluate(body => body.innerHTML, bodyHandle);
   * await bodyHandle.dispose();
   * ```
   *
   * @param pageFunction - a function that is run within the page
   * @param args - arguments to be passed to the pageFunction
   *
   * @returns the return value of `pageFunction`.
   */
  async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluate.name,
      pageFunction,
    );
    return await this.mainFrame().evaluate(pageFunction, ...args);
  }

  /**
   * Adds a function which would be invoked in one of the following scenarios:
   *
   * - whenever the page is navigated
   *
   * - whenever the child frame is attached or navigated. In this case, the
   *   function is invoked in the context of the newly attached frame.
   *
   * The function is invoked after the document was created but before any of
   * its scripts were run. This is useful to amend the JavaScript environment,
   * e.g. to seed `Math.random`.
   * @param pageFunction - Function to be evaluated in browser context
   * @param args - Arguments to pass to `pageFunction`
   * @example
   * An example of overriding the navigator.languages property before the page loads:
   *
   * ```ts
   * // preload.js
   *
   * // overwrite the `languages` property to use a custom getter
   * Object.defineProperty(navigator, 'languages', {
   *   get: function () {
   *     return ['en-US', 'en', 'bn'];
   *   },
   * });
   *
   * // In your puppeteer script, assuming the preload.js file is
   * // in same folder of our script.
   * const preloadFile = fs.readFileSync('./preload.js', 'utf8');
   * await page.evaluateOnNewDocument(preloadFile);
   * ```
   */
  abstract evaluateOnNewDocument<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<NewDocumentScriptEvaluation>;

  /**
   * Removes script that injected into page by Page.evaluateOnNewDocument.
   *
   * @param identifier - script identifier
   */
  abstract removeScriptToEvaluateOnNewDocument(
    identifier: string,
  ): Promise<void>;

  /**
   * Toggles ignoring cache for each request based on the enabled state. By
   * default, caching is enabled.
   * @param enabled - sets the `enabled` state of cache
   * @defaultValue `true`
   */
  abstract setCacheEnabled(enabled?: boolean): Promise<void>;

  /**
   * @internal
   */
  async _maybeWriteTypedArrayToFile(
    path: string | undefined,
    typedArray: Uint8Array,
  ): Promise<void> {
    if (!path) {
      return;
    }

    await environment.value.fs.promises.writeFile(path, typedArray);
  }

  /**
   * Captures a screencast of this {@link Page | page}.
   *
   * @example
   * Recording a {@link Page | page}:
   *
   * ```
   * import puppeteer from 'puppeteer';
   *
   * // Launch a browser
   * const browser = await puppeteer.launch();
   *
   * // Create a new page
   * const page = await browser.newPage();
   *
   * // Go to your site.
   * await page.goto("https://www.example.com");
   *
   * // Start recording.
   * const recorder = await page.screencast({path: 'recording.webm'});
   *
   * // Do something.
   *
   * // Stop recording.
   * await recorder.stop();
   *
   * browser.close();
   * ```
   *
   * @param options - Configures screencast behavior.
   *
   * @experimental
   *
   * @remarks
   *
   * By default, all recordings will be {@link https://www.webmproject.org/ | WebM} format using
   * the {@link https://www.webmproject.org/vp9/ | VP9} video codec, with a frame rate of 30 FPS.
   *
   * You must have {@link https://ffmpeg.org/ | ffmpeg} installed on your system.
   */
  async screencast(
    options: Readonly<ScreencastOptions> = {},
  ): Promise<ScreenRecorder> {
    const ScreenRecorder = environment.value.ScreenRecorder;
    const [width, height, devicePixelRatio] =
      await this.#getNativePixelDimensions();
    let crop: BoundingBox | undefined;
    if (options.crop) {
      const {
        x,
        y,
        width: cropWidth,
        height: cropHeight,
      } = roundRectangle(normalizeRectangle(options.crop));
      if (x < 0 || y < 0) {
        throw new Error(
          `\`crop.x\` and \`crop.y\` must be greater than or equal to 0.`,
        );
      }
      if (cropWidth <= 0 || cropHeight <= 0) {
        throw new Error(
          `\`crop.height\` and \`crop.width\` must be greater than or equal to 0.`,
        );
      }

      const viewportWidth = width / devicePixelRatio;
      const viewportHeight = height / devicePixelRatio;
      if (x + cropWidth > viewportWidth) {
        throw new Error(
          `\`crop.width\` cannot be larger than the viewport width (${viewportWidth}).`,
        );
      }
      if (y + cropHeight > viewportHeight) {
        throw new Error(
          `\`crop.height\` cannot be larger than the viewport height (${viewportHeight}).`,
        );
      }

      crop = {
        x: x * devicePixelRatio,
        y: y * devicePixelRatio,
        width: cropWidth * devicePixelRatio,
        height: cropHeight * devicePixelRatio,
      };
    }
    if (options.speed !== undefined && options.speed <= 0) {
      throw new Error(`\`speed\` must be greater than 0.`);
    }
    if (options.scale !== undefined && options.scale <= 0) {
      throw new Error(`\`scale\` must be greater than 0.`);
    }

    const recorder = new ScreenRecorder(this, width, height, {
      ...options,
      crop,
    });
    try {
      await this._startScreencast();
    } catch (error) {
      void recorder.stop();
      throw error;
    }
    if (options.path) {
      const {createWriteStream} = environment.value.fs;
      const stream = createWriteStream(options.path, 'binary');
      recorder.pipe(stream);
    }
    return recorder;
  }

  #screencastSessionCount = 0;
  #startScreencastPromise: Promise<void> | undefined;

  /**
   * @internal
   */
  async _startScreencast(): Promise<void> {
    ++this.#screencastSessionCount;
    if (!this.#startScreencastPromise) {
      this.#startScreencastPromise = this.mainFrame()
        .client.send('Page.startScreencast', {format: 'png'})
        .then(() => {
          // Wait for the first frame.
          return new Promise(resolve => {
            return this.mainFrame().client.once('Page.screencastFrame', () => {
              return resolve();
            });
          });
        });
    }
    await this.#startScreencastPromise;
  }

  /**
   * @internal
   */
  async _stopScreencast(): Promise<void> {
    --this.#screencastSessionCount;
    if (!this.#startScreencastPromise) {
      return;
    }
    this.#startScreencastPromise = undefined;
    if (this.#screencastSessionCount === 0) {
      await this.mainFrame().client.send('Page.stopScreencast');
    }
  }

  /**
   * Gets the native, non-emulated dimensions of the viewport.
   */
  async #getNativePixelDimensions(): Promise<
    readonly [width: number, height: number, devicePixelRatio: number]
  > {
    const viewport = this.viewport();
    using stack = new DisposableStack();
    if (viewport && viewport.deviceScaleFactor !== 0) {
      await this.setViewport({...viewport, deviceScaleFactor: 0});
      stack.defer(() => {
        void this.setViewport(viewport).catch(debugError);
      });
    }
    return await this.mainFrame()
      .isolatedRealm()
      .evaluate(() => {
        return [
          window.visualViewport!.width * window.devicePixelRatio,
          window.visualViewport!.height * window.devicePixelRatio,
          window.devicePixelRatio,
        ] as const;
      });
  }

  /**
   * Captures a screenshot of this {@link Page | page}.
   *
   * @param options - Configures screenshot behavior.
   *
   * @remarks
   *
   * While a screenshot is being taken in a {@link BrowserContext}, the
   * following methods will automatically wait for the screenshot to
   * finish to prevent interference with the screenshot process:
   * {@link BrowserContext.newPage}, {@link Browser.newPage},
   * {@link Page.close}.
   *
   * Calling {@link Page.bringToFront} will not wait for existing
   * screenshot operations.
   *
   */
  async screenshot(
    options: Readonly<ScreenshotOptions> & {encoding: 'base64'},
  ): Promise<string>;
  async screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;
  @guarded(function () {
    return this.browser();
  })
  async screenshot(
    userOptions: Readonly<ScreenshotOptions> = {},
  ): Promise<Uint8Array | string> {
    using _guard = await this.browserContext().startScreenshot();

    const options = {
      ...userOptions,
      clip: userOptions.clip
        ? {
            ...userOptions.clip,
          }
        : undefined,
    };
    if (options.type === undefined && options.path !== undefined) {
      const filePath = options.path;
      // Note we cannot use Node.js here due to browser compatibility.
      const extension = filePath
        .slice(filePath.lastIndexOf('.') + 1)
        .toLowerCase();
      switch (extension) {
        case 'png':
          options.type = 'png';
          break;
        case 'jpeg':
        case 'jpg':
          options.type = 'jpeg';
          break;
        case 'webp':
          options.type = 'webp';
          break;
      }
    }
    if (options.quality !== undefined) {
      if (options.quality < 0 || options.quality > 100) {
        throw new Error(
          `Expected 'quality' (${options.quality}) to be between 0 and 100, inclusive.`,
        );
      }
      if (
        options.type === undefined ||
        !['jpeg', 'webp'].includes(options.type)
      ) {
        throw new Error(
          `${options.type ?? 'png'} screenshots do not support 'quality'.`,
        );
      }
    }
    if (options.clip) {
      if (options.clip.width <= 0) {
        throw new Error("'width' in 'clip' must be positive.");
      }
      if (options.clip.height <= 0) {
        throw new Error("'height' in 'clip' must be positive.");
      }
    }

    setDefaultScreenshotOptions(options);

    await using stack = new AsyncDisposableStack();
    if (options.clip) {
      if (options.fullPage) {
        throw new Error("'clip' and 'fullPage' are mutually exclusive");
      }

      options.clip = roundRectangle(normalizeRectangle(options.clip));
    } else {
      if (options.fullPage) {
        // If `captureBeyondViewport` is `false`, then we set the viewport to
        // capture the full page. Note this may be affected by on-page CSS and
        // JavaScript.
        if (!options.captureBeyondViewport) {
          const scrollDimensions = await this.mainFrame()
            .isolatedRealm()
            .evaluate(() => {
              const element = document.documentElement;
              return {
                width: element.scrollWidth,
                height: element.scrollHeight,
              };
            });
          const viewport = this.viewport();
          await this.setViewport({
            ...viewport,
            ...scrollDimensions,
          });
          stack.defer(async () => {
            await this.setViewport(viewport).catch(debugError);
          });
        }
      } else {
        options.captureBeyondViewport = false;
      }
    }

    const data = await this._screenshot(options);
    if (options.encoding === 'base64') {
      return data;
    }

    const typedArray = stringToTypedArray(data, true);
    await this._maybeWriteTypedArrayToFile(options.path, typedArray);
    return typedArray;
  }

  /**
   * Emulates focus state of the page.
   *
   * @param enabled - Whether to emulate focus.
   */
  abstract emulateFocusedPage(enabled: boolean): Promise<void>;

  /**
   * @internal
   */
  abstract _screenshot(options: Readonly<ScreenshotOptions>): Promise<string>;

  /**
   * Generates a PDF of the page with the `print` CSS media type.
   *
   * @param options - options for generating the PDF.
   *
   * @remarks
   *
   * To generate a PDF with the `screen` media type, call
   * {@link Page.emulateMediaType | `page.emulateMediaType('screen')`} before
   * calling `page.pdf()`.
   *
   * By default, `page.pdf()` generates a pdf with modified colors for printing.
   * Use the
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust | `-webkit-print-color-adjust`}
   * property to force rendering of exact colors.
   */
  abstract createPDFStream(
    options?: PDFOptions,
  ): Promise<ReadableStream<Uint8Array>>;

  /**
   * {@inheritDoc Page.createPDFStream}
   */
  abstract pdf(options?: PDFOptions): Promise<Uint8Array>;

  /**
   * The page's title
   *
   * @remarks
   *
   * Shortcut for {@link Frame.title | page.mainFrame().title()}.
   */
  async title(): Promise<string> {
    return await this.mainFrame().title();
  }

  abstract close(options?: {runBeforeUnload?: boolean}): Promise<void>;

  /**
   * Indicates that the page has been closed.
   * @returns
   */
  abstract isClosed(): boolean;

  /**
   * {@inheritDoc Mouse}
   */
  abstract get mouse(): Mouse;

  /**
   * This method fetches an element with `selector`, scrolls it into view if
   * needed, and then uses {@link Page.mouse} to click in the center of the
   * element. If there's no element matching `selector`, the method throws an
   * error.
   *
   * @remarks
   *
   * Bear in mind that if `click()` triggers a navigation event and
   * there's a separate `page.waitForNavigation()` promise to be resolved, you
   * may end up with a race condition that yields unexpected results. The
   * correct pattern for click and wait for navigation is the following:
   *
   * ```ts
   * const [response] = await Promise.all([
   *   page.waitForNavigation(waitOptions),
   *   page.click(selector, clickOptions),
   * ]);
   * ```
   *
   * Shortcut for {@link Frame.click | page.mainFrame().click(selector[, options]) }.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are
   * multiple elements satisfying the `selector`, the first will be clicked
   * @param options - `Object`
   * @returns Promise which resolves when the element matching `selector` is
   * successfully clicked. The Promise will be rejected if there is no element
   * matching `selector`.
   */
  click(selector: string, options?: Readonly<ClickOptions>): Promise<void> {
    return this.mainFrame().click(selector, options);
  }

  /**
   * This method fetches an element with `selector` and focuses it. If
   * there's no element matching `selector`, the method throws an error.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * If there are multiple elements satisfying the selector, the first
   * will be focused.
   * @returns Promise which resolves when the element matching selector
   * is successfully focused. The promise will be rejected if there is
   * no element matching selector.
   *
   * @remarks
   *
   * Shortcut for
   * {@link Frame.focus | page.mainFrame().focus(selector)}.
   */
  focus(selector: string): Promise<void> {
    return this.mainFrame().focus(selector);
  }

  /**
   * This method fetches an element with `selector`, scrolls it into view if
   * needed, and then uses {@link Page.mouse}
   * to hover over the center of the element.
   * If there's no element matching `selector`, the method throws an error.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are
   * multiple elements satisfying the `selector`, the first will be hovered.
   * @returns Promise which resolves when the element matching `selector` is
   * successfully hovered. Promise gets rejected if there's no element matching
   * `selector`.
   *
   * @remarks
   *
   * Shortcut for {@link Page.hover | page.mainFrame().hover(selector)}.
   */
  hover(selector: string): Promise<void> {
    return this.mainFrame().hover(selector);
  }

  /**
   * Triggers a `change` and `input` event once all the provided options have been
   * selected. If there's no `<select>` element matching `selector`, the method
   * throws an error.
   *
   * @example
   *
   * ```ts
   * page.select('select#colors', 'blue'); // single selection
   * page.select('select#colors', 'red', 'green', 'blue'); // multiple selections
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param values - Values of options to select. If the `<select>` has the
   * `multiple` attribute, all values are considered, otherwise only the first one
   * is taken into account.
   * @returns
   *
   * @remarks
   *
   * Shortcut for {@link Frame.select | page.mainFrame().select()}
   */
  select(selector: string, ...values: string[]): Promise<string[]> {
    return this.mainFrame().select(selector, ...values);
  }

  /**
   * This method fetches an element with `selector`, scrolls it into view if
   * needed, and then uses {@link Page.touchscreen}
   * to tap in the center of the element.
   * If there's no element matching `selector`, the method throws an error.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are multiple elements satisfying the
   * selector, the first will be tapped.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.tap | page.mainFrame().tap(selector)}.
   */
  tap(selector: string): Promise<void> {
    return this.mainFrame().tap(selector);
  }

  /**
   * Sends a `keydown`, `keypress/input`, and `keyup` event for each character
   * in the text.
   *
   * To press a special key, like `Control` or `ArrowDown`, use {@link Keyboard.press}.
   * @example
   *
   * ```ts
   * await page.type('#mytextarea', 'Hello');
   * // Types instantly
   * await page.type('#mytextarea', 'World', {delay: 100});
   * // Types slower, like a user
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param text - A text to type into a focused element.
   * @param options - have property `delay` which is the Time to wait between
   * key presses in milliseconds. Defaults to `0`.
   * @returns
   */
  type(
    selector: string,
    text: string,
    options?: Readonly<KeyboardTypeOptions>,
  ): Promise<void> {
    return this.mainFrame().type(selector, text, options);
  }

  /**
   * Wait for the `selector` to appear in page. If at the moment of calling the
   * method the `selector` already exists, the method will return immediately. If
   * the `selector` doesn't appear after the `timeout` milliseconds of waiting, the
   * function will throw.
   *
   * @example
   * This method works across navigations:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * let currentURL;
   * page
   *   .waitForSelector('img')
   *   .then(() => console.log('First URL with image: ' + currentURL));
   * for (currentURL of [
   *   'https://example.com',
   *   'https://google.com',
   *   'https://bbc.com',
   * ]) {
   *   await page.goto(currentURL);
   * }
   * await browser.close();
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param options - Optional waiting parameters
   * @returns Promise which resolves when element specified by selector string
   * is added to DOM. Resolves to `null` if waiting for hidden: `true` and
   * selector is not found in DOM.
   *
   * @remarks
   * The optional Parameter in Arguments `options` are:
   *
   * - `visible`: A boolean wait for element to be present in DOM and to be
   *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
   *   properties. Defaults to `false`.
   *
   * - `hidden`: Wait for element to not be found in the DOM or to be hidden,
   *   i.e. have `display: none` or `visibility: hidden` CSS properties. Defaults to
   *   `false`.
   *
   * - `timeout`: maximum time to wait for in milliseconds. Defaults to `30000`
   *   (30 seconds). Pass `0` to disable timeout. The default value can be changed
   *   by using the {@link Page.setDefaultTimeout} method.
   *
   * - `signal`: A signal object that allows you to cancel a waitForSelector call.
   */
  async waitForSelector<Selector extends string>(
    selector: Selector,
    options: WaitForSelectorOptions = {},
  ): Promise<ElementHandle<NodeFor<Selector>> | null> {
    return await this.mainFrame().waitForSelector(selector, options);
  }

  /**
   * Waits for the provided function, `pageFunction`, to return a truthy value when
   * evaluated in the page's context.
   *
   * @example
   * {@link Page.waitForFunction} can be used to observe a viewport size change:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * const watchDog = page.waitForFunction('window.innerWidth < 100');
   * await page.setViewport({width: 50, height: 50});
   * await watchDog;
   * await browser.close();
   * ```
   *
   * @example
   * Arguments can be passed from Node.js to `pageFunction`:
   *
   * ```ts
   * const selector = '.foo';
   * await page.waitForFunction(
   *   selector => !!document.querySelector(selector),
   *   {},
   *   selector,
   * );
   * ```
   *
   * @example
   * The provided `pageFunction` can be asynchronous:
   *
   * ```ts
   * const username = 'github-username';
   * await page.waitForFunction(
   *   async username => {
   *     const githubResponse = await fetch(
   *       `https://api.github.com/users/${username}`,
   *     );
   *     const githubUser = await githubResponse.json();
   *     // show the avatar
   *     const img = document.createElement('img');
   *     img.src = githubUser.avatar_url;
   *     // wait 3 seconds
   *     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
   *     img.remove();
   *   },
   *   {},
   *   username,
   * );
   * ```
   *
   * @param pageFunction - Function to be evaluated in browser context until it returns a
   * truthy value.
   * @param options - Options for configuring waiting behavior.
   */
  waitForFunction<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    options?: FrameWaitForFunctionOptions,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    return this.mainFrame().waitForFunction(pageFunction, options, ...args);
  }

  /**
   * This method is typically coupled with an action that triggers a device
   * request from an api such as WebBluetooth.
   *
   * :::caution
   *
   * This must be called before the device request is made. It will not return a
   * currently active device prompt.
   *
   * :::
   *
   * @example
   *
   * ```ts
   * const [devicePrompt] = Promise.all([
   *   page.waitForDevicePrompt(),
   *   page.click('#connect-bluetooth'),
   * ]);
   * await devicePrompt.select(
   *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
   * );
   * ```
   */
  abstract waitForDevicePrompt(
    options?: WaitTimeoutOptions,
  ): Promise<DeviceRequestPrompt>;

  /**
   * Resizes the browser window of this page so that the content area (excluding
   * browser UI) has the specified width and height.
   *
   * @experimental
   */
  abstract resize(params: {
    contentWidth: number;
    contentHeight: number;
  }): Promise<void>;

  /**
   * Returns the page's window id.
   *
   * @experimental
   */
  abstract windowId(): Promise<WindowId>;

  /** @internal */
  override [disposeSymbol](): void {
    return void this[asyncDisposeSymbol]().catch(debugError);
  }

  /** @internal */
  override async [asyncDisposeSymbol](): Promise<void> {
    await this.close();
    await super[asyncDisposeSymbol]();
  }

  /**
   * Opens DevTools for the this page if not already open and returns the DevTools page.
   * This method is only available in Chrome.
   */
  abstract openDevTools(): Promise<Page>;

  /**
   * Returns true if DevTools is attached to the current page.
   * Use {@link Page.openDevTools} to get the DevTools page.
   *
   * @experimental
   */
  abstract hasDevTools(): Promise<boolean>;

  /**
   * {@inheritDoc BluetoothEmulation}
   */
  abstract get bluetooth(): BluetoothEmulation;

  /**
   * Triggers the default action of the specified extension for this page.
   * This simulates clicking the extension's icon in the browser's toolbar.
   *
   * @param extension - The {@link Extension} whose action to trigger.
   * @public
   */
  abstract triggerExtensionAction(extension: Extension): Promise<void>;

  /**
   * Retrieves the list of extension execution realms in the main frame of the page.
   * These realms correspond to extension content scripts running on the page.
   *
   * Shortcut for {@link Frame.extensionRealms | mainFrame().extensionRealms()}.
   *
   * @public
   */
  abstract extensionRealms(): Realm[];
}

/**
 * @internal
 */
export const supportedMetrics = new Set<string>([
  'Timestamp',
  'Documents',
  'Frames',
  'JSEventListeners',
  'Nodes',
  'LayoutCount',
  'RecalcStyleCount',
  'LayoutDuration',
  'RecalcStyleDuration',
  'ScriptDuration',
  'TaskDuration',
  'JSHeapUsedSize',
  'JSHeapTotalSize',
]);

/** @see https://w3c.github.io/webdriver-bidi/#normalize-rect */
function normalizeRectangle<BoundingBoxType extends BoundingBox>(
  clip: Readonly<BoundingBoxType>,
): BoundingBoxType {
  return {
    ...clip,
    ...(clip.width < 0
      ? {
          x: clip.x + clip.width,
          width: -clip.width,
        }
      : {
          x: clip.x,
          width: clip.width,
        }),
    ...(clip.height < 0
      ? {
          y: clip.y + clip.height,
          height: -clip.height,
        }
      : {
          y: clip.y,
          height: clip.height,
        }),
  };
}

function roundRectangle<BoundingBoxType extends BoundingBox>(
  clip: Readonly<BoundingBoxType>,
): BoundingBoxType {
  const x = Math.round(clip.x);
  const y = Math.round(clip.y);
  const width = Math.round(clip.width + clip.x - x);
  const height = Math.round(clip.height + clip.y - y);
  return {...clip, x, y, width, height};
}
