"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@inquirer/core");
const ansi_1 = require("@inquirer/ansi");
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { validate = () => true } = config;
    const theme = (0, core_1.makeTheme)(config.theme);
    const [status, setStatus] = (0, core_1.useState)('idle');
    const [errorMsg, setError] = (0, core_1.useState)();
    const [value, setValue] = (0, core_1.useState)('');
    const prefix = (0, core_1.usePrefix)({ status, theme });
    (0, core_1.useKeypress)(async (key, rl) => {
        // Ignore keypress while our prompt is doing other processing.
        if (status !== 'idle') {
            return;
        }
        if ((0, core_1.isEnterKey)(key)) {
            const answer = value;
            setStatus('loading');
            const isValid = await validate(answer);
            if (isValid === true) {
                setValue(answer);
                setStatus('done');
                done(answer);
            }
            else {
                // Reset the readline line value to the previous value. On line event, the value
                // get cleared, forcing the user to re-enter the value instead of fixing it.
                rl.write(value);
                setError(isValid || 'You must provide a valid value');
                setStatus('idle');
            }
        }
        else {
            setValue(rl.line);
            setError(undefined);
        }
    });
    const message = theme.style.message(config.message, status);
    let formattedValue = '';
    let helpTip;
    if (config.mask) {
        const maskChar = typeof config.mask === 'string' ? config.mask : '*';
        formattedValue = maskChar.repeat(value.length);
    }
    else if (status !== 'done') {
        helpTip = `${theme.style.help('[input is masked]')}${ansi_1.cursorHide}`;
    }
    if (status === 'done') {
        formattedValue = theme.style.answer(formattedValue);
    }
    let error = '';
    if (errorMsg) {
        error = theme.style.error(errorMsg);
    }
    return [[prefix, message, config.mask ? formattedValue : helpTip].join(' '), error];
});
