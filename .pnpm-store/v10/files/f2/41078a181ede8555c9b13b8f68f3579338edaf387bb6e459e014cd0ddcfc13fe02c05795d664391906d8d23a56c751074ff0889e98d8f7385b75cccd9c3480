"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@inquirer/core");
function getBooleanValue(value, defaultValue) {
    let answer = defaultValue !== false;
    if (/^(y|yes)/i.test(value))
        answer = true;
    else if (/^(n|no)/i.test(value))
        answer = false;
    return answer;
}
function boolToString(value) {
    return value ? 'Yes' : 'No';
}
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { transformer = boolToString } = config;
    const [status, setStatus] = (0, core_1.useState)('idle');
    const [value, setValue] = (0, core_1.useState)('');
    const theme = (0, core_1.makeTheme)(config.theme);
    const prefix = (0, core_1.usePrefix)({ status, theme });
    (0, core_1.useKeypress)((key, rl) => {
        if (status !== 'idle')
            return;
        if ((0, core_1.isEnterKey)(key)) {
            const answer = getBooleanValue(value, config.default);
            setValue(transformer(answer));
            setStatus('done');
            done(answer);
        }
        else if ((0, core_1.isTabKey)(key)) {
            const answer = boolToString(!getBooleanValue(value, config.default));
            rl.clearLine(0); // Remove the tab character.
            rl.write(answer);
            setValue(answer);
        }
        else {
            setValue(rl.line);
        }
    });
    let formattedValue = value;
    let defaultValue = '';
    if (status === 'done') {
        formattedValue = theme.style.answer(value);
    }
    else {
        defaultValue = ` ${theme.style.defaultAnswer(config.default === false ? 'y/N' : 'Y/n')}`;
    }
    const message = theme.style.message(config.message, status);
    return `${prefix} ${message}${defaultValue} ${formattedValue}`;
});
