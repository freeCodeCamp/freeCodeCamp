import { patchFocus } from '../document/patchFocus.js';
import { prepareDocument } from '../document/prepareDocument.js';
import { dispatchUIEvent, dispatchEvent } from '../event/dispatchEvent.js';
import { attachClipboardStubToView } from '../utils/dataTransfer/Clipboard.js';
import { getWindow } from '../utils/misc/getWindow.js';
import { getDocumentFromNode } from '../utils/misc/getDocumentFromNode.js';
import { setLevelRef, ApiLevel } from '../utils/misc/level.js';
import { wait } from '../utils/misc/wait.js';
import { PointerEventsCheckLevel } from '../options.js';
import '@testing-library/dom';
import { defaultKeyMap as defaultKeyMap$1 } from '../keyboard/keyMap.js';
import { defaultKeyMap } from '../pointer/keyMap.js';
import { System } from '../system/index.js';
import { userEventApi } from './api.js';
import { wrapAsync } from './wrapAsync.js';

/**
 * Default options applied when API is called per `userEvent.anyApi()`
 */ const defaultOptionsDirect = {
    applyAccept: true,
    autoModify: true,
    delay: 0,
    document: globalThis.document,
    keyboardMap: defaultKeyMap$1,
    pointerMap: defaultKeyMap,
    pointerEventsCheck: PointerEventsCheckLevel.EachApiCall,
    skipAutoClose: false,
    skipClick: false,
    skipHover: false,
    writeToClipboard: false,
    advanceTimers: ()=>Promise.resolve()
};
/**
 * Default options applied when API is called per `userEvent().anyApi()`
 */ const defaultOptionsSetup = {
    ...defaultOptionsDirect,
    writeToClipboard: true
};
function createConfig(options = {}, defaults = defaultOptionsSetup, node) {
    const document = getDocument(options, node, defaults);
    return {
        ...defaults,
        ...options,
        document
    };
}
/**
 * Start a "session" with userEvent.
 * All APIs returned by this function share an input device state and a default configuration.
 */ function setupMain(options = {}) {
    var _config_document_defaultView;
    const config = createConfig(options);
    prepareDocument(config.document);
    patchFocus(getWindow(config.document).HTMLElement);
    const view = (_config_document_defaultView = config.document.defaultView) !== null && _config_document_defaultView !== void 0 ? _config_document_defaultView : /* istanbul ignore next */ globalThis.window;
    attachClipboardStubToView(view);
    return createInstance(config).api;
}
/**
 * Setup in direct call per `userEvent.anyApi()`
 */ function setupDirect({ keyboardState, pointerState, ...options } = {}, node) {
    var _ref;
    const config = createConfig(options, defaultOptionsDirect, node);
    prepareDocument(config.document);
    patchFocus(getWindow(config.document).HTMLElement);
    const system = (_ref = pointerState !== null && pointerState !== void 0 ? pointerState : keyboardState) !== null && _ref !== void 0 ? _ref : new System();
    return {
        api: createInstance(config, system).api,
        system
    };
}
/**
 * Create a set of callbacks with different default settings but the same state.
 */ function setupSub(options) {
    return createInstance({
        ...this.config,
        ...options
    }, this.system).api;
}
function wrapAndBindImpl(instance, impl) {
    function method(...args) {
        setLevelRef(instance, ApiLevel.Call);
        return wrapAsync(()=>impl.apply(instance, args).then(async (ret)=>{
                await wait(instance.config);
                return ret;
            }));
    }
    Object.defineProperty(method, 'name', {
        get: ()=>impl.name
    });
    return method;
}
function createInstance(config, system = new System()) {
    const instance = {};
    Object.assign(instance, {
        config,
        dispatchEvent: dispatchEvent.bind(instance),
        dispatchUIEvent: dispatchUIEvent.bind(instance),
        system,
        levelRefs: {},
        ...userEventApi
    });
    return {
        instance,
        api: {
            ...Object.fromEntries(Object.entries(userEventApi).map(([name, api])=>[
                    name,
                    wrapAndBindImpl(instance, api)
                ])),
            setup: setupSub.bind(instance)
        }
    };
}
function getDocument(options, node, defaults) {
    var _ref, _options_document;
    return (_ref = (_options_document = options.document) !== null && _options_document !== void 0 ? _options_document : node && getDocumentFromNode(node)) !== null && _ref !== void 0 ? _ref : defaults.document;
}

export { createConfig, createInstance, setupDirect, setupMain, setupSub };
