/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { context, diag, TraceFlags } from '@opentelemetry/api';
import { BindOnceFuture, ExportResultCode, getNumberFromEnv, globalErrorHandler, suppressTracing, } from '@opentelemetry/core';
/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */
export class BatchSpanProcessorBase {
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _exporter;
    _isExporting = false;
    _finishedSpans = [];
    _timer;
    _shutdownOnce;
    _droppedSpansCount = 0;
    constructor(exporter, config) {
        this._exporter = exporter;
        this._maxExportBatchSize =
            typeof config?.maxExportBatchSize === 'number'
                ? config.maxExportBatchSize
                : (getNumberFromEnv('OTEL_BSP_MAX_EXPORT_BATCH_SIZE') ?? 512);
        this._maxQueueSize =
            typeof config?.maxQueueSize === 'number'
                ? config.maxQueueSize
                : (getNumberFromEnv('OTEL_BSP_MAX_QUEUE_SIZE') ?? 2048);
        this._scheduledDelayMillis =
            typeof config?.scheduledDelayMillis === 'number'
                ? config.scheduledDelayMillis
                : (getNumberFromEnv('OTEL_BSP_SCHEDULE_DELAY') ?? 5000);
        this._exportTimeoutMillis =
            typeof config?.exportTimeoutMillis === 'number'
                ? config.exportTimeoutMillis
                : (getNumberFromEnv('OTEL_BSP_EXPORT_TIMEOUT') ?? 30000);
        this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
        if (this._maxExportBatchSize > this._maxQueueSize) {
            diag.warn('BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize');
            this._maxExportBatchSize = this._maxQueueSize;
        }
    }
    forceFlush() {
        if (this._shutdownOnce.isCalled) {
            return this._shutdownOnce.promise;
        }
        return this._flushAll();
    }
    // does nothing.
    onStart(_span, _parentContext) { }
    onEnd(span) {
        if (this._shutdownOnce.isCalled) {
            return;
        }
        if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) {
            return;
        }
        this._addToBuffer(span);
    }
    shutdown() {
        return this._shutdownOnce.call();
    }
    _shutdown() {
        return Promise.resolve()
            .then(() => {
            return this.onShutdown();
        })
            .then(() => {
            return this._flushAll();
        })
            .then(() => {
            return this._exporter.shutdown();
        });
    }
    /** Add a span in the buffer. */
    _addToBuffer(span) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
            // limit reached, drop span
            if (this._droppedSpansCount === 0) {
                diag.debug('maxQueueSize reached, dropping spans');
            }
            this._droppedSpansCount++;
            return;
        }
        if (this._droppedSpansCount > 0) {
            // some spans were dropped, log once with count of spans dropped
            diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`);
            this._droppedSpansCount = 0;
        }
        this._finishedSpans.push(span);
        this._maybeStartTimer();
    }
    /**
     * Send all spans to the exporter respecting the batch size limit
     * This function is used only on forceFlush or shutdown,
     * for all other cases _flush should be used
     * */
    _flushAll() {
        return new Promise((resolve, reject) => {
            const promises = [];
            // calculate number of batches
            const count = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
            for (let i = 0, j = count; i < j; i++) {
                promises.push(this._flushOneBatch());
            }
            Promise.all(promises)
                .then(() => {
                resolve();
            })
                .catch(reject);
        });
    }
    _flushOneBatch() {
        this._clearTimer();
        if (this._finishedSpans.length === 0) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                // don't wait anymore for export, this way the next batch can start
                reject(new Error('Timeout'));
            }, this._exportTimeoutMillis);
            // prevent downstream exporter calls from generating spans
            context.with(suppressTracing(context.active()), () => {
                // Reset the finished spans buffer here because the next invocations of the _flush method
                // could pass the same finished spans to the exporter if the buffer is cleared
                // outside the execution of this callback.
                let spans;
                if (this._finishedSpans.length <= this._maxExportBatchSize) {
                    spans = this._finishedSpans;
                    this._finishedSpans = [];
                }
                else {
                    spans = this._finishedSpans.splice(0, this._maxExportBatchSize);
                }
                const doExport = () => this._exporter.export(spans, result => {
                    clearTimeout(timer);
                    if (result.code === ExportResultCode.SUCCESS) {
                        resolve();
                    }
                    else {
                        reject(result.error ??
                            new Error('BatchSpanProcessor: span export failed'));
                    }
                });
                let pendingResources = null;
                for (let i = 0, len = spans.length; i < len; i++) {
                    const span = spans[i];
                    if (span.resource.asyncAttributesPending &&
                        span.resource.waitForAsyncAttributes) {
                        pendingResources ??= [];
                        pendingResources.push(span.resource.waitForAsyncAttributes());
                    }
                }
                // Avoid scheduling a promise to make the behavior more predictable and easier to test
                if (pendingResources === null) {
                    doExport();
                }
                else {
                    Promise.all(pendingResources).then(doExport, err => {
                        globalErrorHandler(err);
                        reject(err);
                    });
                }
            });
        });
    }
    _maybeStartTimer() {
        if (this._isExporting)
            return;
        const flush = () => {
            this._isExporting = true;
            this._flushOneBatch()
                .finally(() => {
                this._isExporting = false;
                if (this._finishedSpans.length > 0) {
                    this._clearTimer();
                    this._maybeStartTimer();
                }
            })
                .catch(e => {
                this._isExporting = false;
                globalErrorHandler(e);
            });
        };
        // we only wait if the queue doesn't have enough elements yet
        if (this._finishedSpans.length >= this._maxExportBatchSize) {
            return flush();
        }
        if (this._timer !== undefined)
            return;
        this._timer = setTimeout(() => flush(), this._scheduledDelayMillis);
        // depending on runtime, this may be a 'number' or NodeJS.Timeout
        if (typeof this._timer !== 'number') {
            this._timer.unref();
        }
    }
    _clearTimer() {
        if (this._timer !== undefined) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    }
}
//# sourceMappingURL=BatchSpanProcessorBase.js.map