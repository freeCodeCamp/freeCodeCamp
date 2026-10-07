import { append, $ } from '../../../../../base/browser/dom.js';
import { CountBadge } from '../../../../../base/browser/ui/countBadge/countBadge.js';
import { HighlightedLabel } from '../../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import { IconLabel } from '../../../../../base/browser/ui/iconLabel/iconLabel.js';
import { createMatches, FuzzyScore } from '../../../../../base/common/filters.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { basename, dirname } from '../../../../../base/common/resources.js';
import { ITextModelService } from '../../../../common/services/resolverService.js';
import { localize } from '../../../../../nls.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../../platform/keybinding/common/keybinding.js';
import { ILabelService } from '../../../../../platform/label/common/label.js';
import { defaultCountBadgeStyles } from '../../../../../platform/theme/browser/defaultStyles.js';
import { ReferencesModel, FileReferences, OneReference } from '../referencesModel.js';

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
var FileReferencesRenderer_1;
let DataSource = class DataSource {
    constructor(_resolverService) {
        this._resolverService = _resolverService;
    }
    hasChildren(element) {
        if (element instanceof ReferencesModel) {
            return true;
        }
        if (element instanceof FileReferences) {
            return true;
        }
        return false;
    }
    getChildren(element) {
        if (element instanceof ReferencesModel) {
            return element.groups;
        }
        if (element instanceof FileReferences) {
            return element.resolve(this._resolverService).then(val => {
                // if (element.failure) {
                // 	// refresh the element on failure so that
                // 	// we can update its rendering
                // 	return tree.refresh(element).then(() => val.children);
                // }
                return val.children;
            });
        }
        throw new Error('bad tree');
    }
};
DataSource = __decorate([
    __param(0, ITextModelService)
], DataSource);
//#endregion
class Delegate {
    getHeight() {
        return 23;
    }
    getTemplateId(element) {
        if (element instanceof FileReferences) {
            return FileReferencesRenderer.id;
        }
        else {
            return OneReferenceRenderer.id;
        }
    }
}
let StringRepresentationProvider = class StringRepresentationProvider {
    constructor(_keybindingService) {
        this._keybindingService = _keybindingService;
    }
    getKeyboardNavigationLabel(element) {
        if (element instanceof OneReference) {
            const parts = element.parent.getPreview(element)?.preview(element.range);
            if (parts) {
                return parts.value;
            }
        }
        // FileReferences or unresolved OneReference
        return basename(element.uri);
    }
};
StringRepresentationProvider = __decorate([
    __param(0, IKeybindingService)
], StringRepresentationProvider);
class IdentityProvider {
    getId(element) {
        return element instanceof OneReference ? element.id : element.uri;
    }
}
//#region render: File
let FileReferencesTemplate = class FileReferencesTemplate extends Disposable {
    constructor(container, _labelService) {
        super();
        this._labelService = _labelService;
        const parent = document.createElement('div');
        parent.classList.add('reference-file');
        this.file = this._register(new IconLabel(parent, { supportHighlights: true }));
        this.badge = this._register(new CountBadge(append(parent, $('.count')), {}, defaultCountBadgeStyles));
        container.appendChild(parent);
    }
    set(element, matches) {
        const parent = dirname(element.uri);
        this.file.setLabel(this._labelService.getUriBasenameLabel(element.uri), this._labelService.getUriLabel(parent, { relative: true }), { title: this._labelService.getUriLabel(element.uri), matches });
        const len = element.children.length;
        this.badge.setCount(len);
        if (len > 1) {
            this.badge.setTitleFormat(localize(1081, "{0} references", len));
        }
        else {
            this.badge.setTitleFormat(localize(1082, "{0} reference", len));
        }
    }
};
FileReferencesTemplate = __decorate([
    __param(1, ILabelService)
], FileReferencesTemplate);
let FileReferencesRenderer = class FileReferencesRenderer {
    static { FileReferencesRenderer_1 = this; }
    static { this.id = 'FileReferencesRenderer'; }
    constructor(_instantiationService) {
        this._instantiationService = _instantiationService;
        this.templateId = FileReferencesRenderer_1.id;
    }
    renderTemplate(container) {
        return this._instantiationService.createInstance(FileReferencesTemplate, container);
    }
    renderElement(node, index, template) {
        template.set(node.element, createMatches(node.filterData));
    }
    disposeTemplate(templateData) {
        templateData.dispose();
    }
};
FileReferencesRenderer = FileReferencesRenderer_1 = __decorate([
    __param(0, IInstantiationService)
], FileReferencesRenderer);
//#endregion
//#region render: Reference
class OneReferenceTemplate extends Disposable {
    constructor(container) {
        super();
        this.label = this._register(new HighlightedLabel(container));
    }
    set(element, score) {
        const preview = element.parent.getPreview(element)?.preview(element.range);
        if (!preview || !preview.value) {
            // this means we FAILED to resolve the document or the value is the empty string
            this.label.set(`${basename(element.uri)}:${element.range.startLineNumber + 1}:${element.range.startColumn + 1}`);
        }
        else {
            // render search match as highlight unless
            // we have score, then render the score
            const { value, highlight } = preview;
            if (score && !FuzzyScore.isDefault(score)) {
                this.label.element.classList.toggle('referenceMatch', false);
                this.label.set(value, createMatches(score));
            }
            else {
                this.label.element.classList.toggle('referenceMatch', true);
                this.label.set(value, [highlight]);
            }
        }
    }
}
class OneReferenceRenderer {
    constructor() {
        this.templateId = OneReferenceRenderer.id;
    }
    static { this.id = 'OneReferenceRenderer'; }
    renderTemplate(container) {
        return new OneReferenceTemplate(container);
    }
    renderElement(node, index, templateData) {
        templateData.set(node.element, node.filterData);
    }
    disposeTemplate(templateData) {
        templateData.dispose();
    }
}
//#endregion
class AccessibilityProvider {
    getWidgetAriaLabel() {
        return localize(1083, "References");
    }
    getAriaLabel(element) {
        return element.ariaMessage;
    }
}

export { AccessibilityProvider, DataSource, Delegate, FileReferencesRenderer, IdentityProvider, OneReferenceRenderer, StringRepresentationProvider };
