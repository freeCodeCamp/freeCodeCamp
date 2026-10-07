"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const core_1 = require("@inquirer/core");
const yoctocolors_cjs_1 = __importDefault(require("yoctocolors-cjs"));
const figures_1 = __importDefault(require("@inquirer/figures"));
const searchTheme = {
    icon: { cursor: figures_1.default.pointer },
    style: {
        disabled: (text) => yoctocolors_cjs_1.default.dim(`- ${text}`),
        searchTerm: (text) => yoctocolors_cjs_1.default.cyan(text),
        description: (text) => yoctocolors_cjs_1.default.cyan(text),
        keysHelpTip: (keys) => keys
            .map(([key, action]) => `${yoctocolors_cjs_1.default.bold(key)} ${yoctocolors_cjs_1.default.dim(action)}`)
            .join(yoctocolors_cjs_1.default.dim(' • ')),
    },
    helpMode: 'always',
};
function isSelectable(item) {
    return !core_1.Separator.isSeparator(item) && !item.disabled;
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
                disabled: false,
            };
        }
        const name = choice.name ?? String(choice.value);
        const normalizedChoice = {
            value: choice.value,
            name,
            short: choice.short ?? name,
            disabled: choice.disabled ?? false,
        };
        if (choice.description) {
            normalizedChoice.description = choice.description;
        }
        return normalizedChoice;
    });
}
exports.default = (0, core_1.createPrompt)((config, done) => {
    const { pageSize = 7, validate = () => true } = config;
    const theme = (0, core_1.makeTheme)(searchTheme, config.theme);
    const [status, setStatus] = (0, core_1.useState)('loading');
    const [searchTerm, setSearchTerm] = (0, core_1.useState)('');
    const [searchResults, setSearchResults] = (0, core_1.useState)([]);
    const [searchError, setSearchError] = (0, core_1.useState)();
    const prefix = (0, core_1.usePrefix)({ status, theme });
    const bounds = (0, core_1.useMemo)(() => {
        const first = searchResults.findIndex(isSelectable);
        const last = searchResults.findLastIndex(isSelectable);
        return { first, last };
    }, [searchResults]);
    const [active = bounds.first, setActive] = (0, core_1.useState)();
    (0, core_1.useEffect)(() => {
        const controller = new AbortController();
        setStatus('loading');
        setSearchError(undefined);
        const fetchResults = async () => {
            try {
                const results = await config.source(searchTerm || undefined, {
                    signal: controller.signal,
                });
                if (!controller.signal.aborted) {
                    // Reset the pointer
                    setActive(undefined);
                    setSearchError(undefined);
                    setSearchResults(normalizeChoices(results));
                    setStatus('idle');
                }
            }
            catch (error) {
                if (!controller.signal.aborted && error instanceof Error) {
                    setSearchError(error.message);
                }
            }
        };
        void fetchResults();
        return () => {
            controller.abort();
        };
    }, [searchTerm]);
    // Safe to assume the cursor position never points to a Separator.
    const selectedChoice = searchResults[active];
    (0, core_1.useKeypress)(async (key, rl) => {
        if ((0, core_1.isEnterKey)(key)) {
            if (selectedChoice) {
                setStatus('loading');
                const isValid = await validate(selectedChoice.value);
                setStatus('idle');
                if (isValid === true) {
                    setStatus('done');
                    done(selectedChoice.value);
                }
                else if (selectedChoice.name === searchTerm) {
                    setSearchError(isValid || 'You must provide a valid value');
                }
                else {
                    // Reset line with new search term
                    rl.write(selectedChoice.name);
                    setSearchTerm(selectedChoice.name);
                }
            }
            else {
                // Reset the readline line value to the previous value. On line event, the value
                // get cleared, forcing the user to re-enter the value instead of fixing it.
                rl.write(searchTerm);
            }
        }
        else if ((0, core_1.isTabKey)(key) && selectedChoice) {
            rl.clearLine(0); // Remove the tab character.
            rl.write(selectedChoice.name);
            setSearchTerm(selectedChoice.name);
        }
        else if (status !== 'loading' && ((0, core_1.isUpKey)(key) || (0, core_1.isDownKey)(key))) {
            rl.clearLine(0);
            if (((0, core_1.isUpKey)(key) && active !== bounds.first) ||
                ((0, core_1.isDownKey)(key) && active !== bounds.last)) {
                const offset = (0, core_1.isUpKey)(key) ? -1 : 1;
                let next = active;
                do {
                    next = (next + offset + searchResults.length) % searchResults.length;
                } while (!isSelectable(searchResults[next]));
                setActive(next);
            }
        }
        else {
            setSearchTerm(rl.line);
        }
    });
    const message = theme.style.message(config.message, status);
    let helpLine;
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    if (theme.helpMode !== 'never') {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        if (config.instructions) {
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            const { pager, navigation } = config.instructions;
            helpLine = theme.style.help(searchResults.length > pageSize ? pager : navigation);
        }
        else {
            helpLine = theme.style.keysHelpTip([
                ['↑↓', 'navigate'],
                ['⏎', 'select'],
            ]);
        }
    }
    const page = (0, core_1.usePagination)({
        items: searchResults,
        active,
        renderItem({ item, isActive }) {
            if (core_1.Separator.isSeparator(item)) {
                return ` ${item.separator}`;
            }
            if (item.disabled) {
                const disabledLabel = typeof item.disabled === 'string' ? item.disabled : '(disabled)';
                return theme.style.disabled(`${item.name} ${disabledLabel}`);
            }
            const color = isActive ? theme.style.highlight : (x) => x;
            const cursor = isActive ? theme.icon.cursor : ` `;
            return color(`${cursor} ${item.name}`);
        },
        pageSize,
        loop: false,
    });
    let error;
    if (searchError) {
        error = theme.style.error(searchError);
    }
    else if (searchResults.length === 0 && searchTerm !== '' && status === 'idle') {
        error = theme.style.error('No results found');
    }
    let searchStr;
    if (status === 'done' && selectedChoice) {
        return [prefix, message, theme.style.answer(selectedChoice.short)]
            .filter(Boolean)
            .join(' ')
            .trimEnd();
    }
    else {
        searchStr = theme.style.searchTerm(searchTerm);
    }
    const description = selectedChoice?.description;
    const header = [prefix, message, searchStr].filter(Boolean).join(' ').trimEnd();
    const body = [
        error ?? page,
        ' ',
        description ? theme.style.description(description) : '',
        helpLine,
    ]
        .filter(Boolean)
        .join('\n')
        .trimEnd();
    return [header, body];
});
var core_2 = require("@inquirer/core");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return core_2.Separator; } });
