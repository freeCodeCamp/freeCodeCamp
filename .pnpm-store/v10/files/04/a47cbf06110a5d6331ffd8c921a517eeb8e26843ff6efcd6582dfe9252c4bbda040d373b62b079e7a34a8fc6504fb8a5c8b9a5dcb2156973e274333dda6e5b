/* Partytown 0.7.6 - MIT builder.io */
(self => {
    const [getter, setter, callMethod, constructGlobal, definePrototypePropertyDescriptor, randomId, WinIdKey, InstanceIdKey, ApplyPathKey] = self.$bridgeToMedia$;
    delete self.$bridgeToMedia$;
    const ContextKey = Symbol();
    const MediaSourceKey = Symbol();
    const ReadyStateKey = Symbol();
    const SourceBuffersKey = Symbol();
    const SourceBufferTasksKey = Symbol();
    const TimeRangesKey = Symbol();
    const EMPTY_ARRAY = [];
    const defineCstr = (win, cstrName, Cstr) => win[cstrName] = defineCstrName(cstrName, Cstr);
    const defineCstrName = (cstrName, Cstr) => Object.defineProperty(Cstr, "name", {
        value: cstrName
    });
    const initCanvas = (WorkerBase, win) => {
        const HTMLCanvasDescriptorMap = {
            getContext: {
                value(contextType, contextAttributes) {
                    this[ContextKey] || (this[ContextKey] = (contextType.includes("webgl") ? createContextWebGL : createContext2D)(this, contextType, contextAttributes));
                    return this[ContextKey];
                }
            }
        };
        const WorkerCanvasGradient = defineCstr(win, "CanvasGradient", class extends WorkerBase {
            addColorStop(...args) {
                callMethod(this, [ "addColorStop" ], args, 2);
            }
        });
        const WorkerCanvasPattern = defineCstr(win, "CanvasPattern", class extends WorkerBase {
            setTransform(...args) {
                callMethod(this, [ "setTransform" ], args, 2);
            }
        });
        const createContext2D = (canvasInstance, contextType, contextAttributes) => {
            const winId = canvasInstance[WinIdKey];
            const ctxInstanceId = randomId();
            const ctxInstance = {
                [WinIdKey]: winId,
                [InstanceIdKey]: ctxInstanceId,
                [ApplyPathKey]: []
            };
            const ctx = callMethod(canvasInstance, [ "getContext" ], [ contextType, contextAttributes ], 1, ctxInstanceId);
            const ctx2dGetterMethods = "getContextAttributes,getImageData,getLineDash,getTransform,isPointInPath,isPointInStroke,measureText".split(",");
            const CanvasRenderingContext2D = {
                get: (target, propName) => "string" == typeof propName && propName in ctx ? "function" == typeof ctx[propName] ? (...args) => {
                    if (propName.startsWith("create")) {
                        const instanceId = randomId();
                        callMethod(ctxInstance, [ propName ], args, 2, instanceId);
                        if ("createImageData" === propName || "createPattern" === propName) {
                            (api => {
                                console.warn(`${api} not implemented`);
                            })(`${propName}()`);
                            return {
                                setTransform: () => {}
                            };
                        }
                        return new WorkerCanvasGradient(winId, instanceId);
                    }
                    const methodCallType = ctx2dGetterMethods.includes(propName) ? 1 : 2;
                    return callMethod(ctxInstance, [ propName ], args, methodCallType);
                } : ctx[propName] : target[propName],
                set(target, propName, value) {
                    if ("string" == typeof propName && propName in ctx) {
                        ctx[propName] !== value && "function" != typeof value && setter(ctxInstance, [ propName ], value);
                        ctx[propName] = value;
                    } else {
                        target[propName] = value;
                    }
                    return true;
                }
            };
            return new Proxy(ctx, CanvasRenderingContext2D);
        };
        const createContextWebGL = (canvasInstance, contextType, contextAttributes) => {
            const winId = canvasInstance[WinIdKey];
            const ctxInstanceId = randomId();
            const ctxInstance = {
                [WinIdKey]: winId,
                [InstanceIdKey]: ctxInstanceId,
                [ApplyPathKey]: []
            };
            const ctx = callMethod(canvasInstance, [ "getContext" ], [ contextType, contextAttributes ], 1, ctxInstanceId);
            const WebGLRenderingContextHandler = {
                get: (target, propName) => "string" == typeof propName ? "function" != typeof ctx[propName] ? ctx[propName] : (...args) => callMethod(ctxInstance, [ propName ], args, getWebGlMethodCallType(propName)) : target[propName],
                set(target, propName, value) {
                    if ("string" == typeof propName && propName in ctx) {
                        ctx[propName] !== value && "function" != typeof value && setter(ctxInstance, [ propName ], value);
                        ctx[propName] = value;
                    } else {
                        target[propName] = value;
                    }
                    return true;
                }
            };
            return new Proxy(ctx, WebGLRenderingContextHandler);
        };
        const ctxWebGLGetterMethods = "checkFramebufferStatus,makeXRCompatible".split(",");
        const getWebGlMethodCallType = methodName => methodName.startsWith("create") || methodName.startsWith("get") || methodName.startsWith("is") || ctxWebGLGetterMethods.includes(methodName) ? 1 : 2;
        defineCstr(win, "CanvasGradient", WorkerCanvasGradient);
        defineCstr(win, "CanvasPattern", WorkerCanvasPattern);
        definePrototypePropertyDescriptor(win.HTMLCanvasElement, HTMLCanvasDescriptorMap);
    };
    const initMedia = (WorkerBase, WorkerEventTargetProxy, env, win) => {
        var _a, _b;
        win.Audio = defineCstrName("HTMLAudioElement", class {
            constructor(src) {
                const audio = env.$createNode$("audio", randomId());
                audio.src = src;
                return audio;
            }
        });
        const WorkerAudioTrack = class extends WorkerBase {
            get enabled() {
                return getter(this, [ "enabled" ]);
            }
            set enabled(value) {
                setter(this, [ "enabled" ], value);
            }
            get id() {
                return getter(this, [ "id" ]);
            }
            get kind() {
                return getter(this, [ "kind" ]);
            }
            get label() {
                return getter(this, [ "label" ]);
            }
            get language() {
                return getter(this, [ "language" ]);
            }
            get sourceBuffer() {
                return new WorkerSourceBuffer(this);
            }
        };
        const WorkerAudioTrackList = class {
            constructor(mediaElm) {
                const winId = mediaElm[WinIdKey];
                const instanceId = mediaElm[InstanceIdKey];
                const instance = {
                    addEventListener(...args) {
                        callMethod(mediaElm, [ "audioTracks", "addEventListener" ], args, 3);
                    },
                    getTrackById: (...args) => callMethod(mediaElm, [ "audioTracks", "getTrackById" ], args),
                    get length() {
                        return getter(mediaElm, [ "audioTracks", "length" ]);
                    },
                    removeEventListener(...args) {
                        callMethod(mediaElm, [ "audioTracks", "removeEventListener" ], args, 3);
                    }
                };
                return new Proxy(instance, {
                    get: (target, propName) => "number" == typeof propName ? new WorkerAudioTrack(winId, instanceId, [ "audioTracks", propName ]) : target[propName]
                });
            }
        };
        const WorkerSourceBufferList = defineCstr(win, "SourceBufferList", class extends Array {
            constructor(mediaSource) {
                super();
                this[MediaSourceKey] = mediaSource;
            }
            addEventListener(...args) {
                callMethod(this[MediaSourceKey], [ "sourceBuffers", "addEventListener" ], args, 3);
            }
            removeEventListener(...args) {
                callMethod(this[MediaSourceKey], [ "sourceBuffers", "removeEventListener" ], args, 3);
            }
        });
        const WorkerSourceBuffer = defineCstr(win, "SourceBuffer", (_b = class extends WorkerEventTargetProxy {
            constructor(mediaSource) {
                super(mediaSource[WinIdKey], mediaSource[InstanceIdKey], [ "sourceBuffers" ]);
                this[_a] = [];
                this[MediaSourceKey] = mediaSource;
            }
            abort() {
                const sbIndex = getSourceBufferIndex(this);
                callMethod(this, [ sbIndex, "appendWindowStart" ], EMPTY_ARRAY, 1);
            }
            addEventListener(...args) {
                const sbIndex = getSourceBufferIndex(this);
                callMethod(this, [ sbIndex, "addEventListener" ], args, 3);
            }
            appendBuffer(buf) {
                this[SourceBufferTasksKey].push([ "appendBuffer", [ buf ], buf ]);
                drainSourceBufferQueue(this);
            }
            get appendWindowStart() {
                const sbIndex = getSourceBufferIndex(this);
                return getter(this, [ sbIndex, "appendWindowStart" ]);
            }
            set appendWindowStart(value) {
                const sbIndex = getSourceBufferIndex(this);
                setter(this, [ sbIndex, "appendWindowStart" ], value);
            }
            get appendWindowEnd() {
                const sbIndex = getSourceBufferIndex(this);
                return getter(this, [ sbIndex, "appendWindowEnd" ]);
            }
            set appendWindowEnd(value) {
                const sbIndex = getSourceBufferIndex(this);
                setter(this, [ sbIndex, "appendWindowEnd" ], value);
            }
            get buffered() {
                const mediaSource = this[MediaSourceKey];
                const sbIndex = getSourceBufferIndex(this);
                const timeRanges = new WorkerTimeRanges(mediaSource[WinIdKey], mediaSource[InstanceIdKey], [ "sourceBuffers", sbIndex, "buffered" ]);
                return timeRanges;
            }
            changeType(mimeType) {
                const sbIndex = getSourceBufferIndex(this);
                callMethod(this, [ sbIndex, "changeType" ], [ mimeType ], 2);
            }
            get mode() {
                const sbIndex = getSourceBufferIndex(this);
                return getter(this, [ sbIndex, "mode" ]);
            }
            set mode(value) {
                const sbIndex = getSourceBufferIndex(this);
                setter(this, [ sbIndex, "mode" ], value);
            }
            remove(start, end) {
                this[SourceBufferTasksKey].push([ "remove", [ start, end ] ]);
                drainSourceBufferQueue(this);
            }
            removeEventListener(...args) {
                const sbIndex = getSourceBufferIndex(this);
                callMethod(this, [ sbIndex, "removeEventListener" ], args, 3);
            }
            get timestampOffset() {
                const sbIndex = getSourceBufferIndex(this);
                return getter(this, [ sbIndex, "timestampOffset" ]);
            }
            set timestampOffset(value) {
                const sbIndex = getSourceBufferIndex(this);
                setter(this, [ sbIndex, "timestampOffset" ], value);
            }
            get updating() {
                const sbIndex = getSourceBufferIndex(this);
                return getter(this, [ sbIndex, "updating" ]);
            }
        }, _a = SourceBufferTasksKey, _b));
        const WorkerTimeRanges = defineCstr(win, "TimeRanges", class extends WorkerBase {
            start(...args) {
                return callMethod(this, [ "start" ], args);
            }
            end(...args) {
                return callMethod(this, [ "end" ], args);
            }
            get length() {
                return getter(this, [ "length" ]);
            }
        });
        const getSourceBufferIndex = sourceBuffer => {
            if (sourceBuffer) {
                const mediaSource = sourceBuffer[MediaSourceKey];
                const sourceBufferList = mediaSource[SourceBuffersKey];
                return sourceBufferList.indexOf(sourceBuffer);
            }
            return -1;
        };
        const drainSourceBufferQueue = sourceBuffer => {
            if (sourceBuffer[SourceBufferTasksKey].length) {
                if (!sourceBuffer.updating) {
                    const task = sourceBuffer[SourceBufferTasksKey].shift();
                    if (task) {
                        const sbIndex = getSourceBufferIndex(sourceBuffer);
                        callMethod(sourceBuffer, [ sbIndex, task[0] ], task[1], 3, void 0, task[2]);
                    }
                }
                setTimeout((() => drainSourceBufferQueue(sourceBuffer)), 50);
            }
        };
        const HTMLMediaDescriptorMap = {
            buffered: {
                get() {
                    if (!this[TimeRangesKey]) {
                        this[TimeRangesKey] = new WorkerTimeRanges(this[WinIdKey], this[InstanceIdKey], [ "buffered" ]);
                        setTimeout((() => {
                            this[TimeRangesKey] = void 0;
                        }), 5e3);
                    }
                    return this[TimeRangesKey];
                }
            },
            readyState: {
                get() {
                    if (4 === this[ReadyStateKey]) {
                        return 4;
                    }
                    if ("number" != typeof this[ReadyStateKey]) {
                        this[ReadyStateKey] = getter(this, [ "readyState" ]);
                        setTimeout((() => {
                            this[ReadyStateKey] = void 0;
                        }), 1e3);
                    }
                    return this[ReadyStateKey];
                }
            }
        };
        defineCstr(win, "MediaSource", class extends WorkerEventTargetProxy {
            constructor() {
                super(env.$winId$);
                this[SourceBuffersKey] = new WorkerSourceBufferList(this);
                constructGlobal(this, "MediaSource", EMPTY_ARRAY);
            }
            get activeSourceBuffers() {
                return [];
            }
            addSourceBuffer(mimeType) {
                const sourceBuffer = new WorkerSourceBuffer(this);
                this[SourceBuffersKey].push(sourceBuffer);
                callMethod(this, [ "addSourceBuffer" ], [ mimeType ]);
                return sourceBuffer;
            }
            clearLiveSeekableRange() {
                callMethod(this, [ "clearLiveSeekableRange" ], EMPTY_ARRAY, 2);
            }
            get duration() {
                return getter(this, [ "duration" ]);
            }
            set duration(value) {
                setter(this, [ "duration" ], value);
            }
            endOfStream(endOfStreamError) {
                callMethod(this, [ "endOfStream" ], [ endOfStreamError ], 3);
            }
            get readyState() {
                return getter(this, [ "readyState" ]);
            }
            removeSourceBuffer(sourceBuffer) {
                const index = getSourceBufferIndex(sourceBuffer);
                if (index > -1) {
                    this[SourceBuffersKey].splice(index, 1);
                    callMethod(this, [ "removeSourceBuffer" ], [ index ], 1);
                }
            }
            setLiveSeekableRange(start, end) {
                callMethod(this, [ "setLiveSeekableRange" ], [ start, end ], 2);
            }
            get sourceBuffers() {
                return this[SourceBuffersKey];
            }
            static isTypeSupported(mimeType) {
                if (!isStaticTypeSupported.has(mimeType)) {
                    const isSupported = callMethod(win, [ "MediaSource", "isTypeSupported" ], [ mimeType ]);
                    isStaticTypeSupported.set(mimeType, isSupported);
                }
                return isStaticTypeSupported.get(mimeType);
            }
        });
        const winURL = win.URL = defineCstrName("URL", class extends URL {});
        const hasAudioTracks = "audioTracks" in win.HTMLMediaElement.prototype;
        if (hasAudioTracks) {
            defineCstr(win, "AudioTrackList", WorkerAudioTrackList);
            defineCstr(win, "AudioTrack", WorkerAudioTrack);
            HTMLMediaDescriptorMap.audioTracks = {
                get() {
                    return new WorkerAudioTrackList(this);
                }
            };
        }
        definePrototypePropertyDescriptor(win.HTMLMediaElement, HTMLMediaDescriptorMap);
        winURL.createObjectURL = obj => callMethod(win, [ "URL", "createObjectURL" ], [ obj ]);
        winURL.revokeObjectURL = obj => callMethod(win, [ "URL", "revokeObjectURL" ], [ obj ]);
    };
    const isStaticTypeSupported = new Map;
    self.$bridgeFromMedia$ = (WorkerBase, WorkerEventTargetProxy, env, win, windowMediaConstructors) => {
        windowMediaConstructors.map((mediaCstrName => {
            delete win[mediaCstrName];
        }));
        initCanvas(WorkerBase, win);
        initMedia(WorkerBase, WorkerEventTargetProxy, env, win);
    };
})(self);
