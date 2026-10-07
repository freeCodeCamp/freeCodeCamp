"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrefix = usePrefix;
const use_state_ts_1 = require("./use-state.js");
const use_effect_ts_1 = require("./use-effect.js");
const make_theme_ts_1 = require("./make-theme.js");
function usePrefix({ status = 'idle', theme, }) {
    const [showLoader, setShowLoader] = (0, use_state_ts_1.useState)(false);
    const [tick, setTick] = (0, use_state_ts_1.useState)(0);
    const { prefix, spinner } = (0, make_theme_ts_1.makeTheme)(theme);
    (0, use_effect_ts_1.useEffect)(() => {
        if (status === 'loading') {
            let tickInterval;
            let inc = -1;
            // Delay displaying spinner by 300ms, to avoid flickering
            const delayTimeout = setTimeout(() => {
                setShowLoader(true);
                tickInterval = setInterval(() => {
                    inc = inc + 1;
                    setTick(inc % spinner.frames.length);
                }, spinner.interval);
            }, 300);
            return () => {
                clearTimeout(delayTimeout);
                clearInterval(tickInterval);
            };
        }
        else {
            setShowLoader(false);
        }
    }, [status]);
    if (showLoader) {
        return spinner.frames[tick];
    }
    // There's a delay before we show the loader. So we want to ignore `loading` here, and pass idle instead.
    const iconName = status === 'loading' ? 'idle' : status;
    return typeof prefix === 'string' ? prefix : (prefix[iconName] ?? prefix['idle']);
}
