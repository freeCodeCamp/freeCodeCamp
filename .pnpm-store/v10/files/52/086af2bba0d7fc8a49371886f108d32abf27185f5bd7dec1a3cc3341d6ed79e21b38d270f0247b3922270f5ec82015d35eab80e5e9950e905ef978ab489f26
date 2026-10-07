import { append, $, addStandardDisposableListener, clearNode } from '../../../../base/browser/dom.js';
import { ScrollableElement } from '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import { isNonEmptyArray } from '../../../../base/common/arrays.js';
import { Color } from '../../../../base/common/color.js';
import { Emitter } from '../../../../base/common/event.js';
import { DisposableStore, dispose } from '../../../../base/common/lifecycle.js';
import { basename } from '../../../../base/common/resources.js';
import { splitLines } from '../../../../base/common/strings.js';
import './media/gotoErrorWidget.css';
import { Range } from '../../../common/core/range.js';
import { PeekViewWidget, peekViewTitleInfoForeground, peekViewTitleForeground } from '../../peekView/browser/peekView.js';
import { localize } from '../../../../nls.js';
import { getFlatActionBarActions } from '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { MenuId, IMenuService } from '../../../../platform/actions/common/actions.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { ILabelService } from '../../../../platform/label/common/label.js';
import { MarkerSeverity } from '../../../../platform/markers/common/markers.js';
import { IOpenerService } from '../../../../platform/opener/common/opener.js';
import { SeverityIcon } from '../../../../base/browser/ui/severityIcon/severityIcon.js';
import { registerColor, oneOf, transparent } from '../../../../platform/theme/common/colorUtils.js';
import { contrastBorder } from '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { editorErrorBorder, editorErrorForeground, editorWarningBorder, editorWarningForeground, editorInfoBorder, editorInfoForeground, editorBackground } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { IThemeService } from '../../../../platform/theme/common/themeService.js';

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
var MarkerNavigationWidget_1;
class MessageWidget {
    constructor(parent, editor, onRelatedInformation, _openerService, _labelService) {
        this._openerService = _openerService;
        this._labelService = _labelService;
        this._lines = 0;
        this._longestLineLength = 0;
        this._relatedDiagnostics = new WeakMap();
        this._disposables = new DisposableStore();
        this._editor = editor;
        const domNode = document.createElement('div');
        domNode.className = 'descriptioncontainer';
        this._messageBlock = document.createElement('div');
        this._messageBlock.classList.add('message');
        this._messageBlock.setAttribute('aria-live', 'assertive');
        this._messageBlock.setAttribute('role', 'alert');
        domNode.appendChild(this._messageBlock);
        this._relatedBlock = document.createElement('div');
        domNode.appendChild(this._relatedBlock);
        this._disposables.add(addStandardDisposableListener(this._relatedBlock, 'click', event => {
            event.preventDefault();
            const related = this._relatedDiagnostics.get(event.target);
            if (related) {
                onRelatedInformation(related);
            }
        }));
        this._scrollable = new ScrollableElement(domNode, {
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            vertical: 1 /* ScrollbarVisibility.Auto */,
            useShadows: false,
            horizontalScrollbarSize: 6,
            verticalScrollbarSize: 6
        });
        parent.appendChild(this._scrollable.getDomNode());
        this._disposables.add(this._scrollable.onScroll(e => {
            domNode.style.left = `-${e.scrollLeft}px`;
            domNode.style.top = `-${e.scrollTop}px`;
        }));
        this._disposables.add(this._scrollable);
    }
    dispose() {
        dispose(this._disposables);
    }
    update(marker) {
        const { source, message, relatedInformation, code } = marker;
        let sourceAndCodeLength = (source?.length || 0) + '()'.length;
        if (code) {
            if (typeof code === 'string') {
                sourceAndCodeLength += code.length;
            }
            else {
                sourceAndCodeLength += code.value.length;
            }
        }
        const lines = splitLines(message);
        this._lines = lines.length;
        this._longestLineLength = 0;
        for (const line of lines) {
            this._longestLineLength = Math.max(line.length + sourceAndCodeLength, this._longestLineLength);
        }
        clearNode(this._messageBlock);
        this._messageBlock.setAttribute('aria-label', this.getAriaLabel(marker));
        this._editor.applyFontInfo(this._messageBlock);
        let lastLineElement = this._messageBlock;
        for (const line of lines) {
            lastLineElement = document.createElement('div');
            lastLineElement.innerText = line;
            if (line === '') {
                lastLineElement.style.height = this._messageBlock.style.lineHeight;
            }
            this._messageBlock.appendChild(lastLineElement);
        }
        if (source || code) {
            const detailsElement = document.createElement('span');
            detailsElement.classList.add('details');
            lastLineElement.appendChild(detailsElement);
            if (source) {
                const sourceElement = document.createElement('span');
                sourceElement.innerText = source;
                sourceElement.classList.add('source');
                detailsElement.appendChild(sourceElement);
            }
            if (code) {
                if (typeof code === 'string') {
                    const codeElement = document.createElement('span');
                    codeElement.innerText = `(${code})`;
                    codeElement.classList.add('code');
                    detailsElement.appendChild(codeElement);
                }
                else {
                    this._codeLink = $('a.code-link');
                    this._codeLink.setAttribute('href', `${code.target.toString()}`);
                    this._codeLink.onclick = (e) => {
                        this._openerService.open(code.target, { allowCommands: true });
                        e.preventDefault();
                        e.stopPropagation();
                    };
                    const codeElement = append(this._codeLink, $('span'));
                    codeElement.innerText = code.value;
                    detailsElement.appendChild(this._codeLink);
                }
            }
        }
        clearNode(this._relatedBlock);
        this._editor.applyFontInfo(this._relatedBlock);
        if (isNonEmptyArray(relatedInformation)) {
            const relatedInformationNode = this._relatedBlock.appendChild(document.createElement('div'));
            relatedInformationNode.style.paddingTop = `${Math.floor(this._editor.getOption(75 /* EditorOption.lineHeight */) * 0.66)}px`;
            this._lines += 1;
            for (const related of relatedInformation) {
                const container = document.createElement('div');
                const relatedResource = document.createElement('a');
                relatedResource.classList.add('filename');
                relatedResource.innerText = `${this._labelService.getUriBasenameLabel(related.resource)}(${related.startLineNumber}, ${related.startColumn}): `;
                relatedResource.title = this._labelService.getUriLabel(related.resource);
                this._relatedDiagnostics.set(relatedResource, related);
                const relatedMessage = document.createElement('span');
                relatedMessage.innerText = related.message;
                container.appendChild(relatedResource);
                container.appendChild(relatedMessage);
                this._lines += 1;
                relatedInformationNode.appendChild(container);
            }
        }
        const fontInfo = this._editor.getOption(59 /* EditorOption.fontInfo */);
        const scrollWidth = Math.ceil(fontInfo.typicalFullwidthCharacterWidth * this._longestLineLength * 0.75);
        const scrollHeight = fontInfo.lineHeight * this._lines;
        this._scrollable.setScrollDimensions({ scrollWidth, scrollHeight });
    }
    layout(height, width) {
        this._scrollable.getDomNode().style.height = `${height}px`;
        this._scrollable.getDomNode().style.width = `${width}px`;
        this._scrollable.setScrollDimensions({ width, height });
    }
    getHeightInLines() {
        return Math.min(17, this._lines);
    }
    getAriaLabel(marker) {
        let severityLabel = '';
        switch (marker.severity) {
            case MarkerSeverity.Error:
                severityLabel = localize(1024, "Error");
                break;
            case MarkerSeverity.Warning:
                severityLabel = localize(1025, "Warning");
                break;
            case MarkerSeverity.Info:
                severityLabel = localize(1026, "Info");
                break;
            case MarkerSeverity.Hint:
                severityLabel = localize(1027, "Hint");
                break;
        }
        let ariaLabel = localize(1028, "{0} at {1}. ", severityLabel, marker.startLineNumber + ':' + marker.startColumn);
        const model = this._editor.getModel();
        if (model && (marker.startLineNumber <= model.getLineCount()) && (marker.startLineNumber >= 1)) {
            const lineContent = model.getLineContent(marker.startLineNumber);
            ariaLabel = `${lineContent}, ${ariaLabel}`;
        }
        return ariaLabel;
    }
}
let MarkerNavigationWidget = class MarkerNavigationWidget extends PeekViewWidget {
    static { MarkerNavigationWidget_1 = this; }
    static { this.TitleMenu = new MenuId('gotoErrorTitleMenu'); }
    constructor(editor, _themeService, _openerService, _menuService, instantiationService, _contextKeyService, _labelService) {
        super(editor, { showArrow: true, showFrame: true, isAccessible: true, frameWidth: 1 }, instantiationService);
        this._themeService = _themeService;
        this._openerService = _openerService;
        this._menuService = _menuService;
        this._contextKeyService = _contextKeyService;
        this._labelService = _labelService;
        this._callOnDispose = new DisposableStore();
        this._onDidSelectRelatedInformation = new Emitter();
        this.onDidSelectRelatedInformation = this._onDidSelectRelatedInformation.event;
        this._severity = MarkerSeverity.Warning;
        this._backgroundColor = Color.white;
        this._applyTheme(_themeService.getColorTheme());
        this._callOnDispose.add(_themeService.onDidColorThemeChange(this._applyTheme.bind(this)));
        this.create();
    }
    _applyTheme(theme) {
        this._backgroundColor = theme.getColor(editorMarkerNavigationBackground);
        let colorId = editorMarkerNavigationError;
        let headerBackground = editorMarkerNavigationErrorHeader;
        if (this._severity === MarkerSeverity.Warning) {
            colorId = editorMarkerNavigationWarning;
            headerBackground = editorMarkerNavigationWarningHeader;
        }
        else if (this._severity === MarkerSeverity.Info) {
            colorId = editorMarkerNavigationInfo;
            headerBackground = editorMarkerNavigationInfoHeader;
        }
        const frameColor = theme.getColor(colorId);
        const headerBg = theme.getColor(headerBackground);
        this.style({
            arrowColor: frameColor,
            frameColor: frameColor,
            headerBackgroundColor: headerBg,
            primaryHeadingColor: theme.getColor(peekViewTitleForeground),
            secondaryHeadingColor: theme.getColor(peekViewTitleInfoForeground)
        }); // style() will trigger _applyStyles
    }
    _applyStyles() {
        if (this._parentContainer) {
            this._parentContainer.style.backgroundColor = this._backgroundColor ? this._backgroundColor.toString() : '';
        }
        super._applyStyles();
    }
    dispose() {
        this._callOnDispose.dispose();
        super.dispose();
    }
    _fillHead(container) {
        super._fillHead(container);
        this._disposables.add(this._actionbarWidget.actionRunner.onWillRun(e => this.editor.focus()));
        const menu = this._menuService.getMenuActions(MarkerNavigationWidget_1.TitleMenu, this._contextKeyService);
        const actions = getFlatActionBarActions(menu);
        this._actionbarWidget.push(actions, { label: false, icon: true, index: 0 });
    }
    _fillTitleIcon(container) {
        this._icon = append(container, $(''));
    }
    _fillBody(container) {
        this._parentContainer = container;
        container.classList.add('marker-widget');
        this._parentContainer.tabIndex = 0;
        this._parentContainer.setAttribute('role', 'tooltip');
        this._container = document.createElement('div');
        container.appendChild(this._container);
        this._message = new MessageWidget(this._container, this.editor, related => this._onDidSelectRelatedInformation.fire(related), this._openerService, this._labelService);
        this._disposables.add(this._message);
    }
    show() {
        throw new Error('call showAtMarker');
    }
    showAtMarker(marker, markerIdx, markerCount) {
        // update:
        // * title
        // * message
        this._container.classList.remove('stale');
        this._message.update(marker);
        // update frame color (only applied on 'show')
        this._severity = marker.severity;
        this._applyTheme(this._themeService.getColorTheme());
        // show
        const range = Range.lift(marker);
        const editorPosition = this.editor.getPosition();
        const position = editorPosition && range.containsPosition(editorPosition) ? editorPosition : range.getStartPosition();
        super.show(position, this.computeRequiredHeight());
        const model = this.editor.getModel();
        if (model) {
            const detail = markerCount > 1
                ? localize(1029, "{0} of {1} problems", markerIdx, markerCount)
                : localize(1030, "{0} of {1} problem", markerIdx, markerCount);
            this.setTitle(basename(model.uri), detail);
        }
        this._icon.className = `codicon ${SeverityIcon.className(MarkerSeverity.toSeverity(this._severity))}`;
        this.editor.revealPositionNearTop(position, 0 /* ScrollType.Smooth */);
        this.editor.focus();
    }
    updateMarker(marker) {
        this._container.classList.remove('stale');
        this._message.update(marker);
    }
    showStale() {
        this._container.classList.add('stale');
        this._relayout();
    }
    _doLayoutBody(heightInPixel, widthInPixel) {
        super._doLayoutBody(heightInPixel, widthInPixel);
        this._heightInPixel = heightInPixel;
        this._message.layout(heightInPixel, widthInPixel);
        this._container.style.height = `${heightInPixel}px`;
    }
    _onWidth(widthInPixel) {
        this._message.layout(this._heightInPixel, widthInPixel);
    }
    _relayout() {
        super._relayout(this.computeRequiredHeight());
    }
    computeRequiredHeight() {
        return 3 + this._message.getHeightInLines();
    }
};
MarkerNavigationWidget = MarkerNavigationWidget_1 = __decorate([
    __param(1, IThemeService),
    __param(2, IOpenerService),
    __param(3, IMenuService),
    __param(4, IInstantiationService),
    __param(5, IContextKeyService),
    __param(6, ILabelService)
], MarkerNavigationWidget);
// theming
const errorDefault = oneOf(editorErrorForeground, editorErrorBorder);
const warningDefault = oneOf(editorWarningForeground, editorWarningBorder);
const infoDefault = oneOf(editorInfoForeground, editorInfoBorder);
const editorMarkerNavigationError = registerColor('editorMarkerNavigationError.background', { dark: errorDefault, light: errorDefault, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1031, 'Editor marker navigation widget error color.'));
const editorMarkerNavigationErrorHeader = registerColor('editorMarkerNavigationError.headerBackground', { dark: transparent(editorMarkerNavigationError, .1), light: transparent(editorMarkerNavigationError, .1), hcDark: null, hcLight: null }, localize(1032, 'Editor marker navigation widget error heading background.'));
const editorMarkerNavigationWarning = registerColor('editorMarkerNavigationWarning.background', { dark: warningDefault, light: warningDefault, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1033, 'Editor marker navigation widget warning color.'));
const editorMarkerNavigationWarningHeader = registerColor('editorMarkerNavigationWarning.headerBackground', { dark: transparent(editorMarkerNavigationWarning, .1), light: transparent(editorMarkerNavigationWarning, .1), hcDark: '#0C141F', hcLight: transparent(editorMarkerNavigationWarning, .2) }, localize(1034, 'Editor marker navigation widget warning heading background.'));
const editorMarkerNavigationInfo = registerColor('editorMarkerNavigationInfo.background', { dark: infoDefault, light: infoDefault, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1035, 'Editor marker navigation widget info color.'));
const editorMarkerNavigationInfoHeader = registerColor('editorMarkerNavigationInfo.headerBackground', { dark: transparent(editorMarkerNavigationInfo, .1), light: transparent(editorMarkerNavigationInfo, .1), hcDark: null, hcLight: null }, localize(1036, 'Editor marker navigation widget info heading background.'));
const editorMarkerNavigationBackground = registerColor('editorMarkerNavigation.background', editorBackground, localize(1037, 'Editor marker navigation widget background.'));

export { MarkerNavigationWidget };
