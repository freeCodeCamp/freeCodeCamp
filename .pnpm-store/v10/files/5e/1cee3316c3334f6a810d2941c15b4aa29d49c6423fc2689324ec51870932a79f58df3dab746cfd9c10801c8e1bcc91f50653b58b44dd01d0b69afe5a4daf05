import { createPrompt, useMemo, useState, useKeypress, usePrefix, isEnterKey, makeTheme, Separator, } from '@inquirer/core';
import colors from 'yoctocolors-cjs';
function normalizeChoices(choices) {
    return choices.map((choice) => {
        if (Separator.isSeparator(choice)) {
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
export default createPrompt((config, done) => {
    const { default: defaultKey = 'h' } = config;
    const choices = useMemo(() => normalizeChoices(config.choices), [config.choices]);
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState('');
    const [expanded, setExpanded] = useState(config.expanded ?? false);
    const [errorMsg, setError] = useState();
    const theme = makeTheme(config.theme);
    const prefix = usePrefix({ theme, status });
    useKeypress((event, rl) => {
        if (isEnterKey(event)) {
            const answer = (value || defaultKey).toLowerCase();
            if (answer === 'h' && !expanded) {
                setExpanded(true);
            }
            else {
                const selectedChoice = choices.find((choice) => !Separator.isSeparator(choice) && choice.key === answer);
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
                    setError(`"${colors.red(value)}" isn't an available option`);
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
        const selectedChoice = choices.find((choice) => !Separator.isSeparator(choice) && choice.key === value.toLowerCase());
        return `${prefix} ${message} ${theme.style.answer(selectedChoice.name)}`;
    }
    const allChoices = expanded ? choices : [...choices, helpChoice];
    // Collapsed display style
    let longChoices = '';
    let shortChoices = allChoices
        .map((choice) => {
        if (Separator.isSeparator(choice))
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
    }
    let helpTip = '';
    const currentOption = choices.find((choice) => !Separator.isSeparator(choice) && choice.key === value.toLowerCase());
    if (currentOption) {
        helpTip = `${colors.cyan('>>')} ${currentOption.name}`;
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
export { Separator } from '@inquirer/core';
