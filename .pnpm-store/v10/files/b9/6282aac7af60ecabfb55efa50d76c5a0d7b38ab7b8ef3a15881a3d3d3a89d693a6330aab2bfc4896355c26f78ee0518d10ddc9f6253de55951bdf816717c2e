"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSpanProcessor = void 0;
const core_1 = require("@opentelemetry/core");
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
class MultiSpanProcessor {
    _spanProcessors;
    constructor(spanProcessors) {
        this._spanProcessors = spanProcessors;
    }
    forceFlush() {
        const promises = [];
        for (const spanProcessor of this._spanProcessors) {
            promises.push(spanProcessor.forceFlush());
        }
        return new Promise(resolve => {
            Promise.all(promises)
                .then(() => {
                resolve();
            })
                .catch(error => {
                (0, core_1.globalErrorHandler)(error || new Error('MultiSpanProcessor: forceFlush failed'));
                resolve();
            });
        });
    }
    onStart(span, context) {
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.onStart(span, context);
        }
    }
    onEnding(span) {
        for (const spanProcessor of this._spanProcessors) {
            if (spanProcessor.onEnding) {
                spanProcessor.onEnding(span);
            }
        }
    }
    onEnd(span) {
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.onEnd(span);
        }
    }
    shutdown() {
        const promises = [];
        for (const spanProcessor of this._spanProcessors) {
            promises.push(spanProcessor.shutdown());
        }
        return new Promise((resolve, reject) => {
            Promise.all(promises).then(() => {
                resolve();
            }, reject);
        });
    }
}
exports.MultiSpanProcessor = MultiSpanProcessor;
//# sourceMappingURL=MultiSpanProcessor.js.map