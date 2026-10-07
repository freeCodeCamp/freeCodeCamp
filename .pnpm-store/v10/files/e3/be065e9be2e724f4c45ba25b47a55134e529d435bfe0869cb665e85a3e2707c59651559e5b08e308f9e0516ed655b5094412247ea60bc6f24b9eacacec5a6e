import { createPrompt, useMemo, useState, useKeypress, usePrefix, isDownKey, isEnterKey, isUpKey, Separator, makeTheme, ValidationError, } from '@inquirer/core';
import colors from 'yoctocolors-cjs';
const numberRegex = /\d+/;
function isSelectableChoice(choice) {
    return choice != null && !Separator.isSeparator(choice);
}
function normalizeChoices(choices) {
    let index = 0;
    return choices.map((choice) => {
        if (Separator.isSeparator(choice))
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
export default createPrompt((config, done) => {
    const { loop = true } = config;
    const choices = useMemo(() => normalizeChoices(config.choices), [config.choices]);
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState('');
    const [errorMsg, setError] = useState();
    const theme = makeTheme(config.theme);
    const prefix = usePrefix({ status, theme });
    const bounds = useMemo(() => {
        const first = choices.findIndex(isSelectableChoice);
        const last = choices.findLastIndex(isSelectableChoice);
        if (first === -1) {
            throw new ValidationError('[select prompt] No selectable choices. All choices are disabled.');
        }
        return { first, last };
    }, [choices]);
    useKeypress((key, rl) => {
        if (isEnterKey(key)) {
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
                setError(`"${colors.red(value)}" isn't an available option`);
            }
        }
        else if (isUpKey(key) || isDownKey(key)) {
            rl.clearLine(0);
            const [selectedChoice, active] = getSelectedChoice(value, choices);
            if (!selectedChoice) {
                const firstChoice = isDownKey(key)
                    ? choices.find(isSelectableChoice)
                    : choices.findLast(isSelectableChoice);
                setValue(firstChoice.key);
            }
            else if (loop ||
                (isUpKey(key) && active !== bounds.first) ||
                (isDownKey(key) && active !== bounds.last)) {
                const offset = isUpKey(key) ? -1 : 1;
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
        if (Separator.isSeparator(choice)) {
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
export { Separator } from '@inquirer/core';
