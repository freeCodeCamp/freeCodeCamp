"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const core_1 = require("@inquirer/core");
const yoctocolors_cjs_1 = __importDefault(require("yoctocolors-cjs"));
const numberRegex = /\d+/;
function isSelectableChoice(choice) {
    return choice != null && !core_1.Separator.isSeparator(choice);
}
function normalizeChoices(choices) {
    let index = 0;
    return choices.map((choice) => {
        if (core_1.Separator.isSeparator(choice))
            return choice;
        index += 1;
        if (typeof choice === 'string') {
            return {
                value: choice,
                name: choice,
                short: choice,
                key: String(index),
            };
        }
        const name = choice.name ?? String(choice.value);
        return {
            value: choice.value,
            name,
            short: choice.short ?? name,
            key: choice.key ?? String(index),
        };
    });
}
function getSelectedChoice(input, choices) {
    let selectedChoice;
    const selectableChoices = choices.filter(isSelectableChoice);
    // First, try to match by custom key (exact match)
    selectedChoice = selectableChoices.find((choice) => choice.key === input);
    // If no custom key match and input is numeric, try 1-based index
    if (!selectedChoice && numberRegex.test(input)) {
        const answer = Number.parseInt(input, 10) - 1;
        selectedChoice = selectableChoices[answer];
    }
    return selectedChoice
        ? [selectedChoice, choices.indexOf(selectedChoice)]
        : [undefined, undefined];
}
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { loop = true } = config;
    const choices = (0, core_1.useMemo)(() => normalizeChoices(config.choices), [config.choices]);
    const [status, setStatus] = (0, core_1.useState)('idle');
    const [value, setValue] = (0, core_1.useState)('');
    const [errorMsg, setError] = (0, core_1.useState)();
    const theme = (0, core_1.makeTheme)(config.theme);
    const prefix = (0, core_1.usePrefix)({ status, theme });
    const bounds = (0, core_1.useMemo)(() => {
        const first = choices.findIndex(isSelectableChoice);
        const last = choices.findLastIndex(isSelectableChoice);
        if (first === -1) {
            throw new core_1.ValidationError('[select prompt] No selectable choices. All choices are disabled.');
        }
        return { first, last };
    }, [choices]);
    (0, core_1.useKeypress)((key, rl) => {
        if ((0, core_1.isEnterKey)(key)) {
            const [selectedChoice] = getSelectedChoice(value, choices);
            if (isSelectableChoice(selectedChoice)) {
                setValue(selectedChoice.short);
                setStatus('done');
                done(selectedChoice.value);
            }
            else if (value === '') {
                setError('Please input a value');
            }
            else {
                setError(`"${yoctocolors_cjs_1.default.red(value)}" isn't an available option`);
            }
        }
        else if ((0, core_1.isUpKey)(key) || (0, core_1.isDownKey)(key)) {
            rl.clearLine(0);
            const [selectedChoice, active] = getSelectedChoice(value, choices);
            if (!selectedChoice) {
                const firstChoice = (0, core_1.isDownKey)(key)
                    ? choices.find(isSelectableChoice)
                    : choices.findLast(isSelectableChoice);
                setValue(firstChoice.key);
            }
            else if (loop ||
                ((0, core_1.isUpKey)(key) && active !== bounds.first) ||
                ((0, core_1.isDownKey)(key) && active !== bounds.last)) {
                const offset = (0, core_1.isUpKey)(key) ? -1 : 1;
                let next = active;
                do {
                    next = (next + offset + choices.length) % choices.length;
                } while (!isSelectableChoice(choices[next]));
                setValue(choices[next].key);
            }
        }
        else {
            setValue(rl.line);
            setError(undefined);
        }
    });
    const message = theme.style.message(config.message, status);
    if (status === 'done') {
        return `${prefix} ${message} ${theme.style.answer(value)}`;
    }
    const choicesStr = choices
        .map((choice) => {
        if (core_1.Separator.isSeparator(choice)) {
            return ` ${choice.separator}`;
        }
        const line = `  ${choice.key}) ${choice.name}`;
        if (choice.key === value.toLowerCase()) {
            return theme.style.highlight(line);
        }
        return line;
    })
        .join('\n');
    let error = '';
    if (errorMsg) {
        error = theme.style.error(errorMsg);
    }
    return [
        `${prefix} ${message} ${value}`,
        [choicesStr, error].filter(Boolean).join('\n'),
    ];
});
var core_2 = require("@inquirer/core");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return core_2.Separator; } });
