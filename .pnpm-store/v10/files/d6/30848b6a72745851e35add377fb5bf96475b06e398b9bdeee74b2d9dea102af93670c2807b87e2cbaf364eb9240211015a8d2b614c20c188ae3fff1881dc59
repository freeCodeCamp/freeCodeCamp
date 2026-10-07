/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @since 1.0.0
 */
export const defaultTextMapGetter = {
    get(carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys(carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
/**
 * @since 1.0.0
 */
export const defaultTextMapSetter = {
    set(carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map