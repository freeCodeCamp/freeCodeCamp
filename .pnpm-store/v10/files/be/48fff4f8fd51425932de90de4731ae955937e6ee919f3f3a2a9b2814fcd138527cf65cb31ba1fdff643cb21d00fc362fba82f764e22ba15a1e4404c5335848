import { onUnexpectedError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { defaultGenerator } from '../../../../base/common/idGenerator.js';
import { dispose } from '../../../../base/common/lifecycle.js';
import { ResourceMap } from '../../../../base/common/map.js';
import { extUri, basename } from '../../../../base/common/resources.js';
import { commonPrefixLength } from '../../../../base/common/strings.js';
import { Range } from '../../../common/core/range.js';
import { localize } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class OneReference {
    constructor(isProviderFirst, parent, link, _rangeCallback) {
        this.isProviderFirst = isProviderFirst;
        this.parent = parent;
        this.link = link;
        this._rangeCallback = _rangeCallback;
        this.id = defaultGenerator.nextId();
    }
    get uri() {
        return this.link.uri;
    }
    get range() {
        return this._range ?? this.link.targetSelectionRange ?? this.link.range;
    }
    set range(value) {
        this._range = value;
        this._rangeCallback(this);
    }
    get ariaMessage() {
        const preview = this.parent.getPreview(this)?.preview(this.range);
        if (!preview) {
            return localize(1087, "in {0} on line {1} at column {2}", basename(this.uri), this.range.startLineNumber, this.range.startColumn);
        }
        else {
            return localize(1088, "{0} in {1} on line {2} at column {3}", preview.value, basename(this.uri), this.range.startLineNumber, this.range.startColumn);
        }
    }
}
class FilePreview {
    constructor(_modelReference) {
        this._modelReference = _modelReference;
    }
    dispose() {
        this._modelReference.dispose();
    }
    preview(range, n = 8) {
        const model = this._modelReference.object.textEditorModel;
        if (!model) {
            return undefined;
        }
        const { startLineNumber, startColumn, endLineNumber, endColumn } = range;
        const word = model.getWordUntilPosition({ lineNumber: startLineNumber, column: startColumn - n });
        const beforeRange = new Range(startLineNumber, word.startColumn, startLineNumber, startColumn);
        const afterRange = new Range(endLineNumber, endColumn, endLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        const before = model.getValueInRange(beforeRange).replace(/^\s+/, '');
        const inside = model.getValueInRange(range);
        const after = model.getValueInRange(afterRange).replace(/\s+$/, '');
        return {
            value: before + inside + after,
            highlight: { start: before.length, end: before.length + inside.length }
        };
    }
}
class FileReferences {
    constructor(parent, uri) {
        this.parent = parent;
        this.uri = uri;
        this.children = [];
        this._previews = new ResourceMap();
    }
    dispose() {
        dispose(this._previews.values());
        this._previews.clear();
    }
    getPreview(child) {
        return this._previews.get(child.uri);
    }
    get ariaMessage() {
        const len = this.children.length;
        if (len === 1) {
            return localize(1089, "1 symbol in {0}, full path {1}", basename(this.uri), this.uri.fsPath);
        }
        else {
            return localize(1090, "{0} symbols in {1}, full path {2}", len, basename(this.uri), this.uri.fsPath);
        }
    }
    async resolve(textModelResolverService) {
        if (this._previews.size !== 0) {
            return this;
        }
        for (const child of this.children) {
            if (this._previews.has(child.uri)) {
                continue;
            }
            try {
                const ref = await textModelResolverService.createModelReference(child.uri);
                this._previews.set(child.uri, new FilePreview(ref));
            }
            catch (err) {
                onUnexpectedError(err);
            }
        }
        return this;
    }
}
class ReferencesModel {
    constructor(links, title) {
        this.groups = [];
        this.references = [];
        this._onDidChangeReferenceRange = new Emitter();
        this.onDidChangeReferenceRange = this._onDidChangeReferenceRange.event;
        this._links = links;
        this._title = title;
        // grouping and sorting
        const [providersFirst] = links;
        links.sort(ReferencesModel._compareReferences);
        let current;
        for (const link of links) {
            if (!current || !extUri.isEqual(current.uri, link.uri, true)) {
                // new group
                current = new FileReferences(this, link.uri);
                this.groups.push(current);
            }
            // append, check for equality first!
            if (current.children.length === 0 || ReferencesModel._compareReferences(link, current.children[current.children.length - 1]) !== 0) {
                const oneRef = new OneReference(providersFirst === link, current, link, ref => this._onDidChangeReferenceRange.fire(ref));
                this.references.push(oneRef);
                current.children.push(oneRef);
            }
        }
    }
    dispose() {
        dispose(this.groups);
        this._onDidChangeReferenceRange.dispose();
        this.groups.length = 0;
    }
    clone() {
        return new ReferencesModel(this._links, this._title);
    }
    get title() {
        return this._title;
    }
    get isEmpty() {
        return this.groups.length === 0;
    }
    get ariaMessage() {
        if (this.isEmpty) {
            return localize(1091, "No results found");
        }
        else if (this.references.length === 1) {
            return localize(1092, "Found 1 symbol in {0}", this.references[0].uri.fsPath);
        }
        else if (this.groups.length === 1) {
            return localize(1093, "Found {0} symbols in {1}", this.references.length, this.groups[0].uri.fsPath);
        }
        else {
            return localize(1094, "Found {0} symbols in {1} files", this.references.length, this.groups.length);
        }
    }
    nextOrPreviousReference(reference, next) {
        const { parent } = reference;
        let idx = parent.children.indexOf(reference);
        const childCount = parent.children.length;
        const groupCount = parent.parent.groups.length;
        if (groupCount === 1 || next && idx + 1 < childCount || !next && idx > 0) {
            // cycling within one file
            if (next) {
                idx = (idx + 1) % childCount;
            }
            else {
                idx = (idx + childCount - 1) % childCount;
            }
            return parent.children[idx];
        }
        idx = parent.parent.groups.indexOf(parent);
        if (next) {
            idx = (idx + 1) % groupCount;
            return parent.parent.groups[idx].children[0];
        }
        else {
            idx = (idx + groupCount - 1) % groupCount;
            return parent.parent.groups[idx].children[parent.parent.groups[idx].children.length - 1];
        }
    }
    nearestReference(resource, position) {
        const nearest = this.references.map((ref, idx) => {
            return {
                idx,
                prefixLen: commonPrefixLength(ref.uri.toString(), resource.toString()),
                offsetDist: Math.abs(ref.range.startLineNumber - position.lineNumber) * 100 + Math.abs(ref.range.startColumn - position.column)
            };
        }).sort((a, b) => {
            if (a.prefixLen > b.prefixLen) {
                return -1;
            }
            else if (a.prefixLen < b.prefixLen) {
                return 1;
            }
            else if (a.offsetDist < b.offsetDist) {
                return -1;
            }
            else if (a.offsetDist > b.offsetDist) {
                return 1;
            }
            else {
                return 0;
            }
        })[0];
        if (nearest) {
            return this.references[nearest.idx];
        }
        return undefined;
    }
    referenceAt(resource, position) {
        for (const ref of this.references) {
            if (ref.uri.toString() === resource.toString()) {
                if (Range.containsPosition(ref.range, position)) {
                    return ref;
                }
            }
        }
        return undefined;
    }
    firstReference() {
        for (const ref of this.references) {
            if (ref.isProviderFirst) {
                return ref;
            }
        }
        return this.references[0];
    }
    static _compareReferences(a, b) {
        return extUri.compare(a.uri, b.uri) || Range.compareRangesUsingStarts(a.range, b.range);
    }
}

export { FilePreview, FileReferences, OneReference, ReferencesModel };
