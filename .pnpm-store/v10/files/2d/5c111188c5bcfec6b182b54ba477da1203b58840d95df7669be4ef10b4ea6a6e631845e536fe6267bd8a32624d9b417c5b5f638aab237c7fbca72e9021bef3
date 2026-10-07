/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {ConnectionTransport} from '../common/ConnectionTransport.js';

const tabTargetInfo = {
  targetId: 'tabTargetId',
  type: 'tab',
  title: 'tab',
  url: 'about:blank',
  attached: false,
  canAccessOpener: false,
};

const pageTargetInfo = {
  targetId: 'pageTargetId',
  type: 'page',
  title: 'page',
  url: 'about:blank',
  attached: false,
  canAccessOpener: false,
};

/**
 * Experimental ExtensionTransport allows establishing a connection via
 * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
 * DevTools Protocol is restricted for extensions, the transport
 * implements missing commands and events.
 *
 * @experimental
 * @public
 */
export class ExtensionTransport implements ConnectionTransport {
  static async connectTab(tabId: number): Promise<ExtensionTransport> {
    await chrome.debugger.attach({tabId}, '1.3');
    return new ExtensionTransport(tabId);
  }

  onmessage?: (message: string) => void;
  onclose?: () => void;

  #tabId: number;

  /**
   * @internal
   */
  constructor(tabId: number) {
    this.#tabId = tabId;
    chrome.debugger.onEvent.addListener(this.#debuggerEventHandler);
  }

  #debuggerEventHandler = (
    source: chrome.debugger.Debuggee,
    method: string,
    params?: object | undefined,
  ): void => {
    if (source.tabId !== this.#tabId) {
      return;
    }
    this.#dispatchResponse({
      // @ts-expect-error sessionId is not in stable yet.
      sessionId: source.sessionId ?? 'pageTargetSessionId',
      method: method,
      params: params,
    });
  };

  #dispatchResponse(message: object): void {
    // Dispatch in a new task like other transports.
    setTimeout(() => {
      this.onmessage?.(JSON.stringify(message));
    }, 0);
  }

  send(message: string): void {
    const parsed = JSON.parse(message);
    switch (parsed.method) {
      case 'Browser.getVersion': {
        this.#dispatchResponse({
          id: parsed.id,
          sessionId: parsed.sessionId,
          method: parsed.method,
          result: {
            protocolVersion: '1.3',
            product: 'chrome',
            revision: 'unknown',
            userAgent: 'chrome',
            jsVersion: 'unknown',
          },
        });
        return;
      }
      case 'Target.getBrowserContexts': {
        this.#dispatchResponse({
          id: parsed.id,
          sessionId: parsed.sessionId,
          method: parsed.method,
          result: {
            browserContextIds: [],
          },
        });
        return;
      }
      case 'Target.setDiscoverTargets': {
        this.#dispatchResponse({
          method: 'Target.targetCreated',
          params: {
            targetInfo: tabTargetInfo,
          },
        });
        this.#dispatchResponse({
          method: 'Target.targetCreated',
          params: {
            targetInfo: pageTargetInfo,
          },
        });
        this.#dispatchResponse({
          id: parsed.id,
          sessionId: parsed.sessionId,
          method: parsed.method,
          result: {},
        });
        return;
      }
      case 'Target.setAutoAttach': {
        if (parsed.sessionId === 'tabTargetSessionId') {
          this.#dispatchResponse({
            method: 'Target.attachedToTarget',
            sessionId: 'tabTargetSessionId',
            params: {
              targetInfo: pageTargetInfo,
              sessionId: 'pageTargetSessionId',
            },
          });
          this.#dispatchResponse({
            id: parsed.id,
            sessionId: parsed.sessionId,
            method: parsed.method,
            result: {},
          });
          return;
        } else if (!parsed.sessionId) {
          this.#dispatchResponse({
            method: 'Target.attachedToTarget',
            params: {
              targetInfo: tabTargetInfo,
              sessionId: 'tabTargetSessionId',
            },
          });
          this.#dispatchResponse({
            id: parsed.id,
            sessionId: parsed.sessionId,
            method: parsed.method,
            result: {},
          });
          return;
        }
      }
    }
    if (parsed.sessionId === 'pageTargetSessionId') {
      delete parsed.sessionId;
    }
    chrome.debugger
      .sendCommand(
        {tabId: this.#tabId, sessionId: parsed.sessionId},
        parsed.method,
        parsed.params,
      )
      .then(response => {
        this.#dispatchResponse({
          id: parsed.id,
          sessionId: parsed.sessionId ?? 'pageTargetSessionId',
          method: parsed.method,
          result: response,
        });
      })
      .catch(err => {
        this.#dispatchResponse({
          id: parsed.id,
          sessionId: parsed.sessionId ?? 'pageTargetSessionId',
          method: parsed.method,
          error: {
            code: err?.code,
            data: err?.data,
            message: err?.message ?? 'CDP error had no message',
          },
        });
      });
  }

  close(): void {
    chrome.debugger.onEvent.removeListener(this.#debuggerEventHandler);
    void chrome.debugger.detach({tabId: this.#tabId});
  }
}
