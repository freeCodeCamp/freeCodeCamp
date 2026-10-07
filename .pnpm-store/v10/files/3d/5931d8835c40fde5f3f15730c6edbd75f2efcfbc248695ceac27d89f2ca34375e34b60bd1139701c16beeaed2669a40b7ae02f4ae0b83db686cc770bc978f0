import { Emitter } from '../../../../../base/common/event.js';
import { toDisposable } from '../../../../../base/common/lifecycle.js';
import { LineTokens } from '../../../tokens/lineTokens.js';
import { AbstractSyntaxTokenBackend } from '../abstractSyntaxTokenBackend.js';
import '../../../../../base/common/observableInternal/index.js';
import { TreeSitterTree } from './treeSitterTree.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { TreeSitterTokenizationImpl } from './treeSitterTokenizationImpl.js';
import { ITreeSitterLibraryService } from '../../../services/treeSitter/treeSitterLibraryService.js';
import { ObservablePromise } from '../../../../../base/common/observableInternal/utils/promise.js';
import { derived } from '../../../../../base/common/observableInternal/observables/derived.js';
import { autorun } from '../../../../../base/common/observableInternal/reactions/autorun.js';

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
let TreeSitterSyntaxTokenBackend = class TreeSitterSyntaxTokenBackend extends AbstractSyntaxTokenBackend {
    constructor(_languageIdObs, languageIdCodec, textModel, visibleLineRanges, _treeSitterLibraryService, _instantiationService) {
        super(languageIdCodec, textModel);
        this._languageIdObs = _languageIdObs;
        this._treeSitterLibraryService = _treeSitterLibraryService;
        this._instantiationService = _instantiationService;
        this._backgroundTokenizationState = 1 /* BackgroundTokenizationState.InProgress */;
        this._onDidChangeBackgroundTokenizationState = this._register(new Emitter());
        this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event;
        const parserClassPromise = new ObservablePromise(this._treeSitterLibraryService.getParserClass());
        const parserClassObs = derived(this, reader => {
            const parser = parserClassPromise.promiseResult?.read(reader)?.getDataOrThrow();
            return parser;
        });
        this._tree = derived(this, reader => {
            const parserClass = parserClassObs.read(reader);
            if (!parserClass) {
                return undefined;
            }
            const currentLanguage = this._languageIdObs.read(reader);
            const treeSitterLang = this._treeSitterLibraryService.getLanguage(currentLanguage, false, reader);
            if (!treeSitterLang) {
                return undefined;
            }
            const parser = new parserClass();
            reader.store.add(toDisposable(() => {
                parser.delete();
            }));
            parser.setLanguage(treeSitterLang);
            const queries = this._treeSitterLibraryService.getInjectionQueries(currentLanguage, reader);
            if (queries === undefined) {
                return undefined;
            }
            return reader.store.add(this._instantiationService.createInstance(TreeSitterTree, currentLanguage, undefined, parser, parserClass, /*queries, */ this._textModel));
        });
        this._tokenizationImpl = derived(this, reader => {
            const treeModel = this._tree.read(reader);
            if (!treeModel) {
                return undefined;
            }
            const queries = this._treeSitterLibraryService.getHighlightingQueries(treeModel.languageId, reader);
            if (!queries) {
                return undefined;
            }
            return reader.store.add(this._instantiationService.createInstance(TreeSitterTokenizationImpl, treeModel, queries, this._languageIdCodec, visibleLineRanges));
        });
        this._register(autorun(reader => {
            const tokModel = this._tokenizationImpl.read(reader);
            if (!tokModel) {
                return;
            }
            reader.store.add(tokModel.onDidChangeTokens((e) => {
                this._onDidChangeTokens.fire(e.changes);
            }));
            reader.store.add(tokModel.onDidChangeBackgroundTokenization(e => {
                this._backgroundTokenizationState = 2 /* BackgroundTokenizationState.Completed */;
                this._onDidChangeBackgroundTokenizationState.fire();
            }));
        }));
    }
    getLineTokens(lineNumber) {
        const model = this._tokenizationImpl.get();
        if (!model) {
            const content = this._textModel.getLineContent(lineNumber);
            return LineTokens.createEmpty(content, this._languageIdCodec);
        }
        return model.getLineTokens(lineNumber);
    }
    todo_resetTokenization(fireTokenChangeEvent = true) {
        if (fireTokenChangeEvent) {
            this._onDidChangeTokens.fire({
                semanticTokensApplied: false,
                ranges: [
                    {
                        fromLineNumber: 1,
                        toLineNumber: this._textModel.getLineCount(),
                    },
                ],
            });
        }
    }
    handleDidChangeAttached() {
        // TODO @alexr00 implement for background tokenization
    }
    handleDidChangeContent(e) {
        if (e.isFlush) {
            // Don't fire the event, as the view might not have got the text change event yet
            this.todo_resetTokenization(false);
        }
        else {
            const model = this._tokenizationImpl.get();
            model?.handleContentChanged(e);
        }
        const treeModel = this._tree.get();
        treeModel?.handleContentChange(e);
    }
    forceTokenization(lineNumber) {
        const model = this._tokenizationImpl.get();
        if (!model) {
            return;
        }
        if (!model.hasAccurateTokensForLine(lineNumber)) {
            model.tokenizeEncoded(lineNumber);
        }
    }
    hasAccurateTokensForLine(lineNumber) {
        const model = this._tokenizationImpl.get();
        if (!model) {
            return false;
        }
        return model.hasAccurateTokensForLine(lineNumber);
    }
    isCheapToTokenize(lineNumber) {
        // TODO @alexr00 determine what makes it cheap to tokenize?
        return true;
    }
    getTokenTypeIfInsertingCharacter(lineNumber, column, character) {
        // TODO @alexr00 implement once we have custom parsing and don't just feed in the whole text model value
        return 0 /* StandardTokenType.Other */;
    }
    tokenizeLinesAt(lineNumber, lines) {
        const model = this._tokenizationImpl.get();
        if (!model) {
            return null;
        }
        return model.tokenizeLinesAt(lineNumber, lines);
    }
    get hasTokens() {
        const model = this._tokenizationImpl.get();
        if (!model) {
            return false;
        }
        return model.hasTokens();
    }
};
TreeSitterSyntaxTokenBackend = __decorate([
    __param(4, ITreeSitterLibraryService),
    __param(5, IInstantiationService)
], TreeSitterSyntaxTokenBackend);

export { TreeSitterSyntaxTokenBackend };
