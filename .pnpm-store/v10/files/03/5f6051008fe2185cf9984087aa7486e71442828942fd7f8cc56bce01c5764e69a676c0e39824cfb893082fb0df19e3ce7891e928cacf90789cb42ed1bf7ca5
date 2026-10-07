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
const checkboxTheme = {
    icon: {
        checked: yoctocolors_cjs_1.default.green(figures_1.default.circleFilled),
        unchecked: figures_1.default.circle,
        cursor: figures_1.default.pointer,
    },
    style: {
        disabledChoice: (text) => yoctocolors_cjs_1.default.dim(`- ${text}`),
        renderSelectedChoices: (selectedChoices) => selectedChoices.map((choice) => choice.short).join(', '),
        description: (text) => yoctocolors_cjs_1.default.cyan(text),
        keysHelpTip: (keys) => keys
            .map(([key, action]) => `${yoctocolors_cjs_1.default.bold(key)} ${yoctocolors_cjs_1.default.dim(action)}`)
            .join(yoctocolors_cjs_1.default.dim(' • ')),
    },
    helpMode: 'always',
    keybindings: [],
};
function isSelectable(item) {
    return !core_1.Separator.isSeparator(item) && !item.disabled;
}
function isChecked(item) {
    return isSelectable(item) && item.checked;
}
function toggle(item) {
    return isSelectable(item) ? { ...item, checked: !item.checked } : item;
}
function check(checked) {
    return function (item) {
        return isSelectable(item) ? { ...item, checked } : item;
    };
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
                checkedName: choice,
                disabled: false,
                checked: false,
            };
        }
        const name = choice.name ?? String(choice.value);
        const normalizedChoice = {
            value: choice.value,
            name,
            short: choice.short ?? name,
            checkedName: choice.checkedName ?? name,
            disabled: choice.disabled ?? false,
            checked: choice.checked ?? false,
        };
        if (choice.description) {
            normalizedChoice.description = choice.description;
        }
        return normalizedChoice;
    });
}
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { 
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    instructions, pageSize = 7, loop = true, required, validate = () => true, } = config;
    const shortcuts = { all: 'a', invert: 'i', ...config.shortcuts };
    const theme = (0, core_1.makeTheme)(checkboxTheme, config.theme);
    const { keybindings } = theme;
    const [status, setStatus] = (0, core_1.useState)('idle');
    const prefix = (0, core_1.usePrefix)({ status, theme });
    const [items, setItems] = (0, core_1.useState)(normalizeChoices(config.choices));
    const bounds = (0, core_1.useMemo)(() => {
        const first = items.findIndex(isSelectable);
        const last = items.findLastIndex(isSelectable);
        if (first === -1) {
            throw new core_1.ValidationError('[checkbox prompt] No selectable choices. All choices are disabled.');
        }
        return { first, last };
    }, [items]);
    const [active, setActive] = (0, core_1.useState)(bounds.first);
    const [errorMsg, setError] = (0, core_1.useState)();
    (0, core_1.useKeypress)(async (key) => {
        if ((0, core_1.isEnterKey)(key)) {
            const selection = items.filter(isChecked);
            const isValid = await validate([...selection]);
            if (required && !items.some(isChecked)) {
                setError('At least one choice must be selected');
            }
            else if (isValid === true) {
                setStatus('done');
                done(selection.map((choice) => choice.value));
            }
            else {
                setError(isValid || 'You must select a valid value');
            }
        }
        else if ((0, core_1.isUpKey)(key, keybindings) || (0, core_1.isDownKey)(key, keybindings)) {
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
        else if ((0, core_1.isSpaceKey)(key)) {
            setError(undefined);
            setItems(items.map((choice, i) => (i === active ? toggle(choice) : choice)));
        }
        else if (key.name === shortcuts.all) {
            const selectAll = items.some((choice) => isSelectable(choice) && !choice.checked);
            setItems(items.map(check(selectAll)));
        }
        else if (key.name === shortcuts.invert) {
            setItems(items.map(toggle));
        }
        else if ((0, core_1.isNumberKey)(key)) {
            const selectedIndex = Number(key.name) - 1;
            // Find the nth item (ignoring separators)
            let selectableIndex = -1;
            const position = items.findIndex((item) => {
                if (core_1.Separator.isSeparator(item))
                    return false;
                selectableIndex++;
                return selectableIndex === selectedIndex;
            });
            const selectedItem = items[position];
            if (selectedItem && isSelectable(selectedItem)) {
                setActive(position);
                setItems(items.map((choice, i) => (i === position ? toggle(choice) : choice)));
            }
        }
    });
    const message = theme.style.message(config.message, status);
    let description;
    const page = (0, core_1.usePagination)({
        items,
        active,
        renderItem({ item, isActive }) {
            if (core_1.Separator.isSeparator(item)) {
                return ` ${item.separator}`;
            }
            if (item.disabled) {
                const disabledLabel = typeof item.disabled === 'string' ? item.disabled : '(disabled)';
                return theme.style.disabledChoice(`${item.name} ${disabledLabel}`);
            }
            if (isActive) {
                description = item.description;
            }
            const checkbox = item.checked ? theme.icon.checked : theme.icon.unchecked;
            const name = item.checked ? item.checkedName : item.name;
            const color = isActive ? theme.style.highlight : (x) => x;
            const cursor = isActive ? theme.icon.cursor : ' ';
            return color(`${cursor}${checkbox} ${name}`);
        },
        pageSize,
        loop,
    });
    if (status === 'done') {
        const selection = items.filter(isChecked);
        const answer = theme.style.answer(theme.style.renderSelectedChoices(selection, items));
        return [prefix, message, answer].filter(Boolean).join(' ');
    }
    let helpLine;
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    if (theme.helpMode !== 'never' && instructions !== false) {
        if (typeof instructions === 'string') {
            helpLine = instructions;
        }
        else {
            const keys = [
                ['↑↓', 'navigate'],
                ['space', 'select'],
            ];
            if (shortcuts.all)
                keys.push([shortcuts.all, 'all']);
            if (shortcuts.invert)
                keys.push([shortcuts.invert, 'invert']);
            keys.push(['⏎', 'submit']);
            helpLine = theme.style.keysHelpTip(keys);
        }
    }
    const lines = [
        [prefix, message].filter(Boolean).join(' '),
        page,
        ' ',
        description ? theme.style.description(description) : '',
        errorMsg ? theme.style.error(errorMsg) : '',
        helpLine,
    ]
        .filter(Boolean)
        .join('\n')
        .trimEnd();
    return `${lines}${ansi_1.cursorHide}`;
});
var core_2 = require("@inquirer/core");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return core_2.Separator; } });
