var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./parser/cssParser", "./services/cssCompletion", "./services/cssHover", "./services/cssNavigation", "./services/cssCodeActions", "./services/cssValidation", "./parser/scssParser", "./services/scssCompletion", "./parser/lessParser", "./services/lessCompletion", "./services/cssFolding", "./services/cssFormatter", "./languageFacts/dataManager", "./languageFacts/dataProvider", "./services/cssSelectionRange", "./services/scssNavigation", "./data/webCustomData", "./cssLanguageTypes"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDefaultCSSDataProvider = getDefaultCSSDataProvider;
    exports.newCSSDataProvider = newCSSDataProvider;
    exports.getCSSLanguageService = getCSSLanguageService;
    exports.getSCSSLanguageService = getSCSSLanguageService;
    exports.getLESSLanguageService = getLESSLanguageService;
    const cssParser_1 = require("./parser/cssParser");
    const cssCompletion_1 = require("./services/cssCompletion");
    const cssHover_1 = require("./services/cssHover");
    const cssNavigation_1 = require("./services/cssNavigation");
    const cssCodeActions_1 = require("./services/cssCodeActions");
    const cssValidation_1 = require("./services/cssValidation");
    const scssParser_1 = require("./parser/scssParser");
    const scssCompletion_1 = require("./services/scssCompletion");
    const lessParser_1 = require("./parser/lessParser");
    const lessCompletion_1 = require("./services/lessCompletion");
    const cssFolding_1 = require("./services/cssFolding");
    const cssFormatter_1 = require("./services/cssFormatter");
    const dataManager_1 = require("./languageFacts/dataManager");
    const dataProvider_1 = require("./languageFacts/dataProvider");
    const cssSelectionRange_1 = require("./services/cssSelectionRange");
    const scssNavigation_1 = require("./services/scssNavigation");
    const webCustomData_1 = require("./data/webCustomData");
    __exportStar(require("./cssLanguageTypes"), exports);
    function getDefaultCSSDataProvider() {
        return newCSSDataProvider(webCustomData_1.cssData);
    }
    function newCSSDataProvider(data) {
        return new dataProvider_1.CSSDataProvider(data);
    }
    function createFacade(parser, completion, hover, navigation, codeActions, validation, cssDataManager) {
        return {
            configure: (settings) => {
                validation.configure(settings);
                completion.configure(settings?.completion);
                hover.configure(settings?.hover);
                navigation.configure(settings?.importAliases);
            },
            setDataProviders: cssDataManager.setDataProviders.bind(cssDataManager),
            doValidation: validation.doValidation.bind(validation),
            parseStylesheet: parser.parseStylesheet.bind(parser),
            doComplete: completion.doComplete.bind(completion),
            doComplete2: completion.doComplete2.bind(completion),
            setCompletionParticipants: completion.setCompletionParticipants.bind(completion),
            doHover: hover.doHover.bind(hover),
            format: cssFormatter_1.format,
            findDefinition: navigation.findDefinition.bind(navigation),
            findReferences: navigation.findReferences.bind(navigation),
            findDocumentHighlights: navigation.findDocumentHighlights.bind(navigation),
            findDocumentLinks: navigation.findDocumentLinks.bind(navigation),
            findDocumentLinks2: navigation.findDocumentLinks2.bind(navigation),
            findDocumentSymbols: navigation.findSymbolInformations.bind(navigation),
            findDocumentSymbols2: navigation.findDocumentSymbols.bind(navigation),
            doCodeActions: codeActions.doCodeActions.bind(codeActions),
            doCodeActions2: codeActions.doCodeActions2.bind(codeActions),
            findDocumentColors: navigation.findDocumentColors.bind(navigation),
            getColorPresentations: navigation.getColorPresentations.bind(navigation),
            prepareRename: navigation.prepareRename.bind(navigation),
            doRename: navigation.doRename.bind(navigation),
            getFoldingRanges: cssFolding_1.getFoldingRanges,
            getSelectionRanges: cssSelectionRange_1.getSelectionRanges
        };
    }
    const defaultLanguageServiceOptions = {};
    function getCSSLanguageService(options = defaultLanguageServiceOptions) {
        const cssDataManager = new dataManager_1.CSSDataManager(options);
        return createFacade(new cssParser_1.Parser(), new cssCompletion_1.CSSCompletion(null, options, cssDataManager), new cssHover_1.CSSHover(options && options.clientCapabilities, cssDataManager), new cssNavigation_1.CSSNavigation(options && options.fileSystemProvider, false), new cssCodeActions_1.CSSCodeActions(cssDataManager), new cssValidation_1.CSSValidation(cssDataManager), cssDataManager);
    }
    function getSCSSLanguageService(options = defaultLanguageServiceOptions) {
        const cssDataManager = new dataManager_1.CSSDataManager(options);
        return createFacade(new scssParser_1.SCSSParser(), new scssCompletion_1.SCSSCompletion(options, cssDataManager), new cssHover_1.CSSHover(options && options.clientCapabilities, cssDataManager), new scssNavigation_1.SCSSNavigation(options && options.fileSystemProvider), new cssCodeActions_1.CSSCodeActions(cssDataManager), new cssValidation_1.CSSValidation(cssDataManager), cssDataManager);
    }
    function getLESSLanguageService(options = defaultLanguageServiceOptions) {
        const cssDataManager = new dataManager_1.CSSDataManager(options);
        return createFacade(new lessParser_1.LESSParser(), new lessCompletion_1.LESSCompletion(options, cssDataManager), new cssHover_1.CSSHover(options && options.clientCapabilities, cssDataManager), new cssNavigation_1.CSSNavigation(options && options.fileSystemProvider, true), new cssCodeActions_1.CSSCodeActions(cssDataManager), new cssValidation_1.CSSValidation(cssDataManager), cssDataManager);
    }
});
