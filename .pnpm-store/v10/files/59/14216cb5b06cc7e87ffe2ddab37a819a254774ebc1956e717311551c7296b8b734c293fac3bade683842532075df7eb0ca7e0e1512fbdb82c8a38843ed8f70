import { timeout } from '../../../base/common/async.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { logOnceWebWorkerWarning } from '../../../base/common/worker/webWorker.js';
import { createWebWorker } from '../../../base/browser/webWorkerFactory.js';
import { Range } from '../../common/core/range.js';
import { ILanguageConfigurationService } from '../../common/languages/languageConfigurationRegistry.js';
import { EditorWorker } from '../../common/services/editorWebWorker.js';
import { IModelService } from '../../common/services/model.js';
import { ITextResourceConfigurationService } from '../../common/services/textResourceConfiguration.js';
import { isNonEmptyArray } from '../../../base/common/arrays.js';
import { ILogService } from '../../../platform/log/common/log.js';
import { StopWatch } from '../../../base/common/stopwatch.js';
import { canceled } from '../../../base/common/errors.js';
import { ILanguageFeaturesService } from '../../common/services/languageFeatures.js';
import { MovedText } from '../../common/diff/linesDiffComputer.js';
import { LineRangeMapping, DetailedLineRangeMapping, RangeMapping } from '../../common/diff/rangeMapping.js';
import { LineRange } from '../../common/core/ranges/lineRange.js';
import { mainWindow } from '../../../base/browser/window.js';
import { WindowIntervalTimer } from '../../../base/browser/dom.js';
import { WorkerTextModelSyncClient } from '../../common/services/textModelSync/textModelSync.impl.js';
import { EditorWorkerHost } from '../../common/services/editorWorkerHost.js';

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
/**
 * Stop the worker if it was not needed for 5 min.
 */
