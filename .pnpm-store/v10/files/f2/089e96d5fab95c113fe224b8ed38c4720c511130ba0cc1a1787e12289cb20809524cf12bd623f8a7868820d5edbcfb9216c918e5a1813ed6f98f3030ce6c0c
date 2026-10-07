"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSpanProcessor = void 0;
const BatchSpanProcessorBase_1 = require("../../../export/BatchSpanProcessorBase");
const core_1 = require("@opentelemetry/core");
class BatchSpanProcessor extends BatchSpanProcessorBase_1.BatchSpanProcessorBase {
    _visibilityChangeListener;
    _pageHideListener;
    constructor(_exporter, config) {
        super(_exporter, config);
        this.onInit(config);
    }
    onInit(config) {
        if (config?.disableAutoFlushOnDocumentHide !== true &&
            typeof document !== 'undefined') {
            this._visibilityChangeListener = () => {
                if (document.visibilityState === 'hidden') {
                    this.forceFlush().catch(error => {
                        (0, core_1.globalErrorHandler)(error);
                    });
                }
            };
            this._pageHideListener = () => {
                this.forceFlush().catch(error => {
                    (0, core_1.globalErrorHandler)(error);
                });
            };
            document.addEventListener('visibilitychange', this._visibilityChangeListener);
            // use 'pagehide' event as a fallback for Safari; see https://bugs.webkit.org/show_bug.cgi?id=116769
            document.addEventListener('pagehide', this._pageHideListener);
        }
    }
    onShutdown() {
        if (typeof document !== 'undefined') {
            if (this._visibilityChangeListener) {
                document.removeEventListener('visibilitychange', this._visibilityChangeListener);
            }
            if (this._pageHideListener) {
                document.removeEventListener('pagehide', this._pageHideListener);
            }
        }
    }
}
exports.BatchSpanProcessor = BatchSpanProcessor;
//# sourceMappingURL=BatchSpanProcessor.js.map