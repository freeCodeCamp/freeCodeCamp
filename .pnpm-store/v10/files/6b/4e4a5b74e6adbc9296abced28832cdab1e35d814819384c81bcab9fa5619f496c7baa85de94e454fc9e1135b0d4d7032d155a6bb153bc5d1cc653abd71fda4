/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import type { ElementHandle } from '../api/ElementHandle.js';
import type { Frame } from '../api/Frame.js';
import type { ConsoleMessageLocation } from '../common/ConsoleMessage.js';
import { EventEmitter } from '../common/EventEmitter.js';
import type { FrameManager } from './FrameManager.js';
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
/**
 * Represents a registered WebMCP tool available on the page.
 *
 * @public
 */
export declare class WebMCPTool extends EventEmitter<{
    /** Emitted when invocation starts. */
    toolinvoked: WebMCPToolCall;
}> {
    #private;
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
    constructor(webmcp: WebMCP, tool: ProtocolWebMCPTool, frame: Frame);
    /**
     * The corresponding ElementHandle when tool was registered via a form.
     */
    get formElement(): Promise<ElementHandle<HTMLFormElement> | undefined>;
    /**
     * Executes tool with input parameters, matching tool's `inputSchema`.
     */
    execute(input?: object): Promise<WebMCPToolCallResult>;
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
export declare class WebMCPToolCall {
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
    constructor(invocationId: string, tool: WebMCPTool, input: string);
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
export declare class WebMCP extends EventEmitter<{
    /** Emitted when tools are added. */
    toolsadded: WebMCPToolsAddedEvent;
    /** Emitted when tools are removed. */
    toolsremoved: WebMCPToolsRemovedEvent;
    /** Emitted when a tool invocation starts. */
    toolinvoked: WebMCPToolCall;
    /** Emitted when a tool invocation completes or fails. */
    toolresponded: WebMCPToolCallResult;
}> {
    #private;
    /**
     * @internal
     */
    constructor(client: CDPSession, frameManager: FrameManager);
    /**
     * @internal
     */
    initialize(): Promise<void>;
    /**
     * @internal
     */
    invokeTool(tool: WebMCPTool, input: object): Promise<{
        invocationId: string;
    }>;
    /**
     * Gets all WebMCP tools defined by the page.
     */
    tools(): WebMCPTool[];
    /**
     * @internal
     */
    updateClient(client: CDPSession): void;
}
//# sourceMappingURL=WebMCP.d.ts.map