import { registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { createDecorator, IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { Emitter } from '../../../../base/common/event.js';
import { StopWatch } from '../../../../base/common/stopwatch.js';
import { LineRange } from '../../../common/core/ranges/lineRange.js';
import { DetailedLineRangeMapping, RangeMapping } from '../../../common/diff/rangeMapping.js';
import { IEditorWorkerService } from '../../../common/services/editorWorker.js';
import { ITelemetryService } from '../../../../platform/telemetry/common/telemetry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WorkerBasedDocumentDiffProvider_1;
const IDiffProviderFactoryService = createDecorator('diffProviderFactoryService');
let WorkerBasedDiffProviderFactoryService = class WorkerBasedDiffProviderFactoryService {
    constructor(instantiationService) {
        this.instantiationService = instantiationService;
    }
    createDiffProvider(options) {
        return this.instantiationService.createInstance(WorkerBasedDocumentDiffProvider, options);
    }
};
WorkerBasedDiffProviderFactoryService = __decorate([
    __param(0, IInstantiationService)
], WorkerBasedDiffProviderFactoryService);
registerSingleton(IDiffProviderFactoryService, WorkerBasedDiffProviderFactoryService, 1 /* InstantiationType.Delayed */);
let WorkerBasedDocumentDiffProvider = class WorkerBasedDocumentDiffProvider {
    static { WorkerBasedDocumentDiffProvider_1 = this; }
    static { this.diffCache = new Map(); }
    constructor(options, editorWorkerService, telemetryService) {
        this.editorWorkerService = editorWorkerService;
        this.telemetryService = telemetryService;
        this.onDidChangeEventEmitter = new Emitter();
        this.onDidChange = this.onDidChangeEventEmitter.event;
        this.diffAlgorithm = 'advanced';
        this.diffAlgorithmOnDidChangeSubscription = undefined;
        this.setOptions(options);
    }
    dispose() {
        this.diffAlgorithmOnDidChangeSubscription?.dispose();
    }
    async computeDiff(original, modified, options, cancellationToken) {
        if (typeof this.diffAlgorithm !== 'string') {
            return this.diffAlgorithm.computeDiff(original, modified, options, cancellationToken);
        }
        if (original.isDisposed() || modified.isDisposed()) {
            // TODO@hediet
            return {
                changes: [],
                identical: true,
                quitEarly: false,
                moves: [],
            };
        }
        // This significantly speeds up the case when the original file is empty
        if (original.getLineCount() === 1 && original.getLineMaxColumn(1) === 1) {
            if (modified.getLineCount() === 1 && modified.getLineMaxColumn(1) === 1) {
                return {
                    changes: [],
                    identical: true,
                    quitEarly: false,
                    moves: [],
                };
            }
            return {
                changes: [
                    new DetailedLineRangeMapping(new LineRange(1, 2), new LineRange(1, modified.getLineCount() + 1), [
                        new RangeMapping(original.getFullModelRange(), modified.getFullModelRange())
                    ])
                ],
                identical: false,
                quitEarly: false,
                moves: [],
            };
        }
        const uriKey = JSON.stringify([original.uri.toString(), modified.uri.toString()]);
        const context = JSON.stringify([original.id, modified.id, original.getAlternativeVersionId(), modified.getAlternativeVersionId(), JSON.stringify(options)]);
        const c = WorkerBasedDocumentDiffProvider_1.diffCache.get(uriKey);
        if (c && c.context === context) {
            return c.result;
        }
        const sw = StopWatch.create();
        const result = await this.editorWorkerService.computeDiff(original.uri, modified.uri, options, this.diffAlgorithm);
        const timeMs = sw.elapsed();
        this.telemetryService.publicLog2('diffEditor.computeDiff', {
            timeMs,
            timedOut: result?.quitEarly ?? true,
            detectedMoves: options.computeMoves ? (result?.moves.length ?? 0) : -1,
        });
        if (cancellationToken.isCancellationRequested) {
            // Text models might be disposed!
            return {
                changes: [],
                identical: false,
                quitEarly: true,
                moves: [],
            };
        }
        if (!result) {
            throw new Error('no diff result available');
        }
        // max 10 items in cache
        if (WorkerBasedDocumentDiffProvider_1.diffCache.size > 10) {
            WorkerBasedDocumentDiffProvider_1.diffCache.delete(WorkerBasedDocumentDiffProvider_1.diffCache.keys().next().value);
        }
        WorkerBasedDocumentDiffProvider_1.diffCache.set(uriKey, { result, context });
        return result;
    }
    setOptions(newOptions) {
        let didChange = false;
        if (newOptions.diffAlgorithm) {
            if (this.diffAlgorithm !== newOptions.diffAlgorithm) {
                this.diffAlgorithmOnDidChangeSubscription?.dispose();
                this.diffAlgorithmOnDidChangeSubscription = undefined;
                this.diffAlgorithm = newOptions.diffAlgorithm;
                if (typeof newOptions.diffAlgorithm !== 'string') {
                    this.diffAlgorithmOnDidChangeSubscription = newOptions.diffAlgorithm.onDidChange(() => this.onDidChangeEventEmitter.fire());
                }
                didChange = true;
            }
        }
        if (didChange) {
            this.onDidChangeEventEmitter.fire();
        }
    }
};
WorkerBasedDocumentDiffProvider = WorkerBasedDocumentDiffProvider_1 = __decorate([
    __param(1, IEditorWorkerService),
    __param(2, ITelemetryService)
], WorkerBasedDocumentDiffProvider);

export { IDiffProviderFactoryService, WorkerBasedDiffProviderFactoryService, WorkerBasedDocumentDiffProvider };
