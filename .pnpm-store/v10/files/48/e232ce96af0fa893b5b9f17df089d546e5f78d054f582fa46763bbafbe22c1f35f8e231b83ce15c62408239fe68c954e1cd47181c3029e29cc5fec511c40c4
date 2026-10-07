import { IMarkerService, MarkerSeverity } from '../../../platform/markers/common/markers.js';
import { Disposable, toDisposable } from '../../../base/common/lifecycle.js';
import { OverviewRulerLane } from '../model.js';
import { themeColorFromId } from '../../../platform/theme/common/themeService.js';
import { overviewRulerError, overviewRulerWarning, overviewRulerInfo } from '../core/editorColorRegistry.js';
import { IModelService } from './model.js';
import { Range } from '../core/range.js';
import { Schemas } from '../../../base/common/network.js';
import { Emitter } from '../../../base/common/event.js';
import '../../../platform/theme/common/colorUtils.js';
import '../../../platform/theme/common/colors/baseColors.js';
import '../../../platform/theme/common/colors/chartsColors.js';
import '../../../platform/theme/common/colors/editorColors.js';
import '../../../platform/theme/common/colors/inputColors.js';
import '../../../platform/theme/common/colors/listColors.js';
import '../../../platform/theme/common/colors/menuColors.js';
import { minimapError, minimapWarning, minimapInfo } from '../../../platform/theme/common/colors/minimapColors.js';
import '../../../platform/theme/common/colors/miscColors.js';
import '../../../platform/theme/common/colors/quickpickColors.js';
import '../../../platform/theme/common/colors/searchColors.js';
import { ResourceMap, BidirectionalMap } from '../../../base/common/map.js';
import { diffSets } from '../../../base/common/collections.js';
import { Iterable } from '../../../base/common/iterator.js';

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
let MarkerDecorationsService = class MarkerDecorationsService extends Disposable {
    constructor(modelService, _markerService) {
        super();
        this._markerService = _markerService;
        this._onDidChangeMarker = this._register(new Emitter());
        this._suppressedRanges = new ResourceMap();
        this._markerDecorations = new ResourceMap();
        modelService.getModels().forEach(model => this._onModelAdded(model));
        this._register(modelService.onModelAdded(this._onModelAdded, this));
        this._register(modelService.onModelRemoved(this._onModelRemoved, this));
        this._register(this._markerService.onMarkerChanged(this._handleMarkerChange, this));
    }
    dispose() {
        super.dispose();
        this._markerDecorations.forEach(value => value.dispose());
        this._markerDecorations.clear();
    }
    getMarker(uri, decoration) {
        const markerDecorations = this._markerDecorations.get(uri);
        return markerDecorations ? (markerDecorations.getMarker(decoration) || null) : null;
    }
    _handleMarkerChange(changedResources) {
        changedResources.forEach((resource) => {
            const markerDecorations = this._markerDecorations.get(resource);
            if (markerDecorations) {
                this._updateDecorations(markerDecorations);
            }
        });
    }
    _onModelAdded(model) {
        const markerDecorations = new MarkerDecorations(model);
        this._markerDecorations.set(model.uri, markerDecorations);
        this._updateDecorations(markerDecorations);
    }
    _onModelRemoved(model) {
        const markerDecorations = this._markerDecorations.get(model.uri);
        if (markerDecorations) {
            markerDecorations.dispose();
            this._markerDecorations.delete(model.uri);
        }
        // clean up markers for internal, transient models
        if (model.uri.scheme === Schemas.inMemory
            || model.uri.scheme === Schemas.internal
            || model.uri.scheme === Schemas.vscode) {
            this._markerService?.read({ resource: model.uri }).map(marker => marker.owner).forEach(owner => this._markerService.remove(owner, [model.uri]));
        }
    }
    _updateDecorations(markerDecorations) {
        // Limit to the first 500 errors/warnings
        let markers = this._markerService.read({ resource: markerDecorations.model.uri, take: 500 });
        // filter markers from suppressed ranges
        const suppressedRanges = this._suppressedRanges.get(markerDecorations.model.uri);
        if (suppressedRanges) {
            markers = markers.filter(marker => {
                return !Iterable.some(suppressedRanges, candidate => Range.areIntersectingOrTouching(candidate, marker));
            });
        }
        if (markerDecorations.update(markers)) {
            this._onDidChangeMarker.fire(markerDecorations.model);
        }
    }
};
MarkerDecorationsService = __decorate([
    __param(0, IModelService),
    __param(1, IMarkerService)
], MarkerDecorationsService);
class MarkerDecorations extends Disposable {
    constructor(model) {
        super();
        this.model = model;
        this._map = new BidirectionalMap();
        this._register(toDisposable(() => {
            this.model.deltaDecorations([...this._map.values()], []);
            this._map.clear();
        }));
    }
    update(markers) {
        // We use the fact that marker instances are not recreated when different owners
        // update. So we can compare references to find out what changed since the last update.
        const { added, removed } = diffSets(new Set(this._map.keys()), new Set(markers));
        if (added.length === 0 && removed.length === 0) {
            return false;
        }
        const oldIds = removed.map(marker => this._map.get(marker));
        const newDecorations = added.map(marker => {
            return {
                range: this._createDecorationRange(this.model, marker),
                options: this._createDecorationOption(marker)
            };
        });
        const ids = this.model.deltaDecorations(oldIds, newDecorations);
        for (const removedMarker of removed) {
            this._map.delete(removedMarker);
        }
        for (let index = 0; index < ids.length; index++) {
            this._map.set(added[index], ids[index]);
        }
        return true;
    }
    getMarker(decoration) {
        return this._map.getKey(decoration.id);
    }
    _createDecorationRange(model, rawMarker) {
        let ret = Range.lift(rawMarker);
        if (rawMarker.severity === MarkerSeverity.Hint && !this._hasMarkerTag(rawMarker, 1 /* MarkerTag.Unnecessary */) && !this._hasMarkerTag(rawMarker, 2 /* MarkerTag.Deprecated */)) {
            // * never render hints on multiple lines
            // * make enough space for three dots
            ret = ret.setEndPosition(ret.startLineNumber, ret.startColumn + 2);
        }
        ret = model.validateRange(ret);
        if (ret.isEmpty()) {
            const maxColumn = model.getLineLastNonWhitespaceColumn(ret.startLineNumber) ||
                model.getLineMaxColumn(ret.startLineNumber);
            if (maxColumn === 1 || ret.endColumn >= maxColumn) {
                // empty line or behind eol
                // keep the range as is, it will be rendered 1ch wide
                return ret;
            }
            const word = model.getWordAtPosition(ret.getStartPosition());
            if (word) {
                ret = new Range(ret.startLineNumber, word.startColumn, ret.endLineNumber, word.endColumn);
            }
        }
        else if (rawMarker.endColumn === Number.MAX_VALUE && rawMarker.startColumn === 1 && ret.startLineNumber === ret.endLineNumber) {
            const minColumn = model.getLineFirstNonWhitespaceColumn(rawMarker.startLineNumber);
            if (minColumn < ret.endColumn) {
                ret = new Range(ret.startLineNumber, minColumn, ret.endLineNumber, ret.endColumn);
                rawMarker.startColumn = minColumn;
            }
        }
        return ret;
    }
    _createDecorationOption(marker) {
        let className;
        let color = undefined;
        let zIndex;
        let inlineClassName = undefined;
        let minimap;
        switch (marker.severity) {
            case MarkerSeverity.Hint:
                if (this._hasMarkerTag(marker, 2 /* MarkerTag.Deprecated */)) {
                    className = undefined;
                }
                else if (this._hasMarkerTag(marker, 1 /* MarkerTag.Unnecessary */)) {
                    className = "squiggly-unnecessary" /* ClassName.EditorUnnecessaryDecoration */;
                }
                else {
                    className = "squiggly-hint" /* ClassName.EditorHintDecoration */;
                }
                zIndex = 0;
                break;
            case MarkerSeverity.Info:
                className = "squiggly-info" /* ClassName.EditorInfoDecoration */;
                color = themeColorFromId(overviewRulerInfo);
                zIndex = 10;
                minimap = {
                    color: themeColorFromId(minimapInfo),
                    position: 1 /* MinimapPosition.Inline */
                };
                break;
            case MarkerSeverity.Warning:
                className = "squiggly-warning" /* ClassName.EditorWarningDecoration */;
                color = themeColorFromId(overviewRulerWarning);
                zIndex = 20;
                minimap = {
                    color: themeColorFromId(minimapWarning),
                    position: 1 /* MinimapPosition.Inline */
                };
                break;
            case MarkerSeverity.Error:
            default:
                className = "squiggly-error" /* ClassName.EditorErrorDecoration */;
                color = themeColorFromId(overviewRulerError);
                zIndex = 30;
                minimap = {
                    color: themeColorFromId(minimapError),
                    position: 1 /* MinimapPosition.Inline */
                };
                break;
        }
        if (marker.tags) {
            if (marker.tags.indexOf(1 /* MarkerTag.Unnecessary */) !== -1) {
                inlineClassName = "squiggly-inline-unnecessary" /* ClassName.EditorUnnecessaryInlineDecoration */;
            }
            if (marker.tags.indexOf(2 /* MarkerTag.Deprecated */) !== -1) {
                inlineClassName = "squiggly-inline-deprecated" /* ClassName.EditorDeprecatedInlineDecoration */;
            }
        }
        return {
            description: 'marker-decoration',
            stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
            className,
            showIfCollapsed: true,
            overviewRuler: {
                color,
                position: OverviewRulerLane.Right
            },
            minimap,
            zIndex,
            inlineClassName,
        };
    }
    _hasMarkerTag(marker, tag) {
        if (marker.tags) {
            return marker.tags.indexOf(tag) >= 0;
        }
        return false;
    }
}

export { MarkerDecorationsService };
