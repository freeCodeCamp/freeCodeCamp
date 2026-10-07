/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import type {ElementHandle} from '../api/ElementHandle.js';
import type {Frame} from '../api/Frame.js';
import type {ConsoleMessageLocation} from '../common/ConsoleMessage.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';

import type {CdpFrame} from './Frame.js';
import type {FrameManager} from './FrameManager.js';
import {FrameManagerEvent} from './FrameManagerEvents.js';
import {MAIN_WORLD} from './IsolatedWorlds.js';

/**
 * Tool annotations
 *
 * @public
 */
export interface WebMCPAnnotation {
  /**
   * A hint indicating that the tool does not modify any state.
   */
  readOnly?: boolean;
  /**
   * A hint indicating that the tool output may contain untrusted content, ex: UGC, 3rd
   * party data.
   */
  untrustedContent?: boolean;
  /**
   * If the declarative tool was declared with the autosubmit attribute.
   */
  autosubmit?: boolean;
}

/**
 * Represents the status of a tool invocation.
 *
 * @public
 */
export type WebMCPInvocationStatus = 'Completed' | 'Canceled' | 'Error';

/**
 * @internal
 */
export interface ProtocolWebMCPTool {
  name: string;
  description: string;
  inputSchema?: object;
  annotations?: WebMCPAnnotation;
  frameId: string;
  backendNodeId?: number;
  stackTrace?: Protocol.Runtime.StackTrace;
}

interface ProtocolWebMCPToolsAddedEvent {
  tools: ProtocolWebMCPTool[];
}

interface ProtocolWebMCPRemovedTool {
  name: string;
  frameId: string;
}

interface ProtocolWebMCPToolsRemovedEvent {
  tools: ProtocolWebMCPRemovedTool[];
}

interface ProtocolWebMCPToolInvokedEvent {
  toolName: string;
  frameId: string;
  invocationId: string;
  input: string;
}

interface ProtocolWebMCPToolRespondedEvent {
  invocationId: string;
  status: WebMCPInvocationStatus;
  output?: any;
  errorText?: string;
  exception?: Protocol.Runtime.RemoteObject;
}

/**
 * Represents a registered WebMCP tool available on the page.
 *
 * @public
 */
export class WebMCPTool extends EventEmitter<{
  /** Emitted when invocation starts. */
  toolinvoked: WebMCPToolCall;
}> {
  #webmcp: WebMCP;
  #backendNodeId?: number;
  #formElement?: ElementHandle<HTMLFormElement>;

  /**
   * Tool name.
   */
  name: string;
  /**
   * Tool description.
   */
  description: string;
  /**
   * Schema for the tool's input parameters.
   */
  inputSchema?: object;
  /**
   * Optional annotations for the tool.
   */
  annotations?: WebMCPAnnotation;
  /**
   * Frame the tool was defined for.
   */
  frame: Frame;
  /**
   * Source location that defined the tool (if available).
   */
  location?: ConsoleMessageLocation;
  /**
   * @internal
   */
  rawStackTrace?: Protocol.Runtime.StackTrace;

  /**
   * @internal
   */
  constructor(webmcp: WebMCP, tool: ProtocolWebMCPTool, frame: Frame) {
    super();
    this.#webmcp = webmcp;
    this.name = tool.name;
    this.description = tool.description;
    this.inputSchema = tool.inputSchema;
    this.annotations = tool.annotations;
    this.frame = frame;
    this.#backendNodeId = tool.backendNodeId;
    if (tool.stackTrace?.callFrames.length) {
      this.location = {
        url: tool.stackTrace.callFrames[0]!.url,
        lineNumber: tool.stackTrace.callFrames[0]!.lineNumber,
        columnNumber: tool.stackTrace.callFrames[0]!.columnNumber,
      };
    }
    this.rawStackTrace = tool.stackTrace;
  }

  /**
   * The corresponding ElementHandle when tool was registered via a form.
   */
  get formElement(): Promise<ElementHandle<HTMLFormElement> | undefined> {
    return (async () => {
      if (this.#formElement && !this.#formElement.disposed) {
        return this.#formElement;
      }
      if (!this.#backendNodeId) {
        return undefined;
      }
      this.#formElement = (await (this.frame as CdpFrame).worlds[
        MAIN_WORLD
      ].adoptBackendNode(
        this.#backendNodeId,
      )) as ElementHandle<HTMLFormElement>;
      return this.#formElement;
    })();
  }

  /**
   * Executes tool with input parameters, matching tool's `inputSchema`.
   */
  async execute(input: object = {}): Promise<WebMCPToolCallResult> {
    const {invocationId} = await this.#webmcp.invokeTool(this, input);
    return await new Promise<WebMCPToolCallResult>(resolve => {
      const handler = (event: WebMCPToolCallResult) => {
        if (event.id === invocationId) {
          this.#webmcp.off('toolresponded', handler);
          resolve(event);
        }
      };
      this.#webmcp.on('toolresponded', handler);
    });
  }
}

