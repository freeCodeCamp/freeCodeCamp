import { createPrompt, useState, useKeypress, usePrefix, usePagination, useMemo, makeTheme, isUpKey, isDownKey, isSpaceKey, isNumberKey, isEnterKey, ValidationError, Separator, } from '@inquirer/core';
import { cursorHide } from '@inquirer/ansi';
import colors from 'yoctocolors-cjs';
import figures from '@inquirer/figures';
const checkboxTheme = {
    icon: {
        checked: colors.green(figures.circleFilled),
        unchecked: figures.circle,
        cursor: figures.pointer,
    },
    style: {
        disabledChoice: (text) => colors.dim(`- ${text}`),
        renderSelectedChoices: (selectedChoices) => selectedChoices.map((choice) => choice.short).join(', '),
        description: (text) => colors.cyan(text),
        keysHelpTip: (keys) => keys
            .map(([key, action]) => `${colors.bold(key)} ${colors.dim(action)}`)
            .join(colors.dim(' • ')),
    },
    helpMode: 'always',
    keybindings: [],
};
function isSelectable(item) {
    return !Separator.isSeparator(item) && !item.disabled;
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
        if (Separator.isSeparator(choice))
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
export default createPrompt((config, done) => {
    const { 
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    instructions, pageSize = 7, loop = true, required, validate = () => true, } = config;
    const shortcuts = { all: 'a', invert: 'i', ...config.shortcuts };
    const theme = makeTheme(checkboxTheme, config.theme);
    const { keybindings } = theme;
    const [status, setStatus] = useState('idle');
    const prefix = usePrefix({ status, theme });
    const [items, setItems] = useState(normalizeChoices(config.choices));
    const bounds = useMemo(() => {
        const first = items.findIndex(isSelectable);
        const last = items.findLastIndex(isSelectable);
        if (first === -1) {
            throw new ValidationError('[checkbox prompt] No selectable choices. All choices are disabled.');
        }
        return { first, last };
    }, [items]);
    const [active, setActive] = useState(bounds.first);
    const [errorMsg, setError] = useState();
    useKeypress(async (key) => {
        if (isEnterKey(key)) {
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
        else if (isUpKey(key, keybindings) || isDownKey(key, keybindings)) {
            if (loop ||
                (isUpKey(key, keybindings) && active !== bounds.first) ||
                (isDownKey(key, keybindings) && active !== bounds.last)) {
                const offset = isUpKey(key, keybindings) ? -1 : 1;
                let next = active;
                do {
                    next = (next + offset + items.length) % items.length;
                } while (!isSelectable(items[next]));
                setActive(next);
            }
        }
        else if (isSpaceKey(key)) {
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
        else if (isNumberKey(key)) {
            const selectedIndex = Number(key.name) - 1;
            // Find the nth item (ignoring separators)
            let selectableIndex = -1;
            const position = items.findIndex((item) => {
                if (Separator.isSeparator(item))
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
    const page = usePagination({
        items,
        active,
        renderItem({ item, isActive }) {
            if (Separator.isSeparator(item)) {
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
    return `${lines}${cursorHide}`;
});
export { Separator } from '@inquirer/core';
