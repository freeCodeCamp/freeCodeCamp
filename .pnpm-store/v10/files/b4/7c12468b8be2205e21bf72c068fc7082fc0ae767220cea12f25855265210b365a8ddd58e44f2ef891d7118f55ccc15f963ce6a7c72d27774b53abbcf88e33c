"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const core_1 = require("@inquirer/core");
const ansi_1 = require("@inquirer/ansi");
const yoctocolors_cjs_1 = __importDefault(require("yoctocolors-cjs"));
const figures_1 = __importDefault(require("@inquirer/figures"));
const selectTheme = {
    icon: { cursor: figures_1.default.pointer },
    style: {
        disabled: (text) => yoctocolors_cjs_1.default.dim(`- ${text}`),
        description: (text) => yoctocolors_cjs_1.default.cyan(text),
        keysHelpTip: (keys) => keys
            .map(([key, action]) => `${yoctocolors_cjs_1.default.bold(key)} ${yoctocolors_cjs_1.default.dim(action)}`)
            .join(yoctocolors_cjs_1.default.dim(' • ')),
    },
    helpMode: 'always',
    indexMode: 'hidden',
    keybindings: [],
};
function isSelectable(item) {
    return !core_1.Separator.isSeparator(item) && !item.disabled;
}
function normalizeChoices(choices) {
    return choices.map((choice) => {
        if (core_1.Separator.isSeparator(choice))
            return choice;
        if (typeof choice === 'string') {
            return {
                value: choice,
                name: choice,
                short: choice,
                disabled: false,
            };
        }
        const name = choice.name ?? String(choice.value);
        const normalizedChoice = {
            value: choice.value,
            name,
            short: choice.short ?? name,
            disabled: choice.disabled ?? false,
        };
        if (choice.description) {
            normalizedChoice.description = choice.description;
        }
        return normalizedChoice;
    });
}
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { loop = true, pageSize = 7 } = config;
    const theme = (0, core_1.makeTheme)(selectTheme, config.theme);
    const { keybindings } = theme;
    const [status, setStatus] = (0, core_1.useState)('idle');
    const prefix = (0, core_1.usePrefix)({ status, theme });
    const searchTimeoutRef = (0, core_1.useRef)();
    // Vim keybindings (j/k) conflict with typing those letters in search,
    // so search must be disabled when vim bindings are enabled
    const searchEnabled = !keybindings.includes('vim');
    const items = (0, core_1.useMemo)(() => normalizeChoices(config.choices), [config.choices]);
    const bounds = (0, core_1.useMemo)(() => {
        const first = items.findIndex(isSelectable);
        const last = items.findLastIndex(isSelectable);
        if (first === -1) {
            throw new core_1.ValidationError('[select prompt] No selectable choices. All choices are disabled.');
        }
        return { first, last };
    }, [items]);
    const defaultItemIndex = (0, core_1.useMemo)(() => {
        if (!('default' in config))
            return -1;
        return items.findIndex((item) => isSelectable(item) && item.value === config.default);
    }, [config.default, items]);
    const [active, setActive] = (0, core_1.useState)(defaultItemIndex === -1 ? bounds.first : defaultItemIndex);
    // Safe to assume the cursor position always point to a Choice.
    const selectedChoice = items[active];
    (0, core_1.useKeypress)((key, rl) => {
        clearTimeout(searchTimeoutRef.current);
        if ((0, core_1.isEnterKey)(key)) {
            setStatus('done');
            done(selectedChoice.value);
        }
        else if ((0, core_1.isUpKey)(key, keybindings) || (0, core_1.isDownKey)(key, keybindings)) {
            rl.clearLine(0);
            if (loop ||
                ((0, core_1.isUpKey)(key, keybindings) && active !== bounds.first) ||
                ((0, core_1.isDownKey)(key, keybindings) && active !== bounds.last)) {
                const offset = (0, core_1.isUpKey)(key, keybindings) ? -1 : 1;
                let next = active;
                do {
                    next = (next + offset + items.length) % items.length;
                } while (!isSelectable(items[next]));
                setActive(next);
            }
        }
        else if ((0, core_1.isNumberKey)(key) && !Number.isNaN(Number(rl.line))) {
            const selectedIndex = Number(rl.line) - 1;
            // Find the nth item (ignoring separators)
            let selectableIndex = -1;
            const position = items.findIndex((item) => {
                if (core_1.Separator.isSeparator(item))
                    return false;
                selectableIndex++;
                return selectableIndex === selectedIndex;
            });
            const item = items[position];
            if (item != null && isSelectable(item)) {
                setActive(position);
            }
            searchTimeoutRef.current = setTimeout(() => {
                rl.clearLine(0);
            }, 700);
        }
        else if ((0, core_1.isBackspaceKey)(key)) {
            rl.clearLine(0);
        }
        else if (searchEnabled) {
            const searchTerm = rl.line.toLowerCase();
            const matchIndex = items.findIndex((item) => {
                if (core_1.Separator.isSeparator(item) || !isSelectable(item))
                    return false;
                return item.name.toLowerCase().startsWith(searchTerm);
            });
            if (matchIndex !== -1) {
                setActive(matchIndex);
            }
            searchTimeoutRef.current = setTimeout(() => {
                rl.clearLine(0);
            }, 700);
        }
    });
    (0, core_1.useEffect)(() => () => {
        clearTimeout(searchTimeoutRef.current);
    }, []);
    const message = theme.style.message(config.message, status);
    let helpLine;
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    if (theme.helpMode !== 'never') {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        if (config.instructions) {
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            const { pager, navigation } = config.instructions;
            helpLine = theme.style.help(items.length > pageSize ? pager : navigation);
        }
        else {
            helpLine = theme.style.keysHelpTip([
                ['↑↓', 'navigate'],
                ['⏎', 'select'],
            ]);
        }
    }
    let separatorCount = 0;
    const page = (0, core_1.usePagination)({
        items,
        active,
        renderItem({ item, isActive, index }) {
            if (core_1.Separator.isSeparator(item)) {
                separatorCount++;
                return ` ${item.separator}`;
            }
            const indexLabel = theme.indexMode === 'number' ? `${index + 1 - separatorCount}. ` : '';
            if (item.disabled) {
                const disabledLabel = typeof item.disabled === 'string' ? item.disabled : '(disabled)';
                return theme.style.disabled(`${indexLabel}${item.name} ${disabledLabel}`);
            }
            const color = isActive ? theme.style.highlight : (x) => x;
            const cursor = isActive ? theme.icon.cursor : ` `;
            return color(`${cursor} ${indexLabel}${item.name}`);
        },
        pageSize,
        loop,
    });
    if (status === 'done') {
        return [prefix, message, theme.style.answer(selectedChoice.short)]
            .filter(Boolean)
            .join(' ');
    }
    const { description } = selectedChoice;
    const lines = [
        [prefix, message].filter(Boolean).join(' '),
        page,
        ' ',
        description ? theme.style.description(description) : '',
        helpLine,
    ]
        .filter(Boolean)
        .join('\n')
        .trimEnd();
    return `${lines}${ansi_1.cursorHide}`;
});
var core_2 = require("@inquirer/core");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return core_2.Separator; } });
