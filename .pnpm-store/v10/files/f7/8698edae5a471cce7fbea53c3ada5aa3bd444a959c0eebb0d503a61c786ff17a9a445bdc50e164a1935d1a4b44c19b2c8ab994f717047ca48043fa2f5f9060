import { $, addStandardDisposableListener, append, clearNode, show, hide } from '../../../../base/browser/dom.js';
import { ActionBar } from '../../../../base/browser/ui/actionbar/actionbar.js';
import { Action } from '../../../../base/common/actions.js';
import { Codicon } from '../../../../base/common/codicons.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import { Color } from '../../../../base/common/color.js';
import { Emitter } from '../../../../base/common/event.js';
import { mixin } from '../../../../base/common/objects.js';
import './media/peekViewWidget.css';
import { registerEditorContribution } from '../../../browser/editorExtensions.js';
import { EmbeddedCodeEditorWidget } from '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import { ZoneWidget } from '../../zoneWidget/browser/zoneWidget.js';
import { localize } from '../../../../nls.js';
import { createActionViewItem } from '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { RawContextKey, IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { createDecorator, IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { registerColor } from '../../../../platform/theme/common/colorUtils.js';
import { contrastBorder, activeContrastBorder } from '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { editorForeground, editorInfoForeground } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { observableCodeEditor } from '../../../browser/observableCodeEditor.js';

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
const IPeekViewService = createDecorator('IPeekViewService');
registerSingleton(IPeekViewService, class {
    constructor() {
        this._widgets = new Map();
    }
    addExclusiveWidget(editor, widget) {
        const existing = this._widgets.get(editor);
        if (existing) {
            existing.listener.dispose();
            existing.widget.dispose();
        }
        const remove = () => {
            const data = this._widgets.get(editor);
            if (data && data.widget === widget) {
                data.listener.dispose();
                this._widgets.delete(editor);
            }
        };
        this._widgets.set(editor, { widget, listener: widget.onDidClose(remove) });
    }
}, 1 /* InstantiationType.Delayed */);
var PeekContext;
(function (PeekContext) {
    PeekContext.inPeekEditor = new RawContextKey('inReferenceSearchEditor', true, localize(1316, "Whether the current code editor is embedded inside peek"));
    PeekContext.notInPeekEditor = PeekContext.inPeekEditor.toNegated();
})(PeekContext || (PeekContext = {}));
let PeekContextController = class PeekContextController {
    static { this.ID = 'editor.contrib.referenceController'; }
    constructor(editor, contextKeyService) {
        if (editor instanceof EmbeddedCodeEditorWidget) {
            PeekContext.inPeekEditor.bindTo(contextKeyService);
        }
    }
    dispose() { }
};
PeekContextController = __decorate([
    __param(1, IContextKeyService)
], PeekContextController);
registerEditorContribution(PeekContextController.ID, PeekContextController, 0 /* EditorContributionInstantiation.Eager */); // eager because it needs to define a context key
const defaultOptions = {
    headerBackgroundColor: Color.white,
    primaryHeadingColor: Color.fromHex('#333333'),
    secondaryHeadingColor: Color.fromHex('#6c6c6cb3')
};
let PeekViewWidget = class PeekViewWidget extends ZoneWidget {
    constructor(editor, options, instantiationService) {
        super(editor, options);
        this.instantiationService = instantiationService;
        this._onDidClose = new Emitter();
        this.onDidClose = this._onDidClose.event;
        mixin(this.options, defaultOptions, false);
        const e = observableCodeEditor(this.editor);
        e.openedPeekWidgets.set(e.openedPeekWidgets.get() + 1, undefined);
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = true; // prevent consumers who dispose on onDidClose from looping
            super.dispose();
            this._onDidClose.fire(this);
            const e = observableCodeEditor(this.editor);
            e.openedPeekWidgets.set(e.openedPeekWidgets.get() - 1, undefined);
        }
    }
    style(styles) {
        const options = this.options;
        if (styles.headerBackgroundColor) {
            options.headerBackgroundColor = styles.headerBackgroundColor;
        }
        if (styles.primaryHeadingColor) {
            options.primaryHeadingColor = styles.primaryHeadingColor;
        }
        if (styles.secondaryHeadingColor) {
            options.secondaryHeadingColor = styles.secondaryHeadingColor;
        }
        super.style(styles);
    }
    _applyStyles() {
        super._applyStyles();
        const options = this.options;
        if (this._headElement && options.headerBackgroundColor) {
            this._headElement.style.backgroundColor = options.headerBackgroundColor.toString();
        }
        if (this._primaryHeading && options.primaryHeadingColor) {
            this._primaryHeading.style.color = options.primaryHeadingColor.toString();
        }
        if (this._secondaryHeading && options.secondaryHeadingColor) {
            this._secondaryHeading.style.color = options.secondaryHeadingColor.toString();
        }
        if (this._bodyElement && options.frameColor) {
            this._bodyElement.style.borderColor = options.frameColor.toString();
        }
    }
    _fillContainer(container) {
        this.setCssClass('peekview-widget');
        this._headElement = $('.head');
        this._bodyElement = $('.body');
        this._fillHead(this._headElement);
        this._fillBody(this._bodyElement);
        container.appendChild(this._headElement);
        container.appendChild(this._bodyElement);
    }
    _fillHead(container, noCloseAction) {
        this._titleElement = $('.peekview-title');
        if (this.options.supportOnTitleClick) {
            this._titleElement.classList.add('clickable');
            addStandardDisposableListener(this._titleElement, 'click', event => this._onTitleClick(event));
        }
        append(this._headElement, this._titleElement);
        this._fillTitleIcon(this._titleElement);
        this._primaryHeading = $('span.filename');
        this._secondaryHeading = $('span.dirname');
        this._metaHeading = $('span.meta');
        append(this._titleElement, this._primaryHeading, this._secondaryHeading, this._metaHeading);
        const actionsContainer = $('.peekview-actions');
        append(this._headElement, actionsContainer);
        const actionBarOptions = this._getActionBarOptions();
        this._actionbarWidget = new ActionBar(actionsContainer, actionBarOptions);
        this._disposables.add(this._actionbarWidget);
        if (!noCloseAction) {
            this._actionbarWidget.push(this._disposables.add(new Action('peekview.close', localize(1317, "Close"), ThemeIcon.asClassName(Codicon.close), true, () => {
                this.dispose();
                return Promise.resolve();
            })), { label: false, icon: true });
        }
    }
    _fillTitleIcon(container) {
    }
    _getActionBarOptions() {
        return {
            actionViewItemProvider: createActionViewItem.bind(undefined, this.instantiationService),
            orientation: 0 /* ActionsOrientation.HORIZONTAL */
        };
    }
    _onTitleClick(event) {
        // implement me if supportOnTitleClick option is set
    }
    setTitle(primaryHeading, secondaryHeading) {
        if (this._primaryHeading && this._secondaryHeading) {
            this._primaryHeading.innerText = primaryHeading;
            this._primaryHeading.setAttribute('title', primaryHeading);
            if (secondaryHeading) {
                this._secondaryHeading.innerText = secondaryHeading;
            }
            else {
                clearNode(this._secondaryHeading);
            }
        }
    }
    setMetaTitle(value) {
        if (this._metaHeading) {
            if (value) {
                this._metaHeading.innerText = value;
                show(this._metaHeading);
            }
            else {
                hide(this._metaHeading);
            }
        }
    }
    _doLayout(heightInPixel, widthInPixel) {
        if (!this._isShowing && heightInPixel < 0) {
            // Looks like the view zone got folded away!
            this.dispose();
            return;
        }
        const headHeight = Math.ceil(this.editor.getOption(75 /* EditorOption.lineHeight */) * 1.2);
        const bodyHeight = Math.round(heightInPixel - (headHeight + 1 /* the border-top width */));
        this._doLayoutHead(headHeight, widthInPixel);
        this._doLayoutBody(bodyHeight, widthInPixel);
    }
    _doLayoutHead(heightInPixel, widthInPixel) {
        if (this._headElement) {
            this._headElement.style.height = `${heightInPixel}px`;
            this._headElement.style.lineHeight = this._headElement.style.height;
        }
    }
    _doLayoutBody(heightInPixel, widthInPixel) {
        if (this._bodyElement) {
            this._bodyElement.style.height = `${heightInPixel}px`;
        }
    }
};
PeekViewWidget = __decorate([
    __param(2, IInstantiationService)
], PeekViewWidget);
const peekViewTitleBackground = registerColor('peekViewTitle.background', { dark: '#252526', light: '#F3F3F3', hcDark: Color.black, hcLight: Color.white }, localize(1318, 'Background color of the peek view title area.'));
const peekViewTitleForeground = registerColor('peekViewTitleLabel.foreground', { dark: Color.white, light: Color.black, hcDark: Color.white, hcLight: editorForeground }, localize(1319, 'Color of the peek view title.'));
const peekViewTitleInfoForeground = registerColor('peekViewTitleDescription.foreground', { dark: '#ccccccb3', light: '#616161', hcDark: '#FFFFFF99', hcLight: '#292929' }, localize(1320, 'Color of the peek view title info.'));
const peekViewBorder = registerColor('peekView.border', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1321, 'Color of the peek view borders and arrow.'));
const peekViewResultsBackground = registerColor('peekViewResult.background', { dark: '#252526', light: '#F3F3F3', hcDark: Color.black, hcLight: Color.white }, localize(1322, 'Background color of the peek view result list.'));
registerColor('peekViewResult.lineForeground', { dark: '#bbbbbb', light: '#646465', hcDark: Color.white, hcLight: editorForeground }, localize(1323, 'Foreground color for line nodes in the peek view result list.'));
registerColor('peekViewResult.fileForeground', { dark: Color.white, light: '#1E1E1E', hcDark: Color.white, hcLight: editorForeground }, localize(1324, 'Foreground color for file nodes in the peek view result list.'));
registerColor('peekViewResult.selectionBackground', { dark: '#3399ff33', light: '#3399ff33', hcDark: null, hcLight: null }, localize(1325, 'Background color of the selected entry in the peek view result list.'));
registerColor('peekViewResult.selectionForeground', { dark: Color.white, light: '#6C6C6C', hcDark: Color.white, hcLight: editorForeground }, localize(1326, 'Foreground color of the selected entry in the peek view result list.'));
const peekViewEditorBackground = registerColor('peekViewEditor.background', { dark: '#001F33', light: '#F2F8FC', hcDark: Color.black, hcLight: Color.white }, localize(1327, 'Background color of the peek view editor.'));
registerColor('peekViewEditorGutter.background', peekViewEditorBackground, localize(1328, 'Background color of the gutter in the peek view editor.'));
registerColor('peekViewEditorStickyScroll.background', peekViewEditorBackground, localize(1329, 'Background color of sticky scroll in the peek view editor.'));
registerColor('peekViewEditorStickyScrollGutter.background', peekViewEditorBackground, localize(1330, 'Background color of the gutter part of sticky scroll in the peek view editor.'));
registerColor('peekViewResult.matchHighlightBackground', { dark: '#ea5c004d', light: '#ea5c004d', hcDark: null, hcLight: null }, localize(1331, 'Match highlight color in the peek view result list.'));
registerColor('peekViewEditor.matchHighlightBackground', { dark: '#ff8f0099', light: '#f5d802de', hcDark: null, hcLight: null }, localize(1332, 'Match highlight color in the peek view editor.'));
registerColor('peekViewEditor.matchHighlightBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1333, 'Match highlight border in the peek view editor.'));

export { IPeekViewService, PeekContext, PeekViewWidget, peekViewBorder, peekViewEditorBackground, peekViewResultsBackground, peekViewTitleBackground, peekViewTitleForeground, peekViewTitleInfoForeground };
