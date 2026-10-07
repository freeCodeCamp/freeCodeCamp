import { Emitter } from '../../../common/event.js';
import { append, $ } from '../../dom.js';
import { BaseActionViewItem } from '../actionbar/actionViewItems.js';
import { getBaseLayerHoverDelegate } from '../hover/hoverDelegate2.js';
import { getDefaultHoverDelegate } from '../hover/hoverDelegateFactory.js';
import './dropdown.css';
import { DropdownMenu } from './dropdown.js';

class DropdownMenuActionViewItem extends BaseActionViewItem {
    get onDidChangeVisibility() { return this._onDidChangeVisibility.event; }
    constructor(action, menuActionsOrProvider, contextMenuProvider, options = Object.create(null)) {
        super(null, action, options);
        this.actionItem = null;
        this._onDidChangeVisibility = this._register(new Emitter());
        this.menuActionsOrProvider = menuActionsOrProvider;
        this.contextMenuProvider = contextMenuProvider;
        this.options = options;
        if (this.options.actionRunner) {
            this.actionRunner = this.options.actionRunner;
        }
    }
    render(container) {
        this.actionItem = container;
        const labelRenderer = (el) => {
            this.element = append(el, $('a.action-label'));
            return this.renderLabel(this.element);
        };
        const isActionsArray = Array.isArray(this.menuActionsOrProvider);
        const options = {
            contextMenuProvider: this.contextMenuProvider,
            labelRenderer: labelRenderer,
            menuAsChild: this.options.menuAsChild,
            actions: isActionsArray ? this.menuActionsOrProvider : undefined,
            actionProvider: isActionsArray ? undefined : this.menuActionsOrProvider,
            skipTelemetry: this.options.skipTelemetry
        };
        this.dropdownMenu = this._register(new DropdownMenu(container, options));
        this._register(this.dropdownMenu.onDidChangeVisibility(visible => {
            this.element?.setAttribute('aria-expanded', `${visible}`);
            this._onDidChangeVisibility.fire(visible);
        }));
        this.dropdownMenu.menuOptions = {
            actionViewItemProvider: this.options.actionViewItemProvider,
            actionRunner: this.actionRunner,
            getKeyBinding: this.options.keybindingProvider,
            context: this._context
        };
        if (this.options.anchorAlignmentProvider) {
            const that = this;
            this.dropdownMenu.menuOptions = {
                ...this.dropdownMenu.menuOptions,
                get anchorAlignment() {
                    return that.options.anchorAlignmentProvider();
                }
            };
        }
        this.updateTooltip();
        this.updateEnabled();
    }
    renderLabel(element) {
        let classNames = [];
        if (typeof this.options.classNames === 'string') {
            classNames = this.options.classNames.split(/\s+/g).filter(s => !!s);
        }
        else if (this.options.classNames) {
            classNames = this.options.classNames;
        }
        // todo@aeschli: remove codicon, should come through `this.options.classNames`
        if (!classNames.find(c => c === 'icon')) {
            classNames.push('codicon');
        }
        element.classList.add(...classNames);
        if (this._action.label) {
            this._register(getBaseLayerHoverDelegate().setupManagedHover(this.options.hoverDelegate ?? getDefaultHoverDelegate('mouse'), element, this._action.label));
        }
        return null;
    }
    getTooltip() {
        let title = null;
        if (this.action.tooltip) {
            title = this.action.tooltip;
        }
        else if (this.action.label) {
            title = this.action.label;
        }
        return title ?? undefined;
    }
    setActionContext(newContext) {
        super.setActionContext(newContext);
        if (this.dropdownMenu) {
            if (this.dropdownMenu.menuOptions) {
                this.dropdownMenu.menuOptions.context = newContext;
            }
            else {
                this.dropdownMenu.menuOptions = { context: newContext };
            }
        }
    }
    show() {
        this.dropdownMenu?.show();
    }
    updateEnabled() {
        const disabled = !this.action.enabled;
        this.actionItem?.classList.toggle('disabled', disabled);
        this.element?.classList.toggle('disabled', disabled);
    }
}

export { DropdownMenuActionViewItem };
