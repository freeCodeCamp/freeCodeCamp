/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { getGlobal, registerGlobal, unregisterGlobal, } from '../internal/global-utils';
import { NoopTextMapPropagator } from '../propagation/NoopTextMapPropagator';
import { defaultTextMapGetter, defaultTextMapSetter, } from '../propagation/TextMapPropagator';
import { getBaggage, getActiveBaggage, setBaggage, deleteBaggage, } from '../baggage/context-helpers';
import { createBaggage } from '../baggage/utils';
import { DiagAPI } from './diag';
const API_NAME = 'propagation';
const NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 *
 * @since 1.0.0
 */
export class PropagationAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    constructor() {
        this.createBaggage = createBaggage;
        this.getBaggage = getBaggage;
        this.getActiveBaggage = getActiveBaggage;
        this.setBaggage = setBaggage;
        this.deleteBaggage = deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    static getInstance() {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    }
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    setGlobalPropagator(propagator) {
        return registerGlobal(API_NAME, propagator, DiagAPI.instance());
    }
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    inject(context, carrier, setter = defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(context, carrier, setter);
    }
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    extract(context, carrier, getter = defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(context, carrier, getter);
    }
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    fields() {
        return this._getGlobalPropagator().fields();
    }
    /** Remove the global propagator */
    disable() {
        unregisterGlobal(API_NAME, DiagAPI.instance());
    }
    _getGlobalPropagator() {
        return getGlobal(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    }
}
//# sourceMappingURL=propagation.js.map