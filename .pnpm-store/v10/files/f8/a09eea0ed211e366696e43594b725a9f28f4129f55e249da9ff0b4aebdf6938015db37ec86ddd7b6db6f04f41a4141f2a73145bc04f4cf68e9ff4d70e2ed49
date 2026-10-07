/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { EventEmitter } from '../common/EventEmitter.js';
import { debugError } from '../common/util.js';
import { FrameManagerEvent } from './FrameManagerEvents.js';
import { MAIN_WORLD } from './IsolatedWorlds.js';
/**
 * Represents a registered WebMCP tool available on the page.
 *
 * @public
 */
export class WebMCPTool extends EventEmitter {
    #webmcp;
    #backendNodeId;
    #formElement;
    /**
     * Tool name.
     */
    name;
    /**
     * Tool description.
     */
    description;
    /**
     * Schema for the tool's input parameters.
     */
    inputSchema;
    /**
     * Optional annotations for the tool.
     */
    annotations;
    /**
     * Frame the tool was defined for.
     */
    frame;
    /**
     * Source location that defined the tool (if available).
     */
    location;
    /**
     * @internal
     */
    rawStackTrace;
    /**
     * @internal
     */
    constructor(webmcp, tool, frame) {
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
                url: tool.stackTrace.callFrames[0].url,
                lineNumber: tool.stackTrace.callFrames[0].lineNumber,
                columnNumber: tool.stackTrace.callFrames[0].columnNumber,
            };
        }
        this.rawStackTrace = tool.stackTrace;
    }
    /**
     * The corresponding ElementHandle when tool was registered via a form.
     */
    get formElement() {
        return (async () => {
            if (this.#formElement && !this.#formElement.disposed) {
                return this.#formElement;
            }
            if (!this.#backendNodeId) {
                return undefined;
            }
            this.#formElement = (await this.frame.worlds[MAIN_WORLD].adoptBackendNode(this.#backendNodeId));
            return this.#formElement;
        })();
    }
    /**
     * Executes tool with input parameters, matching tool's `inputSchema`.
     */
    async execute(input = {}) {
        const { invocationId } = await this.#webmcp.invokeTool(this, input);
        return await new Promise(resolve => {
            const handler = (event) => {
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
export class WebMCPToolCall {
    /**
     * Tool invocation identifier.
     */
    id;
    /**
     * Tool that was called.
     */
    tool;
    /**
     * The input parameters used for the call.
     */
    input;
    /**
     * @internal
     */
    constructor(invocationId, tool, input) {
        this.id = invocationId;
        this.tool = tool;
        try {
            this.input = JSON.parse(input);
        }
        catch (error) {
            this.input = {};
            debugError(error);
        }
    }
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
export class WebMCP extends EventEmitter {
    #client;
    #frameManager;
    #tools = new Map();
    #pendingCalls = new Map();
    #onToolsAdded = (event) => {
        const tools = [];
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
        this.emit('toolsadded', { tools });
    };
    #onToolsRemoved = (event) => {
        const tools = [];
        event.tools.forEach(tool => {
            const removedTool = this.#tools.get(tool.frameId)?.get(tool.name);
            if (removedTool) {
                tools.push(removedTool);
            }
            this.#tools.get(tool.frameId)?.delete(tool.name);
        });
        this.emit('toolsremoved', { tools });
    };
    #onToolInvoked = (event) => {
        const tool = this.#tools.get(event.frameId)?.get(event.toolName);
        if (!tool) {
            return;
        }
        const call = new WebMCPToolCall(event.invocationId, tool, event.input);
        this.#pendingCalls.set(call.id, call);
        tool.emit('toolinvoked', call);
        this.emit('toolinvoked', call);
    };
    #onToolResponded = (event) => {
        const call = this.#pendingCalls.get(event.invocationId);
        if (call) {
            this.#pendingCalls.delete(event.invocationId);
        }
        const response = {
            id: event.invocationId,
            call: call,
            status: event.status,
            output: event.output,
            errorText: event.errorText,
            exception: event.exception,
        };
        this.emit('toolresponded', response);
    };
    #onFrameNavigated = (frame) => {
        this.#pendingCalls.clear();
        const frameTools = this.#tools.get(frame._id);
        if (!frameTools) {
            return;
        }
        const tools = Array.from(frameTools.values());
        this.#tools.delete(frame._id);
        if (tools.length) {
            this.emit('toolsremoved', { tools });
        }
    };
    /**
     * @internal
     */
    constructor(client, frameManager) {
        super();
        this.#client = client;
        this.#frameManager = frameManager;
        this.#frameManager.on(FrameManagerEvent.FrameNavigated, this.#onFrameNavigated);
        this.#bindListeners();
    }
    /**
     * @internal
     */
    async initialize() {
        return await this.#client.send('WebMCP.enable').catch(debugError);
    }
    /**
     * @internal
     */
    async invokeTool(tool, input) {
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
    tools() {
        return Array.from(this.#tools.values()).flatMap(toolMap => {
            return Array.from(toolMap.values());
        });
    }
    #bindListeners() {
        this.#client.on('WebMCP.toolsAdded', this.#onToolsAdded);
        this.#client.on('WebMCP.toolsRemoved', this.#onToolsRemoved);
        this.#client.on('WebMCP.toolInvoked', this.#onToolInvoked);
        // @ts-expect-error M148 has non-final status type, update expected in M149
        this.#client.on('WebMCP.toolResponded', this.#onToolResponded);
    }
    /**
     * @internal
     */
    updateClient(client) {
        this.#client.off('WebMCP.toolsAdded', this.#onToolsAdded);
        this.#client.off('WebMCP.toolsRemoved', this.#onToolsRemoved);
        this.#client.off('WebMCP.toolInvoked', this.#onToolInvoked);
        // @ts-expect-error M148 has non-final status type, update expected in M149
        this.#client.off('WebMCP.toolResponded', this.#onToolResponded);
        this.#client = client;
        this.#bindListeners();
    }
}
//# sourceMappingURL=WebMCP.js.map