/**
 * @public
 */
export interface WebMCPToolsAddedEvent {
  /**
   * Array of tools that were added.
   */
  tools: WebMCPTool[];
}

/**
 * @public
 */
export interface WebMCPToolsRemovedEvent {
  /**
   * Array of tools that were removed.
   */
  tools: WebMCPTool[];
}

/**
 * @public
 */
export class WebMCPToolCall {
  /**
   * Tool invocation identifier.
   */
  id: string;
  /**
   * Tool that was called.
   */
  tool: WebMCPTool;
  /**
   * The input parameters used for the call.
   */
  input: object;

  /**
   * @internal
   */
  constructor(invocationId: string, tool: WebMCPTool, input: string) {
    this.id = invocationId;
    this.tool = tool;
    try {
      this.input = JSON.parse(input);
    } catch (error) {
      this.input = {};
      debugError(error);
    }
  }
}

/**
 * @public
 */
export interface WebMCPToolCallResult {
  /**
   * Tool invocation identifier.
   */
  id: string;
  /**
   * The corresponding tool call if available.
   */
  call?: WebMCPToolCall;
  /**
   * Status of the invocation.
   */
  status: WebMCPInvocationStatus;
  /**
   * Output or error delivered as delivered to the agent. Missing if `status` is anything
   * other than Completed.
   */
  output?: any;
  /**
   * Error text.
   */
  errorText?: string;
  /**
   * The exception object, if the javascript tool threw an error.
   */
  exception?: Protocol.Runtime.RemoteObject;
}

/**
 * The experimental WebMCP class provides an API for the WebMCP API.
 *
 * See the
 * {@link https://pptr.dev/guides/webmcp|WebMCP guide}
 * for more details.
 *
 * @example
 *
 * ```ts
 * await page.goto('https://www.example.com');
 * const tools = page.webmcp.tools();
 * for (const tool of tools) {
 *   console.log(`Tool found: ${tool.name} - ${tool.description}`);
 * }
 * ```
 *
 * @experimental
 * @public
 */
