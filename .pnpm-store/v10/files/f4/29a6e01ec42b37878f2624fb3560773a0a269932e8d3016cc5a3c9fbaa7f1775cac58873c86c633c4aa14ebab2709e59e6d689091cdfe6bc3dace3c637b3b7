"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const external_editor_1 = require("@inquirer/external-editor");
const core_1 = require("@inquirer/core");
const editorTheme = {
    validationFailureMode: 'keep',
};
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { waitForUserInput = true, file: { postfix = config.postfix ?? '.txt', ...fileProps } = {}, validate = () => true, } = config;
    const theme = (0, core_1.makeTheme)(editorTheme, config.theme);
    const [status, setStatus] = (0, core_1.useState)('idle');
    const [value = '', setValue] = (0, core_1.useState)(config.default);
    const [errorMsg, setError] = (0, core_1.useState)();
    const prefix = (0, core_1.usePrefix)({ status, theme });
    function startEditor(rl) {
        rl.pause();
        const editCallback = async (error, answer) => {
            rl.resume();
            if (error) {
                setError(error.toString());
            }
            else {
                setStatus('loading');
                const finalAnswer = answer ?? '';
                const isValid = await validate(finalAnswer);
                if (isValid === true) {
                    setError(undefined);
                    setStatus('done');
                    done(finalAnswer);
                }
                else {
                    if (theme.validationFailureMode === 'clear') {
                        setValue(config.default);
                    }
                    else {
                        setValue(finalAnswer);
                    }
                    setError(isValid || 'You must provide a valid value');
                    setStatus('idle');
                }
            }
        };
        (0, external_editor_1.editAsync)(value, (error, answer) => void editCallback(error, answer), {
            postfix,
            ...fileProps,
        });
    }
    (0, core_1.useEffect)((rl) => {
        if (!waitForUserInput) {
            startEditor(rl);
        }
    }, []);
    (0, core_1.useKeypress)((key, rl) => {
        // Ignore keypress while our prompt is doing other processing.
        if (status !== 'idle') {
            return;
        }
        if ((0, core_1.isEnterKey)(key)) {
            startEditor(rl);
        }
    });
    const message = theme.style.message(config.message, status);
    let helpTip = '';
    if (status === 'loading') {
        helpTip = theme.style.help('Received');
    }
    else if (status === 'idle') {
        const enterKey = theme.style.key('enter');
        helpTip = theme.style.help(`Press ${enterKey} to launch your preferred editor.`);
    }
    let error = '';
    if (errorMsg) {
        error = theme.style.error(errorMsg);
    }
    return [[prefix, message, helpTip].filter(Boolean).join(' '), error];
});