const STOP_WORKER_DELTA_TIME_MS = 5 * 60 * 1000;
function canSyncModel(modelService, resource) {
    const model = modelService.getModel(resource);
    if (!model) {
        return false;
    }
    if (model.isTooLargeForSyncing()) {
        return false;
    }
    return true;
}
let EditorWorkerService = class EditorWorkerService extends Disposable {
    constructor(workerDescriptor, modelService, configurationService, logService, _languageConfigurationService, languageFeaturesService) {
        super();
        this._languageConfigurationService = _languageConfigurationService;
        this._modelService = modelService;
        this._workerManager = this._register(new WorkerManager(workerDescriptor, this._modelService));
        this._logService = logService;
        // register default link-provider and default completions-provider
        this._register(languageFeaturesService.linkProvider.register({ language: '*', hasAccessToAllModels: true }, {
            provideLinks: async (model, token) => {
                if (!canSyncModel(this._modelService, model.uri)) {
                    return Promise.resolve({ links: [] }); // File too large
                }
                const worker = await this._workerWithResources([model.uri]);
                const links = await worker.$computeLinks(model.uri.toString());
                return links && { links };
            }
        }));
        this._register(languageFeaturesService.completionProvider.register('*', new WordBasedCompletionItemProvider(this._workerManager, configurationService, this._modelService, this._languageConfigurationService, this._logService)));
    }
    dispose() {
        super.dispose();
    }
    canComputeUnicodeHighlights(uri) {
        return canSyncModel(this._modelService, uri);
    }
    async computedUnicodeHighlights(uri, options, range) {
        const worker = await this._workerWithResources([uri]);
        return worker.$computeUnicodeHighlights(uri.toString(), options, range);
    }
    async computeDiff(original, modified, options, algorithm) {
        const worker = await this._workerWithResources([original, modified], /* forceLargeModels */ true);
        const result = await worker.$computeDiff(original.toString(), modified.toString(), options, algorithm);
        if (!result) {
            return null;
        }
        // Convert from space efficient JSON data to rich objects.
        const diff = {
            identical: result.identical,
            quitEarly: result.quitEarly,
            changes: toLineRangeMappings(result.changes),
            moves: result.moves.map(m => new MovedText(new LineRangeMapping(new LineRange(m[0], m[1]), new LineRange(m[2], m[3])), toLineRangeMappings(m[4])))
        };
        return diff;
        function toLineRangeMappings(changes) {
            return changes.map((c) => new DetailedLineRangeMapping(new LineRange(c[0], c[1]), new LineRange(c[2], c[3]), c[4]?.map((c) => new RangeMapping(new Range(c[0], c[1], c[2], c[3]), new Range(c[4], c[5], c[6], c[7])))));
        }
    }
    async computeMoreMinimalEdits(resource, edits, pretty = false) {
        if (isNonEmptyArray(edits)) {
            if (!canSyncModel(this._modelService, resource)) {
                return Promise.resolve(edits); // File too large
            }
            const sw = StopWatch.create();
            const result = this._workerWithResources([resource]).then(worker => worker.$computeMoreMinimalEdits(resource.toString(), edits, pretty));
            result.finally(() => this._logService.trace('FORMAT#computeMoreMinimalEdits', resource.toString(true), sw.elapsed()));
            return Promise.race([result, timeout(1000).then(() => edits)]);
        }
        else {
            return Promise.resolve(undefined);
        }
    }
    canNavigateValueSet(resource) {
        return (canSyncModel(this._modelService, resource));
    }
    async navigateValueSet(resource, range, up) {
        const model = this._modelService.getModel(resource);
        if (!model) {
            return null;
        }
        const wordDefRegExp = this._languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        const wordDef = wordDefRegExp.source;
        const wordDefFlags = wordDefRegExp.flags;
        const worker = await this._workerWithResources([resource]);
        return worker.$navigateValueSet(resource.toString(), range, up, wordDef, wordDefFlags);
    }
    canComputeWordRanges(resource) {
        return canSyncModel(this._modelService, resource);
    }
    async computeWordRanges(resource, range) {
        const model = this._modelService.getModel(resource);
        if (!model) {
            return Promise.resolve(null);
        }
        const wordDefRegExp = this._languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        const wordDef = wordDefRegExp.source;
        const wordDefFlags = wordDefRegExp.flags;
        const worker = await this._workerWithResources([resource]);
        return worker.$computeWordRanges(resource.toString(), range, wordDef, wordDefFlags);
    }
    async findSectionHeaders(uri, options) {
        const worker = await this._workerWithResources([uri]);
        return worker.$findSectionHeaders(uri.toString(), options);
    }
    async computeDefaultDocumentColors(uri) {
        const worker = await this._workerWithResources([uri]);
        return worker.$computeDefaultDocumentColors(uri.toString());
    }
    async _workerWithResources(resources, forceLargeModels = false) {
        const worker = await this._workerManager.withWorker();
        return await worker.workerWithSyncedResources(resources, forceLargeModels);
    }
};
EditorWorkerService = __decorate([
    __param(1, IModelService),
    __param(2, ITextResourceConfigurationService),
    __param(3, ILogService),
    __param(4, ILanguageConfigurationService),
    __param(5, ILanguageFeaturesService)
], EditorWorkerService);
class WordBasedCompletionItemProvider {
    constructor(workerManager, configurationService, modelService, languageConfigurationService, logService) {
        this.languageConfigurationService = languageConfigurationService;
        this.logService = logService;
        this._debugDisplayName = 'wordbasedCompletions';
        this._workerManager = workerManager;
        this._configurationService = configurationService;
        this._modelService = modelService;
    }
    async provideCompletionItems(model, position) {
        const config = this._configurationService.getValue(model.uri, position, 'editor');
        if (config.wordBasedSuggestions === 'off') {
            return undefined;
        }
        const models = [];
        if (config.wordBasedSuggestions === 'currentDocument') {
            // only current file and only if not too large
            if (canSyncModel(this._modelService, model.uri)) {
                models.push(model.uri);
            }
        }
        else {
            // either all files or files of same language
            for (const candidate of this._modelService.getModels()) {
                if (!canSyncModel(this._modelService, candidate.uri)) {
                    continue;
                }
                if (candidate === model) {
                    models.unshift(candidate.uri);
                }
                else if (config.wordBasedSuggestions === 'allDocuments' || candidate.getLanguageId() === model.getLanguageId()) {
                    models.push(candidate.uri);
                }
            }
        }
        if (models.length === 0) {
            return undefined; // File too large, no other files
        }
        const wordDefRegExp = this.languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        const word = model.getWordAtPosition(position);
        const replace = !word ? Range.fromPositions(position) : new Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
        const insert = replace.setEndPosition(position.lineNumber, position.column);
        // Trace logging about the word and replace/insert ranges
        this.logService.trace('[WordBasedCompletionItemProvider]', `word: "${word?.word || ''}", wordDef: "${wordDefRegExp}", replace: [${replace.toString()}], insert: [${insert.toString()}]`);
        const client = await this._workerManager.withWorker();
        const data = await client.textualSuggest(models, word?.word, wordDefRegExp);
        if (!data) {
            return undefined;
        }
        return {
            duration: data.duration,
            suggestions: data.words.map((word) => {
                return {
                    kind: 18 /* languages.CompletionItemKind.Text */,
                    label: word,
                    insertText: word,
                    range: { insert, replace }
                };
            }),
        };
    }
}
let WorkerManager = class WorkerManager extends Disposable {
    constructor(_workerDescriptor, modelService) {
        super();
        this._workerDescriptor = _workerDescriptor;
        this._modelService = modelService;
        this._editorWorkerClient = null;
        this._lastWorkerUsedTime = (new Date()).getTime();
        const stopWorkerInterval = this._register(new WindowIntervalTimer());
        stopWorkerInterval.cancelAndSet(() => this._checkStopIdleWorker(), Math.round(STOP_WORKER_DELTA_TIME_MS / 2), mainWindow);
        this._register(this._modelService.onModelRemoved(_ => this._checkStopEmptyWorker()));
    }
    dispose() {
        if (this._editorWorkerClient) {
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
        super.dispose();
    }
    /**
     * Check if the model service has no more models and stop the worker if that is the case.
     */
    _checkStopEmptyWorker() {
        if (!this._editorWorkerClient) {
            return;
        }
        const models = this._modelService.getModels();
        if (models.length === 0) {
            // There are no more models => nothing possible for me to do
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
    }
    /**
     * Check if the worker has been idle for a while and then stop it.
     */
    _checkStopIdleWorker() {
        if (!this._editorWorkerClient) {
            return;
        }
        const timeSinceLastWorkerUsedTime = (new Date()).getTime() - this._lastWorkerUsedTime;
        if (timeSinceLastWorkerUsedTime > STOP_WORKER_DELTA_TIME_MS) {
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
    }
    withWorker() {
        this._lastWorkerUsedTime = (new Date()).getTime();
        if (!this._editorWorkerClient) {
            this._editorWorkerClient = new EditorWorkerClient(this._workerDescriptor, false, this._modelService);
        }
        return Promise.resolve(this._editorWorkerClient);
    }
};
WorkerManager = __decorate([
    __param(1, IModelService)
], WorkerManager);
class SynchronousWorkerClient {
    constructor(instance) {
        this._instance = instance;
        this.proxy = this._instance;
    }
    dispose() {
        this._instance.dispose();
    }
    setChannel(channel, handler) {
        throw new Error(`Not supported`);
    }
}
let EditorWorkerClient = class EditorWorkerClient extends Disposable {
    constructor(_workerDescriptorOrWorker, keepIdleModels, modelService) {
        super();
        this._workerDescriptorOrWorker = _workerDescriptorOrWorker;
        this._disposed = false;
        this._modelService = modelService;
        this._keepIdleModels = keepIdleModels;
        this._worker = null;
        this._modelManager = null;
    }
    // foreign host request
    fhr(method, args) {
        throw new Error(`Not implemented!`);
    }
    _getOrCreateWorker() {
        if (!this._worker) {
            try {
                this._worker = this._register(createWebWorker(this._workerDescriptorOrWorker));
                EditorWorkerHost.setChannel(this._worker, this._createEditorWorkerHost());
            }
            catch (err) {
                logOnceWebWorkerWarning(err);
                this._worker = this._createFallbackLocalWorker();
            }
        }
        return this._worker;
    }
    async _getProxy() {
        try {
            const proxy = this._getOrCreateWorker().proxy;
            await proxy.$ping();
            return proxy;
        }
        catch (err) {
            logOnceWebWorkerWarning(err);
            this._worker = this._createFallbackLocalWorker();
            return this._worker.proxy;
        }
    }
    _createFallbackLocalWorker() {
        return new SynchronousWorkerClient(new EditorWorker(null));
    }
    _createEditorWorkerHost() {
        return {
            $fhr: (method, args) => this.fhr(method, args)
        };
    }
    _getOrCreateModelManager(proxy) {
        if (!this._modelManager) {
            this._modelManager = this._register(new WorkerTextModelSyncClient(proxy, this._modelService, this._keepIdleModels));
        }
        return this._modelManager;
    }
    async workerWithSyncedResources(resources, forceLargeModels = false) {
        if (this._disposed) {
            return Promise.reject(canceled());
        }
        const proxy = await this._getProxy();
        this._getOrCreateModelManager(proxy).ensureSyncedResources(resources, forceLargeModels);
        return proxy;
    }
    async textualSuggest(resources, leadingWord, wordDefRegExp) {
        const proxy = await this.workerWithSyncedResources(resources);
        const wordDef = wordDefRegExp.source;
        const wordDefFlags = wordDefRegExp.flags;
        return proxy.$textualSuggest(resources.map(r => r.toString()), leadingWord, wordDef, wordDefFlags);
    }
    dispose() {
        super.dispose();
        this._disposed = true;
    }
};
EditorWorkerClient = __decorate([
    __param(2, IModelService)
], EditorWorkerClient);

export { EditorWorkerClient, EditorWorkerService };