export class WebMCP extends EventEmitter<{
  /** Emitted when tools are added. */
  toolsadded: WebMCPToolsAddedEvent;
  /** Emitted when tools are removed. */
  toolsremoved: WebMCPToolsRemovedEvent;
  /** Emitted when a tool invocation starts. */
  toolinvoked: WebMCPToolCall;
  /** Emitted when a tool invocation completes or fails. */
  toolresponded: WebMCPToolCallResult;
}> {
  #client: CDPSession;
  #frameManager: FrameManager;
  #tools = new Map<string, Map<string, WebMCPTool>>();
  #pendingCalls = new Map<string, WebMCPToolCall>();

  #onToolsAdded = (event: ProtocolWebMCPToolsAddedEvent) => {
    const tools: WebMCPTool[] = [];
    for (const tool of event.tools) {
      const frame = this.#frameManager.frame(tool.frameId);
      if (!frame) {
        continue;
      }

      const frameTools = this.#tools.get(tool.frameId) ?? new Map();
      if (!this.#tools.has(tool.frameId)) {
        this.#tools.set(tool.frameId, frameTools);
      }

      const addedTool = new WebMCPTool(this, tool, frame);
      frameTools.set(tool.name, addedTool);
      tools.push(addedTool);
    }

    this.emit('toolsadded', {tools});
  };

  #onToolsRemoved = (event: ProtocolWebMCPToolsRemovedEvent) => {
    const tools: WebMCPTool[] = [];
    event.tools.forEach(tool => {
      const removedTool = this.#tools.get(tool.frameId)?.get(tool.name);
      if (removedTool) {
        tools.push(removedTool);
      }
      this.#tools.get(tool.frameId)?.delete(tool.name);
    });
    this.emit('toolsremoved', {tools});
  };

  #onToolInvoked = (event: ProtocolWebMCPToolInvokedEvent) => {
    const tool = this.#tools.get(event.frameId)?.get(event.toolName);
    if (!tool) {
      return;
    }
    const call = new WebMCPToolCall(event.invocationId, tool, event.input);
    this.#pendingCalls.set(call.id, call);
    tool.emit('toolinvoked', call);
    this.emit('toolinvoked', call);
  };

  #onToolResponded = (event: ProtocolWebMCPToolRespondedEvent) => {
    const call = this.#pendingCalls.get(event.invocationId);
    if (call) {
      this.#pendingCalls.delete(event.invocationId);
    }
    const response: WebMCPToolCallResult = {
      id: event.invocationId,
      call: call,
      status: event.status,
      output: event.output,
      errorText: event.errorText,
      exception: event.exception,
    };
    this.emit('toolresponded', response);
  };

  #onFrameNavigated = (frame: Frame) => {
    this.#pendingCalls.clear();
    const frameTools = this.#tools.get(frame._id);
    if (!frameTools) {
      return;
    }
    const tools = Array.from(frameTools.values());
    this.#tools.delete(frame._id);
    if (tools.length) {
      this.emit('toolsremoved', {tools});
    }
  };

  /**
   * @internal
   */
  constructor(client: CDPSession, frameManager: FrameManager) {
    super();
    this.#client = client;
    this.#frameManager = frameManager;
    this.#frameManager.on(
      FrameManagerEvent.FrameNavigated,
      this.#onFrameNavigated,
    );
    this.#bindListeners();
  }

  /**
   * @internal
   */
  async initialize(): Promise<void> {
    return await this.#client.send('WebMCP.enable').catch(debugError);
  }

  /**
   * @internal
   */
  async invokeTool(
    tool: WebMCPTool,
    input: object,
  ): Promise<{invocationId: string}> {
    // @ts-expect-error WebMCP is not yet in the Protocol types.
    return await this.#client.send('WebMCP.invokeTool', {
      frameId: tool.frame._id,
      toolName: tool.name,
      input,
    });
  }

  /**
   * Gets all WebMCP tools defined by the page.
   */
  tools(): WebMCPTool[] {
    return Array.from(this.#tools.values()).flatMap(toolMap => {
      return Array.from(toolMap.values());
    });
  }

  #bindListeners(): void {
    this.#client.on('WebMCP.toolsAdded', this.#onToolsAdded);
    this.#client.on('WebMCP.toolsRemoved', this.#onToolsRemoved);
    this.#client.on('WebMCP.toolInvoked', this.#onToolInvoked);
    // @ts-expect-error M148 has non-final status type, update expected in M149
    this.#client.on('WebMCP.toolResponded', this.#onToolResponded);
  }

  /**
   * @internal
   */
  updateClient(client: CDPSession): void {
    this.#client.off('WebMCP.toolsAdded', this.#onToolsAdded);
    this.#client.off('WebMCP.toolsRemoved', this.#onToolsRemoved);
    this.#client.off('WebMCP.toolInvoked', this.#onToolInvoked);
    // @ts-expect-error M148 has non-final status type, update expected in M149
    this.#client.off('WebMCP.toolResponded', this.#onToolResponded);
    this.#client = client;
    this.#bindListeners();
  }
}
