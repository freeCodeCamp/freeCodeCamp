"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const core_1 = require("@inquirer/core");
const yoctocolors_cjs_1 = __importDefault(require("yoctocolors-cjs"));
function normalizeChoices(choices) {
    return choices.map((choice) => {
        if (core_1.Separator.isSeparator(choice)) {
            return choice;
        }
        const name = 'name' in choice ? choice.name : String(choice.value);
        const value = 'value' in choice ? choice.value : name;
        return {
            value: value,
            name,
            key: choice.key.toLowerCase(),
        };
    });
}
const helpChoice = {
    key: 'h',
    name: 'Help, list all options',
    value: undefined,
};
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { default: defaultKey = 'h' } = config;
    const choices = (0, core_1.useMemo)(() => normalizeChoices(config.choices), [config.choices]);
    const [status, setStatus] = (0, core_1.useState)('idle');
    const [value, setValue] = (0, core_1.useState)('');
    const [expanded, setExpanded] = (0, core_1.useState)(config.expanded ?? false);
    const [errorMsg, setError] = (0, core_1.useState)();
    const theme = (0, core_1.makeTheme)(config.theme);
    const prefix = (0, core_1.usePrefix)({ theme, status });
    (0, core_1.useKeypress)((event, rl) => {
        if ((0, core_1.isEnterKey)(event)) {
            const answer = (value || defaultKey).toLowerCase();
            if (answer === 'h' && !expanded) {
                setExpanded(true);
            }
            else {
                const selectedChoice = choices.find((choice) => !core_1.Separator.isSeparator(choice) && choice.key === answer);
                if (selectedChoice) {
                    setStatus('done');
                    // Set the value as we might've selected the default one.
                    setValue(answer);
                    done(selectedChoice.value);
                }
                else if (value === '') {
                    setError('Please input a value');
                }
                else {
                    setError(`"${yoctocolors_cjs_1.default.red(value)}" isn't an available option`);
                }
            }
        }
        else {
            setValue(rl.line);
            setError(undefined);
        }
    });
    const message = theme.style.message(config.message, status);
    if (status === 'done') {
        // If the prompt is done, it's safe to assume there is a selected value.
        const selectedChoice = choices.find((choice) => !core_1.Separator.isSeparator(choice) && choice.key === value.toLowerCase());
        return `${prefix} ${message} ${theme.style.answer(selectedChoice.name)}`;
    }
    const allChoices = expanded ? choices : [...choices, helpChoice];
    // Collapsed display style
    let longChoices = '';
    let shortChoices = allChoices
        .map((choice) => {
        if (core_1.Separator.isSeparator(choice))
            return '';
        if (choice.key === defaultKey) {
            return choice.key.toUpperCase();
        }
        return choice.key;
    })
        .join('');
    shortChoices = ` ${theme.style.defaultAnswer(shortChoices)}`;
    // Expanded display style
    if (expanded) {
        shortChoices = '';
        longChoices = allChoices
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
    }
    let helpTip = '';
    const currentOption = choices.find((choice) => !core_1.Separator.isSeparator(choice) && choice.key === value.toLowerCase());
    if (currentOption) {
        helpTip = `${yoctocolors_cjs_1.default.cyan('>>')} ${currentOption.name}`;
    }
    let error = '';
    if (errorMsg) {
        error = theme.style.error(errorMsg);
    }
    return [
        `${prefix} ${message}${shortChoices} ${value}`,
        [longChoices, helpTip, error].filter(Boolean).join('\n'),
    ];
});
var core_2 = require("@inquirer/core");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return core_2.Separator; } });
