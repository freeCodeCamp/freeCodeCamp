import { Emitter } from '../../../base/common/event.js';
import { StringSHA1 } from '../../../base/common/hash.js';
import { Disposable, DisposableStore } from '../../../base/common/lifecycle.js';
import { Schemas } from '../../../base/common/network.js';
import { equals } from '../../../base/common/objects.js';
import { OS, isLinux, isMacintosh } from '../../../base/common/platform.js';
import { IConfigurationService } from '../../../platform/configuration/common/configuration.js';
import { IInstantiationService } from '../../../platform/instantiation/common/instantiation.js';
import { IUndoRedoService } from '../../../platform/undoRedo/common/undoRedo.js';
import { clampedInt } from '../config/editorOptions.js';
import { EDITOR_MODEL_DEFAULTS } from '../core/misc/textModelDefaults.js';
import { PLAINTEXT_LANGUAGE_ID } from '../languages/modesRegistry.js';
import { isEditStackElement } from '../model/editStack.js';
import { TextModel } from '../model/textModel.js';
import { ITextResourcePropertiesService } from './textResourceConfiguration.js';

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
var ModelService_1;
function MODEL_ID(resource) {
    return resource.toString();
}
class ModelData {
    constructor(model, onWillDispose, onDidChangeLanguage) {
        this.model = model;
        this._modelEventListeners = new DisposableStore();
        this.model = model;
        this._modelEventListeners.add(model.onWillDispose(() => onWillDispose(model)));
        this._modelEventListeners.add(model.onDidChangeLanguage((e) => onDidChangeLanguage(model, e)));
    }
    dispose() {
        this._modelEventListeners.dispose();
    }
}
const DEFAULT_EOL = (isLinux || isMacintosh) ? 1 /* DefaultEndOfLine.LF */ : 2 /* DefaultEndOfLine.CRLF */;
class DisposedModelInfo {
    constructor(uri, initialUndoRedoSnapshot, time, sharesUndoRedoStack, heapSize, sha1, versionId, alternativeVersionId) {
        this.uri = uri;
        this.initialUndoRedoSnapshot = initialUndoRedoSnapshot;
        this.time = time;
        this.sharesUndoRedoStack = sharesUndoRedoStack;
        this.heapSize = heapSize;
        this.sha1 = sha1;
        this.versionId = versionId;
        this.alternativeVersionId = alternativeVersionId;
    }
}
let ModelService = class ModelService extends Disposable {
    static { ModelService_1 = this; }
    static { this.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK = 20 * 1024 * 1024; }
    constructor(_configurationService, _resourcePropertiesService, _undoRedoService, _instantiationService) {
        super();
        this._configurationService = _configurationService;
        this._resourcePropertiesService = _resourcePropertiesService;
        this._undoRedoService = _undoRedoService;
        this._instantiationService = _instantiationService;
        this._onModelAdded = this._register(new Emitter());
        this.onModelAdded = this._onModelAdded.event;
        this._onModelRemoved = this._register(new Emitter());
        this.onModelRemoved = this._onModelRemoved.event;
        this._onModelModeChanged = this._register(new Emitter());
        this.onModelLanguageChanged = this._onModelModeChanged.event;
        this._modelCreationOptionsByLanguageAndResource = Object.create(null);
        this._models = {};
        this._disposedModels = new Map();
        this._disposedModelsHeapSize = 0;
        this._register(this._configurationService.onDidChangeConfiguration(e => this._updateModelOptions(e)));
        this._updateModelOptions(undefined);
    }
    static _readModelOptions(config, isForSimpleWidget) {
        let tabSize = EDITOR_MODEL_DEFAULTS.tabSize;
        if (config.editor && typeof config.editor.tabSize !== 'undefined') {
            tabSize = clampedInt(config.editor.tabSize, EDITOR_MODEL_DEFAULTS.tabSize, 1, 100);
        }
        let indentSize = 'tabSize';
        if (config.editor && typeof config.editor.indentSize !== 'undefined' && config.editor.indentSize !== 'tabSize') {
            indentSize = clampedInt(config.editor.indentSize, 'tabSize', 1, 100);
        }
        let insertSpaces = EDITOR_MODEL_DEFAULTS.insertSpaces;
        if (config.editor && typeof config.editor.insertSpaces !== 'undefined') {
            insertSpaces = (config.editor.insertSpaces === 'false' ? false : Boolean(config.editor.insertSpaces));
        }
        let newDefaultEOL = DEFAULT_EOL;
        const eol = config.eol;
        if (eol === '\r\n') {
            newDefaultEOL = 2 /* DefaultEndOfLine.CRLF */;
        }
        else if (eol === '\n') {
            newDefaultEOL = 1 /* DefaultEndOfLine.LF */;
        }
        let trimAutoWhitespace = EDITOR_MODEL_DEFAULTS.trimAutoWhitespace;
        if (config.editor && typeof config.editor.trimAutoWhitespace !== 'undefined') {
            trimAutoWhitespace = (config.editor.trimAutoWhitespace === 'false' ? false : Boolean(config.editor.trimAutoWhitespace));
        }
        let detectIndentation = EDITOR_MODEL_DEFAULTS.detectIndentation;
        if (config.editor && typeof config.editor.detectIndentation !== 'undefined') {
            detectIndentation = (config.editor.detectIndentation === 'false' ? false : Boolean(config.editor.detectIndentation));
        }
        let largeFileOptimizations = EDITOR_MODEL_DEFAULTS.largeFileOptimizations;
        if (config.editor && typeof config.editor.largeFileOptimizations !== 'undefined') {
            largeFileOptimizations = (config.editor.largeFileOptimizations === 'false' ? false : Boolean(config.editor.largeFileOptimizations));
        }
        let bracketPairColorizationOptions = EDITOR_MODEL_DEFAULTS.bracketPairColorizationOptions;
        if (config.editor?.bracketPairColorization && typeof config.editor.bracketPairColorization === 'object') {
            const bpConfig = config.editor.bracketPairColorization;
            bracketPairColorizationOptions = {
                enabled: !!bpConfig.enabled,
                independentColorPoolPerBracketType: !!bpConfig.independentColorPoolPerBracketType
            };
        }
        return {
            isForSimpleWidget: isForSimpleWidget,
            tabSize: tabSize,
            indentSize: indentSize,
            insertSpaces: insertSpaces,
            detectIndentation: detectIndentation,
            defaultEOL: newDefaultEOL,
            trimAutoWhitespace: trimAutoWhitespace,
            largeFileOptimizations: largeFileOptimizations,
            bracketPairColorizationOptions
        };
    }
    _getEOL(resource, language) {
        if (resource) {
            return this._resourcePropertiesService.getEOL(resource, language);
        }
        const eol = this._configurationService.getValue('files.eol', { overrideIdentifier: language });
        if (eol && typeof eol === 'string' && eol !== 'auto') {
            return eol;
        }
        return OS === 3 /* platform.OperatingSystem.Linux */ || OS === 2 /* platform.OperatingSystem.Macintosh */ ? '\n' : '\r\n';
    }
    _shouldRestoreUndoStack() {
        const result = this._configurationService.getValue('files.restoreUndoStack');
        if (typeof result === 'boolean') {
            return result;
        }
        return true;
    }
    getCreationOptions(languageIdOrSelection, resource, isForSimpleWidget) {
        const language = (typeof languageIdOrSelection === 'string' ? languageIdOrSelection : languageIdOrSelection.languageId);
        let creationOptions = this._modelCreationOptionsByLanguageAndResource[language + resource];
        if (!creationOptions) {
            const editor = this._configurationService.getValue('editor', { overrideIdentifier: language, resource });
            const eol = this._getEOL(resource, language);
            creationOptions = ModelService_1._readModelOptions({ editor, eol }, isForSimpleWidget);
            this._modelCreationOptionsByLanguageAndResource[language + resource] = creationOptions;
        }
        return creationOptions;
    }
    _updateModelOptions(e) {
        const oldOptionsByLanguageAndResource = this._modelCreationOptionsByLanguageAndResource;
        this._modelCreationOptionsByLanguageAndResource = Object.create(null);
        // Update options on all models
        const keys = Object.keys(this._models);
        for (let i = 0, len = keys.length; i < len; i++) {
            const modelId = keys[i];
            const modelData = this._models[modelId];
            const language = modelData.model.getLanguageId();
            const uri = modelData.model.uri;
            if (e && !e.affectsConfiguration('editor', { overrideIdentifier: language, resource: uri }) && !e.affectsConfiguration('files.eol', { overrideIdentifier: language, resource: uri })) {
                continue; // perf: skip if this model is not affected by configuration change
            }
            const oldOptions = oldOptionsByLanguageAndResource[language + uri];
            const newOptions = this.getCreationOptions(language, uri, modelData.model.isForSimpleWidget);
            ModelService_1._setModelOptionsForModel(modelData.model, newOptions, oldOptions);
        }
    }
    static _setModelOptionsForModel(model, newOptions, currentOptions) {
        if (currentOptions && currentOptions.defaultEOL !== newOptions.defaultEOL && model.getLineCount() === 1) {
            model.setEOL(newOptions.defaultEOL === 1 /* DefaultEndOfLine.LF */ ? 0 /* EndOfLineSequence.LF */ : 1 /* EndOfLineSequence.CRLF */);
        }
        if (currentOptions
            && (currentOptions.detectIndentation === newOptions.detectIndentation)
            && (currentOptions.insertSpaces === newOptions.insertSpaces)
            && (currentOptions.tabSize === newOptions.tabSize)
            && (currentOptions.indentSize === newOptions.indentSize)
            && (currentOptions.trimAutoWhitespace === newOptions.trimAutoWhitespace)
            && equals(currentOptions.bracketPairColorizationOptions, newOptions.bracketPairColorizationOptions)) {
            // Same indent opts, no need to touch the model
            return;
        }
        if (newOptions.detectIndentation) {
            model.detectIndentation(newOptions.insertSpaces, newOptions.tabSize);
            model.updateOptions({
                trimAutoWhitespace: newOptions.trimAutoWhitespace,
                bracketColorizationOptions: newOptions.bracketPairColorizationOptions
            });
        }
        else {
            model.updateOptions({
                insertSpaces: newOptions.insertSpaces,
                tabSize: newOptions.tabSize,
                indentSize: newOptions.indentSize,
                trimAutoWhitespace: newOptions.trimAutoWhitespace,
                bracketColorizationOptions: newOptions.bracketPairColorizationOptions
            });
        }
    }
    // --- begin IModelService
    _insertDisposedModel(disposedModelData) {
        this._disposedModels.set(MODEL_ID(disposedModelData.uri), disposedModelData);
        this._disposedModelsHeapSize += disposedModelData.heapSize;
    }
    _removeDisposedModel(resource) {
        const disposedModelData = this._disposedModels.get(MODEL_ID(resource));
        if (disposedModelData) {
            this._disposedModelsHeapSize -= disposedModelData.heapSize;
        }
        this._disposedModels.delete(MODEL_ID(resource));
        return disposedModelData;
    }
    _ensureDisposedModelsHeapSize(maxModelsHeapSize) {
        if (this._disposedModelsHeapSize > maxModelsHeapSize) {
            // we must remove some old undo stack elements to free up some memory
            const disposedModels = [];
            this._disposedModels.forEach(entry => {
                if (!entry.sharesUndoRedoStack) {
                    disposedModels.push(entry);
                }
            });
            disposedModels.sort((a, b) => a.time - b.time);
            while (disposedModels.length > 0 && this._disposedModelsHeapSize > maxModelsHeapSize) {
                const disposedModel = disposedModels.shift();
                this._removeDisposedModel(disposedModel.uri);
                if (disposedModel.initialUndoRedoSnapshot !== null) {
                    this._undoRedoService.restoreSnapshot(disposedModel.initialUndoRedoSnapshot);
                }
            }
        }
    }
    _createModelData(value, languageIdOrSelection, resource, isForSimpleWidget) {
        // create & save the model
        const options = this.getCreationOptions(languageIdOrSelection, resource, isForSimpleWidget);
        const model = this._instantiationService.createInstance(TextModel, value, languageIdOrSelection, options, resource);
        if (resource && this._disposedModels.has(MODEL_ID(resource))) {
            const disposedModelData = this._removeDisposedModel(resource);
            const elements = this._undoRedoService.getElements(resource);
            const sha1Computer = this._getSHA1Computer();
            const sha1IsEqual = (sha1Computer.canComputeSHA1(model)
                ? sha1Computer.computeSHA1(model) === disposedModelData.sha1
                : false);
            if (sha1IsEqual || disposedModelData.sharesUndoRedoStack) {
                for (const element of elements.past) {
                    if (isEditStackElement(element) && element.matchesResource(resource)) {
                        element.setModel(model);
                    }
                }
                for (const element of elements.future) {
                    if (isEditStackElement(element) && element.matchesResource(resource)) {
                        element.setModel(model);
                    }
                }
                this._undoRedoService.setElementsValidFlag(resource, true, (element) => (isEditStackElement(element) && element.matchesResource(resource)));
                if (sha1IsEqual) {
                    model._overwriteVersionId(disposedModelData.versionId);
                    model._overwriteAlternativeVersionId(disposedModelData.alternativeVersionId);
                    model._overwriteInitialUndoRedoSnapshot(disposedModelData.initialUndoRedoSnapshot);
                }
            }
            else {
                if (disposedModelData.initialUndoRedoSnapshot !== null) {
                    this._undoRedoService.restoreSnapshot(disposedModelData.initialUndoRedoSnapshot);
                }
            }
        }
        const modelId = MODEL_ID(model.uri);
        if (this._models[modelId]) {
            // There already exists a model with this id => this is a programmer error
            throw new Error('ModelService: Cannot add model because it already exists!');
        }
        const modelData = new ModelData(model, (model) => this._onWillDispose(model), (model, e) => this._onDidChangeLanguage(model, e));
        this._models[modelId] = modelData;
        return modelData;
    }
    createModel(value, languageSelection, resource, isForSimpleWidget = false) {
        let modelData;
        if (languageSelection) {
            modelData = this._createModelData(value, languageSelection, resource, isForSimpleWidget);
        }
        else {
            modelData = this._createModelData(value, PLAINTEXT_LANGUAGE_ID, resource, isForSimpleWidget);
        }
        this._onModelAdded.fire(modelData.model);
        return modelData.model;
    }
    getModels() {
        const ret = [];
        const keys = Object.keys(this._models);
        for (let i = 0, len = keys.length; i < len; i++) {
            const modelId = keys[i];
            ret.push(this._models[modelId].model);
        }
        return ret;
    }
    getModel(resource) {
        const modelId = MODEL_ID(resource);
        const modelData = this._models[modelId];
        if (!modelData) {
            return null;
        }
        return modelData.model;
    }
    // --- end IModelService
    _schemaShouldMaintainUndoRedoElements(resource) {
        return (resource.scheme === Schemas.file
            || resource.scheme === Schemas.vscodeRemote
            || resource.scheme === Schemas.vscodeUserData
            || resource.scheme === Schemas.vscodeNotebookCell
            || resource.scheme === 'fake-fs' // for tests
        );
    }
    _onWillDispose(model) {
        const modelId = MODEL_ID(model.uri);
        const modelData = this._models[modelId];
        const sharesUndoRedoStack = (this._undoRedoService.getUriComparisonKey(model.uri) !== model.uri.toString());
        let maintainUndoRedoStack = false;
        let heapSize = 0;
        if (sharesUndoRedoStack || (this._shouldRestoreUndoStack() && this._schemaShouldMaintainUndoRedoElements(model.uri))) {
            const elements = this._undoRedoService.getElements(model.uri);
            if (elements.past.length > 0 || elements.future.length > 0) {
                for (const element of elements.past) {
                    if (isEditStackElement(element) && element.matchesResource(model.uri)) {
                        maintainUndoRedoStack = true;
                        heapSize += element.heapSize(model.uri);
                        element.setModel(model.uri); // remove reference from text buffer instance
                    }
                }
                for (const element of elements.future) {
                    if (isEditStackElement(element) && element.matchesResource(model.uri)) {
                        maintainUndoRedoStack = true;
                        heapSize += element.heapSize(model.uri);
                        element.setModel(model.uri); // remove reference from text buffer instance
                    }
                }
            }
        }
        const maxMemory = ModelService_1.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK;
        const sha1Computer = this._getSHA1Computer();
        if (!maintainUndoRedoStack) {
            if (!sharesUndoRedoStack) {
                const initialUndoRedoSnapshot = modelData.model.getInitialUndoRedoSnapshot();
                if (initialUndoRedoSnapshot !== null) {
                    this._undoRedoService.restoreSnapshot(initialUndoRedoSnapshot);
                }
            }
        }
        else if (!sharesUndoRedoStack && (heapSize > maxMemory || !sha1Computer.canComputeSHA1(model))) {
            // the undo stack for this file would never fit in the configured memory or the file is very large, so don't bother with it.
            const initialUndoRedoSnapshot = modelData.model.getInitialUndoRedoSnapshot();
            if (initialUndoRedoSnapshot !== null) {
                this._undoRedoService.restoreSnapshot(initialUndoRedoSnapshot);
            }
        }
        else {
            this._ensureDisposedModelsHeapSize(maxMemory - heapSize);
            // We only invalidate the elements, but they remain in the undo-redo service.
            this._undoRedoService.setElementsValidFlag(model.uri, false, (element) => (isEditStackElement(element) && element.matchesResource(model.uri)));
            this._insertDisposedModel(new DisposedModelInfo(model.uri, modelData.model.getInitialUndoRedoSnapshot(), Date.now(), sharesUndoRedoStack, heapSize, sha1Computer.computeSHA1(model), model.getVersionId(), model.getAlternativeVersionId()));
        }
        delete this._models[modelId];
        modelData.dispose();
        // clean up cache
        delete this._modelCreationOptionsByLanguageAndResource[model.getLanguageId() + model.uri];
        this._onModelRemoved.fire(model);
    }
    _onDidChangeLanguage(model, e) {
        const oldLanguageId = e.oldLanguage;
        const newLanguageId = model.getLanguageId();
        const oldOptions = this.getCreationOptions(oldLanguageId, model.uri, model.isForSimpleWidget);
        const newOptions = this.getCreationOptions(newLanguageId, model.uri, model.isForSimpleWidget);
        ModelService_1._setModelOptionsForModel(model, newOptions, oldOptions);
        this._onModelModeChanged.fire({ model, oldLanguageId: oldLanguageId });
    }
    _getSHA1Computer() {
        return new DefaultModelSHA1Computer();
    }
};
ModelService = ModelService_1 = __decorate([
    __param(0, IConfigurationService),
    __param(1, ITextResourcePropertiesService),
    __param(2, IUndoRedoService),
    __param(3, IInstantiationService)
], ModelService);
class DefaultModelSHA1Computer {
    static { this.MAX_MODEL_SIZE = 10 * 1024 * 1024; } // takes 200ms to compute a sha1 on a 10MB model on a new machine
    canComputeSHA1(model) {
        return (model.getValueLength() <= DefaultModelSHA1Computer.MAX_MODEL_SIZE);
    }
    computeSHA1(model) {
        // compute the sha1
        const shaComputer = new StringSHA1();
        const snapshot = model.createSnapshot();
        let text;
        while ((text = snapshot.read())) {
            shaComputer.update(text);
        }
        return shaComputer.digest();
    }
}

export { DefaultModelSHA1Computer, ModelService };
