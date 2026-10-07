import './bannerController.css';
import { localize } from '../../../../nls.js';
import { $, clearNode, append } from '../../../../base/browser/dom.js';
import { ActionBar } from '../../../../base/browser/ui/actionbar/actionbar.js';
import { Action } from '../../../../base/common/actions.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { IMarkdownRendererService } from '../../../../platform/markdown/browser/markdownRenderer.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { Link } from '../../../../platform/opener/browser/link.js';
import { widgetClose } from '../../../../platform/theme/common/iconRegistry.js';
import { ThemeIcon } from '../../../../base/common/themables.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const BANNER_ELEMENT_HEIGHT = 26;
let BannerController = class BannerController extends Disposable {
    constructor(_editor, instantiationService) {
        super();
        this._editor = _editor;
        this.instantiationService = instantiationService;
        this.banner = this._register(this.instantiationService.createInstance(Banner));
    }
    hide() {
        this._editor.setBanner(null, 0);
        this.banner.clear();
    }
    show(item) {
        this.banner.show({
            ...item,
            onClose: () => {
                this.hide();
                item.onClose?.();
            }
        });
        this._editor.setBanner(this.banner.element, BANNER_ELEMENT_HEIGHT);
    }
};
BannerController = __decorate([
    __param(1, IInstantiationService)
], BannerController);
// TODO@hediet: Investigate if this can be reused by the workspace banner (bannerPart.ts).
let Banner = class Banner extends Disposable {
    constructor(instantiationService, markdownRendererService) {
        super();
        this.instantiationService = instantiationService;
        this.markdownRendererService = markdownRendererService;
        this.element = $('div.editor-banner');
        this.element.tabIndex = 0;
    }
    getAriaLabel(item) {
        if (item.ariaLabel) {
            return item.ariaLabel;
        }
        if (typeof item.message === 'string') {
            return item.message;
        }
        return undefined;
    }
    getBannerMessage(message) {
        if (typeof message === 'string') {
            const element = $('span');
            element.innerText = message;
            return element;
        }
        return this.markdownRendererService.render(message).element;
    }
    clear() {
        clearNode(this.element);
    }
    show(item) {
        // Clear previous item
        clearNode(this.element);
        // Banner aria label
        const ariaLabel = this.getAriaLabel(item);
        if (ariaLabel) {
            this.element.setAttribute('aria-label', ariaLabel);
        }
        // Icon
        const iconContainer = append(this.element, $('div.icon-container'));
        iconContainer.setAttribute('aria-hidden', 'true');
        if (item.icon) {
            iconContainer.appendChild($(`div${ThemeIcon.asCSSSelector(item.icon)}`));
        }
        // Message
        const messageContainer = append(this.element, $('div.message-container'));
        messageContainer.setAttribute('aria-hidden', 'true');
        messageContainer.appendChild(this.getBannerMessage(item.message));
        // Message Actions
        this.messageActionsContainer = append(this.element, $('div.message-actions-container'));
        if (item.actions) {
            for (const action of item.actions) {
                this._register(this.instantiationService.createInstance(Link, this.messageActionsContainer, { ...action, tabIndex: -1 }, {}));
            }
        }
        // Action
        const actionBarContainer = append(this.element, $('div.action-container'));
        this.actionBar = this._register(new ActionBar(actionBarContainer));
        this.actionBar.push(this._register(new Action('banner.close', localize(1533, "Close Banner"), ThemeIcon.asClassName(widgetClose), true, () => {
            if (typeof item.onClose === 'function') {
                item.onClose();
            }
        })), { icon: true, label: false });
        this.actionBar.setFocusable(false);
    }
};
Banner = __decorate([
    __param(0, IInstantiationService),
    __param(1, IMarkdownRendererService)
], Banner);

export { BannerController };
