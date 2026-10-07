"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@inquirer/core");
function isStepOf(value, step, min) {
    const valuePow = value * Math.pow(10, 6);
    const stepPow = step * Math.pow(10, 6);
    const minPow = min * Math.pow(10, 6);
    return (valuePow - (Number.isFinite(min) ? minPow : 0)) % stepPow === 0;
}
function validateNumber(value, { min, max, step, }) {
    if (value == null || Number.isNaN(value)) {
        return false;
    }
    else if (value < min || value > max) {
        return `Value must be between ${min} and ${max}`;
    }
    else if (step !== 'any' && !isStepOf(value, step, min)) {
        return `Value must be a multiple of ${step}${Number.isFinite(min) ? ` starting from ${min}` : ''}`;
    }
    return true;
}
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { validate = () => true, min = -Infinity, max = Infinity, step = 1, required = false, } = config;
    const theme = (0, core_1.makeTheme)(config.theme);
    const [status, setStatus] = (0, core_1.useState)('idle');
    const [value, setValue] = (0, core_1.useState)(''); // store the input value as string and convert to number on "Enter"
    // Ignore default if not valid.
    const validDefault = validateNumber(config.default, { min, max, step }) === true
        ? config.default?.toString()
        : undefined;
    const [defaultValue = '', setDefaultValue] = (0, core_1.useState)(validDefault);
    const [errorMsg, setError] = (0, core_1.useState)();
    const prefix = (0, core_1.usePrefix)({ status, theme });
    (0, core_1.useKeypress)(async (key, rl) => {
        // Ignore keypress while our prompt is doing other processing.
        if (status !== 'idle') {
            return;
        }
        if ((0, core_1.isEnterKey)(key)) {
            const input = value || defaultValue;
            const answer = input === '' ? undefined : Number(input);
            setStatus('loading');
            let isValid = true;
            if (required || answer != null) {
                isValid = validateNumber(answer, { min, max, step });
            }
            if (isValid === true) {
                isValid = await validate(answer);
            }
            if (isValid === true) {
                setValue(String(answer ?? ''));
                setStatus('done');
                done(answer);
            }
            else {
                // Reset the readline line value to the previous value. On line event, the value
                // get cleared, forcing the user to re-enter the value instead of fixing it.
                rl.write(value);
                setError(isValid || 'You must provide a valid numeric value');
                setStatus('idle');
            }
        }
        else if ((0, core_1.isBackspaceKey)(key) && !value) {
            setDefaultValue(undefined);
        }
        else if ((0, core_1.isTabKey)(key) && !value) {
            setDefaultValue(undefined);
            rl.clearLine(0); // Remove the tab character.
            rl.write(defaultValue);
            setValue(defaultValue);
        }
        else {
            setValue(rl.line);
            setError(undefined);
        }
    });
    const message = theme.style.message(config.message, status);
    let formattedValue = value;
    if (status === 'done') {
        formattedValue = theme.style.answer(value);
    }
    let defaultStr;
    if (defaultValue && status !== 'done' && !value) {
        defaultStr = theme.style.defaultAnswer(defaultValue);
    }
    let error = '';
    if (errorMsg) {
        error = theme.style.error(errorMsg);
    }
    return [
        [prefix, message, defaultStr, formattedValue]
            .filter((v) => v !== undefined)
            .join(' '),
        error,
    ];
});
