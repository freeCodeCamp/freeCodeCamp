import { SubmenuAction } from '../../../base/common/actions.js';
import { MicrotaskEmitter } from '../../../base/common/event.js';
import { markAsSingleton, toDisposable, DisposableStore, dispose } from '../../../base/common/lifecycle.js';
import { LinkedList } from '../../../base/common/linkedList.js';
import { ThemeIcon } from '../../../base/common/themables.js';
import { ICommandService, CommandsRegistry } from '../../commands/common/commands.js';
import { IContextKeyService, ContextKeyExpr } from '../../contextkey/common/contextkey.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';
import { KeybindingsRegistry } from '../../keybinding/common/keybindingsRegistry.js';

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
var MenuItemAction_1;
function isIMenuItem(item) {
    return item.command !== undefined;
}
function isISubmenuItem(item) {
    return item.submenu !== undefined;
}
class MenuId {
    static { this._instances = new Map(); }
    static { this.CommandPalette = new MenuId('CommandPalette'); }
    static { this.DebugBreakpointsContext = new MenuId('DebugBreakpointsContext'); }
    static { this.DebugCallStackContext = new MenuId('DebugCallStackContext'); }
    static { this.DebugConsoleContext = new MenuId('DebugConsoleContext'); }
    static { this.DebugVariablesContext = new MenuId('DebugVariablesContext'); }
    static { this.NotebookVariablesContext = new MenuId('NotebookVariablesContext'); }
    static { this.DebugHoverContext = new MenuId('DebugHoverContext'); }
    static { this.DebugWatchContext = new MenuId('DebugWatchContext'); }
    static { this.DebugToolBar = new MenuId('DebugToolBar'); }
    static { this.DebugToolBarStop = new MenuId('DebugToolBarStop'); }
    static { this.DebugDisassemblyContext = new MenuId('DebugDisassemblyContext'); }
    static { this.DebugCallStackToolbar = new MenuId('DebugCallStackToolbar'); }
    static { this.DebugCreateConfiguration = new MenuId('DebugCreateConfiguration'); }
    static { this.EditorContext = new MenuId('EditorContext'); }
    static { this.SimpleEditorContext = new MenuId('SimpleEditorContext'); }
    static { this.EditorContent = new MenuId('EditorContent'); }
    static { this.EditorLineNumberContext = new MenuId('EditorLineNumberContext'); }
    static { this.EditorContextCopy = new MenuId('EditorContextCopy'); }
    static { this.EditorContextPeek = new MenuId('EditorContextPeek'); }
    static { this.EditorContextShare = new MenuId('EditorContextShare'); }
    static { this.EditorTitle = new MenuId('EditorTitle'); }
    static { this.CompactWindowEditorTitle = new MenuId('CompactWindowEditorTitle'); }
    static { this.EditorTitleRun = new MenuId('EditorTitleRun'); }
    static { this.EditorTitleContext = new MenuId('EditorTitleContext'); }
    static { this.EditorTitleContextShare = new MenuId('EditorTitleContextShare'); }
    static { this.EmptyEditorGroup = new MenuId('EmptyEditorGroup'); }
    static { this.EmptyEditorGroupContext = new MenuId('EmptyEditorGroupContext'); }
    static { this.EditorTabsBarContext = new MenuId('EditorTabsBarContext'); }
    static { this.EditorTabsBarShowTabsSubmenu = new MenuId('EditorTabsBarShowTabsSubmenu'); }
    static { this.EditorTabsBarShowTabsZenModeSubmenu = new MenuId('EditorTabsBarShowTabsZenModeSubmenu'); }
    static { this.EditorActionsPositionSubmenu = new MenuId('EditorActionsPositionSubmenu'); }
    static { this.EditorSplitMoveSubmenu = new MenuId('EditorSplitMoveSubmenu'); }
    static { this.ExplorerContext = new MenuId('ExplorerContext'); }
    static { this.ExplorerContextShare = new MenuId('ExplorerContextShare'); }
    static { this.ExtensionContext = new MenuId('ExtensionContext'); }
    static { this.ExtensionEditorContextMenu = new MenuId('ExtensionEditorContextMenu'); }
    static { this.GlobalActivity = new MenuId('GlobalActivity'); }
    static { this.CommandCenter = new MenuId('CommandCenter'); }
    static { this.CommandCenterCenter = new MenuId('CommandCenterCenter'); }
    static { this.LayoutControlMenuSubmenu = new MenuId('LayoutControlMenuSubmenu'); }
    static { this.LayoutControlMenu = new MenuId('LayoutControlMenu'); }
    static { this.MenubarMainMenu = new MenuId('MenubarMainMenu'); }
    static { this.MenubarAppearanceMenu = new MenuId('MenubarAppearanceMenu'); }
    static { this.MenubarDebugMenu = new MenuId('MenubarDebugMenu'); }
    static { this.MenubarEditMenu = new MenuId('MenubarEditMenu'); }
    static { this.MenubarCopy = new MenuId('MenubarCopy'); }
    static { this.MenubarFileMenu = new MenuId('MenubarFileMenu'); }
    static { this.MenubarGoMenu = new MenuId('MenubarGoMenu'); }
    static { this.MenubarHelpMenu = new MenuId('MenubarHelpMenu'); }
    static { this.MenubarLayoutMenu = new MenuId('MenubarLayoutMenu'); }
    static { this.MenubarNewBreakpointMenu = new MenuId('MenubarNewBreakpointMenu'); }
    static { this.PanelAlignmentMenu = new MenuId('PanelAlignmentMenu'); }
    static { this.PanelPositionMenu = new MenuId('PanelPositionMenu'); }
    static { this.ActivityBarPositionMenu = new MenuId('ActivityBarPositionMenu'); }
    static { this.MenubarPreferencesMenu = new MenuId('MenubarPreferencesMenu'); }
    static { this.MenubarRecentMenu = new MenuId('MenubarRecentMenu'); }
    static { this.MenubarSelectionMenu = new MenuId('MenubarSelectionMenu'); }
    static { this.MenubarShare = new MenuId('MenubarShare'); }
    static { this.MenubarSwitchEditorMenu = new MenuId('MenubarSwitchEditorMenu'); }
    static { this.MenubarSwitchGroupMenu = new MenuId('MenubarSwitchGroupMenu'); }
    static { this.MenubarTerminalMenu = new MenuId('MenubarTerminalMenu'); }
    static { this.MenubarTerminalSuggestStatusMenu = new MenuId('MenubarTerminalSuggestStatusMenu'); }
    static { this.MenubarViewMenu = new MenuId('MenubarViewMenu'); }
    static { this.MenubarHomeMenu = new MenuId('MenubarHomeMenu'); }
    static { this.OpenEditorsContext = new MenuId('OpenEditorsContext'); }
    static { this.OpenEditorsContextShare = new MenuId('OpenEditorsContextShare'); }
    static { this.ProblemsPanelContext = new MenuId('ProblemsPanelContext'); }
    static { this.SCMInputBox = new MenuId('SCMInputBox'); }
    static { this.SCMChangeContext = new MenuId('SCMChangeContext'); }
    static { this.SCMResourceContext = new MenuId('SCMResourceContext'); }
    static { this.SCMResourceContextShare = new MenuId('SCMResourceContextShare'); }
    static { this.SCMResourceFolderContext = new MenuId('SCMResourceFolderContext'); }
    static { this.SCMResourceGroupContext = new MenuId('SCMResourceGroupContext'); }
    static { this.SCMSourceControl = new MenuId('SCMSourceControl'); }
    static { this.SCMSourceControlInline = new MenuId('SCMSourceControlInline'); }
    static { this.SCMSourceControlTitle = new MenuId('SCMSourceControlTitle'); }
    static { this.SCMHistoryTitle = new MenuId('SCMHistoryTitle'); }
    static { this.SCMHistoryItemContext = new MenuId('SCMHistoryItemContext'); }
    static { this.SCMHistoryItemChangeContext = new MenuId('SCMHistoryItemChangeContext'); }
    static { this.SCMHistoryItemRefContext = new MenuId('SCMHistoryItemRefContext'); }
    static { this.SCMArtifactGroupContext = new MenuId('SCMArtifactGroupContext'); }
    static { this.SCMArtifactContext = new MenuId('SCMArtifactContext'); }
    static { this.SCMQuickDiffDecorations = new MenuId('SCMQuickDiffDecorations'); }
    static { this.SCMTitle = new MenuId('SCMTitle'); }
    static { this.SearchContext = new MenuId('SearchContext'); }
    static { this.SearchActionMenu = new MenuId('SearchActionContext'); }
    static { this.StatusBarWindowIndicatorMenu = new MenuId('StatusBarWindowIndicatorMenu'); }
    static { this.StatusBarRemoteIndicatorMenu = new MenuId('StatusBarRemoteIndicatorMenu'); }
    static { this.StickyScrollContext = new MenuId('StickyScrollContext'); }
    static { this.TestItem = new MenuId('TestItem'); }
    static { this.TestItemGutter = new MenuId('TestItemGutter'); }
    static { this.TestProfilesContext = new MenuId('TestProfilesContext'); }
    static { this.TestMessageContext = new MenuId('TestMessageContext'); }
    static { this.TestMessageContent = new MenuId('TestMessageContent'); }
    static { this.TestPeekElement = new MenuId('TestPeekElement'); }
    static { this.TestPeekTitle = new MenuId('TestPeekTitle'); }
    static { this.TestCallStack = new MenuId('TestCallStack'); }
    static { this.TestCoverageFilterItem = new MenuId('TestCoverageFilterItem'); }
    static { this.TouchBarContext = new MenuId('TouchBarContext'); }
    static { this.TitleBar = new MenuId('TitleBar'); }
    static { this.TitleBarContext = new MenuId('TitleBarContext'); }
    static { this.TitleBarTitleContext = new MenuId('TitleBarTitleContext'); }
    static { this.TunnelContext = new MenuId('TunnelContext'); }
    static { this.TunnelPrivacy = new MenuId('TunnelPrivacy'); }
    static { this.TunnelProtocol = new MenuId('TunnelProtocol'); }
    static { this.TunnelPortInline = new MenuId('TunnelInline'); }
    static { this.TunnelTitle = new MenuId('TunnelTitle'); }
    static { this.TunnelLocalAddressInline = new MenuId('TunnelLocalAddressInline'); }
    static { this.TunnelOriginInline = new MenuId('TunnelOriginInline'); }
    static { this.ViewItemContext = new MenuId('ViewItemContext'); }
    static { this.ViewContainerTitle = new MenuId('ViewContainerTitle'); }
    static { this.ViewContainerTitleContext = new MenuId('ViewContainerTitleContext'); }
    static { this.ViewTitle = new MenuId('ViewTitle'); }
    static { this.ViewTitleContext = new MenuId('ViewTitleContext'); }
    static { this.CommentEditorActions = new MenuId('CommentEditorActions'); }
    static { this.CommentThreadTitle = new MenuId('CommentThreadTitle'); }
    static { this.CommentThreadActions = new MenuId('CommentThreadActions'); }
    static { this.CommentThreadAdditionalActions = new MenuId('CommentThreadAdditionalActions'); }
    static { this.CommentThreadTitleContext = new MenuId('CommentThreadTitleContext'); }
    static { this.CommentThreadCommentContext = new MenuId('CommentThreadCommentContext'); }
    static { this.CommentTitle = new MenuId('CommentTitle'); }
    static { this.CommentActions = new MenuId('CommentActions'); }
    static { this.CommentsViewThreadActions = new MenuId('CommentsViewThreadActions'); }
    static { this.InteractiveToolbar = new MenuId('InteractiveToolbar'); }
    static { this.InteractiveCellTitle = new MenuId('InteractiveCellTitle'); }
    static { this.InteractiveCellDelete = new MenuId('InteractiveCellDelete'); }
    static { this.InteractiveCellExecute = new MenuId('InteractiveCellExecute'); }
    static { this.InteractiveInputExecute = new MenuId('InteractiveInputExecute'); }
    static { this.InteractiveInputConfig = new MenuId('InteractiveInputConfig'); }
    static { this.ReplInputExecute = new MenuId('ReplInputExecute'); }
    static { this.IssueReporter = new MenuId('IssueReporter'); }
    static { this.NotebookToolbar = new MenuId('NotebookToolbar'); }
    static { this.NotebookToolbarContext = new MenuId('NotebookToolbarContext'); }
    static { this.NotebookStickyScrollContext = new MenuId('NotebookStickyScrollContext'); }
    static { this.NotebookCellTitle = new MenuId('NotebookCellTitle'); }
    static { this.NotebookCellDelete = new MenuId('NotebookCellDelete'); }
    static { this.NotebookCellInsert = new MenuId('NotebookCellInsert'); }
    static { this.NotebookCellBetween = new MenuId('NotebookCellBetween'); }
    static { this.NotebookCellListTop = new MenuId('NotebookCellTop'); }
    static { this.NotebookCellExecute = new MenuId('NotebookCellExecute'); }
    static { this.NotebookCellExecuteGoTo = new MenuId('NotebookCellExecuteGoTo'); }
    static { this.NotebookCellExecutePrimary = new MenuId('NotebookCellExecutePrimary'); }
    static { this.NotebookDiffCellInputTitle = new MenuId('NotebookDiffCellInputTitle'); }
    static { this.NotebookDiffDocumentMetadata = new MenuId('NotebookDiffDocumentMetadata'); }
    static { this.NotebookDiffCellMetadataTitle = new MenuId('NotebookDiffCellMetadataTitle'); }
    static { this.NotebookDiffCellOutputsTitle = new MenuId('NotebookDiffCellOutputsTitle'); }
    static { this.NotebookOutputToolbar = new MenuId('NotebookOutputToolbar'); }
    static { this.NotebookOutlineFilter = new MenuId('NotebookOutlineFilter'); }
    static { this.NotebookOutlineActionMenu = new MenuId('NotebookOutlineActionMenu'); }
    static { this.NotebookEditorLayoutConfigure = new MenuId('NotebookEditorLayoutConfigure'); }
    static { this.NotebookKernelSource = new MenuId('NotebookKernelSource'); }
    static { this.BulkEditTitle = new MenuId('BulkEditTitle'); }
    static { this.BulkEditContext = new MenuId('BulkEditContext'); }
    static { this.TimelineItemContext = new MenuId('TimelineItemContext'); }
    static { this.TimelineTitle = new MenuId('TimelineTitle'); }
    static { this.TimelineTitleContext = new MenuId('TimelineTitleContext'); }
    static { this.TimelineFilterSubMenu = new MenuId('TimelineFilterSubMenu'); }
    static { this.AccountsContext = new MenuId('AccountsContext'); }
    static { this.SidebarTitle = new MenuId('SidebarTitle'); }
    static { this.PanelTitle = new MenuId('PanelTitle'); }
    static { this.AuxiliaryBarTitle = new MenuId('AuxiliaryBarTitle'); }
    static { this.TerminalInstanceContext = new MenuId('TerminalInstanceContext'); }
    static { this.TerminalEditorInstanceContext = new MenuId('TerminalEditorInstanceContext'); }
    static { this.TerminalNewDropdownContext = new MenuId('TerminalNewDropdownContext'); }
    static { this.TerminalTabContext = new MenuId('TerminalTabContext'); }
    static { this.TerminalTabEmptyAreaContext = new MenuId('TerminalTabEmptyAreaContext'); }
    static { this.TerminalStickyScrollContext = new MenuId('TerminalStickyScrollContext'); }
    static { this.WebviewContext = new MenuId('WebviewContext'); }
    static { this.InlineCompletionsActions = new MenuId('InlineCompletionsActions'); }
    static { this.InlineEditsActions = new MenuId('InlineEditsActions'); }
    static { this.NewFile = new MenuId('NewFile'); }
    static { this.MergeInput1Toolbar = new MenuId('MergeToolbar1Toolbar'); }
    static { this.MergeInput2Toolbar = new MenuId('MergeToolbar2Toolbar'); }
    static { this.MergeBaseToolbar = new MenuId('MergeBaseToolbar'); }
    static { this.MergeInputResultToolbar = new MenuId('MergeToolbarResultToolbar'); }
    static { this.InlineSuggestionToolbar = new MenuId('InlineSuggestionToolbar'); }
    static { this.InlineEditToolbar = new MenuId('InlineEditToolbar'); }
    static { this.ChatContext = new MenuId('ChatContext'); }
    static { this.ChatCodeBlock = new MenuId('ChatCodeblock'); }
    static { this.ChatCompareBlock = new MenuId('ChatCompareBlock'); }
    static { this.ChatMessageTitle = new MenuId('ChatMessageTitle'); }
    static { this.ChatHistory = new MenuId('ChatHistory'); }
    static { this.ChatWelcomeContext = new MenuId('ChatWelcomeContext'); }
    static { this.ChatMessageFooter = new MenuId('ChatMessageFooter'); }
    static { this.ChatExecute = new MenuId('ChatExecute'); }
    static { this.ChatInput = new MenuId('ChatInput'); }
    static { this.ChatInputSide = new MenuId('ChatInputSide'); }
    static { this.ChatModePicker = new MenuId('ChatModePicker'); }
    static { this.ChatEditingWidgetToolbar = new MenuId('ChatEditingWidgetToolbar'); }
    static { this.ChatEditingEditorContent = new MenuId('ChatEditingEditorContent'); }
    static { this.ChatEditingEditorHunk = new MenuId('ChatEditingEditorHunk'); }
    static { this.ChatEditingDeletedNotebookCell = new MenuId('ChatEditingDeletedNotebookCell'); }
    static { this.ChatInputAttachmentToolbar = new MenuId('ChatInputAttachmentToolbar'); }
    static { this.ChatEditingWidgetModifiedFilesToolbar = new MenuId('ChatEditingWidgetModifiedFilesToolbar'); }
    static { this.ChatInputResourceAttachmentContext = new MenuId('ChatInputResourceAttachmentContext'); }
    static { this.ChatInputSymbolAttachmentContext = new MenuId('ChatInputSymbolAttachmentContext'); }
    static { this.ChatInlineResourceAnchorContext = new MenuId('ChatInlineResourceAnchorContext'); }
    static { this.ChatInlineSymbolAnchorContext = new MenuId('ChatInlineSymbolAnchorContext'); }
    static { this.ChatMessageCheckpoint = new MenuId('ChatMessageCheckpoint'); }
    static { this.ChatMessageRestoreCheckpoint = new MenuId('ChatMessageRestoreCheckpoint'); }
    static { this.ChatNewMenu = new MenuId('ChatNewMenu'); }
    static { this.ChatEditingCodeBlockContext = new MenuId('ChatEditingCodeBlockContext'); }
    static { this.ChatTitleBarMenu = new MenuId('ChatTitleBarMenu'); }
    static { this.ChatAttachmentsContext = new MenuId('ChatAttachmentsContext'); }
    static { this.ChatToolOutputResourceToolbar = new MenuId('ChatToolOutputResourceToolbar'); }
    static { this.ChatTextEditorMenu = new MenuId('ChatTextEditorMenu'); }
    static { this.ChatToolOutputResourceContext = new MenuId('ChatToolOutputResourceContext'); }
    static { this.ChatMultiDiffContext = new MenuId('ChatMultiDiffContext'); }
    static { this.ChatSessionsMenu = new MenuId('ChatSessionsMenu'); }
    static { this.ChatSessionsCreateSubMenu = new MenuId('ChatSessionsCreateSubMenu'); }
    static { this.ChatConfirmationMenu = new MenuId('ChatConfirmationMenu'); }
    static { this.ChatEditorInlineExecute = new MenuId('ChatEditorInputExecute'); }
    static { this.ChatEditorInlineInputSide = new MenuId('ChatEditorInputSide'); }
    static { this.AccessibleView = new MenuId('AccessibleView'); }
    static { this.MultiDiffEditorFileToolbar = new MenuId('MultiDiffEditorFileToolbar'); }
    static { this.DiffEditorHunkToolbar = new MenuId('DiffEditorHunkToolbar'); }
    static { this.DiffEditorSelectionToolbar = new MenuId('DiffEditorSelectionToolbar'); }
    /**
     * Create a new `MenuId` with the unique identifier. Will throw if a menu
     * with the identifier already exists, use `MenuId.for(ident)` or a unique
     * identifier
     */
    constructor(identifier) {
        if (MenuId._instances.has(identifier)) {
            throw new TypeError(`MenuId with identifier '${identifier}' already exists. Use MenuId.for(ident) or a unique identifier`);
        }
        MenuId._instances.set(identifier, this);
        this.id = identifier;
    }
}
const IMenuService = createDecorator('menuService');
class MenuRegistryChangeEvent {
    static { this._all = new Map(); }
    static for(id) {
        let value = this._all.get(id);
        if (!value) {
            value = new MenuRegistryChangeEvent(id);
            this._all.set(id, value);
        }
        return value;
    }
    static merge(events) {
        const ids = new Set();
        for (const item of events) {
            if (item instanceof MenuRegistryChangeEvent) {
                ids.add(item.id);
            }
        }
        return ids;
    }
    constructor(id) {
        this.id = id;
        this.has = candidate => candidate === id;
    }
}
const MenuRegistry = new class {
    constructor() {
        this._commands = new Map();
        this._menuItems = new Map();
        this._onDidChangeMenu = new MicrotaskEmitter({
            merge: MenuRegistryChangeEvent.merge
        });
        this.onDidChangeMenu = this._onDidChangeMenu.event;
    }
    addCommand(command) {
        this._commands.set(command.id, command);
        this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(MenuId.CommandPalette));
        return markAsSingleton(toDisposable(() => {
            if (this._commands.delete(command.id)) {
                this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(MenuId.CommandPalette));
            }
        }));
    }
    getCommand(id) {
        return this._commands.get(id);
    }
    getCommands() {
        const map = new Map();
        this._commands.forEach((value, key) => map.set(key, value));
        return map;
    }
    appendMenuItem(id, item) {
        let list = this._menuItems.get(id);
        if (!list) {
            list = new LinkedList();
            this._menuItems.set(id, list);
        }
        const rm = list.push(item);
        this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(id));
        return markAsSingleton(toDisposable(() => {
            rm();
            this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(id));
        }));
    }
    appendMenuItems(items) {
        const result = new DisposableStore();
        for (const { id, item } of items) {
            result.add(this.appendMenuItem(id, item));
        }
        return result;
    }
    getMenuItems(id) {
        let result;
        if (this._menuItems.has(id)) {
            result = [...this._menuItems.get(id)];
        }
        else {
            result = [];
        }
        if (id === MenuId.CommandPalette) {
            // CommandPalette is special because it shows
            // all commands by default
            this._appendImplicitItems(result);
        }
        return result;
    }
    _appendImplicitItems(result) {
        const set = new Set();
        for (const item of result) {
            if (isIMenuItem(item)) {
                set.add(item.command.id);
                if (item.alt) {
                    set.add(item.alt.id);
                }
            }
        }
        this._commands.forEach((command, id) => {
            if (!set.has(id)) {
                result.push({ command });
            }
        });
    }
};
class SubmenuItemAction extends SubmenuAction {
    constructor(item, hideActions, actions) {
        super(`submenuitem.${item.submenu.id}`, typeof item.title === 'string' ? item.title : item.title.value, actions, 'submenu');
        this.item = item;
        this.hideActions = hideActions;
    }
}
// implements IAction, does NOT extend Action, so that no one
// subscribes to events of Action or modified properties
let MenuItemAction = MenuItemAction_1 = class MenuItemAction {
    static label(action, options) {
        return options?.renderShortTitle && action.shortTitle
            ? (typeof action.shortTitle === 'string' ? action.shortTitle : action.shortTitle.value)
            : (typeof action.title === 'string' ? action.title : action.title.value);
    }
    constructor(item, alt, options, hideActions, menuKeybinding, contextKeyService, _commandService) {
        this.hideActions = hideActions;
        this.menuKeybinding = menuKeybinding;
        this._commandService = _commandService;
        this.id = item.id;
        this.label = MenuItemAction_1.label(item, options);
        this.tooltip = (typeof item.tooltip === 'string' ? item.tooltip : item.tooltip?.value) ?? '';
        this.enabled = !item.precondition || contextKeyService.contextMatchesRules(item.precondition);
        this.checked = undefined;
        let icon;
        if (item.toggled) {
            const toggled = (item.toggled.condition ? item.toggled : { condition: item.toggled });
            this.checked = contextKeyService.contextMatchesRules(toggled.condition);
            if (this.checked && toggled.tooltip) {
                this.tooltip = typeof toggled.tooltip === 'string' ? toggled.tooltip : toggled.tooltip.value;
            }
            if (this.checked && ThemeIcon.isThemeIcon(toggled.icon)) {
                icon = toggled.icon;
            }
            if (this.checked && toggled.title) {
                this.label = typeof toggled.title === 'string' ? toggled.title : toggled.title.value;
            }
        }
        if (!icon) {
            icon = ThemeIcon.isThemeIcon(item.icon) ? item.icon : undefined;
        }
        this.item = item;
        this.alt = alt ? new MenuItemAction_1(alt, undefined, options, hideActions, undefined, contextKeyService, _commandService) : undefined;
        this._options = options;
        this.class = icon && ThemeIcon.asClassName(icon);
    }
    run(...args) {
        let runArgs = [];
        if (this._options?.arg) {
            runArgs = [...runArgs, this._options.arg];
        }
        if (this._options?.shouldForwardArgs) {
            runArgs = [...runArgs, ...args];
        }
        return this._commandService.executeCommand(this.id, ...runArgs);
    }
};
MenuItemAction = MenuItemAction_1 = __decorate([
    __param(5, IContextKeyService),
    __param(6, ICommandService)
], MenuItemAction);
class Action2 {
    constructor(desc) {
        this.desc = desc;
    }
}
function registerAction2(ctor) {
    const disposables = []; // not using `DisposableStore` to reduce startup perf cost
    const action = new ctor();
    const { f1, menu, keybinding, ...command } = action.desc;
    if (CommandsRegistry.getCommand(command.id)) {
        throw new Error(`Cannot register two commands with the same id: ${command.id}`);
    }
    // command
    disposables.push(CommandsRegistry.registerCommand({
        id: command.id,
        handler: (accessor, ...args) => action.run(accessor, ...args),
        metadata: command.metadata ?? { description: action.desc.title }
    }));
    // menu
    if (Array.isArray(menu)) {
        for (const item of menu) {
            disposables.push(MenuRegistry.appendMenuItem(item.id, { command: { ...command, precondition: item.precondition === null ? undefined : command.precondition }, ...item }));
        }
    }
    else if (menu) {
        disposables.push(MenuRegistry.appendMenuItem(menu.id, { command: { ...command, precondition: menu.precondition === null ? undefined : command.precondition }, ...menu }));
    }
    if (f1) {
        disposables.push(MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command, when: command.precondition }));
        disposables.push(MenuRegistry.addCommand(command));
    }
    // keybinding
    if (Array.isArray(keybinding)) {
        for (const item of keybinding) {
            disposables.push(KeybindingsRegistry.registerKeybindingRule({
                ...item,
                id: command.id,
                when: command.precondition ? ContextKeyExpr.and(command.precondition, item.when) : item.when
            }));
        }
    }
    else if (keybinding) {
        disposables.push(KeybindingsRegistry.registerKeybindingRule({
            ...keybinding,
            id: command.id,
            when: command.precondition ? ContextKeyExpr.and(command.precondition, keybinding.when) : keybinding.when
        }));
    }
    return {
        dispose() {
            dispose(disposables);
        }
    };
}
//#endregion

export { Action2, IMenuService, MenuId, MenuItemAction, MenuRegistry, SubmenuItemAction, isIMenuItem, isISubmenuItem, registerAction2 };
