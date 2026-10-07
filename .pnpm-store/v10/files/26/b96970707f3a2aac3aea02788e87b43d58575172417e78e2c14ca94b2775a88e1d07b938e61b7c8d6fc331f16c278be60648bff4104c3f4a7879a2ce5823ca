import { n } from '../../../../../../../base/browser/dom.js';
import { Emitter } from '../../../../../../../base/common/event.js';
import { Disposable } from '../../../../../../../base/common/lifecycle.js';
import '../../../../../../../base/common/observableInternal/index.js';
import { IAccessibilityService } from '../../../../../../../platform/accessibility/common/accessibility.js';
import { asCssVariable } from '../../../../../../../platform/theme/common/colorUtils.js';
import { observableCodeEditor } from '../../../../../../browser/observableCodeEditor.js';
import { Point } from '../../../../../../common/core/2d/point.js';
import { singleTextRemoveCommonPrefix } from '../../../model/singleTextEditHelpers.js';
import { inlineEditIndicatorPrimaryBorder } from '../theme.js';
import { rectToProps, getEditorValidOverlayRect, PathBuilder } from '../utils/utils.js';
import { constObservable } from '../../../../../../../base/common/observableInternal/observables/constObservable.js';
import { derived } from '../../../../../../../base/common/observableInternal/observables/derived.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let InlineEditsCollapsedView = class InlineEditsCollapsedView extends Disposable {
    constructor(_editor, _edit, _accessibilityService) {
        super();
        this._editor = _editor;
        this._edit = _edit;
        this._accessibilityService = _accessibilityService;
        this._onDidClick = this._register(new Emitter());
        this.onDidClick = this._onDidClick.event;
        this._iconRef = n.ref();
        this.isHovered = constObservable(false);
        this._editorObs = observableCodeEditor(this._editor);
        const firstEdit = this._edit.map(inlineEdit => inlineEdit?.edit.replacements[0] ?? null);
        const startPosition = firstEdit.map(edit => edit ? singleTextRemoveCommonPrefix(edit, this._editor.getModel()).range.getStartPosition() : null);
        const observedStartPoint = this._editorObs.observePosition(startPosition, this._store);
        const startPoint = derived(reader => {
            const point = observedStartPoint.read(reader);
            if (!point) {
                return null;
            }
            const contentLeft = this._editorObs.layoutInfoContentLeft.read(reader);
            const scrollLeft = this._editorObs.scrollLeft.read(reader);
            return new Point(contentLeft + point.x - scrollLeft, point.y);
        });
        const overlayElement = n.div({
            class: 'inline-edits-collapsed-view',
            style: {
                position: 'absolute',
                overflow: 'visible',
                top: '0px',
                left: '0px',
                display: 'block',
            },
        }, [
            [this.getCollapsedIndicator(startPoint)],
        ]).keepUpdated(this._store).element;
        this._register(this._editorObs.createOverlayWidget({
            domNode: overlayElement,
            position: constObservable(null),
            allowEditorOverflow: false,
            minContentWidthInPx: constObservable(0),
        }));
        this.isVisible = this._edit.map((inlineEdit, reader) => !!inlineEdit && startPoint.read(reader) !== null);
    }
    triggerAnimation() {
        if (this._accessibilityService.isMotionReduced()) {
            return new Animation(null, null).finished;
        }
        // PULSE ANIMATION:
        const animation = this._iconRef.element.animate([
            { offset: 0.00, transform: 'translateY(-3px)', },
            { offset: 0.20, transform: 'translateY(1px)', },
            { offset: 0.36, transform: 'translateY(-1px)', },
            { offset: 0.52, transform: 'translateY(1px)', },
            { offset: 0.68, transform: 'translateY(-1px)', },
            { offset: 0.84, transform: 'translateY(1px)', },
            { offset: 1.00, transform: 'translateY(0px)', },
        ], { duration: 2000 });
        return animation.finished;
    }
    getCollapsedIndicator(startPoint) {
        const contentLeft = this._editorObs.layoutInfoContentLeft;
        const startPointTranslated = startPoint.map((p, reader) => p ? p.deltaX(-contentLeft.read(reader)) : null);
        const iconPath = this.createIconPath(startPointTranslated);
        return n.svg({
            class: 'collapsedView',
            ref: this._iconRef,
            style: {
                position: 'absolute',
                ...rectToProps((r) => getEditorValidOverlayRect(this._editorObs).read(r)),
                overflow: 'hidden',
                pointerEvents: 'none',
            }
        }, [
            n.svgElem('path', {
                class: 'collapsedViewPath',
                d: iconPath,
                fill: asCssVariable(inlineEditIndicatorPrimaryBorder),
            }),
        ]);
    }
    createIconPath(indicatorPoint) {
        const width = 6;
        const triangleHeight = 3;
        const baseHeight = 1;
        return indicatorPoint.map(point => {
            if (!point) {
                return new PathBuilder().build();
            }
            const baseTopLeft = point.deltaX(-width / 2).deltaY(-baseHeight);
            const baseTopRight = baseTopLeft.deltaX(width);
            const baseBottomLeft = baseTopLeft.deltaY(baseHeight);
            const baseBottomRight = baseTopRight.deltaY(baseHeight);
            const triangleBottomCenter = baseBottomLeft.deltaX(width / 2).deltaY(triangleHeight);
            return new PathBuilder()
                .moveTo(baseTopLeft)
                .lineTo(baseTopRight)
                .lineTo(baseBottomRight)
                .lineTo(triangleBottomCenter)
                .lineTo(baseBottomLeft)
                .lineTo(baseTopLeft)
                .build();
        });
    }
};
InlineEditsCollapsedView = __decorate([
    __param(2, IAccessibilityService)
], InlineEditsCollapsedView);

export { InlineEditsCollapsedView };
