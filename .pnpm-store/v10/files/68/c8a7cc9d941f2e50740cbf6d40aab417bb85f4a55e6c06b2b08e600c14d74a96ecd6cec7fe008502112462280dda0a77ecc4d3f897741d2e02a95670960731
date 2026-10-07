var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { CDPSessionEvent } from '../api/CDPSession.js';
import { debugError } from '../common/util.js';
import { assert } from '../util/assert.js';
import { invokeAtMostOnceForArguments } from '../util/decorators.js';
import { isErrorLike } from '../util/ErrorLike.js';
/**
 * @internal
 */
export class EmulatedState {
    #state;
    #clientProvider;
    #updater;
    constructor(initialState, clientProvider, updater) {
        this.#state = initialState;
        this.#clientProvider = clientProvider;
        this.#updater = updater;
        this.#clientProvider.registerState(this);
    }
    async setState(state) {
        this.#state = state;
        await this.sync();
    }
    get state() {
        return this.#state;
    }
    async sync() {
        await Promise.all(this.#clientProvider.clients().map(client => {
            return this.#updater(client, this.#state);
        }));
    }
}
/**
 * @internal
 */
let EmulationManager = (() => {
    let _instanceExtraInitializers = [];
    let _private_applyViewport_decorators;
    let _private_applyViewport_descriptor;
    let _private_emulateIdleState_decorators;
    let _private_emulateIdleState_descriptor;
    let _private_emulateTimezone_decorators;
    let _private_emulateTimezone_descriptor;
    let _private_emulateVisionDeficiency_decorators;
    let _private_emulateVisionDeficiency_descriptor;
    let _private_emulateCpuThrottling_decorators;
    let _private_emulateCpuThrottling_descriptor;
    let _private_emulateMediaFeatures_decorators;
    let _private_emulateMediaFeatures_descriptor;
    let _private_emulateMediaType_decorators;
    let _private_emulateMediaType_descriptor;
    let _private_setGeolocation_decorators;
    let _private_setGeolocation_descriptor;
    let _private_setDefaultBackgroundColor_decorators;
    let _private_setDefaultBackgroundColor_descriptor;
    let _private_setJavaScriptEnabled_decorators;
    let _private_setJavaScriptEnabled_descriptor;
    let _private_emulateFocus_decorators;
    let _private_emulateFocus_descriptor;
    return class EmulationManager {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _private_applyViewport_decorators = [invokeAtMostOnceForArguments];
            _private_emulateIdleState_decorators = [invokeAtMostOnceForArguments];
            _private_emulateTimezone_decorators = [invokeAtMostOnceForArguments];
            _private_emulateVisionDeficiency_decorators = [invokeAtMostOnceForArguments];
            _private_emulateCpuThrottling_decorators = [invokeAtMostOnceForArguments];
            _private_emulateMediaFeatures_decorators = [invokeAtMostOnceForArguments];
            _private_emulateMediaType_decorators = [invokeAtMostOnceForArguments];
            _private_setGeolocation_decorators = [invokeAtMostOnceForArguments];
            _private_setDefaultBackgroundColor_decorators = [invokeAtMostOnceForArguments];
            _private_setJavaScriptEnabled_decorators = [invokeAtMostOnceForArguments];
            _private_emulateFocus_decorators = [invokeAtMostOnceForArguments];
            __esDecorate(this, _private_applyViewport_descriptor = { value: __setFunctionName(async function (client, viewportState) {
                    if (!viewportState.viewport) {
                        await Promise.all([
                            client.send('Emulation.clearDeviceMetricsOverride'),
                            client.send('Emulation.setTouchEmulationEnabled', {
                                enabled: false,
                            }),
                        ]).catch(debugError);
                        return;
                    }
                    const { viewport } = viewportState;
                    const mobile = viewport.isMobile || false;
                    const width = viewport.width;
                    const height = viewport.height;
                    const deviceScaleFactor = viewport.deviceScaleFactor ?? 1;
                    const screenOrientation = viewport.isLandscape
                        ? { angle: 90, type: 'landscapePrimary' }
                        : { angle: 0, type: 'portraitPrimary' };
                    const hasTouch = viewport.hasTouch || false;
                    await Promise.all([
                        client
                            .send('Emulation.setDeviceMetricsOverride', {
                            mobile,
                            width,
                            height,
                            deviceScaleFactor,
                            screenOrientation,
                        })
                            .catch(err => {
                            if (err.message.includes('Target does not support metrics override')) {
                                debugError(err);
                                return;
                            }
                            throw err;
                        }),
                        client.send('Emulation.setTouchEmulationEnabled', {
                            enabled: hasTouch,
                        }),
                    ]);
                }, "#applyViewport") }, _private_applyViewport_decorators, { kind: "method", name: "#applyViewport", static: false, private: true, access: { has: obj => #applyViewport in obj, get: obj => obj.#applyViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateIdleState_descriptor = { value: __setFunctionName(async function (client, idleStateState) {
                    if (!idleStateState.active) {
                        return;
                    }
                    if (idleStateState.overrides) {
                        await client.send('Emulation.setIdleOverride', {
                            isUserActive: idleStateState.overrides.isUserActive,
                            isScreenUnlocked: idleStateState.overrides.isScreenUnlocked,
                        });
                    }
                    else {
                        await client.send('Emulation.clearIdleOverride');
                    }
                }, "#emulateIdleState") }, _private_emulateIdleState_decorators, { kind: "method", name: "#emulateIdleState", static: false, private: true, access: { has: obj => #emulateIdleState in obj, get: obj => obj.#emulateIdleState }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateTimezone_descriptor = { value: __setFunctionName(async function (client, timezoneState) {
                    if (!timezoneState.active) {
                        return;
                    }
                    try {
                        await client.send('Emulation.setTimezoneOverride', {
                            timezoneId: timezoneState.timezoneId || '',
                        });
                    }
                    catch (error) {
                        if (isErrorLike(error) && error.message.includes('Invalid timezone')) {
                            throw new Error(`Invalid timezone ID: ${timezoneState.timezoneId}`);
                        }
                        throw error;
                    }
                }, "#emulateTimezone") }, _private_emulateTimezone_decorators, { kind: "method", name: "#emulateTimezone", static: false, private: true, access: { has: obj => #emulateTimezone in obj, get: obj => obj.#emulateTimezone }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateVisionDeficiency_descriptor = { value: __setFunctionName(async function (client, visionDeficiency) {
                    if (!visionDeficiency.active) {
                        return;
                    }
                    await client.send('Emulation.setEmulatedVisionDeficiency', {
                        type: visionDeficiency.visionDeficiency || 'none',
                    });
                }, "#emulateVisionDeficiency") }, _private_emulateVisionDeficiency_decorators, { kind: "method", name: "#emulateVisionDeficiency", static: false, private: true, access: { has: obj => #emulateVisionDeficiency in obj, get: obj => obj.#emulateVisionDeficiency }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateCpuThrottling_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setCPUThrottlingRate', {
                        rate: state.factor ?? 1,
                    });
                }, "#emulateCpuThrottling") }, _private_emulateCpuThrottling_decorators, { kind: "method", name: "#emulateCpuThrottling", static: false, private: true, access: { has: obj => #emulateCpuThrottling in obj, get: obj => obj.#emulateCpuThrottling }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateMediaFeatures_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setEmulatedMedia', {
                        features: state.mediaFeatures,
                    });
                }, "#emulateMediaFeatures") }, _private_emulateMediaFeatures_decorators, { kind: "method", name: "#emulateMediaFeatures", static: false, private: true, access: { has: obj => #emulateMediaFeatures in obj, get: obj => obj.#emulateMediaFeatures }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateMediaType_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setEmulatedMedia', {
                        media: state.type || '',
                    });
                }, "#emulateMediaType") }, _private_emulateMediaType_decorators, { kind: "method", name: "#emulateMediaType", static: false, private: true, access: { has: obj => #emulateMediaType in obj, get: obj => obj.#emulateMediaType }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_setGeolocation_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setGeolocationOverride', state.geoLocation
                        ? {
                            longitude: state.geoLocation.longitude,
                            latitude: state.geoLocation.latitude,
                            accuracy: state.geoLocation.accuracy,
                        }
                        : undefined);
                }, "#setGeolocation") }, _private_setGeolocation_decorators, { kind: "method", name: "#setGeolocation", static: false, private: true, access: { has: obj => #setGeolocation in obj, get: obj => obj.#setGeolocation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_setDefaultBackgroundColor_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setDefaultBackgroundColorOverride', {
                        color: state.color,
                    });
                }, "#setDefaultBackgroundColor") }, _private_setDefaultBackgroundColor_decorators, { kind: "method", name: "#setDefaultBackgroundColor", static: false, private: true, access: { has: obj => #setDefaultBackgroundColor in obj, get: obj => obj.#setDefaultBackgroundColor }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_setJavaScriptEnabled_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setScriptExecutionDisabled', {
                        value: !state.javaScriptEnabled,
                    });
                }, "#setJavaScriptEnabled") }, _private_setJavaScriptEnabled_decorators, { kind: "method", name: "#setJavaScriptEnabled", static: false, private: true, access: { has: obj => #setJavaScriptEnabled in obj, get: obj => obj.#setJavaScriptEnabled }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_emulateFocus_descriptor = { value: __setFunctionName(async function (client, state) {
                    if (!state.active) {
                        return;
                    }
                    await client.send('Emulation.setFocusEmulationEnabled', {
                        enabled: state.enabled,
                    });
                }, "#emulateFocus") }, _private_emulateFocus_decorators, { kind: "method", name: "#emulateFocus", static: false, private: true, access: { has: obj => #emulateFocus in obj, get: obj => obj.#emulateFocus }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #client = __runInitializers(this, _instanceExtraInitializers);
        #emulatingMobile = false;
        #hasTouch = false;
        #states = [];
        #viewportState = new EmulatedState({
            active: false,
        }, this, this.#applyViewport);
        #idleOverridesState = new EmulatedState({
            active: false,
        }, this, this.#emulateIdleState);
        #timezoneState = new EmulatedState({
            active: false,
        }, this, this.#emulateTimezone);
        #visionDeficiencyState = new EmulatedState({
            active: false,
        }, this, this.#emulateVisionDeficiency);
        #cpuThrottlingState = new EmulatedState({
            active: false,
        }, this, this.#emulateCpuThrottling);
        #mediaFeaturesState = new EmulatedState({
            active: false,
        }, this, this.#emulateMediaFeatures);
        #mediaTypeState = new EmulatedState({
            active: false,
        }, this, this.#emulateMediaType);
        #geoLocationState = new EmulatedState({
            active: false,
        }, this, this.#setGeolocation);
        #defaultBackgroundColorState = new EmulatedState({
            active: false,
        }, this, this.#setDefaultBackgroundColor);
        #javascriptEnabledState = new EmulatedState({
            javaScriptEnabled: true,
            active: false,
        }, this, this.#setJavaScriptEnabled);
        #focusState = new EmulatedState({
            enabled: true,
            active: false,
        }, this, this.#emulateFocus);
        #secondaryClients = new Set();
        constructor(client) {
            this.#client = client;
        }
        updateClient(client) {
            this.#client = client;
            this.#secondaryClients.delete(client);
        }
        registerState(state) {
            this.#states.push(state);
        }
        clients() {
            return [this.#client, ...Array.from(this.#secondaryClients)];
        }
        async registerSpeculativeSession(client) {
            this.#secondaryClients.add(client);
            client.once(CDPSessionEvent.Disconnected, () => {
                this.#secondaryClients.delete(client);
            });
            // We don't await here because we want to register all state changes before
            // the target is unpaused.
            void Promise.all(this.#states.map(s => {
                return s.sync().catch(debugError);
            }));
        }
        get javascriptEnabled() {
            return this.#javascriptEnabledState.state.javaScriptEnabled;
        }
        async emulateViewport(viewport) {
            const currentState = this.#viewportState.state;
            if (!viewport && !currentState.active) {
                return false;
            }
            await this.#viewportState.setState(viewport
                ? {
                    viewport,
                    active: true,
                }
                : {
                    active: false,
                });
            const mobile = viewport?.isMobile || false;
            const hasTouch = viewport?.hasTouch || false;
            const reloadNeeded = this.#emulatingMobile !== mobile || this.#hasTouch !== hasTouch;
            this.#emulatingMobile = mobile;
            this.#hasTouch = hasTouch;
            return reloadNeeded;
        }
        get #applyViewport() { return _private_applyViewport_descriptor.value; }
        async emulateIdleState(overrides) {
            await this.#idleOverridesState.setState({
                active: true,
                overrides,
            });
        }
        get #emulateIdleState() { return _private_emulateIdleState_descriptor.value; }
        get #emulateTimezone() { return _private_emulateTimezone_descriptor.value; }
        async emulateTimezone(timezoneId) {
            await this.#timezoneState.setState({
                timezoneId,
                active: true,
            });
        }
        get #emulateVisionDeficiency() { return _private_emulateVisionDeficiency_descriptor.value; }
        async emulateVisionDeficiency(type) {
            const visionDeficiencies = new Set([
                'none',
                'achromatopsia',
                'blurredVision',
                'deuteranopia',
                'protanopia',
                'reducedContrast',
                'tritanopia',
            ]);
            assert(!type || visionDeficiencies.has(type), `Unsupported vision deficiency: ${type}`);
            await this.#visionDeficiencyState.setState({
                active: true,
                visionDeficiency: type,
            });
        }
        get #emulateCpuThrottling() { return _private_emulateCpuThrottling_descriptor.value; }
        async emulateCPUThrottling(factor) {
            assert(factor === null || factor >= 1, 'Throttling rate should be greater or equal to 1');
            await this.#cpuThrottlingState.setState({
                active: true,
                factor: factor ?? undefined,
            });
        }
        get #emulateMediaFeatures() { return _private_emulateMediaFeatures_descriptor.value; }
        async emulateMediaFeatures(features) {
            if (Array.isArray(features)) {
                for (const mediaFeature of features) {
                    const name = mediaFeature.name;
                    assert(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(name), 'Unsupported media feature: ' + name);
                }
            }
            await this.#mediaFeaturesState.setState({
                active: true,
                mediaFeatures: features,
            });
        }
        get #emulateMediaType() { return _private_emulateMediaType_descriptor.value; }
        async emulateMediaType(type) {
            assert(type === 'screen' ||
                type === 'print' ||
                (type ?? undefined) === undefined, 'Unsupported media type: ' + type);
            await this.#mediaTypeState.setState({
                type,
                active: true,
            });
        }
        get #setGeolocation() { return _private_setGeolocation_descriptor.value; }
        async setGeolocation(options) {
            const { longitude, latitude, accuracy = 0 } = options;
            if (longitude < -180 || longitude > 180) {
                throw new Error(`Invalid longitude "${longitude}": precondition -180 <= LONGITUDE <= 180 failed.`);
            }
            if (latitude < -90 || latitude > 90) {
                throw new Error(`Invalid latitude "${latitude}": precondition -90 <= LATITUDE <= 90 failed.`);
            }
            if (accuracy < 0) {
                throw new Error(`Invalid accuracy "${accuracy}": precondition 0 <= ACCURACY failed.`);
            }
            await this.#geoLocationState.setState({
                active: true,
                geoLocation: {
                    longitude,
                    latitude,
                    accuracy,
                },
            });
        }
        get #setDefaultBackgroundColor() { return _private_setDefaultBackgroundColor_descriptor.value; }
        /**
         * Resets default white background
         */
        async resetDefaultBackgroundColor() {
            await this.#defaultBackgroundColorState.setState({
                active: true,
                color: undefined,
            });
        }
        /**
         * Hides default white background
         */
        async setTransparentBackgroundColor() {
            await this.#defaultBackgroundColorState.setState({
                active: true,
                color: { r: 0, g: 0, b: 0, a: 0 },
            });
        }
        get #setJavaScriptEnabled() { return _private_setJavaScriptEnabled_descriptor.value; }
        async setJavaScriptEnabled(enabled) {
            await this.#javascriptEnabledState.setState({
                active: true,
                javaScriptEnabled: enabled,
            });
        }
        get #emulateFocus() { return _private_emulateFocus_descriptor.value; }
        async emulateFocus(enabled) {
            await this.#focusState.setState({
                active: true,
                enabled,
            });
        }
    };
})();
export { EmulationManager };
//# sourceMappingURL=EmulationManager.js.map